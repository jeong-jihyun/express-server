var express = require("express");
var router = express.Router();
const request = require("request");
const converter = require("xml-js");

const url =
  "https://apis.data.go.kr/B190017/GetFnncCmpnyFundSpprDtflService/getFnncCmpnyFundSpprDtfl";

let queryParams =
  "?" +
  encodeURIComponent("serviceKey") +
  "=" +
  "<<서비스키>>";
queryParams += "&" + encodeURIComponent("numOfRows") + "=" + "1";
queryParams += "&" + encodeURIComponent("pageNo") + "=" + "3";
queryParams += "&" + encodeURIComponent("resultType") + "=" + "xml";
queryParams += "&" + encodeURIComponent("baseYm") + "=" + "201912";

async function apiSend(res) {
  await request(
    {
      url: url + queryParams,
      method: "POST",
    },
    (error, response, xmlToJson) => {
      const xmlToJson = converter.xml2json(body);
      res.send(xmlToJson);
    }
  );
}
/* GET home page. */
router.get("/", function (req, res, next) {
  apiSend(res);
  //res.send("test");
});

module.exports = router;
