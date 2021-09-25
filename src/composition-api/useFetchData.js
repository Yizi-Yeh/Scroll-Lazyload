import { apiGetGithubRepos } from "../api";
import { ref } from "vue";
import store from "./store";
export function useFetchData() {
  const { setRepoList } = store;
  const isLoad = ref(false);
  const pageIndex = ref(0);

  const init = async () => {
    pageIndex.value += 1;
    const data = {
      username: "yizi",
      page: pageIndex.value,
    };
    try {
      const res = await apiGetGithubRepos(data);
      isLoad.value = true;
      setRepoList(res.data);
      console.log(res.data);
    } catch (err) {
      console.log("取得repos錯誤", err);
    }
  };

  //   滑到最底
  const next = () => {
    isLoad.value = false;
    init();
  };

  return { init, isLoad, next };
}
