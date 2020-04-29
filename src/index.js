import 'babel-polyfill'
import app from './server'
import { PORT } from './config'

app.listen(PORT, () => console.log(`Server running at ${PORT}`))

export default app
