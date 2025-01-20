import{_ as c,c as u,a as o,e as r,w as i,b as e,d as l,r as v,o as p,f as a}from"./app-BHg9TSCZ.js";const b={};function m(f,n){const d=v("Tabs");return p(),u("div",null,[n[24]||(n[24]=o(`<h1 id="selector-选择器" tabindex="-1"><a class="header-anchor" href="#selector-选择器"><span>Selector (选择器)</span></a></h1><p>很多人看到展示页面眼花缭乱的效果，认为 AnyBlock 提供的大量效果处理和渲染是这个插件的内容。</p><p>但这并非 AnyBlock 的精髓所在，<code>AnyBlock</code> 插件，看名字就知道，他的精髓在于任意地选择一段范围，并将这一段范围变为 “块”</p><p>即 AnyBlock 的精髓在于 —— <strong>选择器</strong></p><h2 id="什么是选择器" tabindex="-1"><a class="header-anchor" href="#什么是选择器"><span>什么是选择器？</span></a></h2><p>这是插件中的一个重要概念，对于 markdwon 的局部解析渲染，有两个重要的步骤</p><ol><li>范围识别 (我将完成这一步骤的称为 <code>选择器</code>)</li><li>将这段范围中的内容进行处理或渲染 (我将完成这一步骤的称为 <code>处理器</code>)</li></ol><h2 id="八种选择器" tabindex="-1"><a class="header-anchor" href="#八种选择器"><span>八种选择器</span></a></h2><h3 id="传统代码块选择器" tabindex="-1"><a class="header-anchor" href="#传统代码块选择器"><span>传统代码块选择器</span></a></h3><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>\`\`\`js       // 这是开始位置 (包含该行)
var a = 0;
\`\`\`         // 这是结束位置 (包含该行)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在obsidian中，大部分插件使用这种选择器识别范围。例子多不胜数，如：tabs标签页、col分栏、mermaid、plantuml 等等</p><p>anyblock除了扩展的六种选择器外，传统的代码块选择器也是支持的。这种选择器的优点在于官方自身提供，兼容性等问题都会非常不错。如果在使用过程中遇到了一些 AnyBllock 不生效的问题，可以尝试换用该方式看问题是否解决。</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>\`\`\`anyblock   // 这是开始位置 (包含该行)
[list2table]  // 这是必须的，这有点类似于mermaid代码块中声明图表类型的语句

<span class="token list punctuation">-</span> 1
  <span class="token list punctuation">-</span> 2
  <span class="token list punctuation">-</span> 3
<span class="token list punctuation">-</span> 4
  <span class="token list punctuation">-</span> 5
  <span class="token list punctuation">-</span> 6
\`\`\`           // 这是结束位置 (包含该行)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="传统引用块选择器" tabindex="-1"><a class="header-anchor" href="#传统引用块选择器"><span>传统引用块选择器</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>其他内容

&gt; [!note]   // 这是开始位置 (包含该行)
&gt; 这是一个obsidian
&gt; 的callout
&gt; 语句       // 这是结束位置 (包含该行)

其他内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这也是一种选择器，通过引用块选择。但相较于有很多代码选择器的插件，用引用块进行选择的，几乎就只有callout语句了。</p><p>那是因为 —— obsidian的开发API并没有提供关于使用这种方式选择范围的快捷API，如果你想要使用这种方式选择一段md文本并进行操作，几乎只能手撸了，而这很难</p><h3 id="ab的列表选择器" tabindex="-1"><a class="header-anchor" href="#ab的列表选择器"><span>AB的列表选择器</span></a></h3><p>而 AnyBlock 提供了非常多能够轻松选择范围的选择器，并提供了丰富的解析渲染的处理器。</p><p>例如列表选择器：</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>\\[...]      // 这是开始位置 (包含该行)

<span class="token list punctuation">-</span> 1
  <span class="token list punctuation">-</span> 2
-3          // 这是结束位置 (包含该行)

其他内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>触发方式：在 <code>列表</code> 的上一/两行增加一行 <code>AB选择器头部</code> (由方括号扩起来的内容)</li><li>范围选择：从AB选择器头部开始，到其后面的列表结束为止</li></ul><h3 id="ab的标题选择器" tabindex="-1"><a class="header-anchor" href="#ab的标题选择器"><span>AB的标题选择器</span></a></h3><p>在前面的 “效果展示” 中，我总是使用列表选择器，是因为这种选择器最方便，并且为了避免在前面的章节中引入 “选择器” 这个概念，让刚接触这个插件的人感到迷惑。</p><p>事实上，对于像 “卡片”/“标签页”/“分栏” 这种处理来说，通常每一个子项的内容较多且较为混杂，使用标题选择器或 Mdit-Container 选择器是更好的选择！</p><p>例如标题选择器：</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">##</span> 二级标题</span>

\\[...]      // 这是开始位置 (包含该行)

<span class="token title important"><span class="token punctuation">###</span> 三级标题</span>

<span class="token title important"><span class="token punctuation">####</span> 四级标题</span>

<span class="token title important"><span class="token punctuation">###</span> 三级标题</span>

内容         // 这是结束位置 (包含该行)

<span class="token title important"><span class="token punctuation">##</span> 二级标题</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>触发方式：在 <code>标题</code> 的上一/两行增加一行 <code>AB选择器头部</code> (由方括号扩起来的内容)</li><li>范围选择：从AB选择器头部开始，记其下面的标题等级为X，选择至其后面出现大于X的标题等级为止</li></ul><h3 id="ab的代码块选择器" tabindex="-1"><a class="header-anchor" href="#ab的代码块选择器"><span>AB的代码块选择器</span></a></h3><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>
\\[...]      // 这是开始位置 (包含该行)

\`\`\`js
var a = 1;
\`\`\`         // 这是结束位置 (包含该行)

其他内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>触发方式：在 <code>代码块</code> 的上一/两行增加一行 <code>AB选择器头部</code> (由方括号扩起来的内容)</li><li>范围选择：从AB选择器头部开始，选择至其后面的代码块结束为止</li></ul><h3 id="ab的引用块选择器" tabindex="-1"><a class="header-anchor" href="#ab的引用块选择器"><span>AB的引用块选择器</span></a></h3><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>
\\[...]      // 这是开始位置 (包含该行)

<span class="token blockquote punctuation">&gt;</span> ...
<span class="token blockquote punctuation">&gt;</span> ...
<span class="token blockquote punctuation">&gt;</span> ...       // 这是结束位置 (包含该行)

其他内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>触发方式：在 <code>引用块</code> 的上一/两行增加一行 <code>AB选择器头部</code> (由方括号扩起来的内容)</li><li>范围选择：从AB选择器头部开始，选择至其后面的引用块结束为止</li></ul><h3 id="ab的表格选择器" tabindex="-1"><a class="header-anchor" href="#ab的表格选择器"><span>AB的表格选择器</span></a></h3><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>\\[...]      // 这是开始位置 (包含该行)

<span class="token table"><span class="token table-header-row"><span class="token punctuation">|</span><span class="token table-header important"> a </span><span class="token punctuation">|</span><span class="token table-header important"> b </span><span class="token punctuation">|</span>
</span><span class="token table-line"><span class="token punctuation">|</span><span class="token punctuation">---</span><span class="token punctuation">|</span><span class="token punctuation">---</span><span class="token punctuation">|</span>
</span><span class="token table-data-rows"><span class="token punctuation">|</span><span class="token table-data"> c </span><span class="token punctuation">|</span><span class="token table-data"> d </span><span class="token punctuation">|</span><span class="token table-data">   // 这是结束位置 (包含该行)</span>
</span></span>
其他内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mdit-container的-头尾选择器" tabindex="-1"><a class="header-anchor" href="#mdit-container的-头尾选择器"><span>Mdit-Container的<code>:::</code>头尾选择器</span></a></h3><p>这是 markdwon-it-container 的语法，在 VuePress/VitePress 博客上较为多见。</p><p>虽然该语法并不是 AnyBlock 作者所设计的，但在 Obsidian 上，该语法也同样由 AnyBlock 插件提供</p><p>语法：</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>
\\::: ...    // 这是开始位置 (包含该行)

任意内容

\\:::        // 这是结束位置 (包含该行)

其他内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><h3 id="几种选择器的比较" tabindex="-1"><a class="header-anchor" href="#几种选择器的比较"><span>几种选择器的比较</span></a></h3><ul><li>传统代码开头选择器 <ul><li>优点：自带代码着色、可嵌套。适合需要包含代码的内容</li><li>缺点：若包含md内容则在无插件的情况下渲染结果不好</li></ul></li><li>传统引用块选择器 <ul><li>缺点：无Obsidian支持的API，开发困难。书写稍麻烦 (每行带 <code>&gt;</code>)，嵌套也稍麻烦</li></ul></li><li>AB选择器 <ul><li>优点：格式统一。格式无感，没啥插件嵌入的语法污染。包含md内容时，在无插件的情况下渲染结果优秀</li><li>缺点：对于复合内容，无法选择。用灵活性和功能性换来了便携性和无入侵性，导致前两者功能较mdit-container较差</li></ul></li><li>Mdit-Container选择器 <ul><li>优点：选择范围灵活。包含md内容时，在无插件的情况下渲染结果优秀。嵌套非常方便</li><li>缺点：在对于简单范围的选择上不如AB选择器高效快捷，语法的入侵痕迹更重一些</li></ul></li></ul><div class="callout" data-callout="note"><div class="callout-title"><div class="callout-title-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path><path d="m15 5 4 4"></path></svg></div><div class="callout-title-inner">Note</div></div><div class="callout-content"><p>AB选择器的缺点并不是AnyBlock插件的缺点，AnyBlock本来也有自己的头尾选择器，只是后来看到 <code>:::</code> 选择器更通用就把自己的 <code>{}</code> 头尾选择器语法扔了换用成那个。 更何况，在Obsidian中，<code>:::</code> 选择器同样是由 AnyBlock 所提供的</p></div></div><h3 id="为什么说-anyblock-的精髓在于选择器" tabindex="-1"><a class="header-anchor" href="#为什么说-anyblock-的精髓在于选择器"><span>为什么说 AnyBlock 的精髓在于选择器</span></a></h3><p>虽然 AnyBlock 支持非常丰富了效果，但这些效果其实很多别个插件也都能做。无论在Obsidian还是在Markdown-it中，例如图表的绘制、时间线、分栏等等</p><p>AnyBlock 的精髓在于 —— “选择器”</p><ol><li>一是能够灵活地选择范围。解除了以往只能通过代码块的方式来实现额外语法 (特别是对于ob来说，vueperss好歹还有个mdit-conteiner选择器)</li><li>二是选择范围的方式极为便捷。其语法拥有便捷性和无入侵性</li><li>三是处理器和选择器脱藕。处理器并无需在意你选择范围使用的是哪种选择器</li></ol><h2 id="灵活地妙用" tabindex="-1"><a class="header-anchor" href="#灵活地妙用"><span>灵活地妙用</span></a></h2><h3 id="title-list" tabindex="-1"><a class="header-anchor" href="#title-list"><span>title = list</span></a></h3><ol><li>由于有 <code>title2list</code> 处理器以及对于串连处理器的支持：所有能够处理列表的处理器，同样能够处理标题</li><li>如果出现问题，可以用 <code>title2list|code()</code> 来方便地查看转化情况，并调试</li><li>不建议不用 <code>title2tab</code>，拆成 <code>title2list|list2tab</code> 来用。有现成 <code>title2</code> 指令就用现成的</li></ol><ul><li>（底层原因：这两者效果还是有些区别。因为 <code>title2list</code> 时需要将结构转化为了多层树，但 <code>list2tab</code> 只需要将结构转化为二层树）</li></ul><p>例如：</p>`,54)),r(d,{id:"285",data:[{id:"Plugin effect (插件效果)"},{id:"No plugin effect (无插件效果)"},{id:"md source code (md源码)"}]},{title0:i(({value:t,isActive:s})=>n[0]||(n[0]=[l("Plugin effect (插件效果)")])),title1:i(({value:t,isActive:s})=>n[1]||(n[1]=[l("No plugin effect (无插件效果)")])),title2:i(({value:t,isActive:s})=>n[2]||(n[2]=[l("md source code (md源码)")])),tab0:i(({value:t,isActive:s})=>n[3]||(n[3]=[e("div",{class:"ab-note drop-shadow"},[e("table",{class:"ab-table ab-branch-table"},[e("tbody",null,[e("tr",null,[e("td",{rowspan:"3",col_index:"0",class:"markdown-rendered"},[e("div",null,[e("p",null,"a")])]),e("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[e("div",null,[e("p",null,"1")])])]),e("tr",null,[e("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[e("div",null,[e("p",null,"2")])])]),e("tr",null,[e("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[e("div",null,[e("p",null,"3")])])]),e("tr",null,[e("td",{rowspan:"3",col_index:"0",class:"markdown-rendered"},[e("div",null,[e("p",null,"b")])]),e("td",{rowspan:"3",col_index:"1",class:"markdown-rendered"},[e("div",null,[e("p",null,"b1")])]),e("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[e("div",null,[e("p",null,"5")])])]),e("tr",null,[e("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[e("div",null,[e("p",null,"6")])])]),e("tr",null,[e("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[e("div",null,[e("p",null,"7")])])])])])],-1)])),tab1:i(({value:t,isActive:s})=>n[4]||(n[4]=[e("p",null,"(noplugin)[title2list|list2table]",-1),e("h4",{id:"a",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#a"},[e("span",null,"a")])],-1),e("ul",null,[e("li",null,"1"),e("li",null,"2"),e("li",null,"3")],-1),e("h4",{id:"b",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#b"},[e("span",null,"b")])],-1),e("h5",{id:"b1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#b1"},[e("span",null,"b1")])],-1),e("ul",null,[e("li",null,"5"),e("li",null,"6"),e("li",null,"7")],-1)])),tab2:i(({value:t,isActive:s})=>n[5]||(n[5]=[e("div",{class:"language-markdown line-numbers-mode","data-ext":"md","data-title":"md"},[e("pre",{class:"language-markdown"},[e("code",null,[l(`\\[title2list|list2table]

`),e("span",{class:"token title important"},[e("span",{class:"token punctuation"},"####"),l(" a")]),l(`

`),e("span",{class:"token list punctuation"},"-"),l(` 1
`),e("span",{class:"token list punctuation"},"-"),l(` 2
`),e("span",{class:"token list punctuation"},"-"),l(` 3
`),e("span",{class:"token title important"},[e("span",{class:"token punctuation"},"####"),l(" b")]),l(`

`),e("span",{class:"token title important"},[e("span",{class:"token punctuation"},"#####"),l(" b1")]),l(`

`),e("span",{class:"token list punctuation"},"-"),l(` 5
`),e("span",{class:"token list punctuation"},"-"),l(` 6
`),e("span",{class:"token list punctuation"},"-"),l(` 7
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),_:1}),n[25]||(n[25]=o(`<h3 id="container-list" tabindex="-1"><a class="header-anchor" href="#container-list"><span>container = list</span></a></h3><p>container也可以表示为list (但只是一个二层的list)。这意味着关于二层list能做的事，用 container 选择器语法也一样可以做。只是语法上稍有不同：</p><p>例如：标签页</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>\\::: tabs

@tab t1

content1

@tab t2

content2

\\:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：卡片或分栏</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>\\::: card (or col)

@card t1

content1

@card t2

content2

\\:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="串联语法、触发其他语法" tabindex="-1"><a class="header-anchor" href="#串联语法、触发其他语法"><span>串联语法、触发其他语法</span></a></h3><p>例如有的插件使用的是代码块选择器，但内容却需要md内容，我们可以优化他：</p><p>例如 tabs标签页、col分栏插件等 (虽然这两其实你应该用anyblock的处理器，也有这两功能)</p><p>例如：引用块转代码块</p>`,10)),r(d,{id:"367",data:[{id:"Plugin effect (插件效果)"},{id:"No plugin effect (无插件效果)"},{id:"md source code (md源码)"}]},{title0:i(({value:t,isActive:s})=>n[6]||(n[6]=[l("Plugin effect (插件效果)")])),title1:i(({value:t,isActive:s})=>n[7]||(n[7]=[l("No plugin effect (无插件效果)")])),title2:i(({value:t,isActive:s})=>n[8]||(n[8]=[l("md source code (md源码)")])),tab0:i(({value:t,isActive:s})=>n[9]||(n[9]=[e("div",{class:"ab-note drop-shadow"},[e("div",{class:"markdown-rendered"},[e("div",null,[e("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[e("pre",{class:"language-javascript"},[e("code",null,[e("span",{class:"token comment"},"// 这是一段 **markdown** 文本"),l(`
`),e("span",{class:"token keyword"},"var"),l(" a "),e("span",{class:"token operator"},"="),l(),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},";"),l(),e("span",{class:"token comment"},"// 这是代码"),l(`

`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])])])])],-1)])),tab1:i(({value:t,isActive:s})=>n[10]||(n[10]=[e("p",null,"(noPlugin)[X|code(js)]",-1),e("blockquote",null,[e("p",null,[l("js // 这是一段 "),e("strong",null,"markdown"),l(" 文本 var a = 0; // 这是代码")])],-1)])),tab2:i(({value:t,isActive:s})=>n[11]||(n[11]=[e("div",{class:"language-markdown line-numbers-mode","data-ext":"md","data-title":"md"},[e("pre",{class:"language-markdown"},[e("code",null,[l(`[X|code(js)]

`),e("span",{class:"token blockquote punctuation"},">"),l(` js
`),e("span",{class:"token blockquote punctuation"},">"),l(" // 这是一段 "),e("span",{class:"token bold"},[e("span",{class:"token punctuation"},"**"),e("span",{class:"token content"},"markdown"),e("span",{class:"token punctuation"},"**")]),l(` 文本
`),e("span",{class:"token blockquote punctuation"},">"),l(` var a = 0; // 这是代码
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),_:1}),n[26]||(n[26]=e("p",null,[l("例如：代码块转引用块：（这也是在obsidian的callout语法被支持前，"),e("code",null,"Admonition 插件"),l(" 所做的事情）")],-1)),r(d,{id:"388",data:[{id:"Plugin effect (插件效果)"},{id:"No plugin effect (无插件效果)"},{id:"md source code (md源码)"}]},{title0:i(({value:t,isActive:s})=>n[12]||(n[12]=[l("Plugin effect (插件效果)")])),title1:i(({value:t,isActive:s})=>n[13]||(n[13]=[l("No plugin effect (无插件效果)")])),title2:i(({value:t,isActive:s})=>n[14]||(n[14]=[l("md source code (md源码)")])),tab0:i(({value:t,isActive:s})=>n[15]||(n[15]=[e("div",{class:"ab-note drop-shadow"},[e("div",{class:"markdown-rendered"},[e("div",null,[e("div",{class:"callout","data-callout":"note"},[e("div",{class:"callout-title"},[e("div",{class:"callout-title-icon"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-pencil"},[e("path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"}),e("path",{d:"m15 5 4 4"})])]),e("div",{class:"callout-title-inner"},"Note")]),e("div",{class:"callout-content"},[e("p"),e("p",null,[l("这是一段 "),e("strong",null,"markdown"),l(" 文本")]),e("p",null,"指令：Xcode|quote|add(> [!note])"),e("p",null,'指令解释：去除代码块|加入引用块|在第一行插入("> [!note]")')])])])])],-1)])),tab1:i(({value:t,isActive:s})=>n[16]||(n[16]=[e("p",null,"(noPlugin)[Xcode|quote|add(> [!note])]",-1),e("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[e("pre",{class:"language-text"},[e("code",null,`这是一段 **markdown** 文本

指令：Xcode|quote|add(> [!note])

指令解释：去除代码块|加入引用块|在第一行插入("> [!note]")
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),e("p",null,null,-1)])),tab2:i(({value:t,isActive:s})=>n[17]||(n[17]=[e("div",{class:"language-markdown line-numbers-mode","data-ext":"md","data-title":"md"},[e("pre",{class:"language-markdown"},[e("code",null,[l(`[Xcode|quote|add(> [!note])]

`),e("span",{class:"token code"},[e("span",{class:"token punctuation"},"```"),l(`
`),e("span",{class:"token code-block"},`这是一段 **markdown** 文本

指令：Xcode|quote|add(> [!note])

指令解释：去除代码块|加入引用块|在第一行插入("> [!note]")`),l(`
`),e("span",{class:"token punctuation"},"```")]),l(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),_:1}),n[27]||(n[27]=o(`<p>通过这套灵活的处理器语法，假如原插件的语法是X，你能够自己定义一个新语法Y，让Y语法替换X语法的同时让原插件生效！</p><h3 id="别名系统" tabindex="-1"><a class="header-anchor" href="#别名系统"><span>别名系统</span></a></h3><p>当然，你可能嫌弃这样的做法会让指令变得长而不可读，没关系 —— 我们还有别名系统。能够让你用自己定义一个别名来表示一串指令！</p><p>例如插件自带的 <code>code2quote</code> 指令，就是使用了别名系统，本质上，<code>code2quote</code> 完全等同于 <code>Xcode|quote</code></p><p>插件自带了许多非常自然的别名（特别是<strong>中文</strong>别名），在实际使用中，更推荐你使用这些别名：</p><p>已支持的快捷别名：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>flow
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用别名系统能让该插件的语法入侵性更低，例如：</p>`,8)),r(d,{id:"427",data:[{id:"Plugin effect (插件效果)"},{id:"No plugin effect (无插件效果)"},{id:"md source code (md源码)"}]},{title0:i(({value:t,isActive:s})=>n[18]||(n[18]=[l("Plugin effect (插件效果)")])),title1:i(({value:t,isActive:s})=>n[19]||(n[19]=[l("No plugin effect (无插件效果)")])),title2:i(({value:t,isActive:s})=>n[20]||(n[20]=[l("md source code (md源码)")])),tab0:i(({value:t,isActive:s})=>n[21]||(n[21]=[e("div",{class:"ab-note drop-shadow"},[e("table",{class:"ab-table ab-list-table ab-table-folder"},[e("tbody",null,[e("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"true",type:"folder",onclick:`
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
        `},[e("td",{rowspan:"1"},[e("div",{class:"ab-list-table-svg"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[a("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),e("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),e("div",{class:"ab-list-table-witharrow markdown-rendered"},[e("div",null,[e("p",null,"file")])])])])]),e("button",{class:"ab-table-fold",is_fold:"false"},"全部折叠/展开")])],-1)])),tab1:i(({value:t,isActive:s})=>n[22]||(n[22]=[e("p",null,"(noplugin)[目录]",-1),e("ul",null,[e("li",null,[l("// "),e("ul",null,[e("li",null,"home/"),e("li",null,"usr/"),e("li",null,[l("etc/ "),e("ul",null,[e("li",null,"/network/interfaces")])]),e("li",null,"file")])])],-1)])),tab2:i(({value:t,isActive:s})=>n[23]||(n[23]=[e("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[e("pre",{class:"language-text"},[e("code",null,`\\[目录]

- //
  - home/
  - usr/
  - etc/
    - /network/interfaces
  - file
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),_:1})])}const g=c(b,[["render",m],["__file","03. 选择器.html.vue"]]),h=JSON.parse('{"path":"/docs/zh/03.%20%E9%80%89%E6%8B%A9%E5%99%A8.html","title":"Selector (选择器)","lang":"zh-CN","frontmatter":{"description":"Selector (选择器) 很多人看到展示页面眼花缭乱的效果，认为 AnyBlock 提供的大量效果处理和渲染是这个插件的内容。 但这并非 AnyBlock 的精髓所在，AnyBlock 插件，看名字就知道，他的精髓在于任意地选择一段范围，并将这一段范围变为 “块” 即 AnyBlock 的精髓在于 —— 选择器 什么是选择器？ 这是插件中的一个重要...","head":[["meta",{"property":"og:url","content":"https://any-block.github.io/obsidian-any-block/docs/zh/03.%20%E9%80%89%E6%8B%A9%E5%99%A8.html"}],["meta",{"property":"og:site_name","content":"obsidian-any-block"}],["meta",{"property":"og:title","content":"Selector (选择器)"}],["meta",{"property":"og:description","content":"Selector (选择器) 很多人看到展示页面眼花缭乱的效果，认为 AnyBlock 提供的大量效果处理和渲染是这个插件的内容。 但这并非 AnyBlock 的精髓所在，AnyBlock 插件，看名字就知道，他的精髓在于任意地选择一段范围，并将这一段范围变为 “块” 即 AnyBlock 的精髓在于 —— 选择器 什么是选择器？ 这是插件中的一个重要..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"any-block"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Selector (选择器)\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"any-block\\",\\"url\\":\\"https://github.com/any-block/obsidian-any-block/\\"}]}"]]},"headers":[{"level":1,"title":"Selector (选择器)","slug":"selector-选择器","link":"#selector-选择器","children":[{"level":2,"title":"什么是选择器？","slug":"什么是选择器","link":"#什么是选择器","children":[]},{"level":2,"title":"八种选择器","slug":"八种选择器","link":"#八种选择器","children":[{"level":3,"title":"传统代码块选择器","slug":"传统代码块选择器","link":"#传统代码块选择器","children":[]},{"level":3,"title":"传统引用块选择器","slug":"传统引用块选择器","link":"#传统引用块选择器","children":[]},{"level":3,"title":"AB的列表选择器","slug":"ab的列表选择器","link":"#ab的列表选择器","children":[]},{"level":3,"title":"AB的标题选择器","slug":"ab的标题选择器","link":"#ab的标题选择器","children":[]},{"level":3,"title":"AB的代码块选择器","slug":"ab的代码块选择器","link":"#ab的代码块选择器","children":[]},{"level":3,"title":"AB的引用块选择器","slug":"ab的引用块选择器","link":"#ab的引用块选择器","children":[]},{"level":3,"title":"AB的表格选择器","slug":"ab的表格选择器","link":"#ab的表格选择器","children":[]},{"level":3,"title":"Mdit-Container的:::头尾选择器","slug":"mdit-container的-头尾选择器","link":"#mdit-container的-头尾选择器","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[{"level":3,"title":"几种选择器的比较","slug":"几种选择器的比较","link":"#几种选择器的比较","children":[]},{"level":3,"title":"为什么说 AnyBlock 的精髓在于选择器","slug":"为什么说-anyblock-的精髓在于选择器","link":"#为什么说-anyblock-的精髓在于选择器","children":[]}]},{"level":2,"title":"灵活地妙用","slug":"灵活地妙用","link":"#灵活地妙用","children":[{"level":3,"title":"title = list","slug":"title-list","link":"#title-list","children":[]},{"level":3,"title":"container = list","slug":"container-list","link":"#container-list","children":[]},{"level":3,"title":"串联语法、触发其他语法","slug":"串联语法、触发其他语法","link":"#串联语法、触发其他语法","children":[]},{"level":3,"title":"别名系统","slug":"别名系统","link":"#别名系统","children":[]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":9.28,"words":2784},"filePathRelative":"docs/zh/03. 选择器.md","excerpt":"\\n<p>很多人看到展示页面眼花缭乱的效果，认为 AnyBlock 提供的大量效果处理和渲染是这个插件的内容。</p>\\n<p>但这并非 AnyBlock 的精髓所在，<code>AnyBlock</code> 插件，看名字就知道，他的精髓在于任意地选择一段范围，并将这一段范围变为 “块”</p>\\n<p>即 AnyBlock 的精髓在于 —— <strong>选择器</strong></p>\\n<h2>什么是选择器？</h2>\\n<p>这是插件中的一个重要概念，对于 markdwon 的局部解析渲染，有两个重要的步骤</p>\\n<ol>\\n<li>范围识别 (我将完成这一步骤的称为 <code>选择器</code>)</li>\\n<li>将这段范围中的内容进行处理或渲染 (我将完成这一步骤的称为 <code>处理器</code>)</li>\\n</ol>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[{"title":"README.show","link":"README.show.html"}],"localMap":{"nodes":[{"id":"docs/zh/03. 选择器.md","value":{"title":"03. 选择器","path":"docs/zh/03. 选择器.md","outlink":[],"backlink":["README.show.md"]}},{"id":"README.show.md","value":{"title":"README.show","path":"README.show.md","outlink":[],"backlink":[]}}],"links":[{"source":"README.show.md","target":"docs/zh/03. 选择器.md"}]}}}');export{g as comp,h as data};
