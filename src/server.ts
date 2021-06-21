import express from 'express';
const app = express();

app.get('/test', (req, res)=>{
    return res.send("Olá!")
})

app.post('/test-post', (req, res)=>{
    return res.send('Method post')
})

app.listen(3000, () => console.log('Server is Running!'))