(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a0393706"],{"11b2":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{ref:"slotWrapper"},[t._t("default")],2)])},a=[],o={name:"relocator",props:{container:{default:"body"}},computed:{containerElem:function(){return"string"===typeof this.container?document.querySelector(this.container):this.container}},mounted:function(){var t=this;if(this.containerElem){var e=this.$refs.slotWrapper;e.parentNode.removeChild(e),this.containerElem.appendChild(e),this.$once("hook:beforeDestroy",(function(){e&&(e.parentNode.removeChild(e),t.$el.appendChild(e))}))}}},n=o,r=s("2877"),c=Object(r["a"])(n,i,a,!1,null,null,null);e["a"]=c.exports},"1efe":function(t,e,s){"use strict";s.d(e,"a",(function(){return d}));var i=s("d225"),a=s("b0b4"),o=s("308d"),n=s("6bb5"),r=s("2a88"),c=s("4e2b"),l=s("9242"),p=s("9300"),u=s("dd93"),d=function(t){function e(){return Object(i["a"])(this,e),Object(o["a"])(this,Object(n["a"])(e).apply(this,arguments))}return Object(c["a"])(e,t),Object(a["a"])(e,[{key:"load",value:function(t){t=t||{},Object(r["a"])(Object(n["a"])(e.prototype),"load",this).call(this,t),this.projectId=u["a"].isEmpty(t.projectId)?null:t.projectId,this.order=u["a"].isEmpty(t.order)?1:t.order<<0,this.title=u["a"].isEmpty(t.title)?"":t.title,this.description=u["a"].isEmpty(t.description)?"":t.description,u["a"].isArray(t.assets)?this.assets=p["a"].createInstances(t.assets):this.assets=this.assets||[]}}]),e}(l["a"])},3905:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"popupContainer",staticClass:"popup",class:{active:t.isActive,"is-closing":t.isClosing},attrs:{tabindex:"-1"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:e.target!==e.currentTarget?null:void(!t.closeOnEsc||t.close())}}},[s("div",{staticClass:"popup-overlay",on:{click:function(e){e.preventDefault(),!t.closeOnOverlay||t.close()}}}),s("div",{staticClass:"popup-panel"},[t.closeBtn?s("span",{staticClass:"popup-close-handle popup-close",on:{click:function(e){return e.preventDefault(),t.close()}}}):t._e(),s("div",{staticClass:"popup-header"},[t._t("header")],2),s("div",{staticClass:"popup-content"},[t._t("content")],2),s("div",{staticClass:"popup-footer"},[t._t("footer")],2)])])},a=[],o={name:"popup",props:{closeOnEsc:{type:Boolean,default:!0},closeOnOverlay:{type:Boolean,default:!0},closeBtn:{type:Boolean,default:!0}},data:function(){return{isActive:!1,isClosing:!1}},methods:{open:function(){var t=this;this.isActive=!0,this.isClosing=!1,this.$nextTick((function(){t.$refs.popupContainer.focus()})),document.body.classList.add("popup-active"),this.$nextTick((function(){var e=t.$el.querySelector("form input");e&&e.focus()}))},close:function(){var t=this;this.isActive&&(this.isClosing=!0,document.body.classList.remove("popup-active"),this.closingTimeoutId&&clearTimeout(this.closingTimeoutId),this.closingTimeoutId=setTimeout((function(){t.isActive=!1,t.isClosing=!1}),300))}}},n=o,r=s("2877"),c=Object(r["a"])(n,i,a,!1,null,null,null);e["a"]=c.exports},9300:function(t,e,s){"use strict";s.d(e,"a",(function(){return d}));s("28a5");var i=s("d225"),a=s("b0b4"),o=s("308d"),n=s("6bb5"),r=s("2a88"),c=s("4e2b"),l=s("9242"),p=s("dd93"),u=["png","jpg","jpeg","svg","bmp"],d=function(t){function e(){return Object(i["a"])(this,e),Object(o["a"])(this,Object(n["a"])(e).apply(this,arguments))}return Object(c["a"])(e,t),Object(a["a"])(e,[{key:"load",value:function(t){t=t||{},Object(r["a"])(Object(n["a"])(e.prototype),"load",this).call(this,t),this.guidelineSectionId=p["a"].isEmpty(t.guidelineSectionId)?null:t.guidelineSectionId,this.type=p["a"].isEmpty(t.type)?"file":t.type,this.order=p["a"].isEmpty(t.order)?1:t.order,this.hex=p["a"].isEmpty(t.hex)?"":t.hex,this.title=p["a"].isEmpty(t.title)?"":t.title,this.file=p["a"].isEmpty(t.file)?{}:t.file}},{key:"getFileUrl",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"original";return this.file[t]||this.file["original"]||""}},{key:"isFile",get:function(){return"file"===this.type}},{key:"isColor",get:function(){return"color"===this.type}},{key:"contrastHex",get:function(){return this.isColor?p["a"].getContrastHex(this.hex):""}},{key:"rgb",get:function(){var t=p["a"].hexToRgb(this.hex);return"rgb("+t.r+", "+t.g+", "+t.b+")"}},{key:"fileExtension",get:function(){return this.isFile&&this.file.original?this.file.original.split(".").pop():""}},{key:"isImage",get:function(){return this.isFile&&this.file.original&&u.indexOf(this.fileExtension)>=0}}]),e}(l["a"])},"9c86":function(t,e,s){"use strict";s.d(e,"a",(function(){return u}));var i=s("d225"),a=s("b0b4"),o=s("308d"),n=s("6bb5"),r=s("2a88"),c=s("4e2b"),l=s("9242"),p=s("dd93"),u=function(t){function e(){return Object(i["a"])(this,e),Object(o["a"])(this,Object(n["a"])(e).apply(this,arguments))}return Object(c["a"])(e,t),Object(a["a"])(e,[{key:"load",value:function(t){t=t||{},Object(r["a"])(Object(n["a"])(e.prototype),"load",this).call(this,t),this.title=p["a"].isEmpty(t.title)?"":t.title,this.archived=p["a"].isEmpty(t.archived)?0:t.archived<<0,this.featuredScreen=p["a"].isEmpty(t.featuredScreen)?{}:t.featuredScreen}},{key:"getFeaturedScreen",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"original";return this.featuredScreen[t]||this.featuredScreen["original"]||""}},{key:"isArchived",get:function(){return!!this.archived}}]),e}(l["a"])},ae26:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"guideline-section"},[s("header",{staticClass:"section-header"},[s("h5",{staticClass:"title"},[t._v(t._s(t.section.title))]),t.section.description?[t._v("\n            ("),s("div",{staticClass:"description"},[t._v(t._s(t.section.description))]),t._v(")\n        ")]:t._e(),s("div",{staticClass:"flex-fill-block"}),s("div",{staticClass:"ctrl-item toggle-ctrl",on:{click:function(e){return e.preventDefault(),t.toggleSection()}}},[t.collapsed?[s("span",{staticClass:"txt m-r-5 txt-default"},[t._v(t._s(t.$t("Expand")))]),s("i",{staticClass:"fe fe-chevron-down"})]:[s("span",{staticClass:"txt m-r-5"},[t._v(t._s(t.$t("Collapse")))]),s("i",{staticClass:"fe fe-chevron-up"})]],2)],2),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.collapsed,expression:"!collapsed"}],staticClass:"section-content"},[s("div",{staticClass:"boxes-list assets-list"},t._l(t.orderedAssets,(function(t){return s("asset-box-preview",{key:t.id,attrs:{asset:t}})})),1)])])},a=[],o=(s("55dd"),s("dd93")),n=s("1efe"),r=s("9300"),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box box-card box-compact",class:{"box-color":t.asset.isColor},on:{mouseleave:function(e){!t.$refs.assetDropdown||t.$refs.assetDropdown.hide()}}},[s("figure",{staticClass:"box-thumb",style:{background:t.asset.hex}},[t.asset.isFile?[s("div",{staticClass:"crop-wrapper"},[t.asset.isImage?s("img",{staticClass:"img",attrs:{src:t.asset.getFileUrl("medium"),alt:t.asset.title}}):s("span",{staticClass:"img img-alt"},[t._v(t._s(t.asset.fileExtension))])])]:t._e(),s("div",{staticClass:"thumb-overlay"},[t.asset.isImage?[s("div",{staticClass:"overlay-ctrl",on:{click:function(e){return e.preventDefault(),t.openPreviewPopup()}}}),s("div",{staticClass:"box-ctrl handle center",on:{click:function(e){return e.preventDefault(),t.openPreviewPopup()}}},[s("i",{staticClass:"fe fe-eye"})])]:t._e(),s("div",{staticClass:"box-ctrl handle top-right"},[s("i",{staticClass:"fe fe-more-horizontal",style:{color:t.asset.isColor?t.asset.contrastHex:null}}),s("toggler",{ref:"assetDropdown",staticClass:"dropdown dropdown-sm"},[t.asset.isFile?s("a",{staticClass:"dropdown-item",attrs:{href:t.asset.getFileUrl(),tabindex:"-1",download:"",target:"_blank",rel:"noopener"}},[s("i",{staticClass:"fe fe-download"}),s("span",{staticClass:"txt"},[t._v(t._s(t.$t("Download")))])]):t._e(),t.asset.isColor?s("div",{staticClass:"dropdown-item",on:{click:function(e){e.preventDefault(),t.copyToClipboard(t.asset.hex.toUpperCase())}}},[s("i",{staticClass:"fe fe-copy"}),s("span",{staticClass:"txt"},[t._v(t._s(t.$t("Copy"))+" HEX")])]):t._e(),t.asset.isColor?s("div",{staticClass:"dropdown-item",on:{click:function(e){e.preventDefault(),t.copyToClipboard(t.asset.rgb.toUpperCase())}}},[s("i",{staticClass:"fe fe-copy"}),s("span",{staticClass:"txt"},[t._v(t._s(t.$t("Copy"))+" RGB")])]):t._e()])],1)],2)],2),s("div",{staticClass:"box-content"},[t.asset.isFile?[t.asset.isImage?s("div",{staticClass:"title",attrs:{title:t.asset.title},on:{click:function(e){return e.preventDefault(),t.openPreviewPopup()}}},[t._v("\n                "+t._s(t.asset.title)+"\n            ")]):s("a",{staticClass:"title",attrs:{target:"_blank",rel:"noopener",download:"",href:t.asset.getFileUrl(),title:t.asset.title}},[t._v("\n                "+t._s(t.asset.title)+"\n            ")]),s("div",{staticClass:"meta"},[s("div",{staticClass:"meta-item txt-uppercase"},[t._v(t._s(t.asset.fileExtension))]),t.asset.isImage&&t.assetWidth>0&&t.assetHeight>0?s("div",{staticClass:"meta-item"},[t._v("\n                    "+t._s(t.assetWidth)+"x"+t._s(t.assetHeight)+"\n                ")]):t._e()])]:[s("div",{staticClass:"title cursor-default",attrs:{title:t.asset.title}},[t._v(t._s(t.asset.title))]),s("div",{staticClass:"meta"},[s("div",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:t.$t("Copy"),expression:"$t('Copy')",modifiers:{bottom:!0}}],staticClass:"meta-item",on:{click:function(e){e.preventDefault(),t.copyToClipboard(t.asset.hex.toUpperCase())}}},[t._v("\n                    "+t._s(t.asset.hex.toUpperCase())+"\n                ")]),s("div",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:t.$t("Copy"),expression:"$t('Copy')",modifiers:{bottom:!0}}],staticClass:"meta-item",on:{click:function(e){e.preventDefault(),t.copyToClipboard(t.asset.rgb.toUpperCase())}}},[t._v("\n                    "+t._s(t.asset.rgb.toUpperCase())+"\n                ")])])]],2),t.asset.isImage?s("relocator",[s("popup",{key:"asset_popup_"+t.asset.id,ref:"previewPopup",staticClass:"popup-image",scopedSlots:t._u([{key:"content",fn:function(){return[t.$refs.previewPopup&&t.$refs.previewPopup.isActive?s("img",{attrs:{src:t.asset.getFileUrl("original"),alt:t.asset.title}}):t._e()]},proxy:!0}],null,!1,4169098407)})],1):t._e()],1)},l=[],p=s("11b2"),u=s("3905"),d={name:"asset-box-preview",components:{relocator:p["a"],popup:u["a"]},props:{asset:{type:r["a"],required:!0}},data:function(){return{assetWidth:0,assetHeight:0}},mounted:function(){var t=this;this.asset.isImage&&o["a"].loadImage(this.asset.getFileUrl()).then((function(e){t.assetWidth=e.width,t.assetHeight=e.height}))},methods:{copyToClipboard:function(t){o["a"].copyToClipboard(t)?this.$toast(this.$t("Successfully copied {text} to clipboard.",{text:t})):this.$toast(this.$t("Failed copying {text} to clipboard.",{text:t}),"danger")},openPreviewPopup:function(){this.$refs.previewPopup&&this.$refs.previewPopup.open()},closePreviewPopup:function(){this.$refs.previewPopup&&this.$refs.previewPopup.close()}}},v=d,f=s("2877"),h=Object(f["a"])(v,c,l,!1,null,null,null),g=h.exports,m={name:"guideline-section-preview",props:{section:{type:n["a"],required:!0}},components:{"asset-box-preview":g},data:function(){return{collapsed:!1}},computed:{orderedAssets:function(){return this.section.assets.slice().sort((function(t,e){return t["order"]-e["order"]}))}},methods:{toggleSection:function(){this.collapsed=!this.collapsed}}},C=m,b=Object(f["a"])(C,i,a,!1,null,null,null);e["a"]=b.exports},aef6:function(t,e,s){"use strict";var i=s("5ca1"),a=s("9def"),o=s("d2c8"),n="endsWith",r=""[n];i(i.P+i.F*s("5147")(n),"String",{endsWith:function(t){var e=o(this,t,n),s=arguments.length>1?arguments[1]:void 0,i=a(e.length),c=void 0===s?i:Math.min(a(s),i),l=String(t);return r?r.call(e,l,c):e.slice(c-l.length,c)===l}})},ba5d:function(t,e,s){"use strict";s.d(e,"a",(function(){return d}));s("aef6");var i=s("d225"),a=s("b0b4"),o=s("308d"),n=s("6bb5"),r=s("2a88"),c=s("4e2b"),l=s("9242"),p=s("72a1"),u=s("dd93"),d=function(t){function e(){return Object(i["a"])(this,e),Object(o["a"])(this,Object(n["a"])(e).apply(this,arguments))}return Object(c["a"])(e,t),Object(a["a"])(e,[{key:"load",value:function(t){t=t||{},Object(r["a"])(Object(n["a"])(e.prototype),"load",this).call(this,t),this.projectId=u["a"].isEmpty(t.projectId)?null:t.projectId,this.slug=u["a"].isEmpty(t.slug)?"":t.slug,this.passwordProtected=!!t.passwordProtected,this.allowComments=!!t.allowComments,this.allowGuideline=!!t.allowGuideline,u["a"].isArray(t.prototypes)?this.prototypes=p["a"].createInstances(t.prototypes):this.prototypes=this.prototypes||[]}},{key:"baseUrl",get:function(){var t=u["a"].getNestedVal(window,"location.origin","");return u["a"].getNestedVal(window,"location.href","").indexOf("/#/")>0&&(t+="/#"),t=t.endsWith("/")?t.substring(0,t.length-1):t,t}},{key:"fullUrl",get:function(){return this.baseUrl+"/"+this.slug}},{key:"prototypeIds",get:function(){var t=[];for(var e in this.prototypes)this.prototypes[e].id&&t.push(this.prototypes[e].id);return t}}]),e}(l["a"])},db9e:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"floating-bar preview-bar",class:{active:t.isActive,"responsive-show-more":t.isResponsiveShowMoreActive}},[s("div",{staticClass:"visibility-toggle",on:{click:function(e){return e.preventDefault(),t.toggle()}}},[s("span",{staticClass:"txt"},[t._v(t._s(t.isActive?t.$t("Hide"):t.$t("Show")))])]),s("div",{staticClass:"nav nav-left"},[t._t("left")],2),s("div",{staticClass:"nav nav-center"},[t.projectLink.allowGuideline?s("router-link",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:t.$t("Guideline ({shortcut})",{shortcut:"G"}),expression:"$t('Guideline ({shortcut})', {shortcut: 'G'})",modifiers:{top:!0}},{name:"shortcut",rawName:"v-shortcut.71",value:t.selfClick,expression:"selfClick",modifiers:{71:!0}}],staticClass:"ctrl-item ctrl-item-circle ctrl-item-warning",attrs:{to:{name:"preview-guideline",params:{slug:t.projectLink.slug},query:{}},"active-class":"highlight"}},[s("i",{staticClass:"fe fe-book-open"})]):t._e(),s("router-link",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:t.$t("Preview mode ({shortcut})",{shortcut:"P"}),expression:"$t('Preview mode ({shortcut})', {shortcut: 'P'})",modifiers:{top:!0}},{name:"shortcut",rawName:"v-shortcut.80",value:t.selfClick,expression:"selfClick",modifiers:{80:!0}}],staticClass:"ctrl-item ctrl-item-circle ctrl-item-success",attrs:{to:{name:"preview-prototype",params:Object.assign({},t.$route.params,{slug:t.projectLink.slug,prototypeId:t.activePrototypeId}),query:Object.assign({},t.$route.query,{mode:"preview"})},"exact-active-class":"highlight"}},[s("i",{staticClass:"fe fe-eye"})]),t.projectLink.allowComments?s("router-link",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:t.$t("Comments mode ({shortcut})",{shortcut:"C"}),expression:"$t('Comments mode ({shortcut})', {shortcut: 'C'})",modifiers:{top:!0}},{name:"shortcut",rawName:"v-shortcut.67",value:t.selfClick,expression:"selfClick",modifiers:{67:!0}}],staticClass:"ctrl-item ctrl-item-circle ctrl-item-danger",attrs:{to:{name:"preview-prototype",params:Object.assign({},t.$route.params,{slug:t.projectLink.slug,prototypeId:t.activePrototypeId}),query:Object.assign({},t.$route.query,{mode:"comments"})},"exact-active-class":"highlight"}},[t.activeUnreadComments.length?s("span",{staticClass:"beacon beacon-danger"}):t._e(),s("i",{staticClass:"fe fe-message-circle"})]):t._e(),s("div",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:t.$t("More tools"),expression:"$t('More tools')",modifiers:{top:!0}}],staticClass:"ctrl-item ctrl-item-circle ctrl-item-responsive-show-more responsive-only",on:{click:function(e){return e.preventDefault(),t.responsiveShowMore(e)}}},[s("i",{staticClass:"fe fe-more-horizontal"})])],1),s("div",{staticClass:"nav nav-right"},[t._t("right"),s("div",{staticClass:"ctrl-item ctrl-item-circle ctrl-item-settings"},[s("div",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:t.$t("Preview info"),expression:"$t('Preview info')",modifiers:{top:!0}}]},[s("i",{staticClass:"fe fe-info"})]),s("preview-info-popover",{ref:"projectInfoPopover",staticClass:"transform-bottom-right",attrs:{project:t.project}})],1),s("div",{staticClass:"flex-fill-block responsive-only"}),s("div",{staticClass:"ctrl-item ctrl-item-circle ctrl-item-responsive-hide-more responsive-only",on:{click:function(e){return e.preventDefault(),t.responsiveHideMore(e)}}},[s("i",{staticClass:"fe fe-x"})])],2)])},a=[],o=(s("8e6e"),s("ac6a"),s("456d"),s("bd86")),n=s("2f62"),r=s("0abc"),c=s("3d48"),l=s("9c86"),p=s("ba5d"),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("toggler",{staticClass:"popover popover-sm preview-info-popover no-clip",attrs:{hideOnChildClick:!1}},[s("div",{staticClass:"content m-b-small txt-center"},[s("p",[s("strong",[t._v(t._s(t.project.title))])]),t.$getAppConfig("VUE_APP_PROJECT_URL")?s("p",{staticClass:"txt-hint txt-small"},[s("i18n",{attrs:{path:"Presented with {projectLink}."}},[s("a",{attrs:{slot:"projectLink",href:t.$getAppConfig("VUE_APP_PROJECT_URL"),target:"_blank",rel:"noopener"},slot:"projectLink"},[t._v("Presentator")])])],1):t._e(),s("div",{staticClass:"clearfix m-t-small"}),s("language-select")],1)])},d=[],v=s("f7ef"),f={name:"preview-info-popover",components:{"language-select":v["a"]},props:{project:{type:l["a"],required:!0}}},h=f,g=s("2877"),m=Object(g["a"])(h,u,d,!1,null,null,null),C=m.exports;function b(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function y(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?b(s,!0).forEach((function(e){Object(o["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):b(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var _={name:"preview-bar",components:{"preview-info-popover":C},props:{project:{type:l["a"],required:!0},projectLink:{type:p["a"],required:!0}},data:function(){return{isActive:!0,isResponsiveShowMoreActive:!1}},computed:y({},Object(n["d"])({activePrototypeId:function(t){return t.prototypes.activePrototypeId},activeScreenId:function(t){return t.screens.activeScreenId}}),{},Object(n["c"])({getUnreadCommentsForScreen:"notifications/getUnreadCommentsForScreen"}),{activeUnreadComments:function(){return this.getUnreadCommentsForScreen(this.activeScreenId)}}),mounted:function(){var t=c["a"].getItem(r["a"].get("VUE_APP_PREVIEW_BAR_VISIBLITY_STORAGE_KEY"),!0);t?this.show():this.hide()},methods:{show:function(){this.isActive=!0,c["a"].setItem(r["a"].get("VUE_APP_PREVIEW_BAR_VISIBLITY_STORAGE_KEY"),!0),this.responsiveHideMore(),this.$emit("show")},hide:function(){this.isActive=!1,c["a"].setItem(r["a"].get("VUE_APP_PREVIEW_BAR_VISIBLITY_STORAGE_KEY"),!1),this.responsiveHideMore(),this.$emit("hide")},toggle:function(){this.isActive?this.hide():this.show()},responsiveShowMore:function(){this.isResponsiveShowMoreActive=!0},responsiveHideMore:function(){this.isResponsiveShowMoreActive=!1},goToGuideline:function(){this.$router.push({name:"preview-guideline",params:{slug:this.projectLink.slug}})},selfClick:function(t,e){e&&e.click()}}},w=_,x=Object(g["a"])(w,i,a,!1,null,null,null);e["a"]=x.exports},f7ef:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"languages-select",class:{loading:t.isChanging}},[s("div",{staticClass:"selected-language"},[s("span",{staticClass:"txt language-title"},[t._v(t._s(t.activeLanguageTitle))]),t._v("\n        ("),s("span",{staticClass:"txt language-code"},[t._v(t._s(t.activeLanguageCode))]),t._v(")\n    ")]),s("toggler",{staticClass:"dropdown dropdown-sm"},t._l(t.languages,(function(e,i){return s("div",{key:"language_"+i,staticClass:"dropdown-item",class:{active:t.activeLanguageCode==i},on:{click:function(e){return e.preventDefault(),t.changeLanguage(i)}}},[s("small",{staticClass:"label language-code m-r-5",class:t.activeLanguageCode==i?"label-transp-primary":"label-light-border"},[t._v(t._s(i))]),s("span",{staticClass:"txt language-title"},[t._v(t._s(e))])])})),0)],1)},a=[],o=s("9225"),n={name:"languages-select",data:function(){return{isChanging:!1,languages:Object.assign({},o["c"])}},watch:{"$i18n.locale":function(t,e){"function"===typeof document._titleFunc&&this.$setDocumentTitle(document._titleFunc)}},computed:{activeLanguageCode:function(){return this.$i18n.locale},activeLanguageTitle:function(){return this.languages[this.activeLanguageCode]}},methods:{changeLanguage:function(t){var e=this;this.isChanging=!0,Object(o["a"])(t).finally((function(){e.isChanging=!1}))}}},r=n,c=s("2877"),l=Object(c["a"])(r,i,a,!1,null,null,null);e["a"]=l.exports}}]);