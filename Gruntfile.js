
var src= [
    'nosql',
    'config.js',
    'Gruntfile.js',
    'src/**/*.js'
];

module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            bin: {
                files: src,
                tasks: ['jshint:all']
            }
        },
        jshint: {
            all:
            {
                options: {
                    'noempty': true,
                    'evil': true,
                    'sub': true,
                    'proto': true
                },
                src: src,
            }
        },

        /**
         *  Usage: (Sarting with v0.0.1)
         *      grunt bump - v.0.02
         *      grunt bump:patch - v0.0.3
         *      grunt bump:minor - v0.1.0
         *      grunt bump:major - v1.0.0
         *      grunt bump:prerelease - v1.0.0-1
         *      grunt bump:git
         */
        bump: {
            options: {
                files: ['package.json'],
                updateConfigs: ['config', 'public/bower.json', 'public/package.json', 'config.bin.js'],
                commit: true,
                commitMessage: "Release v%VERSION%",
                commitFiles: ['-a'],
                createTag: true,
                tagName: 'v%VERSION%',
                tagMessage: 'Version %VERSION%',
                push: true,
                pushTo: 'origin',
                gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-bump');

    grunt.registerTask('default', 'default task', function (){
        grunt.task.run('watch');
    });
};
