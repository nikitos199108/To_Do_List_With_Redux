import {a} from "./Actions";

export function toDoReducer(oldState, action) {
    switch (action.type) {

        case a.DELETE_TASK:
            let newTaskList = {...oldState};

            if (newTaskList.baseArr.length !== 0) {
                newTaskList.baseArr = [...newTaskList.baseArr];
                newTaskList.baseArr.splice(action.index, 1);
                return newTaskList;
            }else {
                newTaskList.tasks = [...newTaskList.tasks];
                newTaskList.tasks.splice(action.index, 1);
                return newTaskList;
            }

        case a.RESET_LIST:
            let newArr = {...oldState};
            if(newArr.baseArr.length !== 0){
                return{
                    ...oldState,
                    tasks: [...newArr.baseArr],
                    baseArr: [],
                    filter: "",
                    filterValue: "",
                    sortText: false,
                    sortDate: false,
                };
            } else {
                return {...oldState};
            }

        case a.TEXT_FILTER_WITH_TASKS_FILTER:
            let sortTextState1 = {...oldState};
            if (!sortTextState1.sortText) {
                let sortTextUp = [...sortTextState1.tasks];
                sortTextUp.sort(function (a, b) {
                    let taskA = a.title.toLowerCase();
                    let taskB = b.title.toLowerCase();
                    if (taskA < taskB) {
                        return -1;
                    }
                    if (taskA > taskB) {
                        return 1;
                    }
                    return 0;
                });

                return {
                    ...oldState,
                    sortText: true,
                    tasks: [...sortTextUp],
                };
            }
            if (sortTextState1.sortText) {
                let sortTextDown = [...sortTextState1.tasks];
                sortTextDown.sort(function (a, b) {
                    let taskA = a.title.toLowerCase();
                    let taskB = b.title.toLowerCase();
                    if (taskA > taskB) {
                        return -1;
                    }
                    if (taskA < taskB) {
                        return 1;
                    }
                    return 0;
                });

                return {
                    ...oldState,
                    sortText: false,
                    tasks: [...sortTextDown],
                };
            }
            break;

        case a.TEXT_FILTER_WITHOUT_TASKS_FILTER:
            let sortTextState2 = {...oldState};
            let baseArr = [...sortTextState2.tasks];
            if (!sortTextState2.sortText) {
                let sortTextUp = [...sortTextState2.tasks];
                sortTextUp.sort(function (a, b) {
                    let taskA = a.title.toLowerCase();
                    let taskB = b.title.toLowerCase();
                    if (taskA < taskB) {
                        return -1;
                    }
                    if (taskA > taskB) {
                        return 1;
                    }
                    return 0;
                });
                if(sortTextState2.filter === "sortText" || sortTextState2.filter === "sortDate"){
                    return {
                        ...oldState,
                        sortText: true,
                        filter: action.headerFilterValue,
                        tasks: [...sortTextUp],
                        sortedArr: [...sortTextUp],
                    };
                }
                if(sortTextState2.filter !== "sortText" && sortTextState2.filter !== "sortDate"){
                    return {
                        ...oldState,
                        sortText: true,
                        filter: action.headerFilterValue,
                        tasks: [...sortTextUp],
                        sortedArr: [...sortTextUp],
                        baseArr: [...baseArr],
                    };
                }
            }
            if (sortTextState2.sortText) {
                let sortTextDown = [...sortTextState2.tasks];
                sortTextDown.sort(function (a, b) {
                    let taskA = a.title.toLowerCase();
                    let taskB = b.title.toLowerCase();
                    if (taskA > taskB) {
                        return -1;
                    }
                    if (taskA < taskB) {
                        return 1;
                    }
                    return 0;
                });

                if(sortTextState2.filter === "sortText" || sortTextState2.filter === "sortDate"){
                    return {
                        ...oldState,
                        sortText: false,
                        filter: action.headerFilterValue,
                        tasks: [...sortTextDown],
                        sortedArr: [...sortTextDown],
                    };
                }
                if(sortTextState2.filter !== "sortText" && sortTextState2.filter !== "sortDate"){
                    return {
                        ...oldState,
                        sortText: false,
                        filter: action.headerFilterValue,
                        tasks: [...sortTextDown],
                        sortedArr: [...sortTextDown],
                        baseArr: [...baseArr],
                    };
                }
            }
            break;

        case a.DATE_FILTER_WITH_TASKS_FILTER:
            let sortDateState1 = {...oldState};
            if (!sortDateState1.sortDate) {
                let sortDateUp = [...sortDateState1.tasks];
                sortDateUp.sort(function (a, b) {
                    let dateA = new Date(a.parseDate);
                    let dateB = new Date(b.parseDate);

                    return dateA-dateB;
                });

                return {
                    ...oldState,
                    sortDate: true,
                    tasks: [...sortDateUp],
                };
            }
            if (sortDateState1.sortDate) {
                let sortDateDown = [...sortDateState1.tasks];
                sortDateDown.sort(function (a, b) {
                    let dateA = new Date(a.parseDate);
                    let dateB = new Date(b.parseDate);

                    return dateB-dateA;
                });

                return {
                    ...oldState,
                    sortDate: false,
                    tasks: [...sortDateDown],
                };
            }
            break;

        case a.DATE_FILTER_WITHOUT_TASKS_FILTER:
            let sortDateState2 = {...oldState};
            let baseArrDate = [...sortDateState2.tasks];
            if (!sortDateState2.sortDate) {
                let sortDateUp = [...sortDateState2.tasks];
                sortDateUp.sort(function (a, b) {
                    let dateA = new Date(a.parseDate);
                    let dateB = new Date(b.parseDate);

                    return dateA-dateB;
                });
                if(sortDateState2.filter === "sortText" || sortDateState2.filter === "sortDate"){
                    return {
                        ...oldState,
                        sortDate: true,
                        filter: action.headerFilterValue,
                        tasks: [...sortDateUp],
                        sortedArr: [...sortDateUp],
                    };
                }
                if(sortDateState2.filter !== "sortText" && sortDateState2.filter !== "sortDate"){
                    return {
                        ...oldState,
                        sortDate: true,
                        filter: action.headerFilterValue,
                        tasks: [...sortDateUp],
                        sortedArr: [...sortDateUp],
                        baseArr: [...baseArrDate],
                    };
                }
            }
            if (sortDateState2.sortDate) {
                let sortDateDown = [...sortDateState2.tasks];
                sortDateDown.sort(function (a, b) {
                    let dateA = new Date(a.parseDate);
                    let dateB = new Date(b.parseDate);

                    return dateB-dateA;
                });
                if(sortDateState2.filter === "sortText" || sortDateState2.filter === "sortDate"){
                    return {
                        ...oldState,
                        sortDate: false,
                        filter: action.headerFilterValue,
                        tasks: [...sortDateDown],
                        sortedArr: [...sortDateDown],
                    };
                }
                if(sortDateState2.filter !== "sortText" && sortDateState2.filter !== "sortDate"){
                    return {
                        ...oldState,
                        sortDate: false,
                        filter: action.headerFilterValue,
                        tasks: [...sortDateDown],
                        sortedArr: [...sortDateDown],
                        baseArr: [...baseArrDate],
                    };
                }
            }
            break;

        case a.TASK_FILTER:
            let sortTaskState = {...oldState};
            if(sortTaskState.filter === "sortText" || sortTaskState.filter === "sortDate") {
                if(action.value !== "") {
                    let tasksArr = [...sortTaskState.sortedArr];

                    let filteredTasksArr = tasksArr.filter(t =>
                        ((~t.title.indexOf(action.value)) || (~t.date.indexOf(action.value))));

                    return {
                        ...oldState,
                        tasks: [...filteredTasksArr],
                        filterValue: action.value,
                    };
                }
                if(action.value === "") {
                    return {
                        ...oldState,
                        tasks: [...sortTaskState.sortedArr],
                        filterValue: action.value,
                    };
                }
            }else{
                if(sortTaskState.baseArr.length !== 0) {
                    if(action.value === "") {
                        return{
                            ...oldState,
                            tasks: [...sortTaskState.baseArr],
                            baseArr: [],
                            filter: "",
                            filterValue: "",
                            sortText: false,
                            sortDate: false,
                        };
                    }

                    if(action.value !== "") {
                        let tasksArr = [...sortTaskState.baseArr];

                        let filteredTasksArr = tasksArr.filter(t =>
                            ((~t.title.indexOf(action.value)) || (~t.date.indexOf(action.value))));

                        return {
                            ...oldState,
                            tasks: [...filteredTasksArr],
                            filterValue: action.value,
                            filter: action.taskFilterValue,

                        };
                    }

                }
                if(sortTaskState.baseArr.length === 0) {
                    let baseArr = [...sortTaskState.tasks];

                    let tasksArr = [...sortTaskState.tasks];

                    let filteredTasksArr = tasksArr.filter(t =>
                        ((~t.title.indexOf(action.value)) || (~t.date.indexOf(action.value))));

                    return {
                        ...oldState,
                        tasks: [...filteredTasksArr],
                        filterValue: action.value,
                        filter: action.taskFilterValue,
                        baseArr: [...baseArr],

                    };
                }
            }
            break;


        case a.CHANGE_INPUT_DATE:
            let date;
            let parseDate = Date.parse(action.refDate);
            let dateFunc = new Date(parseDate);

            let day = dateFunc.getDate();
            if (day < 10) {
                day = '0' + day;
            }

            let month = dateFunc.getMonth() + 1;
            if (month < 10) {
                month = '0' + month;
            }

            let year = dateFunc.getFullYear();

            date = day + '.' + month + '.' + year;

            return{
                ...oldState,
                toDoDate: date,
                parseDate: parseDate,
            };

        case a.UPDATE_TASK:
            let newState = {...oldState};
            newState.tasks = [...newState.tasks];

            newState.tasks.forEach((task,index) => {
                if (task.id === action.id) {
                    newState.tasks[index] = {
                        ...task,
                        isDone: action.isDone,
                    }
                }
            });
            return newState;

        case a.CHANGE_INPUT_VALUE:
            return{
                ...oldState,
                toDoValue: action.toDoValue,
            };

        case a.CREATE_NEW_TASK:
            return{
                ...oldState,
                tasks: [...oldState.tasks, action.task],
                newIndex: action.index,
                toDoValue: "",
            };

        case a.FOOTER_FILTER:
            return{
                ...oldState,
                filter: action.filter,
            };

        case a.LOCAL_LIST:
            return{
                ...oldState,
                tasks: [...action.tasks],
                baseArr: [...action.baseArr],
                sortedArr: [...action.sortedArr],
                newIndex: action.newIndex,
                toDoDate: action.toDoDate,
                parseDate: action.parseDate,
                toDoValue: action.toDoValue,
                filter: action.filter,
                filterValue: action.filterValue,
                sortText: action.sortText,
                sortDate: action.sortDate,
            };

        default:
            if (oldState)
                return oldState;

            return {
                tasks: [],
                baseArr: [],
                sortedArr: [],
                newIndex: 0,
                toDoDate: "",
                parseDate: "",
                toDoValue: "",
                filter: "",
                filterValue: "",
                sortText: false,
                sortDate: false,
            };
    }
}