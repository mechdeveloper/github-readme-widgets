const renderMSLearnCertificationCard = require("../src/cards/mslearn-certification-card");
const renderError = require("../src/cards/error-card");
const fetchMSLearnCertificationData = require("../src/fetch/mslearn-fetcher");

export default async function handler(req, res) {
    const { 
      transcriptId,
      theme
    } = req.query;

    try {
      // console.log(`index.js: BEGIN`)

      // HTTP GET 
      const badges = await fetchMSLearnCertificationData(
        transcriptId
      );

      // Send Response
      // console.log(`index.js: SUCCESS`)
      res.setHeader("Content-Type", "image/svg+xml");
      res.setHeader("Vary", "Accept-Encoding");
      return res.send(renderMSLearnCertificationCard(badges, theme));
      
    } catch (err) {
      // console.log(`index.js: ERROR: ${err.message}`)
      // Send Error Response
      return res.send(renderError(err.message, err.secondaryMessage));
    }
  };