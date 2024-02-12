<template>
  <div class="container-fluid d-flex justify-content-center m-0 p-0">
    <div class="img-conteiner left">
      <img src="../assets/img/circus-banner.jpg" alt="" />
    </div>
    <div class="img-conteiner right">
      <img src="../assets/img/cat-banner.jpeg" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div .img-conteiner {
  max-height: 800px;
}
div .img-conteiner .left {
  width: 70%;
}
div .img-conteiner .right {
  width: 30%;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left top;
}
</style>
