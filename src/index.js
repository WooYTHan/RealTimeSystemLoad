import React from 'react'
import { render } from 'react-dom'
import Chart from './charts/Chart'
import io from 'socket.io-client'
let socket = io(`${location.protocol}//${location.host}`);
socket.on('message', function(json) {
  render(
    <Chart store={json.load} value={json.value}/>,
    document.getElementById('charts')
  )
});