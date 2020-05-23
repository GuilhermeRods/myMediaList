import jwt from 'jsonwebtoken'

import {SECRET} from  '../config'

const generateToken = idUser =>  jwt.sign({ idUser}, SECRET)

export default  generateToken
