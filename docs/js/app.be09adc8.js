;(function (e) {
  function t(t) {
    for (
      var a, r, l = t[0], s = t[1], c = t[2], u = 0, h = [];
      u < l.length;
      u++
    )
      (r = l[u]),
        Object.prototype.hasOwnProperty.call(i, r) && i[r] && h.push(i[r][0]),
        (i[r] = 0)
    for (a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
    d && d(t)
    while (h.length) h.shift()()
    return o.push.apply(o, c || []), n()
  }
  function n() {
    for (var e, t = 0; t < o.length; t++) {
      for (var n = o[t], a = !0, l = 1; l < n.length; l++) {
        var s = n[l]
        0 !== i[s] && (a = !1)
      }
      a && (o.splice(t--, 1), (e = r((r.s = n[0]))))
    }
    return e
  }
  var a = {},
    i = { app: 0 },
    o = []
  function r(t) {
    if (a[t]) return a[t].exports
    var n = (a[t] = { i: t, l: !1, exports: {} })
    return e[t].call(n.exports, n, n.exports, r), (n.l = !0), n.exports
  }
  ;(r.m = e),
    (r.c = a),
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
        for (var a in e)
          r.d(
            n,
            a,
            function (t) {
              return e[t]
            }.bind(null, a)
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
  var l = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    s = l.push.bind(l)
  ;(l.push = t), (l = l.slice())
  for (var c = 0; c < l.length; c++) t(l[c])
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
      var a = n('7081')
      function i(e) {
        i.installed || ((i.installed = !0), e.component(a['a'].name, a['a']))
      }
      var o = null
      'undefined' !== typeof window
        ? (o = window.Vue)
        : 'undefined' !== typeof e && (o = e.Vue),
        o && o.use({ install: i }),
        (t['a'] = a['a'])
    }.call(this, n('c8ba')))
  },
  '56d7': function (e, t, n) {
    'use strict'
    n.r(t)
    n('e260'), n('e6cf'), n('cca6'), n('a79d')
    var a = n('2b0e'),
      i = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t
        return n('div', { attrs: { id: 'app' } }, [
          e.isDev
            ? e._e()
            : n('div', { staticClass: 'logo-wrapper' }, [
                n('span', [e._v('Vue')]),
                n('span', [e._v('Infinite')]),
                n('span', [e._v('Tree')])
              ]),
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
                        e._v(' checkable ')
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
                  ),
                  n(
                    'div',
                    [
                      n(
                        'label',
                        { class: { active: e.vitConfig.defaultExpandAll } },
                        [e._v(' defaultExpandAll ')]
                      ),
                      n('x-switch', {
                        model: {
                          value: e.vitConfig.defaultExpandAll,
                          callback: function (t) {
                            e.$set(e.vitConfig, 'defaultExpandAll', t)
                          },
                          expression: 'vitConfig.defaultExpandAll'
                        }
                      })
                    ],
                    1
                  )
                ])
              ]),
              n('infinite-tree', {
                staticClass: 'infinite-tree',
                attrs: {
                  checkable: e.vitConfig.checkable,
                  defaultExpandAll: e.vitConfig.defaultExpandAll
                },
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
      o = [],
      r = (n('d81d'), n('ac1f'), n('1276'), n('498a'), n('2909')),
      l = n('df9c'),
      s = n('3772'),
      c = { checkable: !0, defaultExpandAll: !0 },
      d = {
        name: 'App',
        components: { InfiniteTree: s['a'] },
        data: function () {
          return { treeData: [], mockConfigStr: '1000,3', vitConfig: {} }
        },
        computed: {
          isDev: function () {
            return '8080' === location.port
          },
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
        watch: {
          vitConfig: {
            deep: !0,
            handler: function (e) {
              localStorage.setItem('VIT_CONFIG', JSON.stringify(e))
            }
          }
        },
        created: function () {
          var e = localStorage.getItem('VIT_CONFIG')
          e
            ? (this.vitConfig = JSON.parse(e))
            : ((this.vitConfig = c),
              localStorage.setItem(
                'VIT_CONFIG',
                JSON.stringify(this.vitConfig)
              ))
        },
        mounted: function () {
          this.treeData = l['a'].apply(void 0, Object(r['a'])(this.mockConfig))
        },
        methods: {
          handleDataMock: function () {
            this.treeData = l['a'].apply(
              void 0,
              Object(r['a'])(this.mockConfig)
            )
          }
        }
      },
      u = d,
      h = (n('d57b'), n('2877')),
      f = Object(h['a'])(u, i, o, !1, null, '87bb9dc4', null),
      p = f.exports,
      v =
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
      m = [],
      g = {
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
      N = g,
      b = (n('8191'), Object(h['a'])(N, v, m, !1, null, '0e290ff5', null)),
      k = b.exports,
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
      C = [],
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
      S = (n('fb62'), Object(h['a'])(w, _, C, !1, null, '5c0f35ec', null)),
      x = S.exports,
      O = function () {
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
      D = [],
      L = {
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
      P = L,
      j = (n('f69f'), Object(h['a'])(P, O, D, !1, null, '0a8d3964', null)),
      E = j.exports
    a['a'].component('x-input', k),
      a['a'].component('x-button', x),
      a['a'].component('x-switch', E),
      (a['a'].config.productionTip = !1),
      new a['a']({
        render: function (e) {
          return e(p)
        }
      }).$mount('#app')
  },
  7081: function (e, t, n) {
    'use strict'
    var a = function () {
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
              e._l(e.shouldRenderNodeList, function (t, a) {
                return n(
                  'tree-node',
                  e._b(
                    {
                      key: t.id,
                      attrs: {
                        treeNode: t,
                        tabSize: e.tabSize,
                        translateY:
                          (e.renderNodePosRange[0] + a) * e.treeNodeHeight,
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
      i = [],
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
      l = [],
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
      c = s,
      d = n('2877'),
      u = Object(d['a'])(c, r, l, !1, null, null, null),
      h = u.exports,
      f = (n('99af'), n('4160'), n('159b'), n('5530')),
      p = function (e, t) {
        return function () {
          Date.now()
          var t = e.apply(void 0, arguments)
          return t
        }
      },
      v = function (e, t) {
        var n = e
        return (
          t.forEach(function (e) {
            n = n[e]
          }),
          n
        )
      },
      m = function e(t, n) {
        t.forEach(function (t) {
          var a = { opened: !!n.defaultExpandAll, selected: !1, disabled: !1 }
          ;(t.state = a), t.children.length > 0 && e(t.children, n)
        })
      },
      g = function (e) {
        var t = [],
          n = function e(n, a) {
            n.forEach(function (n, i) {
              var r = n.id,
                l = n.name,
                s = n.state,
                c = {
                  id: r,
                  name: l,
                  state: s,
                  path: [].concat(Object(o['a'])(a), [i])
                }
              n.children.length > 0 && s.opened
                ? (t.push(c),
                  e(n.children, [].concat(Object(o['a'])(a), [i, 'children'])))
                : n.children.length > 0 && !s.opened
                ? t.push(c)
                : t.push(
                    Object(f['a'])(Object(f['a'])({}, c), {}, { isLeaf: !0 })
                  )
            })
          }
        return n(e, []), t
      },
      N = function e(t, n, a) {
        ;(t.state[n] = a),
          t.children.length > 0 &&
            t.children.forEach(function (t) {
              e(t, n, a)
            })
      },
      b = function (e, t, n) {
        for (var a = t.length, i = a; i > 0; i--) {
          var o = v(e, t.slice(0, i))
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
      k = {
        getValueFromPath: p(v, 'getValueFromPath'),
        initNodeInnerState: p(m, 'initNodeInnerState'),
        treeJson2List: p(g, 'treeJson2List'),
        setChildrenStatus: p(N, 'setChildrenStatus'),
        checkAncestorStatus: p(b, 'checkAncestorStatus')
      },
      _ = n('df9c'),
      C = {
        name: 'InfiniteTree',
        props: {
          value: {
            type: Array,
            default: function () {
              return []
            }
          },
          checkable: { type: Boolean, default: !1 },
          defaultExpandAll: { type: Boolean, default: !1 }
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
              var t
              ;(null === e ||
              void 0 === e ||
              null === (t = e[0]) ||
              void 0 === t
                ? void 0
                : t.state) ||
                k.initNodeInnerState(e, {
                  defaultExpandAll: this.defaultExpandAll
                }),
                (this._treeData = e),
                (this.totalNodeList = k.treeJson2List(this._treeData)),
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
              a = e.target.clientHeight
            if (0 === n || n) {
              var i = n - a * t.visibleOffset,
                o = n + a * (t.visibleOffset + 1)
              ;(i = i > 0 ? i : 0),
                (o =
                  o < t.nodeHeight * this.totalNodeNum
                    ? o
                    : t.nodeHeight * this.totalNodeNum),
                (this.renderNodePosRange = [
                  Math.floor(i / t.nodeHeight),
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
            var t = k.getValueFromPath(this._treeData, e.slice(0, -1)),
              n = e[e.length - 1]
            t.splice(
              n + 1,
              0,
              Object(_['b'])({ name: 'new node', hasState: !0 })
            ),
              this.makeNewTreeData()
          },
          handleAddChildrenNode: function (e) {
            var t = k.getValueFromPath(this._treeData, e)
            t.children.unshift(
              Object(_['b'])({ name: 'new node', hasState: !0 })
            ),
              this.makeNewTreeData()
          },
          handleDeleteNode: function (e) {
            var t = k.getValueFromPath(this._treeData, e.slice(0, -1)),
              n = e[e.length - 1]
            t.splice(n, 1), this.makeNewTreeData()
          },
          handleChangeNode: function (e, t) {
            var n = k.getValueFromPath(this._treeData, e)
            ;(n.name = t), this.makeNewTreeData()
          },
          handleSelectNode: function (e, t) {
            var n = k.getValueFromPath(this._treeData, e)
            k.setChildrenStatus(n, 'selected', t),
              k.checkAncestorStatus(this._treeData, e.slice(0, -1), t),
              this.makeNewTreeData()
          },
          handleOpenNode: function (e) {
            var t = k.getValueFromPath(this._treeData, e)
            ;(t.state.opened = !t.state.opened), this.makeNewTreeData()
          }
        }
      },
      y = C,
      w = Object(d['a'])(y, a, i, !1, null, null, null)
    t['a'] = w.exports
  },
  '7d04': function (e, t, n) {},
  8191: function (e, t, n) {
    'use strict'
    var a = n('e1b9'),
      i = n.n(a)
    i.a
  },
  '8b84': function (e, t, n) {},
  bce3: function (e, t, n) {},
  d57b: function (e, t, n) {
    'use strict'
    var a = n('8b84'),
      i = n.n(a)
    i.a
  },
  df9c: function (e, t, n) {
    'use strict'
    n.d(t, 'b', function () {
      return o
    }),
      n.d(t, 'a', function () {
        return r
      })
    n('cb29'), n('d81d'), n('b0c0')
    var a = n('11c1'),
      i = n.n(a),
      o = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = { id: i()(), name: e.name || Math.random(0, 255), children: [] }
        return (
          e.hasState && (t.state = { opened: !0, disabled: !1, selected: !1 }),
          t
        )
      },
      r = function (e, t) {
        Date.now()
        var n = []
        while (e > 0) {
          var a = Math.random() > 0.7
          if (a) {
            var i = o(),
              r = Math.floor(Math.random() * t) + 1,
              l = i.children
            r = r > e ? e : r
            for (var s = r - 1; s > 0; s--) {
              var c = o()
              l.push(c), (l = c.children)
            }
            n.push(i), (e -= r)
          } else n.push(o()), (e -= 1)
        }
        return n
      }
  },
  e1b9: function (e, t, n) {},
  f294: function (e, t, n) {},
  f5fa: function (e, t, n) {},
  f69f: function (e, t, n) {
    'use strict'
    var a = n('bce3'),
      i = n.n(a)
    i.a
  },
  fb62: function (e, t, n) {
    'use strict'
    var a = n('7d04'),
      i = n.n(a)
    i.a
  }
})
