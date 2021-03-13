const fs = require('fs');
const path = require('path');
const axios = require('axios');

const getXML = async () => {
  const response = await axios({
    method: 'get',
    url: 'https://icd.wordsinspace.net/',
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
  });
  return response.data;
};

async function generateRSS() {
  const XMLfile = await getXML();
  const staticOutputPath = path.join(process.cwd(), '/public/static');

  fs.writeFile(`${staticOutputPath}/rss.xml`, XMLfile, err => {
    if (err) {
      console.log(err);
    } else {
      console.log('File written successfully');
    }
  });
}

// kick it all off
generateRSS();
