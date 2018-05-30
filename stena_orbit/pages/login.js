const loginCommands = {
    login(email, pass) {
      return this
        .waitForElementVisible('@emailInput')
        .setValue('@emailInput', email)
        .setValue('@passInput', pass)
        .waitForElementVisible('@loginButton')
        .click('@loginButton')
    }
  };
  
  module.exports = {
    url: function() { 
        return this.api.launchUrl + '/#/login'; 
      },
    commands: [loginCommands],
    elements: {
      emailInput: {
        selector: 'input[id=loginEmail]'
      },
      passInput: {
        selector: 'input[id=loginPassword]'
      },
      loginButton: {
        selector: 'button[type=submit]'
      }
    }
  };