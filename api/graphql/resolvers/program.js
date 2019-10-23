module.exports = {
    Query: {
        program: async (_, args, { models }) => {
            const item = await models.Program.findById(args.id);
            return item;
        },
        programs: async (_, args, { models }) => {
            const items = await models.Program.find();
            return items;
        }
    },
    Mutation: {
        createProgram: async (_, args, { models }) => {
            const item = new models.Program({
                ...args.input
            });
            const result = await item.save();
            return result;
        },
        updateProgram: async (_, args, { models }) => {
            const result = await models.Program.findByIdAndUpdate(args.id, args.input, { new: true })
            return result;
        },
        removeProgram: async (_, args, { models }) => {
            const deletedItem = await models.Program.findByIdAndRemove(args.id);
            return deletedItem
        }
    }
}