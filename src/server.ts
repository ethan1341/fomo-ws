import * as express from 'express';
import {NextFunction} from "express";
const app = express();

app.listen(4000, async ()=>{
    console.log(' 4000is listening')
})


app.get('/groups', async (req: express.Request, res:express.Response, Next: express.NextFunction)=> {

});