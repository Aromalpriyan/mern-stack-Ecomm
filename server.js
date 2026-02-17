import app from "./src/app.js"
import config from "./src/config/config.js";
import colors from "colors"

const PORT = config.PORT


app.listen(PORT,()=>{
    console.log(`App is Successfully running at PORT: ${PORT}`.bgBlack.blue);
})