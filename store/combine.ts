import { Reducer } from 'react-hooks-global-state';
import { combineReducers } from 'redux';
import { counterState, ICounterAction, ICState } from './counter';
import { counterReducer } from './counter/index';

export const state = {
    /**
    * @name GlobalState
    * */
    counter: counterState as ICState,
};

export const reducer = combineReducers<typeof state>({
    counter: counterReducer as Reducer<ICState, ICounterAction>,
});