webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(58)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(41),
  /* template */
  __webpack_require__(84),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(56)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(40),
  /* template */
  __webpack_require__(82),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(54)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(39),
  /* template */
  __webpack_require__(79),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_main__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_main___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__views_main__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_allQuestions__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_allQuestions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__views_allQuestions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_submit__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_submit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__views_submit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_qas__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_qas___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__views_qas__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_qaDetail__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_qaDetail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__views_qaDetail__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_direction__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_direction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__views_direction__);










__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */])

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
    // mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [{
            path: '/',
            name: 'main',
            component: __WEBPACK_IMPORTED_MODULE_2__views_main___default.a
        },
        {
            path: '/all',
            name: 'allQuestions',
            component: __WEBPACK_IMPORTED_MODULE_3__views_allQuestions___default.a
        },
        {
            path: '/submit',
            name: 'submit',
            component: __WEBPACK_IMPORTED_MODULE_4__views_submit___default.a
        },
        {
            path: '/qas/:uuid',
            name: 'qas',
            component: __WEBPACK_IMPORTED_MODULE_5__views_qas___default.a,
        },
        {
            path: '/qaDetail/:uuid',
            name: 'qaDetail',
            component: __WEBPACK_IMPORTED_MODULE_6__views_qaDetail___default.a
        },
        {
            path: '/direction',
            name: 'direction',
            component: __WEBPACK_IMPORTED_MODULE_7__views_direction___default.a
        },
    ]
}));

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_qs__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_qs__);



const apiUrl = '';
// axios.defaults.headers.post['Content-Type'] = 'application/json';

class apiService {
    constructor(Vue) {
        //  this.Vue = new Vue();
    }

    getHot() {
        return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(apiUrl + '/api/hot');
    }
    getSearch(val) {
        if (!val) return;
        val && (val = val.trim());
        return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(apiUrl + '/api/search?wd=' + (val));
    }
    getCategories() {
        return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(apiUrl + '/api/categories');
    }
    getDirections() {
        return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(apiUrl + '/api/directions');
    }

    getCategory(uuid) {
        return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(apiUrl + '/api/category/' + uuid)
    }
    getQas(uuid) {
        return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(apiUrl + '/api/' + uuid + '/qas')
    }
    getQa(uuid) {
        return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(apiUrl + '/api/qa/' + uuid);
    }
    getRelate(uuid) {
        return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(apiUrl + '/api/relate?uuid=' + uuid);
    }
    submit(opinion, date, name, mobile, images, errortime) {
        return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(apiUrl + '/api/submit', {
            opinion: opinion,
            date: date,
            name: name,
            mobile: mobile,
            images: images,
            errortime: errortime
        });
    }
}



function plugin_api(Vue) {

    let api = new apiService(Vue);
    Vue.plugin_api = api;

    Object.defineProperties(Vue.prototype, {
        $plugin_api: {
            get: function() {
                return api;
            }
        }
    });
}


/* harmony default export */ __webpack_exports__["a"] = (plugin_api);

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'app'
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        msg1: {
            default: '全部问题'
        },
        icon1: {
            default: "fa fa-bars"
        },
        link1: {
            default: "/all"
        },
        msg2: {
            default: '意见反馈'
        },
        icon2: {
            default: "fa fa-envelope-o"
        },
        link2: {
            default: "/submit"
        }
    }
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        title: {
            type: String,
            default: ''
        }
    }
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mintUi = __webpack_require__(3);

