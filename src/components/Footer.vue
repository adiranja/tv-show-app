<template>
  <div class="footer" style="background:#020235" >
    Copyright &copy; {{ new Date().getFullYear() }} —
    <strong>Movie</strong>
  </div>
</template>

<script>
export default {
  name: 'Footer',  
};
</script>

<style scoped>
.footer {
  bottom: 0;
  width: 100%;
  text-align: center;
  font-size: .8em;
  color: white;
}
</style>
