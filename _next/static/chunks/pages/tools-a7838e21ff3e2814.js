(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9289],{4565:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools",function(){return n(3197)}])},4328:function(e,t,n){"use strict";n.d(t,{Z:function(){return m},y:function(){return _}});var r=n(5893),o=n(9008),i=n(1664),a=n(5787),s=n.n(a),l=(new Date).getFullYear(),c=function(){return(0,r.jsx)("footer",{className:s().FooterContainer,children:(0,r.jsxs)("div",{className:s().Footer,children:[(0,r.jsxs)("div",{className:s().SocialLinkWrapper,children:[(0,r.jsx)("a",{href:"https://www.linkedin.com/in/bradley-schoeneweis/",target:"_blank",rel:"noreferrer",children:(0,r.jsx)("img",{width:"16",src:"/icons/linkedin.svg",alt:"linkedin logo",className:s().SocialLinkLogo})}),(0,r.jsx)("a",{href:"https://github.com/bschoeneweis",target:"_blank",rel:"noreferrer",children:(0,r.jsx)("img",{width:"16",src:"/icons/github.svg",alt:"github logo",className:s().SocialLinkLogo})}),(0,r.jsx)("a",{href:"/feed.xml",children:(0,r.jsx)("img",{width:"16",src:"/icons/rss.svg",alt:"rss logo",className:s().SocialLinkLogo})})]}),(0,r.jsx)("div",{className:s().CopyrightWrapper,children:(0,r.jsxs)("small",{children:["\xa9 ",(0,r.jsx)("time",{children:l})," Bradley Schoeneweis"]})})]})})},u=n(1389),f=n.n(u),_="Bradley Schoeneweis",d="Bradley Schoeneweis",m=function(e){var t,n=e.children,a=e.home,s=e.tagPage,l=e.title,u=e.description;s&&(t=(0,r.jsx)(i.default,{href:"/tags",children:(0,r.jsx)("a",{children:"View all tags"})}));var m=function(e){return"https://og-image.vercel.app/".concat(encodeURI(e),".png?theme=light&md=1&fontSize=50px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg&widths=350&heights=350")}(l||_),h=u||"Bradley Schoeneweis";return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:a?f().HomeContainer:f().ArticleContainer,children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>\ud83d\udc4b</text></svg>"}),(0,r.jsx)("meta",{name:"description",content:h}),(0,r.jsx)("meta",{property:"og:image",content:m}),(0,r.jsx)("meta",{name:"robots",content:"follow, index"}),(0,r.jsx)("meta",{name:"og:title",content:l||_}),(0,r.jsx)("meta",{property:"og:site_name",content:l||_}),(0,r.jsx)("meta",{property:"og:description",content:h}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:site",content:"@bschoeneweis"}),(0,r.jsx)("meta",{name:"twitter:title",content:d}),(0,r.jsx)("meta",{name:"twitter:description",content:h}),(0,r.jsx)("meta",{name:"twitter:image",content:m}),(0,r.jsx)("title",{children:l||_})]}),(0,r.jsxs)("header",{children:[a&&(0,r.jsx)("h1",{className:f().HomeName,children:d}),!a&&(0,r.jsxs)("div",{className:f().LayoutLinks,children:[(0,r.jsx)(i.default,{href:"/",children:(0,r.jsx)("a",{children:"\u2190 Back home"})}),t]})]}),(0,r.jsx)("main",{children:n})]}),(0,r.jsx)(c,{home:a})]})}},8418:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){o=!0,i=l}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var o,i=(o=n(7294))&&o.__esModule?o:{default:o},a=n(6273),s=n(387),l=n(7190);var c={};function u(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=s.useRouter(),f=i.default.useMemo((function(){var t=r(a.resolveHref(o,e.href,!0),2),n=t[0],i=t[1];return{href:n,as:e.as?a.resolveHref(o,e.as):i||n}}),[o,e.href,e.as]),_=f.href,d=f.as,m=e.children,h=e.replace,g=e.shallow,p=e.scroll,v=e.locale;"string"===typeof m&&(m=i.default.createElement("a",null,m));var x=(t=i.default.Children.only(m))&&"object"===typeof t&&t.ref,y=r(l.useIntersection({rootMargin:"200px"}),2),j=y[0],w=y[1],L=i.default.useCallback((function(e){j(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,j]);i.default.useEffect((function(){var e=w&&n&&a.isLocalURL(_),t="undefined"!==typeof v?v:o&&o.locale,r=c[_+"%"+d+(t?"%"+t:"")];e&&!r&&u(o,_,d,{locale:t})}),[d,_,w,v,n,o]);var b={ref:L,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,s,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),t[o?"replace":"push"](n,r,{shallow:i,locale:l,scroll:s}))}(e,o,_,d,h,g,p,v)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),a.isLocalURL(_)&&u(o,_,d,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof v?v:o&&o.locale,C=o&&o.isLocaleDomain&&a.getDomainLocale(d,k,o&&o.locales,o&&o.domainLocales);b.href=C||a.addBasePath(a.addLocale(d,k,o&&o.defaultLocale))}return i.default.cloneElement(t,b)};t.default=f},7190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){o=!0,i=l}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,l=o.useRef(),c=r(o.useState(!1),2),u=c[0],f=c[1],_=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||u||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),s.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,u]);return o.useEffect((function(){if(!a&&!u){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[u]),[_,u]};var o=n(7294),i=n(9311),a="undefined"!==typeof IntersectionObserver;var s=new Map},3197:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=n(4328),i=n(5794),a=n.n(i);t.default=function(){var e="Tools";return(0,r.jsx)(o.Z,{title:e,description:e,children:(0,r.jsx)("main",{children:(0,r.jsx)("h1",{className:a().comingSoon,children:"Coming soon \ud83d\udc40"})})})}},5787:function(e){e.exports={Footer:"footer_Footer__wsKMY",CopyrightWrapper:"footer_CopyrightWrapper__NZEPb",SocialLinkLogo:"footer_SocialLinkLogo__OWB_i",SocialLinkWrapper:"footer_SocialLinkWrapper__0F2i_",FooterContainer:"footer_FooterContainer__oKXDJ"}},1389:function(e){e.exports={HomeContainer:"layout_HomeContainer__SNdVI",ArticleContainer:"layout_ArticleContainer__QR4qB",header:"layout_header__H1FPN",LayoutLinks:"layout_LayoutLinks__92rCe",HomeName:"layout_HomeName__6eG6F"}},5794:function(e){e.exports={heading2Xl:"utils_heading2Xl___9fFP",headingXl:"utils_headingXl__u25Y2",headingLg:"utils_headingLg__5535D",headingMd:"utils_headingMd__gD1Ok",borderCircle:"utils_borderCircle__s2nTm",colorInherit:"utils_colorInherit__mSH_x",padding1px:"utils_padding1px__PWQKR",padding1rem:"utils_padding1rem__xPN3e",list:"utils_list__4Mu4l",listItem:"utils_listItem__s2m6i",lightText:"utils_lightText__eUzGY",dotSeparator:"utils_dotSeparator__Ij4lk",marginTop2_25:"utils_marginTop2_25__bRt80",marginBottom1_25:"utils_marginBottom1_25__XjeT0",marginLeft0:"utils_marginLeft0__juPqQ",marginLeft0_5rem:"utils_marginLeft0_5rem__qnumX",marginLeft1rem:"utils_marginLeft1rem__gnB7J",marginTop0_5rem:"utils_marginTop0_5rem__E7OQF",marginBottom0_5rem:"utils_marginBottom0_5rem__dsxrK",cursorPointer:"utils_cursorPointer__oXutf",floatRight:"utils_floatRight__n_EZh",marginRight5px:"utils_marginRight5px__PM_rI",displayFlex:"utils_displayFlex__VCtvW",displayNone:"utils_displayNone__rveqn",heightMaxContent:"utils_heightMaxContent___v0jL",comingSoon:"utils_comingSoon__j1ohL"}},1664:function(e,t,n){e.exports=n(8418)}},function(e){e.O(0,[9774,2888,179],(function(){return t=4565,e(e.s=t);var t}));var t=e.O();_N_E=t}]);