// 
// GLOBALS
// 
const global_mobile_width = '93vw'

// 
// HOME
// 
// A function that receives the current breakpoint range (lg, md, sm, xs) as defined in src/hooks/useBreakpoint.js and returns bool variables that control the layouts of the Home
export const getResponsiveHomeVars = (breakpoint) => { 
  return {
    mobileHome:  breakpoint !== 'lg', // this goes into article/ArticleTags.js
    mobileFooterWidth: '93vw',
    mobileColophon:  breakpoint !== 'lg', // this goes into colophon.js, 
    mobileColophonWidth: global_mobile_width, // this goes into colophon.js, 
  }
}

// 
// BROWSER
// 
// A function that receives the current breakpoint range (lg, md, sm, xs) as defined in src/hooks/useBreakpoint.js and returns bool variables that control the layouts of the Browser
export const getResponsiveBrowserVars = (breakpoint) => { 
  return {
    showDesktopFilters: breakpoint === 'lg', // this goes into the templates/category.js and templates/work.js
    showMobileFilters: breakpoint !== 'lg', // this goes into the templates/category.js and templates/work.js
    showSearch: breakpoint === 'lg', // this goes into the layouts/browser.js
    mobileBrowserLayout : breakpoint !== 'lg', // this goes into the layouts/browser.js
    mobileNavBar : breakpoint !== 'lg',// this goes into the layouts/browser.js
    mobileList: breakpoint !== 'lg', // this goes into components/list.js and components/list/listItem.js
    listWidth: breakpoint !== 'lg' ? global_mobile_width : '73vw', // this goes into components/list.js and components/list/listItem.js, it controls the width of the List component. The List expands to 100vw since we don't have side Filters on mobile.
    listTitleWidth: breakpoint !== 'lg' ? global_mobile_width : '50vw', // this goes into components/list.js and components/list/listItem.js, it controls the width of the Title in each ListItem. Titles expand almost fully in mobile, they are constrated at 50vw when not on mobile.
  }
}

// 
// READER
// 
// A function that receives the current breakpoint range (lg, md, sm, xs) as defined in src/hooks/useBreakpoint.js and returns bool variables that control the layouts of the Reader
export const getResponsiveReaderVars = (breakpoint) => { 
  return {
    mobileNavBar : breakpoint !== 'lg', // this goes into the layouts/reader.js
    mobileArticleCategory:  breakpoint !== 'lg', // this goes into article/ArticleCategory.js
    mobileArticleTags:  breakpoint !== 'lg', // this goes into article/ArticleTags.js
    mobileArticleContent:  breakpoint !== 'lg', // this goes into article/ArticleContent.js
    mobileArticleContentWidth:  breakpoint !== 'lg' ? '93vw' : '70vw', // this goes into article/ArticleContent.js
    mobileArticleContentMargin:  breakpoint !== 'lg' ? '0' : '0vh 5vh', // this goes into article/ArticleContent.js
    mobileArticleContentPadding:  breakpoint !== 'lg' ? '5px 15px' : '0', // this goes into article/ArticleContent.js
    mobileArticleTitle:  breakpoint !== 'lg', // this goes into article/ArticleContent.js
    mobileArticleFooter:  breakpoint !== 'lg', // this goes into article/ArticleFooter.js
    mobileTaxonomy : breakpoint !== 'lg', // this goes into article/ArticleTaxonomy.js
    mobileReaderWidth : global_mobile_width, 
    mobileTaxonomyMargins: breakpoint !== 'lg' ? '5px 15px': '',
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
  margin: '10vh 0 4vh 0',
  width: '100%',
}

