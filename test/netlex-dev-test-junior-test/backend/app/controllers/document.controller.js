const { Router } = require('express');
const routes = new Router();
const checkLogin = require("../middlewares/auth.login");
const Document = require("../models/document");
const DocumentHelper = require("../helpers/document.helper");
const cors = require("cors");

routes.post(`/documents/word-frequency`, cors(), checkLogin, async (req, res) => {
    const document = await Document.findOne();
    const result = DocumentHelper.wordFrequency(document, req.body.word);
    res.send(`${result}`);
});

routes.post(`/documents/word-sentences`, cors(), checkLogin, async (req, res) => {
    const document = await Document.findOne();
    const result = DocumentHelper.wordSentences(document, req.body.word);
    res.send(`${result}`);
});

routes.post(`/documents/top-words`, cors(), checkLogin, async (req, res) => {
    const document = await Document.findOne();
    const result = DocumentHelper.topWords(document, req.body.count, req.body.minWordLength);
    res.send(`${result}`);
});

module.exports = routes;