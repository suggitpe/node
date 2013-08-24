var http = require('http')
var url = require('url')

function start(route, handle) {

    var port = 8989

    function onRequest(request, response) {
        var postData = ""
        var pathname = url.parse(request.url).pathname
        console.log("request received  for " + pathname)

        request.setEncoding("utf8")
        request.addListener("data", function (postDataChunk) {
            postData += postDataChunk
        })
        request.addListener("end", function () {
            route(handle, pathname, response, postData)
        })


    }

    http.createServer(onRequest).listen(port)

    console.log("HTTP server now running on http://localhost:" + port)
}

exports.start = start
