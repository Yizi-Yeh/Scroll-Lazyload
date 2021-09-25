// 作為vuex

import { reactive } from "vue";
const store = reactive({
  repoList: [],
  userPhoto: "",
  userTitle: "Yizi123",
});

const setRepoList = (repos) => {
  store.repoList = [...store.repoList, ...repos];
};

export default { store, setRepoList };
