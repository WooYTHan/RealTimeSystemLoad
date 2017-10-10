import React from 'react';
import { render } from 'react-dom';

export default class Title extends React.Component {
  render () {
    const {title} = this.props;;
    return (
      <div id="title">
      <p id="titleText">{title}</p>
      </div>
    )
  }
}
