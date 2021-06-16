import styles from './index.less';

import { loadMicroApp } from 'qiankun';
import React from 'react';

class App extends React.Component {
  containerRef = React.createRef();
  microApp = null;

  componentDidMount() {
    // 手动加载
    this.microApp = loadMicroApp({
      name: 'app1',
      entry: '//localhost:3000',
      container: this.containerRef.current,
    });
  }

  componentWillUnmount() {
    if (this.microApp && this.microApp.getStatus() === 'MOUNTED') {
      this.microApp.unmount();
      this.microApp = null;
    }
  }

  componentDidUpdate() {
    // this.microApp.update({ name: 'kuitos' });
  }

  render() {
    return (
      <div>
        <h1 className={styles.title}>Home index</h1>
        <div ref={this.containerRef}></div>
      </div>
    )
  }
}
export default App;

