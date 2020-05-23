// essentials
import React from 'react';
import {connect} from 'react-redux';
import {create_todo, delete_todo, create_completed, delete_completed} from "../Actions";

import nothing from "../Assets/nothing.svg";

class List extends React.Component{

    handleCheckbox = ( e, index ) => {
        var checked = e.target.checked;
        var task;
        if(this.props.type === "COMPLETED"){
            task = this.props.completed[index];
            if(checked === false){
                // uncomplete the task
                // delete from completed
                this.props.delete_completed(task);
                // add to the todos
                this.props.create_todo(task);
            }
        }
        else{
            task = this.props.todos[index];
            if(checked === true){
                // completing the task
                // deleting from todos
                this.props.delete_todo(task);
                // adding to completed
                this.props.create_completed(task);
            }
        }
    } 

    handleDeleteTask = (index) => {
        var task;
        if(this.props.type === "COMPLETED"){
            task = this.props.completed[index];
            this.props.delete_completed(task);
        }
        else{
            task = this.props.todos[index];
            this.props.delete_todo(task);
        }
    }

    getColor = task => {
        let priorityColors = ["text-red-500", "text-yellow-500", "text-blue-500", "text-green-500"] ;
        if(task.done){
            return "text-gray-500";
         } 
         else {
             return priorityColors[task.priority-1];
         }
    }

    renderList(){
        var list;
        if(this.props.type === "COMPLETED"){
            list = this.props.completed;
        }
        else{
            list = this.props.todos;
        }
        if(list.length === 0) {
            return(
                <div className=" max-w-sm rounded overflow-hidden">
                    <img className="w-full" src={nothing} alt="nothing" />
                </div>
            );
        } else {
            // todo : here add color to the task based on the priority
            return(
                <ul>
                    {list.map((ele, index) => (
                        <div className="rounded overflow-hidden shadow-lg">
                            <li key={index} className="px-6 py-4 w-full">
                                <input type="checkbox" checked={ele.done} onChange={e => this.handleCheckbox(e, index)}/>
                                <span  className={`font-sans text-2xl ${this.getColor(ele)} px-3`}>{ele.task}</span>
                                <span style={{float:'right'}} onClick = {() => this.handleDeleteTask(index)} className = "content-end text-red-500 hover:text-red-800 cursor-pointer">Delete</span>
                            </li> 
                        </div>
                    ))}
                </ul>
            )
        }
    }

    render(){
        return(
            <div className="container mx-auto px-4">
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {todos : state.todos, completed : state.completed}
}

export default connect(mapStateToProps, {create_todo, delete_todo, create_completed, delete_completed})(List);