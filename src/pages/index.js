import React from "react"

import List from "../components/list"
import SEO from "../components/seo"
import Layout from "../components/layout"

import Filters from "../components/navigation/filters"

import {usePosts} from "../components/hooks/usePosts"
import {usePages} from "../components/hooks/usePages"
import {useCategories} from "../components/hooks/useCategories"
import {useTags} from "../components/hooks/useTags"

export default function Home() {
  const data = [...usePages(), ...usePosts()];
  const tags = useTags();
  const categories = useCategories();
  const nonEmptyTags = tags.filter(node => (node.pages.nodes.length > 0 || node.posts.nodes.length > 0))
  
  return (
    <Layout>
      <SEO title="home" />
      <List items={data}/>
      <Filters  categories={categories} tags={nonEmptyTags}/>
    </Layout >
  )
}