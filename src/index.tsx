 import ReactDOM from "react-dom/client";
import { Suspense } from "react";
import { RouterProvider } from "react-router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persist, store } from "./app/store";
import { routerApp } from "./app/router/routerApp";
import "./app/styles/globals.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <PersistGate persistor={persist} loading={null}>
      <Suspense fallback={<div>Befor Loading Page</div>}>
        <RouterProvider router={routerApp} />
      </Suspense>
    </PersistGate>
  </Provider>
);
