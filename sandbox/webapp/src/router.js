function route(handle, pathname) {
    console.log("Routing to " + pathname)
    if (typeof handle[pathname] === 'function') {
        handle[pathname]()
    }
    else {
        console.log("No handler found for " + pathname)
    }
}

exports.route = route