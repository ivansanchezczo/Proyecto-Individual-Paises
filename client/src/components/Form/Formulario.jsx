import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Form.module.css"
import { Link } from "react-router-dom";

const Formulario = () => {

    const navigate= useNavigate()

    const listDific = ["", "1", "2", "3", "4", "5"]
    const listTemp = ["", "Verano", "Otoño", "Invierno", "Primavera"]

    const [form,setForm] = useState({
        nombre: "",
        dificultad: "",
        duracion: "",
        temporada: "",
        countries: []
    })

    const [multipleOptions, setMultipleOptions] = useState([]);

    const [errors,setErrors]= useState({
        nombre: "",
        dificultad: "",
        duracion: "",
        temporada: "",
        countries: []
    })

    const handleChange= (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setForm({
            ...form, 
            [property]: value
        })
        setErrors(validate({ ...form, [property]: value }))
    }

    const handleMultipleSelectChange = (event) => {
        const options = Array.from(event.target.selectedOptions).map((option) => option.value);
        setMultipleOptions(options);
      };

    const handleSubmit= (event) => {
        event.preventDefault()
        if (Object.keys(errors).length === 0) {
            navigate("/home");
          } else window.alert("Por favor, complete todos los campos obligatorios.")
    }

    const validate= (input) => {
        const errors= {}
        
        if (!input.nombre) {
            errors.nombre = 'Se requiere un nombre';
        } else if (!input.dificultad) {
            errors.dificultad = 'Se requiere seleccionar una dificultad'
        } else if (!input.duracion) {
            errors.duracion = 'Se requieren cantidad de horas'
        } else if (!input.temporada) {
            errors.temporada = 'Se requiere seleccionar una temporada'
        }
        return errors;
    }

    return (
        <div className={style.fondo}>

        <Link to="/home"><button className={style.volver}>Volver</button></Link>

        <form onSubmit={handleSubmit} className={style.form}>

        <div className={style.conjunto0}>
            <h1 className={style.titulo}>Crear actividad</h1>
            
            <label htmlFor="nombre" className={style.nombre}>Nombre: </label>
            <input type="text" name= "nombre" value={form.nombre} onChange={handleChange} className={style.inputNombre}/>
            {errors.nombre && (<p className={style.error0}>{errors.nombre}</p>)}
        </div>

        <div className={style.conjunto1}>
            <label htmlFor="dificultad" className={style.dificultad}>Dificultad: </label>
            <select type="text" name="dificultad" value={form.dificultad} onChange={handleChange} className={style.inputDific}>
                {listDific.map((num)=>{
                    return (<option key={num} value={num}>{num}</option>)
                })}
            </select>
            {errors.dificultad && (<p className={style.error1}>{errors.dificultad}</p>)}
        </div>

        <div className={style.conjunto2}>
            <label htmlFor="duracion" className={style.duracion}>Duración: </label>
            <input type="text" name="duracion" value={form.duracion} onChange={handleChange} className={style.inputDurac}/>
            {errors.duracion && (<p className={style.error2}>{errors.duracion}</p>)}
        </div>
        

        <div className={style.conjunto3}>
            <label htmlFor="temporada" className={style.temporada}>Temporada: </label>
            <select type="text" name="temporada" value={form.temporada} onChange={handleChange} className={style.inputTemp}>
                {listTemp.map(temp=>{
                    return (<option key={temp} value={temp}>{temp}</option>)
                })}
            </select>
            {errors.temporada && (<p className={style.error3}>{errors.temporada}</p>)}
        </div>
        
        {/* <div className={style.conjunto4}>
            <label className={style.paises}>Paises participantes: </label>
            <select type="text" name="countries" value={multipleOptions} onChange={handleMultipleSelectChange} className={style.inputPaises}>
                {listTemp.map(temp=>{
                    return (<option key={temp} value={temp}>{temp}</option>)
                })}
            </select>
        </div> */}

        <button type= "Submit" className={style.buttonCrear}>Crear Actividad</button>

        </form>
        </div>
    )
}

export default Formulario;