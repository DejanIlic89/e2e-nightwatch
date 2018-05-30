module.exports = {
    'default': { // 'default' environnement parameters
        email : 'user@user.com',
        password : 'St3n@2016'
    },
    'staging': { // 'staging' environnement parameters
        email : 'user@user.com',
        password : 'Sten@2016'
    },
  
    // Abord all on test fail
    abortOnAssertionFailure: true,
  
    // Duration between two checks
    waitForConditionPollInterval: 300,
  
    // Timeout duration
    waitForConditionTimeout: 10000,
  
    /*
     * Define if the test failed when many HTML elements are found when
     * we expect only one
     */
    throwOnMultipleElementsReturned: false,
  
    // Before/After Hooks of all tests
    // before : function(client) {
        // const login = client.page.login();
        // console.log('Setting up...');

    //     login.navigate()
    //         .login(client.globals.email, client.globals.password)
    //         .waitForElementPresent('.icon-menu', 'element %s is present within %d ms');
    // },
    // after : function(client) {
    //     client.end();
    //     console.log('Closing down...');
    // },
    // beforeEach : function(client) {
    //     console.log('Before Each..');
    // },
    // afterEach : function(client) {
    //     console.log('After Each..');
    // }

//      This will be run before each test suite is started
  beforeEach: function(client, done) {
//     // getting the session info
//     // client.status(function(result) {
//     //   console.log(result.value);
//     //   done();
//     // });
    client.perform(function(client, done) {
        client.page.login()
            .navigate()
            .login(client.globals.email, client.globals.password)
            .waitForElementPresent('.icon-menu', 'element %s is present within %d ms');
        done();
    });
    // client.page.login(function(login) {
    //     login.navigate()
    //         .login(client.globals.email, client.globals.password)
    //         .waitForElementPresent('.icon-menu', 'element %s is present within %d ms');
    //     done();
    // });
//     const login = client.page.login();

//     login.navigate()
//         .login(client.globals.email, client.globals.password)
//         .waitForElementPresent('.icon-menu', 'element %s is present within %d ms');
//     done();
  },

//   This will be run after each test suite is finished
  afterEach: function(client, done) {
    console.log(client.currentTest);
    client.end();
    done();
  }
};