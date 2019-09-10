const Directorate = require('../../models/directorate');

module.exports = {
    directorate: async (args, req) => {
        const item = await Directorate.findById(args.id);
        return item;
    },
    directorates: async (args, req) => {
        const items = await Directorate.find();
        return items;
    },
    createDirectorate: async (args, req) => {
        const item = new Directorate({
            ...args.input
        });
        const result = await item.save();
        return result;
    },
    updateDirectorate: async (args, req) => {
        const result = await Directorate.findByIdAndUpdate(args.id, args.input, { new: true })
        return result;
    },
    removeDirectorate: async (args, req) => {
        const deletedItem = await Directorate.findByIdAndRemove(args.id);
        return deletedItem
    }
}