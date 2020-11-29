import React from "react";
import { Provider } from "react-redux";

import store from "../../store.js";
import Main from "../Main/index.jsx";

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
