var http = require('http')
var url = require('url')

function start(route) {

    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname
        console.log("request received  for " + pathname)

        route(pathname)

        response.writeHead(200, {"Content-Type": "text/plain"})
        response.write("Hello World!")
        response.end()
    }

    console.log("Starting http server")

    http.createServer(onRequest).listen(8989)

    console.log("HTTP server now running")
}

exports.start = start
