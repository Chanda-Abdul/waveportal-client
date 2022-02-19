import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import "./App.css";
import abi from "./utils/WavePortal.json";
import Loader from "./components/Loader";
import { Input, Table } from "semantic-ui-react";

export default function App() {
  const [currentAccount, setCurrentAccount] = useState("");
  const [mining, setMining] = useState(false);
  //duplicated?
  const [waveCount, setWaveCount] = useState(0);
  const [allWaves, setAllWaves] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const contractAddress = "0xDB323F888C756D86c19fAf2230336c98c4104AB8";

  const contractABI = abi.abi;

  const handleMessage = (event) => {
    setNewMessage(event.target.value);
  };

  const getAllWaves = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        const waves = await wavePortalContract.getAllWaves();

        let wavesCleaned = [];
        waves.forEach((wave) => {
          wavesCleaned.unshift({
            address: wave.waver,
            timestamp: new Date(wave.timestamp * 1000),
            message: wave.message,
          });
        });
        setAllWaves(wavesCleaned);
      } else {
        console.log("Ethereum object does not exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Listen in for emitter events!
   */
  useEffect(() => {
    let wavePortalContract;

    const onNewWave = (from, timestamp, message) => {
      console.log("NewWave", from, timestamp, message);
      setAllWaves((prevState) => [
        ...prevState,
        {
          address: from,
          timestamp: new Date(timestamp * 1000),
          message: message,
        },
      ]);
    };
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      wavePortalContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
      wavePortalContract.on("NewWave", onNewWave);
    }

    return () => {
      if (wavePortalContract) {
        wavePortalContract.off("NewWave", onNewWave);
      }
    };
  }, []);

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        getAllWaves();
        setCurrentAccount(account);
      } else {
        console.log("No authorized account found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Implement your connectWallet method here
   */
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const wave = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        let count = await wavePortalContract.getTotalWaves();
        console.log("Retrieved total wave count...", count.toNumber());

        /*
         * Execute the actual wave from your smart contract
         */
        const waveTxn = await wavePortalContract.wave(newMessage, {
          gasLimit: 300000,
        });
        console.log("Mining...", waveTxn.hash);
        setMining(true);

        await waveTxn.wait();
        console.log("Mined -- ", waveTxn.hash);
        setMining(false);
        count = await wavePortalContract.getTotalWaves();
        setWaveCount(count.toNumber());
        console.log("Retrieved total wave count...", count.toNumber());
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <div className="contentContainer">
      <div className="mainContainer">
        {!mining && (
          <div className="dataContainer">
            <div className="header">👋 Hey there!</div>

            <div className="bio">
              I am <span className="name">Chanda</span>, and I like{" "}
              <span className="aboutMe">front-end development</span> and{" "}
              <span className="aboutMe">web3</span>, so that's pretty cool
              right? Connect your Ethereum wallet and{" "}
              <span className="doTheWave">wave at me</span>!!!
            </div>
            {/*
             * If there is no currentAccount render this button
             */}
            {!currentAccount && (
              <button className="waveButton" onClick={connectWallet}>
                Connect Wallet
              </button>
            )}

            {currentAccount && (
              <>
                <Input
                  focus
                  value={newMessage}
                  onChange={handleMessage}
                  placeholder="Enter your message here and send me a wave..."
                />

                <button className="waveButton" onClick={wave}>
                  Wave at Me
                </button>
              </>
            )}

            {waveCount > 0 && (
              <div className="waveDisplay">
                Retrieved total wave count of{" "}
                <span className="waveNumber">{waveCount}</span>
              </div>
            )}
            <div>
              {allWaves.map((wave, index) => {
                return (
                  <>
                    <Table
                      singleLine
                      inverted
                      key={index}
                      style={{
                        marginTop: "16px",
                        padding: "1px",
                      }}
                    >
                      <Table.Body>
                        <Table.Row>
                          <Table.Cell>
                            <h3>Address: </h3>
                          </Table.Cell>
                          <Table.Cell>{wave.address}</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                          <Table.Cell>
                            <h3>Time: </h3>
                          </Table.Cell>
                          <Table.Cell>{wave.timestamp.toString()}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <h3>Message: </h3>
                          </Table.Cell>
                          <Table.Cell>{wave.message}</Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>
                  </>
                );
              })}
            </div>
          </div>
        )}

        {mining && <Loader />}
      </div>
    </div>
  );
}
