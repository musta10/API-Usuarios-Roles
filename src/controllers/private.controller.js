import Private from "../models/Private"


export const createPrivate = async (req, res) => {
    // console.log(req.body);
    const {name, description} = req.body
    const newPrivate = new Private({name, description});
    const privateSaved = await newPrivate.save()
    res.status(201).json(privateSaved)
}
export const getPrivate = (req, res) => {
    res.json('obtener chanels')
}
export const getPrivateById = (req, res) => {

}
export const updatePrivateById = (req, res) => {

}
export const deletePrivateById = (req, res) => {

}