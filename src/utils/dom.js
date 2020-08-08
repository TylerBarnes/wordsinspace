
// A function that receives the current breakpoint range (lg, md, sm, xs) as defined in src/hooks/useBreakpoint.js and returns bool variables that control the layouts 
export const getResponsiveVars = (breakpoint) => { 
  return {
    showDesktopFilters: breakpoint === 'lg', // this goes into the templates/category.js and templates/work.js
    showMobileFilters: breakpoint !== 'lg', // this goes into the templates/category.js and templates/work.js
    showSearch: breakpoint === 'lg', // this goes into the layouts/browser.js
    mobileBrowserLayout : breakpoint !== 'lg', // this goes into the layouts/browser.js
    mobileNavBar : breakpoint !== 'lg',// this goes into the layouts/browser.js
    mobileList: breakpoint !== 'lg', // this goes into components/list.js and components/list/listItem.js
    listWidth: breakpoint !== 'lg' ? '100vw' : '75vw', // this goes into components/list.js and components/list/listItem.js, it controls the width of the List component. The List expands to 100vw since we don't have side Filters on mobile.
    listTitleWidth: breakpoint !== 'lg' ? '95vw' : '50vw', // this goes into components/list.js and components/list/listItem.js, it controls the width of the Title in each ListItem. Titles expand almost fully in mobile, they are constrated at 50vw when not on mobile.
  }
}