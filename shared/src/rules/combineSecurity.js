const mergeApiPermissions = (accessControl, ...args) => {
    const apiPermissions = {};
    args.forEach(apiResourceSecurity => {
        Object.keys(apiResourceSecurity).forEach(operationName => {
            apiPermissions[operationName] = apiResourceSecurity[operationName](accessControl);
        });
    });
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