import{_ as c,c as u,a as d,e as r,w as l,b as e,r as v,o as p,d as n,f as a}from"./app-DZvEaX5f.js";const b={};function m(h,t){const o=v("Tabs");return p(),u("div",null,[t[24]||(t[24]=d(`<h1 id="selector" tabindex="-1"><a class="header-anchor" href="#selector"><span>Selector</span></a></h1><p>Many people see the dazzling effects of the display page and think that AnyBlock provides a lot of effects processing and rendering is the content of this plugin.</p><p>But that&#39;s not the essence of AnyBlock. The essence of <code>AnyBlock</code>, as the name suggests, is to pick any range and turn it into a block.</p><p>That is, the essence of AnyBlock is the <strong>selector</strong></p><h2 id="what-is-a-selector" tabindex="-1"><a class="header-anchor" href="#what-is-a-selector"><span>What is a selector?</span></a></h2><p>This is an important concept in the plugin, and there are two important steps for markdwon&#39;s partial parsing rendering</p><ol><li>Range identification (I will call this step &#39;selector&#39;)</li><li>Process or render the contents of this range (I will call this step &#39;processor&#39;)</li></ol><h2 id="eight-selectors" tabindex="-1"><a class="header-anchor" href="#eight-selectors"><span>Eight selectors</span></a></h2><h3 id="traditional-code-block-selector" tabindex="-1"><a class="header-anchor" href="#traditional-code-block-selector"><span>Traditional code block selector</span></a></h3><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>\`\`\`js       // This is the starting position (contains the line)
var a = 0;
\`\`\`         // This is the end position (contains the line)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In obsidian, most plug-ins use this selector to identify ranges. Examples abound: tabs tabs, col tabs, mermaid, plantuml, and more</p><p>In addition to AnyBlock&#39;s extended six selectors, traditional code block selectors are also supported. The advantage of this selector is that the official itself provides, compatibility and other issues will be very good. If you encounter some problems that AnyBllock does not take effect during use, you can try to use this method to see whether the problem is solved.</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>\`\`\`anyblock   // This is the starting position (contains the line)
[list2table]  // This is required, and is somewhat similar to the statement declaring the chart type in a mermaid code block

<span class="token list punctuation">-</span> 1
  <span class="token list punctuation">-</span> 2
  <span class="token list punctuation">-</span> 3
<span class="token list punctuation">-</span> 4
  <span class="token list punctuation">-</span> 5
  <span class="token list punctuation">-</span> 6
\`\`\`           // This is the end position (contains the line)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="traditional-reference-block-selector" tabindex="-1"><a class="header-anchor" href="#traditional-reference-block-selector"><span>Traditional reference block selector</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Other content

&gt; [!note]   // This is the starting position (contains the line)
&gt; 这是一个obsidian
&gt; 的callout
&gt; 语句       // This is the end position (contains the line)

Other content
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This is also a selector, selected by reference block. However, compared to plug-ins with many code selectors, the selection using reference blocks is almost the only callout statement.</p><p>That&#39;s because - obsidian&#39;s development API doesn&#39;t provide a quick API for selecting a range of options in this way, and if you want to select a piece of md text in this way and work with it, it&#39;s pretty much a hand-jerk, which is hard</p><h3 id="ab-list-selector" tabindex="-1"><a class="header-anchor" href="#ab-list-selector"><span>AB list selector</span></a></h3><p>而 AnyBlock 提供了非常多能够轻松选择范围的选择器，并提供了丰富的解析渲染的处理器。</p><p>例如列表选择器：</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>\\[...]      // This is the starting position (contains the line)

<span class="token list punctuation">-</span> 1
  <span class="token list punctuation">-</span> 2
-3          // This is the end position (contains the line)

Other content
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Trigger: Add an AB selector header one or two lines above the list (the content expanded by square brackets)</li><li>Range selection: starts at the head of the AB selector and ends at the end of the following list</li></ul><h3 id="ab-heading-selector" tabindex="-1"><a class="header-anchor" href="#ab-heading-selector"><span>AB heading selector</span></a></h3><p>In the previous &quot;Effects Show&quot;, I always used the list selector because it is the most convenient, and to avoid introducing the concept of &quot;selector&quot; in the previous chapter, which would confuse people who are new to this plugin.</p><p>In fact, for a process like &quot;card&quot;/&quot; TAB &quot;/&quot; column &quot;, each subitem is usually a lot of content and more mixed, using the title selector or Mdit-Container selector is a better choice!</p><p>For example, a title selector:</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">##</span> 二级标题</span>

\\[...]      // This is the starting position (contains the line)

<span class="token title important"><span class="token punctuation">###</span> 三级标题</span>

<span class="token title important"><span class="token punctuation">####</span> 四级标题</span>

<span class="token title important"><span class="token punctuation">###</span> 三级标题</span>

内容         // This is the end position (contains the line)

<span class="token title important"><span class="token punctuation">##</span> 二级标题</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Trigger: Add a line of &#39;AB selector header&#39; one or two lines above &#39;header&#39; (the content expanded by square brackets)</li><li>Range selection: Start at the AB selector head, mark the title level below it as X, and select until a title level greater than X appears after it</li></ul><h3 id="ab-codeblock-selector" tabindex="-1"><a class="header-anchor" href="#ab-codeblock-selector"><span>AB codeBlock selector</span></a></h3><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>
\\[...]      // This is the starting position (contains the line)

\`\`\`js
var a = 1;
\`\`\`         // This is the end position (contains the line)

Other content
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Trigger: Add an AB selector header one or two lines above the code block (the content expanded by square brackets)</li><li>Range selection: Start at the AB selector header and select until the end of the following code block</li></ul><h3 id="ab-quote-selector" tabindex="-1"><a class="header-anchor" href="#ab-quote-selector"><span>AB quote selector</span></a></h3><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>
\\[...]      // This is the starting position (contains the line)

<span class="token blockquote punctuation">&gt;</span> ...
<span class="token blockquote punctuation">&gt;</span> ...
<span class="token blockquote punctuation">&gt;</span> ...       // This is the end position (contains the line)

Other content
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Trigger: Add an AB selector header one or two lines above the reference block (the content expanded by square brackets)</li><li>Range selection: Start at the AB selector header and select until the end of the following reference block</li></ul><h3 id="ab-table-selector" tabindex="-1"><a class="header-anchor" href="#ab-table-selector"><span>AB table selector</span></a></h3><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>\\[...]      // This is the starting position (contains the line)

<span class="token table"><span class="token table-header-row"><span class="token punctuation">|</span><span class="token table-header important"> a </span><span class="token punctuation">|</span><span class="token table-header important"> b </span><span class="token punctuation">|</span>
</span><span class="token table-line"><span class="token punctuation">|</span><span class="token punctuation">---</span><span class="token punctuation">|</span><span class="token punctuation">---</span><span class="token punctuation">|</span>
</span><span class="token table-data-rows"><span class="token punctuation">|</span><span class="token table-data"> c </span><span class="token punctuation">|</span><span class="token table-data"> d </span><span class="token punctuation">|</span><span class="token table-data">   // This is the end position (contains the line)</span>
</span></span>
Other content
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mdit-container-headtail-selector" tabindex="-1"><a class="header-anchor" href="#mdit-container-headtail-selector"><span>Mdit-Container <code>:::</code> headtail selector</span></a></h3><p>This is the syntax of markdwon-it-container, which is more common on the VuePress/VitePress blog.</p><p>Although this syntax was not designed by the AnyBlock authors, on Obsidian it is also provided by the AnyBlock plugin</p><p>Syntax:</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>
\\::: ...    // This is the starting position (contains the line)

任意内容

\\:::        // This is the end position (contains the line)

Other content
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h2><h3 id="comparison-of-several-selectors" tabindex="-1"><a class="header-anchor" href="#comparison-of-several-selectors"><span>Comparison of several selectors</span></a></h3><ul><li>Traditional code start selector</li><li>Advantages: built-in code coloring, nesting. Suitable for content that needs to include code</li><li>Disadvantages: If you include md content, the rendering results are not good without plug-ins</li><li>Traditional reference block selector</li><li>Disadvantages: there is no Obsidian supported API, difficult to develop. Writing is a bit cumbersome (with &#39;&gt;&#39; per line), and nesting is a bit cumbersome</li><li>AB selector</li><li>Advantages: Unified format. Formatting is dull, there is no plugin embedded syntax pollution. Excellent rendering results without plugins when including md content</li><li>Disadvantages: For composite content, there is no choice. Flexibility and functionality are traded for portability and non-intrusion, resulting in the former two functions being inferior to mdit-container</li><li>Mdit-Container Indicates the selector</li><li>Advantages: Flexible selection range. Excellent rendering results without plugins when including md content. Nesting is very convenient</li><li>Disadvantages: It is not as efficient and fast as the AB selector for the selection of simple ranges, and the intrusion traces of the syntax are heavier</li></ul><div class="callout" data-callout="note"><div class="callout-title"><div class="callout-title-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path><path d="m15 5 4 4"></path></svg></div><div class="callout-title-inner">Note</div></div><div class="callout-content"><p>The disadvantage of AB selector is not the disadvantage of AnyBlock plug-in, AnyBlock originally had its own head and tail selector, but later saw that the &#39;:::&#39; selector is more general and threw away its own &#39;{}&#39; head and tail selector syntax instead of that. What&#39;s more, in Obsidian, the &#39;:::&#39; selector is also provided by AnyBlock</p></div></div><h3 id="why-is-the-essence-of-anyblock-the-selector" tabindex="-1"><a class="header-anchor" href="#why-is-the-essence-of-anyblock-the-selector"><span>Why is the essence of AnyBlock the selector</span></a></h3><p>Although AnyBlock support is very rich in effects, but in fact many other plug-ins can do these effects. Whether in Obsidian or Markdown-it, such as the drawing of charts, timelines, columns, etc</p><p>The essence of AnyBlock is &quot;selector&quot;</p><ol><li>The first is to be able to choose the scope flexibly. It eliminates the need to implement additional syntax only through code blocks (Especially for ob, vueperss does have a mdit-conteiner selector)</li><li>The second is that the way of selecting the scope is extremely convenient. Its syntax is convenient and non-invasive</li><li>The third is the decoupling of the processor and selector. The processor doesn&#39;t care which selector you use to select the range</li></ol><h2 id="use-it-flexibly" tabindex="-1"><a class="header-anchor" href="#use-it-flexibly"><span>Use it flexibly</span></a></h2><h3 id="title-list" tabindex="-1"><a class="header-anchor" href="#title-list"><span>title = list</span></a></h3><ol><li>Thanks to the &#39;title2list&#39; processor and support for concatenated processors: any processor that can handle lists can also handle headings</li><li>If there is any problem, you can use &#39;title2list|code()&#39; to easily check the conversion and debug</li><li>It is not recommended to use &#39;title2tab&#39; instead of &#39;title2list|list2tab&#39;. If there are existing &#39;title2&#39; instructions, use existing ones</li></ol><ul><li>(Bottom reason: There are some differences between the two effects. Because &#39;title2list&#39; needs to convert the structure to a multi-layer tree, but &#39;list2tab&#39; only needs to convert the structure to a two-layer tree)</li></ul><p>such as：</p>`,54)),r(o,{id:"277",data:[{id:"Plugin effect (插件效果)"},{id:"No plugin effect (无插件效果)"},{id:"md source code (md源码)"}]},{title0:l(({value:s,isActive:i})=>t[0]||(t[0]=[n("Plugin effect (插件效果)")])),title1:l(({value:s,isActive:i})=>t[1]||(t[1]=[n("No plugin effect (无插件效果)")])),title2:l(({value:s,isActive:i})=>t[2]||(t[2]=[n("md source code (md源码)")])),tab0:l(({value:s,isActive:i})=>t[3]||(t[3]=[e("div",{class:"ab-note drop-shadow"},[e("table",{class:"ab-table ab-branch-table"},[e("tbody",null,[e("tr",null,[e("td",{rowspan:"3",col_index:"0",class:"markdown-rendered"},[e("div",null,[e("p",null,"a")])]),e("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[e("div",null,[e("p",null,"1")])])]),e("tr",null,[e("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[e("div",null,[e("p",null,"2")])])]),e("tr",null,[e("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[e("div",null,[e("p",null,"3")])])]),e("tr",null,[e("td",{rowspan:"3",col_index:"0",class:"markdown-rendered"},[e("div",null,[e("p",null,"b")])]),e("td",{rowspan:"3",col_index:"1",class:"markdown-rendered"},[e("div",null,[e("p",null,"b1")])]),e("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[e("div",null,[e("p",null,"5")])])]),e("tr",null,[e("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[e("div",null,[e("p",null,"6")])])]),e("tr",null,[e("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[e("div",null,[e("p",null,"7")])])])])])],-1)])),tab1:l(({value:s,isActive:i})=>t[4]||(t[4]=[e("p",null,"(noplugin)[title2list|list2table]",-1),e("h4",{id:"a",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#a"},[e("span",null,"a")])],-1),e("ul",null,[e("li",null,"1"),e("li",null,"2"),e("li",null,"3")],-1),e("h4",{id:"b",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#b"},[e("span",null,"b")])],-1),e("h5",{id:"b1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#b1"},[e("span",null,"b1")])],-1),e("ul",null,[e("li",null,"5"),e("li",null,"6"),e("li",null,"7")],-1)])),tab2:l(({value:s,isActive:i})=>t[5]||(t[5]=[e("div",{class:"language-markdown line-numbers-mode","data-ext":"md","data-title":"md"},[e("pre",{class:"language-markdown"},[e("code",null,[n(`\\[title2list|list2table]

`),e("span",{class:"token title important"},[e("span",{class:"token punctuation"},"####"),n(" a")]),n(`

`),e("span",{class:"token list punctuation"},"-"),n(` 1
`),e("span",{class:"token list punctuation"},"-"),n(` 2
`),e("span",{class:"token list punctuation"},"-"),n(` 3
`),e("span",{class:"token title important"},[e("span",{class:"token punctuation"},"####"),n(" b")]),n(`

`),e("span",{class:"token title important"},[e("span",{class:"token punctuation"},"#####"),n(" b1")]),n(`

`),e("span",{class:"token list punctuation"},"-"),n(` 5
`),e("span",{class:"token list punctuation"},"-"),n(` 6
`),e("span",{class:"token list punctuation"},"-"),n(` 7
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),_:1}),t[25]||(t[25]=d(`<h3 id="container-list" tabindex="-1"><a class="header-anchor" href="#container-list"><span>container = list</span></a></h3><p>container can also be represented as a list (but only as a layer 2 list). This means that anything you can do with a layer 2 list, you can also do with the container selector syntax. Only the syntax is slightly different:</p><p>such as：tabs</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>\\::: tabs

@tab t1

content1

@tab t2

content2

\\:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>such as: cards or columns</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>\\::: card (or col)

@card t1

content1

@card t2

content2

\\:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="concatenation-syntax-triggers-other-syntax" tabindex="-1"><a class="header-anchor" href="#concatenation-syntax-triggers-other-syntax"><span>Concatenation syntax triggers other syntax</span></a></h3><p>For example, some plug-ins use a code block selector, but the content needs md content, we can optimize it:</p><p>Such as tabs, col plugins, etc. (although you should actually use anyblock&#39;s processor, which also has these two features)</p><p>For example, from reference block to code block</p>`,10)),r(o,{id:"359",data:[{id:"Plugin effect (插件效果)"},{id:"No plugin effect (无插件效果)"},{id:"md source code (md源码)"}]},{title0:l(({value:s,isActive:i})=>t[6]||(t[6]=[n("Plugin effect (插件效果)")])),title1:l(({value:s,isActive:i})=>t[7]||(t[7]=[n("No plugin effect (无插件效果)")])),title2:l(({value:s,isActive:i})=>t[8]||(t[8]=[n("md source code (md源码)")])),tab0:l(({value:s,isActive:i})=>t[9]||(t[9]=[e("div",{class:"ab-note drop-shadow"},[e("div",{class:"markdown-rendered"},[e("div",null,[e("blockquote",null,[e("p",null,[n("// 这是一段 "),e("strong",null,"markdown"),n(" 文本 var a = 0; // 这是代码")])])])])],-1)])),tab1:l(({value:s,isActive:i})=>t[10]||(t[10]=[e("p",null,"(noPlugin)[quote2code(js)]",-1),e("blockquote",null,[e("p",null,[n("js // 这是一段 "),e("strong",null,"markdown"),n(" 文本 var a = 0; // 这是代码")])],-1)])),tab2:l(({value:s,isActive:i})=>t[11]||(t[11]=[e("div",{class:"language-markdown line-numbers-mode","data-ext":"md","data-title":"md"},[e("pre",{class:"language-markdown"},[e("code",null,[n(`[quote2code(js)]

`),e("span",{class:"token blockquote punctuation"},">"),n(` js
`),e("span",{class:"token blockquote punctuation"},">"),n(" // 这是一段 "),e("span",{class:"token bold"},[e("span",{class:"token punctuation"},"**"),e("span",{class:"token content"},"markdown"),e("span",{class:"token punctuation"},"**")]),n(` 文本
`),e("span",{class:"token blockquote punctuation"},">"),n(` var a = 0; // 这是代码
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),_:1}),t[26]||(t[26]=e("p",null,"Example: Code block to reference block: (This is also what Admonition Plugin did before obsidian's callout syntax was supported)",-1)),r(o,{id:"380",data:[{id:"Plugin effect (插件效果)"},{id:"No plugin effect (无插件效果)"},{id:"md source code (md源码)"}]},{title0:l(({value:s,isActive:i})=>t[12]||(t[12]=[n("Plugin effect (插件效果)")])),title1:l(({value:s,isActive:i})=>t[13]||(t[13]=[n("No plugin effect (无插件效果)")])),title2:l(({value:s,isActive:i})=>t[14]||(t[14]=[n("md source code (md源码)")])),tab0:l(({value:s,isActive:i})=>t[15]||(t[15]=[e("div",{class:"ab-note drop-shadow"},[e("div",{class:"markdown-rendered"},[e("div",null,[e("div",{class:"callout","data-callout":"note"},[e("div",{class:"callout-title"},[e("div",{class:"callout-title-icon"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-pencil"},[e("path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"}),e("path",{d:"m15 5 4 4"})])]),e("div",{class:"callout-title-inner"},"Note")]),e("div",{class:"callout-content"},[e("p"),e("p",null,[n("这是一段 "),e("strong",null,"markdown"),n(" 文本")]),e("p",null,"指令：Xcode|quote|add(> [!note])"),e("p",null,'指令解释：去除代码块|加入引用块|在第一行插入("> [!note]")')])])])])],-1)])),tab1:l(({value:s,isActive:i})=>t[16]||(t[16]=[e("p",null,"(noPlugin)[Xcode|quote|add(> [!note])]",-1),e("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[e("pre",{class:"language-text"},[e("code",null,`这是一段 **markdown** 文本

指令：Xcode|quote|add(> [!note])

指令解释：去除代码块|加入引用块|在第一行插入("> [!note]")
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),e("p",null,null,-1)])),tab2:l(({value:s,isActive:i})=>t[17]||(t[17]=[e("div",{class:"language-markdown line-numbers-mode","data-ext":"md","data-title":"md"},[e("pre",{class:"language-markdown"},[e("code",null,[n(`[Xcode|quote|add(> [!note])]

`),e("span",{class:"token code"},[e("span",{class:"token punctuation"},"```"),n(`
`),e("span",{class:"token code-block"},`这是一段 **markdown** 文本

指令：Xcode|quote|add(> [!note])

指令解释：去除代码块|加入引用块|在第一行插入("> [!note]")`),n(`
`),e("span",{class:"token punctuation"},"```")]),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),_:1}),t[27]||(t[27]=d(`<p>With this flexible processor syntax, if the original plugin syntax is X, you can define a new syntax Y, let the Y syntax replace the X syntax at the same time make the original plugin work!</p><h3 id="alias-system" tabindex="-1"><a class="header-anchor" href="#alias-system"><span>Alias system</span></a></h3><p>Of course, you may dislike the idea of making instructions long and unreadable, but that&#39;s okay -- we also have an alias system. Allows you to define an alias to represent a string of instructions!</p><p>For example, the code2quote directive, which comes with the plugin, uses an alias system; essentially, code2quote is identical to Xcode|quote</p><p>The plugin comes with a number of very natural aliases (especially ** Chinese ** aliases), and in actual use, it is recommended that you use these aliases:</p><p>Supported shortcut aliases:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>flow
流程图
mindmap
思维导图
脑图
mdMindmap
md思维导图
md脑图
table
multiWayTable
multiCrossTable
crossTable
表格
多叉表格
多叉表
跨行表格
跨行表
listTable
treeTable
listGrid
treeGrid
列表格
树形表
树形表格
dirTree
dir
目录
目录树
目录结构
wbs
工作分解图
timeline
时间线
fakeList
仿列表
标签页
分栏
卡片
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Using an alias system makes the plugin syntax less invasive, for example:</p>`,8)),r(o,{id:"419",data:[{id:"Plugin effect (插件效果)"},{id:"No plugin effect (无插件效果)"},{id:"md source code (md源码)"}]},{title0:l(({value:s,isActive:i})=>t[18]||(t[18]=[n("Plugin effect (插件效果)")])),title1:l(({value:s,isActive:i})=>t[19]||(t[19]=[n("No plugin effect (无插件效果)")])),title2:l(({value:s,isActive:i})=>t[20]||(t[20]=[n("md source code (md源码)")])),tab0:l(({value:s,isActive:i})=>t[21]||(t[21]=[e("div",{class:"ab-note drop-shadow"},[e("table",{class:"ab-table ab-list-table ab-table-folder"},[e("tbody",null,[e("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"true",type:"folder",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 0
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
        `},[e("td",{rowspan:"1"},[e("div",{class:"ab-list-table-svg"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[a("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),e("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),e("div",{class:"ab-list-table-witharrow markdown-rendered"},[e("div",null,[e("p",null,"/")])])])]),e("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 1
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
        `},[e("td",{rowspan:"1"},[e("div",{class:"ab-list-table-svg"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[a("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),e("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),e("div",{class:"ab-list-table-witharrow markdown-rendered"},[e("div",null,[e("p",null,"home")])])])]),e("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 2
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
        `},[e("td",{rowspan:"1"},[e("div",{class:"ab-list-table-svg"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[a("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),e("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),e("div",{class:"ab-list-table-witharrow markdown-rendered"},[e("div",null,[e("p",null,"usr")])])])]),e("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"true",type:"folder",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 3
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
        `},[e("td",{rowspan:"1"},[e("div",{class:"ab-list-table-svg"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[a("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),e("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),e("div",{class:"ab-list-table-witharrow markdown-rendered"},[e("div",null,[e("p",null,"etc")])])])]),e("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"/network/interfaces",onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 4
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
        `},[e("td",{rowspan:"1"},[e("div",{class:"ab-list-table-svg"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[a("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),e("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),e("div",{class:"ab-list-table-witharrow markdown-rendered"},[e("div",null,[e("p",null,"/network/interfaces")])])])]),e("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:`file
`,onclick:`
          const tr = this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 5
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
        `},[e("td",{rowspan:"1"},[e("div",{class:"ab-list-table-svg"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[a("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),e("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),e("div",{class:"ab-list-table-witharrow markdown-rendered"},[e("div",null,[e("p",null,"file")])])])])]),e("button",{class:"ab-table-fold",is_fold:"false"},"全部折叠/展开")])],-1)])),tab1:l(({value:s,isActive:i})=>t[22]||(t[22]=[e("p",null,"(noplugin)[目录]",-1),e("ul",null,[e("li",null,[n("// "),e("ul",null,[e("li",null,"home/"),e("li",null,"usr/"),e("li",null,[n("etc/ "),e("ul",null,[e("li",null,"/network/interfaces")])]),e("li",null,"file")])])],-1)])),tab2:l(({value:s,isActive:i})=>t[23]||(t[23]=[e("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[e("pre",{class:"language-text"},[e("code",null,`\\[目录]

- //
  - home/
  - usr/
  - etc/
    - /network/interfaces
  - file
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),_:1})])}const g=c(b,[["render",m],["__file","03. Selector.html.vue"]]),k=JSON.parse(`{"path":"/docs/en/03.%20Selector.html","title":"Selector","lang":"zh-CN","frontmatter":{"description":"Selector Many people see the dazzling effects of the display page and think that AnyBlock provides a lot of effects processing and rendering is the content of this plugin. But t...","head":[["meta",{"property":"og:url","content":"https://any-block.github.io/obsidian-any-block/docs/en/03.%20Selector.html"}],["meta",{"property":"og:site_name","content":"obsidian-any-block"}],["meta",{"property":"og:title","content":"Selector"}],["meta",{"property":"og:description","content":"Selector Many people see the dazzling effects of the display page and think that AnyBlock provides a lot of effects processing and rendering is the content of this plugin. But t..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"any-block"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Selector\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"any-block\\",\\"url\\":\\"https://github.com/any-block/obsidian-any-block/\\"}]}"]]},"headers":[{"level":1,"title":"Selector","slug":"selector","link":"#selector","children":[{"level":2,"title":"What is a selector?","slug":"what-is-a-selector","link":"#what-is-a-selector","children":[]},{"level":2,"title":"Eight selectors","slug":"eight-selectors","link":"#eight-selectors","children":[{"level":3,"title":"Traditional code block selector","slug":"traditional-code-block-selector","link":"#traditional-code-block-selector","children":[]},{"level":3,"title":"Traditional reference block selector","slug":"traditional-reference-block-selector","link":"#traditional-reference-block-selector","children":[]},{"level":3,"title":"AB list selector","slug":"ab-list-selector","link":"#ab-list-selector","children":[]},{"level":3,"title":"AB heading selector","slug":"ab-heading-selector","link":"#ab-heading-selector","children":[]},{"level":3,"title":"AB codeBlock selector","slug":"ab-codeblock-selector","link":"#ab-codeblock-selector","children":[]},{"level":3,"title":"AB quote selector","slug":"ab-quote-selector","link":"#ab-quote-selector","children":[]},{"level":3,"title":"AB table selector","slug":"ab-table-selector","link":"#ab-table-selector","children":[]},{"level":3,"title":"Mdit-Container ::: headtail selector","slug":"mdit-container-headtail-selector","link":"#mdit-container-headtail-selector","children":[]}]},{"level":2,"title":"Summary","slug":"summary","link":"#summary","children":[{"level":3,"title":"Comparison of several selectors","slug":"comparison-of-several-selectors","link":"#comparison-of-several-selectors","children":[]},{"level":3,"title":"Why is the essence of AnyBlock the selector","slug":"why-is-the-essence-of-anyblock-the-selector","link":"#why-is-the-essence-of-anyblock-the-selector","children":[]}]},{"level":2,"title":"Use it flexibly","slug":"use-it-flexibly","link":"#use-it-flexibly","children":[{"level":3,"title":"title = list","slug":"title-list","link":"#title-list","children":[]},{"level":3,"title":"container = list","slug":"container-list","link":"#container-list","children":[]},{"level":3,"title":"Concatenation syntax triggers other syntax","slug":"concatenation-syntax-triggers-other-syntax","link":"#concatenation-syntax-triggers-other-syntax","children":[]},{"level":3,"title":"Alias system","slug":"alias-system","link":"#alias-system","children":[]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":6.8,"words":2041},"filePathRelative":"docs/en/03. Selector.md","excerpt":"\\n<p>Many people see the dazzling effects of the display page and think that AnyBlock provides a lot of effects processing and rendering is the content of this plugin.</p>\\n<p>But that's not the essence of AnyBlock. The essence of <code>AnyBlock</code>, as the name suggests, is to pick any range and turn it into a block.</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[{"title":"README","link":"README.html"},{"title":"README.show","link":"README.show.html"}],"localMap":{"nodes":[{"id":"docs/en/03. Selector.md","value":{"title":"03. Selector","path":"docs/en/03. Selector.md","outlink":[],"backlink":["README.md","README.show.md"]}},{"id":"README.md","value":{"title":"README","path":"README.md","outlink":[],"backlink":[]}},{"id":"README.show.md","value":{"title":"README.show","path":"README.show.md","outlink":[],"backlink":[]}}],"links":[{"source":"README.md","target":"docs/en/03. Selector.md"},{"source":"README.show.md","target":"docs/en/03. Selector.md"}]}}}`);export{g as comp,k as data};
