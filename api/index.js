const axios = require("axios");

module.exports = (req, res) => {
  const { 
    username,
    sort
  } = req.query;
  
  try {
    res.status(200).send(`Hello ${username}!`);
  } catch (err) {
    return res.send(renderError(err.message));
  }
};
