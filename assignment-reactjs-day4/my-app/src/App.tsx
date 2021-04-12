import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
    ProductCreate,
    ProductList,
    ProductDetails
} from "./pages/products";

function App() {
    const [show, setShow] = useState(true);

    const navigationLinks = [
        {
            name: "Create product",
            link: "/create-product",
        },
        {
            name: "Products",
            link: "/products",
        },
    ];    

    return (
        // <StateProvider>
            <>
                <div className="container">
                    <div className="row">
                        <Router>
                            <div className="container col-12">
                                <ul className="row list-unstyled">
                                    {navigationLinks.map((nav) => (
                                        <li
                                            key={nav.link.replace("/", "")}
                                            className="px-3"
                                        >
                                            <Link to={nav.link}>{nav.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Switch>
                                <Route path="/create-product" exact={true}>
                                    <ProductCreate />
                                </Route>
                                <Route path="/products" exact={true}>
                                    <ProductList />
                                </Route>
                                <Route path="/product-details/:id" exact={true}>
                                    <ProductDetails />
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </div>
        </>
    );
}

export default App;