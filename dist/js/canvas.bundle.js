/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ead46f55f5c16354e6dd50c5b3d5fcdb.png");

/***/ }),

/***/ "./src/img/girl.png":
/*!**************************!*\
  !*** ./src/img/girl.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b7e8aa4fbfad6ed83655b1b757bae586.png");

/***/ }),

/***/ "./src/img/hills.png":
/*!***************************!*\
  !*** ./src/img/hills.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c2e8e3fe8ddb95a836c48fbc516a2ddb.png");

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "85ff5ba335b56b2f3d12849c14bd51d8.png");

/***/ }),

/***/ "./src/img/platformSmallTall.png":
/*!***************************************!*\
  !*** ./src/img/platformSmallTall.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ee3d308a35cc2a995b154e30e614884d.png");

/***/ }),

/***/ "./src/img/roniRunLeft.png":
/*!*********************************!*\
  !*** ./src/img/roniRunLeft.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "35f03349956d33a50d67129ebfcfc867.png");

/***/ }),

/***/ "./src/img/roniRunRight.png":
/*!**********************************!*\
  !*** ./src/img/roniRunRight.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "095d7e5c2b52b5e02a7d2ffcec256004.png");

/***/ }),

/***/ "./src/img/roniStandLeft.png":
/*!***********************************!*\
  !*** ./src/img/roniStandLeft.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c52950aea4f7e9acff81e232b14b2e0d.png");

/***/ }),

/***/ "./src/img/roniStandRight.png":
/*!************************************!*\
  !*** ./src/img/roniStandRight.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d0db8becbcba2863b791eb6e01ec4b02.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_hills_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/hills.png */ "./src/img/hills.png");
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/background.png */ "./src/img/background.png");
/* harmony import */ var _img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/platformSmallTall.png */ "./src/img/platformSmallTall.png");
/* harmony import */ var _img_girl_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/girl.png */ "./src/img/girl.png");
/* harmony import */ var _img_roniRunLeft_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/roniRunLeft.png */ "./src/img/roniRunLeft.png");
/* harmony import */ var _img_roniRunRight_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/roniRunRight.png */ "./src/img/roniRunRight.png");
/* harmony import */ var _img_roniStandLeft_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/roniStandLeft.png */ "./src/img/roniStandLeft.png");
/* harmony import */ var _img_roniStandRight_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/roniStandRight.png */ "./src/img/roniStandRight.png");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }










console.log(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;
var gravity = 0.5;

var Player = /*#__PURE__*/function () {
  function Player() {
    var _stand, _run;

    _classCallCheck(this, Player);

    this.speed = 5;
    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 80;
    this.height = 150;
    this.image = createImage(_img_roniStandRight_png__WEBPACK_IMPORTED_MODULE_8__["default"]);
    this.sprites = {
      stand: (_stand = {
        right: createImage(_img_roniStandRight_png__WEBPACK_IMPORTED_MODULE_8__["default"]),
        left: createImage(_img_roniStandLeft_png__WEBPACK_IMPORTED_MODULE_7__["default"]),
        cropwidth: 0,
        width: 177
      }, _defineProperty(_stand, "left", createImage(_img_roniStandLeft_png__WEBPACK_IMPORTED_MODULE_7__["default"])), _defineProperty(_stand, "cropwidth", 177), _stand),
      run: (_run = {
        right: createImage(_img_roniRunRight_png__WEBPACK_IMPORTED_MODULE_6__["default"]),
        left: createImage(_img_roniRunLeft_png__WEBPACK_IMPORTED_MODULE_5__["default"]),
        cropwidth: 0
      }, _defineProperty(_run, "left", createImage(_img_roniRunLeft_png__WEBPACK_IMPORTED_MODULE_5__["default"])), _defineProperty(_run, "cropwidth", 177), _run)
    };
    this.currentSprite = this.sprites.stand.right;
    this.currentCropwidth = this.sprites.stand.cropwidth;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.currentSprite, 50, 0, this.currentCropwidth, 400, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      if (this.position.y + this.height + this.velocity.y <= canvas.height) {
        this.velocity.y += gravity;
      }
    }
  }]);

  return Player;
}();

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}();

var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericObject;
}();

function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}

var platformImage = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var platformSmallTallImage = createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
var player = new Player();
var platforms = [];
var genericObjects = [];
var jumpSound = new Audio('../audio/jump.mp3');
var thankYouSound = new Audio('../audio/thankyou.mp3');
var thankYouSoundCount = 0;
var score = 0;
var scores = 0;
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
var scrollOffset = 0;

