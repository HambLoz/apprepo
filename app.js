import  express  from 'express'
import router from './Routes/routes.js'
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors());

app.use('/',router);

  
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log( `El servidor esta corriendo en http://localhost:${PORT}`)
})  