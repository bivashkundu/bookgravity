module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/services/event.emitter.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/eventemitter3/index.mjs [app-ssr] (ecmascript) <locals>");
;
const eventEmitter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]();
const __TURBOPACK__default__export__ = eventEmitter;
}),
"[project]/hooks/utils/useLatestRef .tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const useLatestRef = (value)=>{
    const valueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        valueRef.current = value;
    }, [
        value
    ]);
    return valueRef;
};
const __TURBOPACK__default__export__ = useLatestRef;
}),
"[project]/hooks/utils/useEventEmitter.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$event$2e$emitter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/event.emitter.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$utils$2f$useLatestRef__$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/utils/useLatestRef .tsx [app-ssr] (ecmascript)");
;
;
;
const useEventEmitter = (eventName, callback)=>{
    const callbackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$utils$2f$useLatestRef__$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(callback);
    const handleEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((...data)=>{
        callbackRef.current(...data);
    }, [
        callbackRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (eventName?.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$event$2e$emitter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].on(eventName, handleEvent);
        }
        return ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$event$2e$emitter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].off(eventName, handleEvent);
        };
    }, [
        eventName,
        handleEvent
    ]);
};
const __TURBOPACK__default__export__ = useEventEmitter;
}),
"[project]/json/events/events.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const events = {
    showNotification: 'showNotification',
    logoutCurrentUser: 'logoutCurrentUser',
    routerPush: 'routerPush',
    fetchAfterAddToFavourite: 'fetchAfterAddToFavourite'
};
const __TURBOPACK__default__export__ = events;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/components/EventListener/EventListener.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EventListeners
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$utils$2f$useEventEmitter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/utils/useEventEmitter.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$json$2f$events$2f$events$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/json/events/events.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function EventListeners() {
    const showNotifications = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((data)=>{
        if (data.variant === 'error') {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(data.message);
        }
        if (data.variant === 'success') {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(data.message);
        }
        if (data.variant === 'warning') {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(data.message);
        }
    }, []);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleRoutes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((pathName)=>{
        router.push(pathName);
    }, [
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$utils$2f$useEventEmitter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$json$2f$events$2f$events$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].showNotification, showNotifications);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$utils$2f$useEventEmitter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$json$2f$events$2f$events$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].routerPush, handleRoutes);
    return null;
}
}),
"[next]/internal/font/google/dm_sans_6bc4c719.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "dm_sans_6bc4c719-module__tdlEFa__className",
  "variable": "dm_sans_6bc4c719-module__tdlEFa__variable",
});
}),
"[next]/internal/font/google/dm_sans_6bc4c719.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$dm_sans_6bc4c719$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/dm_sans_6bc4c719.module.css [app-ssr] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$dm_sans_6bc4c719$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'DM Sans', 'DM Sans Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$dm_sans_6bc4c719$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$dm_sans_6bc4c719$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/mui-theme/_palette.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ** Type Imports
__turbopack_context__.s([
    "palette",
    ()=>palette
]);
const palette = (mode)=>{
    // ** Vars
    const whiteColor = '#FFF';
    const lightColor = '#2F2B3D'; // Hex equivalent of '47, 43, 61'
    const darkColor = '#334F4D'; // Hex equivalent of '208, 212, 241'
    const darkPaperBgColor = '#2F3349';
    const mainColor = mode === 'light' ? darkColor : darkColor;
    const defaultBgColor = whiteColor;
    // Convert RGBA to Hex with opacity
    const hexWithOpacity = (hex, opacity)=>{
        const alpha = Math.round(opacity * 255).toString(16).padStart(2, '0');
        return `${hex}${alpha}`;
    };
    return {
        customColors: {
            dark: darkColor,
            main: mainColor,
            light: lightColor,
            lightPaperBg: whiteColor,
            darkPaperBg: darkPaperBgColor,
            bodyBg: mode === 'light' ? '#F8F7FA' : '#25293C',
            trackBg: mode === 'light' ? '#F1F0F2' : '#363B54',
            avatarBg: mode === 'light' ? '#DBDADE' : '#4A5072',
            tableHeaderBg: mode === 'light' ? '#F6F6F7' : '#4A5072',
            placeText: '#576E6E'
        },
        mode: mode,
        common: {
            black: '#000',
            white: whiteColor
        },
        primary: {
            light: '#8479F2',
            main: '#c81317',
            dark: '#655BD3',
            contrastText: whiteColor
        },
        secondary: {
            light: '#B2B4B8',
            main: '#141413',
            dark: '#C0F060',
            contrastText: whiteColor
        },
        error: {
            light: '#ED6F70',
            main: '#EA5455',
            dark: '#CE4A4B',
            contrastText: whiteColor
        },
        warning: {
            light: '#FFAB5A',
            main: '#FF9F43',
            dark: '#E08C3B',
            contrastText: whiteColor
        },
        info: {
            light: '#1FD5EB',
            main: '#00CFE8',
            dark: '#00B6CC',
            contrastText: whiteColor
        },
        success: {
            light: '#42CE80',
            main: '#28C76F',
            dark: '#23AF62',
            contrastText: whiteColor
        },
        grey: {
            50: '#FAFAFA',
            100: '#F5F5F5',
            200: '#EEEEEE',
            300: '#E0E0E0',
            400: '#BDBDBD',
            500: '#9E9E9E',
            600: '#757575',
            700: '#616161',
            800: '#424242',
            900: '#212121',
            A100: '#F5F5F5',
            A200: '#EEEEEE',
            A400: '#BDBDBD',
            A700: '#616161'
        },
        text: {
            primary: mainColor,
            secondary: hexWithOpacity(mainColor, 0.68),
            disabled: hexWithOpacity(mainColor, 0.42)
        },
        divider: hexWithOpacity(mainColor, 0.16),
        background: {
            paper: mode === 'light' ? whiteColor : darkPaperBgColor,
            default: defaultBgColor
        },
        action: {
            active: hexWithOpacity(mainColor, 0.54),
            hover: hexWithOpacity(mainColor, 0.04),
            selected: hexWithOpacity(mainColor, 0.06),
            selectedOpacity: 0.06,
            disabled: hexWithOpacity(mainColor, 0.26),
            disabledBackground: hexWithOpacity(mainColor, 0.12),
            focus: hexWithOpacity(mainColor, 0.12)
        }
    };
};
}),
"[project]/mui-theme/_muiTheme.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MuiThemeOptions",
    ()=>MuiThemeOptions
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$dm_sans_6bc4c719$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/dm_sans_6bc4c719.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mui$2d$theme$2f$_palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mui-theme/_palette.ts [app-ssr] (ecmascript)");
;
;
const MuiThemeOptions = (mode)=>{
    return {
        palette: (0, __TURBOPACK__imported__module__$5b$project$5d2f$mui$2d$theme$2f$_palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["palette"])(mode),
        typography: {
            fontFamily: [
                `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$dm_sans_6bc4c719$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].style.fontFamily}`
            ].join(','),
            fontSize: 16,
            h1: {
                fontSize: '68px',
                lineHeight: '1.1em',
                fontWeight: '400',
                '@media(max-width:899px)': {
                    fontSize: '22px'
                }
            },
            h2: {
                fontSize: '35px',
                lineHeight: '1.1em',
                fontWeight: '400',
                '@media(max-width:899px)': {
                    fontSize: '22px'
                }
            },
            h3: {
                fontSize: '30px',
                lineHeight: '1.1em',
                fontWeight: '700',
                '@media(max-width:899px)': {
                    fontSize: '18px'
                }
            },
            h4: {
                fontSize: '25px',
                lineHeight: '1.3',
                fontWeight: '700'
            },
            h5: {
                fontSize: '22px',
                lineHeight: '1.4',
                fontWeight: '600'
            },
            h6: {
                fontSize: '18px',
                lineHeight: '1.5',
                fontWeight: '600'
            },
            body1: {
                fontSize: '16px',
                lineHeight: '1.5em'
            },
            body2: {
                fontSize: '14px',
                lineHeight: '1.5em'
            },
            caption: {
                fontSize: '14px',
                lineHeight: '1.5em'
            }
        },
        components: {
            MuiSkeleton: {
                defaultProps: {
                    animation: 'wave'
                }
            },
            MuiCard: {
                styleOverrides: {
                    root: ({ _ownerState, theme })=>{
                        return {
                            borderRadius: '8px',
                            boxShadow: `0px 4px 24px 0px ${theme.palette.background.paper}`
                        };
                    }
                }
            },
            MuiMenuItem: {
                styleOverrides: {
                    root: ()=>{
                        return {
                            '@media(max-width:899px)': {
                                minHeight: '20px'
                            }
                        };
                    }
                }
            },
            MuiMenu: {
                styleOverrides: {
                    paper: ({ _theme })=>{
                        return {
                            overflow: 'visible !important',
                            filter: 'drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.32))',
                            marginTop: '6px',
                            '@media(max-width:899px)': {
                                marginTop: '0'
                            }
                        };
                    },
                    list: ()=>{
                        return {
                            paddingTop: '4px',
                            paddingBottom: '4px'
                        };
                    }
                }
            },
            MuiButton: {
                styleOverrides: {
                    root: ({ ownerState })=>{
                        return {
                            fontSize: 16,
                            lineHeight: '1.3',
                            fontWeight: '600',
                            padding: '15px 26px',
                            minWidth: 'auto',
                            borderRadius: 0,
                            textTransform: 'capitalize',
                            ...ownerState.variant === 'contained' && ownerState.color === 'primary' && {
                                background: (0, __TURBOPACK__imported__module__$5b$project$5d2f$mui$2d$theme$2f$_palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["palette"])(mode).primary.main,
                                color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$mui$2d$theme$2f$_palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["palette"])(mode).common.white,
                                '&:hover': {
                                    background: (0, __TURBOPACK__imported__module__$5b$project$5d2f$mui$2d$theme$2f$_palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["palette"])(mode).customColors.dark,
                                    color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$mui$2d$theme$2f$_palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["palette"])(mode).common.white
                                }
                            }
                        };
                    }
                },
                defaultProps: {
                    disableElevation: true,
                    disableRipple: true
                }
            },
            MuiBackdrop: {
                styleOverrides: {
                    root: {
                    }
                }
            },
            MuiTabs: {
                styleOverrides: {
                    indicator: ({ theme })=>({
                            backgroundColor: theme?.palette?.primary.main
                        })
                }
            }
        }
    };
};
;
}),
"[project]/mui-theme/globalStyles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ** MUI Imports
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const GlobalStyling = (_theme)=>({
        img: {
            maxWidth: '100%',
            height: 'auto'
        },
        a: {
            display: 'inline-block',
            textDecoration: 'none'
        },
        'p:last-child': {
            marginBottom: 0
        },
        ul: {
            padding: 0,
            margin: 0,
            listStyle: 'none'
        }
    });
