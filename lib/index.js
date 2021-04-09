"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageObserver = void 0;
var LazyLoader_1 = __importDefault(require("./LazyLoader"));
function imageObserver(images) {
    return new LazyLoader_1.default(images).start();
}
exports.imageObserver = imageObserver;
//# sourceMappingURL=index.js.map