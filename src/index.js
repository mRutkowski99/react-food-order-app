import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { OrderContextProvider } from "./store/order-context";

ReactDOM.render(
  <OrderContextProvider>
    <App />
  </OrderContextProvider>,
  document.getElementById("root")
);
