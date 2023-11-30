<template>
    <div>
        <h1>Welcome, Hooomeeee</h1>
    </div>
</template>
<script>
export default {
    name: 'HomeCom',
    mounted() {
    let user = localStorage.getItem("user");
    if(!user) {
        this.$router.push({ name: "LoginCom" });
    }
  }

}
</script>
<style>
    
</style>