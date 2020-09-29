import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import BurgerPreparateur from './containers/BurgerPreparateur/BurgerPreparateur';

class App extends Component {
  render() {
    return (
      <div >
          <Layout>
             <BurgerPreparateur />
          </Layout> 
      </div>
    );
  }
}

export default App;
