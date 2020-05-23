// essentials
import React from 'react';
import {connect} from 'react-redux';

import {create_todo, delete_todo, create_completed, delete_completed} from "../Actions";
import List from "../Components/List";
import TaskInput from "../Components/TaskInput";

// Renders the list of all the todos that are pending
class Completed extends React.Component{
    render(){

        return(
            <>
                <TaskInput />
                <h1 className="font-sans text-3xl text-gray-800 text-center">Completed</h1>
                <List type="COMPLETED"/>
            </>
        )
    }
}

export default connect(null, {create_todo, delete_todo, create_completed, delete_completed})(Completed);