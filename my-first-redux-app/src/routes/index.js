import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "../views/Home";
import Detail from "../views/Detail";
import Results from "../views/Results";

const Routes = () => (
    <Router>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/results">
            <Results />
        </Route>
        <Route path="/detail">
            <Detail />
        </Route>
    </Router>
);

export { Routes }; // import { Routes } 
export default Routes; // import Routes