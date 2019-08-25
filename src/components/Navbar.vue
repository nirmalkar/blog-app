<template>
  <div class="blog-nav py-2 shadow">
    <div class="container">
      <div class="row">
        <div class="col-lg-2"></div>
        <div class="col-lg-8 text-center">
          <router-link to="/" class="text-dark">
            <h1 class="heading">Blog</h1>
          </router-link>
        </div>
        <div class="col-lg-2 text-center">
          <router-link to="/new" class="btn btn-outline-dark mt-2 border-0 d-lg-block d-none">
            <span class="font-weight-bold">ADD BLOG</span>
            <i class="fas fa-plus ml-2"></i>
          </router-link>
        </div>
        <div class="fab-button d-lg-none d-block">
          <router-link to="/new" class="btn btn-dark shadow-lg rounded-circle">
            <i class="fas fa-2x fa-plus m-2"></i>
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
  background: rgba(255, 255, 255, 0.7);
}

.blog-nav .heading {
  font-family: "Abril Fatface", cursive;
}

a:hover {
  text-decoration: none;
}

.fab-button {
  position: fixed;
  z-index: 999;
  right: 15px;
  bottom: 15px;
}

.fab-button > .rounded-circle > i{
  line-height: 40px;
}
</style>