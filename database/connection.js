import mongoose from "mongoose";

export const connection=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"JOB_PORTAL"
    }).then(()=>{
console.log("connected to databse")
    }).catch(err=>{
console.log(`some erroe occ while conn with  db : ${err}`)
    })

}
