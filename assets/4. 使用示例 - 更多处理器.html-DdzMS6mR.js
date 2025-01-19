import{_ as e,c as l,a,b as n,d as s,o as i}from"./app-DZvEaX5f.js";const p={};function o(c,t){return i(),l("div",null,t[0]||(t[0]=[a('<p>前三章介绍了各种选择器，主要介绍的是列表文本转树形结构的图形</p><h1 id="更多处理器-装饰处理器" tabindex="-1"><a class="header-anchor" href="#更多处理器-装饰处理器"><span>更多处理器（装饰处理器）</span></a></h1><h2 id="块名" tabindex="-1"><a class="header-anchor" href="#块名"><span>块名</span></a></h2><p><strong>这个相当有用和高频</strong>，所以我给了个语法糖，用 <code>#</code> 开头就行 给块一个名字，并且可以自动识别修饰的块的类型。可以很轻易地：</p><ul><li>给表格添加| 居中的表格标题</li><li>给代码添加| 文件名</li></ul><h4 id="表格标题" tabindex="-1"><a class="header-anchor" href="#表格标题"><span>表格标题</span></a></h4>',6),n("div",{class:"ab-note drop-shadow"},[n("div",{class:"ab-deco-title"},[n("div",{class:"ab-deco-title-title","title-type":"table"},[n("p",null,"表格标题")]),n("div",{class:"ab-deco-title-content"},[n("table",{class:"ab-table ab-branch-table"},[n("tbody",null,[n("tr",null,[n("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[n("div",null,[n("p",null,"1")])]),n("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[n("div",null,[n("p",null,"2")])])]),n("tr",null,[n("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[n("div",null,[n("p",null,"3")])]),n("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[n("div",null,[n("p",null,"4")])])])])])])])],-1),a(`<h4 id="代码标题" tabindex="-1"><a class="header-anchor" href="#代码标题"><span>代码标题</span></a></h4><p>按道理这里的文件名应该和代码块同色，不同色的话自己先在css文件里调一下。 找 <code>--pre-background-color</code> ，在css文件的前五行，改个颜色值就行。 （尝试过用js获取代码块颜色再调的，但失败了）</p><div class="ab-note drop-shadow"><div class="markdown-rendered"><div><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">/* 我的第一个 C 程序 */</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, World! \\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></div></div><h4 id="其他标题" tabindex="-1"><a class="header-anchor" href="#其他标题"><span>其他标题</span></a></h4><div class="ab-note drop-shadow"><div class="markdown-rendered"><div><blockquote><p>引用块1 引用块2</p></blockquote></div></div></div><div class="ab-note drop-shadow"><div class="markdown-rendered"><div><ul><li>1 <ul><li>2 <ul><li>3</li></ul></li><li>2</li></ul></li></ul></div></div></div><h2 id="折叠" tabindex="-1"><a class="header-anchor" href="#折叠"><span>折叠</span></a></h2><p>这个是我在写 anyblock 之前，使用dataviewjs强行模拟 list2table 效果的代码，内容比较长所以拿过来演示 [fold]</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> keyword <span class="token operator">=</span> <span class="token string">&quot;%&quot;</span><span class="token operator">+</span><span class="token string">&quot;toTable&quot;</span> <span class="token comment">// 不能合并</span>
<span class="token keyword">const</span> files <span class="token operator">=</span> app<span class="token punctuation">.</span>vault<span class="token punctuation">.</span><span class="token function">getMarkdownFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">const</span> lines <span class="token operator">=</span> files
	<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>  <span class="token comment">// 本篇笔记</span>
		<span class="token keyword">return</span> file<span class="token punctuation">.</span>path <span class="token operator">==</span> dv<span class="token punctuation">.</span><span class="token function">current</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>file<span class="token punctuation">.</span>path
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>  <span class="token comment">// 转列表</span>
		<span class="token keyword">const</span> content <span class="token operator">=</span> <span class="token keyword">await</span> app<span class="token punctuation">.</span>vault<span class="token punctuation">.</span><span class="token function">cachedRead</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>  
		<span class="token keyword">const</span> lines <span class="token operator">=</span> content<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> lines
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	
Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>lines<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">linesTmp</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> lines <span class="token operator">=</span> linesTmp<span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token comment">// 先搜索关键词</span>
	<span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>lines<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>lines<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>keyword<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			index <span class="token operator">=</span> i
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">// 获取参数</span>
	<span class="token keyword">const</span> args <span class="token operator">=</span> lines<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>keyword<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^|</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;|&quot;</span><span class="token punctuation">)</span>
	

	<span class="token comment">// 先不考虑异常缩进了</span>
	<span class="token keyword">let</span> levelArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
	<span class="token keyword">let</span> contentArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span>index<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>lines<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\s*?-\\s(.*?)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>lines<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			contentArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>lines<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\s*?-\\s</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
			levelArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>lines<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">-\\s(.*?)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">else</span><span class="token punctuation">{</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 再弄成正确的层次关系，暂时先只考虑三层</span>
	<span class="token keyword">let</span> tableData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
	<span class="token keyword">let</span> lastArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
	<span class="token keyword">let</span> lastLevel <span class="token operator">=</span> <span class="token number">0</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>levelArr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>levelArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>lastArr<span class="token punctuation">.</span>length<span class="token operator">!=</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 是否不为第一个数据</span>
				tableData<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>lastArr<span class="token punctuation">)</span>
				lastArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
			<span class="token punctuation">}</span>
			lastLevel <span class="token operator">=</span> <span class="token number">0</span>
			lastArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>contentArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>levelArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>lastLevel<span class="token operator">&lt;</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// 是否新起一行</span>
				lastArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>contentArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
				lastLevel <span class="token operator">=</span> <span class="token number">1</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">else</span><span class="token punctuation">{</span>
				tableData<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>lastArr<span class="token punctuation">)</span>
				lastArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
				lastLevel <span class="token operator">=</span> <span class="token number">1</span>
				lastArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;^^&quot;</span><span class="token punctuation">)</span>
				lastArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>contentArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>levelArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">==</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>lastLevel<span class="token operator">&lt;</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// 是否新起一行</span>
				lastArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>contentArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
				lastLevel <span class="token operator">=</span> <span class="token number">2</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">else</span><span class="token punctuation">{</span>
				tableData<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>lastArr<span class="token punctuation">)</span>
				lastArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
				lastLevel <span class="token operator">=</span> <span class="token number">2</span>
				lastArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;^^&quot;</span><span class="token punctuation">)</span>
				lastArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;^^&quot;</span><span class="token punctuation">)</span>
				lastArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>contentArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	tableData<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>lastArr<span class="token punctuation">)</span>
	lastArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
	
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tableData<span class="token punctuation">)</span>
	dv<span class="token punctuation">.</span><span class="token function">table</span><span class="token punctuation">(</span>args<span class="token punctuation">,</span> tableData<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>  



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="溢出折叠" tabindex="-1"><a class="header-anchor" href="#溢出折叠"><span>溢出折叠</span></a></h2><p>像很多博客都有代码块的溢出折叠。AnyBlock也具备这种处理器，无论是代码块还是其他东西。 <strong>用笔记记录长代码块时非常有用</strong> （@todo 这里没匹配亮色模式，而且不一定和用户的的代码块背景相匹配）</p>`,11),n("div",{class:"ab-note drop-shadow"},[n("div",{class:"ab-deco-overfold",style:{"max-height":"460px"},"is-fold":"true"},[n("div",{class:"markdown-rendered ab-deco-overfold-content"},[n("div",null,[n("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),n("span",{class:"token operator"},"&"),s("nbsp"),n("span",{class:"token punctuation"},";"),s("keyword"),n("span",{class:"token operator"},"&"),s("nbsp"),n("span",{class:"token punctuation"},";"),n("span",{class:"token operator"},"="),n("span",{class:"token operator"},"&"),s("nbsp"),n("span",{class:"token punctuation"},";"),n("span",{class:"token string"},'"%"'),n("span",{class:"token operator"},"+"),n("span",{class:"token string"},'"toTable"'),s(),n("span",{class:"token comment"},"// 不能合并"),s(`
`),n("span",{class:"token keyword"},"const"),n("span",{class:"token operator"},"&"),s("nbsp"),n("span",{class:"token punctuation"},";"),s("files"),n("span",{class:"token operator"},"&"),s("nbsp"),n("span",{class:"token punctuation"},";"),n("span",{class:"token operator"},"="),n("span",{class:"token operator"},"&"),s("nbsp"),n("span",{class:"token punctuation"},";"),s("app"),n("span",{class:"token punctuation"},"."),s("vault"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getMarkdownFiles"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])])])]),n("div",{class:"ab-deco-overfold-button"},"展开")])],-1),a(`<p>const lines = files .filter((file) =&gt; { // 本篇笔记 return file.path == dv.current().file.path }) .map(async (file) =&gt; { // 转列表 const content = await app.vault.cachedRead(file)<br> const lines = content.split(&quot;\\n&quot;) return lines })</p><p>Promise.all(lines).then(linesTmp =&gt; { let lines = linesTmp.flat()</p><pre><code>// 先搜索关键词
let index = 0
for(let i=0; i&lt;lines.length; i++){
	if(lines[i].contains(keyword)){
		index = i
		break
	}
}

// 获取参数
const args = lines[index].replace(keyword, &quot;&quot;).replace(/^|/, &quot;&quot;).split(&quot;|&quot;)


// 先不考虑异常缩进了
let levelArr = []
let contentArr = []
for(let i=index+1; i&lt;lines.length; i++){
	if(/^\\s*?-\\s(.*?)/.test(lines[i])){
		contentArr.push(lines[i].replace(/^\\s*?-\\s/, &quot;&quot;))
		levelArr.push(lines[i].replace(/-\\s(.*?)$/, &quot;&quot;).length/2)
	}
	else{
		break
	}
}

// 再弄成正确的层次关系，暂时先只考虑三层
let tableData = []
let lastArr = []
let lastLevel = 0
for(let i=0; i&lt;levelArr.length; i++){
	if(levelArr[i]==0){
		if(lastArr.length!=0) {// 是否不为第一个数据
			tableData.push(lastArr)
			lastArr = []
		}
		lastLevel = 0
		lastArr.push(contentArr[i])
	}
	else if(levelArr[i]==1){
		if (lastLevel&lt;1){ // 是否新起一行
			lastArr.push(contentArr[i])
			lastLevel = 1
		}
		else{
			tableData.push(lastArr)
			lastArr = []
			lastLevel = 1
			lastArr.push(&quot;^^&quot;)
			lastArr.push(contentArr[i])
		}
	}
	else if(levelArr[i]==2){
		if (lastLevel&lt;2){ // 是否新起一行
			lastArr.push(contentArr[i])
			lastLevel = 2
		}
		else{
			tableData.push(lastArr)
			lastArr = []
			lastLevel = 2
			lastArr.push(&quot;^^&quot;)
			lastArr.push(&quot;^^&quot;)
			lastArr.push(contentArr[i])
		}
	}
}
tableData.push(lastArr)
lastArr = []

console.log(tableData)
dv.table(args, tableData)
</code></pre><p>})</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>

[list2table|overfold]
- &lt; 大类型| 解析方法 | 解析方法zh | 渲染方法 | 渲染方法zh | 可转md/html
- tree
	- ul-list| ul树
	  （一叉多层树）
		- 2ut/2mdut       | 转表格（规范） | md/html
	- li-list| li树
	  （一叉多层树）
		- 2lt/mdlt        | 转列表格 | html
	- ab-tree | 二层树
	  也叫 &quot;消除最高级&quot;
	  （一叉二层树）
		- 2timeline | 转时间线 | mermaid
		- 2tab         | 转标签栏 | html
		- 2chat       | 转对话
	- tree-list | 树列表
	  （多叉多层树）
		- 2table/2mdtable | 转树表格 | html
		- 2mermaid  | 转流程图   | mermaid/html
		- 2mindmap  | 转思维导图      | html
		- 2tree     | 长得像树的树状图 | html
		- 2xuri     | 旭日图         | html
		- 2brace    | 括弧分类图      | html
- other
	- title       | 标题级（语法糖）
		- 2list+list2xxx | (组合使用，下面提供了几种语法糖)
		- 2tab
		- 2table
		- 2mindmap
	- code      | 一定代码
		- 2doctable | 转表格（文档生成） | html
		- json | 这个不能转树，只能说转可折叠渲染
	- common    | 通用
		- text | 纯文本            | md
		- md   | md渲染            | md
	- render| 渲染
	  （理论上为 &quot;渲染修饰器&quot;
	  但该功能没做）
		- flod | (折叠类)可折叠     | md+
		- hide | (折叠类)默认折叠   | md+
		- heimu| (折叠类)黑幕遮挡   | html
		- limit()/part() | (折叠类)限高折叠 | html
		- scroll()| (折叠类)限高滚动 | html
		- title()| 增加块标题（代码块可能会很常用）
## 滚动

默认是超出460px滚动，该处理器也可以接受参数，\`scroll(超出多少变为滚动)\`，参数不需要加 \`px\`

[scroll]
\`\`\`js
const keyword = &quot;%&quot;+&quot;toTable&quot; // 不能合并
const files = app.vault.getMarkdownFiles()


const lines = files
	.filter((file) =&gt; {  // 本篇笔记
		return file.path == dv.current().file.path
	})
	.map(async (file) =&gt; {  // 转列表
		const content = await app.vault.cachedRead(file)  
		const lines = content.split(&quot;\\n&quot;)
		return lines
	})
	
Promise.all(lines).then(linesTmp =&gt; {
	let lines = linesTmp.flat()

	// 先搜索关键词
	let index = 0
	for(let i=0; i&lt;lines.length; i++){
		if(lines[i].contains(keyword)){
			index = i
			break
		}
	}
	
	// 获取参数
	const args = lines[index].replace(keyword, &quot;&quot;).replace(/^|/, &quot;&quot;).split(&quot;|&quot;)
	

	// 先不考虑异常缩进了
	let levelArr = []
	let contentArr = []
	for(let i=index+1; i&lt;lines.length; i++){
		if(/^\\s*?-\\s(.*?)/.test(lines[i])){
			contentArr.push(lines[i].replace(/^\\s*?-\\s/, &quot;&quot;))
			levelArr.push(lines[i].replace(/-\\s(.*?)$/, &quot;&quot;).length/2)
		}
		else{
			break
		}
	}

	// 再弄成正确的层次关系，暂时先只考虑三层
	let tableData = []
	let lastArr = []
	let lastLevel = 0
	for(let i=0; i&lt;levelArr.length; i++){
		if(levelArr[i]==0){
			if(lastArr.length!=0) {// 是否不为第一个数据
				tableData.push(lastArr)
				lastArr = []
			}
			lastLevel = 0
			lastArr.push(contentArr[i])
		}
		else if(levelArr[i]==1){
			if (lastLevel&lt;1){ // 是否新起一行
				lastArr.push(contentArr[i])
				lastLevel = 1
			}
			else{
				tableData.push(lastArr)
				lastArr = []
				lastLevel = 1
				lastArr.push(&quot;^^&quot;)
				lastArr.push(contentArr[i])
			}
		}
		else if(levelArr[i]==2){
			if (lastLevel&lt;2){ // 是否新起一行
				lastArr.push(contentArr[i])
				lastLevel = 2
			}
			else{
				tableData.push(lastArr)
				lastArr = []
				lastLevel = 2
				lastArr.push(&quot;^^&quot;)
				lastArr.push(&quot;^^&quot;)
				lastArr.push(contentArr[i])
			}
		}
	}
	tableData.push(lastArr)
	lastArr = []
	
	console.log(tableData)
	dv.table(args, tableData)
})  



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="黑幕" tabindex="-1"><a class="header-anchor" href="#黑幕"><span>黑幕</span></a></h2><p>和萌娘百科的黑幕效果类似 [X|addClass(ab-deco-heimu)]</p><blockquote><p>这是一段不能被直接看到的内容 ... ... （你看到了？你知道太多了！ [猫猫刀口舔血.jpg]）</p></blockquote><h2 id="增加class" tabindex="-1"><a class="header-anchor" href="#增加class"><span>增加class</span></a></h2><p><code>addClass</code> (将当前块增加一个类名)、<code>addDiv</code> (增加一个父元素，并给父元素增加一个类名) 这个可以用来让块增添一个自定义样式（像ad插件那样），可供会CSS的用户扩展</p><h1 id="自定义处理器" tabindex="-1"><a class="header-anchor" href="#自定义处理器"><span>自定义处理器</span></a></h1><p>推荐几个处理器配置就知道怎么用。 id和name都是随便填，下面给个演示</p>`,12),n("div",{class:"ab-note drop-shadow"},[n("table",{class:"ab-table ab-branch-table"},[n("tbody",null,[n("tr",null,[n("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[n("div",null,[n("p",null,"注册器匹配名（可以是中文名）")])]),n("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[n("div",null,[n("p",null,"注册器替换为")])])]),n("tr",null,[n("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[n("div",null,[n("p",null,"引用")])]),n("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[n("div",null,[n("pre",null,[n("code",null,`add([!quote])|quote
`)])])])]),n("tr",null,[n("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[n("div",null,[n("p",null,"折叠")])]),n("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[n("div",null,[n("pre",null,[n("code",null,`add([!note]-|qutoe)
`)])])])]),n("tr",null,[n("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[n("div",null,[n("p",null,[n("code",null,"/导图(.*?)/")])])]),n("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[n("div",null,[n("p",null,"rootlist(%1)|mindmap")])])])])])],-1),n("p",null,[s("其中，"),n("code",null,"%n"),s(" 表示将正则中的第n个匹配项替换到该位置 例如上面的导图例子中，"),n("code",null,"导图(主题名)"),s(" 就会变成 "),n("code",null,"rootlist(主题名)|mindmap")],-1),n("p",null,"功能比较简单，和用代码来增加处理器比起来功能不足。但通过组合注册器，依然能够做出不错的自定义效果",-1)]))}const r=e(p,[["render",o],["__file","4. 使用示例 - 更多处理器.html.vue"]]),d=JSON.parse('{"path":"/v2%20old%20docs/docs/zh/4.%20%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B%20-%20%E6%9B%B4%E5%A4%9A%E5%A4%84%E7%90%86%E5%99%A8.html","title":"更多处理器（装饰处理器）","lang":"zh-CN","frontmatter":{"description":"前三章介绍了各种选择器，主要介绍的是列表文本转树形结构的图形 更多处理器（装饰处理器） 块名 这个相当有用和高频，所以我给了个语法糖，用 # 开头就行 给块一个名字，并且可以自动识别修饰的块的类型。可以很轻易地： 给表格添加| 居中的表格标题 给代码添加| 文件名 表格标题 表格标题代码标题 按道理这里的文件名应该和代码块同色，不同色的话自己先在css...","head":[["meta",{"property":"og:url","content":"https://any-block.github.io/obsidian-any-block/v2%20old%20docs/docs/zh/4.%20%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B%20-%20%E6%9B%B4%E5%A4%9A%E5%A4%84%E7%90%86%E5%99%A8.html"}],["meta",{"property":"og:site_name","content":"obsidian-any-block"}],["meta",{"property":"og:title","content":"更多处理器（装饰处理器）"}],["meta",{"property":"og:description","content":"前三章介绍了各种选择器，主要介绍的是列表文本转树形结构的图形 更多处理器（装饰处理器） 块名 这个相当有用和高频，所以我给了个语法糖，用 # 开头就行 给块一个名字，并且可以自动识别修饰的块的类型。可以很轻易地： 给表格添加| 居中的表格标题 给代码添加| 文件名 表格标题 表格标题代码标题 按道理这里的文件名应该和代码块同色，不同色的话自己先在css..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"any-block"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"更多处理器（装饰处理器）\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"any-block\\",\\"url\\":\\"https://github.com/any-block/obsidian-any-block/\\"}]}"]]},"headers":[{"level":1,"title":"更多处理器（装饰处理器）","slug":"更多处理器-装饰处理器","link":"#更多处理器-装饰处理器","children":[{"level":2,"title":"块名","slug":"块名","link":"#块名","children":[{"level":4,"title":"表格标题","slug":"表格标题","link":"#表格标题","children":[]},{"level":4,"title":"代码标题","slug":"代码标题","link":"#代码标题","children":[]},{"level":4,"title":"其他标题","slug":"其他标题","link":"#其他标题","children":[]}]},{"level":2,"title":"折叠","slug":"折叠","link":"#折叠","children":[]},{"level":2,"title":"溢出折叠","slug":"溢出折叠","link":"#溢出折叠","children":[]},{"level":2,"title":"黑幕","slug":"黑幕","link":"#黑幕","children":[]},{"level":2,"title":"增加class","slug":"增加class","link":"#增加class","children":[]}]},{"level":1,"title":"自定义处理器","slug":"自定义处理器","link":"#自定义处理器","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":5.98,"words":1795},"filePathRelative":"v2 old docs/docs/zh/4. 使用示例 - 更多处理器.md","excerpt":"<p>前三章介绍了各种选择器，主要介绍的是列表文本转树形结构的图形</p>\\n<h1>更多处理器（装饰处理器）</h1>\\n<h2>块名</h2>\\n<p><strong>这个相当有用和高频</strong>，所以我给了个语法糖，用 <code>#</code> 开头就行\\n给块一个名字，并且可以自动识别修饰的块的类型。可以很轻易地：</p>\\n<ul>\\n<li>给表格添加| 居中的表格标题</li>\\n<li>给代码添加| 文件名</li>\\n</ul>\\n<h4>表格标题</h4>\\n<div class=\\"ab-note drop-shadow\\"><div class=\\"ab-deco-title\\"><div class=\\"ab-deco-title-title\\" title-type=\\"table\\"><p>表格标题</p></div><div class=\\"ab-deco-title-content\\"><table class=\\"ab-table ab-branch-table\\"><tbody><tr><td rowspan=\\"1\\" col_index=\\"0\\" class=\\"markdown-rendered\\"><div><p>1</p>\\n</div></td><td rowspan=\\"1\\" col_index=\\"1\\" class=\\"markdown-rendered\\"><div><p>2</p>\\n</div></td></tr><tr><td rowspan=\\"1\\" col_index=\\"0\\" class=\\"markdown-rendered\\"><div><p>3</p>\\n</div></td><td rowspan=\\"1\\" col_index=\\"1\\" class=\\"markdown-rendered\\"><div><p>4</p>\\n</div></td></tr></tbody></table></div></div></div>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"v2 old docs/docs/zh/4. 使用示例 - 更多处理器.md","value":{"title":"4. 使用示例 - 更多处理器","path":"v2 old docs/docs/zh/4. 使用示例 - 更多处理器.md","outlink":[],"backlink":[]}}],"links":[]}}}');export{r as comp,d as data};
