import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {
	Route,
	Switch
} from 'react-router-dom';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { ConnectedRouter , connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import reduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const history = createBrowserHistory()
const logger = createLogger();
const store = createStore(
  connectRouter(history)(reducers),
  compose(
    applyMiddleware(
      logger,reduxThunk,routerMiddleware(history)
    ),
  ),
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}> 
     <main>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
     </main>
    </ConnectedRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
