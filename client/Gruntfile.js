module.exports = function (grunt) {

    grunt.initConfig({
        distdir: 'dist',
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.name %> v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */ \n',
        src: {
            scripts: ['src/scripts/**/*.js'],
            styles: ['src/styles/**/*.css'],
            specs: ['../test/**/*.spec.js'],
            stylus: ['../stylus/*.styl']
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
                    import: [
                        'nib'    //  to `paths`, or a plugin you added under `use`
                    ]
                },
                files: {
                    'src/styles/base.css': '../stylus/base.styl'
                }
            }
        },
        jshint:{
            files:['gruntFile.js', '<%= src.scripts %>', '<%= src.specs %>'],
            options:{
                curly:true,
                eqeqeq:true,
                immed:true,
                latedef:true,
                newcap:true,
                noarg:true,
                sub:true,
                boss:true,
                eqnull:true,
                globals:{}
            }
        },
        watch: {
            options: {
                livereload: true
            },
            stylus: {
                files: '<%= src.stylus %>',
                tasks: ['stylus']
            },
            scripts: {
                files: '<%= src.scripts %>',
                tasks: ['jshint']
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

    grunt.registerTask('default', ['jshint']);

    // Print a timestamp (useful for when watching)
    grunt.registerTask('timestamp', function() {
        grunt.log.subhead(Date());
    });


};
