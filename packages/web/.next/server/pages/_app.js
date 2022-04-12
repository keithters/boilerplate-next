/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/Web3Context.tsx":
/*!*********************************!*\
  !*** ./context/Web3Context.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Web3ContextProvider\": () => (/* binding */ Web3ContextProvider),\n/* harmony export */   \"useWeb3Context\": () => (/* binding */ useWeb3Context)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_Web3Client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/Web3Client */ \"./hooks/Web3Client.ts\");\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers */ \"./reducers/index.ts\");\n\n\n\n\nconst Web3Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(_reducers__WEBPACK_IMPORTED_MODULE_3__.web3InitialState);\nconst Web3ContextProvider = ({ children  })=>{\n    const web3ProviderState = (0,_hooks_Web3Client__WEBPACK_IMPORTED_MODULE_2__.useWeb3)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Web3Context.Provider, {\n        value: web3ProviderState,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/keith/Documents/Development/boilerplate-next/packages/web/context/Web3Context.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\nfunction useWeb3Context() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Web3Context);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L1dlYjNDb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQW9FO0FBQ3ZCO0FBQ29CO0FBRWpFLE1BQU1LLFdBQVcsaUJBQUdKLG9EQUFhLENBQW9CRyx1REFBZ0IsQ0FBQztBQU0vRCxNQUFNRSxtQkFBbUIsR0FBRyxDQUFDLEVBQUVDLFFBQVEsR0FBUyxHQUFLO0lBQzFELE1BQU1DLGlCQUFpQixHQUFHTCwwREFBTyxFQUFFO0lBRW5DLHFCQUNFLDhEQUFDRSxXQUFXLENBQUNJLFFBQVE7UUFBQ0MsS0FBSyxFQUFFRixpQkFBaUI7a0JBQzNDRCxRQUFROzs7OztpQkFDWSxDQUN4QjtDQUNGO0FBRU0sU0FBU0ksY0FBYyxHQUFHO0lBQy9CLE9BQU9ULGlEQUFVLENBQUNHLFdBQVcsQ0FBQztDQUMvQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi8uL2NvbnRleHQvV2ViM0NvbnRleHQudHN4P2QyMTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Q2hpbGQsIGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVdlYjMgfSBmcm9tICcuLi9ob29rcy9XZWIzQ2xpZW50J1xuaW1wb3J0IHsgV2ViM1Byb3ZpZGVyU3RhdGUsIHdlYjNJbml0aWFsU3RhdGUgfSBmcm9tICcuLi9yZWR1Y2VycydcblxuY29uc3QgV2ViM0NvbnRleHQgPSBjcmVhdGVDb250ZXh0PFdlYjNQcm92aWRlclN0YXRlPih3ZWIzSW5pdGlhbFN0YXRlKVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3RDaGlsZFxufVxuXG5leHBvcnQgY29uc3QgV2ViM0NvbnRleHRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IHdlYjNQcm92aWRlclN0YXRlID0gdXNlV2ViMygpXG5cbiAgcmV0dXJuIChcbiAgICA8V2ViM0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3dlYjNQcm92aWRlclN0YXRlfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1dlYjNDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VXZWIzQ29udGV4dCgpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoV2ViM0NvbnRleHQpXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVdlYjMiLCJ3ZWIzSW5pdGlhbFN0YXRlIiwiV2ViM0NvbnRleHQiLCJXZWIzQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ3ZWIzUHJvdmlkZXJTdGF0ZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VXZWIzQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/Web3Context.tsx\n");

/***/ }),

/***/ "./context/index.ts":
/*!**************************!*\
  !*** ./context/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Web3ContextProvider\": () => (/* reexport safe */ _Web3Context__WEBPACK_IMPORTED_MODULE_0__.Web3ContextProvider),\n/* harmony export */   \"useWeb3Context\": () => (/* reexport safe */ _Web3Context__WEBPACK_IMPORTED_MODULE_0__.useWeb3Context)\n/* harmony export */ });\n/* harmony import */ var _Web3Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Web3Context */ \"./context/Web3Context.tsx\");\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFtRDtBQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLy4vY29udGV4dC9pbmRleC50cz9iM2U0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IFdlYjNDb250ZXh0UHJvdmlkZXIgfSBmcm9tICcuL1dlYjNDb250ZXh0J1xuZXhwb3J0IHsgdXNlV2ViM0NvbnRleHQgfSBmcm9tICcuL1dlYjNDb250ZXh0JyJdLCJuYW1lcyI6WyJXZWIzQ29udGV4dFByb3ZpZGVyIiwidXNlV2ViM0NvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/index.ts\n");

