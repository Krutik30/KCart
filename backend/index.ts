import express from 'express';

const app = express();

app.get('/',(req, res)=>{
    res.json({title: 'yes it is'});
});

app.listen(3000, ()=>{
    console.log('it it live on 3000');
})