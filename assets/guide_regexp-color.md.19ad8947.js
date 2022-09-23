import{G as l,H as p,I as e,J as r}from"./chunks/toolsbox.esm.6b4265b1.js";import{o as t,c,a as s,t as a,u as o,b as n}from"./app.2a2c9974.js";const D=n(`<h1 id="color-\u989C\u8272\u683C\u5F0F\u5224\u65AD" tabindex="-1">color \u989C\u8272\u683C\u5F0F\u5224\u65AD <a class="header-anchor" href="#color-\u989C\u8272\u683C\u5F0F\u5224\u65AD" aria-hidden="true">#</a></h1><h2 id="iscolor-\u5224\u65AD\u662F\u5426\u662F\u989C\u8272\u8868\u8FBE\u5F0F" tabindex="-1">isColor \u5224\u65AD\u662F\u5426\u662F\u989C\u8272\u8868\u8FBE\u5F0F <a class="header-anchor" href="#iscolor-\u5224\u65AD\u662F\u5426\u662F\u989C\u8272\u8868\u8FBE\u5F0F" aria-hidden="true">#</a></h2><p><a href="https://github.com/chenym1992/toolsbox/blob/main/src/regexp/color.ts#L61" target="_blank" rel="noreferrer">source</a></p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">isColor</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fe-toolsbox</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">isColor</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#AAA</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">isColor</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#AAACCC</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">isColor</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">rgb(0,0,0)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">isColor</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">rgba(0,0,0,0.1)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div>`,4),A={class:"demo"},i=n(`<h2 id="ishexcolor-\u5224\u65AD-hex-\u989C\u8272\u8868\u8FBE\u5F0F" tabindex="-1">isHexColor \u5224\u65AD hex \u989C\u8272\u8868\u8FBE\u5F0F <a class="header-anchor" href="#ishexcolor-\u5224\u65AD-hex-\u989C\u8272\u8868\u8FBE\u5F0F" aria-hidden="true">#</a></h2><p><a href="https://github.com/chenym1992/toolsbox/blob/main/src/regexp/color.ts#L16" target="_blank" rel="noreferrer">source</a></p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">isHexColor</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fe-toolsbox</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">isHexColor</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#AAA</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">isHexColor</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">rgb(0,0,0)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">isHexColor</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">rgba(0,0,0,0.1)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div>`,3),C={class:"demo"},y=n(`<h2 id="isrgbcolor-\u5224\u65AD-rgb-\u989C\u8272\u8868\u8FBE\u5F0F" tabindex="-1">isRgbColor \u5224\u65AD RGB \u989C\u8272\u8868\u8FBE\u5F0F <a class="header-anchor" href="#isrgbcolor-\u5224\u65AD-rgb-\u989C\u8272\u8868\u8FBE\u5F0F" aria-hidden="true">#</a></h2><p><a href="https://github.com/chenym1992/toolsbox/blob/main/src/regexp/color.ts#L31" target="_blank" rel="noreferrer">source</a></p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">isRgbColor</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fe-toolsbox</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">isRgbColor</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#AAA</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">isRgbColor</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">rgb(0,0,0)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">isRgbColor</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">rgba(0,0,0,0.1)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div>`,3),F={class:"demo"},d=n(`<h2 id="isrgbacolor-\u5224\u65AD-rgba-\u989C\u8272\u8868\u8FBE\u5F0F" tabindex="-1">isRgbaColor \u5224\u65AD RGBA \u989C\u8272\u8868\u8FBE\u5F0F <a class="header-anchor" href="#isrgbacolor-\u5224\u65AD-rgba-\u989C\u8272\u8868\u8FBE\u5F0F" aria-hidden="true">#</a></h2><p><a href="https://github.com/chenym1992/toolsbox/blob/main/src/regexp/color.ts#L48" target="_blank" rel="noreferrer">source</a></p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">isRgbaColor</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fe-toolsbox</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">isRgbaColor</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#AAA</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">isRgbaColor</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">rgb(0,0,0)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">isRgbaColor</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">rgba(0,0,0,0.1)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div>`,3),b={class:"demo"},v=JSON.parse('{"title":"color \u989C\u8272\u683C\u5F0F\u5224\u65AD","description":"","frontmatter":{},"headers":[{"level":2,"title":"isColor \u5224\u65AD\u662F\u5426\u662F\u989C\u8272\u8868\u8FBE\u5F0F","slug":"iscolor-\u5224\u65AD\u662F\u5426\u662F\u989C\u8272\u8868\u8FBE\u5F0F"},{"level":2,"title":"isHexColor \u5224\u65AD hex \u989C\u8272\u8868\u8FBE\u5F0F","slug":"ishexcolor-\u5224\u65AD-hex-\u989C\u8272\u8868\u8FBE\u5F0F"},{"level":2,"title":"isRgbColor \u5224\u65AD RGB \u989C\u8272\u8868\u8FBE\u5F0F","slug":"isrgbcolor-\u5224\u65AD-rgb-\u989C\u8272\u8868\u8FBE\u5F0F"},{"level":2,"title":"isRgbaColor \u5224\u65AD RGBA \u989C\u8272\u8868\u8FBE\u5F0F","slug":"isrgbacolor-\u5224\u65AD-rgba-\u989C\u8272\u8868\u8FBE\u5F0F"}],"relativePath":"guide/regexp-color.md","lastUpdated":1663905595000}'),_={name:"guide/regexp-color.md"},f=Object.assign(_,{setup(g){return(h,u)=>(t(),c("div",null,[D,s("div",A,[s("div",null,a(o(l)("#AAA")),1),s("div",null,a(o(l)("#AAACCC")),1),s("div",null,a(o(l)("rgb(0,0,0)")),1),s("div",null,a(o(l)("rgba(0,0,0,0.1)")),1)]),i,s("div",C,[s("div",null,a(o(p)("#AAA")),1),s("div",null,a(o(p)("rgb(0,0,0)")),1),s("div",null,a(o(p)("rgba(0,0,0,0.1)")),1)]),y,s("div",F,[s("div",null,a(o(e)("#AAA")),1),s("div",null,a(o(e)("rgb(0,0,0)")),1),s("div",null,a(o(e)("rgba(0,0,0,0.1)")),1)]),d,s("div",b,[s("div",null,a(o(r)("#AAA")),1),s("div",null,a(o(r)("rgb(0,0,0)")),1),s("div",null,a(o(r)("rgba(0,0,0,0.1)")),1)])]))}});export{v as __pageData,f as default};