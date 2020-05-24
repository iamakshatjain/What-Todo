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

        // TC : we don't create empty task
        if(this.state.task === "") return;

        // TC : check if task already exists
        var flag = true;
        this.props.todos.forEach(todo => {
            if(todo.task === this.state.task){
                alert("The task already exists!");
                flag = false;
                return;
            }
        })

        if(flag === false){
            this.setState({
                task : "",
                done : false,
                created_at : null,  
                priority : 4,
                completed_at : null
            });
            return;
        }

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
                <form className="w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={this.createTask}>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full sm:w-2/3 px-3 mb-6">
                            <label 
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                                htmlFor="grid-first-name">
                                Task
                            </label>
                            <input 
                                className="shadow appearance-none border w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                type="text" value={this.state.task} 
                                onChange={(e) => this.setState({task : e.target.value})}
                            />
                        </div>
                        <div className="w-full sm:w-1/3 px-3 mb-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                Priority
                            </label>
                            <select 
                                className="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                id="grid-state"
                                value = {this.state.priority}
                                onChange = {(e) => this.setState({priority : e.target.value})}
                            >
                                <option value={1}>Priority 1</option>
                                <option value={2}>Priority 2</option>
                                <option value={3}>Priority 3</option>
                                <option value={4}>Priority 4</option>
                            </select>
                        </div>
                        <div className="sm:w-1/3 px-3 mb-6">

                            <button 
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                                type="submit">
                                    Add Task +
                            </button>
                        </div>
                    </div>
                    <div className="container flex flex-wrap -mx-3 mb-2">
                        <div className="center w-1/3 px-3 mb-6">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white text-center font-bold py-2 px-4 rounded-full">
                                <Link to="/todos">
                                    Todos
                                </Link>
                            </button>
                        </div>
                        <div className="center w-1/3 px-3 mb-6">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white text-center font-bold py-2 px-4 rounded-full">
                                <Link to="/todos/all">
                                    All
                                </Link>
                            </button>
                        </div>
                        <div className="center w-1/3 px-3 mb-6">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white text-center font-bold py-2 px-4 rounded-full">
                                <Link to="/todos/completed">
                                    Completed
                                </Link>
                            </button>
                        </div>
                    </div>
                </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {todos : state.todos}
}

export default connect(mapStateToProps, {create_todo})(TaskInput);
