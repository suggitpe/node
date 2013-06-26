var http = require('http')
var url = require('url')

function start(route, handle) {

    var port = 8989

    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname
        console.log("request received  for " + pathname)

        route(handle, pathname, response)

    }

    http.createServer(onRequest).listen(port)

    console.log("HTTP server now running on http://localhost:" + port)
}

exports.start = start
