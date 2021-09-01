<template>
  <form @submit.prevent class="login-register-modal">
    <div class="register-content">
      <h1>Create Account</h1>
      <!-- <div class="social-container">
        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
      </div> -->
      <!-- <span>or use your email for registration</span> -->
      <input type="text" placeholder="Name" v-model="registerRequest.name"/>
      <input type="text" placeholder="Surname" v-model="registerRequest.surname"/>
      <input type="email" placeholder="Email" v-model="registerRequest.email"/>
      <input type="text" placeholder="Address" v-model="registerRequest.address"/>
      <input type="password" placeholder="Password" v-model="registerRequest.password"/>
      <input type="password" placeholder="ConfirmPassword" v-model="registerRequest.confirmPassword"/>
      <button @click="register" data-bs-dismiss="modal">Sign Up</button>
    </div>
  </form>
</template>

<script src="./index.ts"></script>
