(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{5271:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tags/[tag]",function(){return n(4161)}])},8047:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var a=n(5893),i=n(8420),s=n(5313);function r(e){var t=e.dateString,n=(0,i.Z)(t);return(0,a.jsx)("time",{dateTime:t,children:(0,s.Z)(n,"LLLL d, yyyy")})}},8369:function(e,t,n){"use strict";n.d(t,{Z:function(){return h},y:function(){return g}});var a=n(5893),i=n(9008),s=n(1664),r=n(5787),o=n.n(r),c=(new Date).getFullYear();function l(e){e.home;return(0,a.jsx)("footer",{className:o().FooterContainer,children:(0,a.jsxs)("div",{className:o().Footer,children:[(0,a.jsxs)("div",{className:o().FooterName,children:["\xa9 ",(0,a.jsx)("time",{children:c})," Bradley Schoeneweis"]}),(0,a.jsxs)("div",{className:o().FooterLinks,children:[(0,a.jsx)("a",{href:"https://www.linkedin.com/in/bradley-schoeneweis/",target:"_blank",children:(0,a.jsx)("img",{width:"16",src:"/icons/linkedin.svg",alt:"linkedin logo",className:o().SocialLinkLogo})}),(0,a.jsx)("a",{href:"https://github.com/bschoeneweis",target:"_blank",children:(0,a.jsx)("img",{width:"16",src:"/icons/github.svg",alt:"github logo",className:o().SocialLinkLogo})}),(0,a.jsx)("a",{href:"https://medium.com/@bradley-schoeneweis",target:"_blank",children:(0,a.jsx)("img",{width:"16",src:"/icons/medium.svg",alt:"medium logo",className:o().SocialLinkLogo})}),(0,a.jsx)("a",{href:"https://dev.to/bschoeneweis",target:"_blank",children:(0,a.jsx)("img",{width:"16",src:"/icons/dev.svg",alt:"dev logo",className:o().SocialLinkLogo})}),(0,a.jsx)("a",{href:"/feed.xml",children:(0,a.jsx)("img",{width:"16",src:"/icons/rss.svg",alt:"rss logo",className:o().SocialLinkLogo})})]})]})})}var _=n(1389),d=n.n(_),g="Bradley Schoeneweis",m="Bradley Schoeneweis",u="https://og-image.vercel.app/".concat(encodeURI(g),".png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg");function h(e){var t,n=e.children,r=e.home;return e.tagPage&&(t=(0,a.jsx)(s.default,{href:"/tags",children:(0,a.jsx)("a",{children:"View All Tags"})})),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:r?d().HomeContainer:d().ArticleContainer,children:[(0,a.jsxs)(i.default,{children:[(0,a.jsx)("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>\ud83d\udc4b</text></svg>"}),(0,a.jsx)("meta",{name:"description",content:"Bradley Schoeneweis"}),(0,a.jsx)("meta",{property:"og:image",content:u}),(0,a.jsx)("meta",{name:"robots",content:"follow, index"}),(0,a.jsx)("meta",{name:"og:title",content:g}),(0,a.jsx)("meta",{property:"og:site_name",content:g}),(0,a.jsx)("meta",{property:"og:description",content:m}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:site",content:"@bschoeneweis"}),(0,a.jsx)("meta",{name:"twitter:title",content:m}),(0,a.jsx)("meta",{name:"twitter:description",content:m}),(0,a.jsx)("meta",{name:"twitter:image",content:u})]}),(0,a.jsxs)("header",{children:[r&&(0,a.jsx)("h1",{className:d().HomeName,children:m}),!r&&(0,a.jsxs)("div",{className:d().LayoutLinks,children:[(0,a.jsx)(s.default,{href:"/",children:(0,a.jsx)("a",{children:"\u2190 Back home"})}),t]})]}),(0,a.jsx)("main",{children:n})]}),(0,a.jsx)(l,{home:r})]})}},7106:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var a=n(5893),i=n(1664),s=n(8047),r=n(3715),o=n(5794),c=n.n(o);function l(e){var t=e.posts,n=e.withPadding;return(0,a.jsx)("ul",{className:n?"".concat(c().list," ").concat(c().marginLeft1rem):c().list,children:t.map((function(e){var t=e.id,n=e.date,o=e.title,l=e.tags;return(0,a.jsxs)("li",{className:c().listItem,children:[(0,a.jsx)(i.default,{href:"/posts/".concat(t),children:(0,a.jsx)("a",{children:o})}),(0,a.jsx)("br",{}),(0,a.jsx)("div",{className:"".concat(c().marginBottom0_5rem," ").concat(c().marginTop0_5rem),children:(0,a.jsx)(r.Z,{tags:l})}),(0,a.jsx)("small",{className:c().lightText,children:(0,a.jsx)(s.Z,{dateString:n})})]},t)}))})}},7359:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var a=n(5893),i=n(1664),s=n(5794),r=n.n(s),o=n(0),c=n.n(o);function l(e){var t=e.tag,n=e.useLink,s=e.isHeader,o=e.index,l=e.label,_=s?"".concat(c().Badge," ").concat(c().BadgeLarge):"".concat(c().Badge);n&&(_+=" ".concat(r().cursorPointer));var d=0!==o?c().TagListItem:null,g=(0,a.jsx)("div",{className:s?"".concat(r().marginTop2_25," ").concat(r().marginBottom1_25):d,children:(0,a.jsx)("span",{className:_,children:t})});return n&&(g=(0,a.jsxs)("div",{className:r().displayFlex,children:[(0,a.jsx)(i.default,{href:"/tags/".concat(t.replace(/\s+/g,"-").toLowerCase()),children:(0,a.jsx)("a",{children:g})}),l&&(0,a.jsxs)("span",{className:c().TagLabel,children:["\u2022 ",(0,a.jsx)("small",{className:r().lightText,children:l})]})]})),g}},3715:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var a=n(5893),i=n(7359),s=n(0),r=n.n(s);function o(e){var t=e.tags,n=e.isPost,s=t.map((function(e,t){return(0,a.jsx)(i.Z,{tag:e,index:t,useLink:!0},"".concat(e,"=").concat(Math.random().toString().split(".")[1]))}));return(0,a.jsx)("div",{className:n?"".concat(r().TagList," ").concat(r().TagListPost):r().TagList,children:s})}},4161:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return _},default:function(){return d}});var a=n(5893),i=n(9008),s=n(8369),r=n(7106),o=n(7359),c=n(5794),l=n.n(c),_=!0;function d(e){var t=e.tag,n=e.taggedPosts;return(0,a.jsxs)(s.Z,{tagPage:!0,children:[(0,a.jsx)(i.default,{children:(0,a.jsxs)("title",{children:['Posts tagged "',t,'"']})}),(0,a.jsx)("header",{children:(0,a.jsx)(o.Z,{tag:t,isHeader:!0})}),(0,a.jsx)("section",{className:"".concat(l().headingMd," ").concat(l().padding1rem," ").concat(l().marginLeft0_5rem," "),children:(0,a.jsx)(r.Z,{posts:n})})]})}},5787:function(e){e.exports={FooterName:"footer_FooterName__4egKC",Footer:"footer_Footer__wsKMY",FooterContainer:"footer_FooterContainer__oKXDJ",SocialLinkLogo:"footer_SocialLinkLogo__OWB_i",FooterLinks:"footer_FooterLinks__2mme5"}},1389:function(e){e.exports={HomeContainer:"layout_HomeContainer__SNdVI",ArticleContainer:"layout_ArticleContainer__QR4qB",header:"layout_header__H1FPN",LayoutLinks:"layout_LayoutLinks__92rCe",HomeName:"layout_HomeName__6eG6F"}},0:function(e){e.exports={Badge:"tag_Badge__e6qwu",BadgeLarge:"tag_BadgeLarge__O0ytt",TagList:"tag_TagList__IWJKV",TagListPost:"tag_TagListPost__iMXoV",TagListItem:"tag_TagListItem__3M0uo",TagLabel:"tag_TagLabel__AdflM"}},5794:function(e){e.exports={heading2Xl:"utils_heading2Xl___9fFP",headingXl:"utils_headingXl__u25Y2",headingLg:"utils_headingLg__5535D",headingMd:"utils_headingMd__gD1Ok",borderCircle:"utils_borderCircle__s2nTm",colorInherit:"utils_colorInherit__mSH_x",padding1px:"utils_padding1px__PWQKR",padding1rem:"utils_padding1rem__xPN3e",list:"utils_list__4Mu4l",listItem:"utils_listItem__s2m6i",lightText:"utils_lightText__eUzGY",dotSeparator:"utils_dotSeparator__Ij4lk",marginTop2_25:"utils_marginTop2_25__bRt80",marginBottom1_25:"utils_marginBottom1_25__XjeT0",marginLeft0_5rem:"utils_marginLeft0_5rem__qnumX",marginLeft1rem:"utils_marginLeft1rem__gnB7J",marginTop0_5rem:"utils_marginTop0_5rem__E7OQF",marginBottom0_5rem:"utils_marginBottom0_5rem__dsxrK",cursorPointer:"utils_cursorPointer__oXutf",floatRight:"utils_floatRight__n_EZh",marginRight5px:"utils_marginRight5px__PM_rI",displayFlex:"utils_displayFlex__VCtvW"}}},function(e){e.O(0,[4824,9774,2888,179],(function(){return t=5271,e(e.s=t);var t}));var t=e.O();_N_E=t}]);