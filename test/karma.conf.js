module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
        'test/testVariables.js',
        'dist/js/*.js',
        'test/lib/angular/angular-mocks.js',
        'test/unit/**/*.js'
    ],

    autoWatch : false,

    frameworks: ['jasmine'],

   // browsers : ['Chrome','Firefox'],
    browsers : ['Chrome','Firefox','IE'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-ie-launcher',
            'karma-jasmine'
            ],


  });
};