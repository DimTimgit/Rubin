const initialState = {
    items: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_LIST":
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case "REMOVE_FROM_LIST":
            return {
                ...state,
                items: state.items.filter(o => o.id !== action.payload)
            };
        default:
            return state;
    }
};
