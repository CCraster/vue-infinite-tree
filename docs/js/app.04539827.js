;(function (e) {
  function t(t) {
    for (
      var o, r, s = t[0], d = t[1], c = t[2], l = 0, h = [];
      l < s.length;
      l++
    )
      (r = s[l]),
        Object.prototype.hasOwnProperty.call(a, r) && a[r] && h.push(a[r][0]),
        (a[r] = 0)
    for (o in d) Object.prototype.hasOwnProperty.call(d, o) && (e[o] = d[o])
    u && u(t)
    while (h.length) h.shift()()
    return i.push.apply(i, c || []), n()
  }
  function n() {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], o = !0, s = 1; s < n.length; s++) {
        var d = n[s]
        0 !== a[d] && (o = !1)
      }
      o && (i.splice(t--, 1), (e = r((r.s = n[0]))))
    }
    return e
  }
  var o = {},
    a = { app: 0 },
    i = []
  function r(t) {
    if (o[t]) return o[t].exports
    var n = (o[t] = { i: t, l: !1, exports: {} })
    return e[t].call(n.exports, n, n.exports, r), (n.l = !0), n.exports
  }
  ;(r.m = e),
    (r.c = o),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n })
    }),
    (r.r = function (e) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e
      if (4 & t && 'object' === typeof e && e && e.__esModule) return e
      var n = Object.create(null)
      if (
        (r.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var o in e)
          r.d(
            n,
            o,
            function (t) {
              return e[t]
            }.bind(null, o)
          )
      return n
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e['default']
            }
          : function () {
              return e
            }
      return r.d(t, 'a', t), t
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (r.p = '/vue-infinite-tree/')
  var s = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    d = s.push.bind(s)
  ;(s.push = t), (s = s.slice())
  for (var c = 0; c < s.length; c++) t(s[c])
  var u = d
  i.push([0, 'chunk-vendors']), n()
})({
  0: function (e, t, n) {
    e.exports = n('56d7')
  },
  '0a17': function (e, t, n) {},
  2395: function (e, t, n) {},
  '2af9': function (e, t, n) {
    'use strict'
    ;(function (e) {
      n('b0c0')
      var o = n('a93c')
      function a(e) {
        a.installed || ((a.installed = !0), e.component(o['a'].name, o['a']))
      }
      var i = null
      'undefined' !== typeof window
        ? (i = window.Vue)
        : 'undefined' !== typeof e && (i = e.Vue),
        i && i.use({ install: a }),
        (t['a'] = o['a'])
    }.call(this, n('c8ba')))
  },
  '56d7': function (e, t, n) {
    'use strict'
    n.r(t)
    n('e260'), n('e6cf'), n('cca6'), n('a79d')
    var o = n('2b0e'),
      a = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t
        return n('div', { attrs: { id: 'app' } }, [
          n('div', { staticClass: 'logo-wrapper' }, [
            e._v('Vue Infinite Tree')
          ]),
          n(
            'div',
            { staticClass: 'main-wrapper' },
            [
              n('div', { staticClass: 'config-panel' }, [e._v('config')]),
              n('infinite-tree', {
                staticClass: 'inf-tree',
                model: {
                  value: e.treeData,
                  callback: function (t) {
                    e.treeData = t
                  },
                  expression: 'treeData'
                }
              })
            ],
            1
          )
        ])
      },
      i = [],
      r = n('2af9'),
      s = n('df9c'),
      d = {
        name: 'App',
        components: { InfiniteTree: r['a'] },
        data: function () {
          return { treeData: [] }
        },
        mounted: function () {
          this.treeData = Object(s['a'])(5, 3)
        }
      },
      c = d,
      u = (n('7c55'), n('2877')),
      l = Object(u['a'])(c, a, i, !1, null, null, null),
      h = l.exports
    ;(o['a'].config.productionTip = !1),
      new o['a']({
        render: function (e) {
          return e(h)
        }
      }).$mount('#app')
  },
  '76c3': function (e, t, n) {},
  '7c55': function (e, t, n) {
    'use strict'
    var o = n('2395'),
      a = n.n(o)
    a.a
  },
  a93c: function (e, t, n) {
    'use strict'
    var o = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t
        return n(
          'div',
          { staticClass: 'vit-wrapper', style: {}, on: { scroll: e.onScroll } },
          [
            n(
              'div',
              {
                style: {
                  position: 'relative',
                  height: 22 * e.totalNodeList.length + 'px'
                },
                on: {
                  mouseenter: function (t) {
                    return e.handleMouseEnter(!0)
                  },
                  mouseleave: function (t) {
                    return e.handleMouseEnter(!1)
                  }
                }
              },
              e._l(e.shouldRenderNodeList, function (t, o) {
                return n('tree-node', {
                  key: t.id,
                  attrs: {
                    treeNode: t,
                    tabSize: e.tabSize,
                    translateY:
                      (e.renderNodePosRange[0] + o) * e.treeNodeHeight,
                    isNodeFocus: e.focusNode && t.id === e.focusNode.id
                  },
                  on: {
                    setFocusNode: e.handleSetFocusNode,
                    'vit-changeNode': e.handleChangeNode,
                    'vit-selectNode': e.handleSelectNode,
                    'vit-openNode': e.handleOpenNode
                  }
                })
              }),
              1
            )
          ]
        )
      },
      a = [],
      i = (n('fb6a'), n('a434'), n('b0c0'), n('2909')),
      r = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t
        return n(
          'div',
          {
            staticClass: 'node-wrapper',
            class: { 'node-focus': e.isNodeFocus },
            style: e.nodeStyle,
            on: { click: e.onNodeClick }
          },
          [
            n('span', {
              staticClass: 'check-box',
              class: { checked: e.treeNode.state.selected },
              on: {
                click: function (t) {
                  return t.stopPropagation(), e.onSelectNode(t)
                }
              }
            }),
            n('span', {
              class: {
                'el-icon-folder-remove':
                  !e.treeNode.isLeaf && e.treeNode.state.opened,
                'el-icon-folder-add':
                  !e.treeNode.isLeaf && !e.treeNode.state.opened,
                'el-icon-price-tag': e.treeNode.isLeaf
              },
              style: {
                marginRight: '4px',
                transform: e.treeNode.isLeaf ? 'rotate(0.5turn)' : 'none'
              },
              on: {
                click: function (t) {
                  return t.stopPropagation(), e.onNodeOpenClick(t)
                }
              }
            }),
            n(
              'span',
              {
                class: {},
                attrs: { contenteditable: '' },
                on: {
                  click: function (e) {
                    e.stopPropagation()
                  },
                  blur: e.onNodeBlur
                }
              },
              [e._v(e._s(e.treeNode.name))]
            )
          ]
        )
      },
      s = [],
      d =
        (n('13d5'),
        n('a9e3'),
        {
          name: 'TreeNode',
          props: {
            treeNode: { type: Object, default: function () {} },
            tabSize: { type: Number, default: 8 },
            translateY: { type: Number, default: 0 },
            isNodeFocus: { type: Boolean, default: !1 }
          },
          data: function () {
            return {}
          },
          computed: {
            nodeDepth: function () {
              return this.treeNode.path.reduce(function (e, t) {
                return 'children' === t ? e : e + 1
              }, 0)
            },
            nodeStyle: function () {
              return {
                paddingLeft: this.tabSize * (this.nodeDepth - 1) + 'px',
                transform: 'translate(0, '.concat(this.translateY, 'px)')
              }
            }
          },
          methods: {
            onNodeOpenClick: function () {
              !this.treeNode.isLeaf &&
                this.$emit('vit-openNode', this.treeNode.path)
            },
            onSelectNode: function () {
              this.$emit(
                'vit-selectNode',
                this.treeNode.path,
                !this.treeNode.state.selected
              )
            },
            onNodeClick: function () {
              var e = this.isNodeFocus ? null : this.treeNode
              this.$emit('setFocusNode', e)
            },
            onNodeBlur: function (e) {
              e.target.innerHTML !== this.treeNode.name &&
                this.$emit(
                  'vit-changeNode',
                  this.treeNode.path,
                  e.target.innerHTML
                )
            }
          }
        }),
      c = d,
      u = (n('c156'), n('2877')),
      l = Object(u['a'])(c, r, s, !1, null, '271e173d', null),
      h = l.exports,
      f = (n('99af'), n('4160'), n('159b'), n('5530')),
      p = function (e, t) {
        var n = e
        return (
          t.forEach(function (e) {
            n = n[e]
          }),
          n
        )
      },
      N = function (e) {
        Date.now()
        var t = [],
          n = function e(n, o) {
            n.forEach(function (n, a) {
              var r = n.id,
                s = n.name,
                d = n.state,
                c = {
                  id: r,
                  name: s,
                  state: d,
                  path: [].concat(Object(i['a'])(o), [a])
                }
              n.children.length > 0 && d.opened
                ? (t.push(c),
                  e(n.children, [].concat(Object(i['a'])(o), [a, 'children'])))
                : n.children.length > 0 && !d.opened
                ? t.push(c)
                : t.push(
                    Object(f['a'])(Object(f['a'])({}, c), {}, { isLeaf: !0 })
                  )
            })
          }
        return n(e, []), t
      },
      v = function e(t, n, o) {
        Date.now()
        ;(t.state[n] = o),
          t.children.length > 0 &&
            t.children.forEach(function (t) {
              e(t, n, o)
            })
      },
      m = function (e, t, n) {
        Date.now()
        for (var o = t.length, a = o; a > 0; a--) {
          var i = p(e, t.slice(0, a))
          if (!Array.isArray(i)) {
            if (
              !i.children[n ? 'every' : 'some'](function (e) {
                return e.state.selected === n
              })
            )
              break
            i.state.selected = n
          }
        }
      },
      b = n('df9c'),
      g = {
        name: 'InfiniteTree',
        props: {
          value: {
            type: Array,
            default: function () {
              return []
            }
          }
        },
        components: { TreeNode: h },
        data: function () {
          return {
            shouldRenderNodeList: [],
            renderNodePosRange: [0, 100],
            focusNode: null,
            isTreeFocus: !1,
            tabSize: 16,
            treeNodeHeight: 22
          }
        },
        computed: {
          totalNodeNum: function () {
            return this.totalNodeList.length
          }
        },
        watch: {
          value: {
            immediate: !0,
            handler: function (e) {
              ;(this._treeData = e),
                (this.totalNodeList = N(e)),
                this.computeShouldRenderNodeList()
            }
          },
          renderNodePosRange: {
            handler: function () {
              this.computeShouldRenderNodeList()
            }
          }
        },
        mounted: function () {
          window.addEventListener('keyup', this.handleKeyUp)
        },
        beforeDestroy: function () {
          window.removeEventListener('keyup', this.handleKeyUp)
        },
        methods: {
          makeNewTreeData: function () {
            ;(this._treeData = Object(i['a'])(this._treeData)),
              this.$emit('input', this._treeData)
          },
          onScroll: function (e) {
            var t = { nodeHeight: 22, visibleOffset: 2 },
              n = e.target.scrollTop,
              o = e.target.clientHeight
            if (0 === n || n) {
              var a = n - o * t.visibleOffset,
                i = n + o * (t.visibleOffset + 1)
              ;(a = a > 0 ? a : 0),
                (i =
                  i < t.nodeHeight * this.totalNodeNum
                    ? i
                    : t.nodeHeight * this.totalNodeNum),
                (this.renderNodePosRange = [
                  Math.floor(a / t.nodeHeight),
                  Math.ceil(i / t.nodeHeight)
                ])
            }
          },
          computeShouldRenderNodeList: function () {
            var e
            2 === this.renderNodePosRange.length
              ? ((this.shouldRenderNodeList.length = 0),
                (e = this.shouldRenderNodeList).push.apply(
                  e,
                  Object(i['a'])(
                    this.totalNodeList.slice(
                      this.renderNodePosRange[0],
                      this.renderNodePosRange[1]
                    )
                  )
                ))
              : (this.shouldRenderNodeList = this.totalNodeList)
          },
          handleMouseEnter: function (e) {
            this.isTreeFocus = e
          },
          handleKeyUp: function (e) {
            this.isTreeFocus &&
              this.focusNode &&
              (8 === e.keyCode &&
                (this.handleDeleteNode(this.focusNode.path),
                (this.focusNode = null)),
              13 === e.keyCode &&
                this.handleAddChildrenNode(this.focusNode.path),
              9 === e.keyCode && this.handleAddBrotherNode(this.focusNode.path))
          },
          handleSetFocusNode: function (e) {
            this.focusNode = e
          },
          handleAddBrotherNode: function (e) {
            var t = p(this._treeData, e.slice(0, -1)),
              n = e[e.length - 1]
            t.splice(n + 1, 0, Object(b['b'])('new node')),
              this.makeNewTreeData()
          },
          handleAddChildrenNode: function (e) {
            var t = p(this._treeData, e)
            t.children.unshift(Object(b['b'])('new node')),
              this.makeNewTreeData()
          },
          handleDeleteNode: function (e) {
            var t = p(this._treeData, e.slice(0, -1)),
              n = e[e.length - 1]
            t.splice(n, 1), this.makeNewTreeData()
          },
          handleChangeNode: function (e, t) {
            var n = p(this._treeData, e)
            ;(n.name = t), this.makeNewTreeData()
          },
          handleSelectNode: function (e, t) {
            var n = p(this._treeData, e)
            v(n, 'selected', t),
              m(this._treeData, e.slice(0, -1), t),
              this.makeNewTreeData()
          },
          handleOpenNode: function (e) {
            var t = p(this._treeData, e)
            ;(t.state.opened = !t.state.opened), this.makeNewTreeData()
          }
        }
      },
      y = g,
      w = (n('fb05'), Object(u['a'])(y, o, a, !1, null, '26f08982', null))
    t['a'] = w.exports
  },
  c156: function (e, t, n) {
    'use strict'
    var o = n('0a17'),
      a = n.n(o)
    a.a
  },
  df9c: function (e, t, n) {
    'use strict'
    n.d(t, 'b', function () {
      return i
    }),
      n.d(t, 'a', function () {
        return r
      })
    n('cb29'), n('d81d')
    var o = n('11c1'),
      a = n.n(o),
      i = function (e) {
        return {
          id: a()(),
          name: e || Math.random(0, 255),
          state: { opened: !0, disabled: !1, selected: !1 },
          children: []
        }
      },
      r = function (e, t) {
        Date.now()
        for (var n = [], o = 0; o < e; o++) {
          var a = Math.floor(Math.random() * (t + 1)),
            r = i()
          ;(r.children = new Array(a).fill(0).map(function () {
            return i()
          })),
            n.push(r)
        }
        return n
      }
  },
  fb05: function (e, t, n) {
    'use strict'
    var o = n('76c3'),
      a = n.n(o)
    a.a
  }
})
