// essentials
import React from 'react';
import {connect} from 'react-redux';

import {create_todo} from "../Actions";
import List from "../Components/List";
import TaskInput from "../Components/TaskInput";

// Renders the list of all the todos that are pending
class Completed extends React.Component{
    render(){

        return(
            <>
                <TaskInput />
                <h1>Completed</h1>
                <List list={this.props.list}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {list : state.completed}
}

export default connect(mapStateToProps, {create_todo})(Completed);