/***/ }),

/***/ "./hooks/Web3Client.ts":
/*!*****************************!*\
  !*** ./hooks/Web3Client.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useWeb3\": () => (/* binding */ useWeb3)\n/* harmony export */ });\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! web3modal */ \"web3modal\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @walletconnect/web3-provider */ \"@walletconnect/web3-provider\");\n/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers */ \"./reducers/index.ts\");\n\n\n\nconst providerOptions = {\n    walletconnect: {\n        package: (_walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_2___default()),\n        options: {\n            infuraId: \"3e0693738af742bea074b079e4f1f6b6\"\n        }\n    }\n};\nlet web3Modal;\nif (false) {}\n\n\n\nconst useWeb3 = ()=>{\n    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useReducer)(_reducers__WEBPACK_IMPORTED_MODULE_5__.web3Reducer, _reducers__WEBPACK_IMPORTED_MODULE_5__.web3InitialState);\n    const { provider: provider1 , web3Provider: web3Provider1 , address: address1 , network: network1  } = state;\n    const connect = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(async ()=>{\n        if (web3Modal) {\n            try {\n                const provider = await web3Modal.connect();\n                const web3Provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(provider);\n                const signer = web3Provider.getSigner();\n                const address = await signer.getAddress();\n                const network = await web3Provider.getNetwork();\n                react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.success(\"Connected to Web3\");\n                dispatch({\n                    type: \"SET_WEB3_PROVIDER\",\n                    provider,\n                    web3Provider,\n                    address,\n                    network\n                });\n            } catch (e) {\n                console.log(\"connect error\", e);\n            }\n        } else {\n            console.error(\"No Web3Modal\");\n        }\n    }, []);\n    const disconnect = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(async ()=>{\n        if (web3Modal) {\n            web3Modal.clearCachedProvider();\n            if ((provider1 === null || provider1 === void 0 ? void 0 : provider1.disconnect) && typeof provider1.disconnect === \"function\") {\n                await provider1.disconnect();\n            }\n            react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error(\"Disconnected from Web3\");\n            dispatch({\n                type: \"RESET_WEB3_PROVIDER\"\n            });\n        } else {\n            console.error(\"No Web3Modal\");\n        }\n    }, [\n        provider1\n    ]);\n    // Auto connect to the cached provider\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (web3Modal && web3Modal.cachedProvider) {\n            connect();\n        }\n    }, [\n        connect\n    ]);\n    // EIP-1193 events\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (provider1 === null || provider1 === void 0 ? void 0 : provider1.on) {\n            const handleAccountsChanged = (accounts)=>{\n                react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.info(\"Changed Web3 Account\");\n                dispatch({\n                    type: \"SET_ADDRESS\",\n                    address: accounts[0]\n                });\n            };\n            // https://docs.ethers.io/v5/concepts/best-practices/#best-practices--network-changes\n            const handleChainChanged = (_hexChainId)=>{\n                if (false) {} else {\n                    console.log(\"window is undefined\");\n                }\n            };\n            const handleDisconnect = (error)=>{\n                // eslint-disable-next-line no-console\n                console.log(\"disconnect\", error);\n                disconnect();\n            };\n            provider1.on(\"accountsChanged\", handleAccountsChanged);\n            provider1.on(\"chainChanged\", handleChainChanged);\n            provider1.on(\"disconnect\", handleDisconnect);\n            // Subscription Cleanup\n            return ()=>{\n                if (provider1.removeListener) {\n                    provider1.removeListener(\"accountsChanged\", handleAccountsChanged);\n                    provider1.removeListener(\"chainChanged\", handleChainChanged);\n                    provider1.removeListener(\"disconnect\", handleDisconnect);\n                }\n            };\n        }\n    }, [\n        provider1,\n        disconnect\n    ]);\n    return {\n        provider: provider1,\n        web3Provider: web3Provider1,\n        address: address1,\n        network: network1,\n        connect,\n        disconnect\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRO1FBQ1JDLFlBQVksRUFBWkEsYUFBWTtRQUNaQyxPQUFPLEVBQVBBLFFBQU87UUFDUGIsT0FBTyxFQUFQQSxRQUFPO1FBQ1BjLE9BQU87UUFDUGEsVUFBVTtLQUNYLENBQWM7Q0FDaEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9ob29rcy9XZWIzQ2xpZW50LnRzPzhhZTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcblxuaW1wb3J0IFdlYjNNb2RhbCBmcm9tICd3ZWIzbW9kYWwnXG5pbXBvcnQgV2FsbGV0Q29ubmVjdFByb3ZpZGVyIGZyb20gJ0B3YWxsZXRjb25uZWN0L3dlYjMtcHJvdmlkZXInXG5cbmNvbnN0IHByb3ZpZGVyT3B0aW9ucyA9IHtcbiAgd2FsbGV0Y29ubmVjdDoge1xuICAgIHBhY2thZ2U6IFdhbGxldENvbm5lY3RQcm92aWRlciwgLy8gcmVxdWlyZWRcbiAgICBvcHRpb25zOiB7XG4gICAgICBpbmZ1cmFJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSU5GVVJBX0lELFxuICAgIH0sXG4gIH0sXG59XG5cbmxldCB3ZWIzTW9kYWw6IFdlYjNNb2RhbCB8IG51bGxcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICB3ZWIzTW9kYWwgPSBuZXcgV2ViM01vZGFsKHtcbiAgICBuZXR3b3JrOiAnbWFpbm5ldCcsIC8vIG9wdGlvbmFsXG4gICAgY2FjaGVQcm92aWRlcjogdHJ1ZSxcbiAgICBwcm92aWRlck9wdGlvbnMsIC8vIHJlcXVpcmVkXG4gIH0pXG59XG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVkdWNlciwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycydcblxuaW1wb3J0IHtcbiAgV2ViM1Byb3ZpZGVyU3RhdGUsXG4gIFdlYjNBY3Rpb24sXG4gIHdlYjNJbml0aWFsU3RhdGUsXG4gIHdlYjNSZWR1Y2VyLFxufSBmcm9tICcuLi9yZWR1Y2VycydcblxuLy8gV2ViM01vZGFsIGNvZGUgZ29lcyBoZXJlXG5cbnR5cGUgV2ViM0NsaWVudCA9IFdlYjNQcm92aWRlclN0YXRlICYge1xuICBjb25uZWN0OiAoKSA9PiBQcm9taXNlPHZvaWQ+XG4gIGRpc2Nvbm5lY3Q6ICgpID0+IFByb21pc2U8dm9pZD5cbn1cblxuZXhwb3J0IGNvbnN0IHVzZVdlYjMgPSAoKSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcih3ZWIzUmVkdWNlciwgd2ViM0luaXRpYWxTdGF0ZSlcbiAgY29uc3QgeyBwcm92aWRlciwgd2ViM1Byb3ZpZGVyLCBhZGRyZXNzLCBuZXR3b3JrIH0gPSBzdGF0ZVxuXG4gIGNvbnN0IGNvbm5lY3QgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgaWYgKHdlYjNNb2RhbCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBhd2FpdCB3ZWIzTW9kYWwuY29ubmVjdCgpXG4gICAgICAgIGNvbnN0IHdlYjNQcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihwcm92aWRlcilcbiAgICAgICAgY29uc3Qgc2lnbmVyID0gd2ViM1Byb3ZpZGVyLmdldFNpZ25lcigpXG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBhd2FpdCBzaWduZXIuZ2V0QWRkcmVzcygpXG4gICAgICAgIGNvbnN0IG5ldHdvcmsgPSBhd2FpdCB3ZWIzUHJvdmlkZXIuZ2V0TmV0d29yaygpXG5cbiAgICAgICAgdG9hc3Quc3VjY2VzcygnQ29ubmVjdGVkIHRvIFdlYjMnKVxuXG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiAnU0VUX1dFQjNfUFJPVklERVInLFxuICAgICAgICAgIHByb3ZpZGVyLFxuICAgICAgICAgIHdlYjNQcm92aWRlcixcbiAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgIG5ldHdvcmssXG4gICAgICAgIH0gYXMgV2ViM0FjdGlvbilcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Nvbm5lY3QgZXJyb3InLCBlKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdObyBXZWIzTW9kYWwnKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgY29uc3QgZGlzY29ubmVjdCA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBpZiAod2ViM01vZGFsKSB7XG4gICAgICB3ZWIzTW9kYWwuY2xlYXJDYWNoZWRQcm92aWRlcigpXG4gICAgICBpZiAocHJvdmlkZXI/LmRpc2Nvbm5lY3QgJiYgdHlwZW9mIHByb3ZpZGVyLmRpc2Nvbm5lY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgYXdhaXQgcHJvdmlkZXIuZGlzY29ubmVjdCgpXG4gICAgICB9XG5cbiAgICAgIHRvYXN0LmVycm9yKCdEaXNjb25uZWN0ZWQgZnJvbSBXZWIzJylcblxuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiAnUkVTRVRfV0VCM19QUk9WSURFUicsXG4gICAgICB9IGFzIFdlYjNBY3Rpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIFdlYjNNb2RhbCcpXG4gICAgfVxuICB9LCBbcHJvdmlkZXJdKVxuXG4gIC8vIEF1dG8gY29ubmVjdCB0byB0aGUgY2FjaGVkIHByb3ZpZGVyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHdlYjNNb2RhbCAmJiB3ZWIzTW9kYWwuY2FjaGVkUHJvdmlkZXIpIHtcbiAgICAgIGNvbm5lY3QoKVxuICAgIH1cbiAgfSwgW2Nvbm5lY3RdKVxuXG4gIC8vIEVJUC0xMTkzIGV2ZW50c1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcm92aWRlcj8ub24pIHtcbiAgICAgIGNvbnN0IGhhbmRsZUFjY291bnRzQ2hhbmdlZCA9IChhY2NvdW50czogc3RyaW5nW10pID0+IHtcbiAgICAgICAgdG9hc3QuaW5mbygnQ2hhbmdlZCBXZWIzIEFjY291bnQnKVxuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogJ1NFVF9BRERSRVNTJyxcbiAgICAgICAgICBhZGRyZXNzOiBhY2NvdW50c1swXSxcbiAgICAgICAgfSBhcyBXZWIzQWN0aW9uKVxuICAgICAgfVxuXG4gICAgICAvLyBodHRwczovL2RvY3MuZXRoZXJzLmlvL3Y1L2NvbmNlcHRzL2Jlc3QtcHJhY3RpY2VzLyNiZXN0LXByYWN0aWNlcy0tbmV0d29yay1jaGFuZ2VzXG4gICAgICBjb25zdCBoYW5kbGVDaGFpbkNoYW5nZWQgPSAoX2hleENoYWluSWQ6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnc3dpdGNoZWQgdG8gY2hhaW4uLi4nLCBfaGV4Q2hhaW5JZClcbiAgICAgICAgICB0b2FzdC5pbmZvKCdXZWIzIE5ldHdvcmsgQ2hhbmdlZCcpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3dpbmRvdyBpcyB1bmRlZmluZWQnKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGhhbmRsZURpc2Nvbm5lY3QgPSAoZXJyb3I6IHsgY29kZTogbnVtYmVyOyBtZXNzYWdlOiBzdHJpbmcgfSkgPT4ge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLmxvZygnZGlzY29ubmVjdCcsIGVycm9yKVxuICAgICAgICBkaXNjb25uZWN0KClcbiAgICAgIH1cblxuICAgICAgcHJvdmlkZXIub24oJ2FjY291bnRzQ2hhbmdlZCcsIGhhbmRsZUFjY291bnRzQ2hhbmdlZClcbiAgICAgIHByb3ZpZGVyLm9uKCdjaGFpbkNoYW5nZWQnLCBoYW5kbGVDaGFpbkNoYW5nZWQpXG4gICAgICBwcm92aWRlci5vbignZGlzY29ubmVjdCcsIGhhbmRsZURpc2Nvbm5lY3QpXG5cbiAgICAgIC8vIFN1YnNjcmlwdGlvbiBDbGVhbnVwXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAocHJvdmlkZXIucmVtb3ZlTGlzdGVuZXIpIHtcbiAgICAgICAgICBwcm92aWRlci5yZW1vdmVMaXN0ZW5lcignYWNjb3VudHNDaGFuZ2VkJywgaGFuZGxlQWNjb3VudHNDaGFuZ2VkKVxuICAgICAgICAgIHByb3ZpZGVyLnJlbW92ZUxpc3RlbmVyKCdjaGFpbkNoYW5nZWQnLCBoYW5kbGVDaGFpbkNoYW5nZWQpXG4gICAgICAgICAgcHJvdmlkZXIucmVtb3ZlTGlzdGVuZXIoJ2Rpc2Nvbm5lY3QnLCBoYW5kbGVEaXNjb25uZWN0KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCBbcHJvdmlkZXIsIGRpc2Nvbm5lY3RdKVxuXG4gIHJldHVybiB7XG4gICAgcHJvdmlkZXIsXG4gICAgd2ViM1Byb3ZpZGVyLFxuICAgIGFkZHJlc3MsXG4gICAgbmV0d29yayxcbiAgICBjb25uZWN0LFxuICAgIGRpc2Nvbm5lY3QsXG4gIH0gYXMgV2ViM0NsaWVudFxufVxuIl0sIm5hbWVzIjpbInRvYXN0IiwiV2ViM01vZGFsIiwiV2FsbGV0Q29ubmVjdFByb3ZpZGVyIiwicHJvdmlkZXJPcHRpb25zIiwid2FsbGV0Y29ubmVjdCIsInBhY2thZ2UiLCJvcHRpb25zIiwiaW5mdXJhSWQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfSU5GVVJBX0lEIiwid2ViM01vZGFsIiwibmV0d29yayIsImNhY2hlUHJvdmlkZXIiLCJ1c2VFZmZlY3QiLCJ1c2VSZWR1Y2VyIiwidXNlQ2FsbGJhY2siLCJldGhlcnMiLCJ3ZWIzSW5pdGlhbFN0YXRlIiwid2ViM1JlZHVjZXIiLCJ1c2VXZWIzIiwic3RhdGUiLCJkaXNwYXRjaCIsInByb3ZpZGVyIiwid2ViM1Byb3ZpZGVyIiwiYWRkcmVzcyIsImNvbm5lY3QiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJnZXRBZGRyZXNzIiwiZ2V0TmV0d29yayIsInN1Y2Nlc3MiLCJ0eXBlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImRpc2Nvbm5lY3QiLCJjbGVhckNhY2hlZFByb3ZpZGVyIiwiY2FjaGVkUHJvdmlkZXIiLCJvbiIsImhhbmRsZUFjY291bnRzQ2hhbmdlZCIsImFjY291bnRzIiwiaW5mbyIsImhhbmRsZUNoYWluQ2hhbmdlZCIsIl9oZXhDaGFpbklkIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJoYW5kbGVEaXNjb25uZWN0IiwicmVtb3ZlTGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/Web3Client.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"../../.yarn/__virtual__/react-toastify-virtual-dabe629b25/0/cache/react-toastify-npm-8.2.0-3f638b6659-670f1176fb.zip/node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context */ \"./context/index.ts\");\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context__WEBPACK_IMPORTED_MODULE_4__.Web3ContextProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/keith/Documents/Development/boilerplate-next/packages/web/pages/_app.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, {\n                    hideProgressBar: true,\n                    position: \"bottom-right\",\n                    autoClose: 2000\n                }, void 0, false, {\n                    fileName: \"/Users/keith/Documents/Development/boilerplate-next/packages/web/pages/_app.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/keith/Documents/Development/boilerplate-next/packages/web/pages/_app.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFBOEI7QUFFaUI7QUFFRDtBQUNFO0FBRWhELFNBQVNFLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBWSxFQUFFO0lBQ2pELHFCQUNFLDhEQUFDSCx5REFBbUI7a0JBQ3BCOzs4QkFDRSw4REFBQ0UsU0FBUztvQkFBRSxHQUFHQyxTQUFTOzs7Ozt3QkFBSTs4QkFDNUIsOERBQUNKLDBEQUFjO29CQUNiSyxlQUFlO29CQUNmQyxRQUFRLEVBQUMsY0FBYztvQkFDdkJDLFNBQVMsRUFBRSxJQUFJOzs7Ozt3QkFDZjs7d0JBQ0Q7Ozs7O1lBQ21CLENBQ3ZCO0NBQ0Y7QUFFRCxpRUFBZUwsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xuXG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnXG5pbXBvcnQgeyBXZWIzQ29udGV4dFByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dCdcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxXZWIzQ29udGV4dFByb3ZpZGVyPlxuICAgIDw+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8VG9hc3RDb250YWluZXJcbiAgICAgICAgaGlkZVByb2dyZXNzQmFyXG4gICAgICAgIHBvc2l0aW9uPVwiYm90dG9tLXJpZ2h0XCJcbiAgICAgICAgYXV0b0Nsb3NlPXsyMDAwfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgICA8L1dlYjNDb250ZXh0UHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJUb2FzdENvbnRhaW5lciIsIldlYjNDb250ZXh0UHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImhpZGVQcm9ncmVzc0JhciIsInBvc2l0aW9uIiwiYXV0b0Nsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./reducers/Web3Provider.ts":
