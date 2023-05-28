import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { About, Home, Details } from "../../pages";
import { NAV } from "../../shared";
import { Layout } from "../../widgets";

export const routerApp = createBrowserRouter(
  createRoutesFromElements(
    <Route path={`${NAV.MAIN}`} element={<Layout />}>
      <Route index element={<Home />} />
      <Route path={`${NAV.ABOUT}`} element={<About />}  />
      <Route path={`${NAV.DETAILS}/:id`} element={<Details />}  />
      <Route path="*" element={<div>No found Page</div>} />
    </Route>
  )
);
