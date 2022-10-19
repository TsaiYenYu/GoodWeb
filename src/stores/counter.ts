import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import type { constants } from "fs/promises";

//可以 父層 click  子層顯示count 資料共用
export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  const dataList = ref([]);
  const fetchApi = async() => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      dataList.value = res.data;
      console.log(dataList.value)
    } 
    catch(error) {

    }
    
  }

  return { 
    count,
    doubleCount,
    increment,
    fetchApi,
    dataList
   };
});
