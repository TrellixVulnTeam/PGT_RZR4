(this["webpackJsonpstreamlit-browser"]=this["webpackJsonpstreamlit-browser"]||[]).push([[11],{5722:function(e,t,n){var r=n(5723),o=n(972),i=n(971),a=o((function(e,t){return i(e)?r(e,t):[]}));e.exports=a},5723:function(e,t,n){var r=n(979),o=n(5724),i=n(5729),a=n(368),u=n(276),l=n(980);e.exports=function(e,t,n,s){var c=-1,p=o,f=!0,d=e.length,m=[],h=t.length;if(!d)return m;n&&(t=a(t,u(n))),s?(p=i,f=!1):t.length>=200&&(p=l,f=!1,t=new r(t));e:for(;++c<d;){var v=e[c],b=null==n?v:n(v);if(v=s||0!==v?v:0,f&&b===b){for(var g=h;g--;)if(t[g]===b)continue e;m.push(v)}else p(t,b,s)||m.push(v)}return m}},5724:function(e,t,n){var r=n(5725);e.exports=function(e,t){return!!(null==e?0:e.length)&&r(e,t,0)>-1}},5725:function(e,t,n){var r=n(5726),o=n(5727),i=n(5728);e.exports=function(e,t,n){return t===t?i(e,t,n):r(e,o,n)}},5726:function(e,t){e.exports=function(e,t,n,r){for(var o=e.length,i=n+(r?1:-1);r?i--:++i<o;)if(t(e[i],i,e))return i;return-1}},5727:function(e,t){e.exports=function(e){return e!==e}},5728:function(e,t){e.exports=function(e,t,n){for(var r=n-1,o=e.length;++r<o;)if(e[r]===t)return r;return-1}},5729:function(e,t){e.exports=function(e,t,n){for(var r=-1,o=null==e?0:e.length;++r<o;)if(n(t,e[r]))return!0;return!1}},5771:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return S}));var r=n(6),o=n(9),i=n(7),a=n(8),u=n(0),l=n.n(u),s=n(5722),c=n.n(s),p=n(37),f=n(211),d=n(3154),m=n(66),h=n(146),v=n(148),b=n(74),g=n(160),y=n(366),w=n(5),j=function(e){Object(i.a)(n,e);var t=Object(a.a)(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).formClearHelper=new f.b,e.state={value:e.initialValue},e.commitWidgetValue=function(t){e.props.widgetMgr.setIntArrayValue(e.props.element,e.state.value,t)},e.onFormCleared=function(){e.setState({value:e.props.element.default},(function(){return e.commitWidgetValue({fromUi:!0})}))},e.onChange=function(t){var n=e.generateNewState(t);e.setState(n,(function(){return e.commitWidgetValue({fromUi:!0})}))},e.filterOptions=function(t,n){var r=t.filter((function(t){return!e.state.value.includes(Number(t.value))}));return Object(y.b)(r,n)},e}return Object(o.a)(n,[{key:"initialValue",get:function(){var e=this.props.widgetMgr.getIntArrayValue(this.props.element);return void 0!==e?e:this.props.element.default}},{key:"componentDidMount",value:function(){this.props.element.setValue?this.updateFromProtobuf():this.commitWidgetValue({fromUi:!1})}},{key:"componentDidUpdate",value:function(){this.maybeUpdateFromProtobuf()}},{key:"componentWillUnmount",value:function(){this.formClearHelper.disconnect()}},{key:"maybeUpdateFromProtobuf",value:function(){this.props.element.setValue&&this.updateFromProtobuf()}},{key:"updateFromProtobuf",value:function(){var e=this,t=this.props.element.value;this.props.element.setValue=!1,this.setState({value:t},(function(){e.commitWidgetValue({fromUi:!1})}))}},{key:"valueFromState",get:function(){var e=this;return this.state.value.map((function(t){var n=e.props.element.options[t];return{value:t.toString(),label:n}}))}},{key:"generateNewState",value:function(e){var t=function(){var t,n=null===(t=e.option)||void 0===t?void 0:t.value;return parseInt(n,10)};switch(e.type){case"remove":return{value:c()(this.state.value,t())};case"clear":return{value:[]};case"select":return{value:this.state.value.concat([t()])};default:throw new Error("State transition is unknown: ".concat(e.type))}}},{key:"render",value:function(){var e=this.props,t=e.element,n=e.theme,r=e.width,o=e.widgetMgr,i={width:r},a=t.options,u=0===a.length||this.props.disabled,l=0===a.length?"No options to select.":"Choose an option",s=a.map((function(e,t){return{label:e,value:t.toString()}}));return this.formClearHelper.manageFormClearListener(o,t.formId,this.onFormCleared),Object(w.jsxs)("div",{className:"row-widget stMultiSelect",style:i,children:[Object(w.jsx)(h.d,{label:t.label,disabled:u,children:t.help&&Object(w.jsx)(h.b,{children:Object(w.jsx)(v.a,{content:t.help,placement:b.b.TOP_RIGHT})})}),Object(w.jsx)(d.a,{options:s,labelKey:"label",valueKey:"value",placeholder:l,type:m.b.select,multi:!0,onChange:this.onChange,value:this.valueFromState,disabled:u,size:"compact",filterOptions:this.filterOptions,overrides:{ValueContainer:{style:function(){return{minHeight:"44px"}}},ClearIcon:{style:{color:n.colors.darkGray}},SearchIcon:{style:{color:n.colors.darkGray}},Tag:{props:{overrides:{Root:{style:{borderTopLeftRadius:n.radii.md,borderTopRightRadius:n.radii.md,borderBottomRightRadius:n.radii.md,borderBottomLeftRadius:n.radii.md,fontSize:n.fontSizes.sm,paddingLeft:n.spacing.md}},Action:{style:{paddingLeft:n.spacing.sm}}}}},MultiValue:{props:{overrides:{Root:{style:{fontSize:n.fontSizes.sm}}}}},Dropdown:{component:g.a}}})]})}}]),n}(l.a.PureComponent),S=Object(p.withTheme)(j)}}]);