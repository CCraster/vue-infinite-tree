<template>
  <div id="app">
    <div class="logo-wrapper">
      <span>Vue</span>
      <span>Infinite</span>
      <span>Tree</span>
    </div>
    <div class="main-wrapper">
      <div class="config-panel">
        <div class="mock-wrapper">
          <label for="mockConfigStr">DataMock: </label>
          <x-input
            id="mockConfigStr"
            v-model="mockConfigStr"
            width="168px"
            placeholder="100,3 -> nodeNum,maxLevel"
          />
          <x-button title="go mock" @click="handleDataMock" />
        </div>
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
      treeData: [],
      mockConfigStr: ''
    }
  },
  computed: {
    treePreviewData() {
      return JSON.stringify(this.treeData, false, 2)
    },
    mockConfig() {
      let config = []
      try {
        config = this.mockConfigStr
          .split(',')
          .map(item => parseInt(item.trim()))
      } catch (e) {
        console.log(e)
        // config = [1000, 3]
      }
      config = config.length !== 2 ? [1000, 3] : config
      return config
    }
  },
  mounted() {
    this.treeData = fakeTreeJsonData(...this.mockConfig)
  },
  methods: {
    handleDataMock() {
      this.treeData = fakeTreeJsonData(...this.mockConfig)
    }
  }
}
</script>

<style lang="scss">
$color-primary: #ff6633;
$color-secondary: #2c3e50;
$color-gray-1: #e4e7ed;
$color-gray-2: #c5c8ce;
html,
body {
  height: 100%;
  margin: 0;
  * {
    box-sizing: border-box;
  }
}

@mixin comm-box-style {
  box-shadow: 0px 5px 20px -5px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
}

#app {
  font-family: Helvetica, Avenir, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 1000px;
  height: 100%;
  margin: 0 auto;
  padding: 10px 0;
  .logo-wrapper {
    @include comm-box-style;
    height: 100px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: linear-gradient(145deg, $color-secondary, $color-primary 120%);
    margin-bottom: 10px;
    user-select: none;
    > img {
      height: 100%;
    }
    > span {
      color: #fff;
      line-height: 100px;
      &:nth-child(1) {
        font-size: 100px;
      }
      &:nth-child(2) {
        font-size: 120px;
      }
      &:nth-child(3) {
        font-size: 100px;
      }
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
      @include comm-box-style;
      .mock-wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 20px 5px 5px;
        border: 1px dashed $color-secondary;
        > label {
          position: absolute;
          top: -10px;
          left: 10px;
          color: #fff;
          padding: 2px 5px;
          text-align: left;
          margin-bottom: 5px;
          border-radius: 2px;
          background-color: $color-secondary;
        }
        > input {
          margin-bottom: 5px;
        }
      }
    }
    /* infinite-tree样式 */
    .infinite-tree {
      @include comm-box-style;
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
      @include comm-box-style;
    }
  }
}
</style>
