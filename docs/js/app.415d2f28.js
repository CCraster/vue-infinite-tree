;(function (e) {
  function t(t) {
    for (
      var i, r, c = t[0], s = t[1], l = t[2], u = 0, h = [];
      u < c.length;
      u++
    )
      (r = c[u]),
        Object.prototype.hasOwnProperty.call(a, r) && a[r] && h.push(a[r][0]),
        (a[r] = 0)
    for (i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
    d && d(t)
    while (h.length) h.shift()()
    return o.push.apply(o, l || []), n()
  }
  function n() {
    for (var e, t = 0; t < o.length; t++) {
      for (var n = o[t], i = !0, c = 1; c < n.length; c++) {
        var s = n[c]
        0 !== a[s] && (i = !1)
      }
      i && (o.splice(t--, 1), (e = r((r.s = n[0]))))
    }
    return e
  }
  var i = {},
    a = { app: 0 },
    o = []
  function r(t) {
    if (i[t]) return i[t].exports
    var n = (i[t] = { i: t, l: !1, exports: {} })
    return e[t].call(n.exports, n, n.exports, r), (n.l = !0), n.exports
  }
  ;(r.m = e),
    (r.c = i),
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
        for (var i in e)
          r.d(
            n,
            i,
            function (t) {
              return e[t]
            }.bind(null, i)
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
  var c = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    s = c.push.bind(c)
  ;(c.push = t), (c = c.slice())
  for (var l = 0; l < c.length; l++) t(c[l])
  var d = s
  o.push([0, 'chunk-vendors']), n()
})({
  0: function (e, t, n) {
    e.exports = n('56d7')
  },
  3772: function (e, t, n) {
    'use strict'
    ;(function (e) {
      n('b0c0')
      var i = n('7081')
      function a(e) {
        a.installed || ((a.installed = !0), e.component(i['a'].name, i['a']))
      }
      var o = null
      'undefined' !== typeof window
        ? (o = window.Vue)
        : 'undefined' !== typeof e && (o = e.Vue),
        o && o.use({ install: a }),
        (t['a'] = i['a'])
    }.call(this, n('c8ba')))
  },
  '56d7': function (e, t, n) {
    'use strict'
    n.r(t)
    n('e260'), n('e6cf'), n('cca6'), n('a79d')
    var i = n('2b0e'),
      a = function () {
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
                  { staticClass: 'mock-config' },
                  [
                    n('label', { attrs: { for: 'mockConfigStr' } }, [
                      e._v('DataMock')
                    ]),
                    n('x-input', {
                      staticStyle: { width: '100%' },
                      attrs: {
                        id: 'mockConfigStr',
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
                ),
                n('div', { staticClass: 'vit-config' }, [
                  n('label', [e._v('vitConfig')]),
                  n(
                    'div',
                    [
                      n('label', { class: { active: e.vitConfig.checkable } }, [
                        e._v('checkable')
                      ]),
                      n('x-switch', {
                        model: {
                          value: e.vitConfig.checkable,
                          callback: function (t) {
                            e.$set(e.vitConfig, 'checkable', t)
                          },
                          expression: 'vitConfig.checkable'
                        }
                      })
                    ],
                    1
                  )
                ])
              ]),
              n('infinite-tree', {
                staticClass: 'infinite-tree',
                attrs: { checkable: e.vitConfig.checkable },
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
      o = [
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
      c = n('df9c'),
      s = n('3772'),
      l = {
        name: 'App',
        components: { InfiniteTree: s['a'] },
        data: function () {
          return {
            treeData: [],
            mockConfigStr: '',
            vitConfig: { checkable: !0 }
          }
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
            return (e = 2 !== e.length ? [100, 3] : e), e
          }
        },
        mounted: function () {
          this.treeData = c['a'].apply(void 0, Object(r['a'])(this.mockConfig))
        },
        methods: {
          handleDataMock: function () {
            this.treeData = c['a'].apply(
              void 0,
              Object(r['a'])(this.mockConfig)
            )
          }
        }
      },
      d = l,
      u = (n('f42b'), n('2877')),
      h = Object(u['a'])(d, a, o, !1, null, '0e6e88ca', null),
      f = h.exports,
      p =
        (n('f5fa'),
        function () {
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
        }),
      v = [],
      m = {
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
      N = m,
      b = (n('8191'), Object(u['a'])(N, p, v, !1, null, '0e290ff5', null)),
      g = b.exports,
      k = function () {
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
      _ = [],
      y = {
        name: 'XButton',
        props: { title: { type: String, default: 'button' } },
        methods: {
          handleButtonClick: function (e) {
            this.$emit('click')
          }
        }
      },
      w = y,
      C = (n('fb62'), Object(u['a'])(w, k, _, !1, null, '5c0f35ec', null)),
      D = C.exports,
      S = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t
        return n(
          'span',
          e._b(
            {
              staticClass: 'xswitch',
              class: { active: e.value_inner },
              on: { click: e.handleSwitchClick }
            },
            'span',
            e.$attrs,
            !1
          )
        )
      },
      O = [],
      x = {
        name: 'XSwitch',
        props: { value: { type: Boolean, default: !1 } },
        data: function () {
          return { value_inner: !1 }
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
        methods: {
          handleSwitchClick: function (e) {
            this.value_inner = !this.value_inner
          }
        }
      },
      j = x,
      L = (n('f69f'), Object(u['a'])(j, S, O, !1, null, '0a8d3964', null)),
      $ = L.exports
    i['a'].component('x-input', g),
      i['a'].component('x-button', D),
      i['a'].component('x-switch', $),
      (i['a'].config.productionTip = !1),
      new i['a']({
        render: function (e) {
          return e(f)
        }
      }).$mount('#app')
  },
  7081: function (e, t, n) {
    'use strict'
    var i = function () {
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
              e._l(e.shouldRenderNodeList, function (t, i) {
                return n(
                  'tree-node',
                  e._b(
                    {
                      key: t.id,
                      attrs: {
                        treeNode: t,
                        tabSize: e.tabSize,
                        translateY:
                          (e.renderNodePosRange[0] + i) * e.treeNodeHeight,
                        isNodeFocus: e.focusNode && t.id === e.focusNode.id
                      },
                      on: {
                        setFocusNode: e.handleSetFocusNode,
                        'vit-changeNode': e.handleChangeNode,
                        'vit-selectNode': e.handleSelectNode,
                        'vit-openNode': e.handleOpenNode
                      }
                    },
                    'tree-node',
                    { checkable: e.checkable },
                    !1
                  )
                )
              }),
              1
            )
          ]
        )
      },
      a = [],
      o = (n('fb6a'), n('a434'), n('b0c0'), n('2909')),
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
              e.checkable
                ? n('span', {
                    staticClass: 'vit-node-checkbox',
                    class: { checked: e.treeNode.state.selected },
                    on: {
                      click: function (t) {
                        return t.stopPropagation(), e.onSelectNode(t)
                      }
                    }
                  })
                : e._e(),
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
      c = [],
      s =
        (n('13d5'),
        n('a9e3'),
        {
          name: 'TreeNode',
          props: {
            treeNode: { type: Object, default: function () {} },
            tabSize: { type: Number, default: 8 },
            translateY: { type: Number, default: 0 },
            isNodeFocus: { type: Boolean, default: !1 },
            checkable: { type: Boolean, default: !1 }
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
      l = s,
      d = n('2877'),
      u = Object(d['a'])(l, r, c, !1, null, null, null),
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
          n = function e(n, i) {
            n.forEach(function (n, a) {
              var r = n.id,
                c = n.name,
                s = n.state,
                l = {
                  id: r,
                  name: c,
                  state: s,
                  path: [].concat(Object(o['a'])(i), [a])
                }
              n.children.length > 0 && s.opened
                ? (t.push(l),
                  e(n.children, [].concat(Object(o['a'])(i), [a, 'children'])))
                : n.children.length > 0 && !s.opened
                ? t.push(l)
                : t.push(
                    Object(f['a'])(Object(f['a'])({}, l), {}, { isLeaf: !0 })
                  )
            })
          }
        return n(e, []), t
      },
      m = function e(t, n, i) {
        Date.now()
        ;(t.state[n] = i),
          t.children.length > 0 &&
            t.children.forEach(function (t) {
              e(t, n, i)
            })
      },
      N = function (e, t, n) {
        Date.now()
        for (var i = t.length, a = i; a > 0; a--) {
          var o = p(e, t.slice(0, a))
          if (!Array.isArray(o)) {
            if (
              !o.children[n ? 'every' : 'some'](function (e) {
                return e.state.selected === n
              })
            )
              break
            o.state.selected = n
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
          },
          checkable: { type: Boolean, default: !1 }
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
            ;(this._treeData = Object(o['a'])(this._treeData)),
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
              i = e.target.clientHeight
            if (0 === n || n) {
              var a = n - i * t.visibleOffset,
                o = n + i * (t.visibleOffset + 1)
              ;(a = a > 0 ? a : 0),
                (o =
                  o < t.nodeHeight * this.totalNodeNum
                    ? o
                    : t.nodeHeight * this.totalNodeNum),
                (this.renderNodePosRange = [
                  Math.floor(a / t.nodeHeight),
                  Math.ceil(o / t.nodeHeight)
                ])
            }
          },
          computeShouldRenderNodeList: function () {
            var e
            2 === this.renderNodePosRange.length
              ? ((this.shouldRenderNodeList.length = 0),
                (e = this.shouldRenderNodeList).push.apply(
                  e,
                  Object(o['a'])(
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
      k = g,
      _ = Object(d['a'])(k, i, a, !1, null, null, null)
    t['a'] = _.exports
  },
  '7d04': function (e, t, n) {},
  8191: function (e, t, n) {
    'use strict'
    var i = n('e1b9'),
      a = n.n(i)
    a.a
  },
  bce3: function (e, t, n) {},
  df9c: function (e, t, n) {
    'use strict'
    n.d(t, 'b', function () {
      return o
    }),
      n.d(t, 'a', function () {
        return r
      })
    n('cb29'), n('d81d')
    var i = n('11c1'),
      a = n.n(i),
      o = function (e) {
        return {
          id: a()(),
          name: e || Math.random(0, 255),
          state: { opened: !0, disabled: !1, selected: !1 },
          children: []
        }
      },
      r = function (e, t) {
        Date.now()
        for (var n = [], i = 0; i < e; i++) {
          var a = Math.floor(Math.random() * (t + 1)),
            r = o()
          ;(r.children = new Array(a).fill(0).map(function () {
            return o()
          })),
            n.push(r)
        }
        return n
      }
  },
  e1b9: function (e, t, n) {},
  f294: function (e, t, n) {},
  f42b: function (e, t, n) {
    'use strict'
    var i = n('f796'),
      a = n.n(i)
    a.a
  },
  f5fa: function (e, t, n) {},
  f69f: function (e, t, n) {
    'use strict'
    var i = n('bce3'),
      a = n.n(i)
    a.a
  },
  f796: function (e, t, n) {},
  fb62: function (e, t, n) {
    'use strict'
    var i = n('7d04'),
      a = n.n(i)
    a.a
  }
})
