import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";


// valor inicial

const INITIAL_STATE = []
const CURSO_STATE = []
// actions

export const showCursos = createAction('cursos/showCursos')
export const showTitle = createAction('cursos/showTitle')
export const hideCursos = createAction('cursos/hideCursos')

// reducers

const CursosReducers = createReducer(INITIAL_STATE, {
    [showCursos]: (state, action) => action.payload.cursos,
    // [hideCursos]: (state, action) => 
    // state.filter((u) => u.id !== action.payload),
});

const ShowCursosReducers = createReducer(CURSO_STATE, {
    [showTitle]: (state, action) =>  action.payload 
})

// Middlewares

const loggerMiddleware = store => next => action => {
    console.log(action)

    next(action)
}

const confirmMiddleware = store => next => action => {
    if(action.type === showTitle.type){
        next(action)
    }else{
        next(action)
    }
}


// store

export default configureStore({
    reducer: {
        cursos: CursosReducers, 
        title: ShowCursosReducers
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware)
    .concat(confirmMiddleware)
})


