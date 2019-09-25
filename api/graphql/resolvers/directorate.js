const Directorate = require('../../models/directorate');

module.exports = {
    Query: {
        directorate: async (_, args) => {
            const item = await Directorate.findById(args.id);
            return item;
        },
        directorates: async (_, args) => {
            const items = await Directorate.find();
            return items;
        }
    },
    Mutation: {
        createDirectorate: async (_, args) => {
            const item = new Directorate({
                ...args.input
            });
            const result = await item.save();
            return result;
        },
        updateDirectorate: async (_, args) => {
            const result = await Directorate.findByIdAndUpdate(args.id, args.input, { new: true })
            return result;
        },
        removeDirectorate: async (_, args) => {
            const deletedItem = await Directorate.findByIdAndRemove(args.id);
            return deletedItem
        }
    }
}