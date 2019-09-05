export function addItemsToMap(existingMap, items) {
    const itemMapping = items.reduce((accumulator, item) => {
        accumulator[item._id] = item;
        return accumulator;
    }, {});

    return { ...existingMap, ...itemMapping };
}

export function fromMapToArray(mapping) {
    return Object.keys(mapping).map(key => mapping[key]);
}

export const createActionCreator = (asyncTypes, createThunk) => (...args) => {
    const thunk = createThunk(...args);

    return dispatch => {
        dispatch({ type: asyncTypes.pending });

        // We assume here that the wrapped thunk produces a Promise
        // We call dispatch on the thunk (it's just a normal thunk, after all)
        // and since dispatch yields its result, we can utilize the returned
        // Promise
        return dispatch(thunk)
            .then(payload => {
                console.log(payload);
                dispatch({ type: asyncTypes.complete })
            })
            .catch(err => ({
                type: asyncTypes.error,
                error: true,
                payload: err
            }));
    };
};