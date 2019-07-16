import React from 'react';
import ReactDOM from 'react-dom';
import Keypad from '../src/components/Keypad';
import EyesOnMe from '..src/components/EyesOnMe';

ReactDOM.render(
  <div>
    <Keypad />
    <EyesOnMe />
  </div>,
  document.getElementById('global')
);
