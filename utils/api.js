const axios = require("axios");
require("dotenv").config();

const api = {
  getUser(username) {
    return axios
      .get(
        `https://api.github.com/users/${username}?client_id=${
        process.env.CLIENT_ID
        }&client_secret=${process.env.CLIENT_SECRET}`
      )
      .catch(err => {
        console.log(`User not found`);
        process.exit(1);
      });
  },
};

module.exports = api;

//====================stackoverflow answer below//
//https://stackoverflow.com/questions/44078900/github-api-fetching-user-email
import axios from 'axios'

const REQUEST = 'https://api.github.com/users/'

var config = {
  headers: {'Authorization': 'token 847762643...'}
}

module.exports = {
  getData: (accountName) => {
    const encodedAccountName = encodeURIComponent(accountName)
    const requestUrl = `${REQUEST}${encodedAccountName}`

    return axios.get(requestUrl, config).then(res => {
      return res
    })
  }
}
//=============================================================

https://developer.github.com/v3/
access token request from command line
