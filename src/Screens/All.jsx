// essentials
import React from 'react';
// import {connect} from 'react-redux';

import {fetch_completed, fetch_todos} from "../Actions";
import List from "../Components/List";
import TaskInput from "../Components/TaskInput";

// renders the list of all the todos
class All extends React.Component{
    state = {
        task : "",
        done : false,
        created_at : null,
        priority : 4,
        completed_at : null
    }

    createTask = (event) => {
        // to handle the form submit of creating a task
        event.preventDefault();
        let todo = { ...this.state, created_at : new Date()};
        console.log(todo);
        this.props.create_todo(todo);
        this.setState({
            task : "",
            done : false,
            created_at : null,
            priority : 4,
            completed_at : null
        });
    }

    // componentDidMount(){
    //     this.props.fetch_completed();
    //     this.props.fetch_todos();
    // }
    
    render(){

        return(
            <>
                <TaskInput />
                <h1 className="font-sans text-3xl text-gray-800 text-center">Todo</h1>
                <List type="TODO" />
                <h1 className="font-sans text-3xl text-gray-800 text-center">Completed</h1>
                <List type="COMPLETED" />
            </>
        )
    }
}

// export default connect(null, {fetch_completed, fetch_todos})(All);
export default All;