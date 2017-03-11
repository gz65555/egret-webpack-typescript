/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
    };
    LoadingUI.prototype.setProgress = function (current, total) {
        this.textField.text = "Loading..." + current + "/" + total;
    };
    return LoadingUI;
}(egret.Sprite));
exports.default = LoadingUI;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var LoadingUI_1 = __webpack_require__(0);
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.prototype.onAddToStage = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                //设置加载进度界面
                this.loadRes();
                return [2 /*return*/];
            });
        });
    };
    Main.prototype.loadRes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, RES.loadConfig()];
                    case 1:
                        _a.sent();
                        this.loadingView = new LoadingUI_1.default();
                        this.stage.addChild(this.loadingView);
                        loading = {
                            onProgress: function (current, total) {
                                _this.loadingView.setProgress(current, total);
                            }
                        };
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loading)];
                    case 2:
                        _a.sent();
                        this.stage.removeChild(this.loadingView);
                        this.createGameScene();
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.createGameScene = function () {
        var sky = this.createBitmapByName("bg_jpg");
        this.addChild(sky);
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        sky.width = stageW;
        sky.height = stageH;
        var topMask = new egret.Shape();
        topMask.graphics.beginFill(0x000000, 0.5);
        topMask.graphics.drawRect(0, 0, stageW, 172);
        topMask.graphics.endFill();
        topMask.y = 33;
        this.addChild(topMask);
        var icon = this.createBitmapByName("egret_icon_png");
        this.addChild(icon);
        icon.x = 26;
        icon.y = 33;
        var line = new egret.Shape();
        line.graphics.lineStyle(2, 0xffffff);
        line.graphics.moveTo(0, 0);
        line.graphics.lineTo(0, 117);
        line.graphics.endFill();
        line.x = 172;
        line.y = 61;
        this.addChild(line);
        var colorLabel = new egret.TextField();
        colorLabel.textColor = 0xffffff;
        colorLabel.width = stageW - 172;
        colorLabel.textAlign = "center";
        colorLabel.text = "Hello Egret";
        colorLabel.size = 24;
        colorLabel.x = 172;
        colorLabel.y = 80;
        this.addChild(colorLabel);
        var textfield = new egret.TextField();
        this.addChild(textfield);
        textfield.alpha = 0;
        textfield.width = stageW - 172;
        textfield.textAlign = egret.HorizontalAlign.CENTER;
        textfield.size = 24;
        textfield.textColor = 0xffffff;
        textfield.x = 172;
        textfield.y = 135;
        this.textfield = textfield;
        //根据name关键字，异步获取一个json配置文件，name属性请参考resources/resource.json配置文件的内容。
        // Get asynchronously a json configuration file according to name keyword. As for the property of name please refer to the configuration file of resources/resource.json.
        RES.getResAsync("description_json", this.startAnimation, this);
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    Main.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    Main.prototype.startAnimation = function (result) {
        var _this = this;
        var parser = new egret.HtmlTextParser();
        var textflowArr = result.map(function (text) { return parser.parse(text); });
        var textfield = this.textfield;
        var count = -1;
        var change = function () {
            count++;
            if (count >= textflowArr.length) {
                count = 0;
            }
            var textFlow = textflowArr[count];
            // 切换描述内容
            // Switch to described content
            textfield.textFlow = textFlow;
            var tw = egret.Tween.get(textfield);
            tw.to({ "alpha": 1 }, 200);
            tw.wait(2000);
            tw.to({ "alpha": 0 }, 200);
            tw.call(change, _this);
        };
        change();
    };
    return Main;
}(egret.DisplayObjectContainer));
Main = __decorate([
    RES.mapConfig("config.json", function () { return "resource"; }, function (path) {
        var ext = path.substr(path.lastIndexOf(".") + 1);
        var typeMap = {
            "jpg": "image",
            "png": "image",
            "webp": "image",
            "json": "json",
            "fnt": "font",
            "pvr": "pvr",
            "mp3": "sound"
        };
        var type = typeMap[ext];
        if (type == "json") {
            if (path.indexOf("sheet") >= 0) {
                type = "sheet";
            }
            else if (path.indexOf("movieclip") >= 0) {
                type = "movieclip";
            }
        }
        return type;
    })
], Main);
exports.default = Main;
egret.registerClass(Main, "Main");
window["Main"] = Main;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2JkYjIzNWRjNzY4ZDU2MDk0YjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvYWRpbmdVSS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7SUFBdUMsNkJBQVk7SUFFL0M7UUFBQSxZQUNJLGlCQUFPLFNBRVY7UUFERyxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7O0lBQ3RCLENBQUM7SUFJTyw4QkFBVSxHQUFsQjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsUUFBUSxD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UUFDRixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEIsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDakIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixJQUFJLEdBQUcsT0FBTyxDQUFDO1lBQ25CLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxJQUFJLEdBQUcsV0FBVyxDQUFDO1lBQ3ZCLENBQUM7UUFDTCxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDLENBQUM7R0FDbUIsSUFBSSxDQThIeEI7a0JBOUhvQixJQUFJO0FBZ0l6QixLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNsQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDdiZGIyMzVkYzc2OGQ1NjA5NGIwIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGluZ1VJIGV4dGVuZHMgZWdyZXQuU3ByaXRlIHtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVWaWV3KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0ZXh0RmllbGQ6ZWdyZXQuVGV4dEZpZWxkO1xuXG4gICAgcHJpdmF0ZSBjcmVhdGVWaWV3KCk6dm9pZCB7XG4gICAgICAgIHRoaXMudGV4dEZpZWxkID0gbmV3IGVncmV0LlRleHRGaWVsZCgpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMudGV4dEZpZWxkKTtcbiAgICAgICAgdGhpcy50ZXh0RmllbGQueSA9IDMwMDtcbiAgICAgICAgdGhpcy50ZXh0RmllbGQud2lkdGggPSA0ODA7XG4gICAgICAgIHRoaXMudGV4dEZpZWxkLmhlaWdodCA9IDEwMDtcbiAgICAgICAgdGhpcy50ZXh0RmllbGQudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0UHJvZ3Jlc3MoY3VycmVudDpudW1iZXIsIHRvdGFsOm51bWJlcik6dm9pZCB7XG4gICAgICAgIHRoaXMudGV4dEZpZWxkLnRleHQgPSBgTG9hZGluZy4uLiR7Y3VycmVudH0vJHt0b3RhbH1gO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc291cmNlLW1hcC1sb2FkZXIhLi9zcmMvTG9hZGluZ1VJLnRzIiwiaW1wb3J0IExvYWRpbmdVSSBmcm9tIFwiLi9Mb2FkaW5nVUlcIjtcbkBSRVMubWFwQ29uZmlnKFwiY29uZmlnLmpzb25cIiwoKT0+XCJyZXNvdXJjZVwiLHBhdGggPT4ge1xuICAgIGxldCBleHQgPSBwYXRoLnN1YnN0cihwYXRoLmxhc3RJbmRleE9mKFwiLlwiKSArIDEpO1xuICAgIGxldCB0eXBlTWFwID0ge1xuICAgICAgICBcImpwZ1wiOiBcImltYWdlXCIsXG4gICAgICAgIFwicG5nXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgXCJ3ZWJwXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgXCJqc29uXCI6IFwianNvblwiLFxuICAgICAgICBcImZudFwiOiBcImZvbnRcIixcbiAgICAgICAgXCJwdnJcIjogXCJwdnJcIixcbiAgICAgICAgXCJtcDNcIjogXCJzb3VuZFwiXG4gICAgfTtcbiAgICBsZXQgdHlwZSA9IHR5cGVNYXBbZXh0XTtcbiAgICBpZiAodHlwZSA9PSBcImpzb25cIikge1xuICAgICAgICBpZiAocGF0aC5pbmRleE9mKFwic2hlZXRcIikgPj0gMCkge1xuICAgICAgICAgICAgdHlwZSA9IFwic2hlZXRcIjtcbiAgICAgICAgfSBlbHNlIGlmIChwYXRoLmluZGV4T2YoXCJtb3ZpZWNsaXBcIikgPj0gMCkge1xuICAgICAgICAgICAgdHlwZSA9IFwibW92aWVjbGlwXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHR5cGU7XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIGVncmV0LkRpc3BsYXlPYmplY3RDb250YWluZXIge1xuXG4gICAgcHJpdmF0ZSBsb2FkaW5nVmlldzogTG9hZGluZ1VJO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZWdyZXQuRXZlbnQuQURERURfVE9fU1RBR0UsIHRoaXMub25BZGRUb1N0YWdlLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIG9uQWRkVG9TdGFnZShldmVudDogZWdyZXQuRXZlbnQpIHtcbiAgICAgICAgLy/orr7nva7liqDovb3ov5vluqbnlYzpnaJcbiAgICAgICAgdGhpcy5sb2FkUmVzKClcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkUmVzKCkge1xuICAgICAgICBhd2FpdCBSRVMubG9hZENvbmZpZygpO1xuICAgICAgICB0aGlzLmxvYWRpbmdWaWV3ID0gbmV3IExvYWRpbmdVSSgpO1xuICAgICAgICB0aGlzLnN0YWdlLmFkZENoaWxkKHRoaXMubG9hZGluZ1ZpZXcpO1xuICAgICAgICBsZXQgbG9hZGluZzpSRVMuUHJvbWlzZVRhc2tSZXBvcnRlciA9IHtcbiAgICAgICAgICAgIG9uUHJvZ3Jlc3M6IChjdXJyZW50OiBudW1iZXIsIHRvdGFsOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdWaWV3LnNldFByb2dyZXNzKGN1cnJlbnQsIHRvdGFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgYXdhaXQgUkVTLmxvYWRHcm91cChcInByZWxvYWRcIiwgMCAsbG9hZGluZyk7XG4gICAgICAgIHRoaXMuc3RhZ2UucmVtb3ZlQ2hpbGQodGhpcy5sb2FkaW5nVmlldyk7XG4gICAgICAgIHRoaXMuY3JlYXRlR2FtZVNjZW5lKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0ZXh0ZmllbGQ6IGVncmV0LlRleHRGaWVsZDtcblxuICAgIHByaXZhdGUgY3JlYXRlR2FtZVNjZW5lKCkge1xuICAgICAgICBsZXQgc2t5ID0gdGhpcy5jcmVhdGVCaXRtYXBCeU5hbWUoXCJiZ19qcGdcIik7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoc2t5KTtcbiAgICAgICAgbGV0IHN0YWdlVyA9IHRoaXMuc3RhZ2Uuc3RhZ2VXaWR0aDtcbiAgICAgICAgbGV0IHN0YWdlSCA9IHRoaXMuc3RhZ2Uuc3RhZ2VIZWlnaHQ7XG4gICAgICAgIHNreS53aWR0aCA9IHN0YWdlVztcbiAgICAgICAgc2t5LmhlaWdodCA9IHN0YWdlSDtcblxuICAgICAgICBsZXQgdG9wTWFzayA9IG5ldyBlZ3JldC5TaGFwZSgpO1xuICAgICAgICB0b3BNYXNrLmdyYXBoaWNzLmJlZ2luRmlsbCgweDAwMDAwMCwgMC41KTtcbiAgICAgICAgdG9wTWFzay5ncmFwaGljcy5kcmF3UmVjdCgwLCAwLCBzdGFnZVcsIDE3Mik7XG4gICAgICAgIHRvcE1hc2suZ3JhcGhpY3MuZW5kRmlsbCgpO1xuICAgICAgICB0b3BNYXNrLnkgPSAzMztcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0b3BNYXNrKTtcblxuICAgICAgICBsZXQgaWNvbiA9IHRoaXMuY3JlYXRlQml0bWFwQnlOYW1lKFwiZWdyZXRfaWNvbl9wbmdcIik7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoaWNvbik7XG4gICAgICAgIGljb24ueCA9IDI2O1xuICAgICAgICBpY29uLnkgPSAzMztcblxuICAgICAgICBsZXQgbGluZSA9IG5ldyBlZ3JldC5TaGFwZSgpO1xuICAgICAgICBsaW5lLmdyYXBoaWNzLmxpbmVTdHlsZSgyLCAweGZmZmZmZik7XG4gICAgICAgIGxpbmUuZ3JhcGhpY3MubW92ZVRvKDAsIDApO1xuICAgICAgICBsaW5lLmdyYXBoaWNzLmxpbmVUbygwLCAxMTcpO1xuICAgICAgICBsaW5lLmdyYXBoaWNzLmVuZEZpbGwoKTtcbiAgICAgICAgbGluZS54ID0gMTcyO1xuICAgICAgICBsaW5lLnkgPSA2MTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZChsaW5lKTtcblxuXG4gICAgICAgIGxldCBjb2xvckxhYmVsID0gbmV3IGVncmV0LlRleHRGaWVsZCgpO1xuICAgICAgICBjb2xvckxhYmVsLnRleHRDb2xvciA9IDB4ZmZmZmZmO1xuICAgICAgICBjb2xvckxhYmVsLndpZHRoID0gc3RhZ2VXIC0gMTcyO1xuICAgICAgICBjb2xvckxhYmVsLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIGNvbG9yTGFiZWwudGV4dCA9IFwiSGVsbG8gRWdyZXRcIjtcbiAgICAgICAgY29sb3JMYWJlbC5zaXplID0gMjQ7XG4gICAgICAgIGNvbG9yTGFiZWwueCA9IDE3MjtcbiAgICAgICAgY29sb3JMYWJlbC55ID0gODA7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoY29sb3JMYWJlbCk7XG5cbiAgICAgICAgbGV0IHRleHRmaWVsZCA9IG5ldyBlZ3JldC5UZXh0RmllbGQoKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0ZXh0ZmllbGQpO1xuICAgICAgICB0ZXh0ZmllbGQuYWxwaGEgPSAwO1xuICAgICAgICB0ZXh0ZmllbGQud2lkdGggPSBzdGFnZVcgLSAxNzI7XG4gICAgICAgIHRleHRmaWVsZC50ZXh0QWxpZ24gPSBlZ3JldC5Ib3Jpem9udGFsQWxpZ24uQ0VOVEVSO1xuICAgICAgICB0ZXh0ZmllbGQuc2l6ZSA9IDI0O1xuICAgICAgICB0ZXh0ZmllbGQudGV4dENvbG9yID0gMHhmZmZmZmY7XG4gICAgICAgIHRleHRmaWVsZC54ID0gMTcyO1xuICAgICAgICB0ZXh0ZmllbGQueSA9IDEzNTtcbiAgICAgICAgdGhpcy50ZXh0ZmllbGQgPSB0ZXh0ZmllbGQ7XG5cbiAgICAgICAgLy/moLnmja5uYW1l5YWz6ZSu5a2X77yM5byC5q2l6I635Y+W5LiA5LiqanNvbumFjee9ruaWh+S7tu+8jG5hbWXlsZ7mgKfor7flj4LogINyZXNvdXJjZXMvcmVzb3VyY2UuanNvbumFjee9ruaWh+S7tueahOWGheWuueOAglxuICAgICAgICAvLyBHZXQgYXN5bmNocm9ub3VzbHkgYSBqc29uIGNvbmZpZ3VyYXRpb24gZmlsZSBhY2NvcmRpbmcgdG8gbmFtZSBrZXl3b3JkLiBBcyBmb3IgdGhlIHByb3BlcnR5IG9mIG5hbWUgcGxlYXNlIHJlZmVyIHRvIHRoZSBjb25maWd1cmF0aW9uIGZpbGUgb2YgcmVzb3VyY2VzL3Jlc291cmNlLmpzb24uXG4gICAgICAgIFJFUy5nZXRSZXNBc3luYyhcImRlc2NyaXB0aW9uX2pzb25cIiwgdGhpcy5zdGFydEFuaW1hdGlvbiwgdGhpcylcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmoLnmja5uYW1l5YWz6ZSu5a2X5Yib5bu65LiA5LiqQml0bWFw5a+56LGh44CCbmFtZeWxnuaAp+ivt+WPguiAg3Jlc291cmNlcy9yZXNvdXJjZS5qc29u6YWN572u5paH5Lu255qE5YaF5a6544CCXG4gICAgICogQ3JlYXRlIGEgQml0bWFwIG9iamVjdCBhY2NvcmRpbmcgdG8gbmFtZSBrZXl3b3JkLkFzIGZvciB0aGUgcHJvcGVydHkgb2YgbmFtZSBwbGVhc2UgcmVmZXIgdG8gdGhlIGNvbmZpZ3VyYXRpb24gZmlsZSBvZiByZXNvdXJjZXMvcmVzb3VyY2UuanNvbi5cbiAgICAgKi9cbiAgICBwcml2YXRlIGNyZWF0ZUJpdG1hcEJ5TmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IG5ldyBlZ3JldC5CaXRtYXAoKTtcbiAgICAgICAgbGV0IHRleHR1cmU6IGVncmV0LlRleHR1cmUgPSBSRVMuZ2V0UmVzKG5hbWUpO1xuICAgICAgICByZXN1bHQudGV4dHVyZSA9IHRleHR1cmU7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5o+P6L+w5paH5Lu25Yqg6L295oiQ5Yqf77yM5byA5aeL5pKt5pS+5Yqo55S7XG4gICAgICogRGVzY3JpcHRpb24gZmlsZSBsb2FkaW5nIGlzIHN1Y2Nlc3NmdWwsIHN0YXJ0IHRvIHBsYXkgdGhlIGFuaW1hdGlvblxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhcnRBbmltYXRpb24ocmVzdWx0OiBzdHJpbmdbXSkge1xuICAgICAgICBsZXQgcGFyc2VyID0gbmV3IGVncmV0Lkh0bWxUZXh0UGFyc2VyKCk7XG5cbiAgICAgICAgbGV0IHRleHRmbG93QXJyID0gcmVzdWx0Lm1hcCh0ZXh0ID0+IHBhcnNlci5wYXJzZSh0ZXh0KSk7XG4gICAgICAgIGxldCB0ZXh0ZmllbGQgPSB0aGlzLnRleHRmaWVsZDtcbiAgICAgICAgbGV0IGNvdW50ID0gLTE7XG4gICAgICAgIGxldCBjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgaWYgKGNvdW50ID49IHRleHRmbG93QXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB0ZXh0RmxvdyA9IHRleHRmbG93QXJyW2NvdW50XTtcblxuICAgICAgICAgICAgLy8g5YiH5o2i5o+P6L+w5YaF5a65XG4gICAgICAgICAgICAvLyBTd2l0Y2ggdG8gZGVzY3JpYmVkIGNvbnRlbnRcbiAgICAgICAgICAgIHRleHRmaWVsZC50ZXh0RmxvdyA9IHRleHRGbG93O1xuICAgICAgICAgICAgbGV0IHR3ID0gZWdyZXQuVHdlZW4uZ2V0KHRleHRmaWVsZCk7XG4gICAgICAgICAgICB0dy50byh7IFwiYWxwaGFcIjogMSB9LCAyMDApO1xuICAgICAgICAgICAgdHcud2FpdCgyMDAwKTtcbiAgICAgICAgICAgIHR3LnRvKHsgXCJhbHBoYVwiOiAwIH0sIDIwMCk7XG4gICAgICAgICAgICB0dy5jYWxsKGNoYW5nZSwgdGhpcyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY2hhbmdlKCk7XG4gICAgfVxufVxuXG5lZ3JldC5yZWdpc3RlckNsYXNzKE1haW4sIFwiTWFpblwiKTtcbndpbmRvd1tcIk1haW5cIl0gPSBNYWluO1xuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc291cmNlLW1hcC1sb2FkZXIhLi9zcmMvTWFpbi50cyJdLCJzb3VyY2VSb290IjoiIn0=