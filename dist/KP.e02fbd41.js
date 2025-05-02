// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"kxwl6":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "a726bb8fe02fbd41";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"jOXmm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "user", ()=>user);
parcelHelpers.export(exports, "page", ()=>page);
parcelHelpers.export(exports, "posts", ()=>posts);
parcelHelpers.export(exports, "getToken", ()=>getToken);
parcelHelpers.export(exports, "logout", ()=>logout);
parcelHelpers.export(exports, "goToPage", ()=>goToPage);
parcelHelpers.export(exports, "onAddPostClick", ()=>onAddPostClick);
var _apiJs = require("./api.js");
var _addPostPageComponentJs = require("./components/add-post-page-component.js");
var _authPageComponentJs = require("./components/auth-page-component.js");
var _routesJs = require("./routes.js");
var _postsPageComponentJs = require("./components/posts-page-component.js");
var _loadingPageComponentJs = require("./components/loading-page-component.js");
var _userPostsPageComponentJs = require("./components/user-posts-page-component.js");
var _helpersJs = require("./helpers.js");
let user = (0, _helpersJs.getUserFromLocalStorage)();
let page = null;
let posts = [];
let pageParams = {};
const getToken = ()=>{
    return user ? `Bearer ${user.token}` : undefined;
};
const logout = ()=>{
    user = null;
    (0, _helpersJs.removeUserFromLocalStorage)();
    goToPage((0, _routesJs.POSTS_PAGE));
};
const goToPage = (newPage, data = {})=>{
    pageParams = data;
    if ([
        (0, _routesJs.POSTS_PAGE),
        (0, _routesJs.AUTH_PAGE),
        (0, _routesJs.ADD_POSTS_PAGE),
        (0, _routesJs.USER_POSTS_PAGE),
        (0, _routesJs.LOADING_PAGE)
    ].includes(newPage)) {
        if (newPage === (0, _routesJs.ADD_POSTS_PAGE)) {
            page = user ? (0, _routesJs.ADD_POSTS_PAGE) : (0, _routesJs.AUTH_PAGE);
            return renderApp();
        }
        if (newPage === (0, _routesJs.POSTS_PAGE)) {
            page = (0, _routesJs.LOADING_PAGE);
            renderApp();
            return (0, _apiJs.getPosts)({
                token: getToken()
            }).then((newPosts)=>{
                page = (0, _routesJs.POSTS_PAGE);
                posts = newPosts;
                renderApp();
            }).catch((error)=>{
                console.error(error);
                goToPage((0, _routesJs.POSTS_PAGE));
            });
        }
        if (newPage === (0, _routesJs.USER_POSTS_PAGE)) {
            page = (0, _routesJs.LOADING_PAGE);
            renderApp();
            return (0, _apiJs.getPosts)({
                token: getToken(),
                userId: data.userId
            }).then((newPosts)=>{
                page = (0, _routesJs.USER_POSTS_PAGE);
                posts = newPosts;
                renderApp();
            }).catch((error)=>{
                console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043F\u043E\u0441\u0442\u043E\u0432 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F:", error);
                goToPage((0, _routesJs.POSTS_PAGE));
            });
        }
        page = newPage;
        renderApp();
        return;
    }
    throw new Error("\u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442");
};
const renderApp = ()=>{
    const appEl = document.getElementById("app");
    if (page === (0, _routesJs.LOADING_PAGE)) return (0, _loadingPageComponentJs.renderLoadingPageComponent)({
        appEl,
        user,
        goToPage
    });
    if (page === (0, _routesJs.AUTH_PAGE)) return (0, _authPageComponentJs.renderAuthPageComponent)({
        appEl,
        setUser: (newUser)=>{
            user = newUser;
            (0, _helpersJs.saveUserToLocalStorage)(user);
            goToPage((0, _routesJs.POSTS_PAGE));
        },
        user,
        goToPage
    });
    if (page === (0, _routesJs.ADD_POSTS_PAGE)) return (0, _addPostPageComponentJs.renderAddPostPageComponent)({
        appEl
    });
    if (page === (0, _routesJs.POSTS_PAGE)) return (0, _postsPageComponentJs.renderPostsPageComponent)({
        appEl
    });
    if (page === (0, _routesJs.USER_POSTS_PAGE)) return (0, _userPostsPageComponentJs.renderUserPostsPageComponent)({
        appEl,
        posts,
        userId: pageParams.userId
    });
};
goToPage((0, _routesJs.POSTS_PAGE));
function onAddPostClick({ description, imageUrl }) {
    const token = getToken();
    if (!token) {
        alert("\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F");
        goToPage((0, _routesJs.AUTH_PAGE));
        return;
    }
    if (description.length < 1 || description.length > 500) {
        alert("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043E\u0442 1 \u0434\u043E 500 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432");
        return;
    }
    const addButton = document.querySelector('.add-button');
    if (addButton) {
        addButton.disabled = true;
        addButton.textContent = "\u041F\u0443\u0431\u043B\u0438\u043A\u0443\u044E...";
    }
    (0, _apiJs.addPost)({
        description,
        imageUrl,
        token
    }).then((newPost)=>{
        posts.unshift(newPost);
        goToPage((0, _routesJs.POSTS_PAGE));
    }).catch((error)=>{
        console.error("\u041F\u043E\u043B\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430:", error);
        alert(error.message);
    }).finally(()=>{
        if (addButton) {
            addButton.disabled = false;
            addButton.textContent = "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C";
        }
    });
}

},{"./api.js":"lJgrb","./components/add-post-page-component.js":"jzok6","./components/auth-page-component.js":"ffn17","./routes.js":"7oXEA","./components/posts-page-component.js":"5krBj","./components/loading-page-component.js":"3p7wW","./helpers.js":"3MlDw","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./components/user-posts-page-component.js":"dfWUr"}],"lJgrb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getPosts", ()=>getPosts);
parcelHelpers.export(exports, "registerUser", ()=>registerUser);
parcelHelpers.export(exports, "loginUser", ()=>loginUser);
parcelHelpers.export(exports, "uploadImage", ()=>uploadImage);
parcelHelpers.export(exports, "addPost", ()=>addPost);
parcelHelpers.export(exports, "toggleLike", ()=>toggleLike);
var _indexJs = require("./index.js");
const personalKey = "DIS";
const baseHost = "https://wedev-api.sky.pro";
const postsHost = `${baseHost}/api/v1/${personalKey}/instapro`;
function getPosts({ token, userId }) {
    let url = postsHost;
    if (userId) url += `/user-posts/${userId}`;
    return fetch(url, {
        method: "GET",
        headers: {
            Authorization: token
        }
    }).then((response)=>{
        if (response.status === 401) throw new Error("\u041D\u0435\u0442 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438");
        if (!response.ok) throw new Error(`\u{41E}\u{448}\u{438}\u{431}\u{43A}\u{430}: ${response.statusText}`);
        return response.json();
    }).then((data)=>{
        if (!data.posts) throw new Error("\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043B\u044F \u043F\u043E\u0441\u0442\u043E\u0432");
        return data.posts;
    });
}
function registerUser({ login, password, name, imageUrl }) {
    return fetch(baseHost + "/api/user", {
        method: "POST",
        body: JSON.stringify({
            login,
            password,
            name,
            imageUrl
        })
    }).then((response)=>{
        if (response.status === 400) throw new Error("\u0422\u0430\u043A\u043E\u0439 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442");
        return response.json();
    });
}
function loginUser({ login, password }) {
    return fetch(baseHost + "/api/user/login", {
        method: "POST",
        body: JSON.stringify({
            login,
            password
        })
    }).then((response)=>{
        if (response.status === 400) throw new Error("\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043B\u043E\u0433\u0438\u043D \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C");
        return response.json();
    });
}
function uploadImage({ file }) {
    const data = new FormData();
    data.append("file", file);
    return fetch(baseHost + "/api/upload/image", {
        method: "POST",
        body: data
    }).then((response)=>{
        if (!response.ok) throw new Error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F");
        return response.json();
    });
}
function addPost({ imageUrl, description, token }) {
    if (!description || typeof description !== 'string' || description.trim() === '') return Promise.reject(new Error("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E"));
    if (!imageUrl || typeof imageUrl !== 'string' || !imageUrl.includes('skypro-webdev-homework-bucket')) return Promise.reject(new Error("\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0432\u0430\u043B\u0438\u0434\u043D\u044B\u0439 URL \u0438\u0437 Yandex Cloud"));
    const postData = {
        description: description.trim(),
        imageUrl: imageUrl.trim()
    };
    return fetch(`${baseHost}/api/v1/${personalKey}/instapro`, {
        method: "POST",
        headers: {
            'Authorization': token,
            'Accept': 'application/json'
        },
        body: JSON.stringify(postData)
    }).then(async (response)=>{
        const responseData = await response.json();
        if (response.status === 201) return responseData.post || responseData;
        if (response.status === 400) throw new Error(responseData.message || "\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0434\u0430\u043D\u043D\u044B\u0435: \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 1-500 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432, \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u0430\u044F \u0441\u0441\u044B\u043B\u043A\u0430");
        throw new Error(`\u{41E}\u{448}\u{438}\u{431}\u{43A}\u{430} \u{441}\u{435}\u{440}\u{432}\u{435}\u{440}\u{430}: ${response.status}`);
    });
}
function toggleLike({ postId, isLiked, token }) {
    if (!postId || typeof postId !== 'string') {
        console.error('Invalid postId:', postId);
        return Promise.reject(new Error("\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 ID \u043F\u043E\u0441\u0442\u0430"));
    }
    if (typeof isLiked !== 'boolean') return Promise.reject(new Error("\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 (\u043B\u0430\u0439\u043A/\u0434\u0438\u0437\u043B\u0430\u0439\u043A)"));
    if (!token) return Promise.reject(new Error("\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0442\u043E\u043A\u0435\u043D \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438"));
    const endpoint = isLiked ? '/dislike' : '/like';
    const url = `${baseHost}/api/v1/${personalKey}/instapro/${postId}${endpoint}`;
    return fetch(url, {
        method: "POST",
        headers: {
            "Authorization": token
        }
    }).then(async (response)=>{
        if (!response.ok) {
            const errorData = await response.text();
            console.error('[API] toggleLike error: Unexpected response:', errorData);
            throw new Error(`\u{41E}\u{448}\u{438}\u{431}\u{43A}\u{430} \u{441}\u{435}\u{440}\u{432}\u{435}\u{440}\u{430}: ${response.status}`);
        }
        const data = await response.json();
        return data.post || data;
    }).catch((error)=>{
        console.error('[API] toggleLike error:', error.message);
        throw error;
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./index.js":"jOXmm"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"jzok6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderAddPostPageComponent", ()=>renderAddPostPageComponent);
var _headerComponentJs = require("./header-component.js");
var _uploadImageComponentJs = require("./upload-image-component.js");
var _indexJs = require("../index.js");
function renderAddPostPageComponent({ appEl }) {
    let imageUrl = "";
    let description = "";
    const render = ()=>{
        appEl.innerHTML = `
      <div class="page-container">
        <div class="header-container"></div>
        <div class="form">
          <h3 class="form-title">\u{414}\u{43E}\u{431}\u{430}\u{432}\u{438}\u{442}\u{44C} \u{43F}\u{43E}\u{441}\u{442}</h3>
          <div class="form-inputs">
            <div class="upload-image-container"></div>
            <label>\u{41E}\u{43F}\u{438}\u{441}\u{430}\u{43D}\u{438}\u{435}:
              <textarea class="input description-input" placeholder="\u{412}\u{432}\u{435}\u{434}\u{438}\u{442}\u{435} \u{43E}\u{43F}\u{438}\u{441}\u{430}\u{43D}\u{438}\u{435} \u{43F}\u{43E}\u{441}\u{442}\u{430}"></textarea>
            </label>
            <button class="button add-button">\u{414}\u{43E}\u{431}\u{430}\u{432}\u{438}\u{442}\u{44C}</button>
          </div>
        </div>
      </div>
    `;
        (0, _headerComponentJs.renderHeaderComponent)({
            element: document.querySelector(".header-container")
        });
        (0, _uploadImageComponentJs.renderUploadImageComponent)({
            element: document.querySelector(".upload-image-container"),
            onImageUrlChange: (newImageUrl)=>{
                imageUrl = newImageUrl;
            }
        });
        document.querySelector(".add-button").addEventListener("click", ()=>{
            const description = document.querySelector(".description-input").value.trim();
            if (!imageUrl) {
                alert("\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435");
                return;
            }
            const cleanDescription = description.replace(/[^\w\sа-яА-ЯёЁ.,!?]/gi, '');
            if (cleanDescription.length < 1) {
                alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435");
                return;
            }
            (0, _indexJs.onAddPostClick)({
                description: cleanDescription,
                imageUrl
            });
        });
    };
    render();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","../index.js":"jOXmm","./header-component.js":"ipQ1N","./upload-image-component.js":"h295w"}],"ipQ1N":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Компонент заголовка страницы.
 * Этот компонент отображает шапку страницы с логотипом, кнопкой добавления постов/входа и кнопкой выхода (если пользователь авторизован).
 * 
 * @param {HTMLElement} params.element - HTML-элемент, в который будет рендериться заголовок.
 * @returns {HTMLElement} Возвращает элемент заголовка после рендеринга.
 */ parcelHelpers.export(exports, "renderHeaderComponent", ()=>renderHeaderComponent);
var _indexJs = require("../index.js");
var _routesJs = require("../routes.js");
function renderHeaderComponent({ element }) {
    /**
   * Рендерит содержимое заголовка.
   */ element.innerHTML = `
  <div class="page-header">
      <h1 class="logo">instapro</h1>
      <button class="header-button add-or-login-button">
      ${(0, _indexJs.user) ? `<div title="\u{414}\u{43E}\u{431}\u{430}\u{432}\u{438}\u{442}\u{44C} \u{43F}\u{43E}\u{441}\u{442}" class="add-post-sign"></div>` : "\u0412\u043E\u0439\u0442\u0438"}
      </button>
      ${(0, _indexJs.user) ? `<button title="${(0, _indexJs.user).name}" class="header-button logout-button">\u{412}\u{44B}\u{439}\u{442}\u{438}</button>` : ""}  
  </div>
  `;
    /**
   * Обработчик клика по кнопке "Добавить пост"/"Войти".
   * Если пользователь авторизован, перенаправляет на страницу добавления постов.
   * Если пользователь не авторизован, перенаправляет на страницу авторизации.
   */ element.querySelector(".add-or-login-button").addEventListener("click", ()=>{
        if (0, _indexJs.user) (0, _indexJs.goToPage)((0, _routesJs.ADD_POSTS_PAGE));
        else (0, _indexJs.goToPage)((0, _routesJs.AUTH_PAGE));
    });
    /**
   * Обработчик клика по логотипу.
   * Перенаправляет на страницу с постами.
   */ element.querySelector(".logo").addEventListener("click", ()=>{
        (0, _indexJs.goToPage)((0, _routesJs.POSTS_PAGE));
    });
    /**
   * Обработчик клика по кнопке "Выйти".
   * Если кнопка существует (т.е. пользователь авторизован), вызывает функцию `logout`.
   */ element.querySelector(".logout-button")?.addEventListener("click", (0, _indexJs.logout));
    return element;
}

},{"../index.js":"jOXmm","../routes.js":"7oXEA","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7oXEA":[function(require,module,exports,__globalThis) {
/* Файл со списком страниц приложения */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "POSTS_PAGE", ()=>POSTS_PAGE);
parcelHelpers.export(exports, "USER_POSTS_PAGE", ()=>USER_POSTS_PAGE);
parcelHelpers.export(exports, "AUTH_PAGE", ()=>AUTH_PAGE);
parcelHelpers.export(exports, "ADD_POSTS_PAGE", ()=>ADD_POSTS_PAGE);
parcelHelpers.export(exports, "LOADING_PAGE", ()=>LOADING_PAGE);
const POSTS_PAGE = "posts";
const USER_POSTS_PAGE = "user-posts";
const AUTH_PAGE = "auth";
const ADD_POSTS_PAGE = "add-post";
const LOADING_PAGE = "loading";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"h295w":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderUploadImageComponent", ()=>renderUploadImageComponent);
var _apiJs = require("../api.js");
function renderUploadImageComponent({ element, onImageUrlChange }) {
    let imageUrl = "";
    const render = ()=>{
        element.innerHTML = `
      <div class="upload-image">
        ${imageUrl ? `
            <div class="file-upload-image-container">
              <img class="file-upload-image" src="${imageUrl}" alt="\u{417}\u{430}\u{433}\u{440}\u{443}\u{436}\u{435}\u{43D}\u{43D}\u{43E}\u{435} \u{438}\u{437}\u{43E}\u{431}\u{440}\u{430}\u{436}\u{435}\u{43D}\u{438}\u{435}">
              <button class="file-upload-remove-button button">\u{417}\u{430}\u{43C}\u{435}\u{43D}\u{438}\u{442}\u{44C} \u{444}\u{43E}\u{442}\u{43E}</button>
            </div>
            ` : `
            <label class="file-upload-label secondary-button">
              <input
                type="file"
                class="file-upload-input"
                style="display:none"
                accept="image/*"
              />
              \u{412}\u{44B}\u{431}\u{435}\u{440}\u{438}\u{442}\u{435} \u{444}\u{43E}\u{442}\u{43E}
            </label>
          `}
      </div>
    `;
        const fileInputElement = element.querySelector(".file-upload-input");
        fileInputElement?.addEventListener("change", ()=>{
            const file = fileInputElement.files[0];
            if (file) {
                const labelEl = document.querySelector(".file-upload-label");
                if (labelEl) {
                    labelEl.setAttribute("disabled", true);
                    labelEl.textContent = "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044E \u0444\u0430\u0439\u043B...";
                }
                (0, _apiJs.uploadImage)({
                    file
                }).then(({ fileUrl })=>{
                    if (!fileUrl.startsWith("https://storage.yandexcloud.net/skypro-webdev-homework-bucket/")) throw new Error("\u0421\u0441\u044B\u043B\u043A\u0430 \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u0438\u0437 Yandex Cloud");
                    imageUrl = fileUrl;
                    onImageUrlChange(imageUrl);
                    render();
                }).catch(()=>{
                    alert("\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F");
                    if (labelEl) {
                        labelEl.removeAttribute("disabled");
                        labelEl.textContent = "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u043E\u0442\u043E";
                    }
                });
            }
        });
        element.querySelector(".file-upload-remove-button")?.addEventListener("click", ()=>{
            imageUrl = "";
            onImageUrlChange(imageUrl);
            render();
        });
    };
    render();
}

},{"../api.js":"lJgrb","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ffn17":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Компонент страницы авторизации.
 * Этот компонент предоставляет пользователю интерфейс для входа в систему или регистрации.
 * Форма переключается между режимами "Вход" и "Регистрация".
 *
 * @param {HTMLElement} params.appEl - Корневой элемент приложения, в который будет рендериться страница.
 * @param {Function} params.setUser - Функция, вызываемая при успешной авторизации или регистрации.
 *                                    Принимает объект пользователя в качестве аргумента.
 */ parcelHelpers.export(exports, "renderAuthPageComponent", ()=>renderAuthPageComponent);
var _apiJs = require("../api.js");
var _headerComponentJs = require("./header-component.js");
var _uploadImageComponentJs = require("./upload-image-component.js");
function renderAuthPageComponent({ appEl, setUser }) {
    /**
   * Флаг, указывающий текущий режим формы.
   * Если `true`, форма находится в режиме входа. Если `false`, в режиме регистрации.
   * @type {boolean}
   */ let isLoginMode = true;
    /**
   * URL изображения, загруженного пользователем при регистрации.
   * Используется только в режиме регистрации.
   * @type {string}
   */ let imageUrl = "";
    /**
   * Рендерит форму авторизации или регистрации.
   * В зависимости от значения `isLoginMode` отображает соответствующий интерфейс.
   */ const renderForm = ()=>{
        const appHtml = `
      <div class="page-container">
          <div class="header-container"></div>
          <div class="form">
              <h3 class="form-title">
                ${isLoginMode ? "\u0412\u0445\u043E\u0434 \u0432&nbsp;Instapro" : "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0432&nbsp;Instapro"}
              </h3>
              <div class="form-inputs">
                  ${!isLoginMode ? `
                      <div class="upload-image-container"></div>
                      <input type="text" id="name-input" class="input" placeholder="\u{418}\u{43C}\u{44F}" />
                      ` : ""}
                  <input type="text" id="login-input" class="input" placeholder="\u{41B}\u{43E}\u{433}\u{438}\u{43D}" />
                  <input type="password" id="password-input" class="input" placeholder="\u{41F}\u{430}\u{440}\u{43E}\u{43B}\u{44C}" />
                  <div class="form-error"></div>
                  <button class="button" id="login-button">${isLoginMode ? "\u0412\u043E\u0439\u0442\u0438" : "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"}</button>
              </div>
              <div class="form-footer">
                <p class="form-footer-title">
                  ${isLoginMode ? "\u041D\u0435\u0442 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430?" : "\u0423\u0436\u0435 \u0435\u0441\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442?"}
                  <button class="link-button" id="toggle-button">
                    ${isLoginMode ? "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F." : "\u0412\u043E\u0439\u0442\u0438."}
                  </button>
                </p>
              </div>
          </div>
      </div>    
    `;
        appEl.innerHTML = appHtml;
        /**
     * Устанавливает сообщение об ошибке в форме.
     * @param {string} message - Текст сообщения об ошибке.
     */ const setError = (message)=>{
            appEl.querySelector(".form-error").textContent = message;
        };
        // Рендерим заголовок страницы
        (0, _headerComponentJs.renderHeaderComponent)({
            element: document.querySelector(".header-container")
        });
        // Если режим регистрации, рендерим компонент загрузки изображения
        const uploadImageContainer = appEl.querySelector(".upload-image-container");
        if (uploadImageContainer) (0, _uploadImageComponentJs.renderUploadImageComponent)({
            element: uploadImageContainer,
            onImageUrlChange (newImageUrl) {
                imageUrl = newImageUrl;
            }
        });
        // Обработка клика на кнопку входа/регистрации
        document.getElementById("login-button").addEventListener("click", ()=>{
            setError("");
            if (isLoginMode) {
                // Обработка входа
                const login = document.getElementById("login-input").value;
                const password = document.getElementById("password-input").value;
                if (!login) {
                    alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043B\u043E\u0433\u0438\u043D");
                    return;
                }
                if (!password) {
                    alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C");
                    return;
                }
                (0, _apiJs.loginUser)({
                    login,
                    password
                }).then((data)=>{
                    if (data && data.user && data.user.token) {
                        const token = data.user.token;
                        localStorage.setItem('userToken', token);
                        setUser(data.user);
                    } else console.error("\u0422\u043E\u043A\u0435\u043D \u043D\u0435 \u043F\u043E\u043B\u0443\u0447\u0435\u043D");
                }).catch((error)=>{
                    console.warn(error);
                    setError(error.message);
                });
            } else {
                const login = document.getElementById("login-input").value;
                const name = document.getElementById("name-input").value;
                const password = document.getElementById("password-input").value;
                if (!name) {
                    alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F");
                    return;
                }
                if (!login) {
                    alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043B\u043E\u0433\u0438\u043D");
                    return;
                }
                if (!password) {
                    alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C");
                    return;
                }
                if (!imageUrl) {
                    alert("\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u0430 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F");
                    return;
                }
                (0, _apiJs.registerUser)({
                    login,
                    password,
                    name,
                    imageUrl
                }).then((user)=>{
                    setUser(user.user);
                }).catch((error)=>{
                    console.warn(error);
                    setError(error.message);
                });
            }
        });
        document.getElementById("toggle-button").addEventListener("click", ()=>{
            isLoginMode = !isLoginMode;
            renderForm();
        });
    };
    renderForm();
}

},{"../api.js":"lJgrb","./header-component.js":"ipQ1N","./upload-image-component.js":"h295w","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5krBj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderPostsPageComponent", ()=>renderPostsPageComponent);
parcelHelpers.export(exports, "sanitizeHtml", ()=>sanitizeHtml);
var _headerComponentJs = require("./header-component.js");
var _indexJs = require("../index.js");
var _dateFns = require("date-fns");
var _locale = require("date-fns/locale");
var _apiJs = require("../api.js");
function renderPostsPageComponent({ appEl }) {
    (0, _apiJs.getPosts)({
        token: (0, _indexJs.getToken)()
    }).then((posts)=>{
        const postsHtml = posts.map((post)=>{
            const createdAgo = (0, _dateFns.formatDistanceToNow)(new Date(post.createdAt), {
                addSuffix: true,
                locale: (0, _locale.ru)
            });
            return `
            <li class="post" data-post-id="${post.id}">
              <div class="post-header" data-user-id="${post.user.id}">
                <img src="${post.user.imageUrl}" class="post-header__user-image">
                <p class="post-header__user-name">${sanitizeHtml(post.user.name)}</p>
              </div>
              <div class="post-image-container">
                <img class="post-image" src="${post.imageUrl}">
              </div>
              <div class="post-likes">
                <button data-post-id="${post.id}" class="like-button">
                  <img src="assets/images/${post.isLiked ? 'like-active.svg' : 'like-not-active.svg'}">
                </button>
                  <p class="post-likes-text">
                    \u{41D}\u{440}\u{430}\u{432}\u{438}\u{442}\u{441}\u{44F}: <strong>${post.likes.length}</strong>${post.likes.length > 0 ? ` \u{2014} ${post.likes[post.likes.length - 1].name}` : ""}
                  </p>
              </div>
              <p class="post-text">
                <span class="user-name">${sanitizeHtml(post.user.name)}</span>
                ${sanitizeHtml(post.description)}
              </p>
              <p class="post-date">
                ${createdAgo}
              </p>
            </li>
          `;
        }).join("");
        const appHtml = `
        <div class="page-container">
          <div class="header-container"></div>
          <ul class="posts">
            ${postsHtml}
          </ul>
        </div>
      `;
        appEl.innerHTML = appHtml;
        (0, _headerComponentJs.renderHeaderComponent)({
            element: document.querySelector(".header-container")
        });
        document.querySelectorAll(".post-header").forEach((userEl)=>{
            userEl.addEventListener("click", ()=>{
                const userId = userEl.dataset.userId;
                if (!userId) {
                    console.error("\u274C userId \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0443 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430:", userEl);
                    return;
                }
                (0, _indexJs.goToPage)("user-posts", {
                    userId
                });
            });
        });
        document.querySelectorAll(".like-button").forEach((button)=>{
            button.addEventListener("click", (event)=>{
                const postId = button.dataset.postId;
                const isLiked = button.querySelector("img").src.includes("like-active");
                (0, _apiJs.toggleLike)({
                    postId,
                    isLiked,
                    token: (0, _indexJs.getToken)()
                }).then((updatedPost)=>{
                    const postElement = document.querySelector(`[data-post-id="${updatedPost.id}"]`);
                    if (postElement) {
                        const likeButton = postElement.querySelector("button img");
                        const likeCount = postElement.querySelector(".post-likes-text strong");
                        if (likeButton && likeCount) {
                            likeButton.src = updatedPost.isLiked ? "assets/images/like-active.svg" : "assets/images/like-not-active.svg";
                            likeCount.parentElement.innerHTML = `
                    \u{41D}\u{440}\u{430}\u{432}\u{438}\u{442}\u{441}\u{44F}: <strong>${updatedPost.likes.length}</strong>${updatedPost.likes.length > 0 ? ` \u{2014} ${updatedPost.likes[updatedPost.likes.length - 1].name}` : ""}
                  `;
                        } else console.error("\u041E\u0448\u0438\u0431\u043A\u0430: \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0434\u043B\u044F \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B");
                    } else console.error("\u041E\u0448\u0438\u0431\u043A\u0430: \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u043F\u043E\u0441\u0442\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D");
                }).catch((error)=>{
                    console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0438 \u043B\u0430\u0439\u043A\u0430:", error);
                });
            });
        });
    }).catch((error)=>{
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 \u043F\u043E\u0441\u0442\u043E\u0432:", error);
        appEl.innerHTML = "<p>\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043F\u043E\u0441\u0442\u043E\u0432.</p>";
    });
}
function sanitizeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

},{"./header-component.js":"ipQ1N","../index.js":"jOXmm","date-fns":"apLUd","date-fns/locale":"guJNA","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","../api.js":"lJgrb"}],"apLUd":[function(require,module,exports,__globalThis) {
// This file is generated automatically by `scripts/build/indices.ts`. Please, don't change it.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _addJs = require("./add.js");
parcelHelpers.exportAll(_addJs, exports);
var _addBusinessDaysJs = require("./addBusinessDays.js");
parcelHelpers.exportAll(_addBusinessDaysJs, exports);
var _addDaysJs = require("./addDays.js");
parcelHelpers.exportAll(_addDaysJs, exports);
var _addHoursJs = require("./addHours.js");
parcelHelpers.exportAll(_addHoursJs, exports);
var _addISOWeekYearsJs = require("./addISOWeekYears.js");
parcelHelpers.exportAll(_addISOWeekYearsJs, exports);
var _addMillisecondsJs = require("./addMilliseconds.js");
parcelHelpers.exportAll(_addMillisecondsJs, exports);
var _addMinutesJs = require("./addMinutes.js");
parcelHelpers.exportAll(_addMinutesJs, exports);
var _addMonthsJs = require("./addMonths.js");
parcelHelpers.exportAll(_addMonthsJs, exports);
var _addQuartersJs = require("./addQuarters.js");
parcelHelpers.exportAll(_addQuartersJs, exports);
var _addSecondsJs = require("./addSeconds.js");
parcelHelpers.exportAll(_addSecondsJs, exports);
var _addWeeksJs = require("./addWeeks.js");
parcelHelpers.exportAll(_addWeeksJs, exports);
var _addYearsJs = require("./addYears.js");
parcelHelpers.exportAll(_addYearsJs, exports);
var _areIntervalsOverlappingJs = require("./areIntervalsOverlapping.js");
parcelHelpers.exportAll(_areIntervalsOverlappingJs, exports);
var _clampJs = require("./clamp.js");
parcelHelpers.exportAll(_clampJs, exports);
var _closestIndexToJs = require("./closestIndexTo.js");
parcelHelpers.exportAll(_closestIndexToJs, exports);
var _closestToJs = require("./closestTo.js");
parcelHelpers.exportAll(_closestToJs, exports);
var _compareAscJs = require("./compareAsc.js");
parcelHelpers.exportAll(_compareAscJs, exports);
var _compareDescJs = require("./compareDesc.js");
parcelHelpers.exportAll(_compareDescJs, exports);
var _constructFromJs = require("./constructFrom.js");
parcelHelpers.exportAll(_constructFromJs, exports);
var _constructNowJs = require("./constructNow.js");
parcelHelpers.exportAll(_constructNowJs, exports);
var _daysToWeeksJs = require("./daysToWeeks.js");
parcelHelpers.exportAll(_daysToWeeksJs, exports);
var _differenceInBusinessDaysJs = require("./differenceInBusinessDays.js");
parcelHelpers.exportAll(_differenceInBusinessDaysJs, exports);
var _differenceInCalendarDaysJs = require("./differenceInCalendarDays.js");
parcelHelpers.exportAll(_differenceInCalendarDaysJs, exports);
var _differenceInCalendarISOWeekYearsJs = require("./differenceInCalendarISOWeekYears.js");
parcelHelpers.exportAll(_differenceInCalendarISOWeekYearsJs, exports);
var _differenceInCalendarISOWeeksJs = require("./differenceInCalendarISOWeeks.js");
parcelHelpers.exportAll(_differenceInCalendarISOWeeksJs, exports);
var _differenceInCalendarMonthsJs = require("./differenceInCalendarMonths.js");
parcelHelpers.exportAll(_differenceInCalendarMonthsJs, exports);
var _differenceInCalendarQuartersJs = require("./differenceInCalendarQuarters.js");
parcelHelpers.exportAll(_differenceInCalendarQuartersJs, exports);
var _differenceInCalendarWeeksJs = require("./differenceInCalendarWeeks.js");
parcelHelpers.exportAll(_differenceInCalendarWeeksJs, exports);
var _differenceInCalendarYearsJs = require("./differenceInCalendarYears.js");
parcelHelpers.exportAll(_differenceInCalendarYearsJs, exports);
var _differenceInDaysJs = require("./differenceInDays.js");
parcelHelpers.exportAll(_differenceInDaysJs, exports);
var _differenceInHoursJs = require("./differenceInHours.js");
parcelHelpers.exportAll(_differenceInHoursJs, exports);
var _differenceInISOWeekYearsJs = require("./differenceInISOWeekYears.js");
parcelHelpers.exportAll(_differenceInISOWeekYearsJs, exports);
var _differenceInMillisecondsJs = require("./differenceInMilliseconds.js");
parcelHelpers.exportAll(_differenceInMillisecondsJs, exports);
var _differenceInMinutesJs = require("./differenceInMinutes.js");
parcelHelpers.exportAll(_differenceInMinutesJs, exports);
var _differenceInMonthsJs = require("./differenceInMonths.js");
parcelHelpers.exportAll(_differenceInMonthsJs, exports);
var _differenceInQuartersJs = require("./differenceInQuarters.js");
parcelHelpers.exportAll(_differenceInQuartersJs, exports);
var _differenceInSecondsJs = require("./differenceInSeconds.js");
parcelHelpers.exportAll(_differenceInSecondsJs, exports);
var _differenceInWeeksJs = require("./differenceInWeeks.js");
parcelHelpers.exportAll(_differenceInWeeksJs, exports);
var _differenceInYearsJs = require("./differenceInYears.js");
parcelHelpers.exportAll(_differenceInYearsJs, exports);
var _eachDayOfIntervalJs = require("./eachDayOfInterval.js");
parcelHelpers.exportAll(_eachDayOfIntervalJs, exports);
var _eachHourOfIntervalJs = require("./eachHourOfInterval.js");
parcelHelpers.exportAll(_eachHourOfIntervalJs, exports);
var _eachMinuteOfIntervalJs = require("./eachMinuteOfInterval.js");
parcelHelpers.exportAll(_eachMinuteOfIntervalJs, exports);
var _eachMonthOfIntervalJs = require("./eachMonthOfInterval.js");
parcelHelpers.exportAll(_eachMonthOfIntervalJs, exports);
var _eachQuarterOfIntervalJs = require("./eachQuarterOfInterval.js");
parcelHelpers.exportAll(_eachQuarterOfIntervalJs, exports);
var _eachWeekOfIntervalJs = require("./eachWeekOfInterval.js");
parcelHelpers.exportAll(_eachWeekOfIntervalJs, exports);
var _eachWeekendOfIntervalJs = require("./eachWeekendOfInterval.js");
parcelHelpers.exportAll(_eachWeekendOfIntervalJs, exports);
var _eachWeekendOfMonthJs = require("./eachWeekendOfMonth.js");
parcelHelpers.exportAll(_eachWeekendOfMonthJs, exports);
var _eachWeekendOfYearJs = require("./eachWeekendOfYear.js");
parcelHelpers.exportAll(_eachWeekendOfYearJs, exports);
var _eachYearOfIntervalJs = require("./eachYearOfInterval.js");
parcelHelpers.exportAll(_eachYearOfIntervalJs, exports);
var _endOfDayJs = require("./endOfDay.js");
parcelHelpers.exportAll(_endOfDayJs, exports);
var _endOfDecadeJs = require("./endOfDecade.js");
parcelHelpers.exportAll(_endOfDecadeJs, exports);
var _endOfHourJs = require("./endOfHour.js");
parcelHelpers.exportAll(_endOfHourJs, exports);
var _endOfISOWeekJs = require("./endOfISOWeek.js");
parcelHelpers.exportAll(_endOfISOWeekJs, exports);
var _endOfISOWeekYearJs = require("./endOfISOWeekYear.js");
parcelHelpers.exportAll(_endOfISOWeekYearJs, exports);
var _endOfMinuteJs = require("./endOfMinute.js");
parcelHelpers.exportAll(_endOfMinuteJs, exports);
var _endOfMonthJs = require("./endOfMonth.js");
parcelHelpers.exportAll(_endOfMonthJs, exports);
var _endOfQuarterJs = require("./endOfQuarter.js");
parcelHelpers.exportAll(_endOfQuarterJs, exports);
var _endOfSecondJs = require("./endOfSecond.js");
parcelHelpers.exportAll(_endOfSecondJs, exports);
var _endOfTodayJs = require("./endOfToday.js");
parcelHelpers.exportAll(_endOfTodayJs, exports);
var _endOfTomorrowJs = require("./endOfTomorrow.js");
parcelHelpers.exportAll(_endOfTomorrowJs, exports);
var _endOfWeekJs = require("./endOfWeek.js");
parcelHelpers.exportAll(_endOfWeekJs, exports);
var _endOfYearJs = require("./endOfYear.js");
parcelHelpers.exportAll(_endOfYearJs, exports);
var _endOfYesterdayJs = require("./endOfYesterday.js");
parcelHelpers.exportAll(_endOfYesterdayJs, exports);
var _formatJs = require("./format.js");
parcelHelpers.exportAll(_formatJs, exports);
var _formatDistanceJs = require("./formatDistance.js");
parcelHelpers.exportAll(_formatDistanceJs, exports);
var _formatDistanceStrictJs = require("./formatDistanceStrict.js");
parcelHelpers.exportAll(_formatDistanceStrictJs, exports);
var _formatDistanceToNowJs = require("./formatDistanceToNow.js");
parcelHelpers.exportAll(_formatDistanceToNowJs, exports);
var _formatDistanceToNowStrictJs = require("./formatDistanceToNowStrict.js");
parcelHelpers.exportAll(_formatDistanceToNowStrictJs, exports);
var _formatDurationJs = require("./formatDuration.js");
parcelHelpers.exportAll(_formatDurationJs, exports);
var _formatISOJs = require("./formatISO.js");
parcelHelpers.exportAll(_formatISOJs, exports);
var _formatISO9075Js = require("./formatISO9075.js");
parcelHelpers.exportAll(_formatISO9075Js, exports);
var _formatISODurationJs = require("./formatISODuration.js");
parcelHelpers.exportAll(_formatISODurationJs, exports);
var _formatRFC3339Js = require("./formatRFC3339.js");
parcelHelpers.exportAll(_formatRFC3339Js, exports);
var _formatRFC7231Js = require("./formatRFC7231.js");
parcelHelpers.exportAll(_formatRFC7231Js, exports);
var _formatRelativeJs = require("./formatRelative.js");
parcelHelpers.exportAll(_formatRelativeJs, exports);
var _fromUnixTimeJs = require("./fromUnixTime.js");
parcelHelpers.exportAll(_fromUnixTimeJs, exports);
var _getDateJs = require("./getDate.js");
parcelHelpers.exportAll(_getDateJs, exports);
var _getDayJs = require("./getDay.js");
parcelHelpers.exportAll(_getDayJs, exports);
var _getDayOfYearJs = require("./getDayOfYear.js");
parcelHelpers.exportAll(_getDayOfYearJs, exports);
var _getDaysInMonthJs = require("./getDaysInMonth.js");
parcelHelpers.exportAll(_getDaysInMonthJs, exports);
var _getDaysInYearJs = require("./getDaysInYear.js");
parcelHelpers.exportAll(_getDaysInYearJs, exports);
var _getDecadeJs = require("./getDecade.js");
parcelHelpers.exportAll(_getDecadeJs, exports);
var _getDefaultOptionsJs = require("./getDefaultOptions.js");
parcelHelpers.exportAll(_getDefaultOptionsJs, exports);
var _getHoursJs = require("./getHours.js");
parcelHelpers.exportAll(_getHoursJs, exports);
var _getISODayJs = require("./getISODay.js");
parcelHelpers.exportAll(_getISODayJs, exports);
var _getISOWeekJs = require("./getISOWeek.js");
parcelHelpers.exportAll(_getISOWeekJs, exports);
var _getISOWeekYearJs = require("./getISOWeekYear.js");
parcelHelpers.exportAll(_getISOWeekYearJs, exports);
var _getISOWeeksInYearJs = require("./getISOWeeksInYear.js");
parcelHelpers.exportAll(_getISOWeeksInYearJs, exports);
var _getMillisecondsJs = require("./getMilliseconds.js");
parcelHelpers.exportAll(_getMillisecondsJs, exports);
var _getMinutesJs = require("./getMinutes.js");
parcelHelpers.exportAll(_getMinutesJs, exports);
var _getMonthJs = require("./getMonth.js");
parcelHelpers.exportAll(_getMonthJs, exports);
var _getOverlappingDaysInIntervalsJs = require("./getOverlappingDaysInIntervals.js");
parcelHelpers.exportAll(_getOverlappingDaysInIntervalsJs, exports);
var _getQuarterJs = require("./getQuarter.js");
parcelHelpers.exportAll(_getQuarterJs, exports);
var _getSecondsJs = require("./getSeconds.js");
parcelHelpers.exportAll(_getSecondsJs, exports);
var _getTimeJs = require("./getTime.js");
parcelHelpers.exportAll(_getTimeJs, exports);
var _getUnixTimeJs = require("./getUnixTime.js");
parcelHelpers.exportAll(_getUnixTimeJs, exports);
var _getWeekJs = require("./getWeek.js");
parcelHelpers.exportAll(_getWeekJs, exports);
var _getWeekOfMonthJs = require("./getWeekOfMonth.js");
parcelHelpers.exportAll(_getWeekOfMonthJs, exports);
var _getWeekYearJs = require("./getWeekYear.js");
parcelHelpers.exportAll(_getWeekYearJs, exports);
var _getWeeksInMonthJs = require("./getWeeksInMonth.js");
parcelHelpers.exportAll(_getWeeksInMonthJs, exports);
var _getYearJs = require("./getYear.js");
parcelHelpers.exportAll(_getYearJs, exports);
var _hoursToMillisecondsJs = require("./hoursToMilliseconds.js");
parcelHelpers.exportAll(_hoursToMillisecondsJs, exports);
var _hoursToMinutesJs = require("./hoursToMinutes.js");
parcelHelpers.exportAll(_hoursToMinutesJs, exports);
var _hoursToSecondsJs = require("./hoursToSeconds.js");
parcelHelpers.exportAll(_hoursToSecondsJs, exports);
var _intervalJs = require("./interval.js");
parcelHelpers.exportAll(_intervalJs, exports);
var _intervalToDurationJs = require("./intervalToDuration.js");
parcelHelpers.exportAll(_intervalToDurationJs, exports);
var _intlFormatJs = require("./intlFormat.js");
parcelHelpers.exportAll(_intlFormatJs, exports);
var _intlFormatDistanceJs = require("./intlFormatDistance.js");
parcelHelpers.exportAll(_intlFormatDistanceJs, exports);
var _isAfterJs = require("./isAfter.js");
parcelHelpers.exportAll(_isAfterJs, exports);
var _isBeforeJs = require("./isBefore.js");
parcelHelpers.exportAll(_isBeforeJs, exports);
var _isDateJs = require("./isDate.js");
parcelHelpers.exportAll(_isDateJs, exports);
var _isEqualJs = require("./isEqual.js");
parcelHelpers.exportAll(_isEqualJs, exports);
var _isExistsJs = require("./isExists.js");
parcelHelpers.exportAll(_isExistsJs, exports);
var _isFirstDayOfMonthJs = require("./isFirstDayOfMonth.js");
parcelHelpers.exportAll(_isFirstDayOfMonthJs, exports);
var _isFridayJs = require("./isFriday.js");
parcelHelpers.exportAll(_isFridayJs, exports);
var _isFutureJs = require("./isFuture.js");
parcelHelpers.exportAll(_isFutureJs, exports);
var _isLastDayOfMonthJs = require("./isLastDayOfMonth.js");
parcelHelpers.exportAll(_isLastDayOfMonthJs, exports);
var _isLeapYearJs = require("./isLeapYear.js");
parcelHelpers.exportAll(_isLeapYearJs, exports);
var _isMatchJs = require("./isMatch.js");
parcelHelpers.exportAll(_isMatchJs, exports);
var _isMondayJs = require("./isMonday.js");
parcelHelpers.exportAll(_isMondayJs, exports);
var _isPastJs = require("./isPast.js");
parcelHelpers.exportAll(_isPastJs, exports);
var _isSameDayJs = require("./isSameDay.js");
parcelHelpers.exportAll(_isSameDayJs, exports);
var _isSameHourJs = require("./isSameHour.js");
parcelHelpers.exportAll(_isSameHourJs, exports);
var _isSameISOWeekJs = require("./isSameISOWeek.js");
parcelHelpers.exportAll(_isSameISOWeekJs, exports);
var _isSameISOWeekYearJs = require("./isSameISOWeekYear.js");
parcelHelpers.exportAll(_isSameISOWeekYearJs, exports);
var _isSameMinuteJs = require("./isSameMinute.js");
parcelHelpers.exportAll(_isSameMinuteJs, exports);
var _isSameMonthJs = require("./isSameMonth.js");
parcelHelpers.exportAll(_isSameMonthJs, exports);
var _isSameQuarterJs = require("./isSameQuarter.js");
parcelHelpers.exportAll(_isSameQuarterJs, exports);
var _isSameSecondJs = require("./isSameSecond.js");
parcelHelpers.exportAll(_isSameSecondJs, exports);
var _isSameWeekJs = require("./isSameWeek.js");
parcelHelpers.exportAll(_isSameWeekJs, exports);
var _isSameYearJs = require("./isSameYear.js");
parcelHelpers.exportAll(_isSameYearJs, exports);
var _isSaturdayJs = require("./isSaturday.js");
parcelHelpers.exportAll(_isSaturdayJs, exports);
var _isSundayJs = require("./isSunday.js");
parcelHelpers.exportAll(_isSundayJs, exports);
var _isThisHourJs = require("./isThisHour.js");
parcelHelpers.exportAll(_isThisHourJs, exports);
var _isThisISOWeekJs = require("./isThisISOWeek.js");
parcelHelpers.exportAll(_isThisISOWeekJs, exports);
var _isThisMinuteJs = require("./isThisMinute.js");
parcelHelpers.exportAll(_isThisMinuteJs, exports);
var _isThisMonthJs = require("./isThisMonth.js");
parcelHelpers.exportAll(_isThisMonthJs, exports);
var _isThisQuarterJs = require("./isThisQuarter.js");
parcelHelpers.exportAll(_isThisQuarterJs, exports);
var _isThisSecondJs = require("./isThisSecond.js");
parcelHelpers.exportAll(_isThisSecondJs, exports);
var _isThisWeekJs = require("./isThisWeek.js");
parcelHelpers.exportAll(_isThisWeekJs, exports);
var _isThisYearJs = require("./isThisYear.js");
parcelHelpers.exportAll(_isThisYearJs, exports);
var _isThursdayJs = require("./isThursday.js");
parcelHelpers.exportAll(_isThursdayJs, exports);
var _isTodayJs = require("./isToday.js");
parcelHelpers.exportAll(_isTodayJs, exports);
var _isTomorrowJs = require("./isTomorrow.js");
parcelHelpers.exportAll(_isTomorrowJs, exports);
var _isTuesdayJs = require("./isTuesday.js");
parcelHelpers.exportAll(_isTuesdayJs, exports);
var _isValidJs = require("./isValid.js");
parcelHelpers.exportAll(_isValidJs, exports);
var _isWednesdayJs = require("./isWednesday.js");
parcelHelpers.exportAll(_isWednesdayJs, exports);
var _isWeekendJs = require("./isWeekend.js");
parcelHelpers.exportAll(_isWeekendJs, exports);
var _isWithinIntervalJs = require("./isWithinInterval.js");
parcelHelpers.exportAll(_isWithinIntervalJs, exports);
var _isYesterdayJs = require("./isYesterday.js");
parcelHelpers.exportAll(_isYesterdayJs, exports);
var _lastDayOfDecadeJs = require("./lastDayOfDecade.js");
parcelHelpers.exportAll(_lastDayOfDecadeJs, exports);
var _lastDayOfISOWeekJs = require("./lastDayOfISOWeek.js");
parcelHelpers.exportAll(_lastDayOfISOWeekJs, exports);
var _lastDayOfISOWeekYearJs = require("./lastDayOfISOWeekYear.js");
parcelHelpers.exportAll(_lastDayOfISOWeekYearJs, exports);
var _lastDayOfMonthJs = require("./lastDayOfMonth.js");
parcelHelpers.exportAll(_lastDayOfMonthJs, exports);
var _lastDayOfQuarterJs = require("./lastDayOfQuarter.js");
parcelHelpers.exportAll(_lastDayOfQuarterJs, exports);
var _lastDayOfWeekJs = require("./lastDayOfWeek.js");
parcelHelpers.exportAll(_lastDayOfWeekJs, exports);
var _lastDayOfYearJs = require("./lastDayOfYear.js");
parcelHelpers.exportAll(_lastDayOfYearJs, exports);
var _lightFormatJs = require("./lightFormat.js");
parcelHelpers.exportAll(_lightFormatJs, exports);
var _maxJs = require("./max.js");
parcelHelpers.exportAll(_maxJs, exports);
var _millisecondsJs = require("./milliseconds.js");
parcelHelpers.exportAll(_millisecondsJs, exports);
var _millisecondsToHoursJs = require("./millisecondsToHours.js");
parcelHelpers.exportAll(_millisecondsToHoursJs, exports);
var _millisecondsToMinutesJs = require("./millisecondsToMinutes.js");
parcelHelpers.exportAll(_millisecondsToMinutesJs, exports);
var _millisecondsToSecondsJs = require("./millisecondsToSeconds.js");
parcelHelpers.exportAll(_millisecondsToSecondsJs, exports);
var _minJs = require("./min.js");
parcelHelpers.exportAll(_minJs, exports);
var _minutesToHoursJs = require("./minutesToHours.js");
parcelHelpers.exportAll(_minutesToHoursJs, exports);
var _minutesToMillisecondsJs = require("./minutesToMilliseconds.js");
parcelHelpers.exportAll(_minutesToMillisecondsJs, exports);
var _minutesToSecondsJs = require("./minutesToSeconds.js");
parcelHelpers.exportAll(_minutesToSecondsJs, exports);
var _monthsToQuartersJs = require("./monthsToQuarters.js");
parcelHelpers.exportAll(_monthsToQuartersJs, exports);
var _monthsToYearsJs = require("./monthsToYears.js");
parcelHelpers.exportAll(_monthsToYearsJs, exports);
var _nextDayJs = require("./nextDay.js");
parcelHelpers.exportAll(_nextDayJs, exports);
var _nextFridayJs = require("./nextFriday.js");
parcelHelpers.exportAll(_nextFridayJs, exports);
var _nextMondayJs = require("./nextMonday.js");
parcelHelpers.exportAll(_nextMondayJs, exports);
var _nextSaturdayJs = require("./nextSaturday.js");
parcelHelpers.exportAll(_nextSaturdayJs, exports);
var _nextSundayJs = require("./nextSunday.js");
parcelHelpers.exportAll(_nextSundayJs, exports);
var _nextThursdayJs = require("./nextThursday.js");
parcelHelpers.exportAll(_nextThursdayJs, exports);
var _nextTuesdayJs = require("./nextTuesday.js");
parcelHelpers.exportAll(_nextTuesdayJs, exports);
var _nextWednesdayJs = require("./nextWednesday.js");
parcelHelpers.exportAll(_nextWednesdayJs, exports);
var _parseJs = require("./parse.js");
parcelHelpers.exportAll(_parseJs, exports);
var _parseISOJs = require("./parseISO.js");
parcelHelpers.exportAll(_parseISOJs, exports);
var _parseJSONJs = require("./parseJSON.js");
parcelHelpers.exportAll(_parseJSONJs, exports);
var _previousDayJs = require("./previousDay.js");
parcelHelpers.exportAll(_previousDayJs, exports);
var _previousFridayJs = require("./previousFriday.js");
parcelHelpers.exportAll(_previousFridayJs, exports);
var _previousMondayJs = require("./previousMonday.js");
parcelHelpers.exportAll(_previousMondayJs, exports);
var _previousSaturdayJs = require("./previousSaturday.js");
parcelHelpers.exportAll(_previousSaturdayJs, exports);
var _previousSundayJs = require("./previousSunday.js");
parcelHelpers.exportAll(_previousSundayJs, exports);
var _previousThursdayJs = require("./previousThursday.js");
parcelHelpers.exportAll(_previousThursdayJs, exports);
var _previousTuesdayJs = require("./previousTuesday.js");
parcelHelpers.exportAll(_previousTuesdayJs, exports);
var _previousWednesdayJs = require("./previousWednesday.js");
parcelHelpers.exportAll(_previousWednesdayJs, exports);
var _quartersToMonthsJs = require("./quartersToMonths.js");
parcelHelpers.exportAll(_quartersToMonthsJs, exports);
var _quartersToYearsJs = require("./quartersToYears.js");
parcelHelpers.exportAll(_quartersToYearsJs, exports);
var _roundToNearestHoursJs = require("./roundToNearestHours.js");
parcelHelpers.exportAll(_roundToNearestHoursJs, exports);
var _roundToNearestMinutesJs = require("./roundToNearestMinutes.js");
parcelHelpers.exportAll(_roundToNearestMinutesJs, exports);
var _secondsToHoursJs = require("./secondsToHours.js");
parcelHelpers.exportAll(_secondsToHoursJs, exports);
var _secondsToMillisecondsJs = require("./secondsToMilliseconds.js");
parcelHelpers.exportAll(_secondsToMillisecondsJs, exports);
var _secondsToMinutesJs = require("./secondsToMinutes.js");
parcelHelpers.exportAll(_secondsToMinutesJs, exports);
var _setJs = require("./set.js");
parcelHelpers.exportAll(_setJs, exports);
var _setDateJs = require("./setDate.js");
parcelHelpers.exportAll(_setDateJs, exports);
var _setDayJs = require("./setDay.js");
parcelHelpers.exportAll(_setDayJs, exports);
var _setDayOfYearJs = require("./setDayOfYear.js");
parcelHelpers.exportAll(_setDayOfYearJs, exports);
var _setDefaultOptionsJs = require("./setDefaultOptions.js");
parcelHelpers.exportAll(_setDefaultOptionsJs, exports);
var _setHoursJs = require("./setHours.js");
parcelHelpers.exportAll(_setHoursJs, exports);
var _setISODayJs = require("./setISODay.js");
parcelHelpers.exportAll(_setISODayJs, exports);
var _setISOWeekJs = require("./setISOWeek.js");
parcelHelpers.exportAll(_setISOWeekJs, exports);
var _setISOWeekYearJs = require("./setISOWeekYear.js");
parcelHelpers.exportAll(_setISOWeekYearJs, exports);
var _setMillisecondsJs = require("./setMilliseconds.js");
parcelHelpers.exportAll(_setMillisecondsJs, exports);
var _setMinutesJs = require("./setMinutes.js");
parcelHelpers.exportAll(_setMinutesJs, exports);
var _setMonthJs = require("./setMonth.js");
parcelHelpers.exportAll(_setMonthJs, exports);
var _setQuarterJs = require("./setQuarter.js");
parcelHelpers.exportAll(_setQuarterJs, exports);
var _setSecondsJs = require("./setSeconds.js");
parcelHelpers.exportAll(_setSecondsJs, exports);
var _setWeekJs = require("./setWeek.js");
parcelHelpers.exportAll(_setWeekJs, exports);
var _setWeekYearJs = require("./setWeekYear.js");
parcelHelpers.exportAll(_setWeekYearJs, exports);
var _setYearJs = require("./setYear.js");
parcelHelpers.exportAll(_setYearJs, exports);
var _startOfDayJs = require("./startOfDay.js");
parcelHelpers.exportAll(_startOfDayJs, exports);
var _startOfDecadeJs = require("./startOfDecade.js");
parcelHelpers.exportAll(_startOfDecadeJs, exports);
var _startOfHourJs = require("./startOfHour.js");
parcelHelpers.exportAll(_startOfHourJs, exports);
var _startOfISOWeekJs = require("./startOfISOWeek.js");
parcelHelpers.exportAll(_startOfISOWeekJs, exports);
var _startOfISOWeekYearJs = require("./startOfISOWeekYear.js");
parcelHelpers.exportAll(_startOfISOWeekYearJs, exports);
var _startOfMinuteJs = require("./startOfMinute.js");
parcelHelpers.exportAll(_startOfMinuteJs, exports);
var _startOfMonthJs = require("./startOfMonth.js");
parcelHelpers.exportAll(_startOfMonthJs, exports);
var _startOfQuarterJs = require("./startOfQuarter.js");
parcelHelpers.exportAll(_startOfQuarterJs, exports);
var _startOfSecondJs = require("./startOfSecond.js");
parcelHelpers.exportAll(_startOfSecondJs, exports);
var _startOfTodayJs = require("./startOfToday.js");
parcelHelpers.exportAll(_startOfTodayJs, exports);
var _startOfTomorrowJs = require("./startOfTomorrow.js");
parcelHelpers.exportAll(_startOfTomorrowJs, exports);
var _startOfWeekJs = require("./startOfWeek.js");
parcelHelpers.exportAll(_startOfWeekJs, exports);
var _startOfWeekYearJs = require("./startOfWeekYear.js");
parcelHelpers.exportAll(_startOfWeekYearJs, exports);
var _startOfYearJs = require("./startOfYear.js");
parcelHelpers.exportAll(_startOfYearJs, exports);
var _startOfYesterdayJs = require("./startOfYesterday.js");
parcelHelpers.exportAll(_startOfYesterdayJs, exports);
var _subJs = require("./sub.js");
parcelHelpers.exportAll(_subJs, exports);
var _subBusinessDaysJs = require("./subBusinessDays.js");
parcelHelpers.exportAll(_subBusinessDaysJs, exports);
var _subDaysJs = require("./subDays.js");
parcelHelpers.exportAll(_subDaysJs, exports);
var _subHoursJs = require("./subHours.js");
parcelHelpers.exportAll(_subHoursJs, exports);
var _subISOWeekYearsJs = require("./subISOWeekYears.js");
parcelHelpers.exportAll(_subISOWeekYearsJs, exports);
var _subMillisecondsJs = require("./subMilliseconds.js");
parcelHelpers.exportAll(_subMillisecondsJs, exports);
var _subMinutesJs = require("./subMinutes.js");
parcelHelpers.exportAll(_subMinutesJs, exports);
var _subMonthsJs = require("./subMonths.js");
parcelHelpers.exportAll(_subMonthsJs, exports);
var _subQuartersJs = require("./subQuarters.js");
parcelHelpers.exportAll(_subQuartersJs, exports);
var _subSecondsJs = require("./subSeconds.js");
parcelHelpers.exportAll(_subSecondsJs, exports);
var _subWeeksJs = require("./subWeeks.js");
parcelHelpers.exportAll(_subWeeksJs, exports);
var _subYearsJs = require("./subYears.js");
parcelHelpers.exportAll(_subYearsJs, exports);
var _toDateJs = require("./toDate.js");
parcelHelpers.exportAll(_toDateJs, exports);
var _transposeJs = require("./transpose.js");
parcelHelpers.exportAll(_transposeJs, exports);
var _weeksToDaysJs = require("./weeksToDays.js");
parcelHelpers.exportAll(_weeksToDaysJs, exports);
var _yearsToDaysJs = require("./yearsToDays.js");
parcelHelpers.exportAll(_yearsToDaysJs, exports);
var _yearsToMonthsJs = require("./yearsToMonths.js");
parcelHelpers.exportAll(_yearsToMonthsJs, exports);
var _yearsToQuartersJs = require("./yearsToQuarters.js");
parcelHelpers.exportAll(_yearsToQuartersJs, exports);

},{"./add.js":false,"./addBusinessDays.js":false,"./addDays.js":false,"./addHours.js":false,"./addISOWeekYears.js":false,"./addMilliseconds.js":false,"./addMinutes.js":false,"./addMonths.js":false,"./addQuarters.js":false,"./addSeconds.js":false,"./addWeeks.js":false,"./addYears.js":false,"./areIntervalsOverlapping.js":false,"./clamp.js":false,"./closestIndexTo.js":false,"./closestTo.js":false,"./compareAsc.js":false,"./compareDesc.js":false,"./constructFrom.js":false,"./constructNow.js":false,"./daysToWeeks.js":false,"./differenceInBusinessDays.js":false,"./differenceInCalendarDays.js":false,"./differenceInCalendarISOWeekYears.js":false,"./differenceInCalendarISOWeeks.js":false,"./differenceInCalendarMonths.js":false,"./differenceInCalendarQuarters.js":false,"./differenceInCalendarWeeks.js":false,"./differenceInCalendarYears.js":false,"./differenceInDays.js":false,"./differenceInHours.js":false,"./differenceInISOWeekYears.js":false,"./differenceInMilliseconds.js":false,"./differenceInMinutes.js":false,"./differenceInMonths.js":false,"./differenceInQuarters.js":false,"./differenceInSeconds.js":false,"./differenceInWeeks.js":false,"./differenceInYears.js":false,"./eachDayOfInterval.js":false,"./eachHourOfInterval.js":false,"./eachMinuteOfInterval.js":false,"./eachMonthOfInterval.js":false,"./eachQuarterOfInterval.js":false,"./eachWeekOfInterval.js":false,"./eachWeekendOfInterval.js":false,"./eachWeekendOfMonth.js":false,"./eachWeekendOfYear.js":false,"./eachYearOfInterval.js":false,"./endOfDay.js":false,"./endOfDecade.js":false,"./endOfHour.js":false,"./endOfISOWeek.js":false,"./endOfISOWeekYear.js":false,"./endOfMinute.js":false,"./endOfMonth.js":false,"./endOfQuarter.js":false,"./endOfSecond.js":false,"./endOfToday.js":false,"./endOfTomorrow.js":false,"./endOfWeek.js":false,"./endOfYear.js":false,"./endOfYesterday.js":false,"./format.js":false,"./formatDistance.js":false,"./formatDistanceStrict.js":false,"./formatDistanceToNow.js":"26R3c","./formatDistanceToNowStrict.js":false,"./formatDuration.js":false,"./formatISO.js":false,"./formatISO9075.js":false,"./formatISODuration.js":false,"./formatRFC3339.js":false,"./formatRFC7231.js":false,"./formatRelative.js":false,"./fromUnixTime.js":false,"./getDate.js":false,"./getDay.js":false,"./getDayOfYear.js":false,"./getDaysInMonth.js":false,"./getDaysInYear.js":false,"./getDecade.js":false,"./getDefaultOptions.js":false,"./getHours.js":false,"./getISODay.js":false,"./getISOWeek.js":false,"./getISOWeekYear.js":false,"./getISOWeeksInYear.js":false,"./getMilliseconds.js":false,"./getMinutes.js":false,"./getMonth.js":false,"./getOverlappingDaysInIntervals.js":false,"./getQuarter.js":false,"./getSeconds.js":false,"./getTime.js":false,"./getUnixTime.js":false,"./getWeek.js":false,"./getWeekOfMonth.js":false,"./getWeekYear.js":false,"./getWeeksInMonth.js":false,"./getYear.js":false,"./hoursToMilliseconds.js":false,"./hoursToMinutes.js":false,"./hoursToSeconds.js":false,"./interval.js":false,"./intervalToDuration.js":false,"./intlFormat.js":false,"./intlFormatDistance.js":false,"./isAfter.js":false,"./isBefore.js":false,"./isDate.js":false,"./isEqual.js":false,"./isExists.js":false,"./isFirstDayOfMonth.js":false,"./isFriday.js":false,"./isFuture.js":false,"./isLastDayOfMonth.js":false,"./isLeapYear.js":false,"./isMatch.js":false,"./isMonday.js":false,"./isPast.js":false,"./isSameDay.js":false,"./isSameHour.js":false,"./isSameISOWeek.js":false,"./isSameISOWeekYear.js":false,"./isSameMinute.js":false,"./isSameMonth.js":false,"./isSameQuarter.js":false,"./isSameSecond.js":false,"./isSameWeek.js":false,"./isSameYear.js":false,"./isSaturday.js":false,"./isSunday.js":false,"./isThisHour.js":false,"./isThisISOWeek.js":false,"./isThisMinute.js":false,"./isThisMonth.js":false,"./isThisQuarter.js":false,"./isThisSecond.js":false,"./isThisWeek.js":false,"./isThisYear.js":false,"./isThursday.js":false,"./isToday.js":false,"./isTomorrow.js":false,"./isTuesday.js":false,"./isValid.js":false,"./isWednesday.js":false,"./isWeekend.js":false,"./isWithinInterval.js":false,"./isYesterday.js":false,"./lastDayOfDecade.js":false,"./lastDayOfISOWeek.js":false,"./lastDayOfISOWeekYear.js":false,"./lastDayOfMonth.js":false,"./lastDayOfQuarter.js":false,"./lastDayOfWeek.js":false,"./lastDayOfYear.js":false,"./lightFormat.js":false,"./max.js":false,"./milliseconds.js":false,"./millisecondsToHours.js":false,"./millisecondsToMinutes.js":false,"./millisecondsToSeconds.js":false,"./min.js":false,"./minutesToHours.js":false,"./minutesToMilliseconds.js":false,"./minutesToSeconds.js":false,"./monthsToQuarters.js":false,"./monthsToYears.js":false,"./nextDay.js":false,"./nextFriday.js":false,"./nextMonday.js":false,"./nextSaturday.js":false,"./nextSunday.js":false,"./nextThursday.js":false,"./nextTuesday.js":false,"./nextWednesday.js":false,"./parse.js":false,"./parseISO.js":false,"./parseJSON.js":false,"./previousDay.js":false,"./previousFriday.js":false,"./previousMonday.js":false,"./previousSaturday.js":false,"./previousSunday.js":false,"./previousThursday.js":false,"./previousTuesday.js":false,"./previousWednesday.js":false,"./quartersToMonths.js":false,"./quartersToYears.js":false,"./roundToNearestHours.js":false,"./roundToNearestMinutes.js":false,"./secondsToHours.js":false,"./secondsToMilliseconds.js":false,"./secondsToMinutes.js":false,"./set.js":false,"./setDate.js":false,"./setDay.js":false,"./setDayOfYear.js":false,"./setDefaultOptions.js":false,"./setHours.js":false,"./setISODay.js":false,"./setISOWeek.js":false,"./setISOWeekYear.js":false,"./setMilliseconds.js":false,"./setMinutes.js":false,"./setMonth.js":false,"./setQuarter.js":false,"./setSeconds.js":false,"./setWeek.js":false,"./setWeekYear.js":false,"./setYear.js":false,"./startOfDay.js":false,"./startOfDecade.js":false,"./startOfHour.js":false,"./startOfISOWeek.js":false,"./startOfISOWeekYear.js":false,"./startOfMinute.js":false,"./startOfMonth.js":false,"./startOfQuarter.js":false,"./startOfSecond.js":false,"./startOfToday.js":false,"./startOfTomorrow.js":false,"./startOfWeek.js":false,"./startOfWeekYear.js":false,"./startOfYear.js":false,"./startOfYesterday.js":false,"./sub.js":false,"./subBusinessDays.js":false,"./subDays.js":false,"./subHours.js":false,"./subISOWeekYears.js":false,"./subMilliseconds.js":false,"./subMinutes.js":false,"./subMonths.js":false,"./subQuarters.js":false,"./subSeconds.js":false,"./subWeeks.js":false,"./subYears.js":false,"./toDate.js":false,"./transpose.js":false,"./weeksToDays.js":false,"./yearsToDays.js":false,"./yearsToMonths.js":false,"./yearsToQuarters.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"c2cgG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param dateLeft - The first date to compare
 * @param dateRight - The second date to compare
 *
 * @returns The result of the comparison
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */ parcelHelpers.export(exports, "compareAsc", ()=>compareAsc);
var _toDateJs = require("./toDate.js");
function compareAsc(dateLeft, dateRight) {
    const diff = +(0, _toDateJs.toDate)(dateLeft) - +(0, _toDateJs.toDate)(dateRight);
    if (diff < 0) return -1;
    else if (diff > 0) return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
    return diff;
}
// Fallback for modularized imports:
exports.default = compareAsc;

},{"./toDate.js":"5dMgD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5dMgD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * Starting from v3.7.0, it clones a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */ parcelHelpers.export(exports, "toDate", ()=>toDate);
var _constructFromJs = require("./constructFrom.js");
function toDate(argument, context) {
    // [TODO] Get rid of `toDate` or `constructFrom`?
    return (0, _constructFromJs.constructFrom)(context || argument, argument);
}
// Fallback for modularized imports:
exports.default = toDate;

},{"./constructFrom.js":"la42H","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"la42H":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * Starting from v3.7.0, it allows to construct a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from "./constructFrom/date-fns";
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date>(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use constructor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   );
 * }
 */ parcelHelpers.export(exports, "constructFrom", ()=>constructFrom);
var _constantsJs = require("./constants.js");
function constructFrom(date, value) {
    if (typeof date === "function") return date(value);
    if (date && typeof date === "object" && (0, _constantsJs.constructFromSymbol) in date) return date[0, _constantsJs.constructFromSymbol](value);
    if (date instanceof Date) return new date.constructor(value);
    return new Date(value);
}
// Fallback for modularized imports:
exports.default = constructFrom;

},{"./constants.js":"9oulg","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9oulg":[function(require,module,exports,__globalThis) {
/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */ /**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "daysInWeek", ()=>daysInWeek);
parcelHelpers.export(exports, "daysInYear", ()=>daysInYear);
parcelHelpers.export(exports, "maxTime", ()=>maxTime);
parcelHelpers.export(exports, "minTime", ()=>minTime);
parcelHelpers.export(exports, "millisecondsInWeek", ()=>millisecondsInWeek);
parcelHelpers.export(exports, "millisecondsInDay", ()=>millisecondsInDay);
parcelHelpers.export(exports, "millisecondsInMinute", ()=>millisecondsInMinute);
parcelHelpers.export(exports, "millisecondsInHour", ()=>millisecondsInHour);
parcelHelpers.export(exports, "millisecondsInSecond", ()=>millisecondsInSecond);
parcelHelpers.export(exports, "minutesInYear", ()=>minutesInYear);
parcelHelpers.export(exports, "minutesInMonth", ()=>minutesInMonth);
parcelHelpers.export(exports, "minutesInDay", ()=>minutesInDay);
parcelHelpers.export(exports, "minutesInHour", ()=>minutesInHour);
parcelHelpers.export(exports, "monthsInQuarter", ()=>monthsInQuarter);
parcelHelpers.export(exports, "monthsInYear", ()=>monthsInYear);
parcelHelpers.export(exports, "quartersInYear", ()=>quartersInYear);
parcelHelpers.export(exports, "secondsInHour", ()=>secondsInHour);
parcelHelpers.export(exports, "secondsInMinute", ()=>secondsInMinute);
parcelHelpers.export(exports, "secondsInDay", ()=>secondsInDay);
parcelHelpers.export(exports, "secondsInWeek", ()=>secondsInWeek);
parcelHelpers.export(exports, "secondsInYear", ()=>secondsInYear);
parcelHelpers.export(exports, "secondsInMonth", ()=>secondsInMonth);
parcelHelpers.export(exports, "secondsInQuarter", ()=>secondsInQuarter);
parcelHelpers.export(exports, "constructFromSymbol", ()=>constructFromSymbol);
const daysInWeek = 7;
const daysInYear = 365.2425;
const maxTime = Math.pow(10, 8) * 86400000;
const minTime = -maxTime;
const millisecondsInWeek = 604800000;
const millisecondsInDay = 86400000;
const millisecondsInMinute = 60000;
const millisecondsInHour = 3600000;
const millisecondsInSecond = 1000;
const minutesInYear = 525600;
const minutesInMonth = 43200;
const minutesInDay = 1440;
const minutesInHour = 60;
const monthsInQuarter = 3;
const monthsInYear = 12;
const quartersInYear = 4;
const secondsInHour = 3600;
const secondsInMinute = 60;
const secondsInDay = secondsInHour * 24;
const secondsInWeek = secondsInDay * 7;
const secondsInYear = secondsInDay * daysInYear;
const secondsInMonth = secondsInYear / 12;
const secondsInQuarter = secondsInMonth * 3;
const constructFromSymbol = Symbol.for("constructDateFrom");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4dBc3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name constructNow
 * @category Generic Helpers
 * @summary Constructs a new current date using the passed value constructor.
 * @pure false
 *
 * @description
 * The function constructs a new current date using the constructor from
 * the reference date. It helps to build generic functions that accept date
 * extensions and use the current date.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * @param date - The reference date to take constructor from
 *
 * @returns Current date initialized using the given date constructor
 *
 * @example
 * import { constructNow, isSameDay } from 'date-fns'
 *
 * function isToday<DateType extends Date>(
 *   date: DateArg<DateType>,
 * ): boolean {
 *   // If we were to use `new Date()` directly, the function would  behave
 *   // differently in different timezones and return false for the same date.
 *   return isSameDay(date, constructNow(date));
 * }
 */ parcelHelpers.export(exports, "constructNow", ()=>constructNow);
var _constructFromJs = require("./constructFrom.js");
function constructNow(date) {
    return (0, _constructFromJs.constructFrom)(date, Date.now());
}
// Fallback for modularized imports:
exports.default = constructNow;

},{"./constructFrom.js":"la42H","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3Rsrh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link differenceInCalendarMonths} function options.
 */ /**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of calendar months
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */ parcelHelpers.export(exports, "differenceInCalendarMonths", ()=>differenceInCalendarMonths);
var _normalizeDatesJs = require("./_lib/normalizeDates.js");
function differenceInCalendarMonths(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = (0, _normalizeDatesJs.normalizeDates)(options?.in, laterDate, earlierDate);
    const yearsDiff = laterDate_.getFullYear() - earlierDate_.getFullYear();
    const monthsDiff = laterDate_.getMonth() - earlierDate_.getMonth();
    return yearsDiff * 12 + monthsDiff;
}
// Fallback for modularized imports:
exports.default = differenceInCalendarMonths;

},{"./_lib/normalizeDates.js":"grsPk","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"grsPk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "normalizeDates", ()=>normalizeDates);
var _constructFromJs = require("../constructFrom.js");
function normalizeDates(context, ...dates) {
    const normalize = (0, _constructFromJs.constructFrom).bind(null, context || dates.find((date)=>typeof date === "object"));
    return dates.map(normalize);
}

},{"../constructFrom.js":"la42H","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9FE3J":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 *
 * @returns The number of milliseconds
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * const result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */ parcelHelpers.export(exports, "differenceInMilliseconds", ()=>differenceInMilliseconds);
var _toDateJs = require("./toDate.js");
function differenceInMilliseconds(laterDate, earlierDate) {
    return +(0, _toDateJs.toDate)(laterDate) - +(0, _toDateJs.toDate)(earlierDate);
}
// Fallback for modularized imports:
exports.default = differenceInMilliseconds;

},{"./toDate.js":"5dMgD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"40yVE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link differenceInMonths} function options.
 */ /**
 * @name differenceInMonths
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of full months
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
 * //=> 7
 */ parcelHelpers.export(exports, "differenceInMonths", ()=>differenceInMonths);
var _normalizeDatesJs = require("./_lib/normalizeDates.js");
var _compareAscJs = require("./compareAsc.js");
var _differenceInCalendarMonthsJs = require("./differenceInCalendarMonths.js");
var _isLastDayOfMonthJs = require("./isLastDayOfMonth.js");
function differenceInMonths(laterDate, earlierDate, options) {
    const [laterDate_, workingLaterDate, earlierDate_] = (0, _normalizeDatesJs.normalizeDates)(options?.in, laterDate, laterDate, earlierDate);
    const sign = (0, _compareAscJs.compareAsc)(workingLaterDate, earlierDate_);
    const difference = Math.abs((0, _differenceInCalendarMonthsJs.differenceInCalendarMonths)(workingLaterDate, earlierDate_));
    if (difference < 1) return 0;
    if (workingLaterDate.getMonth() === 1 && workingLaterDate.getDate() > 27) workingLaterDate.setDate(30);
    workingLaterDate.setMonth(workingLaterDate.getMonth() - sign * difference);
    let isLastMonthNotFull = (0, _compareAscJs.compareAsc)(workingLaterDate, earlierDate_) === -sign;
    if ((0, _isLastDayOfMonthJs.isLastDayOfMonth)(laterDate_) && difference === 1 && (0, _compareAscJs.compareAsc)(laterDate_, earlierDate_) === 1) isLastMonthNotFull = false;
    const result = sign * (difference - +isLastMonthNotFull);
    return result === 0 ? 0 : result;
}
// Fallback for modularized imports:
exports.default = differenceInMonths;

},{"./_lib/normalizeDates.js":"grsPk","./compareAsc.js":"c2cgG","./differenceInCalendarMonths.js":"3Rsrh","./isLastDayOfMonth.js":"cbay7","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cbay7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name isLastDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is the last day of a month
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * const result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */ parcelHelpers.export(exports, "isLastDayOfMonth", ()=>isLastDayOfMonth);
var _endOfDayJs = require("./endOfDay.js");
var _endOfMonthJs = require("./endOfMonth.js");
var _toDateJs = require("./toDate.js");
function isLastDayOfMonth(date, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    return +(0, _endOfDayJs.endOfDay)(_date, options) === +(0, _endOfMonthJs.endOfMonth)(_date, options);
}
// Fallback for modularized imports:
exports.default = isLastDayOfMonth;

},{"./endOfDay.js":"kmh1s","./endOfMonth.js":"b8ZeH","./toDate.js":"5dMgD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kmh1s":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link endOfDay} function options.
 */ /**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a day
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */ parcelHelpers.export(exports, "endOfDay", ()=>endOfDay);
var _toDateJs = require("./toDate.js");
function endOfDay(date, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    _date.setHours(23, 59, 59, 999);
    return _date;
}
// Fallback for modularized imports:
exports.default = endOfDay;

},{"./toDate.js":"5dMgD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"b8ZeH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link endOfMonth} function options.
 */ /**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a month
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */ parcelHelpers.export(exports, "endOfMonth", ()=>endOfMonth);
var _toDateJs = require("./toDate.js");
function endOfMonth(date, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    const month = _date.getMonth();
    _date.setFullYear(_date.getFullYear(), month + 1, 0);
    _date.setHours(23, 59, 59, 999);
    return _date;
}
// Fallback for modularized imports:
exports.default = endOfMonth;

},{"./toDate.js":"5dMgD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9KEmN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link differenceInSeconds} function options.
 */ /**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of seconds
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * const result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */ parcelHelpers.export(exports, "differenceInSeconds", ()=>differenceInSeconds);
var _getRoundingMethodJs = require("./_lib/getRoundingMethod.js");
var _differenceInMillisecondsJs = require("./differenceInMilliseconds.js");
function differenceInSeconds(laterDate, earlierDate, options) {
    const diff = (0, _differenceInMillisecondsJs.differenceInMilliseconds)(laterDate, earlierDate) / 1000;
    return (0, _getRoundingMethodJs.getRoundingMethod)(options?.roundingMethod)(diff);
}
// Fallback for modularized imports:
exports.default = differenceInSeconds;

},{"./_lib/getRoundingMethod.js":"adoW8","./differenceInMilliseconds.js":"9FE3J","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"adoW8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getRoundingMethod", ()=>getRoundingMethod);
function getRoundingMethod(method) {
    return (number)=>{
        const round = method ? Math[method] : Math.trunc;
        const result = round(number);
        // Prevent negative zero
        return result === 0 ? 0 : result;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3SJtD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link formatDistance} function options.
 */ /**
 * @name formatDistance
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words.
 *
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance between dates | Result               |
 * |------------------------|----------------------|
 * | 0 secs ... 5 secs      | less than 5 seconds  |
 * | 5 secs ... 10 secs     | less than 10 seconds |
 * | 10 secs ... 20 secs    | less than 20 seconds |
 * | 20 secs ... 40 secs    | half a minute        |
 * | 40 secs ... 60 secs    | less than a minute   |
 * | 60 secs ... 90 secs    | 1 minute             |
 *
 * @param laterDate - The date
 * @param earlierDate - The date to compare with
 * @param options - An object with options
 *
 * @returns The distance in words
 *
 * @throws `date` must not be Invalid Date
 * @throws `baseDate` must not be Invalid Date
 * @throws `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * const result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00, including seconds?
 * const result = formatDistance(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 *   { includeSeconds: true }
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * const result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> 'about 1 year ago'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> 'pli ol 1 jaro'
 */ parcelHelpers.export(exports, "formatDistance", ()=>formatDistance);
var _defaultLocaleJs = require("./_lib/defaultLocale.js");
var _defaultOptionsJs = require("./_lib/defaultOptions.js");
var _getTimezoneOffsetInMillisecondsJs = require("./_lib/getTimezoneOffsetInMilliseconds.js");
var _normalizeDatesJs = require("./_lib/normalizeDates.js");
var _compareAscJs = require("./compareAsc.js");
var _constantsJs = require("./constants.js");
var _differenceInMonthsJs = require("./differenceInMonths.js");
var _differenceInSecondsJs = require("./differenceInSeconds.js");
function formatDistance(laterDate, earlierDate, options) {
    const defaultOptions = (0, _defaultOptionsJs.getDefaultOptions)();
    const locale = options?.locale ?? defaultOptions.locale ?? (0, _defaultLocaleJs.defaultLocale);
    const minutesInAlmostTwoDays = 2520;
    const comparison = (0, _compareAscJs.compareAsc)(laterDate, earlierDate);
    if (isNaN(comparison)) throw new RangeError("Invalid time value");
    const localizeOptions = Object.assign({}, options, {
        addSuffix: options?.addSuffix,
        comparison: comparison
    });
    const [laterDate_, earlierDate_] = (0, _normalizeDatesJs.normalizeDates)(options?.in, ...comparison > 0 ? [
        earlierDate,
        laterDate
    ] : [
        laterDate,
        earlierDate
    ]);
    const seconds = (0, _differenceInSecondsJs.differenceInSeconds)(earlierDate_, laterDate_);
    const offsetInSeconds = ((0, _getTimezoneOffsetInMillisecondsJs.getTimezoneOffsetInMilliseconds)(earlierDate_) - (0, _getTimezoneOffsetInMillisecondsJs.getTimezoneOffsetInMilliseconds)(laterDate_)) / 1000;
    const minutes = Math.round((seconds - offsetInSeconds) / 60);
    let months;
    // 0 up to 2 mins
    if (minutes < 2) {
        if (options?.includeSeconds) {
            if (seconds < 5) return locale.formatDistance("lessThanXSeconds", 5, localizeOptions);
            else if (seconds < 10) return locale.formatDistance("lessThanXSeconds", 10, localizeOptions);
            else if (seconds < 20) return locale.formatDistance("lessThanXSeconds", 20, localizeOptions);
            else if (seconds < 40) return locale.formatDistance("halfAMinute", 0, localizeOptions);
            else if (seconds < 60) return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
            else return locale.formatDistance("xMinutes", 1, localizeOptions);
        } else {
            if (minutes === 0) return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
            else return locale.formatDistance("xMinutes", minutes, localizeOptions);
        }
    } else if (minutes < 45) return locale.formatDistance("xMinutes", minutes, localizeOptions);
    else if (minutes < 90) return locale.formatDistance("aboutXHours", 1, localizeOptions);
    else if (minutes < (0, _constantsJs.minutesInDay)) {
        const hours = Math.round(minutes / 60);
        return locale.formatDistance("aboutXHours", hours, localizeOptions);
    // 1 day up to 1.75 days
    } else if (minutes < minutesInAlmostTwoDays) return locale.formatDistance("xDays", 1, localizeOptions);
    else if (minutes < (0, _constantsJs.minutesInMonth)) {
        const days = Math.round(minutes / (0, _constantsJs.minutesInDay));
        return locale.formatDistance("xDays", days, localizeOptions);
    // 1 month up to 2 months
    } else if (minutes < (0, _constantsJs.minutesInMonth) * 2) {
        months = Math.round(minutes / (0, _constantsJs.minutesInMonth));
        return locale.formatDistance("aboutXMonths", months, localizeOptions);
    }
    months = (0, _differenceInMonthsJs.differenceInMonths)(earlierDate_, laterDate_);
    // 2 months up to 12 months
    if (months < 12) {
        const nearestMonth = Math.round(minutes / (0, _constantsJs.minutesInMonth));
        return locale.formatDistance("xMonths", nearestMonth, localizeOptions);
    // 1 year up to max Date
    } else {
        const monthsSinceStartOfYear = months % 12;
        const years = Math.trunc(months / 12);
        // N years up to 1 years 3 months
        if (monthsSinceStartOfYear < 3) return locale.formatDistance("aboutXYears", years, localizeOptions);
        else if (monthsSinceStartOfYear < 9) return locale.formatDistance("overXYears", years, localizeOptions);
        else return locale.formatDistance("almostXYears", years + 1, localizeOptions);
    }
}
// Fallback for modularized imports:
exports.default = formatDistance;

},{"./_lib/defaultLocale.js":"3pvnM","./_lib/defaultOptions.js":"5LfG2","./_lib/getTimezoneOffsetInMilliseconds.js":"iFmyK","./_lib/normalizeDates.js":"grsPk","./compareAsc.js":"c2cgG","./constants.js":"9oulg","./differenceInMonths.js":"40yVE","./differenceInSeconds.js":"9KEmN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3pvnM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultLocale", ()=>(0, _enUSJs.enUS));
var _enUSJs = require("../locale/en-US.js");

},{"../locale/en-US.js":"ceIk5","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ceIk5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "enUS", ()=>enUS);
var _formatDistanceJs = require("./en-US/_lib/formatDistance.js");
var _formatLongJs = require("./en-US/_lib/formatLong.js");
var _formatRelativeJs = require("./en-US/_lib/formatRelative.js");
var _localizeJs = require("./en-US/_lib/localize.js");
var _matchJs = require("./en-US/_lib/match.js");
const enUS = {
    code: "en-US",
    formatDistance: (0, _formatDistanceJs.formatDistance),
    formatLong: (0, _formatLongJs.formatLong),
    formatRelative: (0, _formatRelativeJs.formatRelative),
    localize: (0, _localizeJs.localize),
    match: (0, _matchJs.match),
    options: {
        weekStartsOn: 0 /* Sunday */ ,
        firstWeekContainsDate: 1
    }
};
// Fallback for modularized imports:
exports.default = enUS;

},{"./en-US/_lib/formatDistance.js":"9wcSK","./en-US/_lib/formatLong.js":"4750s","./en-US/_lib/formatRelative.js":"9hkS1","./en-US/_lib/localize.js":"fNMBt","./en-US/_lib/match.js":"glQGS","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9wcSK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatDistance", ()=>formatDistance);
const formatDistanceLocale = {
    lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds"
    },
    xSeconds: {
        one: "1 second",
        other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes"
    },
    xMinutes: {
        one: "1 minute",
        other: "{{count}} minutes"
    },
    aboutXHours: {
        one: "about 1 hour",
        other: "about {{count}} hours"
    },
    xHours: {
        one: "1 hour",
        other: "{{count}} hours"
    },
    xDays: {
        one: "1 day",
        other: "{{count}} days"
    },
    aboutXWeeks: {
        one: "about 1 week",
        other: "about {{count}} weeks"
    },
    xWeeks: {
        one: "1 week",
        other: "{{count}} weeks"
    },
    aboutXMonths: {
        one: "about 1 month",
        other: "about {{count}} months"
    },
    xMonths: {
        one: "1 month",
        other: "{{count}} months"
    },
    aboutXYears: {
        one: "about 1 year",
        other: "about {{count}} years"
    },
    xYears: {
        one: "1 year",
        other: "{{count}} years"
    },
    overXYears: {
        one: "over 1 year",
        other: "over {{count}} years"
    },
    almostXYears: {
        one: "almost 1 year",
        other: "almost {{count}} years"
    }
};
const formatDistance = (token, count, options)=>{
    let result;
    const tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === "string") result = tokenValue;
    else if (count === 1) result = tokenValue.one;
    else result = tokenValue.other.replace("{{count}}", count.toString());
    if (options?.addSuffix) {
        if (options.comparison && options.comparison > 0) return "in " + result;
        else return result + " ago";
    }
    return result;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4750s":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatLong", ()=>formatLong);
