export const addToList = obj => ({
    type: 'ADD_TO_LIST',
    payload: obj,
});

export const removeFromList = id => ({
    type: 'REMOVE_FROM_LIST',
    payload: id,
});
