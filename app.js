const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
    // const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const koaBody = require('koa-body');
const index = require('./routes/index')
const users = require('./routes/users')

// error handler
onerror(app)

// middlewares
// app.use(bodyparser())
app.use(json())
app.use(logger())
app.use(koaBody());


app.use(require('koa-static')(__dirname + '/public'))
app.use(require('koa-static')(__dirname + '/dist'))

app.use(views(__dirname + '/views', {
    extension: 'pug'
}))

// logger
app.use(async(ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start;
    ctx.type = ('text/event-stream');
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

app.use(ctx => {
    ctx.body = 'Hello World';
});

const port = require('./myConfig.js').port;
app.listen(port);
console.log('app started at port %d...', port);