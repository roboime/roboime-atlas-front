import React from 'react';
import logo from './logo.svg';
import './App.css';
import Field from './components/field'

import {Timestamp} from './protos/ssl/messages_robocup_ssl_wrapper_pb'
import {RoboIMEAtlasClient} from './protos/ssl/messages_robocup_ssl_wrapper_pb_service'

function getFrame() {
  var timestamp = new Timestamp()
  const client = new RoboIMEAtlasClient("https://localhost:9090")

  var stream = client.getFrame(timestamp)
  stream.on("data", (resp) => {
    const frame = resp.getDetection()
    console.log(frame)
  })
  stream.on("status", (status) => {
    console.log(status)
  })
}

function App() {
  return (
    <div className="App">
      <Field />
    </div>
  )
}
export default App