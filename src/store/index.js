import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";


// valor inicial

const INITIAL_STATE = []
// actions

export const showCursos = createAction('cursos/showCursos')
export const hideCursos = createAction('cursos/hideCursos')

// reducers

const AlunoReducer = createReducer(INITIAL_STATE, {
    [showCursos]: (state, action) => action.payload.cursos,
    [hideCursos]: (state, action) => 
    state.filter((u) => u.id !== action.payload[0]),
});

// Middlewares

const loggerMiddleware = store => next => action => {
    console.log(action)

    next(action)
}

const confirmMiddleware = store => next => action => {
    if(action.type === hideCursos.type){
        next(action)
    }else{
        next(action)
    }
}


// store

export default configureStore({
    reducer: {
        cursos: AlunoReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware)
    .concat(confirmMiddleware)
})


