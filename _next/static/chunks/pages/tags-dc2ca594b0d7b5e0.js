(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3165],{2725:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tags",function(){return n(5150)}])},8047:function(e,t,n){"use strict";var i=n(5893),a=n(8420),s=n(5313);t.Z=function(e){var t=e.dateString,n=(0,a.Z)(t);return(0,i.jsx)("time",{dateTime:t,children:(0,s.Z)(n,"LLLL d, yyyy")})}},4328:function(e,t,n){"use strict";n.d(t,{Z:function(){return h},y:function(){return d}});var i=n(5893),a=n(9008),s=n(1664),r=n(5787),o=n.n(r),l=(new Date).getFullYear(),c=function(){return(0,i.jsx)("footer",{className:o().FooterContainer,children:(0,i.jsxs)("div",{className:o().Footer,children:[(0,i.jsxs)("div",{className:o().SocialLinkWrapper,children:[(0,i.jsx)("a",{href:"https://www.linkedin.com/in/bradley-schoeneweis/",target:"_blank",rel:"noreferrer",children:(0,i.jsx)("img",{width:"16",src:"/icons/linkedin.svg",alt:"linkedin logo",className:o().SocialLinkLogo})}),(0,i.jsx)("a",{href:"https://github.com/bschoeneweis",target:"_blank",rel:"noreferrer",children:(0,i.jsx)("img",{width:"16",src:"/icons/github.svg",alt:"github logo",className:o().SocialLinkLogo})}),(0,i.jsx)("a",{href:"https://medium.com/@bradley-schoeneweis",target:"_blank",rel:"noreferrer",children:(0,i.jsx)("img",{width:"16",src:"/icons/medium.svg",alt:"medium logo",className:o().SocialLinkLogo})}),(0,i.jsx)("a",{href:"https://dev.to/bschoeneweis",target:"_blank",rel:"noreferrer",children:(0,i.jsx)("img",{width:"16",src:"/icons/dev.svg",alt:"dev logo",className:o().SocialLinkLogo})}),(0,i.jsx)("a",{href:"/feed.xml",children:(0,i.jsx)("img",{width:"16",src:"/icons/rss.svg",alt:"rss logo",className:o().SocialLinkLogo})})]}),(0,i.jsx)("div",{className:o().CopyrightWrapper,children:(0,i.jsxs)("small",{children:["\xa9 ",(0,i.jsx)("time",{children:l})," Bradley Schoeneweis"]})})]})})},_=n(1389),g=n.n(_),d="Bradley Schoeneweis",m="Bradley Schoeneweis",h=function(e){var t,n=e.children,r=e.home,o=e.tagPage,l=e.title,_=e.description;o&&(t=(0,i.jsx)(s.default,{href:"/tags",children:(0,i.jsx)("a",{children:"View all tags"})}));var h=function(e){return"https://og-image.vercel.app/".concat(encodeURI(e),".png?theme=light&md=1&fontSize=50px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg&widths=350&heights=350")}(l||d),u=_||"Bradley Schoeneweis";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:r?g().HomeContainer:g().ArticleContainer,children:[(0,i.jsxs)(a.default,{children:[(0,i.jsx)("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>\ud83d\udc4b</text></svg>"}),(0,i.jsx)("meta",{name:"description",content:u}),(0,i.jsx)("meta",{property:"og:image",content:h}),(0,i.jsx)("meta",{name:"robots",content:"follow, index"}),(0,i.jsx)("meta",{name:"og:title",content:l||d}),(0,i.jsx)("meta",{property:"og:site_name",content:l||d}),(0,i.jsx)("meta",{property:"og:description",content:u}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"twitter:site",content:"@bschoeneweis"}),(0,i.jsx)("meta",{name:"twitter:title",content:m}),(0,i.jsx)("meta",{name:"twitter:description",content:u}),(0,i.jsx)("meta",{name:"twitter:image",content:h}),(0,i.jsx)("title",{children:l||d})]}),(0,i.jsxs)("header",{children:[r&&(0,i.jsx)("h1",{className:g().HomeName,children:m}),!r&&(0,i.jsxs)("div",{className:g().LayoutLinks,children:[(0,i.jsx)(s.default,{href:"/",children:(0,i.jsx)("a",{children:"\u2190 Back home"})}),t]})]}),(0,i.jsx)("main",{children:n})]}),(0,i.jsx)(c,{home:r})]})}},7106:function(e,t,n){"use strict";var i=n(5893),a=n(1664),s=n(8047),r=n(3715),o=n(5794),l=n.n(o);t.Z=function(e){var t=e.posts,n=e.withPadding;return(0,i.jsx)("ul",{className:n?"".concat(l().list," ").concat(l().marginLeft1rem):l().list,children:t.map((function(e){var t=e.id,n=e.date,o=e.title,c=e.tags;return!e.hidden&&(0,i.jsxs)("li",{className:l().listItem,children:[(0,i.jsx)(a.default,{href:"/posts/".concat(t),children:(0,i.jsx)("a",{children:o})}),(0,i.jsx)("br",{}),(0,i.jsx)("div",{className:"".concat(l().marginBottom0_5rem," ").concat(l().marginTop0_5rem),children:(0,i.jsx)(r.Z,{tags:c})}),(0,i.jsx)("small",{className:l().lightText,children:(0,i.jsx)(s.Z,{dateString:n})})]},t)}))})}},7359:function(e,t,n){"use strict";var i=n(5893),a=n(1664),s=n(5794),r=n.n(s),o=n(0),l=n.n(o);t.Z=function(e){var t=e.tag,n=e.useLink,s=e.isHeader,o=e.index,c=e.label,_=s?"".concat(l().Badge," ").concat(l().BadgeLarge):"".concat(l().Badge);n&&(_+=" ".concat(r().cursorPointer));var g=0!==o?l().TagListItem:null,d=(0,i.jsx)("div",{className:s?"".concat(r().marginTop2_25," ").concat(r().marginBottom1_25):g,children:(0,i.jsx)("span",{className:_,children:t})});return n&&(d=(0,i.jsxs)("div",{className:r().displayFlex,children:[(0,i.jsx)(a.default,{href:"/tags/".concat(t.replace(/\s+/g,"-").toLowerCase()),children:(0,i.jsx)("a",{children:d})}),c&&(0,i.jsxs)("span",{className:l().TagLabel,children:["\u2022 ",(0,i.jsx)("small",{className:r().lightText,children:c})]})]})),d}},3715:function(e,t,n){"use strict";var i=n(5893),a=n(7359),s=n(0),r=n.n(s);t.Z=function(e){var t=e.tags,n=e.isPost,s=t.map((function(e,t){return(0,i.jsx)(a.Z,{tag:e,index:t,useLink:!0},"".concat(e,"=").concat(Math.random().toString().split(".")[1]))}));return(0,i.jsx)("div",{className:n?"".concat(r().TagList," ").concat(r().TagListPost):r().TagList,children:s})}},5150:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return g},default:function(){return d}});var i=n(5893),a=n(7294),s=n(5794),r=n.n(s),o=function(e){var t=e.label,n=e.value,a=e.onChange;return(0,i.jsxs)("label",{children:[(0,i.jsx)("input",{type:"checkbox",className:r().marginRight5px,checked:n,onChange:a}),t]})},l=n(4328),c=n(7106),_=n(7359),g=!0,d=function(e){var t=e.tagsWithPosts,n=(0,a.useState)(!1),s=n[0],g=n[1],d=Object.keys(t).map((function(e){return(0,i.jsxs)("section",{className:"".concat(r().headingMd," ").concat(r().marginLeft0_5rem," "),children:[(0,i.jsx)(_.Z,{tag:e,isHeader:!0,useLink:!0,label:t[e].length}),s&&(0,i.jsx)(c.Z,{posts:t[e],withPadding:!0})]},e)})),m="All Tags";return(0,i.jsxs)(l.Z,{title:m,description:m,children:[(0,i.jsxs)("header",{children:[(0,i.jsx)("h1",{className:r().headingXl,children:"All tags"}),(0,i.jsx)("div",{className:r().floatRight,children:(0,i.jsx)(o,{label:"Show posts",value:s,onChange:function(e){return g(!s)}})})]}),d]})}},5787:function(e){e.exports={Footer:"footer_Footer__wsKMY",CopyrightWrapper:"footer_CopyrightWrapper__NZEPb",SocialLinkLogo:"footer_SocialLinkLogo__OWB_i",SocialLinkWrapper:"footer_SocialLinkWrapper__0F2i_",FooterContainer:"footer_FooterContainer__oKXDJ"}},1389:function(e){e.exports={HomeContainer:"layout_HomeContainer__SNdVI",ArticleContainer:"layout_ArticleContainer__QR4qB",header:"layout_header__H1FPN",LayoutLinks:"layout_LayoutLinks__92rCe",HomeName:"layout_HomeName__6eG6F"}},0:function(e){e.exports={Badge:"tag_Badge__e6qwu",BadgeLarge:"tag_BadgeLarge__O0ytt",TagList:"tag_TagList__IWJKV",TagListPost:"tag_TagListPost__iMXoV",TagLabel:"tag_TagLabel__AdflM"}},5794:function(e){e.exports={heading2Xl:"utils_heading2Xl___9fFP",headingXl:"utils_headingXl__u25Y2",headingLg:"utils_headingLg__5535D",headingMd:"utils_headingMd__gD1Ok",borderCircle:"utils_borderCircle__s2nTm",colorInherit:"utils_colorInherit__mSH_x",padding1px:"utils_padding1px__PWQKR",padding1rem:"utils_padding1rem__xPN3e",list:"utils_list__4Mu4l",listItem:"utils_listItem__s2m6i",lightText:"utils_lightText__eUzGY",dotSeparator:"utils_dotSeparator__Ij4lk",marginTop2_25:"utils_marginTop2_25__bRt80",marginBottom1_25:"utils_marginBottom1_25__XjeT0",marginLeft0:"utils_marginLeft0__juPqQ",marginLeft0_5rem:"utils_marginLeft0_5rem__qnumX",marginLeft1rem:"utils_marginLeft1rem__gnB7J",marginTop0_5rem:"utils_marginTop0_5rem__E7OQF",marginBottom0_5rem:"utils_marginBottom0_5rem__dsxrK",cursorPointer:"utils_cursorPointer__oXutf",floatRight:"utils_floatRight__n_EZh",marginRight5px:"utils_marginRight5px__PM_rI",displayFlex:"utils_displayFlex__VCtvW",displayNone:"utils_displayNone__rveqn",heightMaxContent:"utils_heightMaxContent___v0jL",comingSoon:"utils_comingSoon__j1ohL"}}},function(e){e.O(0,[4824,9774,2888,179],(function(){return t=2725,e(e.s=t);var t}));var t=e.O();_N_E=t}]);