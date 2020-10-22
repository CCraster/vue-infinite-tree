;(function (e) {
  function t(t) {
    for (
      var o, a, s = t[0], d = t[1], c = t[2], u = 0, h = [];
      u < s.length;
      u++
    )
      (a = s[u]),
        Object.prototype.hasOwnProperty.call(i, a) && i[a] && h.push(i[a][0]),
        (i[a] = 0)
    for (o in d) Object.prototype.hasOwnProperty.call(d, o) && (e[o] = d[o])
    l && l(t)
    while (h.length) h.shift()()
    return r.push.apply(r, c || []), n()
  }
  function n() {
    for (var e, t = 0; t < r.length; t++) {
      for (var n = r[t], o = !0, s = 1; s < n.length; s++) {
        var d = n[s]
        0 !== i[d] && (o = !1)
      }
      o && (r.splice(t--, 1), (e = a((a.s = n[0]))))
    }
    return e
  }
  var o = {},
    i = { app: 0 },
    r = []
  function a(t) {
    if (o[t]) return o[t].exports
    var n = (o[t] = { i: t, l: !1, exports: {} })
    return e[t].call(n.exports, n, n.exports, a), (n.l = !0), n.exports
  }
  ;(a.m = e),
    (a.c = o),
    (a.d = function (e, t, n) {
      a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n })
    }),
    (a.r = function (e) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (a.t = function (e, t) {
      if ((1 & t && (e = a(e)), 8 & t)) return e
      if (4 & t && 'object' === typeof e && e && e.__esModule) return e
      var n = Object.create(null)
      if (
        (a.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var o in e)
          a.d(
            n,
            o,
            function (t) {
              return e[t]
            }.bind(null, o)
          )
      return n
    }),
    (a.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e['default']
            }
          : function () {
              return e
            }
      return a.d(t, 'a', t), t
    }),
    (a.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (a.p = '/vue-infinite-tree/')
  var s = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    d = s.push.bind(s)
  ;(s.push = t), (s = s.slice())
  for (var c = 0; c < s.length; c++) t(s[c])
  var l = d
  r.push([0, 'chunk-vendors']), n()
})({
  0: function (e, t, n) {
    e.exports = n('56d7')
  },
  2395: function (e, t, n) {},
  3772: function (e, t, n) {
    'use strict'
    ;(function (e) {
      n('b0c0')
      var o = n('7081')
      function i(e) {
        i.installed || ((i.installed = !0), e.component(o['a'].name, o['a']))
      }
      var r = null
      'undefined' !== typeof window
        ? (r = window.Vue)
        : 'undefined' !== typeof e && (r = e.Vue),
        r && r.use({ install: i }),
        (t['a'] = o['a'])
    }.call(this, n('c8ba')))
  },
  '56d7': function (e, t, n) {
    'use strict'
    n.r(t)
    n('e260'), n('e6cf'), n('cca6'), n('a79d')
    var o = n('2b0e'),
      i = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t
        return n('div', { attrs: { id: 'app' } }, [
          n('div', { staticClass: 'logo-wrapper' }, [
            n('img', { attrs: { src: e.logo } })
          ]),
          n(
            'div',
            { staticClass: 'main-wrapper' },
            [
              e._m(0),
              n('infinite-tree', {
                staticClass: 'infinite-tree',
                model: {
                  value: e.treeData,
                  callback: function (t) {
                    e.treeData = t
                  },
                  expression: 'treeData'
                }
              }),
              n('div', { staticClass: 'tree-preview' }, [
                e._v(e._s(e.treePreviewData))
              ])
            ],
            1
          )
        ])
      },
      r = [
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t
          return n('div', { staticClass: 'config-panel' }, [
            n('span', [e._v('dsds')])
          ])
        }
      ],
      a = n('df9c'),
      s = n('9b19'),
      d = n.n(s),
      c = n('3772'),
      l = {
        name: 'App',
        components: { InfiniteTree: c['a'] },
        data: function () {
          return { logo: d.a, treeData: [] }
        },
        computed: {
          treePreviewData: function () {
            return JSON.stringify(this.treeData, !1, 2)
          }
        },
        mounted: function () {
          this.treeData = Object(a['a'])(1e3, 3)
        }
      },
      u = l,
      h = (n('7c55'), n('2877')),
      f = Object(h['a'])(u, i, r, !1, null, null, null),
      p = f.exports
    ;(o['a'].config.productionTip = !1),
      new o['a']({
        render: function (e) {
          return e(p)
        }
      }).$mount('#app')
  },
  7081: function (e, t, n) {
    'use strict'
    var o = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t
        return n(
          'div',
          {
            ref: 'vit-wrapper',
            staticClass: 'vit-wrapper',
            style: {},
            attrs: { id: 'vit-wrapper', tabindex: '0' },
            on: { scroll: e.onScroll }
          },
          [
            n(
              'div',
              {
                style: {
                  position: 'relative',
                  height: e.totalNodeList.length * e.treeNodeHeight + 'px'
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
      i = [],
      r = (n('fb6a'), n('a434'), n('b0c0'), n('2909')),
      a =
        (n('f294'),
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t
          return n(
            'div',
            {
              staticClass: 'vit-node-wrapper',
              style: e.nodeStyle,
              attrs: { draggable: '' }
            },
            [
              n('span', {
                staticClass: 'vit-node-arrow',
                class: {
                  'fa fa-angle-right': !e.treeNode.isLeaf,
                  collapsed: !e.treeNode.isLeaf && e.treeNode.state.opened
                },
                on: {
                  click: function (t) {
                    return t.stopPropagation(), e.onNodeOpenClick(t)
                  }
                }
              }),
              n('span', {
                staticClass: 'vit-node-checkbox',
                class: { checked: e.treeNode.state.selected },
                on: {
                  click: function (t) {
                    return t.stopPropagation(), e.onSelectNode(t)
                  }
                }
              }),
              n(
                'span',
                {
                  staticClass: 'vit-node-content',
                  class: { 'vit-node-focus': e.isNodeFocus },
                  on: { click: e.onNodeClick }
                },
                [
                  n('span', { on: { blur: e.onNodeBlur } }, [
                    e._v(e._s(e.treeNode.name))
                  ])
                ]
              )
            ]
          )
        }),
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
      l = n('2877'),
      u = Object(l['a'])(c, a, s, !1, null, null, null),
      h = u.exports,
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
            n.forEach(function (n, i) {
              var a = n.id,
                s = n.name,
                d = n.state,
                c = {
                  id: a,
                  name: s,
                  state: d,
                  path: [].concat(Object(r['a'])(o), [i])
                }
              n.children.length > 0 && d.opened
                ? (t.push(c),
                  e(n.children, [].concat(Object(r['a'])(o), [i, 'children'])))
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
        for (var o = t.length, i = o; i > 0; i--) {
          var r = p(e, t.slice(0, i))
          if (!Array.isArray(r)) {
            if (
              !r.children[n ? 'every' : 'some'](function (e) {
                return e.state.selected === n
              })
            )
              break
            r.state.selected = n
          }
        }
      },
      g = n('df9c'),
      b = {
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
            tabSize: 24,
            treeNodeHeight: 28
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
          this.$refs['vit-wrapper'].addEventListener('keyup', this.handleKeyUp),
            this.$refs['vit-wrapper'].addEventListener('keydown', function (e) {
              e.preventDefault()
            })
        },
        beforeDestroy: function () {
          this.$refs['vit-wrapper'].removeEventListener(
            'keyup',
            this.handleKeyUp
          )
        },
        methods: {
          makeNewTreeData: function () {
            ;(this._treeData = Object(r['a'])(this._treeData)),
              this.$emit('input', this._treeData)
          },
          isTreeFocus: function () {
            var e
            return (
              'vit-wrapper' ===
              (null === (e = document.activeElement) || void 0 === e
                ? void 0
                : e.id)
            )
          },
          onScroll: function (e) {
            var t = { nodeHeight: this.treeNodeHeight, visibleOffset: 2 },
              n = e.target.scrollTop,
              o = e.target.clientHeight
            if (0 === n || n) {
              var i = n - o * t.visibleOffset,
                r = n + o * (t.visibleOffset + 1)
              ;(i = i > 0 ? i : 0),
                (r =
                  r < t.nodeHeight * this.totalNodeNum
                    ? r
                    : t.nodeHeight * this.totalNodeNum),
                (this.renderNodePosRange = [
                  Math.floor(i / t.nodeHeight),
                  Math.ceil(r / t.nodeHeight)
                ])
            }
          },
          computeShouldRenderNodeList: function () {
            var e
            2 === this.renderNodePosRange.length
              ? ((this.shouldRenderNodeList.length = 0),
                (e = this.shouldRenderNodeList).push.apply(
                  e,
                  Object(r['a'])(
                    this.totalNodeList.slice(
                      this.renderNodePosRange[0],
                      this.renderNodePosRange[1]
                    )
                  )
                ))
              : (this.shouldRenderNodeList = this.totalNodeList)
          },
          handleKeyUp: function (e) {
            this.isTreeFocus() &&
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
            t.splice(n + 1, 0, Object(g['b'])('new node')),
              this.makeNewTreeData()
          },
          handleAddChildrenNode: function (e) {
            var t = p(this._treeData, e)
            t.children.unshift(Object(g['b'])('new node')),
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
      y = b,
      w = Object(l['a'])(y, o, i, !1, null, null, null)
    t['a'] = w.exports
  },
  '7c55': function (e, t, n) {
    'use strict'
    var o = n('2395'),
      i = n.n(o)
    i.a
  },
  '9b19': function (e, t, n) {
    e.exports = n.p + 'img/logo.54e62cae.svg'
  },
  df9c: function (e, t, n) {
    'use strict'
    n.d(t, 'b', function () {
      return r
    }),
      n.d(t, 'a', function () {
        return a
      })
    n('cb29'), n('d81d')
    var o = n('11c1'),
      i = n.n(o),
      r = function (e) {
        return {
          id: i()(),
          name: e || Math.random(0, 255),
          state: { opened: !0, disabled: !1, selected: !1 },
          children: []
        }
      },
      a = function (e, t) {
        Date.now()
        for (var n = [], o = 0; o < e; o++) {
          var i = Math.floor(Math.random() * (t + 1)),
            a = r()
          ;(a.children = new Array(i).fill(0).map(function () {
            return r()
          })),
            n.push(a)
        }
        return n
      }
  },
  f294: function (e, t, n) {}
})
