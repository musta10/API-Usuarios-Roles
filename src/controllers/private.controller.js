import Private from "../models/Private"


export const createPrivate = async (req, res) => {
    // console.log(req.body);
    const {name, description} = req.body
    const newPrivate = new Private({name, description});
    const privateSaved = await newPrivate.save()
    res.status(201).json(privateSaved)
}
export const getPrivate = async (req, res) => {
   const privates = await Private.find()
   res.json(privates)
}
export const getPrivateById = async (req, res) => {
    const privateGroup = await Private.findById(req.params.privateId)
    res.status(200).json(privateGroup)

}
export const updatePrivateById =  async (req, res) => {
   const updatedPrivate = await Private.findByIdAndUpdate(req.params.privateId, req.body, {
    new: true
   })
   res.status(200).json(updatedPrivate)
}
export const deletePrivateById =  async (req, res) => {
    await Private.findByIdAndDelete(req.params.privateId)
    res.status(204).json()
}