var _buildFormatLongFnJs = require("../../_lib/buildFormatLongFn.js");
const dateFormats = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
};
const timeFormats = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
};
const dateTimeFormats = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
};
const formatLong = {
    date: (0, _buildFormatLongFnJs.buildFormatLongFn)({
        formats: dateFormats,
        defaultWidth: "full"
    }),
    time: (0, _buildFormatLongFnJs.buildFormatLongFn)({
        formats: timeFormats,
        defaultWidth: "full"
    }),
    dateTime: (0, _buildFormatLongFnJs.buildFormatLongFn)({
        formats: dateTimeFormats,
        defaultWidth: "full"
    })
};

},{"../../_lib/buildFormatLongFn.js":"hG1eR","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hG1eR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildFormatLongFn", ()=>buildFormatLongFn);
function buildFormatLongFn(args) {
    return (options = {})=>{
        // TODO: Remove String()
        const width = options.width ? String(options.width) : args.defaultWidth;
        const format = args.formats[width] || args.formats[args.defaultWidth];
        return format;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9hkS1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatRelative", ()=>formatRelative);
const formatRelativeLocale = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
};
const formatRelative = (token, _date, _baseDate, _options)=>formatRelativeLocale[token];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fNMBt":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "localize", ()=>localize);
var _buildLocalizeFnJs = require("../../_lib/buildLocalizeFn.js");
const eraValues = {
    narrow: [
        "B",
        "A"
    ],
    abbreviated: [
        "BC",
        "AD"
    ],
    wide: [
        "Before Christ",
        "Anno Domini"
    ]
};
const quarterValues = {
    narrow: [
        "1",
        "2",
        "3",
        "4"
    ],
    abbreviated: [
        "Q1",
        "Q2",
        "Q3",
        "Q4"
    ],
    wide: [
        "1st quarter",
        "2nd quarter",
        "3rd quarter",
        "4th quarter"
    ]
};
// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
    narrow: [
        "J",
        "F",
        "M",
        "A",
        "M",
        "J",
        "J",
        "A",
        "S",
        "O",
        "N",
        "D"
    ],
    abbreviated: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ],
    wide: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
};
const dayValues = {
    narrow: [
        "S",
        "M",
        "T",
        "W",
        "T",
        "F",
        "S"
    ],
    short: [
        "Su",
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa"
    ],
    abbreviated: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ],
    wide: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
};
const dayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    }
};
const formattingDayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    }
};
const ordinalNumber = (dirtyNumber, _options)=>{
    const number = Number(dirtyNumber);
    // If ordinal numbers depend on context, for example,
    // if they are different for different grammatical genders,
    // use `options.unit`.
    //
    // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
    // 'day', 'hour', 'minute', 'second'.
    const rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) switch(rem100 % 10){
        case 1:
            return number + "st";
        case 2:
            return number + "nd";
        case 3:
            return number + "rd";
    }
    return number + "th";
};
const localize = {
    ordinalNumber,
    era: (0, _buildLocalizeFnJs.buildLocalizeFn)({
        values: eraValues,
        defaultWidth: "wide"
    }),
    quarter: (0, _buildLocalizeFnJs.buildLocalizeFn)({
        values: quarterValues,
        defaultWidth: "wide",
        argumentCallback: (quarter)=>quarter - 1
    }),
    month: (0, _buildLocalizeFnJs.buildLocalizeFn)({
        values: monthValues,
        defaultWidth: "wide"
    }),
    day: (0, _buildLocalizeFnJs.buildLocalizeFn)({
        values: dayValues,
        defaultWidth: "wide"
    }),
    dayPeriod: (0, _buildLocalizeFnJs.buildLocalizeFn)({
        values: dayPeriodValues,
        defaultWidth: "wide",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
    })
};

},{"../../_lib/buildLocalizeFn.js":"9AV3v","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9AV3v":[function(require,module,exports,__globalThis) {
/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */ /**
 * The map of localized values for each width.
 */ /**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */ /**
 * Converts the unit value to the tuple of values.
 */ /**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */ /**
 * The tuple of localized quarter values. The first element represents Q1.
 */ /**
 * The tuple of localized day values. The first element represents Sunday.
 */ /**
 * The tuple of localized month values. The first element represents January.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildLocalizeFn", ()=>buildLocalizeFn);
function buildLocalizeFn(args) {
    return (value, options)=>{
        const context = options?.context ? String(options.context) : "standalone";
        let valuesArray;
        if (context === "formatting" && args.formattingValues) {
            const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
            const width = options?.width ? String(options.width) : defaultWidth;
            valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
        } else {
            const defaultWidth = args.defaultWidth;
            const width = options?.width ? String(options.width) : args.defaultWidth;
            valuesArray = args.values[width] || args.values[defaultWidth];
        }
        const index = args.argumentCallback ? args.argumentCallback(value) : value;
        // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
        return valuesArray[index];
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"glQGS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "match", ()=>match);
var _buildMatchFnJs = require("../../_lib/buildMatchFn.js");
var _buildMatchPatternFnJs = require("../../_lib/buildMatchPatternFn.js");
const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;
const matchEraPatterns = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
};
const parseEraPatterns = {
    any: [
        /^b/i,
        /^(a|c)/i
    ]
};
const matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
};
const parseQuarterPatterns = {
    any: [
        /1/i,
        /2/i,
        /3/i,
        /4/i
    ]
};
const matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
const parseMonthPatterns = {
    narrow: [
        /^j/i,
        /^f/i,
        /^m/i,
        /^a/i,
        /^m/i,
        /^j/i,
        /^j/i,
        /^a/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ],
    any: [
        /^ja/i,
        /^f/i,
        /^mar/i,
        /^ap/i,
        /^may/i,
        /^jun/i,
        /^jul/i,
        /^au/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ]
};
const matchDayPatterns = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
const parseDayPatterns = {
    narrow: [
        /^s/i,
        /^m/i,
        /^t/i,
        /^w/i,
        /^t/i,
        /^f/i,
        /^s/i
    ],
    any: [
        /^su/i,
        /^m/i,
        /^tu/i,
        /^w/i,
        /^th/i,
        /^f/i,
        /^sa/i
    ]
};
const matchDayPeriodPatterns = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
const parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
    }
};
const match = {
    ordinalNumber: (0, _buildMatchPatternFnJs.buildMatchPatternFn)({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: (value)=>parseInt(value, 10)
    }),
    era: (0, _buildMatchFnJs.buildMatchFn)({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseEraPatterns,
        defaultParseWidth: "any"
    }),
    quarter: (0, _buildMatchFnJs.buildMatchFn)({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: "any",
        valueCallback: (index)=>index + 1
    }),
    month: (0, _buildMatchFnJs.buildMatchFn)({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: "any"
    }),
    day: (0, _buildMatchFnJs.buildMatchFn)({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPatterns,
        defaultParseWidth: "any"
    }),
    dayPeriod: (0, _buildMatchFnJs.buildMatchFn)({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: "any",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any"
    })
};

},{"../../_lib/buildMatchFn.js":"1TSj7","../../_lib/buildMatchPatternFn.js":"YWS9x","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1TSj7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildMatchFn", ()=>buildMatchFn);
function buildMatchFn(args) {
    return (string, options = {})=>{
        const width = options.width;
        const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
        const matchResult = string.match(matchPattern);
        if (!matchResult) return null;
        const matchedString = matchResult[0];
        const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
        const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern)=>pattern.test(matchedString)) : findKey(parsePatterns, (pattern)=>pattern.test(matchedString));
        let value;
        value = args.valueCallback ? args.valueCallback(key) : key;
        value = options.valueCallback ? options.valueCallback(value) : value;
        const rest = string.slice(matchedString.length);
        return {
            value,
            rest
        };
    };
}
function findKey(object, predicate) {
    for(const key in object){
        if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) return key;
    }
    return undefined;
}
function findIndex(array, predicate) {
    for(let key = 0; key < array.length; key++){
        if (predicate(array[key])) return key;
    }
    return undefined;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"YWS9x":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildMatchPatternFn", ()=>buildMatchPatternFn);
function buildMatchPatternFn(args) {
    return (string, options = {})=>{
        const matchResult = string.match(args.matchPattern);
        if (!matchResult) return null;
        const matchedString = matchResult[0];
        const parseResult = string.match(args.parsePattern);
        if (!parseResult) return null;
        let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
        // [TODO] I challenge you to fix the type
        value = options.valueCallback ? options.valueCallback(value) : value;
        const rest = string.slice(matchedString.length);
        return {
            value,
            rest
        };
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5LfG2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDefaultOptions", ()=>getDefaultOptions);
parcelHelpers.export(exports, "setDefaultOptions", ()=>setDefaultOptions);
let defaultOptions = {};
function getDefaultOptions() {
    return defaultOptions;
}
function setDefaultOptions(newOptions) {
    defaultOptions = newOptions;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iFmyK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */ parcelHelpers.export(exports, "getTimezoneOffsetInMilliseconds", ()=>getTimezoneOffsetInMilliseconds);
var _toDateJs = require("../toDate.js");
function getTimezoneOffsetInMilliseconds(date) {
    const _date = (0, _toDateJs.toDate)(date);
    const utcDate = new Date(Date.UTC(_date.getFullYear(), _date.getMonth(), _date.getDate(), _date.getHours(), _date.getMinutes(), _date.getSeconds(), _date.getMilliseconds()));
    utcDate.setUTCFullYear(_date.getFullYear());
    return +date - +utcDate;
}

},{"../toDate.js":"5dMgD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"26R3c":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link formatDistanceToNow} function options.
 */ /**
 * @name formatDistanceToNow
 * @category Common Helpers
 * @summary Return the distance between the given date and now in words.
 * @pure false
 *
 * @description
 * Return the distance between the given date and now in words.
 *
 * | Distance to now                                                   | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance to now     | Result               |
 * |---------------------|----------------------|
 * | 0 secs ... 5 secs   | less than 5 seconds  |
 * | 5 secs ... 10 secs  | less than 10 seconds |
 * | 10 secs ... 20 secs | less than 20 seconds |
 * | 20 secs ... 40 secs | half a minute        |
 * | 40 secs ... 60 secs | less than a minute   |
 * | 60 secs ... 90 secs | 1 minute             |
 *
 * @param date - The given date
 * @param options - The object with options
 *
 * @returns The distance in words
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `formatDistance` property
 *
 * @example
 * // If today is 1 January 2015, what is the distance to 2 July 2014?
 * const result = formatDistanceToNow(
 *   new Date(2014, 6, 2)
 * )
 * //=> '6 months'
 *
 * @example
 * // If now is 1 January 2015 00:00:00,
 * // what is the distance to 1 January 2015 00:00:15, including seconds?
 * const result = formatDistanceToNow(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   {includeSeconds: true}
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 January 2016, with a suffix?
 * const result = formatDistanceToNow(
 *   new Date(2016, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> 'in about 1 year'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 August 2016 in Esperanto?
 * const eoLocale = require('date-fns/locale/eo')
 * const result = formatDistanceToNow(
 *   new Date(2016, 7, 1),
 *   {locale: eoLocale}
 * )
 * //=> 'pli ol 1 jaro'
 */ parcelHelpers.export(exports, "formatDistanceToNow", ()=>formatDistanceToNow);
var _constructNowJs = require("./constructNow.js");
var _formatDistanceJs = require("./formatDistance.js");
function formatDistanceToNow(date, options) {
    return (0, _formatDistanceJs.formatDistance)(date, (0, _constructNowJs.constructNow)(date), options);
}
// Fallback for modularized imports:
exports.default = formatDistanceToNow;

},{"./constructNow.js":"4dBc3","./formatDistance.js":"3SJtD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eEzbl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link isSameWeek} function options.
 */ /**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same week (and month and year)
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */ parcelHelpers.export(exports, "isSameWeek", ()=>isSameWeek);
var _normalizeDatesJs = require("./_lib/normalizeDates.js");
var _startOfWeekJs = require("./startOfWeek.js");
function isSameWeek(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = (0, _normalizeDatesJs.normalizeDates)(options?.in, laterDate, earlierDate);
    return +(0, _startOfWeekJs.startOfWeek)(laterDate_, options) === +(0, _startOfWeekJs.startOfWeek)(earlierDate_, options);
}
// Fallback for modularized imports:
exports.default = isSameWeek;

},{"./_lib/normalizeDates.js":"grsPk","./startOfWeek.js":"kSdOJ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kSdOJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link startOfWeek} function options.
 */ /**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */ parcelHelpers.export(exports, "startOfWeek", ()=>startOfWeek);
var _defaultOptionsJs = require("./_lib/defaultOptions.js");
var _toDateJs = require("./toDate.js");
function startOfWeek(date, options) {
    const defaultOptions = (0, _defaultOptionsJs.getDefaultOptions)();
    const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    const day = _date.getDay();
    const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    _date.setDate(_date.getDate() - diff);
    _date.setHours(0, 0, 0, 0);
    return _date;
}
// Fallback for modularized imports:
exports.default = startOfWeek;

},{"./_lib/defaultOptions.js":"5LfG2","./toDate.js":"5dMgD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"guJNA":[function(require,module,exports,__globalThis) {
// This file is generated automatically by `scripts/build/indices.ts`. Please, don't change it.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _afJs = require("./locale/af.js");
parcelHelpers.exportAll(_afJs, exports);
var _arJs = require("./locale/ar.js");
parcelHelpers.exportAll(_arJs, exports);
var _arDZJs = require("./locale/ar-DZ.js");
parcelHelpers.exportAll(_arDZJs, exports);
var _arEGJs = require("./locale/ar-EG.js");
parcelHelpers.exportAll(_arEGJs, exports);
var _arMAJs = require("./locale/ar-MA.js");
parcelHelpers.exportAll(_arMAJs, exports);
var _arSAJs = require("./locale/ar-SA.js");
parcelHelpers.exportAll(_arSAJs, exports);
var _arTNJs = require("./locale/ar-TN.js");
parcelHelpers.exportAll(_arTNJs, exports);
var _azJs = require("./locale/az.js");
parcelHelpers.exportAll(_azJs, exports);
var _beJs = require("./locale/be.js");
parcelHelpers.exportAll(_beJs, exports);
var _beTaraskJs = require("./locale/be-tarask.js");
parcelHelpers.exportAll(_beTaraskJs, exports);
var _bgJs = require("./locale/bg.js");
parcelHelpers.exportAll(_bgJs, exports);
var _bnJs = require("./locale/bn.js");
parcelHelpers.exportAll(_bnJs, exports);
var _bsJs = require("./locale/bs.js");
parcelHelpers.exportAll(_bsJs, exports);
var _caJs = require("./locale/ca.js");
parcelHelpers.exportAll(_caJs, exports);
var _ckbJs = require("./locale/ckb.js");
parcelHelpers.exportAll(_ckbJs, exports);
var _csJs = require("./locale/cs.js");
parcelHelpers.exportAll(_csJs, exports);
var _cyJs = require("./locale/cy.js");
parcelHelpers.exportAll(_cyJs, exports);
var _daJs = require("./locale/da.js");
parcelHelpers.exportAll(_daJs, exports);
var _deJs = require("./locale/de.js");
parcelHelpers.exportAll(_deJs, exports);
var _deATJs = require("./locale/de-AT.js");
parcelHelpers.exportAll(_deATJs, exports);
var _elJs = require("./locale/el.js");
parcelHelpers.exportAll(_elJs, exports);
var _enAUJs = require("./locale/en-AU.js");
parcelHelpers.exportAll(_enAUJs, exports);
var _enCAJs = require("./locale/en-CA.js");
parcelHelpers.exportAll(_enCAJs, exports);
var _enGBJs = require("./locale/en-GB.js");
parcelHelpers.exportAll(_enGBJs, exports);
var _enIEJs = require("./locale/en-IE.js");
parcelHelpers.exportAll(_enIEJs, exports);
var _enINJs = require("./locale/en-IN.js");
parcelHelpers.exportAll(_enINJs, exports);
var _enNZJs = require("./locale/en-NZ.js");
parcelHelpers.exportAll(_enNZJs, exports);
var _enUSJs = require("./locale/en-US.js");
parcelHelpers.exportAll(_enUSJs, exports);
var _enZAJs = require("./locale/en-ZA.js");
parcelHelpers.exportAll(_enZAJs, exports);
var _eoJs = require("./locale/eo.js");
parcelHelpers.exportAll(_eoJs, exports);
var _esJs = require("./locale/es.js");
parcelHelpers.exportAll(_esJs, exports);
var _etJs = require("./locale/et.js");
parcelHelpers.exportAll(_etJs, exports);
var _euJs = require("./locale/eu.js");
parcelHelpers.exportAll(_euJs, exports);
var _faIRJs = require("./locale/fa-IR.js");
parcelHelpers.exportAll(_faIRJs, exports);
var _fiJs = require("./locale/fi.js");
parcelHelpers.exportAll(_fiJs, exports);
var _frJs = require("./locale/fr.js");
parcelHelpers.exportAll(_frJs, exports);
var _frCAJs = require("./locale/fr-CA.js");
parcelHelpers.exportAll(_frCAJs, exports);
var _frCHJs = require("./locale/fr-CH.js");
parcelHelpers.exportAll(_frCHJs, exports);
var _fyJs = require("./locale/fy.js");
parcelHelpers.exportAll(_fyJs, exports);
var _gdJs = require("./locale/gd.js");
parcelHelpers.exportAll(_gdJs, exports);
var _glJs = require("./locale/gl.js");
parcelHelpers.exportAll(_glJs, exports);
var _guJs = require("./locale/gu.js");
parcelHelpers.exportAll(_guJs, exports);
var _heJs = require("./locale/he.js");
parcelHelpers.exportAll(_heJs, exports);
var _hiJs = require("./locale/hi.js");
parcelHelpers.exportAll(_hiJs, exports);
var _hrJs = require("./locale/hr.js");
parcelHelpers.exportAll(_hrJs, exports);
var _htJs = require("./locale/ht.js");
parcelHelpers.exportAll(_htJs, exports);
var _huJs = require("./locale/hu.js");
parcelHelpers.exportAll(_huJs, exports);
var _hyJs = require("./locale/hy.js");
parcelHelpers.exportAll(_hyJs, exports);
var _idJs = require("./locale/id.js");
parcelHelpers.exportAll(_idJs, exports);
var _isJs = require("./locale/is.js");
parcelHelpers.exportAll(_isJs, exports);
var _itJs = require("./locale/it.js");
parcelHelpers.exportAll(_itJs, exports);
var _itCHJs = require("./locale/it-CH.js");
parcelHelpers.exportAll(_itCHJs, exports);
var _jaJs = require("./locale/ja.js");
parcelHelpers.exportAll(_jaJs, exports);
var _jaHiraJs = require("./locale/ja-Hira.js");
parcelHelpers.exportAll(_jaHiraJs, exports);
var _kaJs = require("./locale/ka.js");
parcelHelpers.exportAll(_kaJs, exports);
var _kkJs = require("./locale/kk.js");
parcelHelpers.exportAll(_kkJs, exports);
var _kmJs = require("./locale/km.js");
parcelHelpers.exportAll(_kmJs, exports);
var _knJs = require("./locale/kn.js");
parcelHelpers.exportAll(_knJs, exports);
var _koJs = require("./locale/ko.js");
parcelHelpers.exportAll(_koJs, exports);
var _lbJs = require("./locale/lb.js");
parcelHelpers.exportAll(_lbJs, exports);
var _ltJs = require("./locale/lt.js");
parcelHelpers.exportAll(_ltJs, exports);
var _lvJs = require("./locale/lv.js");
parcelHelpers.exportAll(_lvJs, exports);
var _mkJs = require("./locale/mk.js");
parcelHelpers.exportAll(_mkJs, exports);
var _mnJs = require("./locale/mn.js");
parcelHelpers.exportAll(_mnJs, exports);
var _msJs = require("./locale/ms.js");
parcelHelpers.exportAll(_msJs, exports);
var _mtJs = require("./locale/mt.js");
parcelHelpers.exportAll(_mtJs, exports);
var _nbJs = require("./locale/nb.js");
parcelHelpers.exportAll(_nbJs, exports);
var _nlJs = require("./locale/nl.js");
parcelHelpers.exportAll(_nlJs, exports);
var _nlBEJs = require("./locale/nl-BE.js");
parcelHelpers.exportAll(_nlBEJs, exports);
var _nnJs = require("./locale/nn.js");
parcelHelpers.exportAll(_nnJs, exports);
var _ocJs = require("./locale/oc.js");
parcelHelpers.exportAll(_ocJs, exports);
var _plJs = require("./locale/pl.js");
parcelHelpers.exportAll(_plJs, exports);
var _ptJs = require("./locale/pt.js");
parcelHelpers.exportAll(_ptJs, exports);
var _ptBRJs = require("./locale/pt-BR.js");
parcelHelpers.exportAll(_ptBRJs, exports);
var _roJs = require("./locale/ro.js");
parcelHelpers.exportAll(_roJs, exports);
var _ruJs = require("./locale/ru.js");
parcelHelpers.exportAll(_ruJs, exports);
var _seJs = require("./locale/se.js");
parcelHelpers.exportAll(_seJs, exports);
var _skJs = require("./locale/sk.js");
parcelHelpers.exportAll(_skJs, exports);
var _slJs = require("./locale/sl.js");
parcelHelpers.exportAll(_slJs, exports);
var _sqJs = require("./locale/sq.js");
parcelHelpers.exportAll(_sqJs, exports);
var _srJs = require("./locale/sr.js");
parcelHelpers.exportAll(_srJs, exports);
var _srLatnJs = require("./locale/sr-Latn.js");
parcelHelpers.exportAll(_srLatnJs, exports);
var _svJs = require("./locale/sv.js");
parcelHelpers.exportAll(_svJs, exports);
var _taJs = require("./locale/ta.js");
parcelHelpers.exportAll(_taJs, exports);
var _teJs = require("./locale/te.js");
parcelHelpers.exportAll(_teJs, exports);
var _thJs = require("./locale/th.js");
parcelHelpers.exportAll(_thJs, exports);
var _trJs = require("./locale/tr.js");
parcelHelpers.exportAll(_trJs, exports);
var _ugJs = require("./locale/ug.js");
parcelHelpers.exportAll(_ugJs, exports);
var _ukJs = require("./locale/uk.js");
parcelHelpers.exportAll(_ukJs, exports);
var _uzJs = require("./locale/uz.js");
parcelHelpers.exportAll(_uzJs, exports);
var _uzCyrlJs = require("./locale/uz-Cyrl.js");
parcelHelpers.exportAll(_uzCyrlJs, exports);
var _viJs = require("./locale/vi.js");
parcelHelpers.exportAll(_viJs, exports);
var _zhCNJs = require("./locale/zh-CN.js");
parcelHelpers.exportAll(_zhCNJs, exports);
var _zhHKJs = require("./locale/zh-HK.js");
parcelHelpers.exportAll(_zhHKJs, exports);
var _zhTWJs = require("./locale/zh-TW.js");
parcelHelpers.exportAll(_zhTWJs, exports);

},{"./locale/af.js":false,"./locale/ar.js":false,"./locale/ar-DZ.js":false,"./locale/ar-EG.js":false,"./locale/ar-MA.js":false,"./locale/ar-SA.js":false,"./locale/ar-TN.js":false,"./locale/az.js":false,"./locale/be.js":false,"./locale/be-tarask.js":false,"./locale/bg.js":false,"./locale/bn.js":false,"./locale/bs.js":false,"./locale/ca.js":false,"./locale/ckb.js":false,"./locale/cs.js":false,"./locale/cy.js":false,"./locale/da.js":false,"./locale/de.js":false,"./locale/de-AT.js":false,"./locale/el.js":false,"./locale/en-AU.js":false,"./locale/en-CA.js":false,"./locale/en-GB.js":false,"./locale/en-IE.js":false,"./locale/en-IN.js":false,"./locale/en-NZ.js":false,"./locale/en-US.js":false,"./locale/en-ZA.js":false,"./locale/eo.js":false,"./locale/es.js":false,"./locale/et.js":false,"./locale/eu.js":false,"./locale/fa-IR.js":false,"./locale/fi.js":false,"./locale/fr.js":false,"./locale/fr-CA.js":false,"./locale/fr-CH.js":false,"./locale/fy.js":false,"./locale/gd.js":false,"./locale/gl.js":false,"./locale/gu.js":false,"./locale/he.js":false,"./locale/hi.js":false,"./locale/hr.js":false,"./locale/ht.js":false,"./locale/hu.js":false,"./locale/hy.js":false,"./locale/id.js":false,"./locale/is.js":false,"./locale/it.js":false,"./locale/it-CH.js":false,"./locale/ja.js":false,"./locale/ja-Hira.js":false,"./locale/ka.js":false,"./locale/kk.js":false,"./locale/km.js":false,"./locale/kn.js":false,"./locale/ko.js":false,"./locale/lb.js":false,"./locale/lt.js":false,"./locale/lv.js":false,"./locale/mk.js":false,"./locale/mn.js":false,"./locale/ms.js":false,"./locale/mt.js":false,"./locale/nb.js":false,"./locale/nl.js":false,"./locale/nl-BE.js":false,"./locale/nn.js":false,"./locale/oc.js":false,"./locale/pl.js":false,"./locale/pt.js":false,"./locale/pt-BR.js":false,"./locale/ro.js":false,"./locale/ru.js":"eG2HW","./locale/se.js":false,"./locale/sk.js":false,"./locale/sl.js":false,"./locale/sq.js":false,"./locale/sr.js":false,"./locale/sr-Latn.js":false,"./locale/sv.js":false,"./locale/ta.js":false,"./locale/te.js":false,"./locale/th.js":false,"./locale/tr.js":false,"./locale/ug.js":false,"./locale/uk.js":false,"./locale/uz.js":false,"./locale/uz-Cyrl.js":false,"./locale/vi.js":false,"./locale/zh-CN.js":false,"./locale/zh-HK.js":false,"./locale/zh-TW.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eG2HW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ru", ()=>ru);
var _formatDistanceJs = require("./ru/_lib/formatDistance.js");
var _formatLongJs = require("./ru/_lib/formatLong.js");
var _formatRelativeJs = require("./ru/_lib/formatRelative.js");
var _localizeJs = require("./ru/_lib/localize.js");
var _matchJs = require("./ru/_lib/match.js");
const ru = {
    code: "ru",
    formatDistance: (0, _formatDistanceJs.formatDistance),
    formatLong: (0, _formatLongJs.formatLong),
    formatRelative: (0, _formatRelativeJs.formatRelative),
    localize: (0, _localizeJs.localize),
    match: (0, _matchJs.match),
    options: {
        weekStartsOn: 1 /* Monday */ ,
        firstWeekContainsDate: 1
    }
};
// Fallback for modularized imports:
exports.default = ru;

},{"./ru/_lib/formatDistance.js":"knVnU","./ru/_lib/formatLong.js":"jbuvp","./ru/_lib/formatRelative.js":"leve7","./ru/_lib/localize.js":"2L63r","./ru/_lib/match.js":"04PpU","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"knVnU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatDistance", ()=>formatDistance);
function declension(scheme, count) {
    // scheme for count=1 exists
    if (scheme.one !== undefined && count === 1) return scheme.one;
    const rem10 = count % 10;
    const rem100 = count % 100;
    // 1, 21, 31, ...
    if (rem10 === 1 && rem100 !== 11) return scheme.singularNominative.replace("{{count}}", String(count));
    else if (rem10 >= 2 && rem10 <= 4 && (rem100 < 10 || rem100 > 20)) return scheme.singularGenitive.replace("{{count}}", String(count));
    else return scheme.pluralGenitive.replace("{{count}}", String(count));
}
function buildLocalizeTokenFn(scheme) {
    return (count, options)=>{
        if (options?.addSuffix) {
            if (options.comparison && options.comparison > 0) {
                if (scheme.future) return declension(scheme.future, count);
                else return "\u0447\u0435\u0440\u0435\u0437 " + declension(scheme.regular, count);
            } else {
                if (scheme.past) return declension(scheme.past, count);
                else return declension(scheme.regular, count) + " \u043D\u0430\u0437\u0430\u0434";
            }
        } else return declension(scheme.regular, count);
    };
}
const formatDistanceLocale = {
    lessThanXSeconds: buildLocalizeTokenFn({
        regular: {
            one: "\u043C\u0435\u043D\u044C\u0448\u0435 \u0441\u0435\u043A\u0443\u043D\u0434\u044B",
            singularNominative: "\u043C\u0435\u043D\u044C\u0448\u0435 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B",
            singularGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434",
            pluralGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434"
        },
        future: {
            one: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 \u0441\u0435\u043A\u0443\u043D\u0434\u0443",
            singularNominative: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443",
            singularGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B",
            pluralGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434"
        }
    }),
    xSeconds: buildLocalizeTokenFn({
        regular: {
            singularNominative: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0430",
            singularGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B",
            pluralGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434"
        },
        past: {
            singularNominative: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443 \u043D\u0430\u0437\u0430\u0434",
            singularGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B \u043D\u0430\u0437\u0430\u0434",
            pluralGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434 \u043D\u0430\u0437\u0430\u0434"
        },
        future: {
            singularNominative: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443",
            singularGenitive: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B",
            pluralGenitive: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434"
        }
    }),
    halfAMinute: (_count, options)=>{
        if (options?.addSuffix) {
            if (options.comparison && options.comparison > 0) return "\u0447\u0435\u0440\u0435\u0437 \u043F\u043E\u043B\u043C\u0438\u043D\u0443\u0442\u044B";
            else return "\u043F\u043E\u043B\u043C\u0438\u043D\u0443\u0442\u044B \u043D\u0430\u0437\u0430\u0434";
        }
        return "\u043F\u043E\u043B\u043C\u0438\u043D\u0443\u0442\u044B";
    },
    lessThanXMinutes: buildLocalizeTokenFn({
        regular: {
            one: "\u043C\u0435\u043D\u044C\u0448\u0435 \u043C\u0438\u043D\u0443\u0442\u044B",
            singularNominative: "\u043C\u0435\u043D\u044C\u0448\u0435 {{count}} \u043C\u0438\u043D\u0443\u0442\u044B",
            singularGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435 {{count}} \u043C\u0438\u043D\u0443\u0442",
            pluralGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435 {{count}} \u043C\u0438\u043D\u0443\u0442"
        },
        future: {
            one: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 \u043C\u0438\u043D\u0443\u0442\u0443",
            singularNominative: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442\u0443",
            singularGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442\u044B",
            pluralGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442"
        }
    }),
    xMinutes: buildLocalizeTokenFn({
        regular: {
            singularNominative: "{{count}} \u043C\u0438\u043D\u0443\u0442\u0430",
            singularGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442\u044B",
            pluralGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442"
        },
        past: {
            singularNominative: "{{count}} \u043C\u0438\u043D\u0443\u0442\u0443 \u043D\u0430\u0437\u0430\u0434",
            singularGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442\u044B \u043D\u0430\u0437\u0430\u0434",
            pluralGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442 \u043D\u0430\u0437\u0430\u0434"
        },
        future: {
            singularNominative: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442\u0443",
            singularGenitive: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442\u044B",
            pluralGenitive: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442"
        }
    }),
    aboutXHours: buildLocalizeTokenFn({
        regular: {
            singularNominative: "\u043E\u043A\u043E\u043B\u043E {{count}} \u0447\u0430\u0441\u0430",
            singularGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u0447\u0430\u0441\u043E\u0432",
            pluralGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u0447\u0430\u0441\u043E\u0432"
        },
        future: {
            singularNominative: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u0447\u0430\u0441",
            singularGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u0447\u0430\u0441\u0430",
            pluralGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u0447\u0430\u0441\u043E\u0432"
        }
    }),
    xHours: buildLocalizeTokenFn({
        regular: {
            singularNominative: "{{count}} \u0447\u0430\u0441",
            singularGenitive: "{{count}} \u0447\u0430\u0441\u0430",
            pluralGenitive: "{{count}} \u0447\u0430\u0441\u043E\u0432"
        }
    }),
    xDays: buildLocalizeTokenFn({
        regular: {
            singularNominative: "{{count}} \u0434\u0435\u043D\u044C",
            singularGenitive: "{{count}} \u0434\u043D\u044F",
            pluralGenitive: "{{count}} \u0434\u043D\u0435\u0439"
        }
    }),
    aboutXWeeks: buildLocalizeTokenFn({
        regular: {
            singularNominative: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043D\u0435\u0434\u0435\u043B\u0438",
            singularGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043D\u0435\u0434\u0435\u043B\u044C",
            pluralGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043D\u0435\u0434\u0435\u043B\u044C"
        },
        future: {
            singularNominative: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043D\u0435\u0434\u0435\u043B\u044E",
            singularGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043D\u0435\u0434\u0435\u043B\u0438",
            pluralGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043D\u0435\u0434\u0435\u043B\u044C"
        }
    }),
    xWeeks: buildLocalizeTokenFn({
        regular: {
            singularNominative: "{{count}} \u043D\u0435\u0434\u0435\u043B\u044F",
            singularGenitive: "{{count}} \u043D\u0435\u0434\u0435\u043B\u0438",
            pluralGenitive: "{{count}} \u043D\u0435\u0434\u0435\u043B\u044C"
        }
    }),
    aboutXMonths: buildLocalizeTokenFn({
        regular: {
            singularNominative: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043C\u0435\u0441\u044F\u0446\u0430",
            singularGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043C\u0435\u0441\u044F\u0446\u0435\u0432",
            pluralGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043C\u0435\u0441\u044F\u0446\u0435\u0432"
        },
        future: {
            singularNominative: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0435\u0441\u044F\u0446",
            singularGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0435\u0441\u044F\u0446\u0430",
            pluralGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0435\u0441\u044F\u0446\u0435\u0432"
        }
    }),
    xMonths: buildLocalizeTokenFn({
        regular: {
            singularNominative: "{{count}} \u043C\u0435\u0441\u044F\u0446",
            singularGenitive: "{{count}} \u043C\u0435\u0441\u044F\u0446\u0430",
            pluralGenitive: "{{count}} \u043C\u0435\u0441\u044F\u0446\u0435\u0432"
        }
    }),
    aboutXYears: buildLocalizeTokenFn({
        regular: {
            singularNominative: "\u043E\u043A\u043E\u043B\u043E {{count}} \u0433\u043E\u0434\u0430",
            singularGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043B\u0435\u0442",
            pluralGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043B\u0435\u0442"
        },
        future: {
            singularNominative: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434",
            singularGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434\u0430",
            pluralGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043B\u0435\u0442"
        }
    }),
    xYears: buildLocalizeTokenFn({
        regular: {
            singularNominative: "{{count}} \u0433\u043E\u0434",
            singularGenitive: "{{count}} \u0433\u043E\u0434\u0430",
            pluralGenitive: "{{count}} \u043B\u0435\u0442"
        }
    }),
    overXYears: buildLocalizeTokenFn({
        regular: {
            singularNominative: "\u0431\u043E\u043B\u044C\u0448\u0435 {{count}} \u0433\u043E\u0434\u0430",
            singularGenitive: "\u0431\u043E\u043B\u044C\u0448\u0435 {{count}} \u043B\u0435\u0442",
            pluralGenitive: "\u0431\u043E\u043B\u044C\u0448\u0435 {{count}} \u043B\u0435\u0442"
        },
        future: {
            singularNominative: "\u0431\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434",
            singularGenitive: "\u0431\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434\u0430",
            pluralGenitive: "\u0431\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u043B\u0435\u0442"
        }
    }),
    almostXYears: buildLocalizeTokenFn({
        regular: {
            singularNominative: "\u043F\u043E\u0447\u0442\u0438 {{count}} \u0433\u043E\u0434",
            singularGenitive: "\u043F\u043E\u0447\u0442\u0438 {{count}} \u0433\u043E\u0434\u0430",
            pluralGenitive: "\u043F\u043E\u0447\u0442\u0438 {{count}} \u043B\u0435\u0442"
        },
        future: {
            singularNominative: "\u043F\u043E\u0447\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434",
            singularGenitive: "\u043F\u043E\u0447\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434\u0430",
            pluralGenitive: "\u043F\u043E\u0447\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 {{count}} \u043B\u0435\u0442"
        }
    })
};
const formatDistance = (token, count, options)=>{
    return formatDistanceLocale[token](count, options);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jbuvp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatLong", ()=>formatLong);
var _buildFormatLongFnJs = require("../../_lib/buildFormatLongFn.js");
const dateFormats = {
    full: "EEEE, d MMMM y '\u0433.'",
    long: "d MMMM y '\u0433.'",
    medium: "d MMM y '\u0433.'",
    short: "dd.MM.y"
};
const timeFormats = {
    full: "H:mm:ss zzzz",
    long: "H:mm:ss z",
    medium: "H:mm:ss",
    short: "H:mm"
};
const dateTimeFormats = {
    any: "{{date}}, {{time}}"
};
const formatLong = {
    date: (0, _buildFormatLongFnJs.buildFormatLongFn)({
        formats: dateFormats,
        defaultWidth: "full"
    }),
    time: (0, _buildFormatLongFnJs.buildFormatLongFn)({
        formats: timeFormats,
        defaultWidth: "full"
    }),
    dateTime: (0, _buildFormatLongFnJs.buildFormatLongFn)({
        formats: dateTimeFormats,
        defaultWidth: "any"
    })
};

},{"../../_lib/buildFormatLongFn.js":"hG1eR","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"leve7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatRelative", ()=>formatRelative);
var _isSameWeekJs = require("../../../isSameWeek.js");
const accusativeWeekdays = [
    "\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435",
    "\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A",
    "\u0432\u0442\u043E\u0440\u043D\u0438\u043A",
    "\u0441\u0440\u0435\u0434\u0443",
    "\u0447\u0435\u0442\u0432\u0435\u0440\u0433",
    "\u043F\u044F\u0442\u043D\u0438\u0446\u0443",
    "\u0441\u0443\u0431\u0431\u043E\u0442\u0443"
];
function lastWeek(day) {
    const weekday = accusativeWeekdays[day];
    switch(day){
        case 0:
            return "'\u0432 \u043F\u0440\u043E\u0448\u043B\u043E\u0435 " + weekday + " \u0432' p";
        case 1:
        case 2:
        case 4:
            return "'\u0432 \u043F\u0440\u043E\u0448\u043B\u044B\u0439 " + weekday + " \u0432' p";
        case 3:
        case 5:
        case 6:
            return "'\u0432 \u043F\u0440\u043E\u0448\u043B\u0443\u044E " + weekday + " \u0432' p";
    }
}
function thisWeek(day) {
    const weekday = accusativeWeekdays[day];
    if (day === 2 /* Tue */ ) return "'\u0432\u043E " + weekday + " \u0432' p";
    else return "'\u0432 " + weekday + " \u0432' p";
}
function nextWeek(day) {
    const weekday = accusativeWeekdays[day];
    switch(day){
        case 0:
            return "'\u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 " + weekday + " \u0432' p";
        case 1:
        case 2:
        case 4:
            return "'\u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 " + weekday + " \u0432' p";
        case 3:
        case 5:
        case 6:
            return "'\u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E " + weekday + " \u0432' p";
    }
}
const formatRelativeLocale = {
    lastWeek: (date, baseDate, options)=>{
        const day = date.getDay();
        if ((0, _isSameWeekJs.isSameWeek)(date, baseDate, options)) return thisWeek(day);
        else return lastWeek(day);
    },
    yesterday: "'\u0432\u0447\u0435\u0440\u0430 \u0432' p",
    today: "'\u0441\u0435\u0433\u043E\u0434\u043D\u044F \u0432' p",
    tomorrow: "'\u0437\u0430\u0432\u0442\u0440\u0430 \u0432' p",
    nextWeek: (date, baseDate, options)=>{
        const day = date.getDay();
        if ((0, _isSameWeekJs.isSameWeek)(date, baseDate, options)) return thisWeek(day);
        else return nextWeek(day);
    },
    other: "P"
};
const formatRelative = (token, date, baseDate, options)=>{
    const format = formatRelativeLocale[token];
    if (typeof format === "function") return format(date, baseDate, options);
    return format;
};

},{"../../../isSameWeek.js":"eEzbl","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2L63r":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "localize", ()=>localize);
var _buildLocalizeFnJs = require("../../_lib/buildLocalizeFn.js");
const eraValues = {
    narrow: [
        "\u0434\u043E \u043D.\u044D.",
        "\u043D.\u044D."
    ],
    abbreviated: [
        "\u0434\u043E \u043D. \u044D.",
        "\u043D. \u044D."
    ],
    wide: [
        "\u0434\u043E \u043D\u0430\u0448\u0435\u0439 \u044D\u0440\u044B",
        "\u043D\u0430\u0448\u0435\u0439 \u044D\u0440\u044B"
    ]
};
const quarterValues = {
    narrow: [
        "1",
        "2",
        "3",
        "4"
    ],
    abbreviated: [
        "1-\u0439 \u043A\u0432.",
        "2-\u0439 \u043A\u0432.",
        "3-\u0439 \u043A\u0432.",
        "4-\u0439 \u043A\u0432."
    ],
    wide: [
        "1-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B",
        "2-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B",
        "3-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B",
        "4-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B"
    ]
};
const monthValues = {
    narrow: [
        "\u042F",
        "\u0424",
        "\u041C",
        "\u0410",
        "\u041C",
        "\u0418",
        "\u0418",
        "\u0410",
        "\u0421",
        "\u041E",
        "\u041D",
        "\u0414"
    ],
    abbreviated: [
        "\u044F\u043D\u0432.",
        "\u0444\u0435\u0432.",
        "\u043C\u0430\u0440\u0442",
        "\u0430\u043F\u0440.",
        "\u043C\u0430\u0439",
        "\u0438\u044E\u043D\u044C",
        "\u0438\u044E\u043B\u044C",
        "\u0430\u0432\u0433.",
        "\u0441\u0435\u043D\u0442.",
        "\u043E\u043A\u0442.",
        "\u043D\u043E\u044F\u0431.",
        "\u0434\u0435\u043A."
    ],
    wide: [
        "\u044F\u043D\u0432\u0430\u0440\u044C",
        "\u0444\u0435\u0432\u0440\u0430\u043B\u044C",
        "\u043C\u0430\u0440\u0442",
        "\u0430\u043F\u0440\u0435\u043B\u044C",
        "\u043C\u0430\u0439",
        "\u0438\u044E\u043D\u044C",
        "\u0438\u044E\u043B\u044C",
        "\u0430\u0432\u0433\u0443\u0441\u0442",
        "\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044C",
        "\u043E\u043A\u0442\u044F\u0431\u0440\u044C",
        "\u043D\u043E\u044F\u0431\u0440\u044C",
        "\u0434\u0435\u043A\u0430\u0431\u0440\u044C"
    ]
};
const formattingMonthValues = {
    narrow: [
        "\u042F",
        "\u0424",
        "\u041C",
        "\u0410",
        "\u041C",
        "\u0418",
        "\u0418",
        "\u0410",
        "\u0421",
        "\u041E",
        "\u041D",
        "\u0414"
    ],
    abbreviated: [
        "\u044F\u043D\u0432.",
        "\u0444\u0435\u0432.",
        "\u043C\u0430\u0440.",
        "\u0430\u043F\u0440.",
        "\u043C\u0430\u044F",
        "\u0438\u044E\u043D.",
        "\u0438\u044E\u043B.",
        "\u0430\u0432\u0433.",
        "\u0441\u0435\u043D\u0442.",
        "\u043E\u043A\u0442.",
        "\u043D\u043E\u044F\u0431.",
        "\u0434\u0435\u043A."
    ],
    wide: [
        "\u044F\u043D\u0432\u0430\u0440\u044F",
        "\u0444\u0435\u0432\u0440\u0430\u043B\u044F",
        "\u043C\u0430\u0440\u0442\u0430",
        "\u0430\u043F\u0440\u0435\u043B\u044F",
        "\u043C\u0430\u044F",
        "\u0438\u044E\u043D\u044F",
        "\u0438\u044E\u043B\u044F",
        "\u0430\u0432\u0433\u0443\u0441\u0442\u0430",
        "\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F",
        "\u043E\u043A\u0442\u044F\u0431\u0440\u044F",
        "\u043D\u043E\u044F\u0431\u0440\u044F",
        "\u0434\u0435\u043A\u0430\u0431\u0440\u044F"
    ]
};
const dayValues = {
    narrow: [
        "\u0412",
        "\u041F",
        "\u0412",
        "\u0421",
        "\u0427",
        "\u041F",
        "\u0421"
    ],
    short: [
        "\u0432\u0441",
        "\u043F\u043D",
        "\u0432\u0442",
        "\u0441\u0440",
        "\u0447\u0442",
        "\u043F\u0442",
        "\u0441\u0431"
    ],
    abbreviated: [
        "\u0432\u0441\u043A",
        "\u043F\u043D\u0434",
        "\u0432\u0442\u0440",
        "\u0441\u0440\u0434",
        "\u0447\u0442\u0432",
        "\u043F\u0442\u043D",
        "\u0441\u0443\u0431"
    ],
    wide: [
        "\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435",
        "\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A",
        "\u0432\u0442\u043E\u0440\u043D\u0438\u043A",
        "\u0441\u0440\u0435\u0434\u0430",
        "\u0447\u0435\u0442\u0432\u0435\u0440\u0433",
        "\u043F\u044F\u0442\u043D\u0438\u0446\u0430",
        "\u0441\u0443\u0431\u0431\u043E\u0442\u0430"
    ]
};
const dayPeriodValues = {
    narrow: {
        am: "\u0414\u041F",
        pm: "\u041F\u041F",
        midnight: "\u043F\u043E\u043B\u043D.",
        noon: "\u043F\u043E\u043B\u0434.",
        morning: "\u0443\u0442\u0440\u043E",
        afternoon: "\u0434\u0435\u043D\u044C",
        evening: "\u0432\u0435\u0447.",
        night: "\u043D\u043E\u0447\u044C"
    },
    abbreviated: {
        am: "\u0414\u041F",
        pm: "\u041F\u041F",
        midnight: "\u043F\u043E\u043B\u043D.",
        noon: "\u043F\u043E\u043B\u0434.",
        morning: "\u0443\u0442\u0440\u043E",
        afternoon: "\u0434\u0435\u043D\u044C",
        evening: "\u0432\u0435\u0447.",
        night: "\u043D\u043E\u0447\u044C"
    },
    wide: {
        am: "\u0414\u041F",
        pm: "\u041F\u041F",
        midnight: "\u043F\u043E\u043B\u043D\u043E\u0447\u044C",
        noon: "\u043F\u043E\u043B\u0434\u0435\u043D\u044C",
        morning: "\u0443\u0442\u0440\u043E",
        afternoon: "\u0434\u0435\u043D\u044C",
        evening: "\u0432\u0435\u0447\u0435\u0440",
        night: "\u043D\u043E\u0447\u044C"
    }
};
const formattingDayPeriodValues = {
    narrow: {
        am: "\u0414\u041F",
        pm: "\u041F\u041F",
        midnight: "\u043F\u043E\u043B\u043D.",
        noon: "\u043F\u043E\u043B\u0434.",
        morning: "\u0443\u0442\u0440\u0430",
        afternoon: "\u0434\u043D\u044F",
        evening: "\u0432\u0435\u0447.",
        night: "\u043D\u043E\u0447\u0438"
    },
    abbreviated: {
        am: "\u0414\u041F",
        pm: "\u041F\u041F",
        midnight: "\u043F\u043E\u043B\u043D.",
        noon: "\u043F\u043E\u043B\u0434.",
        morning: "\u0443\u0442\u0440\u0430",
        afternoon: "\u0434\u043D\u044F",
        evening: "\u0432\u0435\u0447.",
        night: "\u043D\u043E\u0447\u0438"
    },
    wide: {
        am: "\u0414\u041F",
        pm: "\u041F\u041F",
        midnight: "\u043F\u043E\u043B\u043D\u043E\u0447\u044C",
        noon: "\u043F\u043E\u043B\u0434\u0435\u043D\u044C",
        morning: "\u0443\u0442\u0440\u0430",
        afternoon: "\u0434\u043D\u044F",
        evening: "\u0432\u0435\u0447\u0435\u0440\u0430",
        night: "\u043D\u043E\u0447\u0438"
    }
};
const ordinalNumber = (dirtyNumber, options)=>{
    const number = Number(dirtyNumber);
    const unit = options?.unit;
    let suffix;
    if (unit === "date") suffix = "-\u0435";
    else if (unit === "week" || unit === "minute" || unit === "second") suffix = "-\u044F";
    else suffix = "-\u0439";
    return number + suffix;
};
const localize = {
    ordinalNumber,
    era: (0, _buildLocalizeFnJs.buildLocalizeFn)({
        values: eraValues,
        defaultWidth: "wide"
    }),
    quarter: (0, _buildLocalizeFnJs.buildLocalizeFn)({
        values: quarterValues,
        defaultWidth: "wide",
        argumentCallback: (quarter)=>quarter - 1
    }),
    month: (0, _buildLocalizeFnJs.buildLocalizeFn)({
        values: monthValues,
        defaultWidth: "wide",
        formattingValues: formattingMonthValues,
        defaultFormattingWidth: "wide"
    }),
    day: (0, _buildLocalizeFnJs.buildLocalizeFn)({
        values: dayValues,
        defaultWidth: "wide"
    }),
    dayPeriod: (0, _buildLocalizeFnJs.buildLocalizeFn)({
        values: dayPeriodValues,
        defaultWidth: "any",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
    })
};

},{"../../_lib/buildLocalizeFn.js":"9AV3v","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"04PpU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "match", ()=>match);
var _buildMatchFnJs = require("../../_lib/buildMatchFn.js");
var _buildMatchPatternFnJs = require("../../_lib/buildMatchPatternFn.js");
const matchOrdinalNumberPattern = /^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i;
const parseOrdinalNumberPattern = /\d+/i;
const matchEraPatterns = {
    narrow: /^((до )?н\.?\s?э\.?)/i,
    abbreviated: /^((до )?н\.?\s?э\.?)/i,
    wide: /^(до нашей эры|нашей эры|наша эра)/i
};
const parseEraPatterns = {
    any: [
        /^д/i,
        /^н/i
    ]
};
const matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^[1234](-?[ыои]?й?)? кв.?/i,
    wide: /^[1234](-?[ыои]?й?)? квартал/i
};
const parseQuarterPatterns = {
    any: [
        /1/i,
        /2/i,
        /3/i,
        /4/i
    ]
};
const matchMonthPatterns = {
    narrow: /^[яфмаисонд]/i,
    abbreviated: /^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек)\.?/i,
    wide: /^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i
};
const parseMonthPatterns = {
    narrow: [
        /^я/i,
        /^ф/i,
        /^м/i,
        /^а/i,
        /^м/i,
        /^и/i,
        /^и/i,
        /^а/i,
        /^с/i,
        /^о/i,
        /^н/i,
        /^я/i
    ],
    any: [
        /^я/i,
        /^ф/i,
        /^мар/i,
        /^ап/i,
        /^ма[йя]/i,
        /^июн/i,
        /^июл/i,
        /^ав/i,
        /^с/i,
        /^о/i,
        /^н/i,
        /^д/i
    ]
};
const matchDayPatterns = {
    narrow: /^[впсч]/i,
    short: /^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су)\.?/i,
    abbreviated: /^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i,
    wide: /^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i
};
const parseDayPatterns = {
    narrow: [
        /^в/i,
        /^п/i,
        /^в/i,
        /^с/i,
        /^ч/i,
        /^п/i,
        /^с/i
    ],
    any: [
        /^в[ос]/i,
        /^п[он]/i,
        /^в/i,
        /^ср/i,
        /^ч/i,
        /^п[ят]/i,
        /^с[уб]/i
    ]
};
const matchDayPeriodPatterns = {
    narrow: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
    abbreviated: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
    wide: /^([дп]п|полночь|полдень|утр[оа]|день|дня|вечера?|ноч[ьи])/i
};
const parseDayPeriodPatterns = {
    any: {
        am: /^дп/i,
        pm: /^пп/i,
        midnight: /^полн/i,
        noon: /^полд/i,
        morning: /^у/i,
        afternoon: /^д[ен]/i,
        evening: /^в/i,
        night: /^н/i
    }
};
const match = {
    ordinalNumber: (0, _buildMatchPatternFnJs.buildMatchPatternFn)({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: (value)=>parseInt(value, 10)
    }),
    era: (0, _buildMatchFnJs.buildMatchFn)({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseEraPatterns,
        defaultParseWidth: "any"
    }),
    quarter: (0, _buildMatchFnJs.buildMatchFn)({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: "any",
        valueCallback: (index)=>index + 1
    }),
    month: (0, _buildMatchFnJs.buildMatchFn)({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: "any"
    }),
    day: (0, _buildMatchFnJs.buildMatchFn)({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPatterns,
        defaultParseWidth: "any"
    }),
    dayPeriod: (0, _buildMatchFnJs.buildMatchFn)({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any"
    })
};

},{"../../_lib/buildMatchFn.js":"1TSj7","../../_lib/buildMatchPatternFn.js":"YWS9x","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3p7wW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Компонент страницы загрузки.
 * Этот компонент отображает страницу с индикатором загрузки и заголовком.
 * Используется для отображения промежуточного состояния, пока выполняется загрузка данных или другой процесс.
 * 
 * @param {HTMLElement} params.appEl - Корневой элемент приложения, в который будет рендериться страница загрузки.
 * @param {Object} params.user - Объект пользователя, содержащий данные о текущем авторизованном пользователе (если он есть).
 * @param {Function} params.goToPage - Функция для навигации по страницам.
 */ parcelHelpers.export(exports, "renderLoadingPageComponent", ()=>renderLoadingPageComponent);
var _headerComponentJs = require("./header-component.js");
function renderLoadingPageComponent({ appEl, user, goToPage }) {
    /**
   * HTML-разметка страницы загрузки.
   * Содержит контейнер заголовка и индикатор загрузки.
   */ const appHtml = `
              <div class="page-container">
                <div class="header-container"></div>
                <div class="loading-page">
                  <div class="loader"><div></div><div></div><div></div></div>
                </div>
              </div>`;
    // Устанавливаем разметку в корневой элемент приложения
    appEl.innerHTML = appHtml;
    /**
   * Рендеринг заголовка с использованием компонента `renderHeaderComponent`.
   * Передаются данные пользователя и функция навигации.
   */ (0, _headerComponentJs.renderHeaderComponent)({
        user,
        element: document.querySelector(".header-container"),
        goToPage
    });
}

},{"./header-component.js":"ipQ1N","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3MlDw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "saveUserToLocalStorage", ()=>saveUserToLocalStorage);
parcelHelpers.export(exports, "getUserFromLocalStorage", ()=>getUserFromLocalStorage);
parcelHelpers.export(exports, "removeUserFromLocalStorage", ()=>removeUserFromLocalStorage);
function saveUserToLocalStorage(user) {
    window.localStorage.setItem("user", JSON.stringify(user));
}
function getUserFromLocalStorage(user) {
    try {
        return JSON.parse(window.localStorage.getItem("user"));
    } catch (error) {
        return null;
    }
}
function removeUserFromLocalStorage(user) {
    window.localStorage.removeItem("user");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dfWUr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderUserPostsPageComponent", ()=>renderUserPostsPageComponent);
var _apiJs = require("../api.js");
var _headerComponentJs = require("./header-component.js");
var _dateFns = require("date-fns");
var _locale = require("date-fns/locale");
var _routesJs = require("../routes.js");
var _indexJs = require("../index.js");
var _postsPageComponentJs = require("./posts-page-component.js");
function renderUserPostsPageComponent({ appEl, userId }) {
    if (!userId) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430: \u041D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u043D userId.");
        appEl.innerHTML = `
      <div class="page-container">
        <div class="header-container"></div>
        <div class="error">
          <p>\u{41E}\u{448}\u{438}\u{431}\u{43A}\u{430}: \u{41D}\u{435} \u{443}\u{434}\u{430}\u{43B}\u{43E}\u{441}\u{44C} \u{437}\u{430}\u{433}\u{440}\u{443}\u{437}\u{438}\u{442}\u{44C} \u{43F}\u{43E}\u{441}\u{442}\u{44B} \u{43F}\u{43E}\u{43B}\u{44C}\u{437}\u{43E}\u{432}\u{430}\u{442}\u{435}\u{43B}\u{44F}.</p>
          <button class="back-button">\u{2190} \u{412}\u{435}\u{440}\u{43D}\u{443}\u{442}\u{44C}\u{441}\u{44F} \u{43A} \u{43B}\u{435}\u{43D}\u{442}\u{435}</button>
        </div>
      </div>
    `;
        document.querySelector(".back-button").addEventListener("click", ()=>{
            (0, _indexJs.goToPage)((0, _routesJs.POSTS_PAGE));
        });
        (0, _headerComponentJs.renderHeaderComponent)({
            element: document.querySelector(".header-container")
        });
        return;
    }
    appEl.innerHTML = `
    <div class="page-container">
      <div class="header-container"></div>
      <div class="loading">\u{417}\u{430}\u{433}\u{440}\u{443}\u{437}\u{43A}\u{430} \u{43F}\u{43E}\u{441}\u{442}\u{43E}\u{432}...</div>
    </div>
  `;
    (0, _headerComponentJs.renderHeaderComponent)({
        element: document.querySelector(".header-container")
    });
    (0, _apiJs.getPosts)({
        token: (0, _indexJs.getToken)(),
        userId
    }).then((posts)=>{
        if (posts.length === 0) {
            appEl.innerHTML = `
          <div class="page-container">
            <div class="header-container"></div>
            <div class="no-posts">
              <p>\u{41F}\u{43E}\u{43B}\u{44C}\u{437}\u{43E}\u{432}\u{430}\u{442}\u{435}\u{43B}\u{44C} \u{435}\u{449}\u{435} \u{43D}\u{435} \u{434}\u{43E}\u{431}\u{430}\u{432}\u{438}\u{43B} \u{43D}\u{438} \u{43E}\u{434}\u{43D}\u{43E}\u{433}\u{43E} \u{43F}\u{43E}\u{441}\u{442}\u{430}</p>
              <button class="back-button">\u{2190} \u{412}\u{435}\u{440}\u{43D}\u{443}\u{442}\u{44C}\u{441}\u{44F} \u{43A} \u{43B}\u{435}\u{43D}\u{442}\u{435}</button>
            </div>
          </div>
        `;
            document.querySelector(".back-button").addEventListener("click", ()=>{
                (0, _indexJs.goToPage)((0, _routesJs.POSTS_PAGE));
            });
            (0, _headerComponentJs.renderHeaderComponent)({
                element: document.querySelector(".header-container")
            });
            return;
        }
        const userName = posts[0]?.user?.name || "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F";
        const postsHtml = posts.map((post)=>{
            const createdAgo = (0, _dateFns.formatDistanceToNow)(new Date(post.createdAt), {
                addSuffix: true,
                locale: (0, _locale.ru)
            });
            return `
            <li class="post" data-post-id="${post.id}">
              <div class="post-header" data-user-id="${post.user.id}">
                <img src="${post.user.imageUrl}" class="post-header__user-image">
                <p class="post-header__user-name">${(0, _postsPageComponentJs.sanitizeHtml)(post.user.name)}</p>
              </div>
              <div class="post-image-container">
                <img class="post-image" src="${post.imageUrl}" alt="\u{41F}\u{43E}\u{441}\u{442} \u{43F}\u{43E}\u{43B}\u{44C}\u{437}\u{43E}\u{432}\u{430}\u{442}\u{435}\u{43B}\u{44F} ${post.user.name}">
              </div>
              <div class="post-footer">
                <p class="post-text">
                  <span class="user-name">${(0, _postsPageComponentJs.sanitizeHtml)(post.user.name)}</span>
                  ${post.description}
                </p>
                <p class="post-date">
                  ${createdAgo}
                </p>
              </div>
              <div class="post-likes">
                <button class="like-button" data-post-id="${post.id}">
                  <img src="assets/images/${post.isLiked ? "like-active" : "like-not-active"}.svg" alt="\u{41B}\u{430}\u{439}\u{43A}">
                </button>
                  <p class="post-likes-text">
                    \u{41D}\u{440}\u{430}\u{432}\u{438}\u{442}\u{441}\u{44F}: <strong>${post.likes.length}</strong>${post.likes.length > 0 ? ` \u{2014} ${post.likes[post.likes.length - 1].name}` : ""}
                  </p>
              </div>
            </li>
          `;
        }).join("");
        appEl.innerHTML = `
        <div class="page-container">
          <div class="header-container"></div>
          <div class="user-posts-header">
            <h1>\u{41F}\u{43E}\u{441}\u{442}\u{44B} ${(0, _postsPageComponentJs.sanitizeHtml)(userName)}</h1>
            <button class="back-button">\u{2190} \u{412}\u{435}\u{440}\u{43D}\u{443}\u{442}\u{44C}\u{441}\u{44F} \u{43A} \u{43B}\u{435}\u{43D}\u{442}\u{435}</button>
          </div>
          <ul class="posts">
            ${postsHtml}
          </ul>
        </div>
      `;
        (0, _headerComponentJs.renderHeaderComponent)({
            element: document.querySelector(".header-container")
        });
        document.querySelector(".back-button").addEventListener("click", ()=>{
            (0, _indexJs.goToPage)((0, _routesJs.POSTS_PAGE));
        });
        document.querySelectorAll(".like-button").forEach((button)=>{
            button.addEventListener("click", (event)=>{
                const buttonEl = event.target.closest("button");
                const postId = buttonEl?.dataset.postId;
                if (!postId) {
                    console.error("\u274C \u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D postId \u0434\u043B\u044F \u043B\u0430\u0439\u043A\u0430.");
                    return;
                }
                const isLiked = event.target.src.includes("like-active");
                (0, _apiJs.toggleLike)({
                    postId,
                    isLiked,
                    token: (0, _indexJs.getToken)()
                }).then((updatedPost)=>{
                    const postElement = document.querySelector(`[data-post-id="${updatedPost.id}"]`);
                    if (postElement) {
                        const likeButton = postElement.querySelector("button img");
                        const likeCount = postElement.querySelector(".post-likes-text strong");
                        if (likeButton && likeCount) {
                            likeButton.src = updatedPost.isLiked ? "assets/images/like-active.svg" : "assets/images/like-not-active.svg";
                            likeCount.parentElement.innerHTML = `
                    \u{41D}\u{440}\u{430}\u{432}\u{438}\u{442}\u{441}\u{44F}: <strong>${updatedPost.likes.length}</strong>${updatedPost.likes.length > 0 ? ` \u{2014} ${updatedPost.likes[updatedPost.likes.length - 1].name}` : ""}
                  `;
                        } else console.error("\u041E\u0448\u0438\u0431\u043A\u0430: \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0434\u043B\u044F \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B");
                    } else console.error("\u041E\u0448\u0438\u0431\u043A\u0430: \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u043F\u043E\u0441\u0442\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D");
                }).catch((error)=>{
                    console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0438 \u043B\u0430\u0439\u043A\u0430:", error);
                });
            });
        });
    }).catch((error)=>{
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043F\u043E\u0441\u0442\u043E\u0432:", error);
        appEl.innerHTML = `
        <div class="page-container">
          <div class="header-container"></div>
          <div class="error">
            <p>\u{41E}\u{448}\u{438}\u{431}\u{43A}\u{430} \u{437}\u{430}\u{433}\u{440}\u{443}\u{437}\u{43A}\u{438} \u{43F}\u{43E}\u{441}\u{442}\u{43E}\u{432} \u{43F}\u{43E}\u{43B}\u{44C}\u{437}\u{43E}\u{432}\u{430}\u{442}\u{435}\u{43B}\u{44F}</p>
            <button class="back-button">\u{2190} \u{412}\u{435}\u{440}\u{43D}\u{443}\u{442}\u{44C}\u{441}\u{44F} \u{43A} \u{43B}\u{435}\u{43D}\u{442}\u{435}</button>
          </div>
        </div>
      `;
        document.querySelector(".back-button").addEventListener("click", ()=>{
            (0, _indexJs.goToPage)((0, _routesJs.POSTS_PAGE));
        });
        (0, _headerComponentJs.renderHeaderComponent)({
            element: document.querySelector(".header-container")
        });
    });
}

},{"../api.js":"lJgrb","./header-component.js":"ipQ1N","date-fns":"apLUd","date-fns/locale":"guJNA","../routes.js":"7oXEA","../index.js":"jOXmm","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./posts-page-component.js":"5krBj"}]},["kxwl6","jOXmm"], "jOXmm", "parcelRequire94c2", {})

//# sourceMappingURL=KP.e02fbd41.js.map