const __TURBOPACK__default__export__ = GlobalStyling;
}),
"[project]/mui-theme/AppThemeProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$GlobalStyles$2f$GlobalStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GlobalStyles$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/GlobalStyles/GlobalStyles.js [app-ssr] (ecmascript) <export default as GlobalStyles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2d$nextjs$2f$esm$2f$v13$2d$appRouter$2f$appRouterV13$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AppRouterCacheProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material-nextjs/esm/v13-appRouter/appRouterV13.js [app-ssr] (ecmascript) <export default as AppRouterCacheProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CssBaseline/CssBaseline.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/ThemeProvider.js [app-ssr] (ecmascript) <export default as ThemeProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/createTheme.js [app-ssr] (ecmascript) <export default as createTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mui$2d$theme$2f$_muiTheme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/mui-theme/_muiTheme.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mui$2d$theme$2f$globalStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mui-theme/globalStyles.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const AppThemeProvider = ({ children })=>{
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__["createTheme"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$mui$2d$theme$2f$_muiTheme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["MuiThemeOptions"])('light'));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2d$nextjs$2f$esm$2f$v13$2d$appRouter$2f$appRouterV13$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AppRouterCacheProvider$3e$__["AppRouterCacheProvider"], {
        options: {
            enableCssLayer: true
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__["ThemeProvider"], {
            theme: theme,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/mui-theme/AppThemeProvider.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$GlobalStyles$2f$GlobalStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GlobalStyles$3e$__["GlobalStyles"], {
                    styles: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mui$2d$theme$2f$globalStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(theme)
                }, void 0, false, {
                    fileName: "[project]/mui-theme/AppThemeProvider.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/mui-theme/AppThemeProvider.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/mui-theme/AppThemeProvider.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = AppThemeProvider;
}),
"[project]/app/providers.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EventListener$2f$EventListener$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/EventListener/EventListener.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mui$2d$theme$2f$AppThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mui-theme/AppThemeProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const queryClient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClient"]({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            retry: 0
        }
    }
});
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: queryClient,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mui$2d$theme$2f$AppThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toaster"], {
                    position: "top-center",
                    reverseOrder: false,
                    gutter: 8,
                    containerClassName: "",
                    containerStyle: {},
                    toastOptions: {
                        duration: 2000
                    }
                }, void 0, false, {
                    fileName: "[project]/app/providers.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EventListener$2f$EventListener$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/providers.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/app/providers.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/providers.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f9271e71._.js.map