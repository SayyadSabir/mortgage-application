// import { getStore } from '../../spa-store/src/exposeStore'; // Adjust the path as necessary
import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";
import { Provider } from "react-redux";
import { store } from './store';


const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: () => (
    <Provider store={store}>
      <React.StrictMode>
        <Root />
      </React.StrictMode>

    </Provider>
  ),
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
