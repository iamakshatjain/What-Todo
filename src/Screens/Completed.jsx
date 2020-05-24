// essentials
import React from 'react';
import {connect} from 'react-redux';

import {fetch_completed} from "../Actions";
import List from "../Components/List";
import TaskInput from "../Components/TaskInput";

// Renders the list of all the todos that are pending
class Completed extends React.Component{
    
    // componentDidMount(){
    //     this.props.fetch_completed();
    // }
    
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

// export default connect(null, {fetch_completed})(Completed);
export default Completed;