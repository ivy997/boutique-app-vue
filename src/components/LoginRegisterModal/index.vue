<template>
  <div
    class="modal fade"
    id="modal"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog custom-modal modal-dialog-centered">
      <div class="modal-content custom-modal modal-bg-color">
        <div class="container" id="container">
          <div class="form-container sign-up-container">
            <button
                  type="button"
                  class="btn-close close-button-right btn-lg"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
            <register></register>
          </div>
          <div class="form-container sign-in-container">
            <login></login>
          </div>
          <div class="overlay-container">
            <div class="overlay">
              <button
                  type="button"
                  class="btn-close close-button-right btn-lg"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              <div class="overlay-panel overlay-left login-register-modal">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button class="ghost" id="signIn" @click="onSignIn">Sign In</button>
              </div>
              <div class="overlay-panel overlay-right login-register-modal">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start your journey with us</p>
                <button class="ghost" id="signUp" @click="onSignUp">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./index.ts"></script>
