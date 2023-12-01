<template>
  <div class="header">
    <router-link to="/">Home</router-link>
    <router-link to="#" v-on:click="logout" >Logout</router-link>
  </div>
</template>
<script>
export default {
  name: "HeaderCom",

  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "LoginCom" });
    },
  },
};
</script>
<style>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  width: 100%;
  color: #fff;
  background-color: #000;
}

.header a {
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  margin: 0 10px;
}
</style>
