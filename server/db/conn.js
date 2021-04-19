const mongoose = require('mongoose');

const DB = process.env.DATABASE;


mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log(`CONNECTION SUCCESSFUL`);
}).catch(() => console.log(`CONNECTION not  setup`));