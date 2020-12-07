<template>
  <div id="app">
    <!-- HEADER -->
    <div class="logo-wrapper" v-if="!isDev">
      <span>Vue</span>
      <span>Infinite</span>
      <span>Tree</span>
    </div>
    <!-- MAIN CONTENT -->
    <div class="main-wrapper">
      <!-- config -->
      <div class="config-panel">
        <div class="mock-config">
          <label for="mockConfigStr">DataMock</label>
          <x-input
            id="mockConfigStr"
            v-model="mockConfigStr"
            style="width: 100%"
            placeholder="100,3 -> nodeNum,maxLevel"
          />
          <x-button title="go mock" @click="handleDataMock" />
        </div>
        <div class="vit-config">
          <label>vitConfig</label>
          <div>
            <label :class="{ active: vitConfig.checkable }"> checkable </label>
            <x-switch v-model="vitConfig.checkable" />
          </div>
          <div>
            <label :class="{ active: vitConfig.defaultExpandAll }">
              defaultExpandAll
            </label>
            <x-switch v-model="vitConfig.defaultExpandAll" />
          </div>
        </div>
      </div>
      <!-- vit -->
      <infinite-tree
        v-model="treeData"
        class="infinite-tree"
        :checkable="vitConfig.checkable"
        :defaultExpandAll="vitConfig.defaultExpandAll"
      />
      <!-- tree data -->
      <div class="tree-preview">{{ treePreviewData }}</div>
    </div>
  </div>
</template>

<script>
import { fakeTreeJsonData, fakeTreeJsonDataV2 } from '@/utils/dataMock.js'

/* 开发模式导入 - start */
import InfiniteTree from '../package/index.js'
/* 开发模式导入 - end */

/* 测试以外部库方式导入 - start */
// import InfiniteTree from '../lib/vue-infinite-tree.common.js'
// // import '../lib/vue-infinite-tree.css'
// import './testImport.scss'
/* 测试以外部库方式导入 - end */

const VIT_CONFIG_INIT = {
  checkable: true,
  defaultExpandAll: true
}

export default {
  name: 'App',
  components: {
    InfiniteTree
  },
  data() {
    return {
      treeData: [],
      mockConfigStr: '1000,3',
      vitConfig: {}
    }
  },
  computed: {
    // 是否开发环境
    isDev() {
      return location.port === '8080'
    },
    // 把treeData格式化成美观的数据
    treePreviewData() {
      return JSON.stringify(this.treeData, false, 2)
    },
    // 根据mockConfigStr产生mock配置数据，[nodeNum, maxLevel]
    mockConfig() {
      let config = []
      try {
        config = this.mockConfigStr
          .split(',')
          .map(item => parseInt(item.trim()))
      } catch (e) {
        console.log(e)
        // config = [100, 3]
      }
      config = config.length !== 2 ? [100, 3] : config
      return config
    }
  },
  watch: {
    vitConfig: {
      deep: true,
      handler(newValue) {
        localStorage.setItem('VIT_CONFIG', JSON.stringify(newValue))
      }
    }
  },
  created() {
    const storedVitConfig = localStorage.getItem('VIT_CONFIG')
    if (storedVitConfig) {
      this.vitConfig = JSON.parse(storedVitConfig)
    } else {
      this.vitConfig = VIT_CONFIG_INIT
      localStorage.setItem('VIT_CONFIG', JSON.stringify(this.vitConfig))
    }
  },
  mounted() {
    this.treeData = fakeTreeJsonDataV2(...this.mockConfig)
  },
  methods: {
    // 改变数据mock配置时，重新生成mock数据
    handleDataMock() {
      this.treeData = fakeTreeJsonDataV2(...this.mockConfig)
    }
  }
}
</script>

<style lang="scss" scoped>
$color-primary: #ff6633;
$color-secondary: #2c3e50;
$color-gray-1: #e4e7ed;
$color-gray-2: #c5c8ce;

@mixin comm-box-style {
  box-shadow: 0px 5px 20px -5px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
}

#app {
  color: #2c3e50;
  width: 1100px;
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
    padding: 0 40px;
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
      width: 250px;
      flex-shrink: 0;
      padding: 0 5px;
      @include comm-box-style;
      @mixin config-wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 20px 5px 5px;
        border: 1px dashed $color-secondary;
        margin-top: 20px;
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
      }
      .mock-config {
        @include config-wrapper;
        align-items: flex-end;
        > input {
          margin-bottom: 5px;
        }
      }
      .vit-config {
        @include config-wrapper;
        > div {
          display: flex;
          justify-content: space-between;
          align-items: center;
          &:not(:last-child) {
            margin-bottom: 10px;
          }
          .active {
            color: $color-primary;
          }
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
      width: 400px;
      max-height: 100%;
      overflow: scroll;
      flex-shrink: 0;
      white-space: pre;
      @include comm-box-style;
    }
  }
}
</style>
