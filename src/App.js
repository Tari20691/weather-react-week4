import React from "react";
import SearchEngine from "./Search";
import "./index.css";
export default function App() {
return ( <div className="App"> <h1>Weather Serach Engine</h1>
<SearchEngine />
<br />
<footer>
    Coded by <a href="https://github.com/Tari20691" target="_blank" rel="noreferrer" title="Annas GitHub">Anna Tari',</a>
    is open-sourced on <a href="https://github.com/Tari20691/weather-react-week4" rel="noreferrer" target="_blank" title="GitHub project">GitHub</a>
    &nbsp;and hosted on <a href="https://shecodesreactweek4.netlify.app" rel="noreferrer" target="_blank" title="Netlify">Netlify.</a>

</footer>
</div>

 );
}