exports.default = {
    data: function data() {
        return {
            pickerValue: '',
            isPreview: false,
            previewImg: ''
        };
    },

    props: {
        images: {
            type: Array,
            default: function _default() {
                return [];
            }
        }
    },
    watch: {
        images: function images() {
            this.$emit('image-info', this.images);
        }
    },
    methods: {
        addPic: function addPic(e) {
            e.preventDefault();

            document.getElementById('chooseFile').click();
            return false;
        },
        onFileChange: function onFileChange(e) {

            var files = e.target.files || e.dataTransfer.files;
            for (var i = 0; i < files.length; i++) {
                if (!/\/(?:jpeg|png|gif)/i.test(files[i].type)) {
                    (0, _mintUi.Toast)("请上传图片格式的文件");
                    return;
                }
            }
            if (!files.length) return;
            if (files.length > 5) {
                (0, _mintUi.Toast)("一次不能上传超过6个文件");
                return;
            }
            this.createImage(files);
        },
        createImage: function createImage(file) {
            var vm = this;
            for (var i = 0; i < file.length; i++) {
                lrz(file[i], { width: 480 }).then(function (rst) {
                    vm.images.push(rst.base64);
                    return rst;
                }).always(function () {
                    e.target.value = null;
                });
            }
        },

        delImage: function delImage(index) {
            this.images.splice(index, 1);
        },
        removeImage: function removeImage(e) {
            this.images = [];
        },
        previewImage: function previewImage(image) {
            this.isPreview = true;
            this.previewImg = image;
        },
        closePreview: function closePreview() {
            this.isPreview = false;
            this.previewImg = "";
        }
    }
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _cell = __webpack_require__(2);

var _cell2 = _interopRequireDefault(_cell);

var _empty = __webpack_require__(66);

var _empty2 = _interopRequireDefault(_empty);

var _bottomNav = __webpack_require__(14);

var _bottomNav2 = _interopRequireDefault(_bottomNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        cell: _cell2.default,
        empty: _empty2.default,
        bottomNav: _bottomNav2.default
    },
    mounted: function mounted() {
        var _this = this;

        this.$plugin_api.getCategories().then(function (res) {
            _this.allQuestions = res.data;
        });
        ws.device.sendDataToHelpFeedback({ data: '{"title":"全部问题"}' });
    },
    data: function data() {
        return {
            allQuestions: [],
            a: 11
        };
    }
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _cell = __webpack_require__(2);

var _cell2 = _interopRequireDefault(_cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        cell: _cell2.default
    },
    data: function data() {
        return {
            directions: []
        };
    },
    mounted: function mounted() {
        this.getDirections();
        ws.device.sendDataToHelpFeedback({ data: '{"title":"使用说明"}' });
    },

    methods: {
        getDirections: function getDirections() {
            var _this = this;

            this.$plugin_api.getDirections().then(function (res) {
                _this.directions = res.data;
            });
        }
    }
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cell = __webpack_require__(2);

var _cell2 = _interopRequireDefault(_cell);

var _bottomNav = __webpack_require__(14);

var _bottomNav2 = _interopRequireDefault(_bottomNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    cell: _cell2.default,
    bottomNav: _bottomNav2.default
  },
  name: 'hello',
  data: function data() {
    return {
      hots: [],
      value: ''
    };
  },

  watch: {
    value: function value() {
      var _this = this;

      if (!this.value) {
        this.hot();
        return;
      }
      this.$plugin_api.getSearch(this.value).then(function (res) {
        _this.hots = res.data;
      });
    }
  },
  created: function created() {
    this.hot();
  },

  methods: {
    hot: function hot() {
      var _this2 = this;

      this.$plugin_api.getHot().then(function (res) {
        _this2.hots = res.data;
      });
    }
  },
  computed: {
    questionClass: function questionClass() {
      if (!this.value) {
        return 'hot';
      } else {
        return 'search';
      }
    }
  },
  mounted: function mounted() {
    ws.device.sendDataToHelpFeedback({ data: '{"title":"帮助与反馈"}' });
  }
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _cell = __webpack_require__(2);

var _cell2 = _interopRequireDefault(_cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        cell: _cell2.default
    },
    mounted: function mounted() {
        this.fetchData();
    },

    methods: {
        fetchData: function fetchData() {
            var _this = this;

            var uuid = this.$route.params.uuid;
            this.$plugin_api.getQa(uuid).then(function (res) {
                _this.qaDetail = res.data;
                ws.device.sendDataToHelpFeedback({ data: { "title": _this.qaDetail.title } });
                _this.$plugin_api.getRelate(_this.qaDetail.relatedQaID).then(function (res) {
                    _this.relateQA = res.data;
                });
            });
        }
    },
    watch: {
        "$route": 'fetchData'
    },
    data: function data() {
        return {
            qaDetail: {},
            relateQA: {}
        };
    }
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _cell = __webpack_require__(2);

var _cell2 = _interopRequireDefault(_cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        cell: _cell2.default
    },
    mounted: function mounted() {
        var uuid = this.$route.params.uuid;
        this.getName(uuid);
        this.getQas(uuid);
    },

    methods: {
        getName: function getName(uuid) {
            var _this = this;

            this.$plugin_api.getCategory(uuid).then(function (res) {
                _this.qaName = res.data.title;
                ws.device.sendDataToHelpFeedback({ data: { "title": _this.qaName } });
            });
        },
        getQas: function getQas(uuid) {
            var _this2 = this;

            this.$plugin_api.getQas(uuid).then(function (res) {
                _this2.qas = res.data;
            });
        }
    },
    data: function data() {
        return {
            qas: [],
            qaName: ''
        };
    }
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _upload = __webpack_require__(67);

var _upload2 = _interopRequireDefault(_upload);

var _mintUi = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        upload: _upload2.default,
        DatetimePicker: _mintUi.DatetimePicker
    },
    data: function data() {
        return {
            now: new Date(),
            pickerValue: new Date(),
            errorTime: '',
            images: []
        };
    },
    mounted: function mounted() {
        ws.device.sendDataToHelpFeedback({ data: '{"title":"意见反馈"}' });
    },

    methods: {
        submitOpinion: function submitOpinion() {
            var _this = this;

            var opinion = document.getElementById("opinion").value;
            if (!opinion) {
                (0, _mintUi.Toast)("当前输入值为空");
                return;
            }
            document.getElementById("submit").disabled = true;
            var myDate = new Date();
            var date = this.getTime(myDate);
            var images = this.images;
            var errortime = this.errorTime;
            var user = ws.biz.getUser();
            var user2 = eval("(" + user + ")");
            this.$plugin_api.submit(opinion, date, user2.name, user2.phone, images, errortime).then(function (res) {
                (0, _mintUi.Toast)('感谢您的宝贵建议！');
                document.getElementById("opinion").value = '';
                document.getElementById("submit").disabled = false;
                _this.errorTime = '';
                var f = document.getElementsByClassName("image");
                for (var i = f.length - 1; i >= 0; i--) {
                    f[i].remove();
                }
                _this.images = [];
            }).catch(function (err) {
                (0, _mintUi.Toast)("上传失败，请重试");
            });
        },
        getTime: function getTime(e) {
            var month = e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1;
            var day = e.getDate() < 10 ? "0" + e.getDate() : e.getDate();
            var h = e.getHours() < 10 ? "0" + e.getHours() : e.getHours();
            var min = e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes();
            var s = e.getSeconds() < 10 ? "0" + e.getSeconds() : e.getSeconds();
            return e.getFullYear() + '-' + month + '-' + day + ' ' + h + ":" + min + ":" + s;
        },
        openPicker: function openPicker() {
            this.$refs.picker.open();
        },
        handleConfirm: function handleConfirm() {
            this.errorTime = this.getTime(this.pickerValue);
        },
        get: function get(msg) {
            this.images = msg;
        }
    }
};

