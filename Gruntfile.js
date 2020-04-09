/*global module :true*/
module.exports=function(grunt){
  grunt.initConfig({
    htmlhint:{
      optinos:{
        htmlhintrc:'.htmlhintrc'
      },
      src:'*.html'
    },
    csslint:{
      options:{
        csslintrc:'.csslintrc'
      },
      src:'*.css'
    },
    eslint:{
      options:{
        configFile:'.eslintrc.json'
      },
      target:['*.js']
    },
    htmlmin: {
      options: {
        collapseWhitespace: true,
        preserveLineBreaks: false
      },
      files: {
        src: './index.html',
        dest: 'dist/index.html'
      }
    },
    cssmin: {
      "dist/index.css":"index.css"
    },
    uglify: {
      "dist/index.js":"index.js"
    }
  });

  grunt.loadNpmTasks("grunt-htmlhint");
  grunt.loadNpmTasks("grunt-contrib-csslint");
  grunt.loadNpmTasks("grunt-eslint");
  grunt.loadNpmTasks("grunt-contrib-htmlmin");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("lint",['htmlhint','csslint','eslint']);
  grunt.registerTask("default",['htmlmin','cssmin','uglify']);
};

