// keys.js
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./keys_prod');
} else {
    module.exports = require('./keys_dev');
}

// module.exports = {
//     mongoURI: 'mongodb://demo_user:password1@ds147684.mlab.com:47684/flexjobs'
//     //Make sure this is your own unique string
// }