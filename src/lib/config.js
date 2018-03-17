module.exports = {
  SESSION_TOKEN_KEY: 'SESSION_TOKEN_KEY',
  backend: {
    hapiRemote: false,
    hapiLocal: false,
    parseRemote: false,
    parseLocal: false,
    myserverLocal: true,
    myserverRemote: false
  },
  HAPI: {
    local: {
      url: 'http://localhost:5000'
    },
    remote: {
      url: 'https://snowflakeserver-bartonhammond.rhcloud.com/'
    }
  },
  PARSE: {
    appId: 'snowflake',                              // match APP_ID in parse-server's index.js
    local: {
      url: 'http://localhost:1337/parse'             // match SERVER_URL in parse-server's index.js
    },
    remote: {
      url: 'https://snowflake-parse.herokuapp.com/parse'   // match SERVER_URL in parse-server's index.js
    }
  },
  MYSERVER: {
    local: {
      url: 'http://www.marriagnet.com/'
    },
    remote: {
      url: ''
    }
  }
}