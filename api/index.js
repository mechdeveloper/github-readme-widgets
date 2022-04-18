const renderBadgesCard = require("../src/cards/badges-card");
const renderError = require("../src/cards/error-card");
const fetchBadges = require("../src/fetch/badges-fetcher");

export default async function handler(req, res) {
    const { 
      username,
      sort,
      theme
    } = req.query;

    try {
      // console.log(`index.js: BEGIN`)

      // HTTP GET 
      const badges = await fetchBadges(
        username,
        sort
      );

      // Send Response
      // console.log(`index.js: SUCCESS`)
      res.setHeader("Content-Type", "text/html");
      return res.send(renderBadgesCard(badges));
      
    } catch (err) {
      // console.log(`index.js: ERROR: ${err.message}`)
      // Send Error Response
      return res.send(renderError(err.message, err.secondaryMessage));
    }
  };