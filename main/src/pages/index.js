import styles from './index.less';

import React from 'react';
import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'app2',
    entry: '//localhost:8080',
    container: '#app1',
    activeRule: '/app-vue',
  },
]);
start();

class App extends React.Component {
  render() {
    return (
      <div id="app1"></div>
    )
  }
}
export default App;

