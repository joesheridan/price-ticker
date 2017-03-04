import React, { Component } from 'react';
import _ from 'lodash';
import C3Chart from 'react-c3js';
import * as common from './common.js';

/**
 * Connects to the web socket and listens for tick data
 */
class TickDataFeed extends Component {

  constructor(props) {
    super(props);
    this.wsUri = "ws://localhost:3000/tickdata";
    const c3data = {
      columns: [
        ['EUR/USD'],
        ['GBP/USD']
      ]
    }
    this.state = { status: 'closed', data: [], c3data};
  }

  componentDidMount() {
    // subscribe to the web socket feed
    this.websocket = new WebSocket(this.wsUri);
    this.websocket.onopen = this.onOpen.bind(this);
    this.websocket.onclose = this.onClose.bind(this);
    this.websocket.onmessage = this.onMessage.bind(this);
    this.websocket.onerror = this.onError.bind(this);
  }

  onOpen(evt) {
    this.setState({ status: 'open' });
  }

  onClose(evt) {
    console.log('websocket closed')
  }

  onMessage(evt) {
    let c3data = _.cloneDeep(this.state.c3data);
    c3data.columns[0].push(common.getLatestData("EUR/USD",evt.data))
    c3data.columns[1].push(common.getLatestData("GBP/USD",evt.data))
    this.setState({ c3data })
  }

  onError(evt) {
    this.errors = evt.data
  }

  doSend(message) {
    this.sent = message
    this.websocket.send(message);
  }

  render() {
    return (<C3Chart data={ this.state.c3data} />)
  }
}

export default TickDataFeed;
