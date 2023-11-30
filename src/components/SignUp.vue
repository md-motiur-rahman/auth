<template>
  <div>
    <h1>Sign Up</h1>
    <form class="reg__form">
      <input type="text" v-model="name" placeholder="Full Name" required />
      <input type="email" v-model="email" placeholder="Email" required />
      <input
        type="password"
        v-model="password"
        placeholder="Password"
        required
      />
      <!-- <button type="submit" v-on:click="signUp">Sign Up</button> -->
      <input class="button" type="button" v-on:click="signUp" value="Sign Up" />
    </form>
    <p>Already have account? <router-link to="/login">Login</router-link> </p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      let result = await axios.post("http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        password: this.password,
      });

      console.log(result);

      if (result.status === 201) {
        localStorage.setItem("user", JSON.stringify(result.data));
        
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user");
    if(user) {
        this.$router.push({ name: "HomeCom" });
    }
  }
};
</script>
<style>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
h1 {
  font-size: 40px;
  text-align: center;
  color: #35495e;
}
div p {
    text-align: center;
    color: #35495e;
}
.reg__form {
  width: 450px;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.reg__form input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  font-size: 16px;
}

.button {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  outline: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  color: #fff;
  background: #41b883;
}

.reg__form .button:hover {
  opacity: 0.8;
  transition: 0.5s;
}
</style>
