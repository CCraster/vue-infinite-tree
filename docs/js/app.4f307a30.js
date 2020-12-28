;(function (e) {
  function t(t) {
    for (
      var a, r, d = t[0], l = t[1], s = t[2], u = 0, h = [];
      u < d.length;
      u++
    )
      (r = d[u]),
        Object.prototype.hasOwnProperty.call(i, r) && i[r] && h.push(i[r][0]),
        (i[r] = 0)
    for (a in l) Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a])
    c && c(t)
    while (h.length) h.shift()()
    return o.push.apply(o, s || []), n()
  }
  function n() {
    for (var e, t = 0; t < o.length; t++) {
      for (var n = o[t], a = !0, d = 1; d < n.length; d++) {
        var l = n[d]
        0 !== i[l] && (a = !1)
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
  var d = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    l = d.push.bind(d)
  ;(d.push = t), (d = d.slice())
  for (var s = 0; s < d.length; s++) t(d[s])
  var c = l
  o.push([0, 'chunk-vendors']), n()
})({
  0: function (e, t, n) {
    e.exports = n('56d7')
  },
  2570: function (e, t, n) {
    'use strict'
    var a = n('b5ab'),
      i = n.n(a)
    i.a
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
                ref: 'vit',
                staticClass: 'infinite-tree',
                attrs: {
                  checkable: e.vitConfig.checkable,
                  defaultExpandAll: e.vitConfig.defaultExpandAll,
                  defaultExpandedKeys: [10003, 10016],
                  defaultCheckedKeys: [1e4, 10002, 10017]
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
      d = n('df9c'),
      l = [
        {
          id: 1e4,
          name: 0.7729031223008074,
          children: [],
          state: { disableCheckbox: !0 }
        },
        {
          id: 10001,
          name: 0.9745660976952191,
          children: [{ id: 10002, name: 0.618805044127346, children: [] }]
        },
        {
          id: 10003,
          name: 0.5897049787693982,
          children: [{ id: 10004, name: 0.3142245226854963, children: [] }]
        },
        { id: 10005, name: 0.8694079685243465, children: [] },
        {
          id: 10006,
          name: 0.5421049066156653,
          children: [{ id: 10007, name: 0.9612600618093585, children: [] }]
        },
        { id: 10008, name: 0.11522673158333796, children: [] },
        {
          id: 10009,
          name: 0.7424502905651924,
          children: [{ id: 10010, name: 0.07154498224293993, children: [] }]
        },
        { id: 10011, name: 0.43036585053853416, children: [] },
        { id: 10012, name: 0.17475037726610854, children: [] },
        { id: 10013, name: 0.6951257719789459, children: [] },
        { id: 10014, name: 0.8302479834800267, children: [] },
        { id: 10015, name: 0.24943196589338856, children: [] },
        {
          id: 10016,
          name: 0.37955018522397355,
          children: [
            {
              id: 10017,
              name: 0.18864036147578478,
              children: [{ id: 10021, name: 0.31243243242342, children: [] }]
            },
            { id: 10022, name: 0.678743543131, children: [] }
          ]
        },
        { id: 10018, name: 0.44445063568631227, children: [] },
        { id: 10019, name: 0.5214757886862578, children: [] },
        { id: 10020, name: 0.7145038359028735, children: [] }
      ],
      s = n('3772'),
      c = { checkable: !0, defaultExpandAll: !0 },
      u = {
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
          this.treeData = l
        },
        methods: {
          handleDataMock: function () {
            this.treeData = d['a'].apply(
              void 0,
              Object(r['a'])(this.mockConfig)
            )
          }
        }
      },
      h = u,
      f = (n('2570'), n('2877')),
      p = Object(f['a'])(h, i, o, !1, null, '2415745e', null),
      v = p.exports,
      g =
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
      N = {
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
      b = N,
      y = (n('8191'), Object(f['a'])(b, g, m, !1, null, '0e290ff5', null)),
      k = y.exports,
      C = function () {
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
      D = [],
      _ = {
        name: 'XButton',
        props: { title: { type: String, default: 'button' } },
        methods: {
          handleButtonClick: function (e) {
            this.$emit('click')
          }
        }
      },
      w = _,
      x = (n('fb62'), Object(f['a'])(w, C, D, !1, null, '5c0f35ec', null)),
      S = x.exports,
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
      I = [],
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
      E = L,
      P = (n('f69f'), Object(f['a'])(E, O, I, !1, null, '0a8d3964', null)),
      R = P.exports
    a['a'].component('x-input', k),
      a['a'].component('x-button', S),
      a['a'].component('x-switch', R),
      (a['a'].config.productionTip = !1),
      new a['a']({
        render: function (e) {
          return e(v)
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
                },
                on: {
                  dragover: e.onDragOver,
                  dragleave: e.onDragLeave,
                  drop: e.onDragDrop
                }
              },
              [
                e._l(e.shouldRenderNodeList, function (t, a) {
                  return n(
                    'tree-node',
                    e._b(
                      {
                        key: t.id,
                        attrs: {
                          index: e.renderNodePosRange[0] + a,
                          treeNode: t,
                          tabSize: e.tabSize,
                          translateY:
                            (e.renderNodePosRange[0] + a) * e.treeNodeHeight,
                          isNodeFocus: e.focusNode && t.id === e.focusNode.id,
                          isDragOver:
                            t.id === e.dragOverNodeId &&
                            t.id !== e.dragNodeInfo.id,
                          onNodeContentDragStart: e.onNodeContentDragStart,
                          onNodeContentDragEnd: e.onNodeContentDragEnd
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
                n('div', {
                  directives: [
                    {
                      name: 'show',
                      rawName: 'v-show',
                      value: e.showDropIndicator,
                      expression: 'showDropIndicator'
                    }
                  ],
                  ref: 'vit-drop-indicator',
                  staticClass: 'vit__drop-indicator'
                })
              ],
              2
            )
          ]
        )
      },
      i = [],
      o = (n('cb29'), n('fb6a'), n('a434'), n('b0c0'), n('2909')),
      r =
        (n('f294'),
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t
          return n(
            'div',
            { staticClass: 'vit-node-wrapper', style: e.nodeStyle },
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
                    class: {
                      checked: e.treeNode.state.selected,
                      'checkbox-disabled': e.treeNode.state.disableCheckbox
                    },
                    on: {
                      click: function (t) {
                        return t.stopPropagation(), e.onCheckNode(t)
                      }
                    }
                  })
                : e._e(),
              n(
                'span',
                {
                  ref: 'vit-node-content',
                  staticClass: 'vit-node-content',
                  class: {
                    'vit-node-focus': e.isNodeFocus,
                    'is-drag-over': e.isDragOver
                  },
                  attrs: { draggable: '' },
                  on: {
                    click: e.onNodeClick,
                    dragstart: function (t) {
                      return e.onNodeContentDragStart(e.treeNode.id, e.index)
                    },
                    dragend: function (t) {
                      return e.onNodeContentDragEnd()
                    }
                  }
                },
                [
                  n(
                    'span',
                    {
                      attrs: { draggable: 'false' },
                      on: { blur: e.onNodeBlur }
                    },
                    [e._v(e._s(e.treeNode.name))]
                  )
                ]
              )
            ]
          )
        }),
      d = [],
      l =
        (n('13d5'),
        n('a9e3'),
        {
          name: 'TreeNode',
          props: {
            index: { type: Number, default: -1 },
            treeNode: { type: Object, default: function () {} },
            tabSize: { type: Number, default: 8 },
            translateY: { type: Number, default: 0 },
            isNodeFocus: { type: Boolean, default: !1 },
            checkable: { type: Boolean, default: !1 },
            isDragOver: { type: Boolean, default: !1 },
            onNodeContentDragStart: { type: Function, default: function () {} },
            onNodeContentDragEnd: { type: Function, default: function () {} }
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
            onCheckNode: function () {
              !this.treeNode.state.disableCheckbox &&
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
      s = l,
      c = n('2877'),
      u = Object(c['a'])(s, r, d, !1, null, null, null),
      h = u.exports,
      f = (n('99af'), n('4160'), n('caad'), n('2532'), n('159b'), n('5530')),
      p = function (e) {
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
      g = function (e, t) {
        var n = [],
          a = [],
          i = function (t) {
            while (t.length > 0) {
              'children' === t[t.length - 1] && t.pop()
              var n = v(e, t)
              if (n.state.opened) break
              ;(n.state.opened = !0), t.pop()
            }
          },
          r = function e(t, i, r) {
            t.forEach(function (t, d) {
              var l = { disabled: !1 }
              t.children.length > 0
                ? (r.defaultExpandAll
                    ? (l.opened = !0)
                    : r.defaultExpandedKeys.includes(t.id)
                    ? ((l.opened = !0), n.push(i.slice(0, i.length - 1)))
                    : (l.opened = !1),
                  e(
                    t.children,
                    [].concat(Object(o['a'])(i), [d, 'children']),
                    r
                  ))
                : (l.opened = !1),
                r.defaultCheckedKeys.includes(t.id)
                  ? ((l.selected = !0),
                    a.push([].concat(Object(o['a'])(i), [d])))
                  : (l.selected = !1),
                t.state
                  ? (t.state = Object(f['a'])(Object(f['a'])({}, t.state), l))
                  : (t.state = l)
            })
          }
        r(e, [], t)
        for (var d = 0, l = n; d < l.length; d++) {
          var s = l[d]
          i(s)
        }
        for (var c = 0, u = a; c < u.length; c++) {
          var h = u[c]
          N(v(e, h), 'selected', !0), b(e, h, !0)
        }
      },
      m = function (e) {
        var t = [],
          n = function e(n, a) {
            n.forEach(function (n, i) {
              var r = n.id,
                d = n.name,
                l = n.state,
                s = {
                  id: r,
                  name: d,
                  state: l,
                  path: [].concat(Object(o['a'])(a), [i])
                }
              n.children.length > 0 && l.opened
                ? (t.push(s),
                  e(n.children, [].concat(Object(o['a'])(a), [i, 'children'])))
                : n.children.length > 0 && !l.opened
                ? t.push(s)
                : t.push(
                    Object(f['a'])(Object(f['a'])({}, s), {}, { isLeaf: !0 })
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
      y = function (e, t, n, a, i) {
        for (
          var o,
            r = a.slice(0, t[0]).reduce(function (e, t) {
              return e + t
            }, 0),
            d = t[0],
            l = r;
          d <= t[1];
          d++
        )
          if (((l += a[d]), l > e.y)) {
            o = d
            break
          }
        var s =
          Math.abs(
            a.slice(0, o).reduce(function (e, t) {
              return e + t
            }, 0) - e.y
          ) / a[o]
        if (s < 0.25) {
          var c =
              a.slice(0, o).reduce(function (e, t) {
                return e + t
              }, 0) - 1,
            u = ((n[o].path.length + 1) / 2) * i
          return {
            type: 2,
            data: { top: c, left: u, targetIndex: o, opt: 'above' }
          }
        }
        if (s > 0.75) {
          var h,
            p,
            v =
              a.slice(0, o + 1).reduce(function (e, t) {
                return e + t
              }, 0) - 1
          return (
            n[o + 1] && n[o].path.length < n[o + 1].path.length
              ? ((h = ((n[o + 1].path.length + 1) / 2) * i),
                (p = { targetIndex: o + 1, opt: 'above' }))
              : ((h = ((n[o].path.length + 1) / 2) * i),
                (p = { targetIndex: o, opt: 'below' })),
            { type: 2, data: Object(f['a'])({ top: v, left: h }, p) }
          )
        }
        return { type: 1, data: o }
      },
      k = {
        getValueFromPath: p(v),
        initNodeInnerState: p(g),
        treeJson2List: p(m),
        setChildrenStatus: p(N),
        checkAncestorStatus: p(b),
        computeDragType: y
      },
      C = n('df9c'),
      D = {
        name: 'InfiniteTree',
        props: {
          value: {
            type: Array,
            default: function () {
              return []
            }
          },
          checkable: { type: Boolean, default: !1 },
          defaultExpandAll: { type: Boolean, default: !1 },
          defaultExpandedKeys: {
            type: Array,
            default: function () {
              return []
            }
          },
          defaultCheckedKeys: {
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
            treeNodeHeight: 28,
            dragResult: null,
            dragNodeInfo: null
          }
        },
        computed: {
          totalNodeNum: function () {
            return this.totalNodeList.length
          },
          dragOverNodeId: function () {
            return this.dragResult && 1 === this.dragResult.type
              ? this.totalNodeList[this.dragResult.data].id
              : null
          },
          showDropIndicator: function () {
            return !(!this.dragResult || 2 !== this.dragResult.type)
          }
        },
        watch: {
          value: {
            immediate: !0,
            handler: function (e) {
              var t
              ;(
                null === e ||
                void 0 === e ||
                null === (t = e[1]) ||
                void 0 === t
                  ? void 0
                  : t.state
              )
                ? (this._treeData = e)
                : (k.initNodeInnerState(e, {
                    defaultExpandAll: this.defaultExpandAll,
                    defaultExpandedKeys: this.defaultExpandedKeys,
                    defaultCheckedKeys: this.defaultCheckedKeys
                  }),
                  (this._treeData = e),
                  this.makeNewTreeData()),
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
              Object(C['b'])({ name: 'new node', needAddState: !0 })
            ),
              this.makeNewTreeData()
          },
          handleAddChildrenNode: function (e) {
            var t = k.getValueFromPath(this._treeData, e)
            t.children.unshift(
              Object(C['b'])({ name: 'new node', needAddState: !0 })
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
          handleOpenNode: function (e, t) {
            var n = k.getValueFromPath(this._treeData, e)
            ;(n.state.opened = t ? t.opened : !n.state.opened),
              this.makeNewTreeData()
          },
          onNodeContentDragStart: function (e, t) {
            ;(this.dragNodeInfo = { id: e, index: t }),
              this.handleOpenNode(this.totalNodeList[t].path, { opened: !1 })
          },
          onNodeContentDragEnd: function () {
            this.dragNodeInfo = null
          },
          onDragOver: function (e) {
            e.preventDefault()
            var t = k.computeDragType(
              { x: e.layerX, y: e.layerY },
              this.renderNodePosRange,
              this.totalNodeList,
              new Array(this.totalNodeList.length).fill(this.treeNodeHeight),
              this.tabSize
            )
            2 === t.type &&
              ((this.$refs['vit-drop-indicator'].style.top = t.data.top + 'px'),
              (this.$refs['vit-drop-indicator'].style.left =
                t.data.left + 'px')),
              (this.dragResult = t)
          },
          onDragLeave: function (e) {
            this.dragResult = null
          },
          onDragDrop: function (e) {
            if (
              1 === this.dragResult.type &&
              this.dragOverNodeId !== this.dragNodeInfo.id
            ) {
              var t = this.totalNodeList[this.dragResult.data].path,
                n = k.getValueFromPath(this._treeData, t),
                a = this.totalNodeList[this.dragNodeInfo.index].path,
                i = k.getValueFromPath(this._treeData, a),
                o = k.getValueFromPath(this._treeData, a.slice(0, -1)),
                r = a[a.length - 1]
              o.splice(r, 1),
                n.children || (n.children = []),
                n.children.push(i),
                (n.state.opened = !0),
                this.makeNewTreeData()
            } else if (
              2 === this.dragResult.type &&
              this.totalNodeList[this.dragResult.data.targetIndex].id !==
                this.dragNodeInfo.id
            ) {
              var d = this.totalNodeList[this.dragResult.data.targetIndex].path,
                l = k.getValueFromPath(this._treeData, d.slice(0, -1)),
                s = this.totalNodeList[this.dragNodeInfo.index].path,
                c = k.getValueFromPath(this._treeData, s),
                u = k.getValueFromPath(this._treeData, s.slice(0, -1)),
                h = d[d.length - 1]
              'above' === this.dragResult.data.opt
                ? l.splice(h, 0, c)
                : l.splice(h + 1, 0, c)
              var f = s[s.length - 1]
              u === l && f > h ? u.splice(f + 1, 1) : u.splice(f, 1),
                this.makeNewTreeData()
            }
            this.dragResult = null
          }
        }
      },
      _ = D,
      w = Object(c['a'])(_, a, i, !1, null, null, null)
    t['a'] = w.exports
  },
  '7d04': function (e, t, n) {},
  8191: function (e, t, n) {
    'use strict'
    var a = n('e1b9'),
      i = n.n(a)
    i.a
  },
  b5ab: function (e, t, n) {},
  bce3: function (e, t, n) {},
  df9c: function (e, t, n) {
    'use strict'
    n.d(t, 'b', function () {
      return o
    }),
      n.d(t, 'a', function () {
        return r
      })
    n('b0c0')
    var a = n('11c1'),
      i = n.n(a),
      o = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = { id: i()(), name: e.name || 256 * Math.random(), children: [] }
        return (
          e.needAddState &&
            (t.state = { opened: !0, disabled: !1, selected: !1 }),
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
              d = i.children
            r = r > e ? e : r
            for (var l = r - 1; l > 0; l--) {
              var s = o()
              d.push(s), (d = s.children)
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
