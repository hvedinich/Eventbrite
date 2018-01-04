import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import RootContainer from './components/App';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
}

render(RootContainer);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextRootContainer = require('./components/App').default;
    render(NextRootContainer);
   });
}




