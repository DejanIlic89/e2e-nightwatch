module.exports = {
    '@tags': ['stena'],
    'Login test': (client) => {
      client
        .url(client.launch_url)
        .waitForElementVisible('body')
        .assert.title('Stena Orbit')
        .click('input[id=loginEmail]')
        .setValue('input[id=loginEmail]', 'superadmin@stena.com')
        .click('input[id=loginPassword]')
        .setValue('input[id=loginPassword]', 'Sten@2016')
        .click('.sten-validation-button')
        .waitForElementPresent('.icon-menu', 'element %s is present within %d ms')
        .end();
    }
  };