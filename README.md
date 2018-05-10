# e2e-nightwatch
## Setup of Nightwatch testing framework &amp; running end-to-end tests
## 1. Instalation
To install Nightwatch.js you need to things :   
> + A **_[Selenium](https://www.seleniumhq.org/)_** server  
> + Nightwatch.js test runner

- To install Nightwatch use : <br/>
	> npm install [-g] nightwatch

	or you can install it locally : <br/>
	> npm install [--save-dev] nightwatch


- To run tests, first you need to start Selenium server by webdriver-manager tool.<br/>
Make sure to install globally webdriver-manager (`npm install -g webdriver-manager`).
	```
	- webdriver-manager update
	- webdriver-manager start
	```

- Running test commands : <br/>`node nightwatch -e chrome`, <br/>`nightwatch --e <env-name> /test_path/test_dir/*.js`, <br/>`nightwatch --e <env-name> --tags <tag-name>`

	We don't need to write all this every time if we put the commands in the package.json scripts object : <br/>

	`package.json`

	![image](figures\script.png)

	We can run scripts as following:
	> npm run-script `test`<br/>
npm run-script `run`

## Configuration
The Nightwatch test runner expects a configuration file to be passed, using by default a `nightwatch.json` file from the current directory. A `nightwatch.conf.js` will also be loaded by default if found. But by precedence, `nightwatch.conf.js` will be loaded by default if both the configuration files are found to be present within the current directory.

- Sessions monitoring: [Session view](http://localhost:4444/wd/hub/static/resource/hub.html)
