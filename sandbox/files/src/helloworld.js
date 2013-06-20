#!/usr/bin/env node

var fs = require('fs')

var writeFileTo = function writeFileToDisk(place, content){
	fs.writeFileSync(place(), content())
	console.log('written file');
}

var output = function toTheOutputFile(){
	return "foo.txt"
}

var data = function withDataOf(){
	return "A startup is a business built to grow rapidly\n"
}

writeFileTo(output, data)


