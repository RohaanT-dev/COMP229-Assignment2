//Rohaan Talpur, 301372121, and 26th October 2024
const config = {
    env: process.env.NODE_ENV || 'development', 
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
    mongoUri: process.env.MONGODB_URI ||"mongodb+srv://Rohaan_Talpur:Blackrose321@comp229.ib8xo.mongodb.net/Skeleton?retryWrites=true&w=majority&appName=COMP229"||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' + 
   (process.env.MONGO_PORT || '27017') +
    '/mernproject' 
    }
    export default config
   