import * as _ from 'lodash';

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

export function removeItemFromMap(existingMap, key) {
    return _.omit(existingMap, key); 
}