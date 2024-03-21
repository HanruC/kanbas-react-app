import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";

const initialState = {
    assignments: db.assignments,
    assignment: {},
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, action) => {
            const newAssignment = {
                ...action.payload,
                _id: new Date().getTime().toString(),
            };
            state.assignments.push(newAssignment);
            state.assignment = newAssignment;
        },
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload
            );
            state.assignment = {};
        },
        updateAssignment: (state, action) => {
            const index = state.assignments.findIndex(
                (assignment) => assignment._id === action.payload._id
            );
            if (index !== -1) {
                state.assignments[index] = action.payload;
                state.assignment = action.payload;
            }
        },
        selectAssignment: (state, action) => {
            state.assignment = action.payload;
        },
    },
});

export const {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    selectAssignment,
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;