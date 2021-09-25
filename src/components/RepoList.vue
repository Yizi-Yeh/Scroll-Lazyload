<template>
  <div id="repos">
    <div class="card" v-for="item in 10" :key="item">
      <h1>Title</h1>
      <a class="url" href="javascript:;">http://localhost:8081/</a>
      <div class="star">
        <img src="../assets/star.svg" alt="" />
        <p>10</p>
      </div>
    </div>
    <h1 v-show="!isLoad">Loading...</h1>
  </div>
</template>

<script>
import { onMounted, watch } from "@vue/runtime-core";
import { useScrollDown } from "../composition-api/useScrollDown";
import { useFetchData } from "../composition-api/useFetchData.js";
export default {
  setup() {
    const { isDown } = useScrollDown();
    const { init, isLoad, next } = useFetchData();

    watch(isDown, (newValue) => {
      if (!newValue) return;
      next()
      console.log(newValue);
    });

    onMounted(()=>{
        init()
    })

    return {isLoad};
  },
};
</script>

<style lang="scss" scoped>
#repos {
  .card {
    width: 500px;
    background: cornsilk;
    padding: 15px;
    margin-bottom: 20px;
    > h1 {
      margin-bottom: 10px;
    }
    > a.url {
      font-size: 22px;
      text-decoration: none;
    }
    .star {
      margin-top: 15px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }
}
</style>
