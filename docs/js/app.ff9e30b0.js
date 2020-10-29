;(function (e) {
  function t(t) {
    for (
      var o, r, s = t[0], c = t[1], d = t[2], u = 0, h = [];
      u < s.length;
      u++
    )
      (r = s[u]),
        Object.prototype.hasOwnProperty.call(i, r) && i[r] && h.push(i[r][0]),
        (i[r] = 0)
    for (o in c) Object.prototype.hasOwnProperty.call(c, o) && (e[o] = c[o])
    l && l(t)
    while (h.length) h.shift()()
    return a.push.apply(a, d || []), n()
  }
  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], o = !0, s = 1; s < n.length; s++) {
        var c = n[s]
        0 !== i[c] && (o = !1)
      }
      o && (a.splice(t--, 1), (e = r((r.s = n[0]))))
    }
    return e
  }
  var o = {},
    i = { app: 0 },
    a = []
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
    c = s.push.bind(s)
  ;(s.push = t), (s = s.slice())
  for (var d = 0; d < s.length; d++) t(s[d])
  var l = c
  a.push([0, 'chunk-vendors']), n()
})({
  0: function (e, t, n) {
    e.exports = n('56d7')
  },
  '0987': function (e, t, n) {
    'use strict'
    var o = n('835b'),
      i = n.n(o)
    i.a
  },
  3772: function (e, t, n) {
    'use strict'
    ;(function (e) {
      n('b0c0')
      var o = n('7081')
      function i(e) {
        i.installed || ((i.installed = !0), e.component(o['a'].name, o['a']))
      }
      var a = null
      'undefined' !== typeof window
        ? (a = window.Vue)
        : 'undefined' !== typeof e && (a = e.Vue),
        a && a.use({ install: i }),
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
          e._m(0),
          n(
            'div',
            { staticClass: 'main-wrapper' },
            [
              n('div', { staticClass: 'config-panel' }, [
                n(
                  'div',
                  { staticClass: 'mock-wrapper' },
                  [
                    n('label', { attrs: { for: 'mockConfigStr' } }, [
                      e._v('DataMock: ')
                    ]),
                    n('x-input', {
                      attrs: {
                        id: 'mockConfigStr',
                        width: '168px',
                        placeholder: '100,3 -> nodeNum,maxLevel'
                      },
                      model: {
                        value: e.mockConfigStr,
                        callback: function (t) {
                          e.mockConfigStr = t
                        },
                        expression: 'mockConfigStr'
                      }
                    }),
                    n('x-button', {
                      attrs: { title: 'go mock' },
                      on: { click: e.handleDataMock }
                    })
                  ],
                  1
                )
              ]),
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
      a = [
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t
          return n('div', { staticClass: 'logo-wrapper' }, [
            n('span', [e._v('Vue')]),
            n('span', [e._v('Infinite')]),
            n('span', [e._v('Tree')])
          ])
        }
      ],
      r = (n('d81d'), n('ac1f'), n('1276'), n('498a'), n('2909')),
      s = n('df9c'),
      c = n('9b19'),
      d = n.n(c),
      l = n('3772'),
      u = {
        name: 'App',
        components: { InfiniteTree: l['a'] },
        data: function () {
          return { logo: d.a, treeData: [], mockConfigStr: '' }
        },
        computed: {
          treePreviewData: function () {
            return JSON.stringify(this.treeData, !1, 2)
          },
          mockConfig: function () {
            var e = []
            try {
              e = this.mockConfigStr.split(',').map(function (e) {
                return parseInt(e.trim())
              })
            } catch (t) {}
            return (e = 2 !== e.length ? [1e3, 3] : e), e
          }
        },
        mounted: function () {
          this.treeData = s['a'].apply(void 0, Object(r['a'])(this.mockConfig))
        },
        methods: {
          handleDataMock: function () {
            this.treeData = s['a'].apply(
              void 0,
              Object(r['a'])(this.mockConfig)
            )
          }
        }
      },
      h = u,
      f = (n('5c0b'), n('2877')),
      p = Object(f['a'])(h, i, a, !1, null, null, null),
      v = p.exports,
      m = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t
        return n(
          'input',
          e._b(
            {
              ref: 'input',
              staticClass: 'xinput',
              style: { width: e.width },
              attrs: {
                type: 'text',
                autocomplete: 'off',
                placeholder: e.placeholder
              },
              domProps: { value: e.value_inner },
              on: { input: e.handleInputValueChange }
            },
            'input',
            e.$attrs,
            !1
          )
        )
      },
      N = [],
      b = {
        name: 'XInput',
        props: {
          value: { type: String, default: '' },
          placeholder: { type: String, default: 'please input' },
          width: { type: String, default: '' }
        },
        data: function () {
          return { value_inner: '' }
        },
        computed: {
          input: function () {
            return this.$refs['input']
          }
        },
        watch: {
          value: {
            immediate: !0,
            handler: function (e, t) {
              e !== t && (this.value_inner = e)
            }
          },
          value_inner: {
            immediate: !0,
            handler: function (e, t) {
              e !== t && this.$emit('input', this.value_inner)
            }
          }
        },
        mounted: function () {
          this.input.value = this.value_inner
        },
        methods: {
          handleInputValueChange: function (e) {
            this.value_inner = e.target.value
          }
        }
      },
      g = b,
      y = (n('0987'), Object(f['a'])(g, m, N, !1, null, '22d2283d', null)),
      w = y.exports,
      _ = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t
        return n(
          'button',
          e._b(
            {
              ref: 'button',
              staticClass: 'xbutton',
              on: { click: e.handleButtonClick }
            },
            'button',
            e.$attrs,
            !1
          ),
          [e._v(' ' + e._s(e.title) + ' ')]
        )
      },
      k = [],
      D = {
        name: 'XButton',
        props: { title: { type: String, default: 'button' } },
        methods: {
          handleButtonClick: function (e) {
            this.$emit('click')
          }
        }
      },
      C = D,
      O = (n('fb62'), Object(f['a'])(C, _, k, !1, null, '5c0f35ec', null)),
      S = O.exports
    o['a'].component('x-input', w),
      o['a'].component('x-button', S),
      (o['a'].config.productionTip = !1),
      new o['a']({
        render: function (e) {
          return e(v)
        }
      }).$mount('#app')
  },
  '5c0b': function (e, t, n) {
    'use strict'
    var o = n('9c0c'),
      i = n.n(o)
    i.a
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
      a = (n('fb6a'), n('a434'), n('b0c0'), n('2909')),
      r =
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
      c =
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
      d = c,
      l = n('2877'),
      u = Object(l['a'])(d, r, s, !1, null, null, null),
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
      v = function (e) {
        Date.now()
        var t = [],
          n = function e(n, o) {
            n.forEach(function (n, i) {
              var r = n.id,
                s = n.name,
                c = n.state,
                d = {
                  id: r,
                  name: s,
                  state: c,
                  path: [].concat(Object(a['a'])(o), [i])
                }
              n.children.length > 0 && c.opened
                ? (t.push(d),
                  e(n.children, [].concat(Object(a['a'])(o), [i, 'children'])))
                : n.children.length > 0 && !c.opened
                ? t.push(d)
                : t.push(
                    Object(f['a'])(Object(f['a'])({}, d), {}, { isLeaf: !0 })
                  )
            })
          }
        return n(e, []), t
      },
      m = function e(t, n, o) {
        Date.now()
        ;(t.state[n] = o),
          t.children.length > 0 &&
            t.children.forEach(function (t) {
              e(t, n, o)
            })
      },
      N = function (e, t, n) {
        Date.now()
        for (var o = t.length, i = o; i > 0; i--) {
          var a = p(e, t.slice(0, i))
          if (!Array.isArray(a)) {
            if (
              !a.children[n ? 'every' : 'some'](function (e) {
                return e.state.selected === n
              })
            )
              break
            a.state.selected = n
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
                (this.totalNodeList = v(e)),
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
            ;(this._treeData = Object(a['a'])(this._treeData)),
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
                a = n + o * (t.visibleOffset + 1)
              ;(i = i > 0 ? i : 0),
                (a =
                  a < t.nodeHeight * this.totalNodeNum
                    ? a
                    : t.nodeHeight * this.totalNodeNum),
                (this.renderNodePosRange = [
                  Math.floor(i / t.nodeHeight),
                  Math.ceil(a / t.nodeHeight)
                ])
            }
          },
          computeShouldRenderNodeList: function () {
            var e
            2 === this.renderNodePosRange.length
              ? ((this.shouldRenderNodeList.length = 0),
                (e = this.shouldRenderNodeList).push.apply(
                  e,
                  Object(a['a'])(
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
            m(n, 'selected', t),
              N(this._treeData, e.slice(0, -1), t),
              this.makeNewTreeData()
          },
          handleOpenNode: function (e) {
            var t = p(this._treeData, e)
            ;(t.state.opened = !t.state.opened), this.makeNewTreeData()
          }
        }
      },
      y = g,
      w = Object(l['a'])(y, o, i, !1, null, null, null)
    t['a'] = w.exports
  },
  '7d04': function (e, t, n) {},
  '835b': function (e, t, n) {},
  '9b19': function (e, t, n) {
    e.exports = n.p + 'img/logo.54e62cae.svg'
  },
  '9c0c': function (e, t, n) {},
  df9c: function (e, t, n) {
    'use strict'
    n.d(t, 'b', function () {
      return a
    }),
      n.d(t, 'a', function () {
        return r
      })
    n('cb29'), n('d81d')
    var o = n('11c1'),
      i = n.n(o),
      a = function (e) {
        return {
          id: i()(),
          name: e || Math.random(0, 255),
          state: { opened: !0, disabled: !1, selected: !1 },
          children: []
        }
      },
      r = function (e, t) {
        Date.now()
        for (var n = [], o = 0; o < e; o++) {
          var i = Math.floor(Math.random() * (t + 1)),
            r = a()
          ;(r.children = new Array(i).fill(0).map(function () {
            return a()
          })),
            n.push(r)
        }
        return n
      }
  },
  f294: function (e, t, n) {},
  fb62: function (e, t, n) {
    'use strict'
    var o = n('7d04'),
      i = n.n(o)
    i.a
  }
})
