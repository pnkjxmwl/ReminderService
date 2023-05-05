const express =require('express')
 const bodyParser= require('body-parser')
const { sendBasicEmail } = require('./services/email-service')

 const {PORT} =require('./config/serverConfig')
 const setupAndStartServer =()=>{
     const app= express()
     app.use(bodyParser.json())
     app.use(bodyParser.urlencoded({extended:true}))

     app.listen(PORT,()=>{
        console.log('server started on ',PORT);
        // sendBasicEmail(
        //     'support@admin.com',
        //     'pankajsemwalpankaj123@gmail.com',
        //     'TESTing ',
        //     'hello my server friend'
        // )
     })

}
setupAndStartServer()