import React, { Component } from 'react';

export default class grid extends Component {
  render() {
    return (
      <div className="grid">
        { this.props.children }
      </div>
    )
  }
}
