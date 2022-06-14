import React from "react";
import { Input } from "semantic-ui-react";
import Dropdown from "./dropdown";
import Convert from "./convert";
function Translate() {
  const options = [
    {
      label: "Africans",
      value: "af",
    },
    {
      label: "Hindi",
      value: "hi",
    },
    {
      label: "Arabic",
      value: "ar",
    },
  ];
  const [language, setLanguage] = React.useState();
  const [text, setText] = React.useState("");
  console.log(language);
  return (
    <div className="translate">
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        size="big"
        placeholder="enter the text you want to translate..."
      />
      <br />
      <Dropdown
        label="select a language"
        options={options}
        selected={language}
        setSelected={setLanguage}
      />
      <br />
      <Convert language={language} text={text} />
    </div>
  );
}

export default Translate;
