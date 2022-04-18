const axios = require("axios");

module.exports = (req, res) => {
  const { 
    username,
    sort
  } = req.query;

  try {
    res.status(200).send(`<div>Hello ${username}!</div>`);
  } catch (err) {
    return res.send(renderError(err.message));
  }
};
