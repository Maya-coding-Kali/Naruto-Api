import React, { useEffect, useState } from "react";
import "tachyons";
import { useQuery, gql } from "@apollo/client";
const FILMS_QUERY = gql`
  {
    characters(filter: { village: "leaf" }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        _id
        name
        avatarSrc
        description
        rank
        village
      }
    }
  }
`;
const Cards = () => {
  const { data, loading, error } = useQuery(FILMS_QUERY);
  const [characters, setCharacters] = useState();
  useEffect(() => {
    console.log("TEST");
  });
  if (loading) {
    console.log(loading);
    return "loading...";
  }
  if (error) {
    console.log(error);

    return <pre>{error.message}</pre>;
  }
  return (
    <div>
      <article className="">
        {data.characters.results.map((chara) => (
          <div className="cards">
            <img
              src={chara.avatarSrc}
              alt={chara.name}
              className="db w-100 br2 br--top"
            />
            <div className="pa2 ph3-ns pb3-ns">
              <div className="dt w-100 mt1">
                <div className="dtc">
                  <h1 className="f5 f4-ns mv0">{chara.name}</h1>
                </div>
                <div className="dtc tr">
                  <h2 className="f5 mv0">{chara.rank}</h2>
                </div>
              </div>
              <p className="f6 lh-copy measure mt2 mid-gray">
                {chara.description}
              </p>
              <div>
              <h2 className="f5 mv0">{chara.village}</h2>
              </div>
            </div>
          </div>
        ))}
      </article>
    </div>
  );
};

export default Cards;
