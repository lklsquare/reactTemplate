import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-family: san-serif;
  font-size:1.4rem;
  border:none;
  border-radius:5px;
`

class ComponentWithState extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Button>React</Button>
      </div>
    );
  }
}

export default ComponentWithState;