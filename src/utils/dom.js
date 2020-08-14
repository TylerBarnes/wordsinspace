//
// GLOBALS
//
const global_mobile_width = '93vw'

//
// HOME
//
// A function that receives the current breakpoints range (lg, md, sm, xs) as defined in src/hooks/usebreakpoints.js and returns bool variables that control the layouts of the Home
export const getResponsiveHomeVars = (breakpoints) => {
    return {
        mobileHome:  !breakpoints.desktop, // this goes into article/ArticleTags.js
        mobileFooterWidth: global_mobile_width,
        mobileColophon:  !breakpoints.desktop, // this goes into colophon.js,
        mobileColophonWidth: global_mobile_width, // this goes into colophon.js,
        mobileFooterWidth: global_mobile_width,
    }
}

//
// BROWSER
//
// A function that receives the current breakpoints range (lg, md, sm, xs) as defined in src/hooks/usebreakpoints.js and returns bool variables that control the layouts of the Browser
export const getResponsiveBrowserVars = (breakpoints) => {
    return {
        showDesktopFilters: breakpoints.desktop, //this goes into the templates/category.js and work.js
        showMobileFilters: !breakpoints.desktop, //this goes into the templates/category.js and work.js
        showSearch: breakpoints.desktop, // this goes into the layouts/browser.js
        mobileBrowserLayout : !breakpoints.desktop, // this goes into the layouts/browser.js
        mobileNavBar : !breakpoints.desktop,// this goes into the layouts/browser.js
        mobileList: !breakpoints.desktop, // this goes into components/list.js list/listItem.js
        listWidth: !breakpoints.desktop ? global_mobile_width : '72vw', // this goes into components/list.js and components/list/listItem.js, it controls the width of the List component. The List expands to 100vw since we don't have side Filters on mobile.
        listTitleWidth: !breakpoints.desktop ? global_mobile_width : '45vw', // this goes into components/list.js and components/list/listItem.js, it controls the width of the Title in each ListItem. Titles expand almost fully in mobile, they are constrated at 50vw when not on mobile.
    }
}

//
// READER
//
// A function that receives the current breakpoints range (lg, md, sm, xs) as defined in src/hooks/usebreakpoints.js and returns bool variables that control the layouts of the Reader
export const getResponsiveReaderVars = (breakpoints) => {
    return {
        mobileNavBar : !breakpoints.desktop, // this goes into the layouts/reader.js
        mobileArticleCategory: !breakpoints.desktop, // this goes into article/ArticleCategory.js
        mobileArticleTags: !breakpoints.desktop, // this goes into article/ArticleTags.js
        mobileArticleContent:  !breakpoints.desktop, // this goes into article/ArticleContent.js
        mobileArticleContentWidth: !breakpoints.desktop ? '93vw' : '70vw', // this goes into article/ArticleContent.js
        mobileArticleContentMargin: !breakpoints.desktop ? '0' : '0vh 5vh', // this goes into article/ArticleContent.js
        mobileArticleContentPadding: !breakpoints.desktop ? '5px 15px' : '0', // this goes into article/ArticleContent.js
        mobileArticleTitle: !breakpoints.desktop, // this goes into article/ArticleContent.js
        mobileArticleFooter: !breakpoints.desktop, // this goes into article/ArticleFooter.js
        mobileTaxonomy :!breakpoints.desktop, // this goes into article/ArticleTaxonomy.js
        mobileReaderWidth : global_mobile_width,
        mobileTaxonomyMargins: !breakpoints.desktop ? '5px 15px': '',
        mobileFooterWidth: global_mobile_width
    }
}


//
// SHARED ACROSS THE FOOTER FILES
//
export const mobileFooterStyles =
{
    borderTop: '0.5px solid #513bfd',
    width: '93vw',
    padding: '10px 0',
    margin: '10px auto',
    display: 'flex',
    flexFlow: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
}

export const footerStyles =
{
  margin: '10vh 0 1vh 0',
  width: '100%',
}
