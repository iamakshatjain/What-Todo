// essentials
import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

// action creators
import {create_todo} from "../Actions";

class TaskInput extends React.Component{
    
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

        // immutability
        let todo = { ...this.state, created_at : new Date()};
        this.props.create_todo(todo);

        this.setState({
            task : "",
            done : false,
            created_at : null,
            priority : 4,
            completed_at : null
        });
    }
    
    render(){
        return(
            <div>
                <form onSubmit={this.createTask}>
                    <input type="text" value={this.state.task} onChange={(e) => this.setState({task : e.target.value})}/>
                    <button type="submit">+</button>
                </form>
                <div>
                    <button ><Link to="/todos">Todos</Link></button>
                    <button><Link to="/todos/all">All Tasks</Link></button>
                    <button><Link to="/todos/completed">Completed</Link></button>
                </div>
            </div>
        );
    }
}

export default connect(null, {create_todo})(TaskInput);