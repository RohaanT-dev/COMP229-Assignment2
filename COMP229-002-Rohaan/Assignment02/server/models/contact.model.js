//Rohaan Talpur, 301372121, and 26th October 2024
import mongoose from 'mongoose'
const ContactSchema = new mongoose.Schema({
 firstname: {
 type: String,
 trim: true,
 required: 'Name is required'
 },

 lastname: {
    type: String,
    trim: true,
    required: 'Name is required'
    },
 email: {
 type: String,
 trim: true,
 unique: 'Email already exists',
 match: [/.+\@.+\..+/, 'Please fill a valid email address'],
 required: 'Email is required'
 },
 
 });
export default mongoose.model('Contact', ContactSchema);
