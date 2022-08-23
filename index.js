import axios from "axios";

async function fetchData() {
  const response = await axios("https://dummyjson.com/posts");
  const data = await response.json();
  console.log(data);
}

fetchData();
