import express from 'express'

const app=express()

app.get('/users', async (req, res) => {
    try {
       
        res.json('hi');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(8000,()=>{
    console.log('server is working')

})
