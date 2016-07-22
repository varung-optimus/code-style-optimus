module.exports = function(grunt) {
    'use strict';
    // Project configuration
    grunt.initConfig({
        // Metadata
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= props.license %> */\n',
        // Task configuration
        gruntfile: {
            src: 'gruntfile.js'
        },
        eslint: {
            dev: {
                src: 'app/**/*.js',
                options: {
                    config: '.eslintrc'
                }
            }
        },
        githooks: {
            all: {
                options: {
                    hashbang: '#!/bin/sh',
                    template: './githooks/pre-commit.sh',
                    startMarker: '## GRUNT-GITHOOKS START',
                    endMarker: '## GRUNT-GITHOOKS END'
                },
                'pre-commit': './githooks/pre-commit.sh'
            }
        },
        sasslint: {
            options: {
                configFile: '.sass-lint.yml',
            },
            target: ['app/**/*.scss', 'app/**/*.sass']
        },
        jsinspect: {
            dev: {
                src: 'app/**/*.js',
                options: {
                    config: '.jsinspectrc'
                }
            }
        },
    });

    // These plugins provide necessary tasks
    grunt.loadNpmTasks("gruntify-eslint");
    grunt.loadNpmTasks('grunt-sass-lint');
    grunt.loadNpmTasks('grunt-githooks');
    grunt.loadNpmTasks('grunt-jsinspect');

    // Default Tasks
    grunt.registerTask('default', ['optimus-code-style']);

    grunt.registerTask('optimus-code-style', ['eslint', 'sasslint', 'jsinspect']);
    grunt.registerTask('setup-githooks', ['setup-githooks-node-env', 'githooks']);
    grunt.registerTask('setup-githooks-node-env', function() {
        var exec = require('child_process').execSync;
        exec('githooks/setup-githooks-node-env.sh');
    });
};
