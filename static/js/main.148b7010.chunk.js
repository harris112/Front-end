(this["webpackJsonpcrime-alert"]=this["webpackJsonpcrime-alert"]||[]).push([[0],{180:function(e,t,a){e.exports=a(405)},185:function(e,t,a){},187:function(e,t,a){},405:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(80),c=a.n(i),o=(a(185),a(2)),l=a.n(o),s=a(29),u=a(7),m=a(8);a(187);function d(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"title-text"},"CRIME FIGHTERS"),r.a.createElement("h4",null,"Take justice in your own hands."),r.a.createElement("div",{style:{marginTop:20}}),r.a.createElement("button",{className:"mdc-button mdc-button--raised general"},r.a.createElement("a",{"data-toggle":"tab",href:"#view"},"View Crime Alerts")),r.a.createElement("button",{className:"mdc-button mdc-button--raised general"},r.a.createElement("a",{"data-toggle":"tab",href:"#form"},"Report a Crime")),r.a.createElement("div",{style:{marginTop:30}}),r.a.createElement("img",{width:"340px",height:"200px",src:"https://pngimg.com/uploads/handcuffs/handcuffs_PNG33.png",alt:"logo"}),r.a.createElement("div",{style:{marginTop:20}}),r.a.createElement("h6",null,"Join our gamified crime alert community today."),r.a.createElement("button",{className:"mdc-button mdc-button--raised general"},r.a.createElement("a",{"data-toggle":"tab",href:"#register"},"Register Now")))}var p=a(5),f=(a(188),{apiKey:"AIzaSyCUYFOJIWpUXGo51TvSiu0am3ov1bTenFA",authDomain:"crime-alert-22ab6.firebaseapp.com",projectId:"crime-alert-22ab6",storageBucket:"crime-alert-22ab6.appspot.com",messagingSenderId:"1016818394710",appId:"1:1016818394710:web:98b1c9fb98af95aefb3df7",measurementId:"G-62L51TS7SP"}),h=(a(406),p.a.initializeApp(f)),v=p.a.firestore();p.a.auth().languageCode="en";var b=["Beginner","Watcher","Patrol Guard","Crime Fighter","Bane of Criminals","Batman"],g=["white","darkseagreen","lightblue","mediumpurple","lightcoral","gold"];function E(){return(E=Object(u.a)(l.a.mark((function e(t,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){h.auth().signInWithEmailAndPassword(t,a).then(function(){var t=Object(u.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:k().then(function(){var t=Object(u.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(a.uid);case 2:n=t.sent,e(Object(s.a)(Object(s.a)({},a),n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){console.log("Login failed: ",e.message),n(e)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return y.apply(this,arguments)}function y(){return(y=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h.auth().signOut().then((function(){console.log("Successful log out"),window.location.replace("#home"),window.location.reload()})).catch((function(e){console.log("Logout failed ",e)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(u.a)(l.a.mark((function e(t,a,n,r){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,i){h.auth().createUserWithEmailAndPassword(t,a).then((function(a){setTimeout((function(){v.collection("user").doc(a.user.uid).set({email:t,name:n,image_url:r,uid:a.user.uid,coins:100,rep:0,upvotes_list:[],downvotes_list:[]}).then((function(){e(a.user)})).catch((function(e){i(e)}))}),100)})).catch((function(e){i(e)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return j.apply(this,arguments)}function j(){return(j=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){h.auth().onAuthStateChanged((function(a){a?e(a):t(!1)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){return x.apply(this,arguments)}function x(){return(x=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,a){v.collection("user").doc(t).get().then((function(t){t.exists?e(t.data()):a(null)})).catch((function(e){a(e)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){return F.apply(this,arguments)}function F(){return(F=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,a){v.collection("comment").where("alert_id","==",t).get().then((function(t){t.empty?e([]):e(t.docs.map((function(e){return e.data()})))})).catch((function(e){a(e)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return(_=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.collection("alert").get();case 2:return t=e.sent,a=[],t.forEach((function(e){a.push(Object(s.a)({id:e.id},e.data()))})),e.abrupt("return",Promise.all(a.map(function(){var e=Object(u.a)(l.a.mark((function e(t){var a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t.uid);case 2:return a=e.sent,n=Math.min(Math.floor(a.rep/200),b.length-1),t.uname=a.name,t.ucolor=g[n],e.next=8,S(t.id);case 8:return r=e.sent,e.next=11,Promise.all(r.map(function(){var e=Object(u.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t.uid);case 2:return a=e.sent,n=Math.min(Math.floor(a.rep/200),b.length-1),t.uname=a.name,t.ucolor=g[n],e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 11:return t.comments=e.sent,e.abrupt("return",t);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return(P=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){v.collection("shop").get().then((function(t){var a=[];t.forEach((function(e){a.push(Object(s.a)({id:e.id},e.data()))})),e(a)})).catch((function(e){t(e)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=Object(u.a)(l.a.mark((function e(t,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",v.collection("user").doc(a).update({coins:p.a.firestore.FieldValue.increment(-t)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(){return(V=Object(u.a)(l.a.mark((function e(t,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v.collection("alert").doc(t).update({votes:p.a.firestore.FieldValue.increment(1)}).then((function(){v.collection("user").doc(a).update({upvotes_list:p.a.firestore.FieldValue.arrayUnion(t),coins:p.a.firestore.FieldValue.increment(10),rep:p.a.firestore.FieldValue.increment(100)})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){return(L=Object(u.a)(l.a.mark((function e(t,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v.collection("alert").doc(t).update({votes:p.a.firestore.FieldValue.increment(-1)}).then((function(){v.collection("user").doc(a).update({downvotes_list:p.a.firestore.FieldValue.arrayUnion(t),coins:p.a.firestore.FieldValue.increment(-10),rep:p.a.firestore.FieldValue.increment(-100)})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(){return(R=Object(u.a)(l.a.mark((function e(t,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v.collection("alert").doc(t).update({votes:p.a.firestore.FieldValue.increment(-1)}).then((function(){v.collection("user").doc(a).update({upvotes_list:p.a.firestore.FieldValue.arrayRemove(t),coins:p.a.firestore.FieldValue.increment(-10),rep:p.a.firestore.FieldValue.increment(-100)})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(){return(A=Object(u.a)(l.a.mark((function e(t,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v.collection("alert").doc(t).update({votes:p.a.firestore.FieldValue.increment(1)}).then((function(){v.collection("user").doc(a).update({downvotes_list:p.a.firestore.FieldValue.arrayRemove(t),coins:p.a.firestore.FieldValue.increment(10),rep:p.a.firestore.FieldValue.increment(100)})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return(T=Object(u.a)(l.a.mark((function e(t,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v.collection("alert").doc(t).update({votes:p.a.firestore.FieldValue.increment(-2)}).then((function(){v.collection("user").doc(a).update({upvotes_list:p.a.firestore.FieldValue.arrayRemove(t)}).then((function(){v.collection("user").doc(a).update({downvotes_list:p.a.firestore.FieldValue.arrayUnion(t),coins:p.a.firestore.FieldValue.increment(-20),rep:p.a.firestore.FieldValue.increment(-200)})}))}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(){return(M=Object(u.a)(l.a.mark((function e(t,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v.collection("alert").doc(t).update({votes:p.a.firestore.FieldValue.increment(2)}).then((function(){v.collection("user").doc(a).update({downvotes_list:p.a.firestore.FieldValue.arrayRemove(t)}).then((function(){v.collection("user").doc(a).update({upvotes_list:p.a.firestore.FieldValue.arrayUnion(t),coins:p.a.firestore.FieldValue.increment(20),rep:p.a.firestore.FieldValue.increment(200)})}))}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(){return(U=Object(u.a)(l.a.mark((function e(t,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){v.collection("alert").doc(t).set(Object(s.a)({},a)).then((function(){e("Submitted.")})).catch((function(e){n(e)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return(I=Object(u.a)(l.a.mark((function e(t,a,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,r){v.collection("comment").add({alert_id:t,uid:a,description:n,post_time:(new Date).toLocaleString()}).then((function(){e("Posted."),window.location.reload()})).catch((function(e){r(e)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var q=a(6),W=a(11);function G(e){var t=e.id,a=e.title,i=e.post_time,c=e.votes,o=e.contact,l=e.description,s=e.user_uid,u=e.uid,d=e.comments,p=e.uname,f=e.ucolor,h=e.location,v=e.upvoted,b=e.downvoted,g=Object(n.useState)(v),E=Object(m.a)(g,2),w=E[0],y=E[1],N=Object(n.useState)(b),k=Object(m.a)(N,2),j=k[0],O=k[1],x=Object(n.useState)(c),S=Object(m.a)(x,2),F=S[0],_=S[1],P=Object(n.useState)(!1),C=Object(m.a)(P,2),U=C[0],G=C[1];return Object(n.useEffect)((function(){y(v),O(b),_(c)}),[v,b,c]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h6",{className:"card-subtitle2",style:{color:f}},p),r.a.createElement("h5",{className:"card-title"},a),r.a.createElement("h6",{className:"card-subtitle"},i),r.a.createElement("p",{className:"card-text"},l),r.a.createElement("div",{className:"card-minor"},r.a.createElement("div",{className:"card-extra"},o),null!=h&&r.a.createElement("div",{className:"card-loc"},h.latitude,", ",h.longitude)),r.a.createElement("button",{onClick:function(){w?(!function(e,t){R.apply(this,arguments)}(t,s),_(F-1),y(!1)):(j?(!function(e,t){M.apply(this,arguments)}(t,s),_(F+2)):(!function(e,t){V.apply(this,arguments)}(t,s),_(F+1)),y(!0),O(!1))},class:!0===w?"stat-item-marked":"stat-item"}," ",r.a.createElement("i",{class:"fa fa-thumbs-up icon"}))," \xa0",F,"\xa0\xa0",r.a.createElement("button",{onClick:function(){j?(!function(e,t){A.apply(this,arguments)}(t,s),_(F+1),O(!1)):(w?(!function(e,t){T.apply(this,arguments)}(t,s),_(F-2)):(!function(e,t){L.apply(this,arguments)}(t,s),_(F-1)),O(!0),y(!1))},class:!0===j?"stat-item-marked":"stat-item"}," ",r.a.createElement("i",{class:"fa fa-thumbs-down icon"})),"\xa0\xa0",r.a.createElement("button",{id:"comment-btn",onClick:function(){return G(!U)},class:U?"stat-item-marked":"stat-item"}," ",r.a.createElement("i",{class:"fa fa-comments icon"})))),r.a.createElement("div",{className:"comments-list"},U&&d.map((function(e){var t=e.description,a=e.post_time,n=(e.uid,e.uname),i=e.ucolor;return r.a.createElement("div",{className:"comment-body"},r.a.createElement("h6",{className:"comment-name",style:{color:i}},n),r.a.createElement("h6",{className:"comment-time"},a),r.a.createElement("h5",{className:"comment-desc"},t))})),U&&r.a.createElement(q.d,{initialValues:{comment:""},validationSchema:W.a({comment:W.b()}),onSubmit:function(e,a){var n=a.setSubmitting;setTimeout((function(){(function(e,t,a){return I.apply(this,arguments)})(t,u,e.comment).then((function(e){n(!1)})).catch((function(e){n(!1)}))}),400)}},(function(e){var t=e.touched,a=e.errors,n=e.isSubmitting;return r.a.createElement(q.c,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-8 form-group"},r.a.createElement("small",null,"Comment"),r.a.createElement(q.b,{type:"text",name:"comment",placeholder:"Enter your comment here",className:"form-control ".concat(t.comment&&a.comment?"is-invalid":"")}),r.a.createElement(q.a,{component:"div",name:"comment",className:"invalid-feedback"})),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:"col-sm-2 comment-submit mdc-button mdc-button--raised general",disabled:n},n?r.a.createElement("div",{id:"login-spinner",className:"spinner-border",role:"status"}):"Post")))}))))}function B(e){var t=e.user,a=e.loading,n=e.alertsList;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Crime Logs"),r.a.createElement("p",null,"Displaying all posted crime alerts. ",r.a.createElement("i",null,"Be cautious of any fake alerts and report them to us.")),null==t?"Please login to view our alerts.":a?r.a.createElement("div",{id:"loading"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-border",role:"status"}))):0===n.length?r.a.createElement("p",null,"No alerts to display."):n.map((function(e){var a=e.id,n=e.title,i=e.post_time,c=e.votes,o=e.location,l=e.contact,s=e.description,u=e.comments,m=e.uid,d=e.uname,p=e.ucolor;return r.a.createElement(G,{id:a,title:n,uid:m,uname:d,ucolor:p,comments:u,user_uid:t.uid,post_time:i,votes:c,location:o,contact:l,description:s,upvoted:!!t&&t.upvotes_list.includes(a),downvoted:!!t&&t.downvotes_list.includes(a)})})))}var D=a(31),J=Object(D.withScriptjs)(Object(D.withGoogleMap)((function(e){var t=e.isMarkerShown,a=e.location;return a?r.a.createElement(D.GoogleMap,{defaultZoom:15,defaultCenter:{lat:a.latitude,lng:a.longitude}},t&&r.a.createElement(D.Marker,{position:{lat:a.latitude,lng:a.longitude}})):r.a.createElement(r.a.Fragment,null)}))),z=Object(D.withScriptjs)(Object(D.withGoogleMap)((function(e){var t=e.markerList,a=e.location;return r.a.createElement(D.GoogleMap,{defaultZoom:5,defaultCenter:{lat:a.latitude,lng:a.longitude}},t.map((function(e){if(null!==e)return r.a.createElement(D.Marker,{position:{lat:e.latitude,lng:e.longitude}})})))})));function H(e){e.user;var t=e.alertsList,a=e.loading,i=Object(n.useState)(null),c=Object(m.a)(i,2),o=c[0],l=c[1];return Object(n.useEffect)((function(){var e=t.find((function(e){return null!==e.location}));l(void 0===e?null:e.location)}),[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Locate"),r.a.createElement("p",null,"The ",r.a.createElement("b",null,"markers")," represent all crime alerts submitted by other Crime Fighters."),!a&&0!==t.length&&r.a.createElement(z,{googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyDljegl-khc3VGfDMlG_2BpPF21jyFy5Ss&libraries=places&v=weekly",location:o,markerList:t.map((function(e){return e.location})),loadingElement:r.a.createElement("div",{style:{height:"100%"}}),containerElement:r.a.createElement("div",{style:{height:"330px"}}),mapElement:r.a.createElement("div",{style:{height:"100%"}})}),r.a.createElement("br",null),r.a.createElement("br",null))}var Y=a(23),Z=a.n(Y),K=Z.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,timerProgressBar:!0,onOpen:function(e){e.addEventListener("mouseenter",Z.a.stopTimer),e.addEventListener("mouseleave",Z.a.resumeTimer)}});function X(e){var t=e.user,a=Object(n.useState)(null),i=Object(m.a)(a,2),c=i[0],o=i[1];function l(){if("geolocation"in navigator){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords.latitude,a=e.coords.longitude,n=new p.a.firestore.GeoPoint(t,a);o(n)}),(function(){alert("Sorry, no position available.")}))}else alert("getCurrentPosition Error")}return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"Report a Crime"),r.a.createElement("p",null,"When a criminal activity is suspected, members are encouraged to report to authorities, and not to intervene. ",r.a.createElement("br",null),r.a.createElement("i",null,"Any false reports will be downvoted and bad reputation can lead to an account ban so please refrain from such activity.")),r.a.createElement("div",{className:"formik"},r.a.createElement(q.d,{initialValues:{title:"",description:"",contact:""},validationSchema:W.a({title:W.b().required("Please give an appropriate title and category to the alert."),description:W.b().required("A complete description about the crime details and the suspect you witnessed is required."),contact:W.b().required("Contact details are required for community verification and for the legal enforcement authorities.")}),onSubmit:function(e,a){var n=a.setSubmitting;setTimeout((function(){var a={title:e.title,description:e.description,contact:e.contact,post_time:(new Date).toLocaleString(),uid:t.uid,votes:0,location:c};console.log(a),function(e,t){return U.apply(this,arguments)}(t.uid,a).then((function(e){n(!1),K.fire({icon:"success",title:"Submitted the crime alert successfully."}),setTimeout((function(){window.location.reload()}),1500)})).catch((function(e){n(!1),Z.a.fire({title:"Invalid details. Please try again.",text:e.message,icon:"error",timer:2500})}))}),400)}},(function(e){var t=e.touched,a=e.errors,n=e.isSubmitting;return r.a.createElement(q.c,{className:"spaced-form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("small",null,"Title"),r.a.createElement(q.b,{type:"text",name:"title",placeholder:"Enter title",className:"form-control ".concat(t.title&&a.title?"is-invalid":"")}),r.a.createElement(q.a,{component:"div",name:"title",className:"invalid-feedback"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("small",null,"Description"),r.a.createElement(q.b,{type:"text",name:"description",placeholder:"Enter description",className:"form-control ".concat(t.description&&a.description?"is-invalid":"")}),r.a.createElement(q.a,{component:"div",name:"description",className:"invalid-feedback"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{id:"location-btn",onClick:l,className:"mdc-button mdc-button--raised general"},r.a.createElement("small",null," Add Location ")),void 0!==c&&null!==c&&r.a.createElement(J,{isMarkerShown:!0,googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyDljegl-khc3VGfDMlG_2BpPF21jyFy5Ss&libraries=places&v=weekly",location:c,loadingElement:r.a.createElement("div",{style:{height:"100%"}}),containerElement:r.a.createElement("div",{style:{height:"400px"}}),mapElement:r.a.createElement("div",{style:{height:"100%"}})})),r.a.createElement("div",{className:"form-group"},r.a.createElement("small",null,"Contact"),r.a.createElement(q.b,{type:"text",name:"contact",placeholder:"Enter contact details",className:"form-control ".concat(t.contact&&a.contact?"is-invalid":"")}),r.a.createElement(q.a,{component:"div",name:"contact",className:"invalid-feedback"})),r.a.createElement("button",{type:"submit",className:"mdc-button mdc-button--raised general",disabled:n},n?r.a.createElement("div",{id:"login-spinner",className:"spinner-border",role:"status"}):"Report Crime"))})))))}function $(e){var t=e.name,a=e.image_url,n=e.email,i=e.rep,c=e.coins,o=Math.min(Math.floor(i/200),b.length-1);return r.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center"},r.a.createElement("img",{id:"profile-img",src:a,alt:t,style:{borderColor:g[o],borderStyle:"outset",borderWidth:"0.36rem"}}),r.a.createElement("br",null),r.a.createElement("h3",null,t),r.a.createElement("div",null,n),r.a.createElement("div",null,r.a.createElement("b",null,"Rank:")," ",b[o]),r.a.createElement("div",null,r.a.createElement("b",null,"Reputation:")," ",i),r.a.createElement("div",null,r.a.createElement("b",null,"Coins:")," ",c),r.a.createElement("br",null),r.a.createElement("button",{style:{marginLeft:15},onClick:w,className:"mdc-button mdc-button--raised general"},"Logout"))}function Q(e){var t=e.user;return null!=t?r.a.createElement($,{name:t.name,rank:t.rank,rep:t.rep,coins:t.coins,email:t.email,image_url:t.image_url}):r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"Welcome Back!"),r.a.createElement("div",{className:"formik"},r.a.createElement(q.d,{initialValues:{email:"",password:""},validationSchema:W.a({email:W.b().email("Invalid email address").required("An email address is required"),password:W.b().required("Password is required")}),onSubmit:function(e,t){var a=t.setSubmitting;setTimeout((function(){(function(e,t){return E.apply(this,arguments)})(e.email,e.password).then((function(e){a(!1),K.fire({icon:"success",title:"Signed in successfully."}),setTimeout((function(){window.location.reload()}),1500)})).catch((function(e){a(!1),Z.a.fire({title:"Invalid login details. Please try again.",text:e.message,icon:"error",timer:2500})}))}),400)}},(function(e){var t=e.touched,a=e.errors,n=e.isSubmitting;return r.a.createElement(q.c,null,r.a.createElement("div",{className:"form-group"},r.a.createElement("small",null,"Email"),r.a.createElement(q.b,{type:"email",name:"email",placeholder:"Enter email",className:"form-control ".concat(t.email&&a.email?"is-invalid":"")}),r.a.createElement(q.a,{component:"div",name:"email",className:"invalid-feedback"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("small",null,"Password"),r.a.createElement(q.b,{type:"password",name:"password",placeholder:"Enter password",className:"form-control ".concat(t.password&&a.password?"is-invalid":"")}),r.a.createElement(q.a,{component:"div",name:"password",className:"invalid-feedback"})),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:"mdc-button mdc-button--raised general",disabled:n},n?r.a.createElement("div",{id:"login-spinner",className:"spinner-border",role:"status"}):"Login"))}))),r.a.createElement("br",null),r.a.createElement("h6",null,"New user? Join our gamified crime alert community today."),r.a.createElement("button",{className:"mdc-button mdc-button--raised general"},r.a.createElement("a",{"data-toggle":"tab",href:"#register"},"Register"))))}function ee(e){var t=e.user;return null!=t?r.a.createElement($,{name:t.name,rank:t.rank,rep:t.rep,coins:t.coins,email:t.email,image_url:t.image_url}):r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"Join us today!"),r.a.createElement("div",{className:"formik"},r.a.createElement(q.d,{initialValues:{email:"",password:"",name:"",image_url:""},validationSchema:W.a({email:W.b().email("Invalid email address").required("An email address is required."),password:W.b().required("A password is required."),name:W.b().required("Please enter your full name."),image_url:W.b().required("A valid image URL is required for your display picture.")}),onSubmit:function(e,t){var a=t.setSubmitting;setTimeout((function(){(function(e,t,a,n){return N.apply(this,arguments)})(e.email,e.password,e.name,e.image_url).then((function(e){a(!1),K.fire({icon:"success",title:"Registered successfully. Please proceed to login."}),setTimeout((function(){window.location.replace("#login"),window.location.reload()}),1500)})).catch((function(e){a(!1),Z.a.fire({title:"Invalid details. Please try again.",text:e.message,icon:"error",timer:2500})}))}),400)}},(function(e){var t=e.touched,a=e.errors,n=e.isSubmitting;return r.a.createElement(q.c,{className:"spaced-form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("small",null,"Name"),r.a.createElement(q.b,{type:"text",name:"name",placeholder:"Enter name",className:"form-control ".concat(t.name&&a.name?"is-invalid":"")}),r.a.createElement(q.a,{component:"div",name:"name",className:"invalid-feedback"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("small",null,"Email"),r.a.createElement(q.b,{type:"email",name:"email",placeholder:"Enter email",className:"form-control ".concat(t.email&&a.email?"is-invalid":"")}),r.a.createElement(q.a,{component:"div",name:"email",className:"invalid-feedback"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("small",null,"Password"),r.a.createElement(q.b,{type:"password",name:"password",placeholder:"Enter password",className:"form-control ".concat(t.password&&a.password?"is-invalid":"")}),r.a.createElement(q.a,{component:"div",name:"password",className:"invalid-feedback"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("small",null,"Display Image URL"),r.a.createElement(q.b,{type:"text",name:"image_url",placeholder:"Enter an image URL for your display picture hosted online",className:"form-control ".concat(t.image_url&&a.image_url?"is-invalid":"")}),r.a.createElement(q.a,{component:"div",name:"image_url",className:"invalid-feedback"})),r.a.createElement("button",{type:"submit",className:"mdc-button mdc-button--raised general",disabled:n},n?r.a.createElement("div",{id:"login-spinner",className:"spinner-border",role:"status"}):"Register"))}))),r.a.createElement("br",null)))}function te(e){var t=e.image_url,a=e.uid,n=e.ucoins,i=e.description,c=e.title,o=e.coins,l=e.due_time;e.id;return r.a.createElement("div",{className:"col-sm-3 shop-card"},r.a.createElement("img",{className:"card-img-top shop-card-img",src:t,alt:c}),r.a.createElement("div",{className:"card-body shop-card-body"},r.a.createElement("h5",{className:"card-title shop-card-title"},c),r.a.createElement("p",{className:"card-text shop-card-text"},i),null!==l&&r.a.createElement("p",{className:"card-extra"},"Avail Until ",l.toDate().toLocaleString()),r.a.createElement("button",{onClick:function(){n<o?Z.a.fire({title:"Unable to purchase. You might have insufficient coins.",text:"Error.",icon:"error",timer:2500}):function(e,t){return C.apply(this,arguments)}(o,a).then((function(e){K.fire({icon:"success",title:"Purchase successful. Further details will be emailed to your later."}),window.location.reload()})).catch((function(e){Z.a.fire({title:"Unable to purchase.",text:e.message,icon:"error",timer:2500})}))},className:"btn btn-primary shop-btn"},o," Coins")))}function ae(e){var t=e.user,a=Object(n.useState)([]),i=Object(m.a)(a,2),c=i[0],o=i[1],s=Object(n.useState)(!0),d=Object(m.a)(s,2),p=d[0],f=d[1];return Object(n.useEffect)((function(){(function(){return P.apply(this,arguments)})().then(function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o(t),f(!1);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(){o([]),f(!1)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Shop"),t&&r.a.createElement("p",{className:"card-extra"},"Coins: ",t.coins),r.a.createElement("p",null,"Use your hard-earned coins from crime fighting to avail coupons, discounts and protection gear. "),r.a.createElement("div",{className:"row"},!p&&c.map((function(e){var a=e.title,n=e.description,i=e.coins,c=e.image_url,o=e.due_time,l=e.id;return r.a.createElement(te,{id:l,uid:t&&t.uid,ucoins:t&&t.coins,title:a,description:n,coins:i,image_url:c,due_time:o})}))))}var ne=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(null),o=Object(m.a)(c,2),p=o[0],f=o[1],h=Object(n.useState)([]),v=Object(m.a)(h,2),b=v[0],g=v[1],E=Object(n.useState)(!0),w=Object(m.a)(E,2),y=w[0],N=w[1];return Object(n.useEffect)((function(){k().then(function(){var e=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t.uid);case 2:a=e.sent,f(Object(s.a)(Object(s.a)({},t),a)),i(!0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(){f(null),i(!0)})),function(){return _.apply(this,arguments)}().then(function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g(t),N(!1);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(){g([]),N(!1)}))}),[]),a?r.a.createElement("div",{className:"App"},r.a.createElement("nav",{className:"navbar navbar-expand-sm bg-dark navbar-dark fixed-top"},r.a.createElement("a",{className:"navbar-brand title-text",href:"#home"},"Crime Fighters"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-target":"#collapsibleNavbar","data-toggle":"collapse"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"collapsibleNavbar"},r.a.createElement("ul",{className:"nav nav-tabs navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active","data-toggle":"tab",href:"#home"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link","data-toggle":"tab",href:"#login"},null==p?"Login":"Profile")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link","data-toggle":"tab",href:"#form"},"Report a Crime")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link","data-toggle":"tab",href:"#view"},"View Crime Log")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link","data-toggle":"tab",href:"#locate"},"Locate")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link","data-toggle":"tab",href:"#shop"},"Shop"))))),r.a.createElement("div",{className:"tab-content container",id:"main"},r.a.createElement("div",{id:"home",className:"tab-pane fade in active show"},r.a.createElement(d,{user:p})),r.a.createElement("div",{id:"login",className:"tab-pane fade"},r.a.createElement(Q,{user:p})),r.a.createElement("div",{id:"register",className:"tab-pane fade"},r.a.createElement(ee,{user:p})),r.a.createElement("div",{id:"view",className:"tab-pane fade"},r.a.createElement(B,{user:p,alertsList:b,loading:y})),r.a.createElement("div",{id:"locate",className:"tab-pane fade"},r.a.createElement(H,{user:p,alertsList:b,loading:y})),r.a.createElement("div",{id:"form",className:"tab-pane fade"},r.a.createElement(X,{user:p})),r.a.createElement("div",{id:"shop",className:"tab-pane fade"},r.a.createElement(ae,{user:p})))):r.a.createElement("div",{id:"loading-spinner",className:"spinner-border",role:"status"})},re=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ie(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(ne,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/gamified-crime-alert",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/gamified-crime-alert","/service-worker.js");re?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ie(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ie(t,e)}))}}()}},[[180,1,2]]]);
//# sourceMappingURL=main.148b7010.chunk.js.map