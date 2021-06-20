import { HIDE_FILTERS, SHOW_FILTERS } from "../types";

const handlers = {
    [SHOW_FILTERS]: (state) => ({ ...state, show: true }),
    [HIDE_FILTERS]: (state) => ({ ...state, show: false }),
    DEFAULT: state => state
}

export const shopFilterReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action);
}