(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9646],{1369:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[id]",function(){return n(2198)}])},8047:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(5893),i=n(8420),a=n(5313);function o(e){var t=e.dateString,n=(0,i.Z)(t);return(0,r.jsx)("time",{dateTime:t,children:(0,a.Z)(n,"LLLL d, yyyy")})}},4328:function(e,t,n){"use strict";n.d(t,{Z:function(){return _},y:function(){return g}});var r=n(5893),i=n(9008),a=n(1664),o=n(5787),s=n.n(o),l=(new Date).getFullYear();function c(e){e.home;return(0,r.jsx)("footer",{className:s().FooterContainer,children:(0,r.jsxs)("div",{className:s().Footer,children:[(0,r.jsxs)("div",{className:s().FooterName,children:["\xa9 ",(0,r.jsx)("time",{children:l})," Bradley Schoeneweis"]}),(0,r.jsxs)("div",{className:s().FooterLinks,children:[(0,r.jsx)("a",{href:"https://www.linkedin.com/in/bradley-schoeneweis/",target:"_blank",children:(0,r.jsx)("img",{width:"16",src:"/icons/linkedin.svg",alt:"linkedin logo",className:s().SocialLinkLogo})}),(0,r.jsx)("a",{href:"https://github.com/bschoeneweis",target:"_blank",children:(0,r.jsx)("img",{width:"16",src:"/icons/github.svg",alt:"github logo",className:s().SocialLinkLogo})}),(0,r.jsx)("a",{href:"https://medium.com/@bradley-schoeneweis",target:"_blank",children:(0,r.jsx)("img",{width:"16",src:"/icons/medium.svg",alt:"medium logo",className:s().SocialLinkLogo})}),(0,r.jsx)("a",{href:"https://dev.to/bschoeneweis",target:"_blank",children:(0,r.jsx)("img",{width:"16",src:"/icons/dev.svg",alt:"dev logo",className:s().SocialLinkLogo})}),(0,r.jsx)("a",{href:"/feed.xml",children:(0,r.jsx)("img",{width:"16",src:"/icons/rss.svg",alt:"rss logo",className:s().SocialLinkLogo})})]})]})})}var d=n(1389),u=n.n(d),g="Bradley Schoeneweis",m="Bradley Schoeneweis";function _(e){var t,n=e.children,o=e.home,s=e.tagPage,l=e.title;s&&(t=(0,r.jsx)(a.default,{href:"/tags",children:(0,r.jsx)("a",{children:"View All Tags"})}));var d=function(e){return"https://og-image.vercel.app/".concat(encodeURI(e),".png?theme=light&md=1&fontSize=50px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg&widths=350&heights=350")}(l||g);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:o?u().HomeContainer:u().ArticleContainer,children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>\ud83d\udc4b</text></svg>"}),(0,r.jsx)("meta",{name:"description",content:"Bradley Schoeneweis"}),(0,r.jsx)("meta",{property:"og:image",content:d}),(0,r.jsx)("meta",{name:"robots",content:"follow, index"}),(0,r.jsx)("meta",{name:"og:title",content:l||g}),(0,r.jsx)("meta",{property:"og:site_name",content:l||g}),(0,r.jsx)("meta",{property:"og:description",content:m}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:site",content:"@bschoeneweis"}),(0,r.jsx)("meta",{name:"twitter:title",content:m}),(0,r.jsx)("meta",{name:"twitter:description",content:m}),(0,r.jsx)("meta",{name:"twitter:image",content:d}),(0,r.jsx)("title",{children:l||g})]}),(0,r.jsxs)("header",{children:[o&&(0,r.jsx)("h1",{className:u().HomeName,children:m}),!o&&(0,r.jsxs)("div",{className:u().LayoutLinks,children:[(0,r.jsx)(a.default,{href:"/",children:(0,r.jsx)("a",{children:"\u2190 Back home"})}),t]})]}),(0,r.jsx)("main",{children:n})]}),(0,r.jsx)(c,{home:o})]})}},7359:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893),i=n(1664),a=n(5794),o=n.n(a),s=n(0),l=n.n(s);function c(e){var t=e.tag,n=e.useLink,a=e.isHeader,s=e.index,c=e.label,d=a?"".concat(l().Badge," ").concat(l().BadgeLarge):"".concat(l().Badge);n&&(d+=" ".concat(o().cursorPointer));var u=0!==s?l().TagListItem:null,g=(0,r.jsx)("div",{className:a?"".concat(o().marginTop2_25," ").concat(o().marginBottom1_25):u,children:(0,r.jsx)("span",{className:d,children:t})});return n&&(g=(0,r.jsxs)("div",{className:o().displayFlex,children:[(0,r.jsx)(i.default,{href:"/tags/".concat(t.replace(/\s+/g,"-").toLowerCase()),children:(0,r.jsx)("a",{children:g})}),c&&(0,r.jsxs)("span",{className:l().TagLabel,children:["\u2022 ",(0,r.jsx)("small",{className:o().lightText,children:c})]})]})),g}},3715:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(5893),i=n(7359),a=n(0),o=n.n(a);function s(e){var t=e.tags,n=e.isPost,a=t.map((function(e,t){return(0,r.jsx)(i.Z,{tag:e,index:t,useLink:!0},"".concat(e,"=").concat(Math.random().toString().split(".")[1]))}));return(0,r.jsx)("div",{className:n?"".concat(o().TagList," ").concat(o().TagListPost):o().TagList,children:a})}},2198:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return w},default:function(){return L}});var r=n(5893),i=n(4442),a=n(6828),o=n(4328),s=n(3715),l=n(5133),c=n(4078),d=n.n(c);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=function(e){e.node;var t=e.inline,n=e.className,i=e.children,a=g(e,["node","inline","className","children"]),o=/language-(\w+)/.exec(n||"");return!t&&o?(0,r.jsx)("div",{className:d().CodeBlock,children:(0,r.jsx)(l.Z1,{language:o[1],theme:l.FE,text:String(i).replace(/\n$/,""),showLineNumbers:!0,wrapLines:!0,codeBlock:!0})}):(0,r.jsx)("code",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}({className:n,style:{fontFamily:"Fira Code",border:"none",fontVariantLigatures:"none",backgroundColor:"rgb(246, 249, 252)",padding:"3px",borderRadius:"3px"}},a,{children:i}))},_=n(5794),h=n.n(_);function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var x=function(e){var t=e.node,n=e.children,i=p(e,["node","children"]);if("img"===t.children[0].tagName){var a,o,s=t.children[0],l=null===(a=s.properties.alt)||void 0===a?void 0:a.replace(/ *\{[^)]*\} */g,""),c=(null===(o=s.properties.alt)||void 0===o?void 0:o.toLowerCase().includes("{priority}"))?"eager":"lazy",d=s.properties.alt.match(/{([^}]+)x/),u=s.properties.alt.match(/x([^}]+)}/),g=d?d[1]:"768",m=u?u[1]:"432";return(0,r.jsx)("div",{style:{display:"flex",justifyContent:"center"},className:"ZoomImageWrapper",children:(0,r.jsxs)("label",{children:[(0,r.jsx)("input",{className:h().displayNone,type:"checkbox"}),(0,r.jsx)("img",{src:s.properties.src,width:g,height:m,className:"postImg",alt:l,loading:c})]})})}return(0,r.jsx)("p",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}({},i,{children:n}))},j=n(8047),y=n(367),v=n.n(y);function b(e){var t=e.date;return(0,r.jsxs)("div",{className:v().Author,children:[(0,r.jsx)("img",{loading:"eager",src:"/images/profile.jpg",height:40,width:40,alt:"Bradley Schoeneweis",className:"".concat(h().borderCircle," ").concat(v().AuthorImage)}),(0,r.jsxs)("div",{className:"".concat(h().lightText," ").concat(v().AuthorDate),children:["Bradley Schoeneweis",(0,r.jsx)("span",{className:h().dotSeparator,children:"\u2022"}),(0,r.jsx)(j.Z,{dateString:t})]})]})}var w=!0;function L(e){var t=e.postData;return(0,r.jsx)(o.Z,{title:t.title,children:(0,r.jsxs)("article",{children:[(0,r.jsx)("h1",{className:h().headingXl,children:t.title}),(0,r.jsx)(s.Z,{tags:t.tags,isPost:!0}),(0,r.jsx)(b,{date:t.date}),(0,r.jsx)(i.D,{components:{code:m,p:x},linkTarget:"_blank",rehypePlugins:[a.Z],children:t.markdown})]})})}},367:function(e){e.exports={Author:"author_Author__QmrQi",AuthorDate:"author_AuthorDate__HzPM6",AuthorImage:"author_AuthorImage__6NLD6"}},4078:function(e){e.exports={CodeBlock:"codeblock_CodeBlock__P_tQD"}},5787:function(e){e.exports={FooterName:"footer_FooterName__4egKC",Footer:"footer_Footer__wsKMY",FooterContainer:"footer_FooterContainer__oKXDJ",SocialLinkLogo:"footer_SocialLinkLogo__OWB_i",FooterLinks:"footer_FooterLinks__2mme5"}},1389:function(e){e.exports={HomeContainer:"layout_HomeContainer__SNdVI",ArticleContainer:"layout_ArticleContainer__QR4qB",header:"layout_header__H1FPN",LayoutLinks:"layout_LayoutLinks__92rCe",HomeName:"layout_HomeName__6eG6F"}},0:function(e){e.exports={Badge:"tag_Badge__e6qwu",BadgeLarge:"tag_BadgeLarge__O0ytt",TagList:"tag_TagList__IWJKV",TagListPost:"tag_TagListPost__iMXoV",TagLabel:"tag_TagLabel__AdflM"}},5794:function(e){e.exports={heading2Xl:"utils_heading2Xl___9fFP",headingXl:"utils_headingXl__u25Y2",headingLg:"utils_headingLg__5535D",headingMd:"utils_headingMd__gD1Ok",borderCircle:"utils_borderCircle__s2nTm",colorInherit:"utils_colorInherit__mSH_x",padding1px:"utils_padding1px__PWQKR",padding1rem:"utils_padding1rem__xPN3e",list:"utils_list__4Mu4l",listItem:"utils_listItem__s2m6i",lightText:"utils_lightText__eUzGY",dotSeparator:"utils_dotSeparator__Ij4lk",marginTop2_25:"utils_marginTop2_25__bRt80",marginBottom1_25:"utils_marginBottom1_25__XjeT0",marginLeft0_5rem:"utils_marginLeft0_5rem__qnumX",marginLeft1rem:"utils_marginLeft1rem__gnB7J",marginTop0_5rem:"utils_marginTop0_5rem__E7OQF",marginBottom0_5rem:"utils_marginBottom0_5rem__dsxrK",cursorPointer:"utils_cursorPointer__oXutf",floatRight:"utils_floatRight__n_EZh",marginRight5px:"utils_marginRight5px__PM_rI",displayFlex:"utils_displayFlex__VCtvW",displayNone:"utils_displayNone__rveqn",heightMaxContent:"utils_heightMaxContent___v0jL"}}},function(e){e.O(0,[4824,494,9774,2888,179],(function(){return t=1369,e(e.s=t);var t}));var t=e.O();_N_E=t}]);