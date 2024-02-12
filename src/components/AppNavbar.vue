<template>
  <nav class="navbar navbar-expand-lg light-color">
    <div class="container">
      <router-link to="/main" class="navbar-brand">
        <img
          src="../assets/logo.png"
          alt="Картонная коробка"
          width="180"
          height="55"
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse ms-2" id="navbarSupportedContent">
        <ul class="navbar-nav w-75 justify-content-evenly">
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ path: '/show', hash: '#regist' }"
              >Онлайн-выставка</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="rules"
              >Для участников</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="guide"
              >Хотите завести котёнка?</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="about">О нас</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  font-size: 22px;
}
</style>
