import crypto from 'crypto'

const gerenateString = () => crypto.randomBytes(15).toString('hex')

export default gerenateString
