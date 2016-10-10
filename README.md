# About this
This is a Sample Code of Bot Application.

# How to execute Unit Test
1. Download dependecies.
```
$ cd bot_sample
$ npm install
```

2. Run a target project on a Command Prompt.
```
$ cd bot_sample
$ npm start

3. Run a test programs on another prompt.

```
$ cd bot_sample
$ mocha
```

# Classes
## bin
* www: A main function called by `npm start`.

## config
* default.json: A default configuration file. Set test messenger servers in sample code for unit test.

## models
* item: connect to mongoDB and get sku by sku_code from messenger applications.

## routes
* common: Call `models.item` to get sku data.
* facebook: Receive and send messeges with Facebook messenger.
* line: Receive and send messeges with LINE.

## test
* facebook: Test cases for Facebook messenger.
* facebook_client: Call the bot application emulating to Facebook Messenger.
* facebook_server: Receive messeges from the bot application as Facebook Messenger.
* line: Test cases for LINE.
* line_client: Call the bot application emulating to LINE.
* line_server: Receive messeges from the bot application as LINE.
### reply
* facebook: Actual replied data from the bot application. (This file is not contain on Github)
* facebook_expected: Expected replied data from the bot application.
* line: Actual replied data from the bot application. (This file is not contain on Github)
* line_expected: Expected replied data from the bot application.

### request
* This files are input data of each test cases. this data will be sent to the bot application.
