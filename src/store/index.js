import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

// valor inicial

const INITIAL_STATE = [
    {
        nome: "teste",
    },
    {
        nome: "teste",
    }
]

// actions

export const showAlunos = createAction('alunos/showAlunos')
export const hideAlunos = createAction('alunos/hideAlunos')

// reducers

const AlunoReducer = createReducer(INITIAL_STATE, {
    [showAlunos]: (state, action) => [
        ...state,
        { id: state.length + 1, nome: action.payload },
    ],
    [hideAlunos]: (state, action) => 
    state.filter((u) => u.id !== action.payload),
});

// Middlewares

const loggerMiddleware = store => next => action => {
    console.log(action)

    next(action)
}

const confirmMiddleware = store => next => action => {
    if(action.type === hideAlunos.type){
        next(action)
    }else{
        next(action)
    }
}


// store

export default configureStore({
    reducer: {
        alunos: AlunoReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware)
    .concat(confirmMiddleware)
})


