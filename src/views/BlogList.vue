<template>
  <div class="container mt-5 pt-5">
    <div class="card-columns">
      <BlogItem v-for="blog in blogs" :key="blog.id" :blog="blog" :deleteBlog="deleteBlog" />
    </div>
    <div class="d-flex justify-content-center align-items-center mt-5">
      <BounceLoader v-if="loading" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BounceLoader from "vue-spinner/src/BounceLoader.vue";

import BlogItem from "@/components/BlogItem";

export default {
  name: "BlogList",
  data() {
    return {
      blogs: [],
      loading: true
    };
  },
  components: {
    BlogItem,
    BounceLoader
  },
  created() {
    axios
      .get(
        "https://my-json-server.typicode.com/hemantkumar2/blog-app-db/posts/?_limit=10"
      )
      .then(res => {
        this.blogs = res.data;
        this.loading = false;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    deleteBlog(id) {
      axios
        .delete(
          `https://my-json-server.typicode.com/hemantkumar2/blog-app-db/posts/${id}`
        )
        .then(res => {
          this.blogs = this.blogs.filter(blog => blog.id !== id);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style>
</style>