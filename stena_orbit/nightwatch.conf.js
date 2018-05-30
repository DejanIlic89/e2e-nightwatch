// Get Selenium and the drivers
const seleniumServer = require('selenium-server');
const chromedriver = require('../node_modules/chromedriver/lib/chromedriver');
const geckodriver = require('geckodriver');

const SELENIUM_CONFIGURATION = {
  start_process: true,
  server_path: seleniumServer.path,
  log_path: 'stena_orbit/logs', // Where to output the test reports
  host: '127.0.0.1',
  port: 4444, // Standard selenium port
  cli_args: {
    'webdriver.chrome.driver': chromedriver.path,
    'webdriver.gecko.driver': geckodriver.path
  }
};

const CHROME_CONFIGURATION = {
  browserName: 'chrome',
  javascriptEnabled: true,
  acceptSslCerts: true,
  nativeEvents: true,
  chromeOptions: {
    args: [
      "disable-web-security",
      "ignore-sertificate-errors",
      "start-fullscreen",
      "--no-sandbox",
      "--test-type"
    ]
  }
};

const FIREFOX_CONFIGURATION = {
  browserName: 'firefox',
  javascriptEnabled: true,
  acceptSslCerts: true,
  nativeEvents: true
};

const SAFARI_CONFIGURATION = {
  browserName: 'safari',
  javascriptEnabled: true,
  acceptSslCerts: true,
  nativeEvents: true
};

const DEFAULT_CONFIGURATION = {
  launch_url: 'https://stena-bulk-dev.htec.co.rs',
  selenium_port: 4444,
  selenium_host: 'localhost',
  screenshots: {
    enabled: false,
    path: 'stena_orbit/screenshots'
  },
  // globals: {  
  //   // Abort all on test fail
  //   abortOnAssertionFailure: true,
  //   // Duration between two checks
  //   waitForConditionPollInterval: 300,
  //   // Timeout duration
  //   waitForConditionTimeout: 10000
  // },
  desiredCapabilities: CHROME_CONFIGURATION
};

const STAGING_CONFIGURATION = Object.assign({}, 
  DEFAULT_CONFIGURATION, {
    launch_url: 'https://stena-bulk.htec.co.rs'
});

const ENVIRONMENTS = {
  default: DEFAULT_CONFIGURATION,
  staging: STAGING_CONFIGURATION
};

module.exports = {
  src_folders: ['stena_orbit/tests'],  // Folders with tests
  output_folder: 'stena_orbit/reports', // Where to output the test reports
  custom_commands_path: '',
  custom_assertions_path: '',
  page_objects_path: 'stena_orbit/pages',
  globals_path: 'stena_orbit/globals.js',
  selenium: SELENIUM_CONFIGURATION,
  test_settings: ENVIRONMENTS,
  test_workers: {
    // This allows more then one browser to be opened and tested in at once
    enabled: false,
    workers: 'auto'
  }
};