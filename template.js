/*
 * grunt-init-lesswatcher
 * https://gruntjs.com/
 *
 * Copyright (c) 2015 Georgi Stoyanov
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Create a basic grunt setup for watching and comiling less files.';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'This setup is configured to watch every *.less file in the "less" folder ' +
  'and compile the file "less/styles.less" to "styles.css". All of this can be changed in the ' +
  'Gruntfile.';

exports.after = 'You should run _npm install_ now. Have fun :)';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = 'Gruntfile.js';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({}, [], function(err, props) {

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);


    // If is package_json true, generate package.json
    var devDependencies = {
      'grunt': '~0.4.5',
      'grunt-contrib-less': '~1.0.0',
      'grunt-contrib-watch': '~0.6.1'
    };

    // Generate package.json file, used by npm and grunt.
    init.writePackageJSON('package.json', {
      node_version: '>= 0.10.0',
      devDependencies: devDependencies
    });

    // All done!
    done();
  });

};
