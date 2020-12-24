import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const Signin = lazy(() => import("./auth/signin"));
const Signup = lazy(() => import("./auth/signup"));
const Home = lazy(() => import("./home"));

const Router: React.FC = () => (
   <BrowserRouter>
      <Suspense fallback={<div>loading...</div>}>
         <nav>
            <ul className="flex flex-row">
               <li className="mr-3 font-semibold text-sm text-blue-900">
                  <Link to="/">Home</Link>
               </li>
               <li className="mr-3 font-semibold text-sm text-blue-900">
                  <Link to="/signin">signin</Link>
               </li>
               <li className="mr-3 font-semibold text-sm text-blue-900">
                  <Link to="/signup">signup</Link>
               </li>
            </ul>
         </nav>
         <Switch>
            <Route path="/signin">
               <Signin />
            </Route>
            <Route path="/signup">
               <Signup />
            </Route>
            <Route path="/">
               <Home />
            </Route>
         </Switch>
      </Suspense>
   </BrowserRouter>
);

export default Router;
