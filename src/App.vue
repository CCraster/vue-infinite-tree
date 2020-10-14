<template>
  <div id="app">
    <div class="logo-wrapper">Vue Infinite Tree</div>
    <div class="main-wrapper">
      <div class="config-panel">config</div>
      <infinite-tree v-model="treeData" class="inf-tree" />
    </div>
  </div>
</template>

<script>
import InfiniteTree from './components'
import { fakeTreeJsonData } from '@/utils/dataMock.js'

export default {
  name: 'App',
  components: {
    InfiniteTree
  },
  data() {
    return {
      treeData: []
    }
  },
  mounted() {
    this.treeData = fakeTreeJsonData(5, 3)
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 800px;
  // height: 600px;
  margin: 0 auto;
  // box-shadow: 0px 0px 10px red;
  .logo-wrapper {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .main-wrapper {
    display: flex;
    .config-panel {
      width: 100px;
      flex-shrink: 0;
    }
    .inf-tree {
      // width: 300px;
    }
  }
}
</style>
