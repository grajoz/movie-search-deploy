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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _poster_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./poster.js */ "./src/js/poster.js");
/* harmony import */ var _resultsearch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resultsearch.js */ "./src/js/resultsearch.js");
/* harmony import */ var _ratingsearch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ratingsearch.js */ "./src/js/ratingsearch.js");



const dataSearchArr = 'dog';
addPoster(dataSearchArr);
const MOVIES = document.getElementById('movies');
const INPUT = document.getElementById('input');
const SUBMIT = document.getElementById('submit');
const ERROR = document.getElementById('error');
const CLEAN = document.getElementById('clean');
const SPINNER = document.getElementById('spinner');
const PREV = document.getElementById('prev');
const NEXT = document.getElementById('next');
const POSTER = document.getElementsByClassName('poster');
let resultSearchArray = [];
let slideIndex = 1;

function cleanInput() {
  INPUT.value = '';
  INPUT.focus();
  INPUT.select();
}

INPUT.focus();
INPUT.select();
INPUT.placeholder = 'add a movie name ';
INPUT.autocomplete = 'off';
INPUT.type = 'search';
MOVIES.addEventListener('click', event => {
  let src = event.target;
  src = src.parentElement;
  src = src.parentElement;

  if (src.hasAttribute('src')) {
    src = src.getAttribute('src');
    document.location.href = src;
  }
});
CLEAN.addEventListener('click', () => {
  cleanInput();
  cleanErrorMessage();
});
SUBMIT.addEventListener('click', () => {
  addPosterDataSearch();
  startSpinner();
  cleanErrorMessage();
});
SPINNER.addEventListener('click', () => {
  stopSpinner();
});
document.addEventListener('keydown', event => {
  if (event.code == 'Enter') {
    addPosterDataSearch();
    startSpinner();
    cleanErrorMessage();
  }
});

function addPosterDataSearch() {
  cleanErrorMessage();
  let dataSearch;
  MOVIES.innerHTML = '';
  dataSearch = INPUT.value;
  ERROR.textContent = dataSearch;
  addPoster(dataSearch);
}

async function addPoster(dataSearch) {
  let resultSearch;
  const newResultSearch = new _resultsearch_js__WEBPACK_IMPORTED_MODULE_1__["default"](dataSearch);
  resultSearch = await newResultSearch.getResultSearch(dataSearch);

  if (resultSearch[0].imdbID === '') {
    showErrorMessage(resultSearch[0].title);
  }

  resultSearch.forEach((element, nodePosterNumber) => {
    stopSpinner();
    const newPoster = new _poster_js__WEBPACK_IMPORTED_MODULE_0__["default"](resultSearch[nodePosterNumber]);
    MOVIES.appendChild(newPoster.createPoster(resultSearch[nodePosterNumber]));
    resultSearchArray[nodePosterNumber] = resultSearch[nodePosterNumber].imdbID;
    addRating(resultSearchArray[nodePosterNumber], nodePosterNumber);
    showSlides(slideIndex);
  });
}

async function addRating(resultSearchArray, nodePosterNumber) {
  const newRartingtSearch = new _ratingsearch_js__WEBPACK_IMPORTED_MODULE_2__["default"](resultSearchArray, nodePosterNumber);
  const resultRartingtSearch = newRartingtSearch.getRatingtSearch(resultSearchArray, nodePosterNumber);
}

function showErrorMessage() {
  stopSpinner();
  ERROR.classList.remove('none');
  ERROR.textContent = `No results  "${INPUT.value}"`;
}

function cleanErrorMessage() {
  ERROR.classList.add('none');
}

PREV.addEventListener('click', () => {
  showSlides(slideIndex -= 1);
  cleanErrorMessage();
});
NEXT.addEventListener('click', () => {
  showSlides(slideIndex += 1);
  cleanErrorMessage();
});

function showSlides(n) {
  let slides = document.getElementsByClassName('poster');

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }

  slides[slideIndex - 1].classList.add('active');

  if (slides[slideIndex]) {
    slides[slideIndex].classList.add('active');
  }

  if (slides[slideIndex + 1]) {
    slides[slideIndex + 1].classList.add('active');
  }

  if (slides[slideIndex + 2]) {
    slides[slideIndex + 2].classList.add('active');
  }
}

