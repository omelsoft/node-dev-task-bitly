
# REST API to URL Shortener

A Development Task for node.js

## Description

Bitly is a simple service for shortening URLs. It accepts long URLs and converts them into short URLs of the form https://bit.ly/2FpwtdM.

The scope of this task is to implement a simple REST API in node.js containing one endpoint that will receive a long URL and utilize the bitly API to return a short URL. Maintain a file on the server in /tmp directory where you will log every request:
`<timestamp> - <longURL> <shortURL>`

### Considerations

- Provide a project that can easily be built and tested.
- Include at least a simple web page to allow testing the API.
- Use ES6.
- Make sure to wrap the functionality of communicating with bitly, in a class.
- When using packages focus on promise-based packages and not callback-based packages.
- Feel free to use npm packages for whatever you need and prefer.
- Readability of the code and commenting will be taken into account.


### Installing

Download or clone the repo by running the following command in any of your project directory.

```
$ git clone https://github.com/omelsoft/node-dev-task-bitly.git
```

Then, navigate to the newly created directory.

```
$ cd node-dev-task-bitly
```

Install the required dependencies by running the following command.

```
$ npm install
```

## Build and Testing

If you want the short URL's to appear in your bitly account, you can generate your own access token by following these steps. Or you can skip if you want to use the default accessToken.

1. [Login](https://bitly.com/a/sign_in) to your bitly account.
2. Click the burger menu icon on the upper right of your screen.
3. Click your username.
4. Click "Generic Access Token". You might need to confirm your password before you can generate an access token.
5. Copy the access token from your bitly account and replace the default accessToken in `src/config/api.js` file.

Once done, run the following command to build the app.

```
$ npm run build
```

Test the REST API by running the following command.
```
$ npm start
```

Open [http://localhost:3000](http://localhost:3000), on your browser. Or press Ctrl+Click to open the link in new tab.


## Shortening URL

* Enter the URL you want to shorten in the input field.
* A message will be shown below the input field after a request is completed.

## Logs

A `requests.log` file can be viewed inside the `/tmp` folder of the project's root directory.
