<template>
  <div class="nav">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-md bg-dark navbar-dark">
        <a href="#" class="navbar-brand">MENU</a>
        <button
          type="button"
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse justify-content-between"
          id="navbarCollapse"
        >
          <div class="navbar-nav mr-auto">
            <router-link class="nav-item nav-link" to="/">Home</router-link>
            <router-link class="nav-item nav-link" to="/products"
              >Products</router-link
            >
            <router-link class="nav-item nav-link" to="/about"
              >About</router-link
            >
            <router-link class="nav-item nav-link" to="/contacts"
              >Contacts</router-link
            >
          </div>
          <div class="navbar-nav ml-auto">
            <button href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                  >Sign in</button>
          </div>
          <!-- <div class="navbar-nav ml-auto">
            <div class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                data-toggle="dropdown"
                >User Account</a
              >
              <div class="dropdown-menu">
                <a href="#"
                  class="dropdown-item"
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                  >Login</a
                >
                <a href="#" class="dropdown-item">Register</a>
              </div>
            </div>
          </div> -->
        </div>
      </nav>
    </div>
  </div>
</template>
