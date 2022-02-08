import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Register from "./pages/register";
import Userinfo from "./pages/userinfo";
import store from "./store";


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />}>
          <Route path="userinfo" element={<Userinfo />}/>
        </Route>
      </Routes>
      </BrowserRouter>
      </Provider>
    )
  }
}