import { Switch, Route } from "react-router-dom";
import CreateTopic from "../pages/new-topic";
import Register from "../pages/register";
import Landing from "../pages/landing";
import Login from "../pages/login";
import Topic from "../pages/topic";
import Dashboard from "../pages/dashboard";

function Routes() {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Landing />
                </Route>

                <Route exact path="/register">
                    <Register />
                </Route>

                <Route exact path="/login">
                    <Login />
                </Route>

                <Route exact path="/dashboard">
                    <Dashboard />
                </Route>

                <Route exact path="/newtopic">
                    <CreateTopic />
                </Route>

                <Route exact path="/topics/:topicId">
                    <Topic />
                </Route>
            </Switch>
        </>
    );
}

export default Routes;
