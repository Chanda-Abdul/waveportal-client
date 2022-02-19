# [buildspace](https://buildspace.so/) Wave Portal 👋 
Web3 App with Solidity + Ethereum Smart Contracts

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

This is a solution to the [buildspace](https://buildspace.so/) challenge to build a <b>Web3 App with Solidity + Ethereum Smart Contracts</b>. [buildspace](https://buildspace.so/) is a platform to learn and build web3 projects alongside other devs.

This repo contains the front-end of my Web3 app.  You can view the repo for the [Solidity + Ethereum Smart Contracts here](https://github.com/Chanda-Abdul/waveportal-smart-contract).

I built this project to learn some Solidity, write + deploy a smart contract to the blockchain, and build a Web3 client app that can interact with your a smart contract, and to basically get comfortable building an entire Web3 App. 

## The challenge

### Users should be able to:

- [x] <b>View</b> landing page and understand the purpose of this app
- [x] <b>Connect</b> their ethereum <b>wallet</b> using Metamask, with the Rinkeby Test Network
- [x] <b>Input a message</b> and click button to send a "wave" to the smart contract owner
- [x] Once the "wave" is sent the "waver" is entered to <b>win a prize</b>, where the winner is chosen at random
- [x] While the user is waiting for their transaction to be mined on the blockchain a <b>loading message</b> is displayed to the UI, because of <b>blocktime<b> this message may be displayed for 15+ seconds
- [x] The <b>number of "wavers"</b> is displayed along with each wavers <b>address</b>, <b>time</b> that wave was sent, and a <b>message</b>.

### Smart Contract should be able to:

- [x] Deploy your WavePortal smart contract to a local Ethereum network
- [x] Build web3 app that connects to our wallet and talks to our WaveContract
- [x] Update WavePortal to randomly send lucky users waving at you some Ethereum
- [x] Update UI + deploy to an Ethereum testnet so anyone on the internet can wave at you using their wallet


### Screenshot

![](./screens/landing.png)
![](./screens/sendwave.png)
![](./screens/mining.png)
![](./screens/wavesent.png)
![](./screens/allwaves.png)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.



Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Link to deployed Site: [Wave Portal Web3 dApp](https://gifted-aryabhata-929956.netlify.app/)
- Link to Solidity Smart Contract: [Wave Portal Smart Contact Code](https://github.com/Chanda-Abdul/waveportal-smart-contract)

## My process

### Built with

- Front-end
    - [React](https://reactjs.org/) - JS library
    - Flexbox
- [Smart-Contract](https://github.com/Chanda-Abdul/waveportal-smart-contract)
    - Solidity
        - Hardhat
    - Metamask
    - Rinkeby Test Net
        - Rinkeby Faucets
        - Etherscan
    - Blockchain

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```



### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

#### To-Do's

- [x] Fix `useEffect` for new wave events
- [x] Add alerts for out of gas, etc.
- [ ] Clean up
- [x] Deploy
- [ ] write README.md
- [ ] add UI feedback and information for prize

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.


## Author

- Website - [Chanda Codes](https://chandacodes.com/)
- GitHub - [github.com/Chanda-Abdul](https://github.com/Chanda-Abdul)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**







