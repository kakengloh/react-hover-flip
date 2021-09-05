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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './index.css';
var ReactHoverFlip = function (_a) {
    var front = _a.front, back = _a.back, height = _a.height, width = _a.width, _b = _a.direction, direction = _b === void 0 ? "horizontal" : _b;
    return (_jsx("div", __assign({ className: "container", style: { height: height, width: width } }, { children: _jsxs("div", __assign({ className: "inner-container " + direction }, { children: [_jsx("div", __assign({ className: "front" }, { children: front }), void 0), _jsx("div", __assign({ className: "back " + direction }, { children: back }), void 0)] }), void 0) }), void 0));
};
export default ReactHoverFlip;
