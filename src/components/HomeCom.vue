<template>
    <div>
        <HeaderCom />
        <img alt="Vue logo" src="../assets/logo.png" />
        <h1>Welcome, {{ name }}</h1>
    </div>
</template>
<script>
import HeaderCom from './HeaderCom.vue';
export default {
    name: 'HomeCom',
    components:{
        HeaderCom
    },
    data() {
        return {
            name: ''
        }
    },
    mounted() {
    let user = localStorage.getItem("user-info");
    this.name = JSON.parse(user)[0].name;
    if(!user) {
        this.$router.push({ name: "LoginCom" });
    }
  }

}
</script>
<style>
    
</style>