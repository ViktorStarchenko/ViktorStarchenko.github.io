/**
*
* @license Guriddo jqGrid JS - v5.4.0 
* Copyright(c) 2008, Tony Tomov, tony@trirand.com
* 
* License: http://guriddo.net/?page_id=103334
*/
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery","./grid.base","./grid.common"],a):a(jQuery)}(function(a){"use strict";a.jgrid.inlineEdit=a.jgrid.inlineEdit||{},a.jgrid.extend({editRow:function(b,c,d,e,f,g,h,i,j){var k={},l=a.makeArray(arguments).slice(1),m=this[0];return"object"===a.type(l[0])?k=l[0]:(void 0!==c&&(k.keys=c),a.isFunction(d)&&(k.oneditfunc=d),a.isFunction(e)&&(k.successfunc=e),void 0!==f&&(k.url=f),void 0!==g&&(k.extraparam=g),a.isFunction(h)&&(k.aftersavefunc=h),a.isFunction(i)&&(k.errorfunc=i),a.isFunction(j)&&(k.afterrestorefunc=j)),k=a.extend(!0,{keys:!1,keyevent:"keydown",onEnter:null,onEscape:null,oneditfunc:null,successfunc:null,url:null,extraparam:{},aftersavefunc:null,errorfunc:null,afterrestorefunc:null,restoreAfterError:!0,mtype:"POST",focusField:!0,saveui:"enable",savetext:a.jgrid.getRegional(m,"defaults.savetext")},a.jgrid.inlineEdit,k),this.each(function(){var c,d,e,f,g,h,i=0,j=null,l={},n=a(this).jqGrid("getStyleUI",m.p.styleUI+".inlinedit","inputClass",!0);if(m.grid&&!1!==(f=a(m).jqGrid("getInd",b,!0))){if(m.p.beforeAction=!0,h=a.isFunction(k.beforeEditRow)?k.beforeEditRow.call(m,k,b):void 0,void 0===h&&(h=!0),!h)return void(m.p.beforeAction=!1);e=a(f).attr("editable")||"0","0"!==e||a(f).hasClass("not-editable-row")||(g=m.p.colModel,a('td[role="gridcell"]',f).each(function(e){c=g[e].name;var f=!0===m.p.treeGrid&&c===m.p.ExpandColumn;if(f)d=a("span:first",this).html();else try{d=a.unformat.call(m,this,{rowId:b,colModel:g[e]},e)}catch(b){d=g[e].edittype&&"textarea"===g[e].edittype?a(this).text():a(this).html()}if("cb"!==c&&"subgrid"!==c&&"rn"!==c&&(m.p.autoencode&&(d=a.jgrid.htmlDecode(d)),l[c]=d,!0===g[e].editable)){null===j&&(j=e),f?a("span:first",this).html(""):a(this).html("");var h=a.extend({},g[e].editoptions||{},{id:b+"_"+c,name:c,rowId:b,oper:"edit",module:"inline"});g[e].edittype||(g[e].edittype="text"),("&nbsp;"===d||"&#160;"===d||1===d.length&&160===d.charCodeAt(0))&&(d="");var k=a.jgrid.createEl.call(m,g[e].edittype,h,d,!0,a.extend({},a.jgrid.ajaxOptions,m.p.ajaxSelectOptions||{}));a(k).addClass("editable inline-edit-cell"),a.inArray(g[e].edittype,["text","textarea","password","select"])>-1&&a(k).addClass(n),f?a("span:first",this).append(k):a(this).append(k),a.jgrid.bindEv.call(m,k,h),"select"===g[e].edittype&&void 0!==g[e].editoptions&&!0===g[e].editoptions.multiple&&void 0===g[e].editoptions.dataUrl&&a.jgrid.msie()&&a(k).width(a(k).width()),i++}}),i>0&&(l.id=b,m.p.savedRow.push(l),a(f).attr("editable","1"),k.focusField&&("number"==typeof k.focusField&&parseInt(k.focusField,10)<=g.length&&(j=k.focusField),setTimeout(function(){var b=a("td:eq("+j+") :input:visible",f).not(":disabled");b.length>0&&b.focus()},0)),!0===k.keys&&a(f).on(k.keyevent,function(c){if(27===c.keyCode){if(a.isFunction(k.onEscape))return k.onEscape.call(m,b,k,c),!0;if(a(m).jqGrid("restoreRow",b,k),m.p.inlineNav)try{a(m).jqGrid("showAddEditButtons")}catch(a){}return!1}if(13===c.keyCode){if("TEXTAREA"===c.target.tagName)return!0;if(a.isFunction(k.onEnter))return k.onEnter.call(m,b,k,c),!0;if(a(m).jqGrid("saveRow",b,k)&&m.p.inlineNav)try{a(m).jqGrid("showAddEditButtons")}catch(a){}return!1}}),a(m).triggerHandler("jqGridInlineEditRow",[b,k]),a.isFunction(k.oneditfunc)&&k.oneditfunc.call(m,b)))}})},saveRow:function(b,c,d,e,f,g,h){var i=a.makeArray(arguments).slice(1),j={},k=this[0];"object"===a.type(i[0])?j=i[0]:(a.isFunction(c)&&(j.successfunc=c),void 0!==d&&(j.url=d),void 0!==e&&(j.extraparam=e),a.isFunction(f)&&(j.aftersavefunc=f),a.isFunction(g)&&(j.errorfunc=g),a.isFunction(h)&&(j.afterrestorefunc=h)),j=a.extend(!0,{successfunc:null,url:null,extraparam:{},aftersavefunc:null,errorfunc:null,afterrestorefunc:null,restoreAfterError:!0,mtype:"POST",saveui:"enable",savetext:a.jgrid.getRegional(k,"defaults.savetext")},a.jgrid.inlineEdit,j);var l,m,n,o,p,q=!1,r={},s={},t={},u=!1,v=a.trim(a(k).jqGrid("getStyleUI",k.p.styleUI+".common","error",!0));if(!k.grid)return q;if(!1===(p=a(k).jqGrid("getInd",b,!0)))return q;var w=a.jgrid.getRegional(k,"errors"),x=a.jgrid.getRegional(k,"edit"),y=a.isFunction(j.beforeSaveRow)?j.beforeSaveRow.call(k,j,b):void 0;if(void 0===y&&(y=!0),y){if(m=a(p).attr("editable"),j.url=j.url||k.p.editurl,"1"===m){var z,A,B;if(a('td[role="gridcell"]',p).each(function(b){if(z=k.p.colModel[b],l=z.name,B="","cb"!==l&&"subgrid"!==l&&!0===z.editable&&"rn"!==l&&!a(this).hasClass("not-editable-cell")){switch(z.edittype){case"checkbox":var c=["Yes","No"];z.editoptions&&z.editoptions.value&&(c=z.editoptions.value.split(":")),r[l]=a("input",this).is(":checked")?c[0]:c[1],B=a("input",this);break;case"text":case"password":case"textarea":case"button":r[l]=a("input, textarea",this).val(),B=a("input, textarea",this);break;case"select":if(z.editoptions.multiple){var d=a("select",this),e=[];r[l]=a(d).val(),r[l]?r[l]=r[l].join(","):r[l]="",a("select option:selected",this).each(function(b,c){e[b]=a(c).text()}),s[l]=e.join(",")}else r[l]=a("select option:selected",this).val(),s[l]=a("select option:selected",this).text();z.formatter&&"select"===z.formatter&&(s={}),B=a("select",this);break;case"custom":try{if(!z.editoptions||!a.isFunction(z.editoptions.custom_value))throw"e1";if(r[l]=z.editoptions.custom_value.call(k,a(".customelement",this),"get"),void 0===r[l])throw"e2"}catch(b){"e1"===b?a.jgrid.info_dialog(w.errcap,"function 'custom_value' "+x.msg.nodefined,x.bClose,{styleUI:k.p.styleUI}):a.jgrid.info_dialog(w.errcap,b.message,x.bClose,{styleUI:k.p.styleUI})}}if(o=a.jgrid.checkValues.call(k,r[l],b),!1===o[0])return A=b,!1;k.p.autoencode&&(r[l]=a.jgrid.htmlEncode(r[l])),"clientArray"!==j.url&&z.editoptions&&!0===z.editoptions.NullIfEmpty&&""===r[l]&&(t[l]="null",u=!0)}}),!1===o[0]){try{if(a.isFunction(k.p.validationCell))k.p.validationCell.call(k,B,o[1],p.rowIndex,A);else{var C=a(k).jqGrid("getGridRowById",b),D=a.jgrid.findPos(C);a.jgrid.info_dialog(w.errcap,o[1],x.bClose,{left:D[0],top:D[1]+a(C).outerHeight(),styleUI:k.p.styleUI,onClose:function(){A>=0&&a("#"+b+"_"+k.p.colModel[A].name).focus()}})}}catch(a){alert(o[1])}return q}var E,F=k.p.prmNames,G=b;if(E=!1===k.p.keyName?F.id:k.p.keyName,r){if(r[F.oper]=F.editoper,void 0===r[E]||""===r[E])r[E]=b;else if(p.id!==k.p.idPrefix+r[E]){var H=a.jgrid.stripPref(k.p.idPrefix,b);if(void 0!==k.p._index[H]&&(k.p._index[r[E]]=k.p._index[H],delete k.p._index[H]),b=k.p.idPrefix+r[E],a(p).attr("id",b),k.p.selrow===G&&(k.p.selrow=b),a.isArray(k.p.selarrrow)){var I=a.inArray(G,k.p.selarrrow);I>=0&&(k.p.selarrrow[I]=b)}if(k.p.multiselect){var J="jqg_"+k.p.id+"_"+b;a("input.cbox",p).attr("id",J).attr("name",J)}}void 0===k.p.inlineData&&(k.p.inlineData={}),r=a.extend({},r,k.p.inlineData,j.extraparam)}if("clientArray"===j.url){r=a.extend({},r,s),k.p.autoencode&&a.each(r,function(b,c){r[b]=a.jgrid.htmlDecode(c)});var K,L=a(k).jqGrid("setRowData",b,r);for(a(p).attr("editable","0"),K=0;K<k.p.savedRow.length;K++)if(String(k.p.savedRow[K].id)===String(G)){n=K;break}a(k).triggerHandler("jqGridInlineAfterSaveRow",[b,L,r,j]),a.isFunction(j.aftersavefunc)&&j.aftersavefunc.call(k,b,L,r,j),n>=0&&k.p.savedRow.splice(n,1),q=!0,a(p).removeClass("jqgrid-new-row").off("keydown")}else a(k).jqGrid("progressBar",{method:"show",loadtype:j.saveui,htmlcontent:j.savetext}),t=a.extend({},r,t),t[E]=a.jgrid.stripPref(k.p.idPrefix,t[E]),a.ajax(a.extend({url:j.url,data:a.isFunction(k.p.serializeRowData)?k.p.serializeRowData.call(k,t):t,type:j.mtype,async:!1,complete:function(c,d){if(a(k).jqGrid("progressBar",{method:"hide",loadtype:j.saveui,htmlcontent:j.savetext}),"success"===d){var e,f,g=!0;if(e=a(k).triggerHandler("jqGridInlineSuccessSaveRow",[c,b,j]),a.isArray(e)||(e=[!0,t]),e[0]&&a.isFunction(j.successfunc)&&(e=j.successfunc.call(k,c)),a.isArray(e)?(g=e[0],r=e[1]||r):g=e,!0===g){for(k.p.autoencode&&a.each(r,function(b,c){r[b]=a.jgrid.htmlDecode(c)}),u&&a.each(r,function(a){"null"===r[a]&&(r[a]="")}),r=a.extend({},r,s),a(k).jqGrid("setRowData",b,r),a(p).attr("editable","0"),f=0;f<k.p.savedRow.length;f++)if(String(k.p.savedRow[f].id)===String(b)){n=f;break}a(k).triggerHandler("jqGridInlineAfterSaveRow",[b,c,r,j]),a.isFunction(j.aftersavefunc)&&j.aftersavefunc.call(k,b,c,r,j),n>=0&&k.p.savedRow.splice(n,1),q=!0,a(p).removeClass("jqgrid-new-row").off("keydown")}else a(k).triggerHandler("jqGridInlineErrorSaveRow",[b,c,d,null,j]),a.isFunction(j.errorfunc)&&j.errorfunc.call(k,b,c,d,null),!0===j.restoreAfterError&&a(k).jqGrid("restoreRow",b,j)}},error:function(c,d,e){if(a("#lui_"+a.jgrid.jqID(k.p.id)).hide(),a(k).triggerHandler("jqGridInlineErrorSaveRow",[b,c,d,e,j]),a.isFunction(j.errorfunc))j.errorfunc.call(k,b,c,d,e);else{var f=c.responseText||c.statusText;try{a.jgrid.info_dialog(w.errcap,'<div class="'+v+'">'+f+"</div>",x.bClose,{buttonalign:"right",styleUI:k.p.styleUI})}catch(a){alert(f)}}!0===j.restoreAfterError&&a(k).jqGrid("restoreRow",b,j)}},a.jgrid.ajaxOptions,k.p.ajaxRowOptions||{}))}return q}},restoreRow:function(b,c){var d=a.makeArray(arguments).slice(1),e={};return"object"===a.type(d[0])?e=d[0]:a.isFunction(c)&&(e.afterrestorefunc=c),e=a.extend(!0,{},a.jgrid.inlineEdit,e),this.each(function(){var c,d,f=this,g=-1,h={};if(f.grid&&!1!==(c=a(f).jqGrid("getInd",b,!0))){var i=a.isFunction(e.beforeCancelRow)?e.beforeCancelRow.call(f,e,b):void 0;if(void 0===i&&(i=!0),i){for(d=0;d<f.p.savedRow.length;d++)if(String(f.p.savedRow[d].id)===String(b)){g=d;break}if(g>=0){if(a.isFunction(a.fn.datepicker))try{a("input.hasDatepicker","#"+a.jgrid.jqID(c.id)).datepicker("hide")}catch(a){}a.each(f.p.colModel,function(){f.p.savedRow[g].hasOwnProperty(this.name)&&(h[this.name]=f.p.savedRow[g][this.name])}),a(f).jqGrid("setRowData",b,h),a(c).attr("editable","0").off("keydown"),f.p.savedRow.splice(g,1),a("#"+a.jgrid.jqID(b),"#"+a.jgrid.jqID(f.p.id)).hasClass("jqgrid-new-row")&&setTimeout(function(){a(f).jqGrid("delRowData",b),a(f).jqGrid("showAddEditButtons")},0)}a(f).triggerHandler("jqGridInlineAfterRestoreRow",[b]),a.isFunction(e.afterrestorefunc)&&e.afterrestorefunc.call(f,b)}}})},addRow:function(b){return b=a.extend(!0,{rowID:null,initdata:{},position:"first",useDefValues:!0,useFormatter:!1,addRowParams:{extraparam:{}}},b||{}),this.each(function(){if(this.grid){var c=this;c.p.beforeAction=!0;var d=a.isFunction(b.beforeAddRow)?b.beforeAddRow.call(c,b.addRowParams):void 0;if(void 0===d&&(d=!0),!d)return void(c.p.beforeAction=!1);if(b.rowID=a.isFunction(b.rowID)?b.rowID.call(c,b):null!=b.rowID?b.rowID:a.jgrid.randId(),!0===b.useDefValues&&a(c.p.colModel).each(function(){if(this.editoptions&&this.editoptions.defaultValue){var d=this.editoptions.defaultValue,e=a.isFunction(d)?d.call(c):d;b.initdata[this.name]=e}}),a(c).jqGrid("addRowData",b.rowID,b.initdata,b.position),b.rowID=c.p.idPrefix+b.rowID,a("#"+a.jgrid.jqID(b.rowID),"#"+a.jgrid.jqID(c.p.id)).addClass("jqgrid-new-row"),b.useFormatter)a("#"+a.jgrid.jqID(b.rowID)+" .ui-inline-edit","#"+a.jgrid.jqID(c.p.id)).click();else{var e=c.p.prmNames,f=e.oper;b.addRowParams.extraparam[f]=e.addoper,a(c).jqGrid("editRow",b.rowID,b.addRowParams),a(c).jqGrid("setSelection",b.rowID)}}})},inlineNav:function(b,c){var d=this[0],e=a.jgrid.getRegional(d,"nav"),f=a.jgrid.styleUI[d.p.styleUI].inlinedit;return c=a.extend(!0,{edit:!0,editicon:f.icon_edit_nav,add:!0,addicon:f.icon_add_nav,save:!0,saveicon:f.icon_save_nav,cancel:!0,cancelicon:f.icon_cancel_nav,addParams:{addRowParams:{extraparam:{}}},editParams:{},restoreAfterSelect:!0,saveAfterSelect:!1},e,c||{}),this.each(function(){if(this.grid&&!this.p.inlineNav){var f=a.jgrid.jqID(d.p.id),g=a.trim(a(d).jqGrid("getStyleUI",d.p.styleUI+".common","disabled",!0));if(d.p.navGrid||a(d).jqGrid("navGrid",b,{refresh:!1,edit:!1,add:!1,del:!1,search:!1,view:!1}),a(d).data("inlineNav")||a(d).data("inlineNav",c),d.p.force_regional&&(c=a.extend(c,e)),d.p.inlineNav=!0,!0===c.addParams.useFormatter){var h,i=d.p.colModel;for(h=0;h<i.length;h++)if(i[h].formatter&&"actions"===i[h].formatter){if(i[h].formatoptions){var j={keys:!1,onEdit:null,onSuccess:null,afterSave:null,onError:null,afterRestore:null,extraparam:{},url:null},k=a.extend(j,i[h].formatoptions);c.addParams.addRowParams={keys:k.keys,oneditfunc:k.onEdit,successfunc:k.onSuccess,url:k.url,extraparam:k.extraparam,aftersavefunc:k.afterSave,errorfunc:k.onError,afterrestorefunc:k.afterRestore}}break}}c.add&&a(d).jqGrid("navButtonAdd",b,{caption:c.addtext,title:c.addtitle,buttonicon:c.addicon,id:d.p.id+"_iladd",internal:!0,onClickButton:function(){void 0===d.p.beforeAction&&(d.p.beforeAction=!0),a(d).jqGrid("addRow",c.addParams),!c.addParams.useFormatter&&d.p.beforeAction&&(a("#"+f+"_ilsave").removeClass(g),a("#"+f+"_ilcancel").removeClass(g),a("#"+f+"_iladd").addClass(g),a("#"+f+"_iledit").addClass(g))}}),c.edit&&a(d).jqGrid("navButtonAdd",b,{caption:c.edittext,title:c.edittitle,buttonicon:c.editicon,id:d.p.id+"_iledit",internal:!0,onClickButton:function(){var b=a(d).jqGrid("getGridParam","selrow");b?(void 0===d.p.beforeAction&&(d.p.beforeAction=!0),a(d).jqGrid("editRow",b,c.editParams),d.p.beforeAction&&(a("#"+f+"_ilsave").removeClass(g),a("#"+f+"_ilcancel").removeClass(g),a("#"+f+"_iladd").addClass(g),a("#"+f+"_iledit").addClass(g))):(a.jgrid.viewModal("#alertmod_"+f,{gbox:"#gbox_"+f,jqm:!0}),a("#jqg_alrt").focus())}}),c.save&&(a(d).jqGrid("navButtonAdd",b,{caption:c.savetext||"",title:c.savetitle||"Save row",buttonicon:c.saveicon,id:d.p.id+"_ilsave",internal:!0,onClickButton:function(){var b=d.p.savedRow[0].id;if(b){var e=d.p.prmNames,g=e.oper,h=c.editParams;a("#"+a.jgrid.jqID(b),"#"+f).hasClass("jqgrid-new-row")?(c.addParams.addRowParams.extraparam[g]=e.addoper,h=c.addParams.addRowParams):(c.editParams.extraparam||(c.editParams.extraparam={}),c.editParams.extraparam[g]=e.editoper),a(d).jqGrid("saveRow",b,h)&&a(d).jqGrid("showAddEditButtons")}else a.jgrid.viewModal("#alertmod_"+f,{gbox:"#gbox_"+f,jqm:!0}),a("#jqg_alrt").focus()}}),a("#"+f+"_ilsave").addClass(g)),c.cancel&&(a(d).jqGrid("navButtonAdd",b,{caption:c.canceltext||"",title:c.canceltitle||"Cancel row editing",buttonicon:c.cancelicon,id:d.p.id+"_ilcancel",internal:!0,onClickButton:function(){var b=d.p.savedRow[0].id,e=c.editParams;b?(a("#"+a.jgrid.jqID(b),"#"+f).hasClass("jqgrid-new-row")&&(e=c.addParams.addRowParams),a(d).jqGrid("restoreRow",b,e),a(d).jqGrid("showAddEditButtons")):(a.jgrid.viewModal("#alertmod",{gbox:"#gbox_"+f,jqm:!0}),a("#jqg_alrt").focus())}}),a("#"+f+"_ilcancel").addClass(g)),!0!==c.restoreAfterSelect&&!0!==c.saveAfterSelect||a(d).on("jqGridBeforeSelectRow.inlineNav",function(b,e){if(d.p.savedRow.length>0&&!0===d.p.inlineNav&&e!==d.p.selrow&&null!==d.p.selrow){var f=!0;d.p.selrow===c.addParams.rowID?a(d).jqGrid("delRowData",d.p.selrow):!0===c.restoreAfterSelect?a(d).jqGrid("restoreRow",d.p.selrow,c.editParams):f=a(d).jqGrid("saveRow",d.p.selrow,c.editParams),f&&a(d).jqGrid("showAddEditButtons")}})}})},showAddEditButtons:function(){return this.each(function(){if(this.grid){var b=a.jgrid.jqID(this.p.id),c=a.trim(a(this).jqGrid("getStyleUI",this.p.styleUI+".common","disabled",!0));a("#"+b+"_ilsave").addClass(c),a("#"+b+"_ilcancel").addClass(c),a("#"+b+"_iladd").removeClass(c),a("#"+b+"_iledit").removeClass(c)}})},showSaveCancelButtons:function(){return this.each(function(){if(this.grid){var b=a.jgrid.jqID(this.p.id),c=a.trim(a(this).jqGrid("getStyleUI",this.p.styleUI+".common","disabled",!0));a("#"+b+"_ilsave").removeClass(c),a("#"+b+"_ilcancel").removeClass(c),a("#"+b+"_iladd").addClass(c),a("#"+b+"_iledit").addClass(c)}})}})});