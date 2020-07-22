import React from "react";
import DeleteTaskButton from "./DeleteTaskButton/DeleteTaskButton";
import EditTaskButton from "./EditTaskButton/EditTaskButton";
import AddTaskFormComponent from "./AddTaskForm/AddTaskForm.component";

export default class TaskWidgetComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: false,
            isUpdated: true
        }

        this.listItems = [];
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        this.setState({
            isUpdated: false
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.isUpdated !== this.state.isUpdated) {
            this._fetchTasks();
            this.setState({
                isUpdate: true
            })
        }
    }

    componentDidMount() {
        this.setState({
            tasks: true
        });

        this._fetchTasks();
    }

    _fetchTasks() {
        fetch('http://localhost:5000/task/')
            .then(res => res.json())
            .then(result => this.setState({
                tasks: result
            }));
    }

    _renderTaskList() {
        this.listItems = [];
        this.state.tasks.map(task => this.listItems.push(
            <li key={task._id}>
                <span>TODO: {task.todo}</span>
                <span>Assignee: {task.assignee}</span>
                <DeleteTaskButton/>
                <EditTaskButton/>
            </li>
        ));
    }

    render() {
        if (this.state.tasks === false) {
            return <span>Loading Tasks...</span>
        } else if (this.state.tasks === true) {
            return <span>No Tasks were found</span>
        } else {
            this._renderTaskList();
            return (
                <span>
                    <h2>Task List: </h2>
                    <ol className='List-Task'>
                        {this.listItems}
                    </ol>
                    <h2>Add New Task</h2>
                    <AddTaskFormComponent handleSubmit={this.handleSubmit}/>
                </span>
            );
        }
    }
}