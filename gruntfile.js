module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        less: {
            production: {
                options: {
                    compress: true
                },
                files: {
                    "./build/styles/main.min.css": "./source/styles/main.less"
                }
            }
        },
        watch: {
            less: {
                files: ["./source/styles/**/*.less"],
                tasks: ["less:production"]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.registerTask("default", ["watch"]);
}