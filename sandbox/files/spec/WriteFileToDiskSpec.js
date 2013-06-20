'use strict'

describe("WriteFileToDisk", function(){

	it("writes a file to disk with text in it", function(){
		var writeFileToDisk = WriteFileToDisk
		var file = "hello.txt"
		var fs = require('fs')

		expect(fs.existsSync(file))

	});

});