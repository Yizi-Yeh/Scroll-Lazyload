// 檢測捲軸是否到底
import { onMounted ,onUnmounted,ref} from "vue";

export function useScrollDown() {
  const isDown = ref(false);

  const handleScrollDown = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
        isDown.value= true
    }else{
        isDown.value= false
    }
  };

  onMounted(() => {
    window.addEventListener("scroll", handleScrollDown);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScrollDown);
  });

  return { isDown };
}
