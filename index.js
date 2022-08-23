import axios from "axios";

async function fetchData() {
  const response = await axios.get("https://dummyjson.com/posts");
  const { data } = response;
  // console.log(data);

  const uniqueTags = new Set();
  for (const post of data.posts) {
    for (const tag of post.tags) {
      uniqueTags.add(tag);
    }
  }

  console.log(uniqueTags);
}

fetchData();
