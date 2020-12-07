express = require('express')
app = express()
port = 3000
app.get('/',(req,res) => res.json([{
    name:"kuna",
    email:"jaanke kya karega ?"
},{
    name:"looooool",
    email:"kuchh nahi?"
},
{
    name:"haa",
    email:"jaana lavde?"
},
{
    name:"haa",
    email:"jaana lavde?"
},
]))
app.listen(port,()=>console.log(`Example app listening on port ${port}!`))
