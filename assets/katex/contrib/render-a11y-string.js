(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("katex"));
	else if(typeof define === 'function' && define.amd)
		define(["katex"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("katex")) : factory(root["katex"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__757__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 757:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__757__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/* harmony import */ var katex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(757);
/* harmony import */ var katex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(katex__WEBPACK_IMPORTED_MODULE_0__);
/**
 * renderA11yString returns a readable string.
 *
 * In some cases the string will have the proper semantic math
 * meaning,:
 *   renderA11yString("\\frac{1}{2}"")
 *   -> "start fraction, 1, divided by, 2, end fraction"
 *
 * However, other cases do not:
 *   renderA11yString("f(x) = x^2")
 *   -> "f, left parenthesis, x, right parenthesis, equals, x, squared"
 *
 * The commas in the string aim to increase ease of understanding
 * when read by a screenreader.
 */
// NOTE: since we're importing types here these files won't actually be
// included in the build.
// $FlowIgnore: we import the types directly anyways

const stringMap = {
  "(": "left parenthesis",
  ")": "right parenthesis",
  "[": "open bracket",
  "]": "close bracket",
  "\\{": "left brace",
  "\\}": "right brace",
  "\\lvert": "open vertical bar",
  "\\rvert": "close vertical bar",
  "|": "vertical bar",
  "\\uparrow": "up arrow",
  "\\Uparrow": "up arrow",
  "\\downarrow": "down arrow",
  "\\Downarrow": "down arrow",
  "\\updownarrow": "up down arrow",
  "\\leftarrow": "left arrow",
  "\\Leftarrow": "left arrow",
  "\\rightarrow": "right arrow",
  "\\Rightarrow": "right arrow",
  "\\langle": "open angle",
  "\\rangle": "close angle",
  "\\lfloor": "open floor",
  "\\rfloor": "close floor",
  "\\int": "integral",
  "\\intop": "integral",
  "\\lim": "limit",
  "\\ln": "natural log",
  "\\log": "log",
  "\\sin": "sine",
  "\\cos": "cosine",
  "\\tan": "tangent",
  "\\cot": "cotangent",
  "\\sum": "sum",
  "/": "slash",
  ",": "comma",
  ".": "point",
  "-": "negative",
  "+": "plus",
  "~": "tilde",
  ":": "colon",
  "?": "question mark",
  "'": "apostrophe",
  "\\%": "percent",
  " ": "space",
  "\\ ": "space",
  "\\$": "dollar sign",
  "\\angle": "angle",
  "\\degree": "degree",
  "\\circ": "circle",
  "\\vec": "vector",
  "\\triangle": "triangle",
  "\\pi": "pi",
  "\\prime": "prime",
  "\\infty": "infinity",
  "\\alpha": "alpha",
  "\\beta": "beta",
  "\\gamma": "gamma",
  "\\omega": "omega",
  "\\theta": "theta",
  "\\sigma": "sigma",
  "\\lambda": "lambda",
  "\\tau": "tau",
  "\\Delta": "delta",
  "\\delta": "delta",
  "\\mu": "mu",
  "\\rho": "rho",
  "\\nabla": "del",
  "\\ell": "ell",
  "\\ldots": "dots",
  // TODO: add entries for all accents
  "\\hat": "hat",
  "\\acute": "acute"
};
const powerMap = {
  "prime": "prime",
  "degree": "degrees",
  "circle": "degrees",
  "2": "squared",
  "3": "cubed"
};
const openMap = {
  "|": "open vertical bar",
  ".": ""
};
const closeMap = {
  "|": "close vertical bar",
  ".": ""
};
const binMap = {
  "+": "plus",
  "-": "minus",
  "\\pm": "plus minus",
  "\\cdot": "dot",
  "*": "times",
  "/": "divided by",
  "\\times": "times",
  "\\div": "divided by",
  "\\circ": "circle",
  "\\bullet": "bullet"
};
const relMap = {
  "=": "equals",
  "\\approx": "approximately equals",
  "≠": "does not equal",
  "\\geq": "is greater than or equal to",
  "\\ge": "is greater than or equal to",
  "\\leq": "is less than or equal to",
  "\\le": "is less than or equal to",
  ">": "is greater than",
  "<": "is less than",
  "\\leftarrow": "left arrow",
  "\\Leftarrow": "left arrow",
  "\\rightarrow": "right arrow",
  "\\Rightarrow": "right arrow",
  ":": "colon"
};
const accentUnderMap = {
  "\\underleftarrow": "left arrow",
  "\\underrightarrow": "right arrow",
  "\\underleftrightarrow": "left-right arrow",
  "\\undergroup": "group",
  "\\underlinesegment": "line segment",
  "\\utilde": "tilde"
};

const buildString = (str, type, a11yStrings) => {
  if (!str) {
    return;
  }

  let ret;

  if (type === "open") {
    ret = str in openMap ? openMap[str] : stringMap[str] || str;
  } else if (type === "close") {
    ret = str in closeMap ? closeMap[str] : stringMap[str] || str;
  } else if (type === "bin") {
    ret = binMap[str] || str;
  } else if (type === "rel") {
    ret = relMap[str] || str;
  } else {
    ret = stringMap[str] || str;
  } // If the text to add is a number and there is already a string
  // in the list and the last string is a number then we should
  // combine them into a single number


  if (/^\d+$/.test(ret) && a11yStrings.length > 0 && // TODO(kevinb): check that the last item in a11yStrings is a string
  // I think we might be able to drop the nested arrays, which would make
  // this easier to type
  // $FlowFixMe
  /^\d+$/.test(a11yStrings[a11yStrings.length - 1])) {
    a11yStrings[a11yStrings.length - 1] += ret;
  } else if (ret) {
    a11yStrings.push(ret);
  }
};

const buildRegion = (a11yStrings, callback) => {
  const regionStrings = [];
  a11yStrings.push(regionStrings);
  callback(regionStrings);
};

const handleObject = (tree, a11yStrings, atomType) => {
  // Everything else is assumed to be an object...
  switch (tree.type) {
    case "accent":
      {
        buildRegion(a11yStrings, a11yStrings => {
          buildA11yStrings(tree.base, a11yStrings, atomType);
          a11yStrings.push("with");
          buildString(tree.label, "normal", a11yStrings);
          a11yStrings.push("on top");
        });
        break;
      }

    case "accentUnder":
      {
        buildRegion(a11yStrings, a11yStrings => {
          buildA11yStrings(tree.base, a11yStrings, atomType);
          a11yStrings.push("with");
          buildString(accentUnderMap[tree.label], "normal", a11yStrings);
          a11yStrings.push("underneath");
        });
        break;
      }

    case "accent-token":
      {
        // Used internally by accent symbols.
        break;
      }

    case "atom":
      {
        const {
          text
        } = tree;

        switch (tree.family) {
          case "bin":
            {
              buildString(text, "bin", a11yStrings);
              break;
            }

          case "close":
            {
              buildString(text, "close", a11yStrings);
              break;
            }
          // TODO(kevinb): figure out what should be done for inner

          case "inner":
            {
              buildString(tree.text, "inner", a11yStrings);
              break;
            }

          case "open":
            {
              buildString(text, "open", a11yStrings);
              break;
            }

          case "punct":
            {
              buildString(text, "punct", a11yStrings);
              break;
            }

          case "rel":
            {
              buildString(text, "rel", a11yStrings);
              break;
            }

          default:
            {
              tree.family;
              throw new Error("\"" + tree.family + "\" is not a valid atom type");
            }
        }

        break;
      }

    case "color":
      {
        const color = tree.color.replace(/katex-/, "");
        buildRegion(a11yStrings, regionStrings => {
          regionStrings.push("start color " + color);
          buildA11yStrings(tree.body, regionStrings, atomType);
          regionStrings.push("end color " + color);
        });
        break;
      }

    case "color-token":
      {
        // Used by \color, \colorbox, and \fcolorbox but not directly rendered.
        // It's a leaf node and has no children so just break.
        break;
      }

    case "delimsizing":
      {
        if (tree.delim && tree.delim !== ".") {
          buildString(tree.delim, "normal", a11yStrings);
        }

        break;
      }

    case "genfrac":
      {
        buildRegion(a11yStrings, regionStrings => {
          // genfrac can have unbalanced delimiters
          const {
            leftDelim,
            rightDelim
          } = tree; // NOTE: Not sure if this is a safe assumption
          // hasBarLine true -> fraction, false -> binomial

          if (tree.hasBarLine) {
            regionStrings.push("start fraction");
            leftDelim && buildString(leftDelim, "open", regionStrings);
            buildA11yStrings(tree.numer, regionStrings, atomType);
            regionStrings.push("divided by");
            buildA11yStrings(tree.denom, regionStrings, atomType);
            rightDelim && buildString(rightDelim, "close", regionStrings);
            regionStrings.push("end fraction");
          } else {
            regionStrings.push("start binomial");
            leftDelim && buildString(leftDelim, "open", regionStrings);
            buildA11yStrings(tree.numer, regionStrings, atomType);
            regionStrings.push("over");
            buildA11yStrings(tree.denom, regionStrings, atomType);
            rightDelim && buildString(rightDelim, "close", regionStrings);
            regionStrings.push("end binomial");
          }
        });
        break;
      }

    case "hbox":
      {
        buildA11yStrings(tree.body, a11yStrings, atomType);
        break;
      }

    case "kern":
      {
        // No op: we don't attempt to present kerning information
        // to the screen reader.
        break;
      }

    case "leftright":
      {
        buildRegion(a11yStrings, regionStrings => {
          buildString(tree.left, "open", regionStrings);
          buildA11yStrings(tree.body, regionStrings, atomType);
          buildString(tree.right, "close", regionStrings);
        });
        break;
      }

    case "leftright-right":
      {
        // TODO: double check that this is a no-op
        break;
      }

    case "lap":
      {
        buildA11yStrings(tree.body, a11yStrings, atomType);
        break;
      }

    case "mathord":
      {
        buildString(tree.text, "normal", a11yStrings);
        break;
      }

    case "op":
      {
        const {
          body,
          name
        } = tree;

        if (body) {
          buildA11yStrings(body, a11yStrings, atomType);
        } else if (name) {
          buildString(name, "normal", a11yStrings);
        }

        break;
      }

    case "op-token":
      {
        // Used internally by operator symbols.
        buildString(tree.text, atomType, a11yStrings);
        break;
      }

    case "ordgroup":
      {
        buildA11yStrings(tree.body, a11yStrings, atomType);
        break;
      }

    case "overline":
      {
        buildRegion(a11yStrings, function (a11yStrings) {
          a11yStrings.push("start overline");
          buildA11yStrings(tree.body, a11yStrings, atomType);
          a11yStrings.push("end overline");
        });
        break;
      }

    case "pmb":
      {
        a11yStrings.push("bold");
        break;
      }

    case "phantom":
      {
        a11yStrings.push("empty space");
        break;
      }

    case "raisebox":
      {
        buildA11yStrings(tree.body, a11yStrings, atomType);
        break;
      }

    case "rule":
      {
        a11yStrings.push("rectangle");
        break;
      }

    case "sizing":
      {
        buildA11yStrings(tree.body, a11yStrings, atomType);
        break;
      }

    case "spacing":
      {
        a11yStrings.push("space");
        break;
      }

    case "styling":
      {
        // We ignore the styling and just pass through the contents
        buildA11yStrings(tree.body, a11yStrings, atomType);
        break;
      }

    case "sqrt":
      {
        buildRegion(a11yStrings, regionStrings => {
          const {
            body,
            index
          } = tree;

          if (index) {
            const indexString = flatten(buildA11yStrings(index, [], atomType)).join(",");

            if (indexString === "3") {
              regionStrings.push("cube root of");
              buildA11yStrings(body, regionStrings, atomType);
              regionStrings.push("end cube root");
              return;
            }

            regionStrings.push("root");
            regionStrings.push("start index");
            buildA11yStrings(index, regionStrings, atomType);
            regionStrings.push("end index");
            return;
          }

          regionStrings.push("square root of");
          buildA11yStrings(body, regionStrings, atomType);
          regionStrings.push("end square root");
        });
        break;
      }

    case "supsub":
      {
        const {
          base,
          sub,
          sup
        } = tree;
        let isLog = false;

        if (base) {
          buildA11yStrings(base, a11yStrings, atomType);
          isLog = base.type === "op" && base.name === "\\log";
        }

        if (sub) {
          const regionName = isLog ? "base" : "subscript";
          buildRegion(a11yStrings, function (regionStrings) {
            regionStrings.push("start " + regionName);
            buildA11yStrings(sub, regionStrings, atomType);
            regionStrings.push("end " + regionName);
          });
        }

        if (sup) {
          buildRegion(a11yStrings, function (regionStrings) {
            const supString = flatten(buildA11yStrings(sup, [], atomType)).join(",");

            if (supString in powerMap) {
              regionStrings.push(powerMap[supString]);
              return;
            }

            regionStrings.push("start superscript");
            buildA11yStrings(sup, regionStrings, atomType);
            regionStrings.push("end superscript");
          });
        }

        break;
      }

    case "text":
      {
        // TODO: handle other fonts
        if (tree.font === "\\textbf") {
          buildRegion(a11yStrings, function (regionStrings) {
            regionStrings.push("start bold text");
            buildA11yStrings(tree.body, regionStrings, atomType);
            regionStrings.push("end bold text");
          });
          break;
        }

        buildRegion(a11yStrings, function (regionStrings) {
          regionStrings.push("start text");
          buildA11yStrings(tree.body, regionStrings, atomType);
          regionStrings.push("end text");
        });
        break;
      }

    case "textord":
      {
        buildString(tree.text, atomType, a11yStrings);
        break;
      }

    case "smash":
      {
        buildA11yStrings(tree.body, a11yStrings, atomType);
        break;
      }

    case "enclose":
      {
        // TODO: create a map for these.
        // TODO: differentiate between a body with a single atom, e.g.
        // "cancel a" instead of "start cancel, a, end cancel"
        if (/cancel/.test(tree.label)) {
          buildRegion(a11yStrings, function (regionStrings) {
            regionStrings.push("start cancel");
            buildA11yStrings(tree.body, regionStrings, atomType);
            regionStrings.push("end cancel");
          });
          break;
        } else if (/box/.test(tree.label)) {
          buildRegion(a11yStrings, function (regionStrings) {
            regionStrings.push("start box");
            buildA11yStrings(tree.body, regionStrings, atomType);
            regionStrings.push("end box");
          });
          break;
        } else if (/sout/.test(tree.label)) {
          buildRegion(a11yStrings, function (regionStrings) {
            regionStrings.push("start strikeout");
            buildA11yStrings(tree.body, regionStrings, atomType);
            regionStrings.push("end strikeout");
          });
          break;
        } else if (/phase/.test(tree.label)) {
          buildRegion(a11yStrings, function (regionStrings) {
            regionStrings.push("start phase angle");
            buildA11yStrings(tree.body, regionStrings, atomType);
            regionStrings.push("end phase angle");
          });
          break;
        }

        throw new Error("KaTeX-a11y: enclose node with " + tree.label + " not supported yet");
      }

    case "vcenter":
      {
        buildA11yStrings(tree.body, a11yStrings, atomType);
        break;
      }

    case "vphantom":
      {
        throw new Error("KaTeX-a11y: vphantom not implemented yet");
      }

    case "hphantom":
      {
        throw new Error("KaTeX-a11y: hphantom not implemented yet");
      }

    case "operatorname":
      {
        buildA11yStrings(tree.body, a11yStrings, atomType);
        break;
      }

    case "array":
      {
        throw new Error("KaTeX-a11y: array not implemented yet");
      }

    case "raw":
      {
        throw new Error("KaTeX-a11y: raw not implemented yet");
      }

    case "size":
      {
        // Although there are nodes of type "size" in the parse tree, they have
        // no semantic meaning and should be ignored.
        break;
      }

    case "url":
      {
        throw new Error("KaTeX-a11y: url not implemented yet");
      }

    case "tag":
      {
        throw new Error("KaTeX-a11y: tag not implemented yet");
      }

    case "verb":
      {
        buildString("start verbatim", "normal", a11yStrings);
        buildString(tree.body, "normal", a11yStrings);
        buildString("end verbatim", "normal", a11yStrings);
        break;
      }

    case "environment":
      {
        throw new Error("KaTeX-a11y: environment not implemented yet");
      }

    case "horizBrace":
      {
        buildString("start " + tree.label.slice(1), "normal", a11yStrings);
        buildA11yStrings(tree.base, a11yStrings, atomType);
        buildString("end " + tree.label.slice(1), "normal", a11yStrings);
        break;
      }

    case "infix":
      {
        // All infix nodes are replace with other nodes.
        break;
      }

    case "includegraphics":
      {
        throw new Error("KaTeX-a11y: includegraphics not implemented yet");
      }

    case "font":
      {
        // TODO: callout the start/end of specific fonts
        // TODO: map \BBb{N} to "the naturals" or something like that
        buildA11yStrings(tree.body, a11yStrings, atomType);
        break;
      }

    case "href":
      {
        throw new Error("KaTeX-a11y: href not implemented yet");
      }

    case "cr":
      {
        // This is used by environments.
        throw new Error("KaTeX-a11y: cr not implemented yet");
      }

    case "underline":
      {
        buildRegion(a11yStrings, function (a11yStrings) {
          a11yStrings.push("start underline");
          buildA11yStrings(tree.body, a11yStrings, atomType);
          a11yStrings.push("end underline");
        });
        break;
      }

    case "xArrow":
      {
        throw new Error("KaTeX-a11y: xArrow not implemented yet");
      }

    case "cdlabel":
      {
        throw new Error("KaTeX-a11y: cdlabel not implemented yet");
      }

    case "cdlabelparent":
      {
        throw new Error("KaTeX-a11y: cdlabelparent not implemented yet");
      }

    case "mclass":
      {
        // \neq and \ne are macros so we let "htmlmathml" render the mathmal
        // side of things and extract the text from that.
        const atomType = tree.mclass.slice(1); // $FlowFixMe: drop the leading "m" from the values in mclass

        buildA11yStrings(tree.body, a11yStrings, atomType);
        break;
      }

    case "mathchoice":
      {
        // TODO: track which style we're using, e.g. display, text, etc.
        // default to text style if even that may not be the correct style
        buildA11yStrings(tree.text, a11yStrings, atomType);
        break;
      }

    case "htmlmathml":
      {
        buildA11yStrings(tree.mathml, a11yStrings, atomType);
        break;
      }

    case "middle":
      {
        buildString(tree.delim, atomType, a11yStrings);
        break;
      }

    case "internal":
      {
        // internal nodes are never included in the parse tree
        break;
      }

    case "html":
      {
        buildA11yStrings(tree.body, a11yStrings, atomType);
        break;
      }

    default:
      tree.type;
      throw new Error("KaTeX a11y un-recognized type: " + tree.type);
  }
};

const buildA11yStrings = function (tree, a11yStrings, atomType) {
  if (a11yStrings === void 0) {
    a11yStrings = [];
  }

  if (tree instanceof Array) {
    for (let i = 0; i < tree.length; i++) {
      buildA11yStrings(tree[i], a11yStrings, atomType);
    }
  } else {
    handleObject(tree, a11yStrings, atomType);
  }

  return a11yStrings;
};

const flatten = function (array) {
  let result = [];
  array.forEach(function (item) {
    if (item instanceof Array) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  });
  return result;
};

const renderA11yString = function (text, settings) {
  const tree = katex__WEBPACK_IMPORTED_MODULE_0___default().__parse(text, settings);

  const a11yStrings = buildA11yStrings(tree, [], "normal");
  return flatten(a11yStrings).join(", ");
};

/* harmony default export */ __webpack_exports__["default"] = (renderA11yString);
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});