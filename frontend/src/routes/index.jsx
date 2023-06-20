import { Switch, Route } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/home";
import Landing from "../pages/landing";
import Register from "../pages/register";
import TopicDetailsPage from "../components/TopicDetails";
import NewTopic from "../components/NewTopic";

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

                <Route exact path="/home">
                    <Home />
                </Route>

                <Route exact path="/newtopic">
                    <NewTopic />
                </Route>

                <Route exact path="/topics/:topicId">
                    <TopicDetailsPage />
                </Route>
            </Switch>
        </>
    );
}

export default Routes;
