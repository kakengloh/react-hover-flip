"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./index.css");
var ReactHoverFlip = function (_a) {
    var front = _a.front, back = _a.back, height = _a.height, width = _a.width, _b = _a.direction, direction = _b === void 0 ? "horizontal" : _b;
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "container", style: { height: height, width: width } }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "inner-container " + direction }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "front" }, { children: front }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "back " + direction }, { children: back }), void 0)] }), void 0) }), void 0));
};
exports.default = ReactHoverFlip;
