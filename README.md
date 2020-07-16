## Words in space - prototype

## Important Gatsby files 
- `gatsby-node.js` : tell Gatsby how to create pages dynamically (`src/templates/page.js`, `src/templates/post.js`, `src/templates/category.js`)
- `gatsby-config.js` : params of the plugins, particularly `gatsby-source-wordpress-experimental`

### `src/components`
- `List.js`: The list of filterable posts displayed in `src/pages/work.js` and `src/templates/category.js`
- `FiltersContainer.js`, what we call "Index" in our designs (the collapsable tab containing Tags + Categories)
- `SEO.js` just a Gatsby SEO component

### `src/components/filters`
The two files for Categories and Tags

### `src/components/navigation`
Our title and Search components

### `src/hooks`
- Some ready-made GraphQL components, in the form of React Hooks so that we can reuse them

### `src/layouts`
- We have three different Layout files `src/layouts/` which set the UI for Home, Browser and Reader

### `src/styles`
Our CSS - I'm styling everything inline so `addedStyles.css` contains some overrides for the Gatsby defaults (in `layout.css`) but overall we shouldn't be adding to these files much

### `src/pages`
- In terms of URLS: `src/pages/index.js` is our Homepage, while `src/pages/work.js` is the default Browser view (contains "All" posts+Pages)
- Every time we click on a Category, Gatsby programmatically creates that endpoint for us
- Same happens for clicking on a Page or a Post (hence no need to create something in `src/pages` for all these three classes of data)

### `src/images`
Not really using this, maybe if we need some static assets. 

### `src/templates`
Where Gatsby looks when building something dynamically - currently its either a `/{some_category}`, `/{some_page}` or `/{some_post}`
