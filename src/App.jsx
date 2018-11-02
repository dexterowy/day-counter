import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretRight, faCaretLeft} from '@fortawesome/free-solid-svg-icons';

import Daycounter from './containers/Daycounter/Daycounter';

library.add(faCaretLeft, faCaretRight);


class App extends Component {
  render() {
    return (
      <div >
        <Daycounter />
      </div>
    );
  }
}

export default App;
