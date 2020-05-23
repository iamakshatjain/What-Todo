// essentials
import React from 'react';
import {connect} from 'react-redux';
import {create_todo, delete_todo, create_completed, delete_completed} from "../Actions";

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

    renderList(){
        var list;
        if(this.props.type === "COMPLETED"){
            list = this.props.completed;
        }
        else{
            list = this.props.todos;
        }
        if(list.length === 0) {
            return <div>¯\_(ツ)_/¯</div>
        } else {
            // todo : here add color to the task based on the priority
            return(
                <ul>
                    {list.map((ele, index) => (
                        <li key={index}>
                            <input type="checkbox" checked={ele.done} onChange={e => this.handleCheckbox(e, index)}/>
                            {ele.task}
                        </li>
                    ))}
                </ul>
            )
        }
    }

    render(){
        return(
            <div>
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {todos : state.todos, completed : state.completed}
}

export default connect(mapStateToProps, {create_todo, delete_todo, create_completed, delete_completed})(List);