/*!**********************************!*\
  !*** ./reducers/Web3Provider.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"web3InitialState\": () => (/* binding */ web3InitialState),\n/* harmony export */   \"web3Reducer\": () => (/* binding */ web3Reducer)\n/* harmony export */ });\nconst web3InitialState = {\n    provider: null,\n    web3Provider: null,\n    address: null,\n    network: null,\n    connect: null,\n    disconnect: null\n};\nfunction web3Reducer(state, action) {\n    switch(action.type){\n        case \"SET_WEB3_PROVIDER\":\n            return {\n                ...state,\n                provider: action.provider,\n                web3Provider: action.web3Provider,\n                address: action.address,\n                network: action.network\n            };\n        case \"SET_ADDRESS\":\n            return {\n                ...state,\n                address: action.address\n            };\n        case \"SET_NETWORK\":\n            return {\n                ...state,\n                network: action.network\n            };\n        case \"RESET_WEB3_PROVIDER\":\n            return web3InitialState;\n        default:\n            throw new Error();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy9XZWIzUHJvdmlkZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFvQk8sTUFBTUEsZ0JBQWdCLEdBQXNCO0lBQ2pEQyxRQUFRLEVBQUUsSUFBSTtJQUNkQyxZQUFZLEVBQUUsSUFBSTtJQUNsQkMsT0FBTyxFQUFFLElBQUk7SUFDYkMsT0FBTyxFQUFFLElBQUk7SUFDYkMsT0FBTyxFQUFFLElBQUk7SUFDYkMsVUFBVSxFQUFFLElBQUk7Q0FDakI7QUFzQk0sU0FBU0MsV0FBVyxDQUN6QkMsS0FBd0IsRUFDeEJDLE1BQWtCLEVBQ0M7SUFDbkIsT0FBUUEsTUFBTSxDQUFDQyxJQUFJO1FBQ2pCLEtBQUssbUJBQW1CO1lBQ3RCLE9BQU87Z0JBQ0wsR0FBR0YsS0FBSztnQkFDUlAsUUFBUSxFQUFFUSxNQUFNLENBQUNSLFFBQVE7Z0JBQ3pCQyxZQUFZLEVBQUVPLE1BQU0sQ0FBQ1AsWUFBWTtnQkFDakNDLE9BQU8sRUFBRU0sTUFBTSxDQUFDTixPQUFPO2dCQUN2QkMsT0FBTyxFQUFFSyxNQUFNLENBQUNMLE9BQU87YUFDeEI7UUFDSCxLQUFLLGFBQWE7WUFDaEIsT0FBTztnQkFDTCxHQUFHSSxLQUFLO2dCQUNSTCxPQUFPLEVBQUVNLE1BQU0sQ0FBQ04sT0FBTzthQUN4QjtRQUNILEtBQUssYUFBYTtZQUNoQixPQUFPO2dCQUNMLEdBQUdLLEtBQUs7Z0JBQ1JKLE9BQU8sRUFBRUssTUFBTSxDQUFDTCxPQUFPO2FBQ3hCO1FBQ0gsS0FBSyxxQkFBcUI7WUFDeEIsT0FBT0osZ0JBQWdCO1FBQ3pCO1lBQ0UsTUFBTSxJQUFJVyxLQUFLLEVBQUU7S0FDcEI7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi8uL3JlZHVjZXJzL1dlYjNQcm92aWRlci50cz8zNDIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycydcblxuZXhwb3J0IHR5cGUgV2ViM1Byb3ZpZGVyU3RhdGUgPSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gIHByb3ZpZGVyOiBhbnlcbiAgd2ViM1Byb3ZpZGVyOiBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlciB8IG51bGwgfCB1bmRlZmluZWRcbiAgYWRkcmVzczogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZFxuICBuZXR3b3JrOiBldGhlcnMucHJvdmlkZXJzLk5ldHdvcmsgfCBudWxsIHwgdW5kZWZpbmVkXG4gIGNvbm5lY3Q6ICgoKSA9PiBQcm9taXNlPHZvaWQ+KSB8IG51bGxcbiAgZGlzY29ubmVjdDogKCgpID0+IFByb21pc2U8dm9pZD4pIHwgbnVsbFxufVxuXG5leHBvcnQgdHlwZSBXZWIzU3RhdGUgPSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gIHByb3ZpZGVyOiBhbnlcbiAgd2ViM1Byb3ZpZGVyOiBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlciB8IG51bGwgfCB1bmRlZmluZWRcbiAgYWRkcmVzczogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZFxuICBuZXR3b3JrOiBldGhlcnMucHJvdmlkZXJzLk5ldHdvcmsgfCBudWxsIHwgdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBjb25zdCB3ZWIzSW5pdGlhbFN0YXRlOiBXZWIzUHJvdmlkZXJTdGF0ZSA9IHtcbiAgcHJvdmlkZXI6IG51bGwsXG4gIHdlYjNQcm92aWRlcjogbnVsbCxcbiAgYWRkcmVzczogbnVsbCxcbiAgbmV0d29yazogbnVsbCxcbiAgY29ubmVjdDogbnVsbCxcbiAgZGlzY29ubmVjdDogbnVsbCxcbn1cblxuZXhwb3J0IHR5cGUgV2ViM0FjdGlvbiA9XG4gIHwge1xuICAgICAgdHlwZTogJ1NFVF9XRUIzX1BST1ZJREVSJ1xuICAgICAgcHJvdmlkZXI/OiBXZWIzUHJvdmlkZXJTdGF0ZVsncHJvdmlkZXInXVxuICAgICAgd2ViM1Byb3ZpZGVyPzogV2ViM1Byb3ZpZGVyU3RhdGVbJ3dlYjNQcm92aWRlciddXG4gICAgICBhZGRyZXNzPzogV2ViM1Byb3ZpZGVyU3RhdGVbJ2FkZHJlc3MnXVxuICAgICAgbmV0d29yaz86IFdlYjNQcm92aWRlclN0YXRlWyduZXR3b3JrJ11cbiAgICB9XG4gIHwge1xuICAgICAgdHlwZTogJ1NFVF9BRERSRVNTJ1xuICAgICAgYWRkcmVzcz86IFdlYjNQcm92aWRlclN0YXRlWydhZGRyZXNzJ11cbiAgICB9XG4gIHwge1xuICAgICAgdHlwZTogJ1NFVF9ORVRXT1JLJ1xuICAgICAgbmV0d29yaz86IFdlYjNQcm92aWRlclN0YXRlWyduZXR3b3JrJ11cbiAgICB9XG4gIHwge1xuICAgICAgdHlwZTogJ1JFU0VUX1dFQjNfUFJPVklERVInXG4gICAgfVxuXG5leHBvcnQgZnVuY3Rpb24gd2ViM1JlZHVjZXIoXG4gIHN0YXRlOiBXZWIzUHJvdmlkZXJTdGF0ZSxcbiAgYWN0aW9uOiBXZWIzQWN0aW9uXG4pOiBXZWIzUHJvdmlkZXJTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdTRVRfV0VCM19QUk9WSURFUic6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvdmlkZXI6IGFjdGlvbi5wcm92aWRlcixcbiAgICAgICAgd2ViM1Byb3ZpZGVyOiBhY3Rpb24ud2ViM1Byb3ZpZGVyLFxuICAgICAgICBhZGRyZXNzOiBhY3Rpb24uYWRkcmVzcyxcbiAgICAgICAgbmV0d29yazogYWN0aW9uLm5ldHdvcmssXG4gICAgICB9XG4gICAgY2FzZSAnU0VUX0FERFJFU1MnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFkZHJlc3M6IGFjdGlvbi5hZGRyZXNzLFxuICAgICAgfVxuICAgIGNhc2UgJ1NFVF9ORVRXT1JLJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBuZXR3b3JrOiBhY3Rpb24ubmV0d29yayxcbiAgICAgIH1cbiAgICBjYXNlICdSRVNFVF9XRUIzX1BST1ZJREVSJzpcbiAgICAgIHJldHVybiB3ZWIzSW5pdGlhbFN0YXRlXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcigpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ3ZWIzSW5pdGlhbFN0YXRlIiwicHJvdmlkZXIiLCJ3ZWIzUHJvdmlkZXIiLCJhZGRyZXNzIiwibmV0d29yayIsImNvbm5lY3QiLCJkaXNjb25uZWN0Iiwid2ViM1JlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/Web3Provider.ts\n");

