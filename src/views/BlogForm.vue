<template>
  <div class="container mt-5 pt-5">
    <div class="card shadow border-0">
      <div class="card-body">
        <h3 class="card-title" v-if="$router.history.current.params.id">Edit Blog</h3>
        <h3 class="card-title" v-else>Add Blog</h3>
        <form @submit="submitHandler">
          <input
            type="text"
            placeholder="Blog Title"
            class="form-control my-2"
            v-model="title"
            required
          />
          <input
            type="text"
            placeholder="Blog Image URL"
            class="form-control my-2"
            v-model="image"
            required
          />
          <textarea
            class="form-control my-2"
            rows="10"
            placeholder="Write your blog here..."
            v-model="body"
            required
          ></textarea>
          <div class="text-center">
            <router-link to="/" class="btn btn-secondary px-5 py-2 m-2">Cancel</router-link>
            <button class="btn btn-primary px-5 py-2 m-2">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BlogForm",
  data() {
    return {
      title: "",
      image: "",
      body: ""
    };
  },
  created() {
    if (this.$router.history.current.params.id) {
      axios
        .get(
          `https://my-json-server.typicode.com/hemantkumar2/blog-app-db/posts/${this.$router.history.current.params.id}`
        )
        .then(res => {
          this.title = res.data.title;
          this.image = res.data.image;
          this.body = res.data.body;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  methods: {
    submitHandler(event) {
      event.preventDefault();

      let data = {
        title: this.title,
        image: this.image,
        body: this.body
      };

      if (this.$router.history.current.params.id) {
        // Edit
        axios
          .put(
            `https://my-json-server.typicode.com/hemantkumar2/blog-app-db/posts/${this.$router.history.current.params.id}`,
            data
          )
          .then(res => {
            console.log(res.data);
            this.$router.push("/");
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        // Create
        axios
          .post(
            "https://my-json-server.typicode.com/hemantkumar2/blog-app-db/posts/",
            data
          )
          .then(res => {
            this.$router.push("/");
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }
};
</script>

<style>
</style>