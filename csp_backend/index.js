const app = require('./requires');

const port = process.env.PORT || 9000;
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});