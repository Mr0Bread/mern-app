import React from "react";
import DeleteTaskButton from "./DeleteTaskButton/DeleteTaskButton";
import EditTaskButton from "./EditTaskButton/EditTaskButton";

export default class TaskWidget extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: false,
            isUpdated: true
        }
    }

    componentDidMount() {
        this.setState({
            tasks: true
        });

        fetch('http://localhost:5000/task/')
            .then(res => res.json())
            .then(result => this.setState({
                tasks: result
            }));
    }

    _renderTaskList() {
        let taskList = [];

        this.state.tasks.map(task => taskList.push(
            <li key={task._id}>
                <span>TODO: {task.todo}</span>
                <span>Assignee: {task.assignee}</span>
                <DeleteTaskButton/>
                <EditTaskButton/>
            </li>
        ));

        return taskList;
    }

    render() {
        if (this.state.tasks === false) {
            return <span>Loading Tasks...</span>
        } else if (this.state.tasks === true) {
            return <span>No Tasks were found</span>
        } else {
            return (
                <span>
                    <h2>Task List: </h2>
                    <ol className='List-Task'>
                        {this._renderTaskList()}
                    </ol>
                </span>
            );
        }
    }
}