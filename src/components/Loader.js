import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const LoaderExampleIndeterminate = () => (
  <div>
     <Segment>
      <Dimmer active>
        <Loader size='huge'>Mining Ethereum, please wait...</Loader>
      </Dimmer>

      
      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>
  </div>
)

export default LoaderExampleIndeterminate