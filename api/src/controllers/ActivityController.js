const { Model } = require('sequelize')
const { Activity, Country } = require ('../db')


const postActivities= async ({nombre, dificultad, temporada, duracion, country}) => {
    if (!nombre || !dificultad || !temporada || !duracion) {
        throw new Error ('Data is missing to create the activity')
    }
    const newActivity= await Activity.create({nombre, dificultad, temporada, duracion})
    if (country){
        const countriesSearched= await Country.findAll({
            where: {id : country } 
        })
        await newActivity.addCountry(countriesSearched) 
    }
    return newActivity
}

const getActivities = async () =>{ 
    const allActivies= await Activity.findAll()

    return allActivies 
}

module.exports= {
    getActivities, 
    postActivities
}