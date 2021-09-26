<template>
  <div id="title-bar">
    <img class="user-photo" :src="store.avatar_url" alt="" />
    <h1>{{ store.login }}</h1>
  </div>
</template>

<script>
import { inject, onMounted, ref } from "vue";
import { useFetchUserData } from "../composition-api/useFetchUserData";
export default {
  setup() {
    const useStore = inject("mapStore");
    const { store } = useStore;
    const { isLoad, fetch } = useFetchUserData();
    const userName = ref("Yizi-Yeh");

    onMounted(()=>{
        fetch(userName.value)
    })

    return { store, isLoad};
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
    border: 10px solid rgb(148, 98, 98);
    margin-bottom: 30px;
  }
  h1 {
    text-align: center;
  }
}
</style>
