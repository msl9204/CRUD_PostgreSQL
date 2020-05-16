import React from "react";
import ListView from "./components/ListPage/ListView";
import DetailView from "./components/DetailPage/DetailView";
import CreateWrite from "./components/WritePage/CreateWrite";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <ListView />
                </Route>
                <Route exact path="/detail/:id">
                    <DetailView />
                </Route>
                <Route exact path="/write">
                    <CreateWrite />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;