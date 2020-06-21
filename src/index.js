import React from 'react';
import ReactDOM from 'react-dom';

//react 工具
import { composeWithDevTools } from "redux-devtools-extension"

//仓库 || 中间件
import { createStore, applyMiddleware } from "redux"

// 跨组件传值
import { Provider } from "react-redux"

//异步
import thunk from "redux-thunk"

//路由
import { BrowserRouter as Router } from "react-router-dom"
import App from "./routes"

//reducer
import rootReducer from "./reducers"


//导航组件
import NavigationBar from "./components/nav"

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
)











