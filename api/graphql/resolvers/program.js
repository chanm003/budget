const Program = require('../../models/program');

module.exports = {
    program: async (args, req) => {
        const item = await Program.findById(args.id);
        return item;
    },
    programs: async (args, req) => {
        const items = await Program.find();
        return items;
    },
    createProgram: async (args, req) => {
        const item = new Program({
            ...args.input
        });
        const result = await item.save();
        return result;
    },
    updateProgram: async (args, req) => {
        const result = await Program.findByIdAndUpdate(args.id, args.input, { new: true })
        return result;
    },
    removeProgram: async (args, req) => {
        const deletedItem = await Program.findByIdAndRemove(args.id);
        return deletedItem
    }
}