function init() {
  score++;
  platformImage = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  player = new Player();
  platforms = [new Platform({
    x: platformImage.width * 4 + 650 - 2 + platformImage.width - platformSmallTallImage.width,
    y: 450,
    image: createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: platformImage.width * 4 + 1100 - 2 + platformImage.width - platformSmallTallImage.width,
    y: 270,
    image: createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: platformImage.width * 4 + 4550 - 2 + platformImage.width - platformSmallTallImage.width,
    y: 90,
    image: createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: platformImage.width * 4 + 5500 - 2 + platformImage.width - platformSmallTallImage.width,
    y: 280,
    image: createImage(_img_girl_png__WEBPACK_IMPORTED_MODULE_4__["default"])
  }), new Platform({
    x: -1,
    y: 350,
    image: platformImage
  }), new Platform({
    x: platformImage.width - 3,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 2 + 100,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 3 + 300,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 4 + 400 - 2,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 5 + 700 - 2,
    y: 350,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 6 + 700 - 3,
    y: 150,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 8 + 300,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 9 + 400 - 2,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 10 + 700 - 2,
    y: 350,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 11 + 700 - 3,
    y: 150,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 11 + 1700 - 3,
    y: 450,
    image: platformImage
  })];
  genericObjects = [new GenericObject({
    x: -1,
    y: -1,
    image: createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  }), new GenericObject({
    x: -1,
    y: -1,
    image: createImage(_img_hills_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  })];
  scrollOffset = 0;
}

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);
  genericObjects.forEach(function (genericObject) {
    genericObject.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  player.update(); // Draw the score after all the images

  c.font = '20px Arial';
  c.fillStyle = 'white';
  c.textAlign = 'center';
  c.fillText('Death: ' + score, canvas.width / 2, 30);
  c.font = '20px Arial';
  c.fillStyle = 'white';
  c.textAlign = 'left';
  c.fillText('Score: ' + scores, 30, 30);

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed;
  } else if (keys.left.pressed && player.position.x > 100 || keys.left.pressed && scrollOffset === 0 && player.position.x > 0) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      scrollOffset += player.speed;
      platforms.forEach(function (platform) {
        platform.position.x -= player.speed;
      });
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x -= player.speed * 0.66;
      });
    } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= player.speed;
      platforms.forEach(function (platform) {
        platform.position.x += player.speed * 0.66;
      });
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x += 3;
      });
    }
  } // platform collision detectie


  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  }); // win condition

  if (scrollOffset > platformImage.width * 4 + 5000 - 2) {
    scores++;
    scrollOffset = 0;
    console.log('you win');

    if (thankYouSoundCount < 2) {
      thankYouSound.play();
      thankYouSoundCount++;
    }

    setTimeout(function () {
      init();
    }, 3000);
  } // lose condition


  if (player.position.y > canvas.height) {
    init();
  }
}

init();
animate();
addEventListener('keydown', function (_ref3) {
  var keyCode = _ref3.keyCode;

  switch (keyCode) {
    case 65:
      console.log('left');
      keys.left.pressed = true;
      player.currentSprite = player.sprites.run.left;
      player.currentCropwidth = player.sprites.run.cropwidth;
      break;

    case 83:
      console.log('down');
      break;

    case 68:
      console.log('right');
      keys.right.pressed = true;
      player.currentSprite = player.sprites.run.right;
      player.currentCropwidth = player.sprites.run.cropwidth;
      break;

    case 87:
      console.log('up');
      jumpSound.play();
      player.velocity.y -= 17;
      break;
  }
});
addEventListener('keyup', function (_ref4) {
  var keyCode = _ref4.keyCode;

  // console.log(keyCode);
  switch (keyCode) {
    case 65:
      console.log('left');
      keys.left.pressed = false;
      break;

    case 83:
      console.log('down');
      break;

    case 68:
      console.log('right');
      keys.right.pressed = false;
      player.currentSprite = player.sprites.stand.right;
      player.currentCropwidth = player.sprites.run.cropwidth;
      break;

    case 87:
      console.log('up');
      break;

    case 32:
      // Spacebar
      console.log('attack'); // Add your attack code here

      break;
  }
});
window.addEventListener("load", function () {
  var bgMusic = new Audio('../audio/music.mp3');
  bgMusic.loop = true;
  bgMusic.volume = 0.2; // Adjust this value as needed

  bgMusic.play();
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map