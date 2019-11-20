'use strict'

const fs   = require('fs');
const argv = require('yargs').argv

module.exports = function() {
  
  return function post(target,title,endpointsPostman){
	if (! argv.target ){
		argv.target = process.cwd()+'/'
	}

	const output = {
		"info": {
			"_postman_id": "8680b1d9-579c-43d2-8035-991b269c31e0",
			"name": title,
			"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
		},
		"item": endpointsPostman
	}

	try {
		  fs.writeFileSync(target+'/'+title+'.postman_collection.json', JSON.stringify(output));
		  console.log(`Collection ${target+'/'+title+'.postman_collection.json'} was succesfully created`, {'_postman_id': output.info._postman_id, 'name': output.info.name});
	} catch(err) {
		require('../utils/error.js')('Error writing the output');
	}
  };

}()