import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// how our document look like
const gymOptionSchema = mongoose.Schema({
    price: Number,
    value: String,
});

autoIncrement.initialize(mongoose.connection);
gymOptionSchema.plugin(autoIncrement.plugin, 'gym');
// we need to turn it into a model
const postGymOptions = mongoose.model('gym', gymOptionSchema);

export default postGymOptions;