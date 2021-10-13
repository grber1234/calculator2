/**
 * @file main.js
 * @module main
 * @description Contains all customer facing functions to are used to interface with the rest of the application framework.
 * @requires module:warden
 * @requires {@link https://www.npmjs.com/package/path%7Cpath%7D
 * @author Glenn Butler
 * @date 2021/10/12
 * @copyright Copyright © 2021-… by Glenn Butler. All rights reserved
 */
import warden from './controllers/warden';
var path = require('path');
var baseFileName = path.basename(module.filename, path.extname(module.filename));
var namespacePrefix = `framework.${baseFileName}.`;

/**
 * @function initFramework
 * @description Initializes the framework systems.
 * @param {object} clientConfiguration A configuration data object that contains
 * all the data needed to bootstrap the framework for a client application.
 * @return {void}
 * @author Glenn Butler
 * @date 2021/10/12
 */
function initFramework(clientConfiguration) {
  let functionName = initFramework.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`clientConfiguration is: ${JSON.stringify(clientConfiguration)}`);
  warden.processRootPath(clientConfiguration);
  console.log(`END ${namespacePrefix}${functionName} function`);
};

export default {
  initFramework
};
