import{_ as s,W as n,X as a,Y as p}from"./framework-6447176f.js";const e="/assets/drools01-a6c44a72.png",t="/assets/drools02-b6203e36.png",o="/assets/drools03-3fa7859f.png",c={},l=p(`<h1 id="docker部署drools" tabindex="-1"><a class="header-anchor" href="#docker部署drools" aria-hidden="true">#</a> docker部署Drools</h1><h2 id="获取镜像" tabindex="-1"><a class="header-anchor" href="#获取镜像" aria-hidden="true">#</a> 获取镜像:</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>docker pull jboss<span class="token operator">/</span>business<span class="token operator">-</span>central<span class="token operator">-</span>workbench<span class="token operator">-</span>showcase
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="获取kie-server镜像" tabindex="-1"><a class="header-anchor" href="#获取kie-server镜像" aria-hidden="true">#</a> 获取KIE-server镜像</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>docker pull jboss<span class="token operator">/</span>kie<span class="token operator">-</span>server<span class="token operator">-</span>showcase
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建目录-调整权限" tabindex="-1"><a class="header-anchor" href="#创建目录-调整权限" aria-hidden="true">#</a> 创建目录，调整权限:</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>mkdir <span class="token operator">-</span>p <span class="token operator">/</span>tmp<span class="token operator">/</span>business_central<span class="token operator">/</span>git
chmod <span class="token operator">-</span><span class="token class-name">R</span> <span class="token number">777</span> <span class="token operator">/</span>tmp<span class="token operator">/</span>business_central<span class="token operator">/</span>git<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在控制台运行如下命令，以持久化方式启动业务中心容器。该命令会将之前在宿主机上创建的目录挂载到业务中心容器实例内部的/opt/jboss/wildfly/bin/.niogit目录</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> docker run <span class="token operator">-</span>p <span class="token number">8080</span><span class="token operator">:</span><span class="token number">8080</span> <span class="token operator">-</span>p <span class="token number">8001</span><span class="token operator">:</span><span class="token number">8001</span> <span class="token operator">-</span>v <span class="token operator">/</span>tmp<span class="token operator">/</span>business_central<span class="token operator">/</span>git<span class="token operator">:</span><span class="token operator">/</span>opt<span class="token operator">/</span>jboss<span class="token operator">/</span>wildfiy<span class="token operator">/</span>bin<span class="token operator">/</span><span class="token punctuation">.</span>niogit<span class="token operator">:</span><span class="token class-name">Z</span> <span class="token operator">-</span>d <span class="token operator">--</span>name business<span class="token operator">-</span>central jboss<span class="token operator">/</span>business<span class="token operator">-</span>central<span class="token operator">-</span>workbench<span class="token operator">-</span>showcase
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>控制台输出的容器实例ID如下:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token number">8739919e9</span>c052e6cb5c7f9965ed2d27a854ee104cfc3db7966e82e4dc43684bf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="获取容器实例信息" tabindex="-1"><a class="header-anchor" href="#获取容器实例信息" aria-hidden="true">#</a> 获取容器实例信息</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>docker ps <span class="token operator">|</span> grep business<span class="token operator">-</span>central
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>控制台输出的容器实例信息如下:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token number">8739919e9</span>c05   jboss<span class="token operator">/</span>business<span class="token operator">-</span>central<span class="token operator">-</span>workbench<span class="token operator">-</span>showcase   <span class="token string">&quot;./start_business-ce…&quot;</span>   <span class="token number">23</span> seconds ago   <span class="token class-name">Up</span> <span class="token number">22</span> seconds   <span class="token number">0.0</span><span class="token number">.0</span><span class="token number">.0</span><span class="token operator">:</span><span class="token number">8001</span><span class="token operator">-&gt;</span><span class="token number">8001</span><span class="token operator">/</span>tcp<span class="token punctuation">,</span> <span class="token operator">::</span><span class="token operator">:</span><span class="token number">8001</span><span class="token operator">-&gt;</span><span class="token number">8001</span><span class="token operator">/</span>tcp<span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token number">.0</span><span class="token number">.0</span><span class="token operator">:</span><span class="token number">8080</span><span class="token operator">-&gt;</span><span class="token number">8080</span><span class="token operator">/</span>tcp<span class="token punctuation">,</span> <span class="token operator">::</span><span class="token operator">:</span><span class="token number">8080</span><span class="token operator">-&gt;</span><span class="token number">8080</span><span class="token operator">/</span>tcp   business<span class="token operator">-</span>central
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看日志" tabindex="-1"><a class="header-anchor" href="#查看日志" aria-hidden="true">#</a> 查看日志</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>docker logs <span class="token operator">-</span>f <span class="token number">8739919e9</span>c05
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>看到类似输出，说明业务中心启动成功</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token number">08</span><span class="token operator">:</span><span class="token number">21</span><span class="token operator">:</span><span class="token number">53</span><span class="token punctuation">,</span><span class="token number">480</span> <span class="token constant">INFO</span>  <span class="token punctuation">[</span>org<span class="token punctuation">.</span>jboss<span class="token punctuation">.</span>as<span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token class-name">Controller</span> <span class="token class-name">Boot</span> <span class="token class-name">Thread</span><span class="token punctuation">)</span> <span class="token constant">WFLYSRV0060</span><span class="token operator">:</span> <span class="token class-name">Http</span> management <span class="token keyword">interface</span> listening on http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">9990</span><span class="token operator">/</span>management
<span class="token number">08</span><span class="token operator">:</span><span class="token number">21</span><span class="token operator">:</span><span class="token number">53</span><span class="token punctuation">,</span><span class="token number">487</span> <span class="token constant">INFO</span>  <span class="token punctuation">[</span>org<span class="token punctuation">.</span>jboss<span class="token punctuation">.</span>as<span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token class-name">Controller</span> <span class="token class-name">Boot</span> <span class="token class-name">Thread</span><span class="token punctuation">)</span> <span class="token constant">WFLYSRV0051</span><span class="token operator">:</span> <span class="token class-name">Admin</span> console listening on http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">9990</span>
<span class="token number">08</span><span class="token operator">:</span><span class="token number">21</span><span class="token operator">:</span><span class="token number">58</span><span class="token punctuation">,</span><span class="token number">767</span> <span class="token constant">INFO</span>  <span class="token punctuation">[</span><span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>kie<span class="token punctuation">.</span>workbench<span class="token punctuation">.</span>common<span class="token punctuation">.</span>screens<span class="token punctuation">.</span>datasource<span class="token punctuation">.</span>management<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span>ServiceUtil</span><span class="token punctuation">]</span> <span class="token punctuation">(</span>pool<span class="token operator">-</span><span class="token number">17</span><span class="token operator">-</span>thread<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token class-name">Getting</span> reference <span class="token keyword">to</span> <span class="token namespace">managed</span> bean<span class="token operator">:</span> <span class="token class-name">WildflyDataSourceProvider</span>
<span class="token number">08</span><span class="token operator">:</span><span class="token number">21</span><span class="token operator">:</span><span class="token number">58</span><span class="token punctuation">,</span><span class="token number">796</span> <span class="token constant">INFO</span>  <span class="token punctuation">[</span><span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>kie<span class="token punctuation">.</span>workbench<span class="token punctuation">.</span>common<span class="token punctuation">.</span>screens<span class="token punctuation">.</span>datasource<span class="token punctuation">.</span>management<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span>ServiceUtil</span><span class="token punctuation">]</span> <span class="token punctuation">(</span>pool<span class="token operator">-</span><span class="token number">17</span><span class="token operator">-</span>thread<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token class-name">Getting</span> reference <span class="token keyword">to</span> <span class="token namespace">managed</span> bean<span class="token operator">:</span> <span class="token class-name">WildflyDriverProvider</span>
<span class="token number">08</span><span class="token operator">:</span><span class="token number">21</span><span class="token operator">:</span><span class="token number">58</span><span class="token punctuation">,</span><span class="token number">819</span> <span class="token constant">INFO</span>  <span class="token punctuation">[</span>org<span class="token punctuation">.</span>jboss<span class="token punctuation">.</span>threads<span class="token punctuation">]</span> <span class="token punctuation">(</span>pool<span class="token operator">-</span><span class="token number">17</span><span class="token operator">-</span>thread<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token class-name">JBoss</span> <span class="token class-name">Threads</span> version <span class="token number">2.4</span><span class="token number">.0</span><span class="token punctuation">.</span>Final
<span class="token number">08</span><span class="token operator">:</span><span class="token number">21</span><span class="token operator">:</span><span class="token number">58</span><span class="token punctuation">,</span><span class="token number">970</span> <span class="token constant">INFO</span>  <span class="token punctuation">[</span>org<span class="token punctuation">.</span>jboss<span class="token punctuation">.</span>remoting<span class="token punctuation">]</span> <span class="token punctuation">(</span>pool<span class="token operator">-</span><span class="token number">17</span><span class="token operator">-</span>thread<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token class-name">JBoss</span> <span class="token class-name">Remoting</span> version <span class="token number">5.0</span><span class="token number">.20</span><span class="token punctuation">.</span>Final
<span class="token number">08</span><span class="token operator">:</span><span class="token number">21</span><span class="token operator">:</span><span class="token number">59</span><span class="token punctuation">,</span><span class="token number">001</span> <span class="token constant">INFO</span>  <span class="token punctuation">[</span>org<span class="token punctuation">.</span>xnio<span class="token punctuation">]</span> <span class="token punctuation">(</span>pool<span class="token operator">-</span><span class="token number">17</span><span class="token operator">-</span>thread<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token constant">XNIO</span> version <span class="token number">3.8</span><span class="token number">.4</span><span class="token punctuation">.</span>Final
<span class="token number">08</span><span class="token operator">:</span><span class="token number">21</span><span class="token operator">:</span><span class="token number">59</span><span class="token punctuation">,</span><span class="token number">012</span> <span class="token constant">INFO</span>  <span class="token punctuation">[</span>org<span class="token punctuation">.</span>xnio<span class="token punctuation">.</span>nio<span class="token punctuation">]</span> <span class="token punctuation">(</span>pool<span class="token operator">-</span><span class="token number">17</span><span class="token operator">-</span>thread<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token constant">XNIO</span> <span class="token constant">NIO</span> <span class="token class-name">Implementation</span> <span class="token class-name">Version</span> <span class="token number">3.8</span><span class="token number">.4</span><span class="token punctuation">.</span>Final
<span class="token number">08</span><span class="token operator">:</span><span class="token number">22</span><span class="token operator">:</span><span class="token number">00</span><span class="token punctuation">,</span><span class="token number">269</span> <span class="token constant">INFO</span>  <span class="token punctuation">[</span>org<span class="token punctuation">.</span>jboss<span class="token punctuation">.</span>as<span class="token punctuation">.</span>protocol<span class="token punctuation">]</span> <span class="token punctuation">(</span>management <span class="token class-name">I</span><span class="token operator">/</span><span class="token class-name">O</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token constant">WFLYPRT0057</span><span class="token operator">:</span>  cancelled task by interrupting thread <span class="token class-name">Thread</span><span class="token punctuation">[</span>management<span class="token operator">-</span>handler<span class="token operator">-</span>thread <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span>management<span class="token operator">-</span>handler<span class="token operator">-</span>thread<span class="token punctuation">]</span>
<span class="token number">08</span><span class="token operator">:</span><span class="token number">22</span><span class="token operator">:</span><span class="token number">00</span><span class="token punctuation">,</span><span class="token number">536</span> <span class="token constant">INFO</span>  <span class="token punctuation">[</span>org<span class="token punctuation">.</span>jboss<span class="token punctuation">.</span>as<span class="token punctuation">.</span>protocol<span class="token punctuation">]</span> <span class="token punctuation">(</span>management <span class="token class-name">I</span><span class="token operator">/</span><span class="token class-name">O</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token constant">WFLYPRT0057</span><span class="token operator">:</span>  cancelled task by interrupting thread <span class="token class-name">Thread</span><span class="token punctuation">[</span>management<span class="token operator">-</span>handler<span class="token operator">-</span>thread <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span>management<span class="token operator">-</span>handler<span class="token operator">-</span>thread<span class="token punctuation">]</span>
<span class="token number">08</span><span class="token operator">:</span><span class="token number">22</span><span class="token operator">:</span><span class="token number">00</span><span class="token punctuation">,</span><span class="token number">661</span> <span class="token constant">INFO</span>  <span class="token punctuation">[</span><span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>kie<span class="token punctuation">.</span>workbench<span class="token punctuation">.</span>common<span class="token punctuation">.</span>screens<span class="token punctuation">.</span>datasource<span class="token punctuation">.</span>management<span class="token punctuation">.</span>backend<span class="token punctuation">.</span></span>DataSourceManagementBootstrap</span><span class="token punctuation">]</span> <span class="token punctuation">(</span>pool<span class="token operator">-</span><span class="token number">17</span><span class="token operator">-</span>thread<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token class-name">Initialize</span> deployments task finished successfully<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动决策服务器" tabindex="-1"><a class="header-anchor" href="#启动决策服务器" aria-hidden="true">#</a> 启动决策服务器:</h2><p>在控制台中运行如下命令启动决策服务器容器。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -p 8180:8080 -d --name kie-server --link business-central:kie-wb jboss/kie-server-showcase
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>控制台输出的容器实例ID如下</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>c05b9a80b5d604103d4b51bd4052a1ea7075dab49b536959e92f4cce802c0b4e
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="获取实例信息" tabindex="-1"><a class="header-anchor" href="#获取实例信息" aria-hidden="true">#</a> 获取实例信息:</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker ps | grep kie-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>控制台输出的容器实例信息如下</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>c05b9a80b5d6   jboss<span class="token operator">/</span>kie<span class="token operator">-</span>server<span class="token operator">-</span>showcase                   <span class="token string">&quot;./start_kie-server.…&quot;</span>   <span class="token class-name">About</span> a minute ago   <span class="token class-name">Up</span> <span class="token class-name">About</span> a minute   <span class="token number">0.0</span><span class="token number">.0</span><span class="token number">.0</span><span class="token operator">:</span><span class="token number">8180</span><span class="token operator">-&gt;</span><span class="token number">8080</span><span class="token operator">/</span>tcp<span class="token punctuation">,</span> <span class="token operator">::</span><span class="token operator">:</span><span class="token number">8180</span><span class="token operator">-&gt;</span><span class="token number">8080</span><span class="token operator">/</span>tcp                                              kie<span class="token operator">-</span>server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看日志-1" tabindex="-1"><a class="header-anchor" href="#查看日志-1" aria-hidden="true">#</a> 查看日志</h3><p>查看决策服务器实例的日志</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>docker logs <span class="token operator">-</span>f c05b9a80b5d6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>看到一下日志输出，说明决策服务器启动成功</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token number">08</span><span class="token operator">:</span><span class="token number">32</span><span class="token operator">:</span><span class="token number">02</span><span class="token punctuation">,</span><span class="token number">240</span> <span class="token constant">INFO</span>  <span class="token punctuation">[</span><span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>jbpm<span class="token punctuation">.</span>kie<span class="token punctuation">.</span>services<span class="token punctuation">.</span>impl<span class="token punctuation">.</span>query<span class="token punctuation">.</span></span>QueryServiceImpl</span><span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token keyword">default</span> task<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token class-name">Registered</span> jbpmHumanTasksWithVariables query successfully
<span class="token number">08</span><span class="token operator">:</span><span class="token number">32</span><span class="token operator">:</span><span class="token number">02</span><span class="token punctuation">,</span><span class="token number">242</span> <span class="token constant">INFO</span>  <span class="token punctuation">[</span><span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>jbpm<span class="token punctuation">.</span>kie<span class="token punctuation">.</span>services<span class="token punctuation">.</span>impl<span class="token punctuation">.</span>query<span class="token punctuation">.</span></span>QueryServiceImpl</span><span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token keyword">default</span> task<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token class-name">Registered</span> jbpmProcessInstances query successfully
<span class="token number">08</span><span class="token operator">:</span><span class="token number">32</span><span class="token operator">:</span><span class="token number">02</span><span class="token punctuation">,</span><span class="token number">308</span> <span class="token constant">INFO</span>  <span class="token punctuation">[</span><span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>jbpm<span class="token punctuation">.</span>kie<span class="token punctuation">.</span>services<span class="token punctuation">.</span>impl<span class="token punctuation">.</span>query<span class="token punctuation">.</span>persistence<span class="token punctuation">.</span></span>PersistDataSetListener</span><span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token keyword">default</span> task<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token class-name">Data</span> set jbpmExecutionErrorList updated in db storage
<span class="token number">08</span><span class="token operator">:</span><span class="token number">32</span><span class="token operator">:</span><span class="token number">02</span><span class="token punctuation">,</span><span class="token number">308</span> <span class="token constant">INFO</span>  <span class="token punctuation">[</span><span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>kie<span class="token punctuation">.</span>server<span class="token punctuation">.</span>services<span class="token punctuation">.</span>jbpm<span class="token punctuation">.</span></span>JbpmKieServerExtension</span><span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token keyword">default</span> task<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token class-name">Data</span> source expression $<span class="token punctuation">{</span>org<span class="token punctuation">.</span>kie<span class="token punctuation">.</span>server<span class="token punctuation">.</span>persistence<span class="token punctuation">.</span>ds<span class="token punctuation">}</span> resolved <span class="token keyword">to</span> <span class="token namespace">java</span><span class="token operator">:</span>jboss<span class="token operator">/</span>datasources<span class="token operator">/</span><span class="token class-name">ExampleDS</span>
<span class="token number">08</span><span class="token operator">:</span><span class="token number">32</span><span class="token operator">:</span><span class="token number">02</span><span class="token punctuation">,</span><span class="token number">313</span> <span class="token constant">INFO</span>  <span class="token punctuation">[</span><span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>jbpm<span class="token punctuation">.</span>kie<span class="token punctuation">.</span>services<span class="token punctuation">.</span>impl<span class="token punctuation">.</span>query<span class="token punctuation">.</span>persistence<span class="token punctuation">.</span></span>PersistDataSetListener</span><span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token keyword">default</span> task<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token class-name">Data</span> set processesMonitoring saved in db storage
<span class="token number">08</span><span class="token operator">:</span><span class="token number">32</span><span class="token operator">:</span><span class="token number">02</span><span class="token punctuation">,</span><span class="token number">330</span> <span class="token constant">INFO</span>  <span class="token punctuation">[</span><span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>jbpm<span class="token punctuation">.</span>kie<span class="token punctuation">.</span>services<span class="token punctuation">.</span>impl<span class="token punctuation">.</span>query<span class="token punctuation">.</span></span>QueryServiceImpl</span><span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token keyword">default</span> task<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token class-name">Registered</span> jbpmExecutionErrorList query successfully
<span class="token number">08</span><span class="token operator">:</span><span class="token number">32</span><span class="token operator">:</span><span class="token number">02</span><span class="token punctuation">,</span><span class="token number">331</span> <span class="token constant">INFO</span>  <span class="token punctuation">[</span><span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>kie<span class="token punctuation">.</span>server<span class="token punctuation">.</span>services<span class="token punctuation">.</span>jbpm<span class="token punctuation">.</span></span>JbpmKieServerExtension</span><span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token keyword">default</span> task<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token class-name">Data</span> source expression $<span class="token punctuation">{</span>org<span class="token punctuation">.</span>kie<span class="token punctuation">.</span>server<span class="token punctuation">.</span>persistence<span class="token punctuation">.</span>ds<span class="token punctuation">}</span> resolved <span class="token keyword">to</span> <span class="token namespace">java</span><span class="token operator">:</span>jboss<span class="token operator">/</span>datasources<span class="token operator">/</span><span class="token class-name">ExampleDS</span>
<span class="token number">08</span><span class="token operator">:</span><span class="token number">32</span><span class="token operator">:</span><span class="token number">02</span><span class="token punctuation">,</span><span class="token number">365</span> <span class="token constant">INFO</span>  <span class="token punctuation">[</span><span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>jbpm<span class="token punctuation">.</span>kie<span class="token punctuation">.</span>services<span class="token punctuation">.</span>impl<span class="token punctuation">.</span>query<span class="token punctuation">.</span></span>QueryServiceImpl</span><span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token keyword">default</span> task<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token class-name">Registered</span> processesMonitoring query successfully
<span class="token number">08</span><span class="token operator">:</span><span class="token number">32</span><span class="token operator">:</span><span class="token number">02</span><span class="token punctuation">,</span><span class="token number">379</span> <span class="token constant">INFO</span>  <span class="token punctuation">[</span><span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>jbpm<span class="token punctuation">.</span>kie<span class="token punctuation">.</span>services<span class="token punctuation">.</span>impl<span class="token punctuation">.</span>query<span class="token punctuation">.</span>persistence<span class="token punctuation">.</span></span>PersistDataSetListener</span><span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token keyword">default</span> task<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token class-name">Data</span> set processesMonitoring updated in db storage
<span class="token number">08</span><span class="token operator">:</span><span class="token number">32</span><span class="token operator">:</span><span class="token number">02</span><span class="token punctuation">,</span><span class="token number">380</span> <span class="token constant">INFO</span>  <span class="token punctuation">[</span><span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>kie<span class="token punctuation">.</span>server<span class="token punctuation">.</span>services<span class="token punctuation">.</span>jbpm<span class="token punctuation">.</span></span>JbpmKieServerExtension</span><span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token keyword">default</span> task<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token class-name">Data</span> source expression $<span class="token punctuation">{</span>org<span class="token punctuation">.</span>kie<span class="token punctuation">.</span>server<span class="token punctuation">.</span>persistence<span class="token punctuation">.</span>ds<span class="token punctuation">}</span> resolved <span class="token keyword">to</span> <span class="token namespace">java</span><span class="token operator">:</span>jboss<span class="token operator">/</span>datasources<span class="token operator">/</span><span class="token class-name">ExampleDS</span>
<span class="token number">08</span><span class="token operator">:</span><span class="token number">32</span><span class="token operator">:</span><span class="token number">02</span><span class="token punctuation">,</span><span class="token number">402</span> <span class="token constant">INFO</span>  <span class="token punctuation">[</span><span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>jbpm<span class="token punctuation">.</span>kie<span class="token punctuation">.</span>services<span class="token punctuation">.</span>impl<span class="token punctuation">.</span>query<span class="token punctuation">.</span></span>QueryServiceImpl</span><span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token keyword">default</span> task<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token class-name">Registered</span> processesMonitoring query successfully
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="验证安装" tabindex="-1"><a class="header-anchor" href="#验证安装" aria-hidden="true">#</a> 验证安装</h2><p>通过浏览器访问业务中心登录页面地址为</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>ip<span class="token operator">:</span><span class="token number">8080</span><span class="token operator">/</span>business<span class="token operator">-</span>central<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+e+'" alt=""></p><p>在登陆页面输入容器镜像内部默认的用户名admin和密码admin，进入业务中心管控台</p><p><img src="'+t+'" alt=""></p><p>单击业务中心管控台首页的Deploy标签，系统会进入KIE Server页面</p><p><img src="'+o+'" alt=""></p><p>在KIE Server页面，可以看到默认的KIE Server 已经启动，至此，完成了Drools的容器环境搭建</p>',42),r=[l];function u(k,i){return n(),a("div",null,r)}const d=s(c,[["render",u],["__file","drools09.html.vue"]]);export{d as default};