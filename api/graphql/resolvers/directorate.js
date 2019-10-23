module.exports = {
    Query: {
        directorate: async (_, args, { models }) => {
            const item = await models.Directorate.findById(args.id);
            return item;
        },
        directorates: async (_, args, { models }) => {
            const items = await models.Directorate.find();
            return items;
        }
    },
    Mutation: {
        createDirectorate: async (_, args, { models }) => {
            const item = new models.Directorate({
                ...args.input
            });
            const result = await item.save();
            return result;
        },
        updateDirectorate: async (_, args, { models }) => {
            const result = await models.Directorate.findByIdAndUpdate(args.id, args.input, { new: true })
            return result;
        },
        removeDirectorate: async (_, args, { models }) => {
            const deletedItem = await models.Directorate.findByIdAndRemove(args.id);
            return deletedItem
        }
    }
}