/***/ }),
/* 49 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 50 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 51 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 52 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 53 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 54 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 55 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 56 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 57 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 58 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  null,
  /* template */
  __webpack_require__(81),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(52)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(42),
  /* template */
  __webpack_require__(77),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(49)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(43),
  /* template */
  __webpack_require__(74),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(50)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(44),
  /* template */
  __webpack_require__(75),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(57)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(45),
  /* template */
  __webpack_require__(83),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(55)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(46),
  /* template */
  __webpack_require__(80),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(51)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(47),
  /* template */
  __webpack_require__(76),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-1c310c03",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(53)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(48),
  /* template */
  __webpack_require__(78),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-35f0ab28",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "allQuestions"
  }, [_c('div', {
    staticClass: "allQuestions-wrapper"
  }, [_c('span', {
    staticClass: "title"
  }, [_vm._v("问题类型")]), _vm._v(" "), _vm._l((_vm.allQuestions), function(item, index) {
    return _c('router-link', {
      key: index,
      attrs: {
        "to": '/qas/' + item.uuid
      }
    }, [_c('cell', {
      attrs: {
        "title": item.title
      }
    }), _vm._v(" "), ((index + 1) % 3 == 0 && index !== 0) ? _c('empty') : _vm._e()], 1)
  }), _vm._v(" "), _c('bottomNav', {
    attrs: {
      "msg1": "使用说明",
      "icon1": "fa fa-cog",
      "link1": "/direction"
    }
  })], 2)])
},staticRenderFns: []}

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "direction"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("全部问题")]), _vm._v(" "), _vm._l((_vm.directions), function(item, index) {
    return _c('router-link', {
      key: index,
      attrs: {
        "to": '/qas/' + item.uuid
      }
    }, [_c('cell', {
      attrs: {
        "title": item.title
      }
    })], 1)
  })], 2)
},staticRenderFns: []}

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "qas"
  }, [_c('div', {
    staticClass: "qas-wrapper"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("常见问题")]), _vm._v(" "), _vm._l((_vm.qas), function(item, index) {
    return _c('router-link', {
      key: index,
      attrs: {
        "to": '/qaDetail/' + item.uuid
      }
    }, [_c('cell', {
      attrs: {
        "title": item.title
      }
    })], 1)
  })], 2)])
},staticRenderFns: []}

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "upload"
    }
  }, [_c('div', {
    staticClass: "add"
  }, [_c('input', {
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "type": "file",
      "id": "chooseFile",
      "multiple": ""
    },
    on: {
      "change": _vm.onFileChange
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "images-wrapper",
    attrs: {
      "id": "remove"
    }
  }, [_vm._l((_vm.images), function(image, index) {
    return _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.images.length),
        expression: "images.length"
      }],
      key: index,
      staticClass: "image",
      on: {
        "click": function($event) {
          _vm.previewImage(image)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": image
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "delete",
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.delImage(index)
        }
      }
    }, [_c('i', {
      staticClass: "fa fa-times",
      attrs: {
        "aria-hidden": "true"
      }
    })])])
  }), _vm._v(" "), _c('div', {
    staticClass: "cross",
    on: {
      "click": _vm.addPic
    }
  }, [_c('i', {
    staticClass: "fa fa-plus fa-3x",
    attrs: {
      "aria-hidden": "true"
    }
  })])], 2), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isPreview),
      expression: "isPreview"
    }],
    staticClass: "add-preview",
    on: {
      "click": _vm.closePreview
    }
  }, [_c('span', {
    staticClass: "verticalAlign"
  }), _vm._v(" "), _c('div', {
    staticClass: "img"
  }, [_c('img', {
    attrs: {
      "src": _vm.previewImg
    }
  })])])])
},staticRenderFns: []}

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "submit"
  }, [_vm._m(0), _vm._v(" "), _c('upload', {
    attrs: {
      "images": this.images
    },
    on: {
      "image-info": _vm.get
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "errorDetail",
    on: {
      "click": _vm.openPicker
    }
  }, [_vm._v("故障时间：" + _vm._s(_vm.errorTime))]), _vm._v(" "), _c('mt-datetime-picker', {
    ref: "picker",
    attrs: {
      "type": "datetime",
      "month-format": "{value} 月",
      "date-format": "{value} 日",
      "hour-format": "{value}时",
      "minuteFormat": "{value}分",
      "endDate": this.now
    },
    on: {
      "confirm": _vm.handleConfirm
    },
    model: {
      value: (_vm.pickerValue),
      callback: function($$v) {
        _vm.pickerValue = $$v
      },
      expression: "pickerValue"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "button"
  }, [_c('button', {
    staticClass: "button-icon",
    attrs: {
      "id": "submit"
    },
    on: {
      "click": _vm.submitOpinion
    }
  }, [_vm._v("提交")])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "input"
  }, [_c('textarea', {
    staticClass: "text",
    attrs: {
      "placeholder": "请输入您的问题或建议...",
      "id": "opinion",
      "rows": "10",
      "cols": "10"
    }
  })])
}]}

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('router-view')], 1)
},staticRenderFns: []}

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "qa"
  }, [_c('div', {
    staticClass: "qa-wrapper"
  }, [_c('p', {
    staticClass: "qatitle"
  }, [_vm._v(_vm._s(_vm.qaDetail.title))]), _vm._v(" "), _c('div', {
    staticClass: "qaContent",
    domProps: {
      "innerHTML": _vm._s(_vm.qaDetail.content)
    }
  }, [_vm._v(_vm._s(_vm.qaDetail.content))])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.relateQA),
      expression: "relateQA"
    }],
    staticClass: "support-wrapper"
  }, [_c('p', {
    staticClass: "support-title"
  }, [_vm._v("相关问题")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": '/qaDetail/' + _vm.relateQA.uuid,
      "replace": ""
    }
  }, [_c('cell', {
    attrs: {
      "title": _vm.relateQA.title
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "support-wrapper"
  }, [_c('p', {
    staticClass: "support-title"
  }, [_vm._v("你可能还需要")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/submit"
    }
  }, [_c('cell', {
    attrs: {
      "title": "意见反馈"
    }
  })], 1)], 1)])
},staticRenderFns: []}

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "empty",
    staticStyle: {
      "height": "12px"
    }
  })
},staticRenderFns: []}

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bottomNav"
  }, [_c('div', {
    staticClass: "bottomBar"
  }, [_c('router-link', {
    attrs: {
      "to": _vm.link1
    }
  }, [_c('i', {
    staticClass: "logo",
    class: _vm.icon1,
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', [_vm._v(_vm._s(_vm.msg1))])])], 1), _vm._v(" "), _c('div', {
    staticClass: "bottomBar"
  }, [_c('router-link', {
    attrs: {
      "to": _vm.link2
    }
  }, [_c('i', {
    staticClass: "logo",
    class: _vm.icon2,
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', [_vm._v(_vm._s(_vm.msg2))])])], 1)])
},staticRenderFns: []}

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hot-questions"
  }, [_c('div', {
    staticClass: "top-wrapper"
  }, [_c('mt-search', {
    staticStyle: {
      "height": "100%"
    },
    model: {
      value: (_vm.value),
      callback: function($$v) {
        _vm.value = $$v
      },
      expression: "value"
    }
  }, [_c('div', {
    staticClass: "mint-search-list"
  })]), _vm._v(" "), _c('p', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.value),
      expression: "!value"
    }],
    staticClass: "title"
  }, [_vm._v("热门问题")])], 1), _vm._v(" "), _c('div', {
    staticClass: "question-wrapper",
    class: _vm.questionClass
  }, _vm._l((_vm.hots), function(item, index) {
    return _c('router-link', {
      key: index,
      staticClass: "questions-content",
      attrs: {
        "to": '/qaDetail/' + item.uuid
      }
    }, [_c('cell', {
      attrs: {
        "title": item.title
      }
    })], 1)
  })), _vm._v(" "), _c('bottomNav')], 1)
},staticRenderFns: []}

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cell"
  }, [_c('div', {
    staticClass: "celler"
  }, [_c('span', [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('i', {
    staticClass: "fa fa-angle-right rt",
    attrs: {
      "aria-hidden": "true"
    }
  })])])
},staticRenderFns: []}

/***/ }),
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mint_ui__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mint_ui_lib_style_css__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mint_ui_lib_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_mint_ui_lib_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_font_awesome_css_font_awesome_min_css__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_font_awesome_css_font_awesome_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_font_awesome_css_font_awesome_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_index__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lrz__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lrz___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lrz__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.








// import $ from 'jquery'


__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_4_mint_ui___default.a);
// window.jQuery = jQuery
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].prototype.$http = __WEBPACK_IMPORTED_MODULE_3_axios___default.a //其他页面在使用axios的时候 ---this.$http调用
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_7__service_index__["a" /* default */]);
/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
    el: '#app',
    router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
    template: '<App/>',
    components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
})

/***/ })
],[88]);