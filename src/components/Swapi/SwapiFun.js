import React, { useState } from "react";
// import "./styles.css";

export default function SwapiApp() {
  const urls = [
    "https://www.swapi.tech/api/people",
    "https://www.swapi.tech/api/planets",
    "https://www.swapi.tech/api/films",
    "https://www.swapi.tech/api/species",
    "https://www.swapi.tech/api/starships"
  ];
  const [url, setUrl] = useState("");
  const [search, setSearch] = useState("");
  const [encoding, setEncoding] = useState("");

  function handleSelectCategory(e) {
    let request = url;
    if (search) {
      request = `${url}/?name=${search}`;
    }

    if (encoding) {
      request = `${request}/?format=${encoding}`;
    }

    fetch(request)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSearch("");
      });
      
      

    var jsonObj = {response}
    document.getElementById("result-before").innerHTML = JSON.stringify(jsonObj);
    document.getElementById("result-after").innerHTML ="<pre>" + JSON.stringify(jsonObj, undefined, 2) + "</pre>";
  }
  return (
    <div className="App">
      <h1>Hello from Ben's App</h1>
      <select onChange={(e) => setUrl(e.target.value)}>
        <option>Select a Category</option>
        {urls.map((url) => {
          return (
            <option key={url} value={url}>
              {url.split("/").at(-1)}
            </option>
          );
        })}
      </select>
      {url && (
        <>
          <input
            type="text"
            value={search}
            placeholder="Enter a search"
            onChange={(e) => setSearch(e.target.value)}
          />

          <select onChange={(e) => setEncoding(e.target.value)}>
            <option>Select Encoding Type</option>
            <option value="WOOKIEE">wookiee</option>
            <option value="JSON">JSON</option>
          </select>
          <button onClick={handleSelectCategory}>Search</button>
        </>
      )}
      <div id="result-before"></div>
      <div id="result-before"></div>
    </div>
  );
}
