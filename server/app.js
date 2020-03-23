const Koa = require('koa')
const session = require('koa-session')
const static = require('koa-static')
const Router = require('./router')


const sessionStore = {
    _store: {},
    get: function (key) {
        return this._store[key]
    },
    set: function (key, session) {
        this._store[key] = session
    },
    destroy: function () {
        delete this._store[key]
    }
}

module.exports = async () => {
    // create server
    const app = new Koa()

    // Add some assertions required in a production environment
    if (process.env.NODE_ENV === "production") {
        !process.env.SECRET_KEY && console.log("[WARNING] Please set SECRET_KEY env variable.")
    }
    app.keys = [process.env.SECRET_KEY || "SECRET_KEY"]

    // Add middleware
    app.use(session({
        store: sessionStore
    }, app))

    // Add routes
    const router = await Router()
    app.use(router.routes())
    app.use(router.allowedMethods())

    return app
}