import { v4 as uuidv4 } from 'uuid';

const tasksReducer = (taskList, action) => {
    switch(action.type){
        case 'add':
            let newTask = {
                id: uuidv4(),
                name: action.name,
                completed: false
            };
            return [...taskList, newTask];
        case 'delete':
            return taskList.filter(task=>task.id !== action.id);
        case 'edit':
            return taskList.map((task) => {
                if(task.id === action.id) return {...task, name: action.name}
                return task;});
        case 'complete':
            return taskList.map(task => {
                if(task.id === action.id){
                    return {...task, completed: !task.completed}
                }
                return task;
            });
        default:break;
    }
}

export default tasksReducer;