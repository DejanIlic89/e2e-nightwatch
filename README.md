# e2e-nightwatch
Setup of Nightwatch testing framework &amp; running end-to-end tests

- To run tests, first you need to start Selenium server by webdriver-manager tool.
Make sure to install globally webdriver-manager (npm install -g webdriver-manger).
	# webdriver-manager update
	# webdriver-manager start

- Running test command: node nightwatch -e chrome

- Sessions monitoring: http://localhost:4444/wd/hub/static/resource/hub.html
