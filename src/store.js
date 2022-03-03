import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
const initialState = {};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;


















// import { createStore, combineReducers, applyMiddleware } from "redux";
// import postReducer from "./reducers/postReducer";
// import thunk from "redux-thunk";
// import {compose} from 'redux'

// let combineReducersObj = {
//   posts: postReducer
// };


// let rootReducer = combineReducers(combineReducersObj);
// const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

// const middleware = [thunk];

// let store = createStore(

//   composeEnhancers(applyMiddleware(...middleware))

// )
// export default store





// const rootReducer=combineReducers({post:postReducer},applyMiddleware(thunk))
// const store=createStore(rootReducer)


// export default store