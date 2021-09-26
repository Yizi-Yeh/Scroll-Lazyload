<template>
  <div id="repos">
    <div class="card" v-for="item in store.repoList" :key="item.id">
      <h1>{{ item.name }}</h1>
      <a class="url" :href="item.html_url" target="_blank">{{
        item.html_url
      }}</a>
      <div class="star">
        <img src="../assets/star.svg" alt="" />
        <p>{{ item.stargazers_count }}</p>
      </div>
    </div>
    <h1 v-show="!isLoad">Loading...</h1>
  </div>
</template>

<script>
import { onMounted, watch, inject } from "@vue/runtime-core";
import { useScrollDown } from "../composition-api/useScrollDown";
import { useFetchData } from "../composition-api/useFetchData.js";
export default {
  setup() {
    const { isDown } = useScrollDown();
    const { init, isLoad, next } = useFetchData();
    const useStore = inject("mapStore");
    const { store } = useStore;
    watch(isDown, (newValue) => {
      if (!newValue) return;
      next();
      console.log(newValue);
    });

    onMounted(() => {
      init();
    });

    return { isLoad, store };
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
