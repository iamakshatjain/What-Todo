import React from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetch_completed, fetch_todos} from "../Actions";

// screens
import Completed from "../Screens/Completed";
import All  from "../Screens/All";
import Todos  from "../Screens/Todos";

// styles
import "../styles/output.css";

// history for router
import history from "../history";

class App extends React.Component{

    componentDidMount(){
        this.props.fetch_completed();
        this.props.fetch_todos();
    }

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

const mapStateToProps = (state) => {
    return {todos : state.todos, completed : state.completed}
}

export default connect(mapStateToProps, {fetch_completed, fetch_todos})(App);
// export default App;