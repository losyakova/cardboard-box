<template>
  <div class="container pt-md-5 pb-md-5 pt-2 pb-2">
    <div class="row align-items-center">
      <div class="col-12 col-md-5 text-center">
        <slot name="right-column"></slot>
      </div>
      <div class="col-12 col-md-7 justify-content-center">
        <slot name="left-column"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
