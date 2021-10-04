import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// how our document look like
const gymSchema = mongoose.Schema({
    gymImg: Object,
    gymAddress: String,
    gymName: String,
    gymDescription: String
});

autoIncrement.initialize(mongoose.connection);
gymSchema.plugin(autoIncrement.plugin, 'gymadded');
// we need to turn it into a model
const postGym = mongoose.model('gymadded', gymSchema);

export default postGym;