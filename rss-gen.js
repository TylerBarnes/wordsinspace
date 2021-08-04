const fs = require('fs');
const path = require('path');
const axios = require('axios');
var parseString = require('xml2js').parseString;

const fetchInitialXML = async () => {
  const response = await axios({
    method: 'get',
    url: 'https://icd.wordsinspace.net/feed/rss2',
    headers: { 'Content-Type': 'application/xml' },
  })
  return response.data
};

const createIndividualRSSitem = (XMLfile) => {
  let rssItemsXml, lastBuildDate, language, description

  // parse the entire XML 
  parseString(XMLfile, (err, result) => {
    const data = result.rss.channel[0]

    // the language is misleading - an item is actually the data belonging to all fetched posts/pages
    const { item } = data
    lastBuildDate = data.lastBuildDate[0]
    language = data.language[0]
    description = data.description[0]

    // iterate over posts/pages and grab title, link, pubData etc per post or page
    item.map(i => {
      const { title, link, pubDate, category, description } = i
      const content = i['content:encoded'][0]
      const modifiedPubDate = pubDate[0]
      const modifiedURL = link[0].replace('https://icd.wordsinspace.net', 'https://wordsinspace.net')
      const modifiedDescription = description[0].replace('“', '"').replace('”', '"')
      const modifiedContent = content.replace('“', '"').replace('”', '"')
      rssItemsXml += `
        <item>
          <title><![CDATA[${title}]]></title>
          <link>${modifiedURL}</link>
          <pubDate>${modifiedPubDate}</pubDate>
          <category>${category}</category>
          <description>
          <![CDATA[${modifiedDescription}]]>
          </description>
          <content:encoded>
            <![CDATA[${modifiedContent}]]>
          </content:encoded>
      </item>`
    })
  });
  return {
    rssItemsXml, 
    lastBuildDate, 
    language, 
    description,
  };

}

const assembleRSSfragments = (XMLfile) => {
  const { 
    rssItemsXml,
    lastBuildDate,
    language,
    description } = createIndividualRSSitem(XMLfile)
  return `<?xml version="1.0" ?>
      <rss
        xmlns:dc="http://purl.org/dc/elements/1.1/"
        xmlns:content="http://purl.org/rss/1.0/modules/content/"
        xmlns:atom="http://www.w3.org/2005/Atom"
        xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"
        xmlns:slash="http://purl.org/rss/1.0/modules/slash/"
        version="2.0"
      >
        <channel>
            <title><![CDATA[Words In Space]]></title>
            <link>https://wordsinspace.net/</link>
            <description>
              <![CDATA[${description}]]>
            </description>
            <language>${language}</language>
            <lastBuildDate>${lastBuildDate}</lastBuildDate>
            ${rssItemsXml}
        </channel>
      </rss>`
}

async function generateRSS() {
  const XMLfile = await fetchInitialXML()
  const parsedXML = assembleRSSfragments(XMLfile)
  const staticOutputPath = path.join(process.cwd(), './static/');

  fs.writeFile(`${staticOutputPath}/rss.xml`, parsedXML, err => {
    if (err) {
      console.log(err);
    } else {
      console.log('File written successfully');
    }
  });
}

module.exports.generateRSS = generateRSS