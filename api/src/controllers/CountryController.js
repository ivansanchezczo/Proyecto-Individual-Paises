const { Country } = require ('../db')
const { Op } = require ('sequelize')

const getCountries = async () => {

   const allCountries = await Country.findAll()

   return allCountries
}

const getCountryById = async (id) => {
   const countryId = await Country.findByPk(id)
   return countryId;
}

const getCountriesByName= async (nombre) => {
   const countryByName= await Country.findOne({
      where:{
         name: {
            [Op.iLike]: `%${nombre}%`
         }
      }
   })
   if (!countryByName){
      throw new Error ('There is not a Country with that name')
   } 
   return countryByName
}

module.exports= {
   getCountries,
   getCountryById,
   getCountriesByName
}