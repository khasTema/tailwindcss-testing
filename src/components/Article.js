import React from 'react'

const Article = (props) => {
  return (
    <div className="article py-6 border-t-2 border-slate-300">{props.children}</div>
  )
}

export default Article;