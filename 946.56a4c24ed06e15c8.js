"use strict";(self.webpackChunkschool_mgmt=self.webpackChunkschool_mgmt||[]).push([[946],{6946:(Q,r,o)=>{o.r(r),o.d(r,{StaffModule:()=>M});var p=o(6895),u=o(4466),t=o(4650),f=o(9652),h=o(9646),S=o(5577),x=o(4004),C=o(7359),d=o(4482);const g=(e,n)=>(e.push(n),e);class l{constructor(n,a,s,m){this.id=n,this.city=a,this.country=s,this.pincode=m}}class c{constructor(n,a,s,m){this.id=n,this.name=a,this.classes=s,this.address=m}}let D=(()=>{class e{constructor(){}getStaffList(){let a=1;return(0,h.of)([new c((0,f.x0)(),"Staff 1",[1,2,3,4,5],new l((0,f.x0)(),"Delhi","India","123455")),new c((0,f.x0)(),"Staff 2",[1,2,7,3],new l((0,f.x0)(),"Delhi","India","123455")),new c((0,f.x0)(),"Staff 3",[1,2,8,9],new l((0,f.x0)(),"Delhi","India","123455")),new c((0,f.x0)(),"Staff 4",[1,2,5,6],new l((0,f.x0)(),"Delhi","India","123455")),new c((0,f.x0)(),"Staff 5",[4,6,3],new l((0,f.x0)(),"Delhi","India","123455")),new c((0,f.x0)(),"Staff 6",[3,6,7],new l((0,f.x0)(),"Delhi","India","123455")),new c((0,f.x0)(),"Staff 7",[2,6,3],new l((0,f.x0)(),"Delhi","India","123455")),new c((0,f.x0)(),"Staff 8",[8,3,2],new l((0,f.x0)(),"Delhi","India","123455")),new c((0,f.x0)(),"Staff 9",[2,6,2],new l((0,f.x0)(),"Delhi","India","123455"))]).pipe((0,S.z)(s=>s),(0,x.U)(s=>Object.assign({},s,{position:a++})),function y(){return(0,d.e)((e,n)=>{(function w(e,n){return(0,d.e)((0,C.U)(e,n,arguments.length>=2,!1,!0))})(g,[])(e).subscribe(n)})}())}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var i=o(5717);function L(e,n){1&e&&(t.TgZ(0,"th",9),t._uU(1," No. "),t.qZA())}function Z(e,n){if(1&e&&(t.TgZ(0,"td",10),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.hij(" ",a.position," ")}}function v(e,n){1&e&&(t.TgZ(0,"th",9),t._uU(1," Name "),t.qZA())}function T(e,n){if(1&e&&(t.TgZ(0,"td",10),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.hij(" ",a.name," ")}}function A(e,n){1&e&&(t.TgZ(0,"th",9),t._uU(1," Classes "),t.qZA())}function I(e,n){if(1&e&&(t.TgZ(0,"td",10),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.hij(" ",a.classes," ")}}function N(e,n){1&e&&(t.TgZ(0,"th",9),t._uU(1," city "),t.qZA())}function U(e,n){if(1&e&&(t.TgZ(0,"td",10),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.hij(" ",null==a||null==a.address?null:a.address.city," ")}}function Y(e,n){1&e&&t._UZ(0,"tr",11)}function B(e,n){1&e&&t._UZ(0,"tr",12)}const R=[{path:"",component:(()=>{class e{constructor(a){this.staffService=a,this.staffList=[],this.displayedColumns=["position","name","classes","city"]}ngOnInit(){this.staffService.getStaffList().subscribe({next:a=>{this.staffList=a,console.log(this.staffList)}})}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(D))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-staff-list"]],decls:15,vars:3,consts:[["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","position"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","classes"],["matColumnDef","city"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(a,s){1&a&&(t.TgZ(0,"table",0),t.ynx(1,1),t.YNc(2,L,2,0,"th",2),t.YNc(3,Z,2,1,"td",3),t.BQk(),t.ynx(4,4),t.YNc(5,v,2,0,"th",2),t.YNc(6,T,2,1,"td",3),t.BQk(),t.ynx(7,5),t.YNc(8,A,2,0,"th",2),t.YNc(9,I,2,1,"td",3),t.BQk(),t.ynx(10,6),t.YNc(11,N,2,0,"th",2),t.YNc(12,U,2,1,"td",3),t.BQk(),t.YNc(13,Y,1,0,"tr",7),t.YNc(14,B,1,0,"tr",8),t.qZA()),2&a&&(t.Q6J("dataSource",s.staffList),t.xp6(13),t.Q6J("matHeaderRowDef",s.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",s.displayedColumns))},dependencies:[i.BZ,i.fO,i.as,i.w1,i.Dz,i.nj,i.ge,i.ev,i.XQ,i.Gk]}),e})()}];let j=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.Bz.forChild(R),u.Bz]}),e})(),M=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.ez,j,i.p0]}),e})()}}]);