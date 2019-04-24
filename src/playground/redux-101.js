import { createStore } from 'redux';


// const add = ({a, b}, c) => {
//     return a + b + c;
// }

// console.log(add({a: 1, b: 12}, 100));

// Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});


const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy

});

//setCount
const setCount = ({count} = {}) => ({
    type: 'SET',
    count
});


//resetCount
const resetCount = () => ({
    type: 'RESET'
});


// Reducers
// 1. Reducers are pure functions
// 2. Never change state or actions
const countReducer = (state = {count: 0}, action) => {

    switch(action.type){
        case 'INCREMENT':
            // const incrementBy = typeof(action.incrementBy) === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT': 
            // const decrementBy = typeof(action.decrementBy) === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            }    
        case 'RESET':
            return {
                count: 0
            }    
        default: 
            return state;    

    }
    
    
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});


// calling unsubscribe(); stops editing the state
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });
 
store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10}));

store.dispatch(setCount({count: 101}));

