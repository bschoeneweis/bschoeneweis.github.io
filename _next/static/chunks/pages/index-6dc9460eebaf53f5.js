(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{8581:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(3678)}])},8047:function(e,t,i){"use strict";var n=i(5893),a=i(8420),s=i(5313);t.Z=function(e){var t=e.dateString,i=(0,a.Z)(t);return(0,n.jsx)("time",{dateTime:t,children:(0,s.Z)(i,"LLLL d, yyyy")})}},4328:function(e,t,i){"use strict";i.d(t,{Z:function(){return h},y:function(){return m}});var n=i(5893),a=i(9008),s=i(1664),r=i(5787),o=i.n(r),l=(new Date).getFullYear(),c=function(){return(0,n.jsx)("footer",{className:o().FooterContainer,children:(0,n.jsxs)("div",{className:o().Footer,children:[(0,n.jsxs)("div",{className:o().SocialLinkWrapper,children:[(0,n.jsx)("a",{href:"https://www.linkedin.com/in/bradley-schoeneweis/",target:"_blank",rel:"noreferrer",children:(0,n.jsx)("img",{width:"16",src:"/icons/linkedin.svg",alt:"linkedin logo",className:o().SocialLinkLogo})}),(0,n.jsx)("a",{href:"https://github.com/bschoeneweis",target:"_blank",rel:"noreferrer",children:(0,n.jsx)("img",{width:"16",src:"/icons/github.svg",alt:"github logo",className:o().SocialLinkLogo})}),(0,n.jsx)("a",{href:"/feed.xml",children:(0,n.jsx)("img",{width:"16",src:"/icons/rss.svg",alt:"rss logo",className:o().SocialLinkLogo})})]}),(0,n.jsx)("div",{className:o().CopyrightWrapper,children:(0,n.jsxs)("small",{children:["\xa9 ",(0,n.jsx)("time",{children:l})," Bradley Schoeneweis"]})})]})})},_=i(1389),d=i.n(_),m="Bradley Schoeneweis",g="Bradley Schoeneweis",h=function(e){var t,i=e.children,r=e.home,o=e.tagPage,l=e.title,_=e.description;o&&(t=(0,n.jsx)(s.default,{href:"/tags",children:(0,n.jsx)("a",{children:"View all tags"})}));var h=function(e){return"https://og-image.vercel.app/".concat(encodeURI(e),".png?theme=light&md=1&fontSize=50px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg&widths=350&heights=350")}(l||m),u=_||"Bradley Schoeneweis";return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:r?d().HomeContainer:d().ArticleContainer,children:[(0,n.jsxs)(a.default,{children:[(0,n.jsx)("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>\ud83d\udc4b</text></svg>"}),(0,n.jsx)("meta",{name:"description",content:u}),(0,n.jsx)("meta",{property:"og:image",content:h}),(0,n.jsx)("meta",{name:"robots",content:"follow, index"}),(0,n.jsx)("meta",{name:"og:title",content:l||m}),(0,n.jsx)("meta",{property:"og:site_name",content:l||m}),(0,n.jsx)("meta",{property:"og:description",content:u}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:site",content:"@bschoeneweis"}),(0,n.jsx)("meta",{name:"twitter:title",content:g}),(0,n.jsx)("meta",{name:"twitter:description",content:u}),(0,n.jsx)("meta",{name:"twitter:image",content:h}),(0,n.jsx)("title",{children:l||m})]}),(0,n.jsxs)("header",{children:[r&&(0,n.jsx)("h1",{className:d().HomeName,children:g}),!r&&(0,n.jsxs)("div",{className:d().LayoutLinks,children:[(0,n.jsx)(s.default,{href:"/",children:(0,n.jsx)("a",{children:"\u2190 Back home"})}),t]})]}),(0,n.jsx)("main",{children:i})]}),(0,n.jsx)(c,{home:r})]})}},7106:function(e,t,i){"use strict";var n=i(5893),a=i(1664),s=i(8047),r=i(3715),o=i(5794),l=i.n(o);t.Z=function(e){var t=e.posts,i=e.withPadding;return(0,n.jsx)("ul",{className:i?"".concat(l().list," ").concat(l().marginLeft1rem):l().list,children:t.map((function(e){var t=e.id,i=e.date,o=e.title,c=e.tags;return!e.hidden&&(0,n.jsxs)("li",{className:l().listItem,children:[(0,n.jsx)(a.default,{href:"/posts/".concat(t),children:(0,n.jsx)("a",{children:o})}),(0,n.jsx)("br",{}),(0,n.jsx)("div",{className:"".concat(l().marginBottom0_5rem," ").concat(l().marginTop0_5rem),children:(0,n.jsx)(r.Z,{tags:c})}),(0,n.jsx)("small",{className:l().lightText,children:(0,n.jsx)(s.Z,{dateString:i})})]},t)}))})}},7359:function(e,t,i){"use strict";var n=i(5893),a=i(1664),s=i(5794),r=i.n(s),o=i(0),l=i.n(o);t.Z=function(e){var t=e.tag,i=e.useLink,s=e.isHeader,o=e.index,c=e.label,_=s?"".concat(l().Badge," ").concat(l().BadgeLarge):"".concat(l().Badge);i&&(_+=" ".concat(r().cursorPointer));var d=0!==o?l().TagListItem:null,m=(0,n.jsx)("div",{className:s?"".concat(r().marginTop2_25," ").concat(r().marginBottom1_25):d,children:(0,n.jsx)("span",{className:_,children:t})});return i&&(m=(0,n.jsxs)("div",{className:r().displayFlex,children:[(0,n.jsx)(a.default,{href:"/tags/".concat(t.replace(/\s+/g,"-").toLowerCase()),children:(0,n.jsx)("a",{children:m})}),c&&(0,n.jsxs)("span",{className:l().TagLabel,children:["\u2022 ",(0,n.jsx)("small",{className:r().lightText,children:c})]})]})),m}},3715:function(e,t,i){"use strict";var n=i(5893),a=i(7359),s=i(0),r=i.n(s);t.Z=function(e){var t=e.tags,i=e.isPost,s=t.map((function(e,t){return(0,n.jsx)(a.Z,{tag:e,index:t,useLink:!0},"".concat(e,"=").concat(Math.random().toString().split(".")[1]))}));return(0,n.jsx)("div",{className:i?"".concat(r().TagList," ").concat(r().TagListPost):r().TagList,children:s})}},3678:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return d}});var n=i(5893),a=i(9008),s=i(4328),r=i(7106),o=i(5794),l=i.n(o),c=i(1248),_=i.n(c),d=!0;t.default=function(e){var t=e.allPostsData;return(0,n.jsxs)(s.Z,{home:!0,children:[(0,n.jsx)(a.default,{children:(0,n.jsx)("title",{children:s.y})}),(0,n.jsx)("section",{className:"".concat(l().headingMd," ").concat(_().BioSection),children:(0,n.jsxs)("ul",{className:_().BioList,children:[(0,n.jsx)("li",{className:_().BioListItem,children:"\ud83d\udccd \xa0 Fort Worth, TX"}),(0,n.jsxs)("li",{className:_().BioListItem,children:["\ud83d\udcbb \xa0 Senior Product Engineer @ ",(0,n.jsx)("a",{href:"https://radar.com",target:"_blank",rel:"noreferrer",children:"Radar"})]})]})}),(0,n.jsx)("section",{className:"".concat(l().headingMd," ").concat(l().padding1rem),children:(0,n.jsx)(r.Z,{posts:t})})]})}},5787:function(e){e.exports={Footer:"footer_Footer__wsKMY",CopyrightWrapper:"footer_CopyrightWrapper__NZEPb",SocialLinkLogo:"footer_SocialLinkLogo__OWB_i",SocialLinkWrapper:"footer_SocialLinkWrapper__0F2i_",FooterContainer:"footer_FooterContainer__oKXDJ"}},1248:function(e){e.exports={BioSection:"home_BioSection__6oljT",BioList:"home_BioList__15Z1z",BioListItem:"home_BioListItem__p9S_9"}},1389:function(e){e.exports={HomeContainer:"layout_HomeContainer__SNdVI",ArticleContainer:"layout_ArticleContainer__QR4qB",header:"layout_header__H1FPN",LayoutLinks:"layout_LayoutLinks__92rCe",HomeName:"layout_HomeName__6eG6F"}},0:function(e){e.exports={Badge:"tag_Badge__e6qwu",BadgeLarge:"tag_BadgeLarge__O0ytt",TagList:"tag_TagList__IWJKV",TagListPost:"tag_TagListPost__iMXoV",TagLabel:"tag_TagLabel__AdflM"}},5794:function(e){e.exports={heading2Xl:"utils_heading2Xl___9fFP",headingXl:"utils_headingXl__u25Y2",headingLg:"utils_headingLg__5535D",headingMd:"utils_headingMd__gD1Ok",borderCircle:"utils_borderCircle__s2nTm",colorInherit:"utils_colorInherit__mSH_x",padding1px:"utils_padding1px__PWQKR",padding1rem:"utils_padding1rem__xPN3e",list:"utils_list__4Mu4l",listItem:"utils_listItem__s2m6i",lightText:"utils_lightText__eUzGY",dotSeparator:"utils_dotSeparator__Ij4lk",marginTop2_25:"utils_marginTop2_25__bRt80",marginBottom1_25:"utils_marginBottom1_25__XjeT0",marginLeft0:"utils_marginLeft0__juPqQ",marginLeft0_5rem:"utils_marginLeft0_5rem__qnumX",marginLeft1rem:"utils_marginLeft1rem__gnB7J",marginTop0_5rem:"utils_marginTop0_5rem__E7OQF",marginBottom0_5rem:"utils_marginBottom0_5rem__dsxrK",cursorPointer:"utils_cursorPointer__oXutf",floatRight:"utils_floatRight__n_EZh",marginRight5px:"utils_marginRight5px__PM_rI",displayFlex:"utils_displayFlex__VCtvW",displayNone:"utils_displayNone__rveqn",heightMaxContent:"utils_heightMaxContent___v0jL",comingSoon:"utils_comingSoon__j1ohL"}}},function(e){e.O(0,[4824,9774,2888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);