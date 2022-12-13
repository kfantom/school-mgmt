"use strict";(self.webpackChunkschool_mgmt=self.webpackChunkschool_mgmt||[]).push([[768],{5717:(Me,V,_)=>{_.d(V,{ev:()=>re,Dz:()=>oe,w1:()=>ne,ge:()=>ie,fO:()=>se,XQ:()=>ve,as:()=>De,Gk:()=>ke,nj:()=>Re,BZ:()=>Ce,p0:()=>nt});var o=_(4650),U=_(445),M=_(1281),z=_(4033);function m(t){return t&&"function"==typeof t.connect&&!(t instanceof z.c)}class b{applyChanges(s,e,n,i,r){s.forEachOperation((a,l,c)=>{let u,d;if(null==a.previousIndex){const f=n(a,l,c);u=e.createEmbeddedView(f.templateRef,f.context,f.index),d=1}else null==c?(e.remove(l),d=3):(u=e.get(l),e.move(u,c),d=2);r&&r({context:u?.context,operation:d,record:a})})}detach(){}}const D=new o.OlP("_ViewRepeater");var be=_(3353),ce=_(1218),xe=_(6895),de=_(7579),Te=_(2076),Ee=_(1135),Oe=_(9751),ue=_(576),fe=_(9646),T=_(2722),he=_(5698);const Ne=[[["caption"]],[["colgroup"],["col"]]],Ae=["caption","colgroup, col"];function q(t){return class extends t{constructor(...s){super(...s),this._sticky=!1,this._hasStickyChanged=!1}get sticky(){return this._sticky}set sticky(s){const e=this._sticky;this._sticky=(0,M.Ig)(s),this._hasStickyChanged=e!==this._sticky}hasStickyChanged(){const s=this._hasStickyChanged;return this._hasStickyChanged=!1,s}resetStickyChanged(){this._hasStickyChanged=!1}}}const v=new o.OlP("CDK_TABLE");let k=(()=>{class t{constructor(e){this.template=e}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.Rgc))},t.\u0275dir=o.lG2({type:t,selectors:[["","cdkCellDef",""]]}),t})(),S=(()=>{class t{constructor(e){this.template=e}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.Rgc))},t.\u0275dir=o.lG2({type:t,selectors:[["","cdkHeaderCellDef",""]]}),t})(),A=(()=>{class t{constructor(e){this.template=e}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.Rgc))},t.\u0275dir=o.lG2({type:t,selectors:[["","cdkFooterCellDef",""]]}),t})();class Le{}const Ie=q(Le);let w=(()=>{class t extends Ie{constructor(e){super(),this._table=e,this._stickyEnd=!1}get name(){return this._name}set name(e){this._setNameInput(e)}get stickyEnd(){return this._stickyEnd}set stickyEnd(e){const n=this._stickyEnd;this._stickyEnd=(0,M.Ig)(e),this._hasStickyChanged=n!==this._stickyEnd}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(v,8))},t.\u0275dir=o.lG2({type:t,selectors:[["","cdkColumnDef",""]],contentQueries:function(e,n,i){if(1&e&&(o.Suo(i,k,5),o.Suo(i,S,5),o.Suo(i,A,5)),2&e){let r;o.iGM(r=o.CRH())&&(n.cell=r.first),o.iGM(r=o.CRH())&&(n.headerCell=r.first),o.iGM(r=o.CRH())&&(n.footerCell=r.first)}},inputs:{sticky:"sticky",name:["cdkColumnDef","name"],stickyEnd:"stickyEnd"},features:[o._Bn([{provide:"MAT_SORT_HEADER_COLUMN_DEF",useExisting:t}]),o.qOj]}),t})();class Z{constructor(s,e){e.nativeElement.classList.add(...s._columnCssClassName)}}let W=(()=>{class t extends Z{constructor(e,n){super(e,n)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(w),o.Y36(o.SBq))},t.\u0275dir=o.lG2({type:t,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[o.qOj]}),t})(),$=(()=>{class t extends Z{constructor(e,n){if(super(e,n),1===e._table?._elementRef.nativeElement.nodeType){const i=e._table._elementRef.nativeElement.getAttribute("role");n.nativeElement.setAttribute("role","grid"===i||"treegrid"===i?"gridcell":"cell")}}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(w),o.Y36(o.SBq))},t.\u0275dir=o.lG2({type:t,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[o.qOj]}),t})();class me{constructor(){this.tasks=[],this.endTasks=[]}}const Q=new o.OlP("_COALESCED_STYLE_SCHEDULER");let pe=(()=>{class t{constructor(e){this._ngZone=e,this._currentSchedule=null,this._destroyed=new de.x}schedule(e){this._createScheduleIfNeeded(),this._currentSchedule.tasks.push(e)}scheduleEnd(e){this._createScheduleIfNeeded(),this._currentSchedule.endTasks.push(e)}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}_createScheduleIfNeeded(){this._currentSchedule||(this._currentSchedule=new me,this._getScheduleObservable().pipe((0,T.R)(this._destroyed)).subscribe(()=>{for(;this._currentSchedule.tasks.length||this._currentSchedule.endTasks.length;){const e=this._currentSchedule;this._currentSchedule=new me;for(const n of e.tasks)n();for(const n of e.endTasks)n()}this._currentSchedule=null}))}_getScheduleObservable(){return this._ngZone.isStable?(0,Te.D)(Promise.resolve(void 0)):this._ngZone.onStable.pipe((0,he.q)(1))}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(o.R0b))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac}),t})(),X=(()=>{class t{constructor(e,n){this.template=e,this._differs=n}ngOnChanges(e){if(!this._columnsDiffer){const n=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(n).create(),this._columnsDiffer.diff(n)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof E?e.headerCell.template:this instanceof O?e.footerCell.template:e.cell.template}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.Rgc),o.Y36(o.ZZ4))},t.\u0275dir=o.lG2({type:t,features:[o.TTD]}),t})();class Ye extends X{}const je=q(Ye);let E=(()=>{class t extends je{constructor(e,n,i){super(e,n),this._table=i}ngOnChanges(e){super.ngOnChanges(e)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.Rgc),o.Y36(o.ZZ4),o.Y36(v,8))},t.\u0275dir=o.lG2({type:t,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:["cdkHeaderRowDef","columns"],sticky:["cdkHeaderRowDefSticky","sticky"]},features:[o.qOj,o.TTD]}),t})();class Pe extends X{}const Ve=q(Pe);let O=(()=>{class t extends Ve{constructor(e,n,i){super(e,n),this._table=i}ngOnChanges(e){super.ngOnChanges(e)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.Rgc),o.Y36(o.ZZ4),o.Y36(v,8))},t.\u0275dir=o.lG2({type:t,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:["cdkFooterRowDef","columns"],sticky:["cdkFooterRowDefSticky","sticky"]},features:[o.qOj,o.TTD]}),t})(),H=(()=>{class t extends X{constructor(e,n,i){super(e,n),this._table=i}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.Rgc),o.Y36(o.ZZ4),o.Y36(v,8))},t.\u0275dir=o.lG2({type:t,selectors:[["","cdkRowDef",""]],inputs:{columns:["cdkRowDefColumns","columns"],when:["cdkRowDefWhen","when"]},features:[o.qOj]}),t})(),C=(()=>{class t{constructor(e){this._viewContainer=e,t.mostRecentCellOutlet=this}ngOnDestroy(){t.mostRecentCellOutlet===this&&(t.mostRecentCellOutlet=null)}}return t.mostRecentCellOutlet=null,t.\u0275fac=function(e){return new(e||t)(o.Y36(o.s_b))},t.\u0275dir=o.lG2({type:t,selectors:[["","cdkCellOutlet",""]]}),t})(),K=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(e,n){1&e&&o.GkF(0,0)},dependencies:[C],encapsulation:2}),t})(),ee=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(e,n){1&e&&o.GkF(0,0)},dependencies:[C],encapsulation:2}),t})(),B=(()=>{class t{constructor(e){this.templateRef=e,this._contentClassName="cdk-no-data-row"}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.Rgc))},t.\u0275dir=o.lG2({type:t,selectors:[["ng-template","cdkNoDataRow",""]]}),t})();const ge=["top","bottom","left","right"];class Ue{constructor(s,e,n,i,r=!0,a=!0,l){this._isNativeHtmlTable=s,this._stickCellCss=e,this.direction=n,this._coalescedStyleScheduler=i,this._isBrowser=r,this._needsPositionStickyOnElement=a,this._positionListener=l,this._cachedCellWidths=[],this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(s,e){const n=[];for(const i of s)if(i.nodeType===i.ELEMENT_NODE){n.push(i);for(let r=0;r<i.children.length;r++)n.push(i.children[r])}this._coalescedStyleScheduler.schedule(()=>{for(const i of n)this._removeStickyStyle(i,e)})}updateStickyColumns(s,e,n,i=!0){if(!s.length||!this._isBrowser||!e.some(h=>h)&&!n.some(h=>h))return void(this._positionListener&&(this._positionListener.stickyColumnsUpdated({sizes:[]}),this._positionListener.stickyEndColumnsUpdated({sizes:[]})));const r=s[0],a=r.children.length,l=this._getCellWidths(r,i),c=this._getStickyStartColumnPositions(l,e),u=this._getStickyEndColumnPositions(l,n),d=e.lastIndexOf(!0),f=n.indexOf(!0);this._coalescedStyleScheduler.schedule(()=>{const h="rtl"===this.direction,R=h?"right":"left",rt=h?"left":"right";for(const F of s)for(let p=0;p<a;p++){const Se=F.children[p];e[p]&&this._addStickyStyle(Se,R,c[p],p===d),n[p]&&this._addStickyStyle(Se,rt,u[p],p===f)}this._positionListener&&(this._positionListener.stickyColumnsUpdated({sizes:-1===d?[]:l.slice(0,d+1).map((F,p)=>e[p]?F:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:-1===f?[]:l.slice(f).map((F,p)=>n[p+f]?F:null).reverse()}))})}stickRows(s,e,n){if(!this._isBrowser)return;const i="bottom"===n?s.slice().reverse():s,r="bottom"===n?e.slice().reverse():e,a=[],l=[],c=[];for(let d=0,f=0;d<i.length;d++){if(!r[d])continue;a[d]=f;const h=i[d];c[d]=this._isNativeHtmlTable?Array.from(h.children):[h];const R=h.getBoundingClientRect().height;f+=R,l[d]=R}const u=r.lastIndexOf(!0);this._coalescedStyleScheduler.schedule(()=>{for(let d=0;d<i.length;d++){if(!r[d])continue;const f=a[d],h=d===u;for(const R of c[d])this._addStickyStyle(R,n,f,h)}"top"===n?this._positionListener?.stickyHeaderRowsUpdated({sizes:l,offsets:a,elements:c}):this._positionListener?.stickyFooterRowsUpdated({sizes:l,offsets:a,elements:c})})}updateStickyFooterContainer(s,e){if(!this._isNativeHtmlTable)return;const n=s.querySelector("tfoot");this._coalescedStyleScheduler.schedule(()=>{e.some(i=>!i)?this._removeStickyStyle(n,["bottom"]):this._addStickyStyle(n,"bottom",0,!1)})}_removeStickyStyle(s,e){for(const i of e)s.style[i]="",s.classList.remove(this._borderCellCss[i]);ge.some(i=>-1===e.indexOf(i)&&s.style[i])?s.style.zIndex=this._getCalculatedZIndex(s):(s.style.zIndex="",this._needsPositionStickyOnElement&&(s.style.position=""),s.classList.remove(this._stickCellCss))}_addStickyStyle(s,e,n,i){s.classList.add(this._stickCellCss),i&&s.classList.add(this._borderCellCss[e]),s.style[e]=`${n}px`,s.style.zIndex=this._getCalculatedZIndex(s),this._needsPositionStickyOnElement&&(s.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(s){const e={top:100,bottom:10,left:1,right:1};let n=0;for(const i of ge)s.style[i]&&(n+=e[i]);return n?`${n}`:""}_getCellWidths(s,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;const n=[],i=s.children;for(let r=0;r<i.length;r++)n.push(i[r].getBoundingClientRect().width);return this._cachedCellWidths=n,n}_getStickyStartColumnPositions(s,e){const n=[];let i=0;for(let r=0;r<s.length;r++)e[r]&&(n[r]=i,i+=s[r]);return n}_getStickyEndColumnPositions(s,e){const n=[];let i=0;for(let r=s.length;r>0;r--)e[r]&&(n[r]=i,i+=s[r]);return n}}const te=new o.OlP("CDK_SPL");let G=(()=>{class t{constructor(e,n){this.viewContainer=e,this.elementRef=n}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.s_b),o.Y36(o.SBq))},t.\u0275dir=o.lG2({type:t,selectors:[["","rowOutlet",""]]}),t})(),L=(()=>{class t{constructor(e,n){this.viewContainer=e,this.elementRef=n}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.s_b),o.Y36(o.SBq))},t.\u0275dir=o.lG2({type:t,selectors:[["","headerRowOutlet",""]]}),t})(),I=(()=>{class t{constructor(e,n){this.viewContainer=e,this.elementRef=n}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.s_b),o.Y36(o.SBq))},t.\u0275dir=o.lG2({type:t,selectors:[["","footerRowOutlet",""]]}),t})(),Y=(()=>{class t{constructor(e,n){this.viewContainer=e,this.elementRef=n}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.s_b),o.Y36(o.SBq))},t.\u0275dir=o.lG2({type:t,selectors:[["","noDataRowOutlet",""]]}),t})(),j=(()=>{class t{constructor(e,n,i,r,a,l,c,u,d,f,h,R){this._differs=e,this._changeDetectorRef=n,this._elementRef=i,this._dir=a,this._platform=c,this._viewRepeater=u,this._coalescedStyleScheduler=d,this._viewportRuler=f,this._stickyPositioningListener=h,this._ngZone=R,this._onDestroy=new de.x,this._columnDefsByName=new Map,this._customColumnDefs=new Set,this._customRowDefs=new Set,this._customHeaderRowDefs=new Set,this._customFooterRowDefs=new Set,this._headerRowDefChanged=!0,this._footerRowDefChanged=!0,this._stickyColumnStylesNeedReset=!0,this._forceRecalculateCellWidths=!0,this._cachedRenderRowsMap=new Map,this.stickyCssClass="cdk-table-sticky",this.needsPositionStickyOnElement=!0,this._isShowingNoDataRow=!1,this._multiTemplateDataRows=!1,this._fixedLayout=!1,this.contentChanged=new o.vpe,this.viewChange=new Ee.X({start:0,end:Number.MAX_VALUE}),r||this._elementRef.nativeElement.setAttribute("role","table"),this._document=l,this._isNativeHtmlTable="TABLE"===this._elementRef.nativeElement.nodeName}get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&this._switchDataSource(e)}get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=(0,M.Ig)(e),this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}get fixedLayout(){return this._fixedLayout}set fixedLayout(e){this._fixedLayout=(0,M.Ig)(e),this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}ngOnInit(){this._setupStickyStyler(),this._isNativeHtmlTable&&this._applyNativeTableSections(),this._dataDiffer=this._differs.find([]).create((e,n)=>this.trackBy?this.trackBy(n.dataIndex,n.data):n),this._viewportRuler.change().pipe((0,T.R)(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentChecked(){this._cacheRowDefs(),this._cacheColumnDefs();const n=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||n,this._forceRecalculateCellWidths=n,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}ngOnDestroy(){[this._rowOutlet.viewContainer,this._headerRowOutlet.viewContainer,this._footerRowOutlet.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._onDestroy.next(),this._onDestroy.complete(),m(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();const e=this._dataDiffer.diff(this._renderRows);if(!e)return this._updateNoDataRow(),void this.contentChanged.next();const n=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,n,(i,r,a)=>this._getEmbeddedViewArgs(i.item,a),i=>i.item.data,i=>{1===i.operation&&i.context&&this._renderCellTemplateForItem(i.record.item.rowDef,i.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(i=>{n.get(i.currentIndex).context.$implicit=i.item.data}),this._updateNoDataRow(),this._ngZone&&o.R0b.isInAngularZone()?this._ngZone.onStable.pipe((0,he.q)(1),(0,T.R)(this._onDestroy)).subscribe(()=>{this.updateStickyColumnStyles()}):this.updateStickyColumnStyles(),this.contentChanged.next()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){const e=this._getRenderedRows(this._headerRowOutlet),i=this._elementRef.nativeElement.querySelector("thead");i&&(i.style.display=e.length?"":"none");const r=this._headerRowDefs.map(a=>a.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,r,"top"),this._headerRowDefs.forEach(a=>a.resetStickyChanged())}updateStickyFooterRowStyles(){const e=this._getRenderedRows(this._footerRowOutlet),i=this._elementRef.nativeElement.querySelector("tfoot");i&&(i.style.display=e.length?"":"none");const r=this._footerRowDefs.map(a=>a.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,r,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,r),this._footerRowDefs.forEach(a=>a.resetStickyChanged())}updateStickyColumnStyles(){const e=this._getRenderedRows(this._headerRowOutlet),n=this._getRenderedRows(this._rowOutlet),i=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this._fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...n,...i],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((r,a)=>{this._addStickyColumnStyles([r],this._headerRowDefs[a])}),this._rowDefs.forEach(r=>{const a=[];for(let l=0;l<n.length;l++)this._renderRows[l].rowDef===r&&a.push(n[l]);this._addStickyColumnStyles(a,r)}),i.forEach((r,a)=>{this._addStickyColumnStyles([r],this._footerRowDefs[a])}),Array.from(this._columnDefsByName.values()).forEach(r=>r.resetStickyChanged())}_getAllRenderRows(){const e=[],n=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let i=0;i<this._data.length;i++){let r=this._data[i];const a=this._getRenderRowsForData(r,i,n.get(r));this._cachedRenderRowsMap.has(r)||this._cachedRenderRowsMap.set(r,new WeakMap);for(let l=0;l<a.length;l++){let c=a[l];const u=this._cachedRenderRowsMap.get(c.data);u.has(c.rowDef)?u.get(c.rowDef).push(c):u.set(c.rowDef,[c]),e.push(c)}}return e}_getRenderRowsForData(e,n,i){return this._getRowDefs(e,n).map(a=>{const l=i&&i.has(a)?i.get(a):[];if(l.length){const c=l.shift();return c.dataIndex=n,c}return{data:e,rowDef:a,dataIndex:n}})}_cacheColumnDefs(){this._columnDefsByName.clear(),P(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(n=>{this._columnDefsByName.has(n.name),this._columnDefsByName.set(n.name,n)})}_cacheRowDefs(){this._headerRowDefs=P(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=P(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=P(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);const e=this._rowDefs.filter(n=>!n.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){const e=(a,l)=>a||!!l.getColumnsDiff(),n=this._rowDefs.reduce(e,!1);n&&this._forceRenderDataRows();const i=this._headerRowDefs.reduce(e,!1);i&&this._forceRenderHeaderRows();const r=this._footerRowDefs.reduce(e,!1);return r&&this._forceRenderFooterRows(),n||i||r}_switchDataSource(e){this._data=[],m(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;m(this.dataSource)?e=this.dataSource.connect(this):function Fe(t){return!!t&&(t instanceof Oe.y||(0,ue.m)(t.lift)&&(0,ue.m)(t.subscribe))}(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=(0,fe.of)(this.dataSource)),this._renderChangeSubscription=e.pipe((0,T.R)(this._onDestroy)).subscribe(n=>{this._data=n||[],this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,n)=>this._renderRow(this._headerRowOutlet,e,n)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,n)=>this._renderRow(this._footerRowOutlet,e,n)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,n){const i=Array.from(n.columns||[]).map(l=>this._columnDefsByName.get(l)),r=i.map(l=>l.sticky),a=i.map(l=>l.stickyEnd);this._stickyStyler.updateStickyColumns(e,r,a,!this._fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){const n=[];for(let i=0;i<e.viewContainer.length;i++){const r=e.viewContainer.get(i);n.push(r.rootNodes[0])}return n}_getRowDefs(e,n){if(1==this._rowDefs.length)return[this._rowDefs[0]];let i=[];if(this.multiTemplateDataRows)i=this._rowDefs.filter(r=>!r.when||r.when(n,e));else{let r=this._rowDefs.find(a=>a.when&&a.when(n,e))||this._defaultRowDef;r&&i.push(r)}return i}_getEmbeddedViewArgs(e,n){return{templateRef:e.rowDef.template,context:{$implicit:e.data},index:n}}_renderRow(e,n,i,r={}){const a=e.viewContainer.createEmbeddedView(n.template,r,i);return this._renderCellTemplateForItem(n,r),a}_renderCellTemplateForItem(e,n){for(let i of this._getCellTemplates(e))C.mostRecentCellOutlet&&C.mostRecentCellOutlet._viewContainer.createEmbeddedView(i,n);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){const e=this._rowOutlet.viewContainer;for(let n=0,i=e.length;n<i;n++){const a=e.get(n).context;a.count=i,a.first=0===n,a.last=n===i-1,a.even=n%2==0,a.odd=!a.even,this.multiTemplateDataRows?(a.dataIndex=this._renderRows[n].dataIndex,a.renderIndex=n):a.index=this._renderRows[n].dataIndex}}_getCellTemplates(e){return e&&e.columns?Array.from(e.columns,n=>{const i=this._columnDefsByName.get(n);return e.extractCellTemplate(i)}):[]}_applyNativeTableSections(){const e=this._document.createDocumentFragment(),n=[{tag:"thead",outlets:[this._headerRowOutlet]},{tag:"tbody",outlets:[this._rowOutlet,this._noDataRowOutlet]},{tag:"tfoot",outlets:[this._footerRowOutlet]}];for(const i of n){const r=this._document.createElement(i.tag);r.setAttribute("role","rowgroup");for(const a of i.outlets)r.appendChild(a.elementRef.nativeElement);e.appendChild(r)}this._elementRef.nativeElement.appendChild(e)}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){const e=(n,i)=>n||i.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){this._stickyStyler=new Ue(this._isNativeHtmlTable,this.stickyCssClass,this._dir?this._dir.value:"ltr",this._coalescedStyleScheduler,this._platform.isBrowser,this.needsPositionStickyOnElement,this._stickyPositioningListener),(this._dir?this._dir.change:(0,fe.of)()).pipe((0,T.R)(this._onDestroy)).subscribe(n=>{this._stickyStyler.direction=n,this.updateStickyColumnStyles()})}_getOwnDefs(e){return e.filter(n=>!n._table||n._table===this)}_updateNoDataRow(){const e=this._customNoDataRow||this._noDataRow;if(!e)return;const n=0===this._rowOutlet.viewContainer.length;if(n===this._isShowingNoDataRow)return;const i=this._noDataRowOutlet.viewContainer;if(n){const r=i.createEmbeddedView(e.templateRef),a=r.rootNodes[0];1===r.rootNodes.length&&a?.nodeType===this._document.ELEMENT_NODE&&(a.setAttribute("role","row"),a.classList.add(e._contentClassName))}else i.clear();this._isShowingNoDataRow=n}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.ZZ4),o.Y36(o.sBO),o.Y36(o.SBq),o.$8M("role"),o.Y36(U.Is,8),o.Y36(xe.K0),o.Y36(be.t4),o.Y36(D),o.Y36(Q),o.Y36(ce.rL),o.Y36(te,12),o.Y36(o.R0b,8))},t.\u0275cmp=o.Xpm({type:t,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(e,n,i){if(1&e&&(o.Suo(i,B,5),o.Suo(i,w,5),o.Suo(i,H,5),o.Suo(i,E,5),o.Suo(i,O,5)),2&e){let r;o.iGM(r=o.CRH())&&(n._noDataRow=r.first),o.iGM(r=o.CRH())&&(n._contentColumnDefs=r),o.iGM(r=o.CRH())&&(n._contentRowDefs=r),o.iGM(r=o.CRH())&&(n._contentHeaderRowDefs=r),o.iGM(r=o.CRH())&&(n._contentFooterRowDefs=r)}},viewQuery:function(e,n){if(1&e&&(o.Gf(G,7),o.Gf(L,7),o.Gf(I,7),o.Gf(Y,7)),2&e){let i;o.iGM(i=o.CRH())&&(n._rowOutlet=i.first),o.iGM(i=o.CRH())&&(n._headerRowOutlet=i.first),o.iGM(i=o.CRH())&&(n._footerRowOutlet=i.first),o.iGM(i=o.CRH())&&(n._noDataRowOutlet=i.first)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(e,n){2&e&&o.ekj("cdk-table-fixed-layout",n.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:"multiTemplateDataRows",fixedLayout:"fixedLayout"},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[o._Bn([{provide:v,useExisting:t},{provide:D,useClass:b},{provide:Q,useClass:pe},{provide:te,useValue:null}])],ngContentSelectors:Ae,decls:6,vars:0,consts:[["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(e,n){1&e&&(o.F$t(Ne),o.Hsn(0),o.Hsn(1,1),o.GkF(2,0)(3,1)(4,2)(5,3))},dependencies:[G,L,I,Y],styles:[".cdk-table-fixed-layout{table-layout:fixed}"],encapsulation:2}),t})();function P(t,s){return t.concat(Array.from(s))}let qe=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[ce.Cl]}),t})();var we=_(3238);const Ze=[[["caption"]],[["colgroup"],["col"]]],We=["caption","colgroup, col"];let Ce=(()=>{class t extends j{constructor(){super(...arguments),this.stickyCssClass="mat-table-sticky",this.needsPositionStickyOnElement=!1}}return t.\u0275fac=function(){let s;return function(n){return(s||(s=o.n5z(t)))(n||t)}}(),t.\u0275cmp=o.Xpm({type:t,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-table"],hostVars:2,hostBindings:function(e,n){2&e&&o.ekj("mat-table-fixed-layout",n.fixedLayout)},exportAs:["matTable"],features:[o._Bn([{provide:D,useClass:b},{provide:j,useExisting:t},{provide:v,useExisting:t},{provide:Q,useClass:pe},{provide:te,useValue:null}]),o.qOj],ngContentSelectors:We,decls:6,vars:0,consts:[["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(e,n){1&e&&(o.F$t(Ze),o.Hsn(0),o.Hsn(1,1),o.GkF(2,0)(3,1)(4,2)(5,3))},dependencies:[G,L,I,Y],styles:["mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}.mat-table-sticky{position:sticky !important}.mat-table-fixed-layout{table-layout:fixed}"],encapsulation:2}),t})(),oe=(()=>{class t extends k{}return t.\u0275fac=function(){let s;return function(n){return(s||(s=o.n5z(t)))(n||t)}}(),t.\u0275dir=o.lG2({type:t,selectors:[["","matCellDef",""]],features:[o._Bn([{provide:k,useExisting:t}]),o.qOj]}),t})(),se=(()=>{class t extends S{}return t.\u0275fac=function(){let s;return function(n){return(s||(s=o.n5z(t)))(n||t)}}(),t.\u0275dir=o.lG2({type:t,selectors:[["","matHeaderCellDef",""]],features:[o._Bn([{provide:S,useExisting:t}]),o.qOj]}),t})(),ne=(()=>{class t extends w{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}}return t.\u0275fac=function(){let s;return function(n){return(s||(s=o.n5z(t)))(n||t)}}(),t.\u0275dir=o.lG2({type:t,selectors:[["","matColumnDef",""]],inputs:{sticky:"sticky",name:["matColumnDef","name"]},features:[o._Bn([{provide:w,useExisting:t},{provide:"MAT_SORT_HEADER_COLUMN_DEF",useExisting:t}]),o.qOj]}),t})(),ie=(()=>{class t extends W{}return t.\u0275fac=function(){let s;return function(n){return(s||(s=o.n5z(t)))(n||t)}}(),t.\u0275dir=o.lG2({type:t,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-header-cell"],features:[o.qOj]}),t})(),re=(()=>{class t extends ${}return t.\u0275fac=function(){let s;return function(n){return(s||(s=o.n5z(t)))(n||t)}}(),t.\u0275dir=o.lG2({type:t,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:["role","gridcell",1,"mat-cell"],features:[o.qOj]}),t})(),De=(()=>{class t extends E{}return t.\u0275fac=function(){let s;return function(n){return(s||(s=o.n5z(t)))(n||t)}}(),t.\u0275dir=o.lG2({type:t,selectors:[["","matHeaderRowDef",""]],inputs:{columns:["matHeaderRowDef","columns"],sticky:["matHeaderRowDefSticky","sticky"]},features:[o._Bn([{provide:E,useExisting:t}]),o.qOj]}),t})(),Re=(()=>{class t extends H{}return t.\u0275fac=function(){let s;return function(n){return(s||(s=o.n5z(t)))(n||t)}}(),t.\u0275dir=o.lG2({type:t,selectors:[["","matRowDef",""]],inputs:{columns:["matRowDefColumns","columns"],when:["matRowDefWhen","when"]},features:[o._Bn([{provide:H,useExisting:t}]),o.qOj]}),t})(),ve=(()=>{class t extends K{}return t.\u0275fac=function(){let s;return function(n){return(s||(s=o.n5z(t)))(n||t)}}(),t.\u0275cmp=o.Xpm({type:t,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-header-row"],exportAs:["matHeaderRow"],features:[o._Bn([{provide:K,useExisting:t}]),o.qOj],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(e,n){1&e&&o.GkF(0,0)},dependencies:[C],encapsulation:2}),t})(),ke=(()=>{class t extends ee{}return t.\u0275fac=function(){let s;return function(n){return(s||(s=o.n5z(t)))(n||t)}}(),t.\u0275cmp=o.Xpm({type:t,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-row"],exportAs:["matRow"],features:[o._Bn([{provide:ee,useExisting:t}]),o.qOj],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(e,n){1&e&&o.GkF(0,0)},dependencies:[C],encapsulation:2}),t})(),nt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[qe,we.BQ,we.BQ]}),t})()},9652:(Me,V,_)=>{_.d(V,{x0:()=>z});let z=(g=21)=>crypto.getRandomValues(new Uint8Array(g)).reduce((m,y)=>m+((y&=63)<36?y.toString(36):y<62?(y-26).toString(36).toUpperCase():y>62?"-":"_"),"")}}]);