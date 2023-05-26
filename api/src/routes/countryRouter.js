const { Router } = require('express')
const countryRouter= Router()
const {
    getCountries, 
    getCountryById, 
    getCountriesByName } 
    = require ('../controllers/CountryController')

countryRouter.get('/', async (req,res)=>{
    try {
        const { name } = req.query
        if (name){
            return res.status(200).json(await getCountriesByName(name))
        } 
        else return res.status(200).json(await getCountries())
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
})

countryRouter.get('/:id', async (req, res) =>{
        const { id } = req.params
    try {
        const countryID= await getCountryById(id)
        res.status(200).json(countryID)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

module.exports= countryRouter
