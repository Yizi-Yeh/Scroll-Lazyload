import { ref } from "vue";
import { apiGetUserData } from "../api";
import store from "../composition-api/store";
export function useFetchUserData() {
  const isLoad = ref(false);
  const { setUserData } = store;
  const fetch = async (username) => {
    try {
      const res = await apiGetUserData(username);
      const data = {
        avatar_url: res.data.avatar_url,
        login: res.data.login,
      };
      console.log(res.data);
      setUserData(data);
    } catch (err) {
      console.log("取得username失敗", err);
    }
  };
  return { isLoad, fetch };
}
