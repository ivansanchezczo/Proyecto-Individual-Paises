const { Router } = require('express')
const activityRouter= Router()
const { getActivities, postActivities } = require ('../controllers/ActivityController')

activityRouter.get('/', async (req,res) => {
    try {
        const activities = await getActivities()
        return res.status(200).json(activities)
    } catch (error) {
        return res.status(400).json(error.message)
    } 
})

activityRouter.post('/', async (req,res)=> {
    const newActivity = req.body
    try {
        const activityCreated= await postActivities(newActivity)
        return res.status(200).json(activityCreated)
    } catch (error) {
        return res.status(400).json(error.message)
    }


})

module.exports= activityRouter