/***/ }),

/***/ "./reducers/index.ts":
/*!***************************!*\
  !*** ./reducers/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"web3InitialState\": () => (/* reexport safe */ _Web3Provider__WEBPACK_IMPORTED_MODULE_0__.web3InitialState),\n/* harmony export */   \"web3Reducer\": () => (/* reexport safe */ _Web3Provider__WEBPACK_IMPORTED_MODULE_0__.web3Reducer)\n/* harmony export */ });\n/* harmony import */ var _Web3Provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Web3Provider */ \"./reducers/Web3Provider.ts\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDOEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9yZWR1Y2Vycy9pbmRleC50cz81MWFmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB0eXBlIHsgV2ViM1Byb3ZpZGVyU3RhdGUsIFdlYjNBY3Rpb24gfSBmcm9tICcuL1dlYjNQcm92aWRlcidcbmV4cG9ydCB7IHdlYjNJbml0aWFsU3RhdGUsIHdlYjNSZWR1Y2VyIH0gZnJvbSAnLi9XZWIzUHJvdmlkZXInXG4iXSwibmFtZXMiOlsid2ViM0luaXRpYWxTdGF0ZSIsIndlYjNSZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/index.ts\n");

/***/ }),

/***/ "../../.yarn/__virtual__/react-toastify-virtual-dabe629b25/0/cache/react-toastify-npm-8.2.0-3f638b6659-670f1176fb.zip/node_modules/react-toastify/dist/ReactToastify.css":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ../../.yarn/__virtual__/react-toastify-virtual-dabe629b25/0/cache/react-toastify-npm-8.2.0-3f638b6659-670f1176fb.zip/node_modules/react-toastify/dist/ReactToastify.css ***!
  \*******************************************************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@walletconnect/web3-provider":
/*!***********************************************!*\
  !*** external "@walletconnect/web3-provider" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@walletconnect/web3-provider");

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("ethers");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "web3modal":
/*!****************************!*\
  !*** external "web3modal" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("web3modal");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();