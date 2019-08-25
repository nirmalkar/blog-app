<template>
  <div class="container">
    <h1 class="text-center">Blogs</h1>
    <div class="card-columns">
      <BlogItem v-for="blog in blogs" :key="blog.id" :blog="blog" :deleteBlog="deleteBlog" />
    </div>
    <div class="row">
      <div class="col-lg-2 offset-5 py-5 my-5">
        <BounceLoader v-if="loading" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
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
    PulseLoader,
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