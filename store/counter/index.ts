export type ICounterAction =
    | { type: "increment" }
    | { type: "decrement" };

export const counterState = 0;

export type ICState = typeof counterState;

export const counterReducer = (
    state: ICState = counterState,
    action: ICounterAction
) => {
    switch (action.type) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        default:
            return state;
    }
};