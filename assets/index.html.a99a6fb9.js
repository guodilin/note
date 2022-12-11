import{_ as n,o as s,c as a,e}from"./app.ca1881d0.js";const p={},t=e(`<h1 id="序言" tabindex="-1"><a class="header-anchor" href="#序言" aria-hidden="true">#</a> 序言</h1><p>django框架 202208</p><p>第二版</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>views <span class="token keyword">import</span> APIView
<span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> serializers
<span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>response <span class="token keyword">import</span> Response
<span class="token keyword">from</span> api<span class="token punctuation">.</span>models <span class="token keyword">import</span> User

<span class="token comment"># 创建序列化器</span>
<span class="token keyword">class</span> <span class="token class-name">UserSerializer</span><span class="token punctuation">(</span>serializers<span class="token punctuation">.</span>Serializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 需要做的序列化</span>
    username <span class="token operator">=</span> serializers<span class="token punctuation">.</span>CharField<span class="token punctuation">(</span>source<span class="token operator">=</span><span class="token string">&#39;UserName&#39;</span><span class="token punctuation">)</span>
    pwd <span class="token operator">=</span> serializers<span class="token punctuation">.</span>CharField<span class="token punctuation">(</span>source<span class="token operator">=</span><span class="token string">&#39;Password&#39;</span><span class="token punctuation">)</span>
    mobile <span class="token operator">=</span> serializers<span class="token punctuation">.</span>CharField<span class="token punctuation">(</span>source<span class="token operator">=</span><span class="token string">&#39;Mobile&#39;</span><span class="token punctuation">)</span>
    email <span class="token operator">=</span> serializers<span class="token punctuation">.</span>EmailField<span class="token punctuation">(</span>source<span class="token operator">=</span><span class="token string">&#39;Email&#39;</span><span class="token punctuation">)</span>
    age <span class="token operator">=</span> serializers<span class="token punctuation">.</span>IntegerField<span class="token punctuation">(</span>source<span class="token operator">=</span><span class="token string">&#39;Age&#39;</span><span class="token punctuation">)</span>
    RegisterDate <span class="token operator">=</span> serializers<span class="token punctuation">.</span>DateTimeField<span class="token punctuation">(</span>read_only<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    <span class="token comment"># data = serializers.DateTimeField()</span>
    LoginDate <span class="token operator">=</span> serializers<span class="token punctuation">.</span>DateTimeField<span class="token punctuation">(</span>read_only<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">UserView</span><span class="token punctuation">(</span>APIView<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 请求所有数据</span>
    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">:</span>
        userall <span class="token operator">=</span> User<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment"># 序列化instance</span>
        <span class="token comment"># 反序列化是data</span>
        <span class="token comment"># many  True多条False单条</span>
        serializer <span class="token operator">=</span> UserSerializer<span class="token punctuation">(</span>instance<span class="token operator">=</span>userall<span class="token punctuation">,</span> many<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>  
        <span class="token comment"># 返回数据</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span>serializer<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
    <span class="token comment"># 添加数据</span>
    <span class="token keyword">def</span> <span class="token function">post</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 反序列化data </span>
        <span class="token comment"># request.data,前端发送的数据</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
        serializer <span class="token operator">=</span> UserSerializer<span class="token punctuation">(</span>data<span class="token operator">=</span>request<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
        <span class="token comment"># 其他方式</span>
        <span class="token comment"># if serializer.is_valid():</span>
        <span class="token comment">#     serializer.save()</span>
        <span class="token comment">#     return Response(serializer.data)</span>
        <span class="token comment"># else:</span>
        <span class="token comment">#     return Response(serializer.errors)</span>
        <span class="token keyword">try</span><span class="token punctuation">:</span>
            serializer<span class="token punctuation">.</span>is_valid<span class="token punctuation">(</span>raise_exception<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
            <span class="token comment"># serializer.validated_data  效验成功的数据</span>
            <span class="token comment"># 插入</span>
            stu <span class="token operator">=</span> User<span class="token punctuation">.</span>objects<span class="token punctuation">.</span>create<span class="token punctuation">(</span><span class="token operator">**</span>serializer<span class="token punctuation">.</span>validated_data<span class="token punctuation">)</span>
            ser <span class="token operator">=</span> UserSerializer<span class="token punctuation">(</span>instance<span class="token operator">=</span>stu<span class="token punctuation">,</span> many<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> Response<span class="token punctuation">(</span>ser<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
        <span class="token keyword">except</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> Response<span class="token punctuation">(</span>serializer<span class="token punctuation">.</span>errors<span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">UserDetailView</span><span class="token punctuation">(</span>APIView<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 查询单个</span>
    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>reqeust<span class="token punctuation">,</span>pk<span class="token punctuation">)</span><span class="token punctuation">:</span>
        student <span class="token operator">=</span> User<span class="token punctuation">.</span>objects<span class="token punctuation">.</span>get<span class="token punctuation">(</span>pk<span class="token operator">=</span>pk<span class="token punctuation">)</span>
        serializer <span class="token operator">=</span> UserSerializer<span class="token punctuation">(</span>instance<span class="token operator">=</span>student<span class="token punctuation">,</span> many<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span>serializer<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
    <span class="token comment"># 删除数据</span>
    <span class="token keyword">def</span> <span class="token function">delete</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>request<span class="token punctuation">,</span>pk<span class="token punctuation">)</span><span class="token punctuation">:</span>
        User<span class="token punctuation">.</span>objects<span class="token punctuation">.</span>get<span class="token punctuation">(</span>pk<span class="token operator">=</span>pk<span class="token punctuation">)</span><span class="token punctuation">.</span>delete<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span><span class="token string">&#39;删除成功&#39;</span><span class="token punctuation">)</span>
    <span class="token comment"># 修改数据</span>
    <span class="token keyword">def</span> <span class="token function">put</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>request<span class="token punctuation">,</span>pk<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
        serializer <span class="token operator">=</span> UserSerializer<span class="token punctuation">(</span>data<span class="token operator">=</span>request<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
        <span class="token keyword">try</span><span class="token punctuation">:</span>
            serializer<span class="token punctuation">.</span>is_valid<span class="token punctuation">(</span>raise_exception<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
            <span class="token comment"># 插入</span>
            User<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span>pk<span class="token operator">=</span>pk<span class="token punctuation">)</span><span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token operator">**</span>serializer<span class="token punctuation">.</span>validated_data<span class="token punctuation">)</span>
            stu <span class="token operator">=</span> User<span class="token punctuation">.</span>objects<span class="token punctuation">.</span>get<span class="token punctuation">(</span>pk<span class="token operator">=</span>pk<span class="token punctuation">)</span>
            ser <span class="token operator">=</span> UserSerializer<span class="token punctuation">(</span>instance<span class="token operator">=</span>stu<span class="token punctuation">,</span> many<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> Response<span class="token punctuation">(</span>ser<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
        <span class="token keyword">except</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> Response<span class="token punctuation">(</span>serializer<span class="token punctuation">.</span>errors<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三版</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> dataclasses <span class="token keyword">import</span> fields
<span class="token keyword">from</span> pyexpat <span class="token keyword">import</span> model
<span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>views <span class="token keyword">import</span> APIView
<span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> serializers
<span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>response <span class="token keyword">import</span> Response
<span class="token keyword">from</span> api<span class="token punctuation">.</span>models <span class="token keyword">import</span> User

<span class="token keyword">class</span> <span class="token class-name">UserSerializer</span><span class="token punctuation">(</span>serializers<span class="token punctuation">.</span>ModelSerializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>
        model <span class="token operator">=</span> User
        <span class="token comment"># fields  exclude   二选一</span>
        <span class="token comment"># fields = &quot;__all__&quot;    # 所有字段</span>
        <span class="token comment"># fields = [&quot;name&quot;,&#39;paw&#39;]   # 单独字段</span>
        exclude <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span><span class="token punctuation">)</span> <span class="token comment"># 排除字段</span>

<span class="token keyword">class</span> <span class="token class-name">UserView</span><span class="token punctuation">(</span>APIView<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 请求所有数据</span>
    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">:</span>
        userall <span class="token operator">=</span> User<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        serializer <span class="token operator">=</span> UserSerializer<span class="token punctuation">(</span>instance<span class="token operator">=</span>userall<span class="token punctuation">,</span> many<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>    <span class="token comment"># 序列化instance</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span>serializer<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
    <span class="token comment"># 添加数据</span>
    <span class="token keyword">def</span> <span class="token function">post</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">:</span>
        data <span class="token operator">=</span> UserSerializer<span class="token punctuation">(</span>data<span class="token operator">=</span>request<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
        <span class="token keyword">if</span> data<span class="token punctuation">.</span>is_valid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            data<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment"># 条件符合，插入数据</span>
            <span class="token keyword">return</span> Response<span class="token punctuation">(</span>data<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> Response<span class="token punctuation">(</span>data<span class="token punctuation">.</span>errors<span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">UserDetailView</span><span class="token punctuation">(</span>APIView<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 查询单个</span>
    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>reqeust<span class="token punctuation">,</span>pk<span class="token punctuation">)</span><span class="token punctuation">:</span>
        student <span class="token operator">=</span> User<span class="token punctuation">.</span>objects<span class="token punctuation">.</span>get<span class="token punctuation">(</span>pk<span class="token operator">=</span>pk<span class="token punctuation">)</span>
        ps <span class="token operator">=</span> UserSerializer<span class="token punctuation">(</span>instance<span class="token operator">=</span>student<span class="token punctuation">,</span> many<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span>ps<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
    <span class="token comment"># 删除数据</span>
    <span class="token keyword">def</span> <span class="token function">delete</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>request<span class="token punctuation">,</span>pk<span class="token punctuation">)</span><span class="token punctuation">:</span>
        User<span class="token punctuation">.</span>objects<span class="token punctuation">.</span>get<span class="token punctuation">(</span>pk<span class="token operator">=</span>pk<span class="token punctuation">)</span><span class="token punctuation">.</span>delete<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span><span class="token string">&#39;删除成功&#39;</span><span class="token punctuation">)</span>
    <span class="token comment"># 修改数据</span>
    <span class="token keyword">def</span> <span class="token function">put</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>request<span class="token punctuation">,</span>pk<span class="token punctuation">)</span><span class="token punctuation">:</span>
        serializer <span class="token operator">=</span> UserSerializer<span class="token punctuation">(</span>data<span class="token operator">=</span>request<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
        <span class="token keyword">try</span><span class="token punctuation">:</span>
            serializer<span class="token punctuation">.</span>is_valid<span class="token punctuation">(</span>raise_exception<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
            <span class="token comment"># 插入</span>
            User<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span>pk<span class="token operator">=</span>pk<span class="token punctuation">)</span><span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token operator">**</span>serializer<span class="token punctuation">.</span>validated_data<span class="token punctuation">)</span>
            stu <span class="token operator">=</span> User<span class="token punctuation">.</span>objects<span class="token punctuation">.</span>get<span class="token punctuation">(</span>pk<span class="token operator">=</span>pk<span class="token punctuation">)</span>
            ser <span class="token operator">=</span> UserSerializer<span class="token punctuation">(</span>instance<span class="token operator">=</span>stu<span class="token punctuation">,</span> many<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> Response<span class="token punctuation">(</span>ser<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
        <span class="token keyword">except</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> Response<span class="token punctuation">(</span>serializer<span class="token punctuation">.</span>errors<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第四版</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>generics <span class="token keyword">import</span> GenericAPIView
<span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>mixins <span class="token keyword">import</span> ListModelMixin<span class="token punctuation">,</span>CreateModelMixin<span class="token punctuation">,</span>RetrieveModelMixin<span class="token punctuation">,</span>UpdateModelMixin<span class="token punctuation">,</span>DestroyModelMixin
<span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> serializers
<span class="token keyword">from</span> api<span class="token punctuation">.</span>models <span class="token keyword">import</span> User

<span class="token keyword">class</span> <span class="token class-name">UserSerializer</span><span class="token punctuation">(</span>serializers<span class="token punctuation">.</span>ModelSerializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>
        model <span class="token operator">=</span> User
        <span class="token comment"># fields  exclude   二选一</span>
        <span class="token comment"># fields = &quot;__all__&quot;    # 所有字段</span>
        <span class="token comment"># fields = [&quot;name&quot;,&#39;paw&#39;]   # 单独字段</span>
        exclude <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span><span class="token punctuation">)</span> <span class="token comment"># 排除字段</span>

<span class="token keyword">class</span> <span class="token class-name">UserView</span><span class="token punctuation">(</span>GenericAPIView<span class="token punctuation">,</span>ListModelMixin<span class="token punctuation">,</span>CreateModelMixin<span class="token punctuation">)</span><span class="token punctuation">:</span>
    queryset <span class="token operator">=</span> User<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    serializer_class <span class="token operator">=</span> UserSerializer
    <span class="token comment"># 请求所有数据</span>
    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span><span class="token builtin">list</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span>
    <span class="token comment"># 添加数据</span>
    <span class="token keyword">def</span> <span class="token function">post</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>create<span class="token punctuation">(</span>request<span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">UserDetailView</span><span class="token punctuation">(</span>GenericAPIView<span class="token punctuation">,</span>RetrieveModelMixin<span class="token punctuation">,</span>UpdateModelMixin<span class="token punctuation">,</span>DestroyModelMixin<span class="token punctuation">)</span><span class="token punctuation">:</span>
    queryset <span class="token operator">=</span> User<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    serializer_class <span class="token operator">=</span> UserSerializer
    <span class="token comment"># 查询单个</span>
    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>reqeust<span class="token punctuation">,</span>pk<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>retrieve<span class="token punctuation">(</span>reqeust<span class="token punctuation">)</span>
    <span class="token comment"># 删除数据</span>
    <span class="token keyword">def</span> <span class="token function">delete</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>request<span class="token punctuation">,</span>pk<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>destroy<span class="token punctuation">(</span>request<span class="token punctuation">)</span>
    <span class="token comment"># 修改数据</span>
    <span class="token keyword">def</span> <span class="token function">put</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>request<span class="token punctuation">,</span>pk<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>update<span class="token punctuation">(</span>request<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第五版</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>generics <span class="token keyword">import</span> ListCreateAPIView<span class="token punctuation">,</span>RetrieveUpdateDestroyAPIView
<span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> serializers
<span class="token keyword">from</span> api<span class="token punctuation">.</span>models <span class="token keyword">import</span> User

<span class="token keyword">class</span> <span class="token class-name">UserSerializer</span><span class="token punctuation">(</span>serializers<span class="token punctuation">.</span>ModelSerializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>
        model <span class="token operator">=</span> User
        <span class="token comment"># fields  exclude   二选一</span>
        <span class="token comment"># fields = &quot;__all__&quot;    # 所有字段</span>
        <span class="token comment"># fields = [&quot;name&quot;,&#39;paw&#39;]   # 单独字段</span>
        exclude <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span><span class="token punctuation">)</span> <span class="token comment"># 排除字段</span>

<span class="token keyword">class</span> <span class="token class-name">UserView</span><span class="token punctuation">(</span>ListCreateAPIView<span class="token punctuation">)</span><span class="token punctuation">:</span>
    queryset <span class="token operator">=</span> User<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    serializer_class <span class="token operator">=</span> UserSerializer
<span class="token keyword">class</span> <span class="token class-name">UserDetailView</span><span class="token punctuation">(</span>RetrieveUpdateDestroyAPIView<span class="token punctuation">)</span><span class="token punctuation">:</span>
    queryset <span class="token operator">=</span> User<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    serializer_class <span class="token operator">=</span> UserSerializer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=[t];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","index.html.vue"]]);export{r as default};
