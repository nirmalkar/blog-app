<template>
  <div class="container">
    <h1>Blogs</h1>
    <BlogItem v-for="blog in blogs" :key="blog.id" :blog="blog" :deleteBlog="deleteBlog" />
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
    let myUrl = "https://my-json-server.typicode.com/hemantkumar2/blog-app-db/master/posts?_limit=10"
    axios
      .get("https://jsonplaceholder.typicode.com/posts/?_limit=10")
      .then(res => {
        this.blogs = res.data;
      })
      .catch(error => console.log(error));
  },
  methods: {
    deleteBlog(id) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
          this.blogs = this.blogs.filter(blog => blog.id !== id);
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<style>
</style>