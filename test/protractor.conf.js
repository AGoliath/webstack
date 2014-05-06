exports.config = {
    allScriptsTimeout: 11000,

    specs: [
        'e2e/**/*.js',
        'e2e/*.js'
    ],

    // Do not start a Selenium Standalone sever - only run this using chrome.
    chromeOnly: true,
    chromeDriver: '../node_modules/chromedriver/lib/chromedriver/chromedriver.exe',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },


    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};
