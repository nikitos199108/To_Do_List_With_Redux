import React from 'react';
import './toDoListStyle.css';


class AddTask extends React.Component {

    constructor(props) {

        super(props);

        this.sortTextRef = React.createRef();
        this.sortDateRef = React.createRef();
        this.taskFilterRef = React.createRef();
        this.dateRef = React.createRef();
        this.inputRef = React.createRef();
    }

    createNewTask() {

        if (this.props.toDoValue.length === 0 && this.props.toDoDate.length !== 0) {
            let inputValue = this.inputRef.current;
            inputValue.className = "empty";
            let dateValue = this.dateRef.current;
            dateValue.className = "";
        }

        if (this.props.toDoValue.length === 0 && this.props.toDoDate.length === 0) {
            let dateValue = this.dateRef.current;
            dateValue.className = "empty";
            let inputValue = this.inputRef.current;
            inputValue.className = "empty";
        }

        if (this.props.toDoValue.length !== 0 && this.props.toDoDate.length === 0) {
            let dateValue = this.dateRef.current;
            dateValue.className = "empty";
            let inputValue = this.inputRef.current;
            inputValue.className = "";
        }


        if (this.props.toDoValue.length !== 0 && this.props.toDoDate.length !== 0 && this.props.toDoDate.toString() !== "NaN.NaN.NaN") {

            let inputValue = this.inputRef.current;
            inputValue.className = "";

            let newTask = {
                title: this.props.toDoValue,
                isDone: false,
                id: this.props.newIndex,
                date: this.props.toDoDate,
                parseDate: this.props.parseDate,
            };

            this.props.onCreate(newTask);

        }
    }


    handleTextSortChanged() {
        this.props.onTextFiltered(this.sortTextRef.current.dataset.value);
    }

    handleDateSortChanged() {
        this.props.onDateFiltered(this.sortDateRef.current.dataset.value);
    }

    handleTaskFilter() {
        this.props.onFilter(this.taskFilterRef.current.dataset.value, this.taskFilterRef.current.value);
    }

    toDoDateChange() {
        let refDate = this.dateRef.current.value;
        this.props.onChangeDate(refDate);
    }


    render() {
        return (
                <div className="header">
                    <input id="inputText" className="a" value={this.props.toDoValue} ref={this.inputRef}
                           onChange={this.props.onChangeValue}/>
                    <input type="date" id="date" ref={this.dateRef}
                           onChange={this.toDoDateChange.bind(this)}/>
                    <button id="addButton" className="btn"
                            onClick={this.createNewTask.bind(this)}>Add task!</button>
                    <input type="text" className="sort" id="search" data-value="taskFilter"
                           ref={this.taskFilterRef}
                           onChange={this.handleTaskFilter.bind(this)}/>
                    <input type="button" value="SortText" className="btn" id="SortText" data-value="sortText"
                           ref={this.sortTextRef} onClick={this.handleTextSortChanged.bind(this)}/>
                    <input type="button" value="SortDate" className="btn" id="SortDate" data-value="sortDate"
                           ref={this.sortDateRef} onClick={this.handleDateSortChanged.bind(this)}/>
                    <input type="button" value="Reset" className="btn" id="Reset"
                           onClick={this.props.onReset}/>
                </div>

        );
    }


}

export default AddTask;
