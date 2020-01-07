const { composeWithMongoose } = require('graphql-compose-mongoose/node8');
const { serverErrors } = require('shared');

const User = require('../user');
const { signToken } = require('../../config/jwt');

const UserTC = composeWithMongoose(User, {});

const addCustomFields = schemaComposer => {
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
    addCustomFields,
    typeComposer: UserTC
};