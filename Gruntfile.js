module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    browserify: {
      dist: {
        files: {
          'build/general/index.js': ['src/general/**.js'],
          'build/browser_actions/index.js': ['src/browser_actions/**.js']
        }
      }
    },

    clean: ['build/'],

    copy: {
      main: {
          expand: true,
          cwd: 'src',
          src: ['**/*.html', '**/*.json', '**/*.png'],
          dest: 'build/'
      },
    },

    watch: {
      scripts: {
        files: ['src/**/*'],
        tasks: ['build'],
        options: {
          spawn: false,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.loadNpmTasks('grunt-contrib-copy');

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-browserify');

  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', 'watch');
  grunt.registerTask('build', ['clean', 'copy', 'browserify']);

};