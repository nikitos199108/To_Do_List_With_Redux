export const a = {
    FOOTER_FILTER: "FOOTER_FILTER",
    CREATE_NEW_TASK: "CREATE_NEW_TASK",
    CHANGE_INPUT_VALUE: "CHANGE_INPUT_VALUE",
    CHANGE_INPUT_DATE: "CHANGE_INPUT_DATE",
    UPDATE_TASK: "UPDATE_TASK",
    RESET_LIST: "RESET_LIST",
    DELETE_TASK: "DELETE_TASK",
    LOCAL_LIST: "LOCAL_LIST",
    TASK_FILTER: "TASK_FILTER",
    TEXT_FILTER_WITH_TASKS_FILTER: "TEXT_FILTER_WITH_TASKS_FILTER",
    TEXT_FILTER_WITHOUT_TASKS_FILTER: "TEXT_FILTER_WITHOUT_TASKS_FILTER",
    DATE_FILTER_WITH_TASKS_FILTER: "DATE_FILTER_WITH_TASKS_FILTER",
    DATE_FILTER_WITHOUT_TASKS_FILTER: "DATE_FILTER_WITHOUT_TASKS_FILTER",
};

export const  locStoreTasksAction = (locState) => {
    return {
        type: a.LOCAL_LIST,
        tasks: [...locState.tasks],
        baseArr: [...locState.baseArr],
        sortedArr: [...locState.sortedArr],
        newIndex: locState.newIndex,
        toDoDate: locState.toDoDate,
        parseDate: locState.parseDate,
        toDoValue: locState.toDoValue,
        filter: locState.filter,
        filterValue: locState.filterValue,
        sortText: locState.sortText,
        sortDate: locState.sortDate,
    }
};

export const  deleteTaskAction = (taskId, index) => {
    return {
        type: a.DELETE_TASK,
        id: taskId,
        index: index,
    }
};

export const  resetAction = () => {
    return {
        type: a.RESET_LIST,
    }
};

export const  changeDateAction = (refDate) => {
    return {
        type: a.CHANGE_INPUT_DATE,
        refDate: refDate,
    }
};

export const  updateTaskAction = (isDone,id) => {
    return {
        type: a.UPDATE_TASK,
        isDone: isDone,
        id: id,
    }
};

export const  changeInputValue = (value) => {
    return {
        type: a.CHANGE_INPUT_VALUE,
        toDoValue: value,
    }
};

export const  createTaskAction = (task,index) => {
    return {
        type: a.CREATE_NEW_TASK,
        task: task,
        index: (index+1),
    }
};

export const  changeFooterFilterAction = (footerFilterValue) => {
    return {
        type: a.FOOTER_FILTER,
        filter: footerFilterValue,
    }
};

export const  textFilterWithTaskFilter = (headerFilterValue) => {
    return {
        type: a.TEXT_FILTER_WITH_TASKS_FILTER,
        headerFilterValue: headerFilterValue,
    }
};

export const  textFilterWithoutTaskFilter = (headerFilterValue) => {
    return {
        type: a.TEXT_FILTER_WITHOUT_TASKS_FILTER,
        headerFilterValue: headerFilterValue,
    }
};

export const  dateFilterWithTaskFilter = (headerFilterValue) => {
    return {
        type: a.DATE_FILTER_WITH_TASKS_FILTER,
        headerFilterValue: headerFilterValue,
    }
};

export const  dateFilterWithoutTaskFilter = (headerFilterValue) => {
    return {
        type: a.DATE_FILTER_WITHOUT_TASKS_FILTER,
        headerFilterValue: headerFilterValue,
    }
};

export const  taskFilterAction = (taskFilterValue, value) => {
    return {
        type: a.TASK_FILTER,
        taskFilterValue: taskFilterValue,
        value: value,
    }
};

