import logo from "./logo.svg";
import "./App.css";
import useSWR from "swr";

const fetchAPI = (url) => fetch(url).then((res) => res.json());

function App() {
  const { data, error, isLoading } = useSWR(
    "https://api.github.com/repos/vercel/swr",
    fetchAPI
  );

  if (error) return "An error has occurred.";
  if (isLoading) return "Loding..";

  console.log(data);

  return (
    <div className="App">
      <h1>{data.name}</h1>
      <h1>{data.description}</h1>
      <p>{data.subscribers_count}</p>
    </div>
  );
}

export default App;
