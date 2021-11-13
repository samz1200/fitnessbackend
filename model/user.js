import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// how our document look like
const userSchema = mongoose.Schema({
    referral: String,
    fName: String,
    lName: String,
    dateOfBirth: String,
    gender: String,
    userType: String,
    email: String,
    pNumber: String,
    address: String,
    unit: String,
    emContactfName: String,
    emContactlName: String,
    emContacteMail: String,
    emContactpNumber: String,
    password: String,
    confirmPassword: String,
    selectedGyms: Array,
    freeMessage: String,
    freePhysicalTherapy: String,
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'user');
// we need to turn it into a model
const postUser = mongoose.model('user', userSchema);

export default postUser;