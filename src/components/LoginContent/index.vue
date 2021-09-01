<template>
  <form @submit.prevent class="login-register-modal">
    <h1 class="mb-2">Sign in</h1>
    <!-- <div class="social-container">
      <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
      <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
      <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
    </div> -->
    <!-- <span>or use your account</span> -->
    <input type="email" placeholder="Email" v-model="loginRequest.email"/>
    <input type="password" placeholder="Password" v-model="loginRequest.password" />
    <a href="#">Forgot your password?</a>
    <button @click="login" data-bs-dismiss="modal">Sign In</button>
  </form>
</template>

<script src="./index.ts"></script>
