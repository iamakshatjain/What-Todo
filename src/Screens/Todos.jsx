// essentials
import React from 'react';
import {connect} from 'react-redux';

import {fetch_todos} from "../Actions";
import List from "../Components/List";
import TaskInput from "../Components/TaskInput";

// Renders the list of all the todos that are pending
class Todos extends React.Component{
    
    // componentDidMount(){
    //     this.props.fetch_todos();
    // }

    render(){
        return(
            <>
                <TaskInput />
                <h1 className="font-sans text-3xl text-gray-800 text-center">Todo</h1>
                <List type="TODO"/>
            </>
        )
    }
}

// export default connect(null, {fetch_todos})(Todos);
export default Todos;