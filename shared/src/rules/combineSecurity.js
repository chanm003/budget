const mergeSecurity = (accessControl, apiSecurities) => {
    // merge security
    let combinedSecurity = apiSecurities.reduce((combined, apiResourceSecurity) => {
        combined = { ...combined, ...apiResourceSecurity };
        return combined;
    }, {});

    // iterate through each operation and update
    Object.keys(combinedSecurity).forEach(modelName => {
        ['Query', 'Mutation'].forEach(operationType => {
            Object.keys(combinedSecurity[modelName][operationType]).forEach(operationName => {
                combinedSecurity[modelName][operationType][operationName] = combinedSecurity[modelName][operationType][operationName](accessControl);
            })
        })
    })

    return combinedSecurity
}

const mergeResourceGrants = (roleNames, resourceGrants) => {
    const grantsObject = resourceGrants.reduce(
        (combined, resourceGrant) => {
            Object.values(roleNames).forEach(roleName => {
                combined[roleName] = combined[roleName] || {};
                combined[roleName] = {
                    ...combined[roleName], ...resourceGrant[roleName]
                }
            });
            return combined;
        }, {})
    return grantsObject;
}

module.exports = {
    mergeSecurity,
    mergeResourceGrants
}