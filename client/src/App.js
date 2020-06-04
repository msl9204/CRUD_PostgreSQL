import React from "react";
import ListView from "./components/ListPage/ListView";
import DetailView from "./components/DetailPage/DetailView";
import CreateWrite from "./components/WritePage/CreateWrite";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./styles/global";
import { ProvideAuth } from "./auth/useAuth";
import SignIn from "./components/UserAuthPage/SignIn";
import SignUp from "./components/UserAuthPage/SignUp";

function App() {
    return (
        <Router>
            <ProvideAuth>
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
                    <Route exact path="/login">
                        <SignIn />
                    </Route>
                    <Route exact path="/signup">
                        <SignUp />
                    </Route>
                </Switch>
                <GlobalStyle />
            </ProvideAuth>
        </Router>
    );
}

export default App;
