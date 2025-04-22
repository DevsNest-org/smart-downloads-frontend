(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/DownloadHandler.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>DownloadHandler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function DownloadHandler({ downloadData, onDownloadComplete }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DownloadHandler.useEffect": ()=>{
            if (downloadData) {
                const a = document.createElement('a');
                a.href = downloadData.url;
                a.download = `${downloadData.platform}-video.mp4`;
                a.target = '_blank'; // Open in new tab for Instagram
                a.rel = 'noopener noreferrer';
                // For Instagram, we need to handle the download differently
                if (downloadData.platform === 'instagram') {
                    // Create a fetch request to get the video
                    fetch(downloadData.url).then({
                        "DownloadHandler.useEffect": (response)=>response.blob()
                    }["DownloadHandler.useEffect"]).then({
                        "DownloadHandler.useEffect": (blob)=>{
                            const url = window.URL.createObjectURL(blob);
                            a.href = url;
                            document.body.appendChild(a);
                            a.click();
                            document.body.removeChild(a);
                            window.URL.revokeObjectURL(url);
                            onDownloadComplete();
                        }
                    }["DownloadHandler.useEffect"]).catch({
                        "DownloadHandler.useEffect": (error)=>{
                            console.error('Error downloading video:', error);
                            onDownloadComplete();
                        }
                    }["DownloadHandler.useEffect"]);
                } else {
                    // For other platforms, use the direct download
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    onDownloadComplete();
                }
            }
        }
    }["DownloadHandler.useEffect"], [
        downloadData,
        onDownloadComplete
    ]);
    return null;
}
_s(DownloadHandler, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = DownloadHandler;
var _c;
__turbopack_context__.k.register(_c, "DownloadHandler");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/DownloadHandler.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/DownloadHandler.tsx [app-client] (ecmascript)"));
}}),
}]);

//# sourceMappingURL=src_components_DownloadHandler_tsx_d81c150c._.js.map