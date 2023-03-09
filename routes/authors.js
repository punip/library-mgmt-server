import  express from "express";


const authors = [
    {
        id:1,
        name:'puneeth',
        gender: 'm',
        address: {
            county: 'INDIA',
            state: 'Karnataka',
            pincode: 571201
        }
    },
    
    {
        id:2,
        name: 'preetham',
        gender:'m',
        address: {
            country: 'USA',
            state: 'texas',
            pincode: 570006
        }
    }
]


const authorsRouter = express.Router();

authorsRouter.get('/authors',(req,res) => {
    res.send(authors);
})


export default authorsRouter;