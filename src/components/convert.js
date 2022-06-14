import axios from "axios";
import React, { useState, useEffect } from "react";

function Convert({ language, text }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const translater = async () => {
      const res = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: text,
            target: language,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setData(res?.data?.data?.translations);
    };
    translater();
  }, [language, text]);
  return (
    <div>
      <h2>{data[0]?.translatedText}</h2>
    </div>
  );
}

export default Convert;
