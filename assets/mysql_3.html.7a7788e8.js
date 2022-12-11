import{_ as n,o as s,c as a,e as t}from"./app.ca1881d0.js";const e={},l=t(`<h1 id="四-数据库类型" tabindex="-1"><a class="header-anchor" href="#四-数据库类型" aria-hidden="true">#</a> 四. 数据库类型</h1><h5 id="_1-整数类型" tabindex="-1"><a class="header-anchor" href="#_1-整数类型" aria-hidden="true">#</a> 1. 整数类型</h5><table><thead><tr><th style="text-align:left;">参数名称</th><th style="text-align:left;">说明</th><th style="text-align:left;">有符号</th><th style="text-align:left;">无符号</th></tr></thead><tbody><tr><td style="text-align:left;">TINYINT</td><td style="text-align:left;">1</td><td style="text-align:left;">(-128,127)</td><td style="text-align:left;">(0,255)</td></tr><tr><td style="text-align:left;">SMALLINT</td><td style="text-align:left;">2</td><td style="text-align:left;">(-32768,32767)</td><td style="text-align:left;">(0,65 535)</td></tr><tr><td style="text-align:left;">MEDIUMINT</td><td style="text-align:left;">3</td><td style="text-align:left;">(-8 388 608,8 388 607)</td><td style="text-align:left;">(0,16 777 215)</td></tr><tr><td style="text-align:left;">INT或INTEGER</td><td style="text-align:left;">4</td><td style="text-align:left;">(-2 147 483 648,2 147 483 647)</td><td style="text-align:left;">(0,4 294 967 295)</td></tr><tr><td style="text-align:left;">BIGINT</td><td style="text-align:left;">8</td><td style="text-align:left;">(-9 223 372 036 854 775 808,9 223 372 036 854 775 807)</td><td style="text-align:left;">(0,18 446 744 073 709 551 615)</td></tr></tbody></table><h6 id="_1-数据类型有符号和无符号" tabindex="-1"><a class="header-anchor" href="#_1-数据类型有符号和无符号" aria-hidden="true">#</a> 1.数据类型有符号和无符号</h6><ul><li>有符号和无符号 <ul><li>默认情况下整型就是有符号的</li><li>需要在数据类型后面增加 <code>unsigned</code> 来将数据类型改为无符号</li></ul></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 实例</span>
<span class="token keyword">CREATE</span> <span class="token keyword">table</span> person<span class="token punctuation">(</span>
    id <span class="token keyword">int</span><span class="token punctuation">,</span>
    age <span class="token keyword">TINYINT</span> <span class="token keyword">unsigned</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>位宽 <ul><li>如果默认没有指定位宽，那么会自动补空格</li><li>如果需要补位宽需要在类型后面增加 <code>zerofill</code> （0填充）</li></ul></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 实例</span>
<span class="token keyword">CREATE</span> <span class="token keyword">table</span> person<span class="token punctuation">(</span>
    id <span class="token keyword">int</span><span class="token punctuation">,</span>
    age <span class="token keyword">TINYINT</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> zerofill <span class="token comment">#zerofill 用0补充位宽</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_2-浮点类型" tabindex="-1"><a class="header-anchor" href="#_2-浮点类型" aria-hidden="true">#</a> 2.浮点类型</h6><blockquote><p>专门用来保存小数点的</p></blockquote><table><thead><tr><th style="text-align:left;">类型</th><th style="text-align:left;">参数</th><th style="text-align:center;">字节</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">float</td><td style="text-align:left;">(m,d)</td><td style="text-align:center;">4</td><td style="text-align:left;">单精度</td></tr><tr><td style="text-align:left;">double</td><td style="text-align:left;">(m,d)</td><td style="text-align:center;">8</td><td style="text-align:left;">单精度</td></tr></tbody></table><blockquote><p>m总位数,d小数位数</p></blockquote><ul><li><code>float</code>和<code>double</code>的区别 <ul><li>占用存储空间大小不一样</li><li>默认保留的小数位数不同</li><li>保存数据的有效精度不同</li></ul></li><li>浮点类型特点 <ul><li>浮点型是不准确的</li><li>开发中千万不要使用浮点数来保存用户准确的信息,财务相关</li></ul></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> person<span class="token punctuation">(</span>
  id <span class="token keyword">INT</span><span class="token punctuation">,</span>
  weight <span class="token keyword">FLOAT</span><span class="token punctuation">,</span>
  height <span class="token keyword">DOUBLE</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> person <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1.1234567890123456789</span><span class="token punctuation">,</span><span class="token number">1.1234567890123456789</span><span class="token punctuation">)</span>
<span class="token comment">-- weight: 1.12346</span>
<span class="token comment">-- height: 1.1234567890123457</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> person1<span class="token punctuation">(</span>
  id <span class="token keyword">INT</span><span class="token punctuation">,</span>
  weight <span class="token keyword">FLOAT</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">--总10位，6位小数位</span>
  height <span class="token keyword">DOUBLE</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span> <span class="token comment">--总10位，6位小数位</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> person1 <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1.1234567890123456789</span><span class="token punctuation">,</span><span class="token number">1.1234567890123456789</span><span class="token punctuation">)</span>
<span class="token comment">-- weight: 1.123457</span>
<span class="token comment">-- height: 1.123457</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> person2<span class="token punctuation">(</span>
  id <span class="token keyword">INT</span><span class="token punctuation">,</span>
  weight <span class="token keyword">FLOAT</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">19</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">--总20位，19位小数位</span>
  height <span class="token keyword">DOUBLE</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">19</span><span class="token punctuation">)</span> <span class="token comment">--总20位，19位小数位</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> person2 <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1.1234567890123456789</span><span class="token punctuation">,</span><span class="token number">1.1234567890123456789</span><span class="token punctuation">)</span>
<span class="token comment">-- weight: 1.1234568357467651000</span>
<span class="token comment">-- height: 1.1234567890123457000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_3-定点类型" tabindex="-1"><a class="header-anchor" href="#_3-定点类型" aria-hidden="true">#</a> 3.定点类型</h6><table><thead><tr><th style="text-align:left;">类型</th><th style="text-align:right;">参数</th><th style="text-align:right;">字节</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">DECIMAL</td><td style="text-align:right;">(m,d)</td><td style="text-align:right;">4</td><td style="text-align:left;">小数值</td></tr></tbody></table><ul><li>m是表示有效数字的数的精度，范围是1-65</li><li>d是表示小数点的位数，范围是0-30。要求m小于或等于d</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>  content <span class="token keyword">DECIMAL</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span>
  <span class="token comment">-- 相当于</span>
  content <span class="token keyword">DECIMAL</span><span class="token punctuation">(</span>m<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token comment">-- m的默认值为10</span>
  content <span class="token keyword">DECIMAL</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>示例:</p></blockquote><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> person<span class="token punctuation">(</span>
  id <span class="token keyword">INT</span><span class="token punctuation">,</span>
  weight <span class="token keyword">DOUBLE</span><span class="token punctuation">,</span>
  height <span class="token keyword">DECIMAL</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> person <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1.1234567890123456789</span><span class="token punctuation">,</span><span class="token number">1.1234567890123456789</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- weight: 1.1234567890123457</span>
<span class="token comment">-- height: 1</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> person1<span class="token punctuation">(</span>
  id <span class="token keyword">INT</span><span class="token punctuation">,</span>
  weight <span class="token keyword">DOUBLE</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  height <span class="token keyword">DECIMAL</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> person1 <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1.1234567890123456789</span><span class="token punctuation">,</span><span class="token number">1.1234567890123456789</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- weight: 1.123457</span>
<span class="token comment">-- height: 1.123457</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> person2<span class="token punctuation">(</span>
  id <span class="token keyword">INT</span><span class="token punctuation">,</span>
  weight <span class="token keyword">DOUBLE</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">19</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  height <span class="token keyword">DECIMAL</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">19</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> person2 <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1.1234567890123456789</span><span class="token punctuation">,</span><span class="token number">1.1234567890123456789</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- weight: 1.1234567890123457000</span>
<span class="token comment">-- height: 1.1234567890123456789</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> person3<span class="token punctuation">(</span>
  id <span class="token keyword">INT</span><span class="token punctuation">,</span>
  weight <span class="token keyword">DOUBLE</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token number">22</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  height <span class="token keyword">DECIMAL</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token number">22</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> person3 <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1.1234567890123456789</span><span class="token punctuation">,</span><span class="token number">1.1234567890123456789</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- weight: 1.1234567890123457000000</span>
<span class="token comment">-- height: 1.1234567890123456789000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-字符类型" tabindex="-1"><a class="header-anchor" href="#_2-字符类型" aria-hidden="true">#</a> 2. 字符类型</h5><blockquote><p>专门用来存储字符的</p></blockquote><table><thead><tr><th style="text-align:left;">类型</th><th style="text-align:right;">参数</th><th style="text-align:right;">字节</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">char</td><td style="text-align:right;">(0-255)</td><td style="text-align:right;">0-255</td><td style="text-align:left;">定长字符串</td></tr><tr><td style="text-align:left;">varchar</td><td style="text-align:right;">(0-65535)</td><td style="text-align:right;">0-65535</td><td style="text-align:left;">变长字符串</td></tr></tbody></table><ul><li>char和varchar区别 <ul><li>能够保存的数据容量不一样</li><li>char不会回收多余的字符，要多少给多少</li><li>varchar会回收多余的字符，用多少给多少 <ul><li>通过 char(2) 存储数据&#39;a&#39;,存储结果是 &#39; a&#39;</li><li>通过 varchar(2) 存储数据&#39;a&#39;,存储结果是 &#39;a&#39;</li></ul></li></ul></li><li>由于是字符类型，所以传递值建议用单引号&#39;&#39;</li><li>varchar理论上可以存储65535个字节，但是实际会随着当前的数据库字符集有关</li></ul><h5 id="_3-文本类型" tabindex="-1"><a class="header-anchor" href="#_3-文本类型" aria-hidden="true">#</a> 3. 文本类型</h5><table><thead><tr><th style="text-align:left;">类型</th><th style="text-align:center;">参数</th><th style="text-align:right;">字节</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">TINYTEXT</td><td style="text-align:center;">(0-255)</td><td style="text-align:right;">0-255</td><td style="text-align:left;">短文本字符串</td></tr><tr><td style="text-align:left;">TEXT</td><td style="text-align:center;">(0-65535)</td><td style="text-align:right;">0-65535</td><td style="text-align:left;">长文本数据</td></tr><tr><td style="text-align:left;">MEDIUMTEXT</td><td style="text-align:center;">(0-16777215)</td><td style="text-align:right;">0-16777215</td><td style="text-align:left;">中等长度文本数据</td></tr><tr><td style="text-align:left;">LONGTEXT</td><td style="text-align:center;">(0-4294967295)</td><td style="text-align:right;">0-4294967295</td><td style="text-align:left;">极大文本数据</td></tr></tbody></table><h5 id="_4-枚举类型" tabindex="-1"><a class="header-anchor" href="#_4-枚举类型" aria-hidden="true">#</a> 4. 枚举类型</h5><blockquote><p>如果某个字段的取值只能是固定的几个值那么就可以使用枚举，这有点像 HTML 中的单选框</p></blockquote><p><strong>参考:</strong></p><ul><li>格式：<code>enum(values1,values2)</code></li><li>示例：</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> person<span class="token punctuation">(</span>
  id <span class="token keyword">INT</span><span class="token punctuation">,</span>
  gender <span class="token keyword">ENUM</span><span class="token punctuation">(</span><span class="token string">&#39;男&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;女&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;未知&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- 只能插入固定中的值</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> person <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&#39;男&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- 会报错</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> person <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><ul><li>MYSQL中的枚举类型是通过整型来实现的</li><li>和其他编程语言不同的是，其他编程枚举是从0开始的，而MySQL是从1开始的</li></ul></div><h5 id="_5-集合类型" tabindex="-1"><a class="header-anchor" href="#_5-集合类型" aria-hidden="true">#</a> 5. 集合类型</h5><blockquote><p>如果某个字段的取值只能是几个固定值中的几个，那么就可以使用集合型，这有点像 HTML 中的 复选框</p></blockquote><p><strong>参考:</strong></p><ul><li>格式：<code>set(values1,values2,...)</code></li><li>示例：</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> person<span class="token punctuation">(</span>
  id <span class="token keyword">INT</span><span class="token punctuation">,</span>
  hobby <span class="token keyword">SET</span><span class="token punctuation">(</span><span class="token string">&#39;篮球&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;足球&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;乒乓球&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;球&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- 只能插入固定中的值</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> person <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&#39;篮球,足球&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- 会报错</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> person <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&#39;橄榄球,羽毛球,足球&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><ul><li>MYSQL中的集合类型也是通过整型来实现的</li><li>MySQL的集合类型是按照2(n)的方式来实现的</li></ul></div><h5 id="_6-布尔类型" tabindex="-1"><a class="header-anchor" href="#_6-布尔类型" aria-hidden="true">#</a> 6.布尔类型</h5><blockquote><p>专门用来保存真假的</p></blockquote><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> person<span class="token punctuation">(</span>
  id <span class="token keyword">INT</span><span class="token punctuation">,</span>
  flag <span class="token keyword">BOOLEAN</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- 只能插入固定中的值</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> person <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token boolean">TRUE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> person <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token boolean">FALSE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- 非零即是真，不会报错</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> person <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- 会报错</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> person <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&#39;字符&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><ul><li>MYSQL中的布尔类型也是使用整形来实现的，0表示假，1表示真 <ul><li>底层的本质是因为MySQL是使用c/c++来实现的，所以就是非零即真</li></ul></li></ul></div><h5 id="_7-日期类型" tabindex="-1"><a class="header-anchor" href="#_7-日期类型" aria-hidden="true">#</a> 7.日期类型</h5><blockquote><p>专门用来保存时间的</p></blockquote><table><thead><tr><th style="text-align:left;">类型</th><th style="text-align:center;">字节</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">DATE</td><td style="text-align:center;">3</td><td style="text-align:left;">日期值</td></tr><tr><td style="text-align:left;">TIME</td><td style="text-align:center;">3</td><td style="text-align:left;">时间值或持续时间</td></tr><tr><td style="text-align:left;">DATETIME</td><td style="text-align:center;">8</td><td style="text-align:left;">混合日期和时间值</td></tr></tbody></table><p><strong>示例:</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> person<span class="token punctuation">(</span>
  id <span class="token keyword">INT</span><span class="token punctuation">,</span>
  filed1 <span class="token keyword">DATE</span><span class="token punctuation">,</span>
  filed2 <span class="token keyword">TIME</span><span class="token punctuation">,</span>
  filed3 <span class="token keyword">DATETIME</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> person <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&#39;2022-04-21&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;11:30:00&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;2022-04-21 11:30:00&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><ul><li>在存储时间的时候，需要用单引号将时间括起来</li></ul></div>`,48),p=[l];function o(i,c){return s(),a("div",null,p)}const u=n(e,[["render",o],["__file","mysql_3.html.vue"]]);export{u as default};
