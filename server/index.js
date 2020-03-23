const App = require('./app')
const default_port = 8080

const PORT = process.env.PORT || default_port

App()
    .then(app => app.listen(PORT))
    .then(() => console.log(`[SUCCESS] App listening at port: ${PORT}`))
    .catch(err => {
        console.error(err)
        process.exit(1)
    })