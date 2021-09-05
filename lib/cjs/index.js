"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importStar(require("styled-components"));
var InnerContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: relative;\n    width: 100%;\n    height: 100%;\n    text-align: center;\n    transition: transform 0.6s;\n    transform-style: preserve-3d;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n"], ["\n    position: relative;\n    width: 100%;\n    height: 100%;\n    text-align: center;\n    transition: transform 0.6s;\n    transform-style: preserve-3d;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n"])));
var Container = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    background-color: transparent;\n    width: ", ";\n    height: ", ";\n    perspective: 1000px;\n\n    &:hover ", " {\n        transform: ", ";\n    }\n"], ["\n    background-color: transparent;\n    width: ", ";\n    height: ", ";\n    perspective: 1000px;\n\n    &:hover ", " {\n        transform: ", ";\n    }\n"])), function (props) { return props.width + 'px'; }, function (props) { return props.height + 'px'; }, InnerContainer, function (props) {
    var axis = props.direction == 'horizontal' ? 'Y' : 'X';
    return "rotate" + axis + "(180deg)";
});
var frontBackCss = (0, styled_components_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n"], ["\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n"])));
var Front = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    ", "\n"], ["\n    ", "\n"])), frontBackCss);
var Back = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    ", "\n    transform: ", ";\n"], ["\n    ", "\n    transform: ", ";\n"])), frontBackCss, function (props) {
    var axis = props.direction == 'horizontal' ? 'Y' : 'X';
    return "rotate" + axis + "(180deg)";
});
var ReactHoverFlip = function (_a) {
    var height = _a.height, width = _a.width, _b = _a.direction, direction = _b === void 0 ? "horizontal" : _b, front = _a.front, back = _a.back;
    return ((0, jsx_runtime_1.jsx)(Container, __assign({ height: height, width: width }, { children: (0, jsx_runtime_1.jsxs)(InnerContainer, { children: [(0, jsx_runtime_1.jsx)(Front, { children: front }, void 0), (0, jsx_runtime_1.jsx)(Back, __assign({ direction: direction }, { children: back }), void 0)] }, void 0) }), void 0));
};
exports.default = ReactHoverFlip;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
