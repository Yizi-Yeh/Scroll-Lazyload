<template>
  <div id="title-bar">
    <img class="user-photo" src="../assets/notFound.jpg" alt="" />
    <h1>{{userTitle}}</h1>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    const useStore = inject("mapStore");
    console.log(useStore);
    const { userTitle } = useStore;
    return { userTitle };
  },
};
</script>

<style lang="scss" scoped>
#title-bar {
  margin-bottom: 40px;
  img.user-photo {
    display: block;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 10px solid red;
    margin-bottom: 30px;
  }
  h1 {
    text-align: center;
  }
}
</style>
