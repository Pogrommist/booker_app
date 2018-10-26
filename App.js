import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './redux/reducers'

import NavigationService from './services/NavigationService';
import Router from './services/Router';

const store = createStore(rootReducer, applyMiddleware(thunk))

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <Router
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    );
  }
}
