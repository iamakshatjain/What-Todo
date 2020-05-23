// essentials
import React from 'react';
import {connect} from 'react-redux';

import {create_todo, delete_todo, create_completed, delete_completed} from "../Actions";
import List from "../Components/List";
import TaskInput from "../Components/TaskInput";

// Renders the list of all the todos that are pending
class Todos extends React.Component{
    render(){

        return(
            <>
                <TaskInput />
                <h1>Todo</h1>
                <List type="TODO"/>
            </>
        )
    }
}

export default connect(null, {create_todo, delete_todo, create_completed, delete_completed})(Todos);