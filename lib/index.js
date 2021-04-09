"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LazyLoader_1 = __importDefault(require("./LazyLoader"));
exports.default = () => {
    const images = document.querySelectorAll('.smooth-loader');
    if (!images) {
        return;
    }
    return new LazyLoader_1.default(images).execute();
};
//# sourceMappingURL=index.js.map