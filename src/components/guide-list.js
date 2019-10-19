import React from "react"

import guidesHierarchy from "../data/guides-links.yaml"

// Search through tree, which may be 2, 3 or more levels deep
const childItemsBySlug = (
  guidesHierarchy,
  slug
) => {
  let result

  const iter = a => {
    if (a.link === slug) {
      result = a
      return true
    }
    return Array.isArray(a.items) && a.items.some(iter)
  }

  guidesHierarchy.some(iter)
  return result && result.items
}

const GuideList = ({ slug }) => {
  const subitemsForPage =
    childItemsBySlug(
      guidesHierarchy,
      slug
    ) || []

  const subitemList = subitemsForPage.map((subitem, i) => (
    <li key={i}>
      <a href={subitem.link}>{subitem.title}</a>
    </li>
  ))
  const toc = subitemList.length ? (
    <>
      <h2>In this course:</h2>
      <ul>{subitemList}</ul>
    </>
  ) : null
  return toc
}

export default GuideList
