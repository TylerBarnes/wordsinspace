const fs = require('fs');
const path = require('path');
const axios = require('axios');
var parseString = require('xml2js').parseString;

const getXML = async () => {
  const response = await axios({
    method: 'get',
    url: 'https://icd.wordsinspace.net/feed/rss2',
    headers: { 'Content-Type': 'text/xml' },
  });
  return response.data
};

async function generateRSS() {
  const XMLfile = await getXML()
  const staticOutputPath = path.join(process.cwd(), './static/');
  parseString(XMLfile, (err, result) => {
    fs.writeFile(`${staticOutputPath}/rss.xml`, XMLfile, err => {
      if (err) {
        console.log(err);
      } else {
        console.log('File written successfully');
      }
    });

  });


}

// kick it all off
generateRSS();
