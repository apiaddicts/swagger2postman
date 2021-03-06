/** Part of APIAddicts. See LICENSE fileor full copyright and licensing details. Supported by Madrid Digital and CloudAPPi **/

'use strict'

const yaml = require('js-yaml');
const fs   = require('fs');
const argv = require('yargs').argv
const path = require('path')

module.exports = function() {
  
  return function get(){

	if (path.extname(argv.file) !== '.yaml' && path.extname(argv.file) !== '.yml'){
		require('../utils/error.js')('The yaml format not exist or not is correct: '+argv.file);
	}

	let definition;
	try {
		definition = yaml.safeLoad(fs.readFileSync(argv.file, 'utf8'));
	} catch (e) {
	  	require('../utils/error.js')('The yaml format not exist or not is correct: '+argv.file);
	}
	return definition;
  };

}()