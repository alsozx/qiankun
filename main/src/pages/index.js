import styles from './index.less';

import { registerMicroApps, start } from 'qiankun';
import React from 'react';

window.started = false;
class App extends React.Component {
  containerRef = React.createRef();
  microApp = null;

  componentDidMount() {
    this.microApp = registerMicroApps([
      {
        name: 'app2',
        entry: '//localhost:8080',
        container: this.containerRef.current,
        activeRule: '/app-vue',
      },
    ]);
    start();
  }

  componentWillUnmount() {
    if (this.microApp && this.microApp.getStatus() === 'MOUNTED') {
      this.microApp.unmount();
      this.microApp = null;
      start();
    }
  }

  render() {
    return (
      <div>
        <div ref={this.containerRef}></div>
      </div>
    )
  }
}
export default App;

