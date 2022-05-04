import {
  combineReducers,
  compose,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";

// import reducers



// add your reducers here
const rootReducer = combineReducers({
// add here

});

// this is middle-ware
const middleware1 = (store) => (next) => (action) => {
  console.log("type of action is ", action);
  //if action is function invoke this
  if (typeof action === "function") {
    return action(store.dispatch);
  }
  next(action); // mandatory thing
};

/// foe redux tool
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(middleware1)
  // other store enhancers if any
);

// this is store
export const store = createStore(rootReducer, enhancer);
