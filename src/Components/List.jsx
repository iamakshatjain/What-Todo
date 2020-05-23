// essentials
import React from 'react';

class List extends React.Component{

    completeTask(){
        // completing the task
        // deleting from todos
        // adding to completed
    }

    uncompleteTask(){
        // uncomplete the task
        // delete from completed
        // add to the todos
    }

    handleCheckbox = ( e ) => {
        
    } 

    renderList(){
        let list = this.props.list;
        if(list.length === 0) {
            return <div>¯\_(ツ)_/¯</div>
        } else {
            return(
                <ul>
                    {list.map(ele => (
                        <li key={new Date()}>
                            <input type="checkbox" checked={ele.done} value={ele.done} onChange={this.handleCheckbox}/>
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

export default List;