#!/usr/bin/env node

var fs = require('fs')

function toTheOutputFile(){
	return "foo.txt"
}

function withDataOf(){
	return "A startup is a business built to grow rapidly\n"
}

fs.writeFileSync(toTheOutputFile(), withDataOf())
console.log("written the file")
