import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routerApp } from "./router";
import { RecoilRoot } from "recoil";
import { Spinner } from "./components/spinner";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  /*   <React.StrictMode> */
  <RecoilRoot>
    <React.Suspense fallback={<Spinner />}>
      <RouterProvider router={routerApp} />
    </React.Suspense>
  </RecoilRoot>
  /* </React.StrictMode>, */
);
