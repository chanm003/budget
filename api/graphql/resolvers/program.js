const Program = require('../../models/program');

module.exports = {
    Query: {
        program: async (_, args) => {
            const item = await Program.findById(args.id);
            return item;
        },
        programs: async (_, args) => {
            const items = await Program.find();
            return items;
        }
    },
    Mutation: {
        createProgram: async (_, args) => {
            const item = new Program({
                ...args.input
            });
            const result = await item.save();
            return result;
        },
        updateProgram: async (_, args) => {
            const result = await Program.findByIdAndUpdate(args.id, args.input, { new: true })
            return result;
        },
        removeProgram: async (_, args) => {
            const deletedItem = await Program.findByIdAndRemove(args.id);
            return deletedItem
        }
    }
}