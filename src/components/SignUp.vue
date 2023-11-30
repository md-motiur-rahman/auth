<template>
  <div>
    <h1>Sign Up</h1>
    <form class="reg__form">
      <input type="text" name="" id="" placeholder="Full Name" required />
      <input type="email" name="" id="" placeholder="Email" required />
      <input type="password" name="" id="" placeholder="Password" required />
      <button>Sign Up</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "SignUp",
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

.reg__form button {
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

.reg__form button:hover {
  opacity: 0.8;
  transition: 0.5s;
}
</style>
