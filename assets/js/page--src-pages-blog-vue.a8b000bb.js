(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{247:function(t,e,s){},251:function(t,e,s){},262:function(t,e,s){"use strict";var a=s(247);s.n(a).a},268:function(t,e,s){"use strict";var a={props:{post:{type:Object,required:!0}}},n=(s(262),s(0)),o=Object(n.a)(a,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("small",[t.post.author?[t._v("\n      Posted "+t._s(t.post.date)+" by\n      "),t._l(t.post.author,function(e,a){return[a&&a===t.post.author.length-1?s("span",[t._v(" and ")]):a>0?s("span",[t._v(", ")]):t._e(),e.avatar?s("g-image",{staticClass:"author-image",attrs:{alt:e.title,src:e.avatar}}):t._e(),s("g-link",{key:e.id,attrs:{to:e.path}},[t._v(t._s(e.title))])]}),t.post.timeToRead?s("span",[t._v(" - ")]):t._e()]:t._e(),t.post.timeToRead?[s("strong",[t._v(t._s(t.post.timeToRead)+" min read")])]:t._e()],2)])},[],!1,null,null,null);e.a=o.exports},280:function(t,e,s){"use strict";var a=s(251);s.n(a).a},298:function(t,e,s){"use strict";var a={components:{PostMeta:s(268).a},props:{post:{type:Object,required:!0}}},n=(s(280),s(0)),o=Object(n.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return e("Card",{staticClass:"blog-posts__post",attrs:{link:this.post.path}},[e("h3",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:this._s(this.post.title)}}),e("p",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:this._s(this.post.excerpt)}}),e("PostMeta",{staticClass:"post",attrs:{post:this.post}})],1)},[],!1,null,null,null);e.a=o.exports},336:function(t,e){},529:function(t,e,s){"use strict";var a=s(336),n=s.n(a);e.default=n.a},720:function(t,e,s){"use strict";s.r(e);var a={components:{PostCard:s(298).a},metaInfo:{title:"Blog"}},n=s(0),o=s(529),i=Object(n.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("Section",{staticClass:"blog-posts",attrs:{container:"md"}},[e("div",{staticClass:"mb-x2 container-sm text-center"},[e("h1",[this._v("Gridsome Blog")])]),this._l(this.$page.posts.edges,function(t){return e("PostCard",{key:t.node.id,attrs:{post:t.node}})}),e("p",{staticClass:"text-center"},[this._v("\n      Want to contribute to Gridsome blog?\n      "),e("g-link",{attrs:{to:"/docs/how-to-contribute#contributing-to-the-blog"}},[this._v(" Learn more here")])],1)],2)],1)},[],!1,null,null,null);"function"==typeof o.default&&Object(o.default)(i);e.default=i.exports}}]);