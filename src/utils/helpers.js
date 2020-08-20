// gets month name from month index
export const getMonthName = (index) => {
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return monthNames[index-1]
}

// sorts Tags array when we are in TagMode
export const sortTags = (tags) => {
   return tags
            .filter(tag => tag.name.length > 0) // filter for nodes which have tags
            .filter(hasTags => hasTags.pages.nodes.length > 0 || hasTags.posts.nodes.length > 0) // filter for nodes the Posts or Pages nodes have tags
            .sort((a, b) => a.posts.nodes.length + a.pages.nodes.length < b.posts.nodes.length + b.pages.nodes.length ? 1 : -1) // sort DESC by the number of tags across both Posts and Pages
            .map(obj=> ({ ...obj, checked: false })) // modify the incoming array by inserting a {checked: true | false} field to every object, which is used for selecting Tags
}

// sorts an array by date (newest to oldest)
export const sortByDate = (array) => {
  return array.sort((a,b)=> {
            if (a.date && b.date) {
              return parseInt(b.date.slice(0,4)) - parseInt(a.date.slice(0,4))
            }
          })
}

// extracts and sorts the search results from what the Apollo useQuery returns
export const extractSearchResults = (array) => {
  let results = array.categories.nodes
               .filter(cat=> cat.pages.nodes.length >0 || cat.posts.nodes.length >0)
               .map(nonEmptyCat => {
                  return [...nonEmptyCat.pages.nodes, ...nonEmptyCat.posts.nodes]
               })
               .flat(2)
  return sortByDate(results)
}

// identifies if there are any posts or pages which share the same Tag with the current Post or Page, and if that is the case, returns an array of these items
export const getRelated = (tags, title) => {
  if (!tags || tags.length === 0) return null
    
  let randomTagSelection = getRandomSubarray(tags?.nodes, 1) // selects two shared tags
  let relatedPages = randomTagSelection?.map(tag => tag.pages ? getRandomSubarray(tag.pages?.nodes, 2) : []).flat(2) // gets Pages that have the Tag
  let relatedPosts = randomTagSelection?.map(tag => tag.posts ? getRandomSubarray(tag.posts?.nodes, 1) : []).flat(2) // gets Posts that have the Tag
  
  let related = [...relatedPages, ...relatedPosts] // merges array
                .filter((v,i,a)=>a.findIndex(t=>(t.title === v.title))===i) // removes duplicates
                .filter(item => item.title !== title) // removes current Page or Post

  return related
}

// gets random subarray from a given [arr] of [size]
function getRandomSubarray(arr, size) {
  let shuffled = arr.slice(0), i = arr.length, temp, index;
  while (i--) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
  }
  return shuffled.slice(0, size);
}