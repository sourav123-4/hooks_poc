import axios from "axios";
import React, { useState, useEffect } from "react";
import { Header, Input, Item, Button } from "semantic-ui-react";

function Search() {
  const [searchval, setSearchval] = useState("");
  const [item, setItem] = useState([]);
  console.log(item);
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(`https://en.wikipedia.org/w/api.php`, {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: searchval,
        },
      });
      setItem(data.query.search);
    };
    setTimeout(() => {
      if (searchval) {
        search();
      }
    }, 1000);
  }, [searchval]);
  return (
    <div>
      <div className="App">
        <h2>Search</h2>
        <Input onChange={(e) => setSearchval(e.target.value)} />
      </div>
      {item?.map((data) => {
        return (
          <Item key={data.pageid}>
            <Item.Content>
              <Header>{data.title}</Header>
              <span dangerouslySetInnerHTML={{ __html: data.snippet }}></span>
              <a href={`https://en.wikipedia.org?curid=${data.pageid}`}>
                <Button content="Go" />
              </a>
            </Item.Content>
          </Item>
        );
      })}
    </div>
  );
}

export default Search;
