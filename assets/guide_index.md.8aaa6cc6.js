import{_ as e,c as r,o as t,a as l}from"./app.eab8f79f.js";const u=JSON.parse('{"title":"Fe-Toolsbox","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5 \u{1F527}","slug":"\u5B89\u88C5-wrench"},{"level":2,"title":"\u5FEB\u901F\u4E0A\u624B\u{1F511}","slug":"\u5FEB\u901F\u4E0A\u624B-key"},{"level":2,"title":"npm \u94FE\u63A5\u{1F517}","slug":"npm-\u94FE\u63A5-link"},{"level":2,"title":"API \u6587\u6863\u{1F4E6}","slug":"api-\u6587\u6863-package"},{"level":3,"title":"array","slug":"array"},{"level":3,"title":"dom","slug":"dom"},{"level":3,"title":"functions","slug":"functions"},{"level":3,"title":"regexp","slug":"regexp"},{"level":3,"title":"time","slug":"time"},{"level":3,"title":"url","slug":"url"},{"level":3,"title":"utils","slug":"utils"}],"relativePath":"guide/index.md"}'),a={name:"guide/index.md"},o=l(`<h1 id="fe-toolsbox" tabindex="-1">Fe-Toolsbox <a class="header-anchor" href="#fe-toolsbox" aria-hidden="true">#</a></h1><table><thead><tr><th>version</th><th style="text-align:center;">license</th></tr></thead><tbody><tr><td><a href="https://www.npmjs.com/package/fe-toolsbox" target="_blank" rel="noreferrer"><img src="https://img.shields.io/static/v1?label=npm&amp;message=v0.0.9&amp;color=blue" alt="npm version"></a></td><td style="text-align:center;"><a href="https://github.com/chenym1992/toolsbox/blob/main/LICENSE" target="_blank" rel="noreferrer"><img src="https://img.shields.io/static/v1?label=license&amp;message=MIT&amp;color=green" alt="license"></a></td></tr></tbody></table><p>\u524D\u7AEF\u4E1A\u52A1\u5E38\u7528\u5DE5\u5177\u5E93</p><blockquote><p>\u76EE\u7684\uFF1A\u9AD8\u6548\u7387\u5B8C\u6210\u524D\u7AEF\u4E1A\u52A1\u4EE3\u7801</p></blockquote><h2 id="\u5B89\u88C5-wrench" tabindex="-1">\u5B89\u88C5 \u{1F527} <a class="header-anchor" href="#\u5B89\u88C5-wrench" aria-hidden="true">#</a></h2><p>\u4F7F\u7528 npm\u3001yarn\u3001pnpm \u5B89\u88C5</p><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">npm i fe-toolsbox -D</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn add fe-toolsbox -D</span></span>
<span class="line"><span style="color:#A6ACCD;">pnpm add fe-toolsbox -D</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5FEB\u901F\u4E0A\u624B-key" tabindex="-1">\u5FEB\u901F\u4E0A\u624B\u{1F511} <a class="header-anchor" href="#\u5FEB\u901F\u4E0A\u624B-key" aria-hidden="true">#</a></h2><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">randomNumber</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">randomUID</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fe-toolsbox</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">randomNumber</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 11 [0-100]</span></span>
<span class="line"><span style="color:#82AAFF;">randomNumber</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 0 | 1</span></span>
<span class="line"><span style="color:#82AAFF;">randomUID</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//&#39;9f235a5f-27e8-4e72-a854-f5b1fd027427&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="npm-\u94FE\u63A5-link" tabindex="-1">npm \u94FE\u63A5\u{1F517} <a class="header-anchor" href="#npm-\u94FE\u63A5-link" aria-hidden="true">#</a></h2><p><a href="https://www.npmjs.com/package/fe-toolsbox" target="_blank" rel="noreferrer">fe-toolsbox</a></p><h2 id="api-\u6587\u6863-package" tabindex="-1">API \u6587\u6863\u{1F4E6} <a class="header-anchor" href="#api-\u6587\u6863-package" aria-hidden="true">#</a></h2><h3 id="array" tabindex="-1">array <a class="header-anchor" href="#array" aria-hidden="true">#</a></h3><ul><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/array/index.ts" target="_blank" rel="noreferrer">array</a> \u6570\u7EC4 <ul><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/array/index.ts#L10" target="_blank" rel="noreferrer">sum</a> \u6570\u7EC4\u6C42\u548C</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/array/index.ts#L21" target="_blank" rel="noreferrer">average</a> \u6570\u7EC4\u6C42\u5E73\u5747\u6570</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/array/index.ts#L34" target="_blank" rel="noreferrer">uniq</a> \u6570\u7EC4\u53BB\u91CD</li></ul></li></ul><h3 id="dom" tabindex="-1">dom <a class="header-anchor" href="#dom" aria-hidden="true">#</a></h3><ul><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/dom/class.ts" target="_blank" rel="noreferrer">class</a> dom class <ul><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/dom/class.ts#L12" target="_blank" rel="noreferrer">hasClass</a> \u662F\u5426\u5B58\u5728\u6307\u5B9Aclass</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/dom/class.ts#L28" target="_blank" rel="noreferrer">addClass</a> \u6DFB\u52A0class</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/dom/class.ts#L48" target="_blank" rel="noreferrer">toggleClass</a> \u5207\u6362class</li></ul></li></ul><h3 id="functions" tabindex="-1">functions <a class="header-anchor" href="#functions" aria-hidden="true">#</a></h3><ul><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/funtions/byteToString.ts" target="_blank" rel="noreferrer">byteToString</a> \u5B57\u8282\u6570\u7EC4\u8F6C\u5B57\u7B26\u4E32</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/funtions/stringToByte.ts" target="_blank" rel="noreferrer">stringToByte</a> \u5B57\u7B26\u4E32\u8F6C\u5B57\u8282\u6570\u7EC4</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/funtions/throttle.ts" target="_blank" rel="noreferrer">throttle</a> \u8282\u6D41\u51FD\u6570</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/funtions/debounce.ts" target="_blank" rel="noreferrer">debounce</a> \u9632\u6296\u51FD\u6570</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/funtions/eventEmitter.ts" target="_blank" rel="noreferrer">EventEmitter</a> EventEmitter</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/funtions/convertColors.ts" target="_blank" rel="noreferrer">convertColors</a> \u8F6C\u6362\u989C\u8272\u683C\u5F0F <ul><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/funtions/convertColors.ts#L12" target="_blank" rel="noreferrer">hexToRgb</a> \u989C\u8272 hex \u8F6C Rgb</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/funtions/convertColors.ts#L33" target="_blank" rel="noreferrer">hexToRgba</a> \u989C\u8272 hex \u8F6C Rgba</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/funtions/convertColors.ts#L59" target="_blank" rel="noreferrer">rgbToHex</a> \u989C\u8272 rgb \u8F6C hex</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/funtions/convertColors.ts#L83" target="_blank" rel="noreferrer">rgbaToHex</a> \u989C\u8272 rgba \u8F6C hex</li></ul></li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/funtions/random.ts" target="_blank" rel="noreferrer">random</a> \u968F\u673A <ul><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/funtions/random.ts#L9" target="_blank" rel="noreferrer">randomNumber</a> \u751F\u6210\u968F\u673A\u6570,\u9ED8\u8BA40-100</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/funtions/random.ts#L18" target="_blank" rel="noreferrer">randomUID</a> \u968F\u673A\u751F\u6210\u4E00\u4E2AUID</li></ul></li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/funtions/network.ts" target="_blank" rel="noreferrer">network</a> \u8F6C\u6362\u989C\u8272\u683C\u5F0F <ul><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/funtions/network.ts#L6" target="_blank" rel="noreferrer">isHttps</a> \u5224\u65ADhttps</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/funtions/network.ts#L16" target="_blank" rel="noreferrer">isHttp</a> \u5224\u65ADhttp</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/funtions/network.ts#L25" target="_blank" rel="noreferrer">isOnline</a> \u5224\u65AD\u7F51\u7EDC\u72B6\u6001</li></ul></li></ul><h3 id="regexp" tabindex="-1">regexp <a class="header-anchor" href="#regexp" aria-hidden="true">#</a></h3><ul><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/regexp/color.ts" target="_blank" rel="noreferrer">color</a> \u989C\u8272\u683C\u5F0F\u5224\u65AD <ul><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/regexp/color.ts#L53" target="_blank" rel="noreferrer">isColor</a> \u5224\u65AD\u662F\u5426\u662F\u989C\u8272\u8868\u8FBE\u5F0F</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/regexp/color.ts#L16" target="_blank" rel="noreferrer">isHexColor</a> \u5224\u65AD hex \u989C\u8272\u8868\u8FBE\u5F0F</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/regexp/color.ts#L31" target="_blank" rel="noreferrer">isRgbColor</a> \u5224\u65AD RGB \u989C\u8272\u8868\u8FBE\u5F0F</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/regexp/color.ts#L48" target="_blank" rel="noreferrer">isRgbaColor</a> \u5224\u65AD RGBA \u989C\u8272\u8868\u8FBE\u5F0F</li></ul></li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/regexp/string.ts" target="_blank" rel="noreferrer">string</a> \u5B57\u7B26\u4E32\u683C\u5F0F\u5224\u65AD <ul><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/regexp/string.ts#L15" target="_blank" rel="noreferrer">isIphoneNumber</a> \u5BBD\u677E\u5224\u65AD\u56FD\u5185\u624B\u673A\u53F7</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/regexp/string.ts#L32" target="_blank" rel="noreferrer">isTelNumber</a> \u5224\u65AD\u5EA7\u673A\u53F7\u7801\uFF08\u5E26\u5206\u673A\u53F7\u7801\uFF09</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/regexp/string.ts#L51" target="_blank" rel="noreferrer">isIdCard</a> \u5224\u65AD\u8EAB\u4EFD\u8BC1\u53F7</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/regexp/string.ts#L64" target="_blank" rel="noreferrer">isValidIdCard</a> \u5224\u65AD\u8EAB\u4EFD\u8BC1\u662F\u5426\u6709\u6548</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/regexp/string.ts#L64" target="_blank" rel="noreferrer">isValidIdCard</a> \u5224\u65AD\u8EAB\u4EFD\u8BC1\u662F\u5426\u6709\u6548</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/regexp/string.ts#L154" target="_blank" rel="noreferrer">isEmail</a> \u5224\u65AD\u90AE\u7BB1\u683C\u5F0F</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/regexp/string.ts#L167" target="_blank" rel="noreferrer">isUrl</a> \u5224\u65ADUrl\u683C\u5F0F</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/regexp/string.ts#L178" target="_blank" rel="noreferrer">isEnglish</a> \u5224\u65AD\u82F1\u6587\u683C\u5F0F</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/regexp/string.ts#L187" target="_blank" rel="noreferrer">isChinese</a> \u5224\u65AD\u4E2D\u6587\u683C\u5F0F</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/regexp/string.ts#L202" target="_blank" rel="noreferrer">isNumberPlate</a> \u5224\u65AD\u8F66\u724C\u53F7\u683C\u5F0F</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/regexp/string.ts#L217" target="_blank" rel="noreferrer">isBase64</a> \u5224\u65ADbase64\u683C\u5F0F</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/regexp/string.ts#L228" target="_blank" rel="noreferrer">isBankCardNumber</a> \u5224\u65AD\u94F6\u884C\u5361\u53F7(\u5305\u542B\u5BF9\u516C\u5BF9\u79C1)\u683C\u5F0F</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/regexp/string.ts#L238" target="_blank" rel="noreferrer">isStrongPwd</a> \u5F3A\u5BC6\u7801\u683C\u5F0F\u6821\u9A8C</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/regexp/string.ts#L261" target="_blank" rel="noreferrer">checkPwdStrength</a> \u68C0\u6D4B\u5BC6\u7801\u5F3A\u5EA6</li></ul></li></ul><h3 id="time" tabindex="-1">time <a class="header-anchor" href="#time" aria-hidden="true">#</a></h3><ul><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/time/makeDurationPretty.ts" target="_blank" rel="noreferrer">makeDurationPretty</a> \u7F8E\u5316\u65F6\u957F\u663E\u793A</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/time/dateFormat.ts" target="_blank" rel="noreferrer">dateFormat</a> \u65F6\u95F4\u683C\u5F0F\u5316</li></ul><h3 id="url" tabindex="-1">url <a class="header-anchor" href="#url" aria-hidden="true">#</a></h3><ul><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/url/getUrlParams.ts" target="_blank" rel="noreferrer">getUrlParams</a> \u83B7\u53D6 Url \u5B8C\u6574\u53C2\u6570\u6216\u6307\u5B9A\u5B57\u6BB5\u53C2\u6570</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/url/stringifyQueryString.ts" target="_blank" rel="noreferrer">stringifyQueryString</a> \u7B80\u5355\u5BF9\u8C61\u5E8F\u5217\u5316</li></ul><h3 id="utils" tabindex="-1">utils <a class="header-anchor" href="#utils" aria-hidden="true">#</a></h3><ul><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/utils/index.ts#L20" target="_blank" rel="noreferrer">classof</a> \u83B7\u53D6\u4EFB\u610F\u5BF9\u8C61\u57FA\u672C\u6570\u636E\u7C7B\u578B</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/utils/index.ts#L32" target="_blank" rel="noreferrer">isNumber</a> \u5224\u65AD number \u7C7B\u578B</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/utils/index.ts#L41" target="_blank" rel="noreferrer">isString</a> \u5224\u65AD string \u7C7B\u578B</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/utils/index.ts#L50" target="_blank" rel="noreferrer">isBoolean</a> \u5224\u65AD bool \u7C7B\u578B</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/utils/index.ts#L59" target="_blank" rel="noreferrer">isUndefined</a> \u5224\u65AD undefined \u7C7B\u578B</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/utils/index.ts#L68" target="_blank" rel="noreferrer">isNull</a> \u5224\u65AD null \u7C7B\u578B</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/utils/index.ts#L77" target="_blank" rel="noreferrer">isSymbol</a> \u5224\u65AD symbol \u7C7B\u578B</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/utils/index.ts#L86" target="_blank" rel="noreferrer">isBigInt</a> \u5224\u65AD bigint \u7C7B\u578B</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/utils/index.ts#L95" target="_blank" rel="noreferrer">isObject</a> \u5224\u65AD object \u7C7B\u578B</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/utils/index.ts#L104" target="_blank" rel="noreferrer">isFunction</a> \u5224\u65AD function \u7C7B\u578B</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/utils/index.ts#L113" target="_blank" rel="noreferrer">isArray</a> \u5224\u65AD array \u7C7B\u578B</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/utils/index.ts#L122" target="_blank" rel="noreferrer">isDate</a> \u5224\u65AD date \u7C7B\u578B</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/utils/index.ts#L31" target="_blank" rel="noreferrer">isRegExp</a> \u5224\u65AD regexp \u7C7B\u578B</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/utils/index.ts#L140" target="_blank" rel="noreferrer">isNaN</a> \u5224\u65AD NaN</li><li><a href="https://github.com/chenym1992/toolsbox/blob/main/src/utils/index.ts#L149" target="_blank" rel="noreferrer">isNil</a> \u5224\u65AD null||undefined</li></ul>`,26),s=[o];function n(i,b,h,c,m,p){return t(),r("div",null,s)}var f=e(a,[["render",n]]);export{u as __pageData,f as default};
