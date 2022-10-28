<script setup lang="ts">
// defineProps<{
//   msg: string;
// }>();
const getAssetsFile = (url: string) => {
    return new URL(`../assets/logo/${url}`, import.meta.url).href;
}

</script>

<template>

  <n-grid cols="4" item-responsive>
    <n-grid-item span="0 400:1 600:2 800:3">
      <div class="light-green">
        0～400px：不显示<br>
        400～600px：占据空间 1<br>
        600～800px：占据空间 2<br>
        800px 以上：占据空间 3
      </div>
    </n-grid-item>
    <n-grid-item>
      <div class="green">
        2
      </div>
    </n-grid-item>
  </n-grid>

  <n-space vertical size="large">
    <n-layout>
      <n-layout-header>颐和园路</n-layout-header>
      <n-layout-content content-style="padding: 24px;">
        平山道
      </n-layout-content>
      <n-layout-footer>成府路</n-layout-footer>
    </n-layout>

    <n-layout>
      <n-layout has-sider>
        <n-layout-sider content-style="padding: 24px;">
          <img
          :src="getAssetsFile('C.png')"
          width="200"
          height="200"
          >
        </n-layout-sider>  
        <n-layout-sider content-style="padding: 24px;">
          <img
          :src="getAssetsFile('C.png')"
          width="200"
          height="200"
          >
        </n-layout-sider>  
        <n-layout-sider content-style="padding: 24px;">
          <img
          :src="getAssetsFile('C.png')"
          width="200"
          height="200"
          >
        </n-layout-sider>  
       </n-layout>
    </n-layout>


    <n-layout>
      <n-layout-header class="headerTest" >颐和园路fdsafsdfsdfsdafasdfdsdfasdfasfdsfsdfasdfsdafsdaf颐和园路fdsafsdfsdfsdafasdfdsdfasdfasfdsfsdfasdfsdafsdaf颐和园路fdsafsdfsdfsdafasdfdsdfasdfasfdsfsdfasdfsdafsdaf颐和园路fdsafsdfsdfsdafasdfdsdfasdfasfdsfsdfasdfsdafsdaf颐和园路fdsafsdfsdfsdafasdfdsdfasdfasfdsfsdfasdfsdafsdaf颐和园路fdsafsdfsdfsdafasdfdsdfasdfasfdsfsdfasdfsdafsdaf颐和园路fdsafsdfsdfsdafasdfdsdfasdfasfdsfsdfasdfsdafsdaf颐和园路fdsafsdfsdfsdafasdfdsdfasdfasfdsfsdfasdfsdafsdaf颐和园路fdsafsdfsdfsdafasdfdsdfasdfasfdsfsdfasdfsdafsdaf颐和园路fdsafsdfsdfsdafasdfdsdfasdfasfdsfsdfasdfsdafsdaf</n-layout-header>
      <n-layout has-sider>
        <n-layout-sider content-style="padding: 24px;">
          <img
          :src="getAssetsFile('C.png')"
          width="200"
          height="200"
          >
        </n-layout-sider>
        <n-layout-content content-style="padding: 24px;">
          平山道
        </n-layout-content>
      </n-layout>
      <n-layout-footer>成府路</n-layout-footer>
    </n-layout>

    <n-layout has-sider>
      <n-layout-sider content-style="padding: 24px;">
        海淀桥
      </n-layout-sider>
      <n-layout>
        <n-layout-header>颐和园路</n-layout-header>
        <n-layout-content content-style="padding: 24px;">
          平山道
        </n-layout-content>
        <n-layout-footer>成府路</n-layout-footer>
      </n-layout>
    </n-layout>

    <n-layout has-sider>
      <n-layout-sider content-style="padding: 24px;">
        海淀桥
      </n-layout-sider>
      <n-layout>
        <n-layout-header>颐和园路</n-layout-header>
        <n-layout-content content-style="padding: 24px;">
          平山道
        </n-layout-content>
        <n-layout-footer>成府路</n-layout-footer>
      </n-layout>
      
      <n-layout-sider content-style="padding: 24px;">
        海淀桥
      </n-layout-sider>
    </n-layout>
  </n-space>
</template>

<style scoped>

.headerTest {
  /* min-height: 100px;
  height: 200px; */
}


.n-layout-header,
.n-layout-footer {
  background: rgba(210, 60, 60, 0.2);
  padding: 24px;
}

.n-layout-sider {
  background: rgba(18, 4, 171, 0.3);
}

.n-layout-content {
  background: rgba(161, 207, 44, 0.4);
}


@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

.light-green {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: rgba(0, 128, 0, 0.12);
}
.green {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: rgba(0, 128, 0, 0.24);
}
</style>
