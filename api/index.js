var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
import fs from "node:fs/promises";
import fsSync from "node:fs";
import path, { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createStaticHandler, createStaticRouter, } from "react-router-dom/server.js";
// @ts-ignore
import { createFetchRequest } from "rasengan";
// Create server for production only
export default function handler(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var __filename, __dirname, url, host, appPath, err_1, templateHtml, serverFilePath, bootstrapDirPath, entry, bootstrap, styles, render, staticRoutes, loadTemplateHtml, handler_1, fetchRequest, context, status_1, redirect, helmetContext, router, rendered, html, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    __filename = fileURLToPath(import.meta.url);
                    __dirname = dirname(__filename);
                    console.log({ __dirname: __dirname });
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 9, , 10]);
                    url = req.url;
                    host = req.headers.host;
                    appPath = process.cwd();
                    console.log({
                        cwd: process.cwd(),
                        __dirname: __dirname
                    });
                    // read dir
                    console.log({
                        readdir: fsSync.readdirSync(__dirname),
                        readdir2: fsSync.readdirSync(join(process.cwd())),
                        readdir3: fsSync.readdirSync(join(process.cwd(), "..")),
                    });
                    if (!(url === "/robots.txt")) return [3 /*break*/, 5];
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, fs.access(path.resolve(join(appPath, "dist/client/robots.txt")))];
                case 3:
                    _b.sent();
                    return [2 /*return*/, res.send(path.resolve(join(appPath, "dist/client/robots.txt")))];
                case 4:
                    err_1 = _b.sent();
                    return [2 /*return*/, res.send("\n        user-agent: *\n        disallow: /downloads/\n        disallow: /private/\n        allow: /\n        \n        user-agent: magicsearchbot\n        disallow: /uploads/\n      ")];
                case 5:
                    // ! Sitemap Fix
                    if (url === "/sitemap.xml") {
                        return [2 /*return*/, res.send(path.resolve(join(appPath, "dist/client/sitemap.xml")))];
                    }
                    // ! Manifest Fix
                    if (url === "/manifest.json") {
                        return [2 /*return*/, res.send(path.resolve(join(appPath, "dist/client/manifest.json")))];
                    }
                    templateHtml = "";
                    serverFilePath = join(appPath, "dist/server/entry-server.js");
                    bootstrapDirPath = join(appPath, "dist/client/assets");
                    return [4 /*yield*/, import(serverFilePath)];
                case 6:
                    entry = _b.sent();
                    bootstrap = "/assets/" +
                        fsSync
                            .readdirSync(bootstrapDirPath)
                            .filter(function (fn) { return fn.includes("entry-client") && fn.endsWith(".js"); })[0];
                    styles = "/assets/" +
                        fsSync
                            .readdirSync(join(appPath, "dist/client/assets"))
                            .filter(function (fn) { return fn.includes("entry-client") && fn.endsWith(".css"); })[0];
                    render = entry.render, staticRoutes = entry.staticRoutes, loadTemplateHtml = entry.loadTemplateHtml;
                    handler_1 = createStaticHandler(staticRoutes);
                    fetchRequest = createFetchRequest(req, host);
                    return [4 /*yield*/, handler_1.query(fetchRequest)];
                case 7:
                    context = _b.sent();
                    status_1 = context.status;
                    if (status_1 === 302) {
                        redirect = context.headers.get("Location");
                        if (redirect)
                            return [2 /*return*/, res.redirect(redirect)];
                    }
                    helmetContext = {};
                    router = createStaticRouter(handler_1.dataRoutes, context);
                    return [4 /*yield*/, render(router, context, helmetContext)];
                case 8:
                    rendered = _b.sent();
                    // Load template html
                    if (!templateHtml) {
                        templateHtml = loadTemplateHtml(helmetContext, bootstrap, styles);
                    }
                    html = templateHtml.replace("rasengan-body-app", (_a = rendered.html) !== null && _a !== void 0 ? _a : "");
                    // Send the rendered html page
                    return [2 /*return*/, res
                            .status(200)
                            .setHeader("Content-Type", "text/html")
                            .setHeader("Cache-Control", "max-age=31536000")
                            .end(html)];
                case 9:
                    e_1 = _b.sent();
                    console.log(e_1.stack);
                    res.status(500).end(e_1.stack);
                    return [3 /*break*/, 10];
                case 10: return [2 /*return*/];
            }
        });
    });
}
