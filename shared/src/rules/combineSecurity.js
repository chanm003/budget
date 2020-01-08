const mergeApiPermissions = (accessControl, apiSecurities) => {
    // merge security
    let apiPermissions = apiSecurities.reduce((combined, apiResourceSecurity) => {
        combined = { ...combined, ...apiResourceSecurity };
        return combined;
    }, {});

    // iterate through each operation and update
    Object.keys(apiPermissions).forEach(modelName => {
        ['Query', 'Mutation'].forEach(operationType => {
            Object.keys(apiPermissions[modelName][operationType]).forEach(operationName => {
                apiPermissions[modelName][operationType][operationName] = apiPermissions[modelName][operationType][operationName](accessControl);
            })
        })
    })

    return apiPermissions;
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
    mergeApiPermissions,
    mergeResourceGrants
}