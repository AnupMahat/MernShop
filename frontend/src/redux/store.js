import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './root-reducer'
import rootSaga from './root-saga'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose

const sagaMidleware = createSagaMiddleware()

const middlewares = [sagaMidleware]

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
)
sagaMidleware.run(rootSaga)

export default store
