(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{118:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.editorOptions=["minLines","maxLines","readOnly","highlightActiveLine","tabSize","enableBasicAutocompletion","enableLiveAutocompletion","enableSnippets"];t.editorEvents=["onChange","onFocus","onInput","onBlur","onCopy","onPaste","onSelectionChange","onCursorChange","onScroll","handleOptions","updateRef"];t.getAceInstance=function(){var e;return window.ace?(e=window.ace).acequire=window.ace.require||window.ace.acequire:e=o(119),e};t.debounce=function(e,t){var o=null;return function(){var n=this,r=arguments;clearTimeout(o),o=setTimeout((function(){e.apply(n,r)}),t)}}},120:function(e,t,o){"use strict";var n=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var i=o(118),s=i.getAceInstance(),a=o(119),p=o(124),l=o(5),h=o(1),c=o(117),d=o(125),u=function(e){function t(t){var o=e.call(this,t)||this;return i.editorEvents.forEach((function(e){o[e]=o[e].bind(o)})),o.debounce=i.debounce,o}return n(t,e),t.prototype.componentDidMount=function(){var e=this,t=this.props,o=t.className,n=t.onBeforeLoad,r=t.mode,a=t.focus,l=t.theme,h=t.fontSize,c=t.value,u=t.defaultValue,f=t.cursorStart,g=t.showGutter,m=t.wrapEnabled,y=t.showPrintMargin,b=t.scrollMargin,v=void 0===b?[0,0,0,0]:b,S=t.keyboardHandler,w=t.onLoad,O=t.commands,C=t.annotations,P=t.markers,M=t.splits;this.editor=s.edit(this.refEditor),n&&n(s);var L=Object.keys(this.props.editorProps),E=new p.Split(this.editor.container,"ace/theme/"+l,M);this.editor.env.split=E,this.splitEditor=E.getEditor(0),this.split=E,this.editor.setShowPrintMargin(!1),this.editor.renderer.setShowGutter(!1);var k=this.splitEditor.$options;this.props.debounceChangePeriod&&(this.onChange=this.debounce(this.onChange,this.props.debounceChangePeriod)),E.forEach((function(t,o){for(var n=0;n<L.length;n++)t[L[n]]=e.props.editorProps[L[n]];var a=d(u,o),p=d(c,o,"");t.session.setUndoManager(new s.UndoManager),t.setTheme("ace/theme/"+l),t.renderer.setScrollMargin(v[0],v[1],v[2],v[3]),t.getSession().setMode("ace/mode/"+r),t.setFontSize(h),t.renderer.setShowGutter(g),t.getSession().setUseWrapMode(m),t.setShowPrintMargin(y),t.on("focus",e.onFocus),t.on("blur",e.onBlur),t.on("input",e.onInput),t.on("copy",e.onCopy),t.on("paste",e.onPaste),t.on("change",e.onChange),t.getSession().selection.on("changeSelection",e.onSelectionChange),t.getSession().selection.on("changeCursor",e.onCursorChange),t.session.on("changeScrollTop",e.onScroll),t.setValue(void 0===a?p:a,f);var b=d(C,o,[]),w=d(P,o,[]);t.getSession().setAnnotations(b),w&&w.length>0&&e.handleMarkers(w,t);for(n=0;n<i.editorOptions.length;n++){var M=i.editorOptions[n];k.hasOwnProperty(M)?t.setOption(M,e.props[M]):e.props[M]&&console.warn("ReaceAce: editor option "+M+" was activated but not found. Did you need to import a related tool or did you possibly mispell the option?")}e.handleOptions(e.props,t),Array.isArray(O)&&O.forEach((function(e){"string"===typeof e.exec?t.commands.bindKey(e.bindKey,e.exec):t.commands.addCommand(e)})),S&&t.setKeyboardHandler("ace/keyboard/"+S)})),o&&(this.refEditor.className+=" "+o),a&&this.splitEditor.focus();var _=this.editor.env.split;_.setOrientation("below"===this.props.orientation?_.BELOW:_.BESIDE),_.resize(!0),w&&w(_)},t.prototype.componentDidUpdate=function(e){var t=this,o=e,n=this.props,r=this.editor.env.split;if(n.splits!==o.splits&&r.setSplits(n.splits),n.orientation!==o.orientation&&r.setOrientation("below"===n.orientation?r.BELOW:r.BESIDE),r.forEach((function(e,r){n.mode!==o.mode&&e.getSession().setMode("ace/mode/"+n.mode),n.keyboardHandler!==o.keyboardHandler&&(n.keyboardHandler?e.setKeyboardHandler("ace/keyboard/"+n.keyboardHandler):e.setKeyboardHandler(null)),n.fontSize!==o.fontSize&&e.setFontSize(n.fontSize),n.wrapEnabled!==o.wrapEnabled&&e.getSession().setUseWrapMode(n.wrapEnabled),n.showPrintMargin!==o.showPrintMargin&&e.setShowPrintMargin(n.showPrintMargin),n.showGutter!==o.showGutter&&e.renderer.setShowGutter(n.showGutter);for(var s=0;s<i.editorOptions.length;s++){var a=i.editorOptions[s];n[a]!==o[a]&&e.setOption(a,n[a])}c(n.setOptions,o.setOptions)||t.handleOptions(n,e);var p=d(n.value,r,"");if(e.getValue()!==p){t.silent=!0;var l=e.session.selection.toJSON();e.setValue(p,n.cursorStart),e.session.selection.fromJSON(l),t.silent=!1}var h=d(n.annotations,r,[]),u=d(o.annotations,r,[]);c(h,u)||e.getSession().setAnnotations(h);var f=d(n.markers,r,[]),g=d(o.markers,r,[]);!c(f,g)&&Array.isArray(f)&&t.handleMarkers(f,e)})),n.className!==o.className){var s=this.refEditor.className.trim().split(" ");o.className.trim().split(" ").forEach((function(e){var t=s.indexOf(e);s.splice(t,1)})),this.refEditor.className=" "+n.className+" "+s.join(" ")}n.theme!==o.theme&&r.setTheme("ace/theme/"+n.theme),n.focus&&!o.focus&&this.splitEditor.focus(),n.height===this.props.height&&n.width===this.props.width||this.editor.resize()},t.prototype.componentWillUnmount=function(){this.editor.destroy(),this.editor=null},t.prototype.onChange=function(e){if(this.props.onChange&&!this.silent){var t=[];this.editor.env.split.forEach((function(e){t.push(e.getValue())})),this.props.onChange(t,e)}},t.prototype.onSelectionChange=function(e){if(this.props.onSelectionChange){var t=[];this.editor.env.split.forEach((function(e){t.push(e.getSelection())})),this.props.onSelectionChange(t,e)}},t.prototype.onCursorChange=function(e){if(this.props.onCursorChange){var t=[];this.editor.env.split.forEach((function(e){t.push(e.getSelection())})),this.props.onCursorChange(t,e)}},t.prototype.onFocus=function(e){this.props.onFocus&&this.props.onFocus(e)},t.prototype.onInput=function(e){this.props.onInput&&this.props.onInput(e)},t.prototype.onBlur=function(e){this.props.onBlur&&this.props.onBlur(e)},t.prototype.onCopy=function(e){this.props.onCopy&&this.props.onCopy(e)},t.prototype.onPaste=function(e){this.props.onPaste&&this.props.onPaste(e)},t.prototype.onScroll=function(){this.props.onScroll&&this.props.onScroll(this.editor)},t.prototype.handleOptions=function(e,t){for(var o=Object.keys(e.setOptions),n=0;n<o.length;n++)t.setOption(o[n],e.setOptions[o[n]])},t.prototype.handleMarkers=function(e,t){var o=t.getSession().getMarkers(!0);for(var n in o)o.hasOwnProperty(n)&&t.getSession().removeMarker(o[n].id);for(var n in o=t.getSession().getMarkers(!1))o.hasOwnProperty(n)&&t.getSession().removeMarker(o[n].id);e.forEach((function(e){var o=e.startRow,n=e.startCol,r=e.endRow,i=e.endCol,s=e.className,p=e.type,l=e.inFront,h=void 0!==l&&l,c=new a.Range(o,n,r,i);t.getSession().addMarker(c,s,p,h)}))},t.prototype.updateRef=function(e){this.refEditor=e},t.prototype.render=function(){var e=this.props,t=e.name,o=e.width,n=e.height,i=e.style,s=r({width:o,height:n},i);return h.createElement("div",{ref:this.updateRef,id:t,style:s})},t.propTypes={className:l.string,debounceChangePeriod:l.number,defaultValue:l.arrayOf(l.string),focus:l.bool,fontSize:l.oneOfType([l.number,l.string]),height:l.string,mode:l.string,name:l.string,onBlur:l.func,onChange:l.func,onCopy:l.func,onFocus:l.func,onInput:l.func,onLoad:l.func,onPaste:l.func,onScroll:l.func,orientation:l.string,showGutter:l.bool,splits:l.number,theme:l.string,value:l.arrayOf(l.string),width:l.string,onSelectionChange:l.func,onCursorChange:l.func,onBeforeLoad:l.func,minLines:l.number,maxLines:l.number,readOnly:l.bool,highlightActiveLine:l.bool,tabSize:l.number,showPrintMargin:l.bool,cursorStart:l.number,editorProps:l.object,setOptions:l.object,style:l.object,scrollMargin:l.array,annotations:l.array,markers:l.array,keyboardHandler:l.string,wrapEnabled:l.bool,enableBasicAutocompletion:l.oneOfType([l.bool,l.array]),enableLiveAutocompletion:l.oneOfType([l.bool,l.array]),commands:l.array},t.defaultProps={name:"ace-editor",focus:!1,orientation:"beside",splits:2,mode:"",theme:"",height:"500px",width:"500px",value:[],fontSize:12,showGutter:!0,onChange:null,onPaste:null,onLoad:null,onScroll:null,minLines:null,maxLines:null,readOnly:!1,highlightActiveLine:!0,showPrintMargin:!0,tabSize:4,cursorStart:1,editorProps:{},style:{},scrollMargin:[0,0,0,0],setOptions:{},wrapEnabled:!1,enableBasicAutocompletion:!1,enableLiveAutocompletion:!1},t}(h.Component);t.default=u},121:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(122),r=o(123);t.diff=r.default;var i=o(120);t.split=i.default,t.default=n.default},122:function(e,t,o){"use strict";var n=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var i=o(5),s=o(1),a=o(117),p=o(118),l=p.getAceInstance(),h=l.require("ace/range").Range,c=function(e){function t(t){var o=e.call(this,t)||this;return p.editorEvents.forEach((function(e){o[e]=o[e].bind(o)})),o.debounce=p.debounce,o}return n(t,e),t.prototype.componentDidMount=function(){var e=this,t=this.props,o=t.className,n=t.onBeforeLoad,r=t.onValidate,i=t.mode,s=t.focus,a=t.theme,h=t.fontSize,c=t.value,d=t.defaultValue,u=t.cursorStart,f=t.showGutter,g=t.wrapEnabled,m=t.showPrintMargin,y=t.scrollMargin,b=void 0===y?[0,0,0,0]:y,v=t.keyboardHandler,S=t.onLoad,w=t.commands,O=t.annotations,C=t.markers,P=t.placeholder;this.editor=l.edit(this.refEditor),n&&n(l);for(var M=Object.keys(this.props.editorProps),L=0;L<M.length;L++)this.editor[M[L]]=this.props.editorProps[M[L]];this.props.debounceChangePeriod&&(this.onChange=this.debounce(this.onChange,this.props.debounceChangePeriod)),this.editor.renderer.setScrollMargin(b[0],b[1],b[2],b[3]),this.editor.getSession().setMode("ace/mode/"+i),this.editor.setTheme("ace/theme/"+a),this.editor.setFontSize(h),this.editor.getSession().setValue(d||c,u),this.props.navigateToFileEnd&&this.editor.navigateFileEnd(),this.editor.renderer.setShowGutter(f),this.editor.getSession().setUseWrapMode(g),this.editor.setShowPrintMargin(m),this.editor.on("focus",this.onFocus),this.editor.on("blur",this.onBlur),this.editor.on("copy",this.onCopy),this.editor.on("paste",this.onPaste),this.editor.on("change",this.onChange),this.editor.on("input",this.onInput),P&&this.updatePlaceholder(),this.editor.getSession().selection.on("changeSelection",this.onSelectionChange),this.editor.getSession().selection.on("changeCursor",this.onCursorChange),r&&this.editor.getSession().on("changeAnnotation",(function(){var t=e.editor.getSession().getAnnotations();e.props.onValidate(t)})),this.editor.session.on("changeScrollTop",this.onScroll),this.editor.getSession().setAnnotations(O||[]),C&&C.length>0&&this.handleMarkers(C);var E=this.editor.$options;p.editorOptions.forEach((function(t){E.hasOwnProperty(t)?e.editor.setOption(t,e.props[t]):e.props[t]&&console.warn("ReactAce: editor option "+t+" was activated but not found. Did you need to import a related tool or did you possibly mispell the option?")})),this.handleOptions(this.props),Array.isArray(w)&&w.forEach((function(t){"string"===typeof t.exec?e.editor.commands.bindKey(t.bindKey,t.exec):e.editor.commands.addCommand(t)})),v&&this.editor.setKeyboardHandler("ace/keyboard/"+v),o&&(this.refEditor.className+=" "+o),S&&S(this.editor),this.editor.resize(),s&&this.editor.focus()},t.prototype.componentDidUpdate=function(e){for(var t=e,o=this.props,n=0;n<p.editorOptions.length;n++){var r=p.editorOptions[n];o[r]!==t[r]&&this.editor.setOption(r,o[r])}if(o.className!==t.className){var i=this.refEditor.className.trim().split(" ");t.className.trim().split(" ").forEach((function(e){var t=i.indexOf(e);i.splice(t,1)})),this.refEditor.className=" "+o.className+" "+i.join(" ")}if(this.editor&&this.editor.getValue()!==o.value){this.silent=!0;var s=this.editor.session.selection.toJSON();this.editor.setValue(o.value,o.cursorStart),this.editor.session.selection.fromJSON(s),this.silent=!1}o.placeholder!==t.placeholder&&this.updatePlaceholder(),o.mode!==t.mode&&this.editor.getSession().setMode("ace/mode/"+o.mode),o.theme!==t.theme&&this.editor.setTheme("ace/theme/"+o.theme),o.keyboardHandler!==t.keyboardHandler&&(o.keyboardHandler?this.editor.setKeyboardHandler("ace/keyboard/"+o.keyboardHandler):this.editor.setKeyboardHandler(null)),o.fontSize!==t.fontSize&&this.editor.setFontSize(o.fontSize),o.wrapEnabled!==t.wrapEnabled&&this.editor.getSession().setUseWrapMode(o.wrapEnabled),o.showPrintMargin!==t.showPrintMargin&&this.editor.setShowPrintMargin(o.showPrintMargin),o.showGutter!==t.showGutter&&this.editor.renderer.setShowGutter(o.showGutter),a(o.setOptions,t.setOptions)||this.handleOptions(o),a(o.annotations,t.annotations)||this.editor.getSession().setAnnotations(o.annotations||[]),!a(o.markers,t.markers)&&Array.isArray(o.markers)&&this.handleMarkers(o.markers),a(o.scrollMargin,t.scrollMargin)||this.handleScrollMargins(o.scrollMargin),e.height===this.props.height&&e.width===this.props.width||this.editor.resize(),this.props.focus&&!e.focus&&this.editor.focus()},t.prototype.handleScrollMargins=function(e){void 0===e&&(e=[0,0,0,0]),this.editor.renderer.setScrollMargins(e[0],e[1],e[2],e[3])},t.prototype.componentWillUnmount=function(){this.editor.destroy(),this.editor=null},t.prototype.onChange=function(e){if(this.props.onChange&&!this.silent){var t=this.editor.getValue();this.props.onChange(t,e)}},t.prototype.onSelectionChange=function(e){if(this.props.onSelectionChange){var t=this.editor.getSelection();this.props.onSelectionChange(t,e)}},t.prototype.onCursorChange=function(e){if(this.props.onCursorChange){var t=this.editor.getSelection();this.props.onCursorChange(t,e)}},t.prototype.onInput=function(e){this.props.onInput&&this.props.onInput(e),this.props.placeholder&&this.updatePlaceholder()},t.prototype.onFocus=function(e){this.props.onFocus&&this.props.onFocus(e,this.editor)},t.prototype.onBlur=function(e){this.props.onBlur&&this.props.onBlur(e,this.editor)},t.prototype.onCopy=function(e){this.props.onCopy&&this.props.onCopy(e)},t.prototype.onPaste=function(e){this.props.onPaste&&this.props.onPaste(e)},t.prototype.onScroll=function(){this.props.onScroll&&this.props.onScroll(this.editor)},t.prototype.handleOptions=function(e){for(var t=Object.keys(e.setOptions),o=0;o<t.length;o++)this.editor.setOption(t[o],e.setOptions[t[o]])},t.prototype.handleMarkers=function(e){var t=this,o=this.editor.getSession().getMarkers(!0);for(var n in o)o.hasOwnProperty(n)&&this.editor.getSession().removeMarker(o[n].id);for(var n in o=this.editor.getSession().getMarkers(!1))o.hasOwnProperty(n)&&"ace_active-line"!==o[n].clazz&&"ace_selected-word"!==o[n].clazz&&this.editor.getSession().removeMarker(o[n].id);e.forEach((function(e){var o=e.startRow,n=e.startCol,r=e.endRow,i=e.endCol,s=e.className,a=e.type,p=e.inFront,l=void 0!==p&&p,c=new h(o,n,r,i);t.editor.getSession().addMarker(c,s,a,l)}))},t.prototype.updatePlaceholder=function(){var e=this.editor,t=this.props.placeholder,o=!e.session.getValue().length,n=e.renderer.placeholderNode;!o&&n?(e.renderer.scroller.removeChild(e.renderer.placeholderNode),e.renderer.placeholderNode=null):o&&!n?((n=e.renderer.placeholderNode=document.createElement("div")).textContent=t||"",n.className="ace_comment ace_placeholder",n.style.padding="0 9px",n.style.position="absolute",n.style.zIndex="3",e.renderer.scroller.appendChild(n)):o&&n&&(n.textContent=t)},t.prototype.updateRef=function(e){this.refEditor=e},t.prototype.render=function(){var e=this.props,t=e.name,o=e.width,n=e.height,i=e.style,a=r({width:o,height:n},i);return s.createElement("div",{ref:this.updateRef,id:t,style:a})},t.propTypes={mode:i.string,focus:i.bool,theme:i.string,name:i.string,className:i.string,height:i.string,width:i.string,fontSize:i.oneOfType([i.number,i.string]),showGutter:i.bool,onChange:i.func,onCopy:i.func,onPaste:i.func,onFocus:i.func,onInput:i.func,onBlur:i.func,onScroll:i.func,value:i.string,defaultValue:i.string,onLoad:i.func,onSelectionChange:i.func,onCursorChange:i.func,onBeforeLoad:i.func,onValidate:i.func,minLines:i.number,maxLines:i.number,readOnly:i.bool,highlightActiveLine:i.bool,tabSize:i.number,showPrintMargin:i.bool,cursorStart:i.number,debounceChangePeriod:i.number,editorProps:i.object,setOptions:i.object,style:i.object,scrollMargin:i.array,annotations:i.array,markers:i.array,keyboardHandler:i.string,wrapEnabled:i.bool,enableSnippets:i.bool,enableBasicAutocompletion:i.oneOfType([i.bool,i.array]),enableLiveAutocompletion:i.oneOfType([i.bool,i.array]),navigateToFileEnd:i.bool,commands:i.array,placeholder:i.string},t.defaultProps={name:"ace-editor",focus:!1,mode:"",theme:"",height:"500px",width:"500px",value:"",fontSize:12,enableSnippets:!1,showGutter:!0,onChange:null,onPaste:null,onLoad:null,onScroll:null,minLines:null,maxLines:null,readOnly:!1,highlightActiveLine:!0,showPrintMargin:!0,tabSize:4,cursorStart:1,editorProps:{},style:{},scrollMargin:[0,0,0,0],setOptions:{},wrapEnabled:!1,enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,placeholder:null,navigateToFileEnd:!0},t}(s.Component);t.default=c},123:function(e,t,o){"use strict";var n=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=o(5),i=o(1),s=o(120),a=o(126),p=function(e){function t(t){var o=e.call(this,t)||this;return o.state={value:o.props.value},o.onChange=o.onChange.bind(o),o.diff=o.diff.bind(o),o}return n(t,e),t.prototype.componentDidUpdate=function(){var e=this.props.value;e!==this.state.value&&this.setState({value:e})},t.prototype.onChange=function(e){this.setState({value:e}),this.props.onChange&&this.props.onChange(e)},t.prototype.diff=function(){var e=new a,t=this.state.value[0],o=this.state.value[1];if(0===t.length&&0===o.length)return[];var n=e.diff_main(t,o);e.diff_cleanupSemantic(n);var r=this.generateDiffedLines(n);return this.setCodeMarkers(r)},t.prototype.generateDiffedLines=function(e){var t=0,o=-1,n=1,r={left:[],right:[]},i={left:1,right:1};return e.forEach((function(e){var s=e[0],a=e[1],p=a.split("\n").length-1;if(0!==a.length){var l=a[0],h=a[a.length-1],c=0;switch(s){case t:i.left+=p,i.right+=p;break;case o:"\n"===l&&(i.left++,p--),0===(c=p)&&r.right.push({startLine:i.right,endLine:i.right}),"\n"===h&&(c-=1),r.left.push({startLine:i.left,endLine:i.left+c}),i.left+=p;break;case n:"\n"===l&&(i.right++,p--),0===(c=p)&&r.left.push({startLine:i.left,endLine:i.left}),"\n"===h&&(c-=1),r.right.push({startLine:i.right,endLine:i.right+c}),i.right+=p;break;default:throw new Error("Diff type was not defined.")}}})),r},t.prototype.setCodeMarkers=function(e){void 0===e&&(e={left:[],right:[]});for(var t=[],o={left:[],right:[]},n=0;n<e.left.length;n++){var r={startRow:e.left[n].startLine-1,endRow:e.left[n].endLine,type:"text",className:"codeMarker"};o.left.push(r)}for(n=0;n<e.right.length;n++){r={startRow:e.right[n].startLine-1,endRow:e.right[n].endLine,type:"text",className:"codeMarker"};o.right.push(r)}return t[0]=o.left,t[1]=o.right,t},t.prototype.render=function(){var e=this.diff();return i.createElement(s.default,{name:this.props.name,className:this.props.className,focus:this.props.focus,orientation:this.props.orientation,splits:this.props.splits,mode:this.props.mode,theme:this.props.theme,height:this.props.height,width:this.props.width,fontSize:this.props.fontSize,showGutter:this.props.showGutter,onChange:this.onChange,onPaste:this.props.onPaste,onLoad:this.props.onLoad,onScroll:this.props.onScroll,minLines:this.props.minLines,maxLines:this.props.maxLines,readOnly:this.props.readOnly,highlightActiveLine:this.props.highlightActiveLine,showPrintMargin:this.props.showPrintMargin,tabSize:this.props.tabSize,cursorStart:this.props.cursorStart,editorProps:this.props.editorProps,style:this.props.style,scrollMargin:this.props.scrollMargin,setOptions:this.props.setOptions,wrapEnabled:this.props.wrapEnabled,enableBasicAutocompletion:this.props.enableBasicAutocompletion,enableLiveAutocompletion:this.props.enableLiveAutocompletion,value:this.state.value,markers:e})},t.propTypes={cursorStart:r.number,editorProps:r.object,enableBasicAutocompletion:r.bool,enableLiveAutocompletion:r.bool,focus:r.bool,fontSize:r.number,height:r.string,highlightActiveLine:r.bool,maxLines:r.number,minLines:r.number,mode:r.string,name:r.string,className:r.string,onLoad:r.func,onPaste:r.func,onScroll:r.func,onChange:r.func,orientation:r.string,readOnly:r.bool,scrollMargin:r.array,setOptions:r.object,showGutter:r.bool,showPrintMargin:r.bool,splits:r.number,style:r.object,tabSize:r.number,theme:r.string,value:r.array,width:r.string,wrapEnabled:r.bool},t.defaultProps={cursorStart:1,editorProps:{},enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,focus:!1,fontSize:12,height:"500px",highlightActiveLine:!0,maxLines:null,minLines:null,mode:"",name:"ace-editor",onLoad:null,onScroll:null,onPaste:null,onChange:null,orientation:"beside",readOnly:!1,scrollMargin:[0,0,0,0],setOptions:{},showGutter:!0,showPrintMargin:!0,splits:2,style:{},tabSize:4,theme:"github",value:["",""],width:"500px",wrapEnabled:!0},t}(i.Component);t.default=p}}]);
//# sourceMappingURL=nm.react-ace.301f6c7d.chunk.js.map