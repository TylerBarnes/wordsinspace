export const getResponsiveVars = (breakpoint) => { 
  return {
    showDesktopFilters: breakpoint === 'lg',
    showMobileFilters: breakpoint !== 'lg',
    showSearch: breakpoint === 'lg',
    mobileBrowserLayout : breakpoint !== 'lg',
    mobileNavBar : breakpoint !== 'lg',
    mobileList: breakpoint !== 'lg',
    listWidth: breakpoint !== 'lg' ? '100vw' : '75vw',
    listTitleWidth: breakpoint !== 'lg' ? '95vw' : '50vw',
  }
}