import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import createAppStore from './lib/store';
import { Provider } from 'react-redux';

const store = createAppStore();

class AppContainer extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    );
  }
}

ReactDOM.render(<AppContainer />,document.getElementById('root'));
