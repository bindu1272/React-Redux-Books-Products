import React from "react";
import { Provider } from "react-redux";
import BooksComponent from "./Components/ReduxComponents/BooksComponents";
import ProductsComponent from "./Components/ReduxComponents/ProductsComponents";
import Store from "./Components/Store";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import { NavLink } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Provider store={Store}>
        <Router>
          <ul>
            <li>
              <NavLink to="/books" exact>
                List of Books
              </NavLink>
            </li>
            <li>
              <NavLink to="/products">
                List of Products
              </NavLink>
            </li>
          </ul>
          <Switch>
            <Route exact path="/books" component={BooksComponent}></Route>
            <Route exact path="/products" component={ProductsComponent}></Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
};
export default App;
