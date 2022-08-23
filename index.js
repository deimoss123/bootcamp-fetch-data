import axios from "axios";

async function fetchData() {
  const response = await axios.get("https://dummyjson.com/posts");
  const { data } = response;
  console.log(data);
}

fetchData();
