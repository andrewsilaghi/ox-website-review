(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{192:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return E});a(50);var r=a(0),l=a.n(r),n=(a(231),a(203)),i=a(207),o=a(208),s=a(209),c=a(213),d=a.n(c),m=a(201),u=a(218),f=a.n(u),p=a(221);function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h={content:{top:"50%",width:"100%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};f.a.setAppElement(p.document.getElementById("yourAppElement"));var b=function(e){var t,a;function r(){var t;return(t=e.call(this)||this).state={modalIsOpen:!1},t.openModal=t.openModal.bind(g(t)),t.afterOpenModal=t.afterOpenModal.bind(g(t)),t.closeModal=t.closeModal.bind(g(t)),t}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var c=r.prototype;return c.openModal=function(){this.setState({modalIsOpen:!0})},c.afterOpenModal=function(){},c.closeModal=function(){this.setState({modalIsOpen:!1})},c.render=function(){var e=this,t=this.props.data.wordpressPost;return l.a.createElement("div",null,l.a.createElement(n.a,{color:"bg-black"}),l.a.createElement(i.a,{headerTitle:"Core Unites ipsum tempor amd consectetur sit.",headerSubTitle:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.",bg:t.featured_media.localFile.url}),t.acf&&t.acf.portfolio_page_building_blocks_post&&t.acf.portfolio_page_building_blocks_post.map(function(t,a){if("WordPressAcf_gallery"===t.__typename)return l.a.createElement(d.a,null,t.image_sliding_carousel.map(function(e){var t=e.localFile.url;return l.a.createElement(d.a.Item,null,l.a.createElement("img",{className:"h-100 w-100",src:t,alt:"First slide"}))}));if("WordPressAcf_about_page_staff_grid"===t.__typename)return l.a.createElement("div",{className:"bg-black"},l.a.createElement("div",{className:"container py-5"},l.a.createElement("h1",{className:"serif font-weight-bold text-center py-5 text-white"},"Our Team"),l.a.createElement("div",{className:"row px-5"},t.person.map(function(e){return l.a.createElement("div",{className:"col-md-3 my-4"},l.a.createElement("div",{className:"card bg-dark text-white"},l.a.createElement("img",{className:"card-img",src:e.headshot.localFile.url}),l.a.createElement("div",{className:"card-img-overlay d-flex flex-column justify-content-end"},l.a.createElement("h5",{className:"card-title serif bold"}," ",e.name),l.a.createElement("p",{className:"card-text person__title"},"Project Manager"))))}))));if("WordPressAcf_pull_quote"===t.__typename){var r=t.pull_quote_text,n=t.pull_quote_bg_color,i=t.pull_quote_text_color;return l.a.createElement(s.a,{quote:r,pqBgColor:n,textColor:i})}if("WordPressAcf_portfolio_brief"===t.__typename){var c=t.brief_intro,m=t.brief_title,u=t.brief_side_text_right,p=t.brief_side_text_left,g=t.brief_text_color,b=t.brief_bg_color;return l.a.createElement(o.a,{title:m,exerpt:c,bgColor:b,rightSideText:u,leftSideText:p,textColor:g})}if("WordPressAcf_full_width_banner"===t.__typename){var E=t.full_width_banner_img.localFile.url;return l.a.createElement("img",{className:"case-study__banner",src:E})}if("WordPressAcf_full_width_video"===t.__typename){var v=t.full_width_video_banner_jpg.localFile.url,y=t.full_width_video_banner_url;return l.a.createElement("div",null,l.a.createElement("div",{className:"video-banner"},l.a.createElement("img",{className:"video-banner-bg",src:v,alt:"Snow"}),l.a.createElement("button",{className:"open-modal",onClick:e.openModal},l.a.createElement("div",{className:"d-flex flex-row align-items-center"},l.a.createElement("div",{class:"style__VideoIconWrapper-sc-1jcsfwo-8 eTmNXU"},l.a.createElement("svg",{className:"style__VideoIcon-sc-1jcsfwo-9 ihnEFr",viewBox:"0 0 6 8"},l.a.createElement("path",{fillRule:"evenodd",d:"M5.92 3.843c.13.087.128.229 0 .314L.235 7.975C.104 8.06 0 8.015 0 7.857V.143C0-.009.107-.06.234.025L5.92 3.843z"}))),l.a.createElement("a",{className:"font-weight-bold video-banner__btn-text"},"WATCH VIDEO")))),l.a.createElement(f.a,{isOpen:e.state.modalIsOpen,onAfterOpen:e.afterOpenModal,onRequestClose:e.closeModal,style:h,contentLabel:"Example Modal"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("button",{className:"close-module",onClick:e.closeModal}),l.a.createElement("div",{class:"embed-responsive embed-responsive-21by9"},l.a.createElement("iframe",{class:"embed-responsive-item",src:y})))))}if("WordPressAcf_padded_image"===t.__typename){var w=t.padded_image_png.localFile.url,N=t.padded_image_background_color;return l.a.createElement("div",{style:{backgroundColor:N}},l.a.createElement("div",{className:"container padded-pic"},l.a.createElement("img",{className:"col-md-12",src:w})))}return null}),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row bg-grey text-white"},l.a.createElement("div",{className:"col-md-6 px-0"},l.a.createElement("img",{className:"next-post-img",src:"https://i.imgur.com/JaDLbfk.png"})),l.a.createElement("div",{className:"col-md-6 py-5 px-5 d-flex align-items-center"},l.a.createElement("div",null,l.a.createElement("h1",{className:"serif mb-4"},"Next Project")," ",l.a.createElement("hr",{className:"next-project-break"})," ",l.a.createElement("p",{className:"mt-4"},"Text on why they should check out the very next project. Text would go right here. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "))))),l.a.createElement(m.a,null))},r}(r.Component);t.default=b;var E="3126750108"},198:function(e,t,a){var r;e.exports=(r=a(200))&&r.default||r},199:function(e,t,a){"use strict";var r=a(0),l=a.n(r),n=a(66),i=a.n(n);a.d(t,"a",function(){return i.a});a(198),a(7).default.enqueue,l.a.createContext({})},200:function(e,t,a){"use strict";a.r(t);a(22);var r=a(0),l=a.n(r),n=a(95);t.default=function(e){var t=e.location,a=e.pageResources;return a?l.a.createElement(n.a,Object.assign({location:t,pageResources:a},a.json)):null}},201:function(e,t,a){"use strict";var r=a(0),l=a.n(r),n=(a(191),a(202)),i=a.n(n),o=a(210),s=a(211);a(205).b.add(s.a),t.a=function(){return l.a.createElement("footer",{className:"footer py-5"},l.a.createElement("div",{className:"container text-center text-md-left"},l.a.createElement("div",{className:"row footer-site-map padding-footer"},l.a.createElement("div",{className:"col-md-6 mt-0"},l.a.createElement("div",{className:"row "},l.a.createElement("a",{className:"call-to-action-btn"},l.a.createElement("h1",{className:"text-left serif font-weight-bold"},"Work with us!"),l.a.createElement("svg",{className:"arrow text-right",width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd"},l.a.createElement("path",{d:"M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"}))))),l.a.createElement("div",{className:"col-md-3 mb-md-0 mb-3"},l.a.createElement("h4",{className:"text-uppercase list-header color-orange"},"Our Office"),l.a.createElement("ul",{className:"list-unstyled footer-text font-weight-bold"},l.a.createElement("li",null,l.a.createElement("a",{href:"#!"},"1 Douglas Ave,")),l.a.createElement("li",null,l.a.createElement("a",{href:"#!"}," Elgin, IL 60120 ")),l.a.createElement("li",null,l.a.createElement("a",{href:"#!"},"United States")))),l.a.createElement("div",{className:"col-md-3 mb-md-0 mb-3"},l.a.createElement("h4",{className:"text-uppercase list-header color-orange"},"Contact"),l.a.createElement("ul",{className:"list-unstyled footer-text font-weight-bold"},l.a.createElement("li",null,l.a.createElement("a",{href:"#!"},"contact@oxcreates.com")),l.a.createElement("li",null,l.a.createElement("a",{href:"#!"},"(312) 945 6023"))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("img",{className:"my-auto md-auto footer-logo",src:i.a})),l.a.createElement("div",{className:"col-md-6 pull-right text-right"},l.a.createElement("div",{class:"text-left center-block footer__social-strip"},l.a.createElement("br",null),l.a.createElement("a",{href:"https://www.facebook.com/bootsnipp"},l.a.createElement(o.a,{icon:["fab","vimeo-square"],size:"2x",color:"#ff4729"})),l.a.createElement("a",{href:"https://twitter.com/bootsnipp"},l.a.createElement(o.a,{icon:["fab","dribbble"],size:"2x",color:"#ff4729"})),l.a.createElement("a",{href:"https://plus.google.com/+Bootsnipp-page"},l.a.createElement(o.a,{icon:["fab","instagram"],size:"2x",color:"#ff4729"})),l.a.createElement("a",{href:"mailto:bootsnipp@gmail.com"},l.a.createElement(o.a,{icon:["fab","linkedin"],size:"2x",color:"#ff4729"})))))))}},202:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAyCAYAAACj3t7EAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFIGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDgtMDFUMTQ6MDI6MjktMDU6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTA4LTE5VDEzOjA4OjI1LTA1OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTA4LTE5VDEzOjA4OjI1LTA1OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmQyZTM0NTMwLTVl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"},203:function(e,t,a){"use strict";var r=a(0),l=a.n(r),n=a(199),i=a(206),o=function(){return l.a.createElement(i.slide,{right:!0},l.a.createElement("a",{id:"home",className:"menu-item",href:"/"},"Home"),l.a.createElement("a",{id:"about",className:"menu-item",href:"/about"},"About"),l.a.createElement("a",{id:"contact",className:"menu-item",href:"/contact"},"Contact"),l.a.createElement("a",{className:"menu-item--small",href:""},"Settings"))};var s=function(e){var t,a;function r(){for(var t,a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(t=e.call.apply(e,[this].concat(r))||this).toggleBodyClass=function(){window.scrollY<100?document.nav.classList.add("bg-black"):document.nav.classList.remove("bg-black")},t}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=r.prototype;return i.componentDidMount=function(){window.addEventListener("scroll",this.toggleBodyClass),this.toggleBodyClass()},i.componentWillUnmount=function(){window.removeEventListener("scroll",this.toggleBodyClass)},i.render=function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand navbar-dark flex-column flex-md-row fixed-top"},l.a.createElement("div",{className:"container py-3",style:{color:"black"}},l.a.createElement(n.a,{className:"mx-auto d-block",to:"/"},l.a.createElement("img",{className:"my-auto",src:"http://andrewsilaghi.com/ox/wp-content/uploads/2019/08/ox-logo-lg.png",alt:"Logo",width:"50px"})))),l.a.createElement(o,null))},r}(r.Component);t.a=s},207:function(e,t,a){"use strict";var r=a(0),l=a.n(r);a(191);t.a=function(e){var t=e.bg,a=e.headerTitle,r=e.headerSubTitle;return l.a.createElement("div",{className:"jumbotron jumbotron-fluid d-flex align-content-end flex-wrap header",style:{backgroundImage:"url("+t+")"}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"text-white"},l.a.createElement("h1",{className:"col-md-8 text-white py-4 font-weight-bold header__title"},a))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"text-white"},l.a.createElement("p",{className:" col-md-10 text-uppercase header__sub-title"},r)))))}},208:function(e,t,a){"use strict";var r=a(0),l=a.n(r);a(191);t.a=function(e){var t=e.title,a=e.exerpt,r=e.bgColor,n=e.rightSideText,i=e.leftSideText,o=e.textColor;return l.a.createElement("div",{className:"case-study-brief case-study--padded",style:{backgroundColor:""+r,color:""+o}},l.a.createElement("div",{className:"container-fluid "},l.a.createElement("div",{className:"row"},l.a.createElement("h3",{className:"vrtcl-txt ml-0 col-md-2  font-weight-bold",style:{color:""+o},dangerouslySetInnerHTML:{__html:i}}),l.a.createElement("div",{className:"col-md-8"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-8"},l.a.createElement("h1",{className:" case-study-brief__title",dangerouslySetInnerHTML:{__html:t}}),l.a.createElement("hr",{className:"col-md-2 white"}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-7 text-white"},l.a.createElement("p",{className:"case-study-brief__description",dangerouslySetInnerHTML:{__html:a}})),l.a.createElement("div",{className:"col-md-3 offset-md-2 text-white"},l.a.createElement("h4",{className:" case-study-brief__services-title"},"SERVICES"),l.a.createElement("p",{className:"case-study-brief__services-list"},"Strategy | Creative Direction Branding | Copywriting | Design Custom Scoring | Motion Graphics Art Direction "))))),l.a.createElement("h3",{className:"vrtcl-txt-90 mr-0 col-md-2 font-weight-bold",style:{color:""+o},dangerouslySetInnerHTML:{__html:n}}))))}},209:function(e,t,a){"use strict";var r=a(0),l=a.n(r);a(191);t.a=function(e){var t=e.quote,a=e.pqBgColor,r=e.textColor;return l.a.createElement("div",{style:{backgroundColor:a}},l.a.createElement("div",{className:"container case-study-quote case-study--padded"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"offset-md-4 col-md-8 py-5"},l.a.createElement("hr",{style:{olor:r},className:"case-study-quote__line"}),l.a.createElement("h2",{style:{color:r},className:"serif case-study-quote__title font-weight-bold pb-3"},"Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolor."),l.a.createElement("p",{style:{color:r},className:"",dangerouslySetInnerHTML:{__html:t}})))))}},231:function(e,t,a){"use strict";a(29),a(30),a(14),a(93),a(143),a(232);var r=a(13);t.__esModule=!0,t.default=void 0;var l,n=r(a(73)),i=r(a(76)),o=r(a(135)),s=r(a(134)),c=r(a(0)),d=r(a(52)),m=function(e){var t=(0,s.default)({},e),a=t.resolutions,r=t.sizes,l=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),l&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},u=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},f=Object.create({}),p=function(e){var t=m(e),a=u(t);return f[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,E=new WeakMap;function v(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,l=e.media,n=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:l,srcSet:r,sizes:n}),c.default.createElement("source",{media:l,srcSet:a,sizes:n}))})}function y(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function w(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})})}function N(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})})}function S(e,t){var a=e.srcSet,r=e.srcSetWebp,l=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(l?'media="'+l+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var A=function(e,t){var a=(void 0===l&&"undefined"!=typeof window&&window.IntersectionObserver&&(l=new window.IntersectionObserver(function(e){e.forEach(function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(l.unobserve(e.target),E.delete(e.target),t())}})},{rootMargin:"200px"})),l);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",l=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',i=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?S(e,!0):"")+S(e)}).join("")+"<img "+c+i+o+a+r+t+n+l+s+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,l=e.spreadProps,n=c.default.createElement(_,(0,s.default)({src:t},l));return a.length>1?c.default.createElement("picture",null,r(a),n):n},_=c.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,l=e.src,n=e.style,i=e.onLoad,d=e.onError,m=e.loading,u=e.draggable,f=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,s.default)({sizes:a,srcSet:r,src:l},f,{onLoad:i,onError:d,ref:t,loading:m,draggable:u,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});_.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var M=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!g&&b&&!t.critical&&!a.seenBefore;var r=t.critical||"eager"==t.loading||h&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)((0,i.default)(a))),a.handleRef=a.handleRef.bind((0,i.default)((0,i.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=A(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=m(e),a=u(t),f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=m(this.props),t=e.title,a=e.alt,r=e.className,l=e.style,n=void 0===l?{}:l,i=e.imgStyle,o=void 0===i?{}:i,d=e.placeholderStyle,u=void 0===d?{}:d,f=e.placeholderClassName,p=e.fluid,g=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,E=e.Tag,y=e.itemProp,S=e.loading,A=e.draggable,M=!1===this.state.fadeIn||this.state.imgLoaded,L=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,s.default)({opacity:M?1:0,transition:L?"opacity "+b+"ms":"none"},o),C="boolean"==typeof h?"lightgray":h,T={transitionDelay:b+"ms"},k=(0,s.default)({opacity:this.state.imgLoaded?0:1},L&&T,o,u),O={title:t,alt:this.state.isVisible?"":a,style:k,className:f};if(p){var G=p,j=G[0];return c.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},c.default.createElement(E,{style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),C&&c.default.createElement(E,{title:t,style:(0,s.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&T)}),j.base64&&c.default.createElement(I,{src:j.base64,spreadProps:O,imageVariants:G,generateSources:N}),j.tracedSVG&&c.default.createElement(I,{src:j.tracedSVG,spreadProps:O,imageVariants:G,generateSources:w}),this.state.isVisible&&c.default.createElement("picture",null,v(G),c.default.createElement(_,{alt:a,title:t,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:A})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,s.default)({alt:a,title:t,loading:S},j,{imageVariants:G}))}}))}if(g){var W=g,Z=W[0],z=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:Z.width,height:Z.height},n);return"inherit"===n.display&&delete z.display,c.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:z,ref:this.handleRef,key:"fixed-"+JSON.stringify(Z.srcSet)},C&&c.default.createElement(E,{title:t,style:(0,s.default)({backgroundColor:C,width:Z.width,opacity:this.state.imgLoaded?0:1,height:Z.height},L&&T)}),Z.base64&&c.default.createElement(I,{src:Z.base64,spreadProps:O,imageVariants:W,generateSources:N}),Z.tracedSVG&&c.default.createElement(I,{src:Z.tracedSVG,spreadProps:O,imageVariants:W,generateSources:w}),this.state.isVisible&&c.default.createElement("picture",null,v(W),c.default.createElement(_,{alt:a,title:t,width:Z.width,height:Z.height,sizes:Z.sizes,src:Z.src,crossOrigin:this.props.crossOrigin,srcSet:Z.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:A})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,s.default)({alt:a,title:t,loading:S},Z,{imageVariants:W}))}}))}return null},t}(c.default.Component);M.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var L=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),R=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});M.propTypes={resolutions:L,sizes:R,fixed:d.default.oneOfType([L,d.default.arrayOf(L)]),fluid:d.default.oneOfType([R,d.default.arrayOf(R)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var C=M;t.default=C},232:function(e,t,a){"use strict";a(233)("fixed",function(e){return function(){return e(this,"tt","","")}})},233:function(e,t,a){var r=a(1),l=a(8),n=a(33),i=/"/g,o=function(e,t,a,r){var l=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(i,"&quot;")+'"'),o+">"+l+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*l(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}}}]);
//# sourceMappingURL=component---src-templates-post-js-cb301c8802aea49b5c8e.js.map