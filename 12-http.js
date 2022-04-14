const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome to our page')
    }
    if (req.url === '/about') {

        res.end('welcome to our About page')
    }
    res.end(`<h1>OooPS!</h1>
              <p>Cannot find the page u idiot</p>
              <a href="/">back home</a>
              `)
})

server.listen(5000)