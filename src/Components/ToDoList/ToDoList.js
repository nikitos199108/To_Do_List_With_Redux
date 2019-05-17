import React from 'react';
import './toDoListStyle.css';
import Footer from "./Footer";
import AddTask from "./AddTask";
import TasksList from "./TasksList";
import {createStore} from 'redux';
import {toDoReducer} from "./Redux/Reducers";
import {
    changeDateAction,
    changeFooterFilterAction,
    changeInputValue,
    createTaskAction, dateFilterWithoutTaskFilter, dateFilterWithTaskFilter,
    deleteTaskAction,
    locStoreTasksAction,
    resetAction, taskFilterAction, textFilterWithoutTaskFilter, textFilterWithTaskFilter,
    updateTaskAction
} from "./Redux/Actions";


class ToDoList extends React.Component {

    constructor() {

        super();

        //localStorage.clear();

        this.store = createStore(toDoReducer);
        let state = this.store.getState();

        let locState = JSON.parse(localStorage.getItem("locState"));

            if(locState !== null) {
                this.store.dispatch(locStoreTasksAction(locState));
                this.state = {...locState};
            }else{
                this.state = state;
            }

        this.store.subscribe(() => {
            let state = this.store.getState();
            this.toStore();
            this.setState(state);
        });

    }

    toStore() {
        localStorage.setItem("locState", JSON.stringify(this.store.getState()));
    }

    createNewTask(task) {

        if(this.state.baseArr.length !== 0) {
            this.reset();
            let index = this.state.newIndex;
            this.store.dispatch(createTaskAction(task,index));
        }else{
            let index = this.state.newIndex;
            this.store.dispatch(createTaskAction(task,index));
        }

    }

    changeTextFilter(headerFilterValue) {

        if (this.state.filter === "taskFilter"){
            this.store.dispatch(textFilterWithTaskFilter(headerFilterValue));
        }else{
            this.store.dispatch(textFilterWithoutTaskFilter(headerFilterValue));
        }
    }

    changeDateFilter(headerFilterValue) {
        if(this.state.filter === "taskFilter") {
            this.store.dispatch(dateFilterWithTaskFilter(headerFilterValue));
        }else {
            this.store.dispatch(dateFilterWithoutTaskFilter(headerFilterValue));
        }
    }

    taskFilter(taskFilterValue, value) {
        this.store.dispatch(taskFilterAction(taskFilterValue, value));
    }

    changeFooterFilter(footerFilterValue) {
        this.store.dispatch(changeFooterFilterAction(footerFilterValue));
    }

    deleteTask(taskId, index) {
        this.store.dispatch(deleteTaskAction(taskId, index));
    }

    reset() {
        this.store.dispatch(resetAction());
    }

    toDoValueChange(e) {
        let value = e.currentTarget.value;
        this.store.dispatch(changeInputValue(value));
    }

    updateTask(task) {
        this.store.dispatch(updateTaskAction(task.isDone,task.id));
    }

    toDoDateChange(refDate) {
        this.store.dispatch(changeDateAction(refDate));
    }

    render() {

        let {tasks, filter} = this.state;
        let filteredTasks = [];

        if (filter === "") filteredTasks = tasks;
        if (filter === "all") filteredTasks = tasks;
        if (filter === "active") filteredTasks = tasks.filter(t => !t.isDone);
        if (filter === "completed") filteredTasks = tasks.filter(t => t.isDone);
        if (filter === "taskFilter") filteredTasks = tasks;
        if (filter === "sortText") filteredTasks = tasks;
        if (filter === "sortDate") filteredTasks = tasks;

        return (
            <div className="toDoList">
                <AddTask onCreate={this.createNewTask.bind(this)}
                         onTextFiltered={this.changeTextFilter.bind(this)}
                         onDateFiltered={this.changeDateFilter.bind(this)}
                         onReset={this.reset.bind(this)}
                         onFilter={this.taskFilter.bind(this)}
                         newIndex={this.state.newIndex}
                         toDoValue={this.state.toDoValue}
                         toDoDate={this.state.toDoDate}
                         parseDate={this.state.parseDate}
                         onChangeValue={this.toDoValueChange.bind(this)}
                         onChangeDate={this.toDoDateChange.bind(this)}/>

                <TasksList tasks={filteredTasks}
                           onUpdateTask={this.updateTask.bind(this)}
                           onDeleteTask={this.deleteTask.bind(this)}/>

                <Footer tasks={tasks} footerFilter={filter}
                        onFilterChanged={this.changeFooterFilter.bind(this)}/>
            </div>
        );
    }
}

export default ToDoList;










