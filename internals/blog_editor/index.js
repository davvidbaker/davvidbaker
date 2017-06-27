import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import RootComp from './helper';


const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <RootComp />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(RootComp);

if (module.hot) {
  console.log('module is hot 🔥');
  module.hot.accept('./helper', () => {
    // const RootComp = require('./helper').default;
    console.log('should log on reload');
    render(RootComp);
  });
  module.hot.accept();
}