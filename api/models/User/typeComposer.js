const { composeWithMongoose } = require('graphql-compose-mongoose/node8');
const { serverErrors } = require('shared');

const User = require('./model');
const { signToken } = require('../../config/jwt');

const UserTC = composeWithMongoose(User, {});

const addCustomizations = schemaComposer => {
    // password should not be returned via API
    // https://github.com/graphql-compose/graphql-compose-mongoose/issues/48
    UserTC.getFieldOTC('local').removeField('password');

    // add a resolver
    const updateProfileResolver = schemaComposer.createResolver({
        name: 'UpdateProfile',
        type: 'type UpdateProfileResponse { user: User, token: String! }',
        args: {
            firstName: 'String!',
            lastName: 'String!',
            email: 'String!',
        },
        resolve: async ({ source, args, context, info }) => {
            if (!context.user._id) {
                throw new Error(serverErrors.INVALID_JWT)
            }
            const user = await User.findByIdAndUpdate(context.user._id, args, { new: true });
            return {
                user,
                token: signToken(user)
            };
        }
    });

    schemaComposer.Mutation.addFields({
        UserUpdateProfile: updateProfileResolver,
    });
}

module.exports = {
    addCustomizations,
    typeComposer: UserTC
};