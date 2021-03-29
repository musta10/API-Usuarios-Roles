import {Schema, model} from "mongoose";

const privateChanel = new Schema({
    name: String,
    description: String
}, 
{
    timestamps: true,
    versionKey: false
})

export default model('private', privateChanel)