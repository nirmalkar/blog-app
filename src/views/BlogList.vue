<template>
  <div class="container">
    <h1>Blogs</h1>
    <BlogItem v-for="blog in blogs" :key="blog.id" :blog="blog" />
  </div>
</template>

<script>
import axios from "axios";

import BlogItem from "@/components/BlogItem";

export default {
  name: "BlogList",
  data() {
    return {
      blogs: []
    };
  },
  components: {
    BlogItem
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/?_limit=10")
      .then(res => {
        this.blogs = res.data;
      })
      .catch(error => console.log(error));
  }
};
</script>

<style>
</style>