import { GET_COUNTRIES } from "./actions-types";
import axios from "axios"

const URL = 'http://localhost:3001/countries'

const getCountries= () => {
    return function (dispatch) {
        axios('http://localhost:3001/countries')
    }
}