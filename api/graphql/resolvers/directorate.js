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
    removeDirectorate: async (args, req) => {
        const deletedItem = await Directorate.findByIdAndRemove(args.id);
        return deletedItem
    }
}