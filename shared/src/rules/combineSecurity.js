const mergeApiPermissions = (accessControl, ...args) => {
    let apiPermissions = {};
    args.forEach(apiResourceSecurity => {
        apiPermissions = { ...apiPermissions, ...apiResourceSecurity };
    });
    Object.keys(apiPermissions).forEach(modelName => {
        Object.keys(apiPermissions[modelName].Query).forEach(queryName => {
            apiPermissions[modelName].Query[queryName] = apiPermissions[modelName].Query[queryName](accessControl);
        });
        Object.keys(apiPermissions[modelName].Mutation).forEach(queryName => {
            apiPermissions[modelName].Mutation[queryName] = apiPermissions[modelName].Mutation[queryName](accessControl);
        })
    })
    return apiPermissions;
}

const mergeResourceGrants = (roleNames, ...args) => {
    const grantsObject = {};
    args.forEach(resourceGrant => {
        Object.values(roleNames).forEach(roleName => {
            grantsObject[roleName] = grantsObject[roleName] || {};
            grantsObject[roleName] = {
                ...grantsObject[roleName], ...resourceGrant[roleName]
            }
        });
    })
    return grantsObject;
}

module.exports = {
    mergeApiPermissions,
    mergeResourceGrants
}