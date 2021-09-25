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
  </div>
</template>

<script>
import { watch } from '@vue/runtime-core';
import { useScrollDown } from "../composition-api/useScrollDown";
export default {
  setup() {
    const { isDown } = useScrollDown();

    watch(isDown,(newValue)=>{
       if(!newValue) return
       console.log(newValue)
    })
    
    return {};
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
