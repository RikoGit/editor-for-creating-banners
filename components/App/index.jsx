import React from "react";
import { Provider } from "react-redux";

import store from "../../store.js";
import Main from "../Main/index.jsx";
import "./styles.scss";

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
