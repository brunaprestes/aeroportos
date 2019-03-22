import React, { Component } from 'react';

export default class voo-controler extends Component {
  render() {
    return (
      <div className="voo-controler">
        { this.props.children }
      </div>
    )
  }
}
