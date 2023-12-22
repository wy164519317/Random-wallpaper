<template>
  <div class="main">
    <div class="left">
      <div class="top">
        <el-button type="success" v-for="item in list" @click="preImg(item.type)">{{ item.name }}</el-button>
      </div>
      <div class="bom">
        <el-button type="success" @click="downLoad('download')">下载壁纸</el-button>
        <el-button type="success" @click="downLoad('setImg')">设为桌面壁纸</el-button>
      </div>
    </div>
    <div class="right">
      <img @load="imgLoad" :src="imgSrc" />
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { ElMessage, ElLoading } from 'element-plus'
const { ipcRenderer } = require('electron')
let url = ref(null)
let name = ref(null)
let list = ref([
  { name: '随机一张', type: 'all' },
  { name: '风景', type: 'scenery' },
  { name: '美女', type: 'beauty' },
  { name: '动漫', type: 'comic' },
  { name: '爱情', type: 'love' },
  { name: '植物', type: 'plant' },
  { name: '动物', type: 'animals' },
  { name: '游戏', type: 'games' },
  { name: '汽车', type: 'cars' },
  { name: '4k', type: '4k' },
  { name: '创意', type: 'fashion' },
  { name: '明星', type: 'stars' },
])
let imgSrc = ref(null)
let loading = ''
let timer = null
let funcLoading = null
const imgLoad = () => {
  loading.close()
  clearTimeout(timer)
}
const preImg = type => {
  loading = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  timer = setTimeout(() => {
    ElMessage({
      message: '加载超时',
      type: 'error',
    })
    loading.close()
  }, 15000)
  axios.get(`https://api.naivetab.com/nbtab-api/wallpaper/image_random?type=${type}`).then(res => {
    imgSrc.value = res.data.data[0].url.replace(/(http|https):\/\//, 'https://images.weserv.nl/?url=')
    url.value = imgSrc.value
    name.value = res.data.data[0].url.match(/\/([^\/]+)$/)[1]
  })
}
preImg('all')
ipcRenderer.on('downloadimg', (event, arg) => {
  if (arg.type == 'ok') {
    ElMessage({
      message: '下载成功',
      type: 'success',
    })
    funcLoading.close()
  } else {
    ElMessage({
      message: '下载失败',
      type: 'error',
    })
    funcLoading.close()
  }
})
ipcRenderer.on('setimg', (event, arg) => {
  if (arg.type == 'ok') {
    ElMessage({
      message: '设置成功',
      type: 'success',
    })
    funcLoading.close()
  } else {
    ElMessage({
      message: arg.msg,
      type: 'error',
    })
    funcLoading.close()
  }
})
const downLoad = type => {
  console.log(type)
  funcLoading = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  ipcRenderer.send('download-image', { type, url: url.value, name: name.value })
}
</script>

<style lang="scss" scoped>
.el-button + .el-button {
  margin-left: 0;
}
.main {
  width: 100vw;
  height: 100vh;
  display: flex;
  .left {
    width: 40%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: space-between;
    .top {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin: 20px 20px 0 40px;
      // 间隔20px
      gap: 20px;
      .type {
        background-color: aquamarine;
        width: 100px;
      }
    }
    .bom {
      width: 100%;
      display: flex;
      justify-content: space-around;
      margin: 0 20px 50px 40px;
    }
  }
  .right {
    width: 60%;
    height: 100%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
