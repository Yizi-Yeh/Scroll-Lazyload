<template>
  <div id="app">
    <TitleBar />
    <RepoList />
  </div>
</template>

<script>
import { provide } from "vue";
import TitleBar from "./components/TitleBar.vue";
import RepoList from "./components/RepoList.vue";
import  store  from "./composition-api/store.js";
export default {
  name: "App",
  components: {
    TitleBar,
    RepoList,
  },
  setup() {
        console.log(store)
    provide("mapStore",store)

    return {};
  },
};
</script>

<style lang="scss">
html,
body {
  background-color: #ddd;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
