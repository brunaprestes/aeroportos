import React, { Component } from 'react';

export default class nav-vertical-bar extends Component {
  render() {
    return (
      <div className="nav-vertical-bar">
        { this.props.children }
      </div>
    )
  }
}
