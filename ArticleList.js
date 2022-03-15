import React from "react";
import Article from "./Article.js";

function ArticleList({posts}) {
    const article = posts.map((art) => (
        <Article
       key={art.id}
       title={art.title}
       date={art.date}
       preview={art.preview}
    
        />
    ))
    return <main>{article}</main>
}


export default ArticleList;