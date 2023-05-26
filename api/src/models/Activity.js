const { DataTypes } = require('sequelize')

module.exports= (sequelize)=> {
    sequelize.define('activity', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dificultad:{
            type: DataTypes.ENUM('1','2','3','4','5'),
            allowNull: false
        },
        duracion:{
            type: DataTypes.INTEGER,
            allowNull:true
        },
        temporada:{
            type: DataTypes.ENUM('verano', 'otoño', 'invierno','primavera'),
            allowNull: false
        }
    },{timestamps: false})
}