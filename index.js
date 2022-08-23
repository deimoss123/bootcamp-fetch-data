import axios from "axios";

(async () => {
  const response = await axios.get("https://dummyjson.com/posts");
  const { data } = response;
  // console.log(data);

  const uniqueTags = new Set();

  for (const post of data.posts) {
    for (const tag of post.tags) {
      uniqueTags.add(tag);
    }
  }

  const uniqueTagsArray = Array.from(uniqueTags);
  console.log(uniqueTagsArray);
})();
