import React from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';

// screens
import Completed from "../Screens/Completed";
import All  from "../Screens/All";
import Todos  from "../Screens/Todos";

// history for router
import history from "../history";

class App extends React.Component{
    render(){
        return(
            <>
                <Router history={history}>
                    <Switch>
                        <Route path="/todos" exact component={Todos} />
                        <Route path="/todos/all" exact component={All} />
                        <Route path="/todos/completed" exact component={Completed} />
                        <Redirect from="*" to="/todos" /> 
                    </Switch>
                </Router>
            </>
        )
    }
}

export default App;