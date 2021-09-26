// 作為vuex

import { reactive } from "vue";
const store = reactive({
  repoList: [],
  avatar_url: "",
  login: "Yizi-Yeh",
});

const setRepoList = (repos) => {
  store.repoList = [...store.repoList, ...repos];
};

const setUserData = ({ avatar_url, login }) => {
  store.avatar_url = avatar_url;
  store.login = login;
};

export default { store, setRepoList,setUserData };
