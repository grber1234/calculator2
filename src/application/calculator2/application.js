#!/usr/bin/env node

/**
 * @file application.js
 * @module application
 * @description This is the main init for the calculator2 application.
 * It contains the main program loop and/or basic argument parsing.
 * Of course most of the detailed work is handed off to the appication framework.
 * @requires module:main
 * @requires {@link https://www.npmjs.com/package/prompt-sync%7Cprompt-sync%7D
 * @requires {@link https://www.npmjs.com/package/path%7Cpath%7D
 * @author Glenn Butler
 * @date 2021/10/12
 * @copyright Copyright © 2021-… by Glenn Butler. All rights reserved
 */
 import main from '../../framework/main';
 const prompt = require('prompt-sync')();
 var path = require('path');
 global.appRoot = path.resolve(process.cwd());
 var rootPath = '';
 var baseFileName = path.basename(module.filename, path.extname(module.filename));
 var namespacePrefix = `application.${baseFileName}.`;

 /**
 * @function bootstrapApplication
 * @description Setup all the application data and configuration settings.
 * @return {void}
 * @author Glenn Butler
 * @date 2021/10/12
 */
function bootstrapApplication() {
  rootPath = path.resolve(process.cwd()) + '\\application\\Calculator2\\';
  let appConfig = {
    "applicationName": "Calculator2",
    "rootPath": rootPath
  };
  main.initFramework(appConfig);
};

/**
 * @function application
 * @description This is the main program loop, the init for the entire application.
 * @return {void}
 * @author Glenn Butler
 * @date 2021/10/12
 */
function application() {
  let functionName = application.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  let argumentDrivenInterface = false;
  let commandInput;
  let commandResult;

  if (argumentDrivenInterface === false) {
    console.log('BEGIN main program loop');
    console.log('BEGIN command parser');
    while(programRunning === true) {
      commandInput = prompt('>');

      if (commandInput.toUpperCase() === 'EXIT') {
        console.log('END command parser');
        programRunning = false;
        console.log('END main program loop');
        console.log('Exiting, Good bye, Have a nice day & stay safe!');
        break;
      }
    }
  }
  console.log(`END ${namespacePrefix}${functionName} function`);
};

// Launch the application!!
let programRunning = false;
bootstrapApplication();
programRunning = true;
application();
