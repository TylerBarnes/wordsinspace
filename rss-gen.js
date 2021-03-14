const fs = require('fs');
const path = require('path');
const axios = require('axios');
var parseString = require('xml2js').parseString;

const fetchInitialXML = async () => {
  const response = await axios({
    method: 'get',
    url: 'https://icd.wordsinspace.net/feed/rss2',
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  })
  return response.data
};

const createPostRSSfeed = (XMLfile) => {
  let rssItemsXml, lastBuildDate, language, description
  parseString(XMLfile, (err, result) => {
    const data = result.rss.channel[0]
    const { item } = data
    lastBuildDate = data.lastBuildDate
    language = data.language
    description = data.description

    // iterating over posts/pages
    item.map(i => {
      const { title, link, pubDate, category, guid, description } = i
      const content = i['content:encoded']
      const modifiedURL = link // TO DO - sanitize URLs that point back to icd.wordsinspace.net
      const modifiedGUID = guid[0]._ // TO DO - sanitize URLs that point back to icd.wordsinspace.net
      rssItemsXml += `
        <item>
          <title><![CDATA[${title}]]></title>
          <link>${modifiedGUID}</link>
          <pubDate>${pubDate}</pubDate>
          <guid isPermaLink="false">${guid}</guid>
          <category>${category}</category>
          <description>
          <![CDATA[${description}]]>
          </description>
          <content:encoded>
            <![CDATA[${content}]]>
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
    description } = createPostRSSfeed(XMLfile)

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

// kick it all off
generateRSS();
