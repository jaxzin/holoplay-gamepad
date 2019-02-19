module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        copydeps: {
            three: {
                options: {
                    minified: false,
                    unminified: false,
                    include: {
                        js: {
                            'uupaa.gamepad.js/lib/*.js': 'GamePad/',
                        }
                    }
                },
                pkg: 'package.json',
                dest: {
                    js: 'dependencies/'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-copy-deps');

    // Combine all actions into a single task
    grunt.registerTask('install', ['copydeps']);

};