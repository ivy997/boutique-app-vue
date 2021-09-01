<template>
  <div class="bottom-bar">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-md-3">
          <div class="logo">
            <a href="index.html">
              <img src="@/assets/images/logo.png" alt="Logo" />
            </a>
          </div>
        </div>
        <div class="col">
          <div class="search">
            <div class="row">
              <div class="col-md 11"><input type="text" placeholder="Search" /></div>
              <div class="col-md-1 mt-2"><button><font-awesome-icon class="font-awesome-icon" icon="search" /></button></div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="user">
            <router-link to="/wishlist" class="btn wishlist">
              <font-awesome-icon class="font-awesome-icon" icon="shopping-cart" />
              <span>(0)</span>
            </router-link>
            <router-link to="/cart" class="btn cart">
              <font-awesome-icon class="font-awesome-icon" icon="heart" />
              <span>(0)</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