function stopSpinner() {
  SPINNER.classList.add('none');
  CLEAN.classList.remove('none');
}

function startSpinner() {
  CLEAN.classList.add('none');
  SPINNER.classList.remove('none');
}

/***/ }),

/***/ "./src/js/poster.js":
/*!**************************!*\
  !*** ./src/js/poster.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Poster; });
class Poster {
  constructor(resultSearch) {
    this.resultSearch = resultSearch;
  }

  createPoster() {
    const {
      title
    } = this.resultSearch;
    const {
      img
    } = this.resultSearch;
    const {
      year
    } = this.resultSearch;
    const {
      imdbID
    } = this.resultSearch;
    let poster = document.createElement('div');
    const h2Teg = document.createElement('h2');
    const divTeg = document.createElement('div');
    const imgTeg = document.createElement('img');
    const pTegYear = document.createElement('p');
    poster.classList.add('poster');
    poster.setAttribute('src', `https://www.imdb.com/title/${imdbID}`);
    h2Teg.textContent = title;
    imgTeg.classList.add('poster__img');
    imgTeg.setAttribute('alt', title);
    imgTeg.setAttribute('src', img);
    pTegYear.textContent = year;
    divTeg.append(imgTeg);
    poster.append(h2Teg);
    poster.append(divTeg);
    poster.append(pTegYear);
    return poster;
  }

}

/***/ }),

/***/ "./src/js/ratingsearch.js":
/*!********************************!*\
  !*** ./src/js/ratingsearch.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RartingtSearch; });
class RartingtSearch {
  constructor(dataSearch, nodePosterNumber) {
    this.dataSearch = dataSearch;
    this.nodePosterNumber = nodePosterNumber;
  }

  async getRatingtSearch() {
    const {
      dataSearch
    } = this;
    const {
      nodePosterNumber
    } = this;
    const MOVIES = document.getElementById('movies');
    let resultSearch;
    let data;
    const url = `https://www.omdbapi.com/?i=${dataSearch}&apikey=aab7b845`;
    const res = await fetch(url);
    data = await res.json();
    resultSearch = data.imdbRating;

    if (Number(resultSearch) > 0) {
      let nodePoster = MOVIES.getElementsByClassName('poster');
      nodePoster = Array.prototype.slice.call(nodePoster);
      let poster = nodePoster[nodePosterNumber];
      let divTeg = document.createElement('div');
      divTeg.classList.add('rating');
      let imgTeg = document.createElement('img');
      imgTeg.classList.add('star');
      imgTeg.setAttribute('alt', 'srtar');
      imgTeg.setAttribute('src', './img/star.svg');
      poster.append(divTeg);
      divTeg.append(imgTeg);
      divTeg.append(resultSearch);
    }

    return resultSearch;
  }

}

/***/ }),

/***/ "./src/js/resultsearch.js":
/*!********************************!*\
  !*** ./src/js/resultsearch.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResultSearch; });
class ResultSearch {
  constructor(dataSearch) {
    this.dataSearch = dataSearch;
  }

  async getResultSearch() {
    const {
      dataSearch
    } = this;
    let data;

    try {
      let res = await fetch(`https://www.omdbapi.com/?s=${dataSearch}&apikey=aab7b845`);
      data = await res.json();
    } catch (err) {
      document.getElementById('error').textContent = err;
      document.getElementById('error').classList.remove('none');
    }

    let title;
    let img;
    let year;
    let imdbID;
    let isResponse = false;
    let resultSearch = [];
    isResponse = data.Response.toLowerCase();

    if (isResponse === 'false') {
      isResponse = false;
    }

    if (isResponse) {
      data.Search.forEach((element, i) => {
        title = data.Search[i].Title;
        img = data.Search[i].Poster;
        year = data.Search[i].Year;
        imdbID = data.Search[i].imdbID;
        resultSearch[i] = {
          title,
          img,
          year,
          imdbID
        };
      });
    } else {
      resultSearch[0] = {
        title: data.Error,
        img: './img/noresult.png',
        year: '',
        imdbID: ''
      };
    }

    return resultSearch;
  }

}

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*****************************************************!*\
  !*** multi ./src/js/index.js ./src/scss/style.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");
module.exports = __webpack_require__(/*! ./src/scss/style.scss */"./src/scss/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map