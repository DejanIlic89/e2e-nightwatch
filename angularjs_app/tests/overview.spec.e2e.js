module.exports = {
    'Does not show the task list if there are no tasks': function (client) {
        client
            .url('http://todomvc.com/examples/angularjs/#/')
            .waitForElementVisible('#header h1', 1000)
            .assert.hidden('#main')
            .end();
    },

    'Does not show the footer if there are no tasks': function (client) {
        client
          .url('http://todomvc.com/examples/angularjs/#/')
          .waitForElementVisible('#header h1', 1000)
          .assert.hidden('#footer')
          .end();
      },

      'Does initially focus on the input field': function (client) {
        client
          .url('http://todomvc.com/examples/angularjs/#/')
          .waitForElementVisible('#header h1', 1000)
          .assert.elementPresent('#header #new-todo:focus')
          .end();
      },

      'Shows todo items': function(client) {
        client
          .url('http://todomvc.com/examples/angularjs/#/')
          .waitForElementVisible('#header h1', 1000)
          .setValue('#new-todo', 'My new task')
          .submitForm('#todo-form')
          .assert.containsText('#todo-list li:first-child label', 'My new task')
          .end();
      },
};