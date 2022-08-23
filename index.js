import axios from "axios";

(async () => {
  const response = await axios.get("https://dummyjson.com/posts");
  const { data } = response;
  // console.log(data);

  const uniqueTags = new Set();
  const includesYou = [];

  for (const post of data.posts) {
    for (const tag of post.tags) {
      uniqueTags.add(tag);
    }
    if (post.body.includes("you")) {
      includesYou.push(post);
    }
  }

  const uniqueTagsArray = Array.from(uniqueTags);
  console.log(uniqueTagsArray);
  console.log(includesYou);
})();
