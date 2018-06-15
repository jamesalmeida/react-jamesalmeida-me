import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MyComponent.css';

const propTypes = {
  name: PropTypes.string.isRequired,
}

class MyComponent extends Component {
  componentWillMount() {
    console.log('Component Will Mount');
  }

  componentDidMount() {
    console.log('Component Did Mount');
  }

  render() {
    const {
      title,
      name
    } = this.props;

    return (
      <div className="MyComponent">
        <h1>This is MyComponent.</h1>
        <p>Title: {title}</p>
        <p>Name: {name}</p>
      </div>
    );
  }
}

MyComponent.propTypes = propTypes;

export default MyComponent;
