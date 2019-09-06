const Directorate = require('../../models/directorate');

module.exports = {
    directorates: async (args, req) => {
        const directorates = await Directorate.find();
        return directorates;
    },
    removeDirectorate: async (args, req) => {
        const deletedItem = await Directorate.findByIdAndRemove(args.id);
        return deletedItem
    }
}