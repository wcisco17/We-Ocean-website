import { createStore } from 'react-hooks-global-state';
import { reducer, state } from './combine';

export const { GlobalStateProvider, dispatch, useGlobalState } = createStore(
    reducer,
    state
);