### Quantas hotels
This is a node based application. using react, react router and express. can be executed as stand alone single page application as well
NOTE: i timeboxed my self for 5 hrs but i took more than that to complete this assignement. and i belive for a cood production level quality code i should take more tim.
i didnt included lib to kee it efficient and less dependency. the sorce code is hand written and not copy paste. just an explanation for justifying the time taken.
all the filters are functional. the implementation is ready for deployment as single page app as well server side rendering.

# Getting Started:
### Requirements: 
nodejs, npm have been installded

### Install dependencies:
- project dependencies: `cd <project-dir> && npm install`

### build app
- run command 'webpack'

### Start local server: (more robust for scalability)
- run : `node_modules/.bin/babel-node --presets 'react,es2015' src/server.js`
- browse to `localhost:3000` to view the project.

## run as single page app
1. uncomment line 35 in main.js
2. run command 'webpack'
3. start a web server inside static folder (python -m SimpleHTTPServer 8080)

## run tests: mocha, chai, jsdom, enzyme
- run command: npm run test
- to run a watcher: npm run test:watch

### TODO:
- improve test suite
- optimize code. remove duplicate code.
- code commenting.
- make it more presentable. css
- minification and jslint implementation
- implement localization
- refactor list.js to make it more readable
- may be wrap it in docker container
