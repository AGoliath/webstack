module.exports = function (grunt) {


    // TODO split it into separate files once its somewhat stable...
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: [".tmp", "dist", "dist_maps"],

        includeSource: {
            options: {
                basePath: 'app',
                baseUrl: '',
                templates: {
                    html: {
                        js: '<script src="{filePath}"></script>'
                    }
                }
            },
            app: {
                files: {
                    'app/index.html': 'app/index.template.html'
                }
            }
        },

        nggettext_extract: {
            all: { files: {
                'po/template.pot': ['app/partials/*.html', 'app/partials/**/*.html' ]
            }   }
        },

        nggettext_compile: {
            all: {
                files: {
                    'app/js/translations.js': ['po/*.po']
                }    }
        },

        copy: {
            default: {
                expand: true,
                cwd: "app",
                src: ['**', '!index.template.html', '!js/**' , '!css/**'  ],
                dest: 'dist/'
            }
        },
        uglify: {
            options: {
                sourceMap: true,
                sourceMapName: "dist_map/app.js.map"
            }
        },
        useminPrepare: {
            html: 'app/index.html'
        },
        usemin: {
            html: ['dist/index.html']
        },
        ngmin: {
            default: {
                src: '.tmp/concat/js/app.js',
                dest: '.tmp/concat/js/app.js'
            }
        },
        less: {
            default: {
                options: {
                    cleancss: true,
                    modifyVars: {
                        //   bgColor: 'red'
                    }
                },
                files: {
                    "dist/css/app.css": "app/css/app.less"
                }
            }
        },

        lessless: {
            buildDir: 'dist'
        },

        htmlmin: {
            default: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'dist/index.html'
                }
            }
        },

        karma: {
            unit: {
                configFile: 'test/karma.conf.js',
                autoWatch: true
            },
            unitsingle: {
                configFile: 'test/karma.conf.js',
                singleRun: true
            }
        },

        "http-server": {
            'app': {
                root: 'app/',
                host: "127.0.0.1",
                port: 8282,
                cache: 0,
                showDir: true,
                autoIndex: true,
                defaultExt: "html",

                runInBackground: true
            },
            'dist': {
                root: 'dist/',
                host: "127.0.0.1",
                port: 8585,
                cache: 0,
                showDir: false,
                autoIndex: false,
                defaultExt: "html",
                // DO NOT run in parallel with other tasks - blocks the execution
                runInBackground: false
            },
        // definition for e2e tests
            'e2e': {
                root: 'app/',
                host: "127.0.0.1",
                port: 18181,
                cache: 0,
                showDir: false,
                autoIndex: false,
                defaultExt: "html",
                runInBackground: true
            }
        },
        protractor: {
            options: {
                configFile: "node_modules/protractor/referenceConf.js", // Default config file
                keepAlive: true, // If false, the grunt process stops when the test fails.
                noColor: false, // If true, protractor will not use colors in its output.
                args: {
                    // Arguments passed to the command
                }
            },
            dist: {
                options: {
                    configFile: "test/protractor.conf.js", // Target-specific config file
                    args: {} // Target-specific arguments
                }
            }
        }

    });

    //loads all required grunt plugins based on package.json
    require('load-grunt-tasks')(grunt);


    /**
     * The default task simply creates a little help message describing the tasks defined below
     */
    grunt.registerTask("default", "displays a simple help message.", function () {
        grunt.log.writeln("This gruntfile currently supports the following tasks:");
        grunt.log.writeln("clean - cleans all output dirs created by deploy");
        grunt.log.writeln("deploy - creates the dist version of the app. see readme.md for more details");
        grunt.log.writeln("generateIndex - creates a new app/index.html based on app/index.template.html and resolves all imports");
        grunt.log.writeln("lang -  updates the language files (translation tables as well as HTML/JS source code)");
        grunt.log.writeln("start -  spawns http servers for app/ and dist/ folders. Ctrl+C to kill them");
        grunt.log.writeln("karma - Launches karma to monitor the unit tests against the dist version. Spawns Firefox and Chrome. Updates on test js file changes");
    });

    // Workflow targets

    //clean and includeSource is implicitly defined via the "clean" initConfig part above

    grunt.registerTask('deploy', [ 'clean', 'nggettext_extract', 'nggettext_compile', 'copy', 'less', 'lessless', 'useminPrepare', 'concat', 'ngmin', 'uglify', 'usemin', 'htmlmin' /*, 'karma:unitsingle'*/  ]);

    grunt.registerTask("lang", ['nggettext_extract', 'nggettext_compile']);

    grunt.registerTask("generateIndex", ["includeSource:app"]);

    //test targets

    grunt.registerTask("test", ["karma:unitsingle"]);
    grunt.registerTask("watchTests", ["karma:unit"]);

    grunt.registerTask("e2etest", ["http-server:e2e","protractor:dist"]);

    //http server
    grunt.registerTask("start", ['http-server:app', 'http-server:dist']);


};