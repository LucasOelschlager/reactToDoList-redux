import { createSlice } from "@reduxjs/toolkit";


const taskSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        addTask(state, action) {
            state.push({
                id: action.payload.id,
                task: action.payload.task,
                completed: false,
            })
        },
        removeTask(state, action) {
            const itemToRemove = action.payload
            return state.filter((e) => e.id !== itemToRemove.id)
        },
        setTaskDone(state, action) {
            const taskToUpdate = state.find((task) => task.id === action.payload.id)
            if (taskToUpdate) {
                taskToUpdate.completed = action.payload.completed
            }
        }
    }
})

export const { addTask, removeTask, setTaskDone } = taskSlice.actions;
export default taskSlice.reducer;
