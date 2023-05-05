const express =require('express')
 const bodyParser= require('body-parser')
const { sendBasicEmail } = require('./services/email-service')

var cron = require('node-cron');


 const {PORT} =require('./config/serverConfig')
 const setupAndStartServer =()=>{
     const app= express()
     app.use(bodyParser.json())
     app.use(bodyParser.urlencoded({extended:true}))

     app.listen(PORT,()=>{

        console.log('server started on ',PORT);
        // cron.schedule('*/1 * * * *', () => {
        //     console.log('running a task every  minute');
        //   });

        // sendBasicEmail(
        //     'support@admin.com',
        //     'pankajsemwalpankaj123@gmail.com',
        //     'TESTing ',
        //     'hello my server friend'
        // )
     })

}
setupAndStartServer()