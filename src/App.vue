<template>
  <div id="app">
    <div class="logo-wrapper"><img :src="logo" /></div>
    <div class="main-wrapper">
      <div class="config-panel">
        <span>dsds</span>
      </div>
      <infinite-tree v-model="treeData" class="infinite-tree" />
      <div class="tree-preview">{{ treePreviewData }}</div>
    </div>
  </div>
</template>

<script>
import { fakeTreeJsonData } from '@/utils/dataMock.js'
import logo from '@/assets/logo.svg'

/* 开发模式导入 - start */
import InfiniteTree from '../package/index.js'
/* 开发模式导入 - end */

/* 测试以外部库方式导入 - start */
// import InfiniteTree from '../lib/vue-infinite-tree.common.js'
// // import '../lib/vue-infinite-tree.css'
// import './testImport.scss'
/* 测试以外部库方式导入 - end */

export default {
  name: 'App',
  components: {
    InfiniteTree
  },
  data() {
    return {
      logo,
      treeData: []
    }
  },
  computed: {
    treePreviewData() {
      return JSON.stringify(this.treeData, false, 2)
    }
  },
  mounted() {
    this.treeData = fakeTreeJsonData(1000, 3)
  }
}
</script>

<style lang="less">
html,
body {
  height: 100%;
  margin: 0;
  * {
    box-sizing: border-box;
  }
}

.comm-box-style {
  box-shadow: 0px 5px 20px -5px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 1000px;
  height: 100%;
  margin: 0 auto;
  padding: 10px 0;
  .logo-wrapper {
    .comm-box-style;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(90deg, #2c3e50, #eee);
    margin-bottom: 10px;
    user-select: none;
    > img {
      height: 100%;
    }
  }

  .main-wrapper {
    display: flex;
    max-height: calc(100% - 100px - 10px);
    /* 选项控制区 */
    .config-panel {
      width: 200px;
      flex-shrink: 0;
      padding: 10px;
      .comm-box-style;
    }
    /* infinite-tree样式 */
    .infinite-tree {
      .comm-box-style;
      margin: 0 10px;
      height: auto;
    }
    /* tree data显示区 */
    .tree-preview {
      width: 390px;
      max-height: 100%;
      overflow: scroll;
      flex-shrink: 0;
      white-space: pre;
      .comm-box-style;
    }
  }
}
</style>
