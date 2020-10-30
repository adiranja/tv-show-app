<template>
  <div class="spinner">
    <div class="text-center m-3" style="color:white">{{shows.name}}...
      <b-spinner style="color:blue" label="Loading"
      ></b-spinner>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Spinner',
  props: ["shows"],
};
</script>

