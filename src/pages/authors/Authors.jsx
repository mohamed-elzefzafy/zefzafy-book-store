import "./authors.css";
import { authors } from "../../data/authors";
import { useState } from "react";

const Authors = () => {

  const [search, setsearch] = useState("");

  const authorFliterdBySearch = authors.filter((a) => (a.name).toLowerCase().includes(search.toLowerCase()));

  return (
    <section className="authors">
      <div className="authors-search-wrabber">
        <input value={search} onChange={(e)=> {setsearch(e.target.value)}} type="search" placeholder="Search In Authors" />
      </div>
      <div className="authors-wrabber">
        {authorFliterdBySearch.map((author) => (
          <div key={author.id} className="author">
            <img src={author.image} alt={author.name} className="author-img" />
            <h2 className="author-name">{author.name}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Authors;
