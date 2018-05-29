// Get Selenium and the drivers
let seleniumServer = require('selenium-server');
let chromedriver = require('../node_modules/chromedriver/lib/chromedriver');
let geckodriver = require('geckodriver');

let SELENIUM_CONFIGURATION = {
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

let CHROME_CONFIGURATION = {
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

let FIREFOX_CONFIGURATION = {
  browserName: 'firefox',
  javascriptEnabled: true,
  acceptSslCerts: true,
  nativeEvents: true
};

let SAFARI_CONFIGURATION = {
  browserName: 'safari',
  javascriptEnabled: true,
  acceptSslCerts: true,
  nativeEvents: true
};

let DEFAULT_CONFIGURATION = {
  launch_url: 'https://stena-bulk-dev.htec.co.rs/',
  selenium_port: 4444,
  selenium_host: 'localhost',
  screenshots: {
    enabled: false,
    path: 'stena_orbit/screenshots'
  },
  globals: {  
    waitForConditionTimeout: 10000
  },
  desiredCapabilities: CHROME_CONFIGURATION
};

let ENVIRONMENTS = {
  default: DEFAULT_CONFIGURATION
};

module.exports = {
  src_folders: ['stena_orbit/tests'],  // Folders with tests
  output_folder: 'stena_orbit/report', // Where to output the test reports
  custom_commands_path: '',
  custom_assertions_path: '',
  page_objects_path: 'stena_orbit/pages',
  globals_path: '',
  selenium: SELENIUM_CONFIGURATION,
  test_settings: ENVIRONMENTS,
  test_workers: {
    // This allows more then one browser to be opened and tested in at once
    enabled: false,
    workers: 'auto'
  }
};