const axios = require ('axios')
const {Country} = require('../db')

const getApiData= async () => {

    const respuestaApi= await axios.get("https://rest-countries.up.railway.app/v3/all")
    

    const paisesFiltrados = respuestaApi.data.map(country=>{
        const result={
            id: country.cca3,
            name: country.name.common,
            image: country.flags[0],
            continente: country.region,
            capital: country.capital ? country.capital : "Not Found",
            subregion: country.subregion ? country.subregion : "Not Found",
            area: country.area? country.area : "Not Found",
            poblacion: country.population

        }
        return result
    })

   await Country.bulkCreate(paisesFiltrados, { ignoreDuplicates: true })


} 

module.exports= getApiData

// const axios = require('axios');

// axios.get('https://restcountries.com/v3/all')
//   .then(response => {
//     console.log(response);
//   })
//   .catch(error => {
//     console.error(error);
//   });



