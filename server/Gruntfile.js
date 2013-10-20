module.exports = function (grunt) {

    grunt.initConfig({
        distdir: 'dist',
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.name %> v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */ \n',
        src: {
            scripts: ['client/src/scripts/**/*.js'],
            styles: ['client/src/styles/**/*.css'],
            specs: ['test/**/*.spec.js'],
            stylus: ['stylus/*.styl']
        },
        stylus: {
            compile: {
                options: {
                    compress: false,
                    paths: ['path/to/import', 'another/to/import'],
                    linenos: false,
                    urlfunc: 'embedurl', // use embedurl('test.png') in our code to trigger Data URI embedding
                    use: [
                        require('nib') // use stylus plugin at compile time
                    ],
                    import: [    //  @import 'foo', 'bar/moo', etc. into every .styl file
                        //'foo',       //  that is compiled. These might be findable based on values you gave
                        'nib'    //  to `paths`, or a plugin you added under `use`
                    ]
                },
                files: {
                    'client/src/styles/base.css': 'stylus/base.styl'
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            stylus: {
                files: '<%= src.stylus %>',
                tasks: ['stylus']
            }
        }
    });

    [
        'grunt-contrib-clean',
        'grunt-contrib-watch',
        'grunt-contrib-concat',
        'grunt-contrib-uglify',
        'grunt-contrib-jshint',
        'grunt-contrib-csslint',
        'grunt-contrib-copy',
        'grunt-contrib-stylus',
        'grunt-contrib-cssmin'
    ].forEach(grunt.loadNpmTasks);

    // Print a timestamp (useful for when watching)
    grunt.registerTask('timestamp', function() {
        grunt.log.subhead(Date());
    });


};
