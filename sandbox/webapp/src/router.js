function route(handle, pathname, response, postData) {

    console.log("Routing to " + pathname)
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, postData)
    }
    else {
        console.log("No handler found for " + pathname)
        response.writeHead(404, {"Content-Type:": "text/plain"})
        response.write("404, not found")
        response.end()
    }
}

exports.route = route