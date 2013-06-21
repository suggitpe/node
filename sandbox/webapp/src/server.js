var http = require('http')

function start(){
	
	function onRequest(request, response) {
		console.log("request received")
		response.writeHead(200, {"Content-Type": "text/plain"})
		response.write("Hello World!")
		response.end()
	}

	console.log("Starting http server")

	http.createServer(onRequest).listen(8989)

	console.log("HTTP server now running")
}

exports.start = start
