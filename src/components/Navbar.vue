<template>
  <div class="blog-nav py-2 shadow">
    <div class="container">
      <div class="row">
        <div class="col-2"></div>
        <div class="col-8 text-center">
          <router-link to="/" class="text-dark">
            <h1 class="heading">Blog</h1>
          </router-link>
        </div>
        <div class="col-2">
          <router-link to="/new" class="btn btn-outline-dark mt-2 border-0">
          <span class="font-weight-bold">ADD BLOG</span>
          <i class="fas fa-plus ml-2"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style>
.blog-nav {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background: rgba(255, 255,255, 0.7);
}

.blog-nav .heading {
  font-family: "Abril Fatface", cursive;
}

a:hover {
  text-decoration: none;
}
</style>