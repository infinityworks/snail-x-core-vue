(function(t){function e(e){for(var n,s,o=e[0],l=e[1],u=e[2],m=0,d=[];m<o.length;m++)s=o[m],i[s]&&d.push(i[s][0]),i[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},i={app:0},r=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var c=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("c21b"),i=a.n(n);i.a},1:function(t,e){},"265a":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",attrs:{id:"app"}},[a("link",{attrs:{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",integrity:"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO",crossorigin:"anonymous"}}),t._m(0),a("div",{staticClass:"navigation-bar",attrs:{id:"navbar"}},[a("ul",{staticClass:"nav"},[a("li",[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1),a("li",[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Enter")])],1),a("li",[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Results")])],1),a("li",[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Leaderboards")])],1),t.loggedIn?t._e():a("li",[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"login"}}},[t._v("Login")])],1),t.loggedIn?t._e():a("li",[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"register"}}},[t._v("Register")])],1),t.loggedIn?a("li",[a("p",{staticStyle:{color:"orange",display:"inline-block"}},[t._v("Welcome, "+t._s(t.userFirstName))]),a("router-link",{staticClass:"nav-link",staticStyle:{display:"inline-block"},attrs:{to:{name:"logout"}}},[t._v("Logout")])],1):t._e()])]),a("div",{attrs:{id:"sidebanner"}}),a("router-view",{on:{authenticated:t.setAuthenticated}})],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"snail-div"}},[a("img",{attrs:{id:"snail-img",src:"https://banner2.kisspng.com/20180225/avw/kisspng-escargot-sea-snail-clip-art-brown-cartoon-snail-5a92648eaab006.4875330315195434386992.jpg"}})])}],s=a("c93e"),o=a("2f62"),l={name:"App",data:function(){return{authenticated:!1}},computed:Object(s["a"])({},Object(o["b"])(["loggedIn","userEmail","userFirstName"])),methods:{setAuthenticated:function(t){this.authenticated=t}}},u=l,c=(a("034f"),a("2877")),m=Object(c["a"])(u,i,r,!1,null,null,null);m.options.__file="App.vue";var d=m.exports,p=a("8c4f"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"register"}},[a("form",{attrs:{id:"reg"},on:{submit:function(e){return e.preventDefault(),t.validateForm(e)}}},[a("h3",{staticClass:"page-title"},[t._v("Register")]),a("hr"),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.firstName,expression:"firstName"}],staticClass:"form-control",attrs:{type:"text",name:"firstName",placeholder:"First Name",maxlength:"100"},domProps:{value:t.firstName},on:{input:function(e){e.target.composing||(t.firstName=e.target.value)}}}),a("p",{staticClass:"validation-alert",attrs:{id:"fName"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.lastName,expression:"lastName"}],staticClass:"form-control",attrs:{type:"text",name:"lastName",placeholder:"Last Name",maxlength:"100"},domProps:{value:t.lastName},on:{input:function(e){e.target.composing||(t.lastName=e.target.value)}}}),a("p",{staticClass:"validation-alert",attrs:{id:"lName"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"text",name:"email",placeholder:"Email",maxlength:"100"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("p",{staticClass:"validation-alert",attrs:{id:"email"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",name:"password",placeholder:"Password",maxlength:"100"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("p",{staticClass:"validation-alert",attrs:{id:"psswd"}}),a("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Register"}}),a("button",{staticClass:"btn btn-warning",attrs:{type:"button",onclick:"window.history.back()"}},[t._v("Back")])])])])},h=[],v={name:"Register",data:function(){return{firstName:"",lastName:"",email:"",password:"",allValid:!0}},computed:{missingFirstName:function(){return""===this.firstName},missingLastName:function(){return""===this.lastName},invalidEmail:function(){return!1===this.isEmail(this.email)},duplicateEmail:function(){return this.email_in_db(this.email)},invalidPassword:function(){return!1===this.isPassword(this.password)}},methods:{isEmail:function(t){var e=/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;return e.test(t)},isPassword:function(t){var e=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;return e.test(t)},validateFirstName:function(){this.missingFirstName?(document.getElementById("fName").innerHTML="First name is required.",this.allValid=!1):document.getElementById("fName").innerHTML=""},validateLastName:function(){this.missingLastName?(document.getElementById("lName").innerHTML="Last name is required.",this.allValid=!1):document.getElementById("lName").innerHTML=""},validatePassword:function(){this.invalidPassword?(document.getElementById("psswd").innerHTML="Password must be at least 8 characters long, and contain one number and one special character.",this.allValid=!1):document.getElementById("psswd").innerHTML=""},validateEmail:function(){var t=this;this.invalidEmail?(document.getElementById("email").innerHTML="Email is required, and must be of a valid email format.",this.allValid=!1):this.duplicateEmail.then(function(e){e?(document.getElementById("email").innerHTML="User account with this email already exists.",t.allValid=!1):document.getElementById("email").innerHTML=""}).then(function(){t.allValid&&t.register()})},validateForm:function(t){this.allValid=!0,this.validateFirstName(),this.validateLastName(),this.validatePassword(),this.validateEmail(),t.preventDefault()},email_in_db:function(){return this.$store.dispatch("emailInDB",{email:this.email}).then(function(t){var e=Boolean(t);return!!e})},register:function(){var t=this;this.$store.dispatch("registerUser",{firstName:this.firstName,lastName:this.lastName,email:this.email,password:this.password}).then(function(){t.$router.push({name:"login"})})}}},g=v,_=(a("952c"),Object(c["a"])(g,f,h,!1,null,"ca3a53f8",null));_.options.__file="Register.vue";var b=_.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"home"}},[t.loggedIn?t._e():a("h1",{staticStyle:{color:"whitesmoke"}},[t._v("Welcome, please register or login.")])])},y=[],C={name:"home",computed:Object(s["a"])({},Object(o["b"])(["loggedIn"]))},k=C,N=(a("8b71"),Object(c["a"])(k,w,y,!1,null,null,null));N.options.__file="Home.vue";var E=N.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"login"}},[a("h3",{staticClass:"page-title"},[t._v("Login")]),a("hr"),a("form",{attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"text",name:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("button",{staticClass:"btn btn-primary",staticStyle:{float:"right"},attrs:{type:"button"},on:{click:function(e){t.login()}}},[t._v("Login")]),a("button",{staticClass:"btn btn-warning",staticStyle:{"margin-right":"1em",float:"right"},attrs:{type:"button",onclick:"window.history.back()"}},[t._v("Back\n        ")])])])},S=[],x={name:"Login",data:function(){return{email:"",password:""}},methods:{login:function(){var t=this;""!==this.email&&""!==this.password&&this.email.length<100&&this.password.length<100?this.$store.dispatch("loginUser",{email:this.email,password:this.password}).then(function(){t.$router.push({name:"home"})}).catch(function(){alert("Invalid login details please try again.")}):alert("Please enter a email and password of valid length (0 to 100 chars)")}}},L=x,I=(a("a468"),Object(c["a"])(L,P,S,!1,null,"df4256f4",null));I.options.__file="Login.vue";var O=I.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"logout"}})},j=[],T={name:"Logout",created:function(){var t=this;this.$store.dispatch("logoutUser").then(function(){t.$router.push({name:"home"})})}},M=T,B=Object(c["a"])(M,$,j,!1,null,null,null);B.options.__file="Logout.vue";var F=B.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"make-predictions"}},[a("h2",{staticClass:"page-title"},[t._v("Make Your Predictions!")]),a("h3",{staticClass:"round-name"},[t._v(t._s(t.round_name))]),a("hr"),t._m(0),t._m(1)])},H=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",[a("h4",{staticClass:"race-number"},[t._v("Race 1")]),a("hr"),a("input",{staticClass:"radio",attrs:{type:"radio",name:"snail",value:"1"}}),t._v("Snail 1: Snail Platt"),a("br"),a("p",{staticClass:"trainer-name"},[t._v("Trainer: Gareth")]),a("br"),a("input",{staticClass:"radio",attrs:{type:"radio",name:"snail",value:"2"}}),t._v("Snail 2: Christian Snale"),a("br"),a("p",{staticClass:"trainer-name"},[t._v("Trainer: Lucius")]),a("br"),a("input",{staticClass:"radio",attrs:{type:"radio",name:"snail",value:"3"}}),t._v(" Snail 3: Shelly Brooks"),a("br"),a("p",{staticClass:"trainer-name"},[t._v("Trainer: Susan")]),a("br"),a("hr")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",[a("h4",{staticClass:"race-number"},[t._v("Race 2")]),a("hr"),a("input",{staticClass:"radio",attrs:{type:"radio",name:"snail",value:"1"}}),t._v("Snail 1: Snail Platt"),a("br"),a("p",{staticClass:"trainer-name"},[t._v("Trainer: Gareth")]),a("br"),a("input",{staticClass:"radio",attrs:{type:"radio",name:"snail",value:"2"}}),t._v("Snail 2: Christian Snale"),a("br"),a("p",{staticClass:"trainer-name"},[t._v("Trainer: Lucius")]),a("br"),a("input",{staticClass:"radio",attrs:{type:"radio",name:"snail",value:"3"}}),t._v(" Snail 3: Shelly Brooks"),a("br"),a("p",{staticClass:"trainer-name"},[t._v("Trainer: Susan")]),a("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Submit Predictions"}}),a("button",{staticClass:"btn btn-warning",attrs:{type:"button",onclick:"window.history.back()"}},[t._v("Back")])])}],R={name:"Make-Predictions",data:function(){return{round_id:0,round_prize:0,round_start:"",round_finish:"",round_name:""}},created:function(){this.get_open_round()},watch:{$route:"get-open_round"},methods:{get_open_round:function(){var t=this;this.$store.dispatch("getOpenRound",{}).then(function(e){console.log(e),t.round_name=e.data.round_name})}}},U=R,A=(a("5831"),Object(c["a"])(U,V,H,!1,null,"67306a12",null));A.options.__file="MakePredictions.vue";var q=A.exports;n["a"].use(p["a"]);var z=new p["a"]({routes:[{path:"/",name:"home",component:E},{path:"/login",name:"login",component:O,meta:{requiresVisitor:!0}},{path:"/register",name:"register",component:b,meta:{requiresVisitor:!0}},{path:"/logout",name:"logout",component:F},{path:"/make-predictions",name:"make-predictions",component:q}]}),Z=a("bc3a"),D=a.n(Z);n["a"].use(o["a"]);var J=new o["a"].Store({state:{user:localStorage.getItem("user_email")||null,user_first_name:localStorage.getItem("user_first_name")||null},getters:{loggedIn:function(t){return null!==t.user},userEmail:function(t){return t.user},userFirstName:function(t){return t.user_first_name}},mutations:{loginUser:function(t,e){var a=e.user_email,n=e.user_first_name;t.user=a,t.user_first_name=n},logoutUser:function(t){t.user=null,t.user_first_name=null}},actions:{emailInDB:function(t,e){return new Promise(function(t,a){D.a.post("https://snail-x-core.herokuapp.com/check-duplicate-email",{email:e.email}).then(function(e){return t(e.data["result"])}).catch(function(t){console.log(t),a(t)})})},loginUser:function(t,e){return new Promise(function(a,n){D.a.post("https://snail-x-core.herokuapp.com/login-user",{email:e.email,password:e.password},{headers:{"Content-type":"application/json"}}).then(function(e){var n=e.data["user_email"],i=e.data["user_first_name"];localStorage.setItem("user_email",n),localStorage.setItem("user_first_name",i),t.commit("loginUser",{user_email:n,user_first_name:i}),a(e)}).catch(function(t){n(t)})})},registerUser:function(t,e){return new Promise(function(t,a){D.a.post("https://snail-x-core.herokuapp.com/register-user",{firstName:e.firstName,lastName:e.lastName,email:e.email,password:e.password}).then(function(e){t(e)}).catch(function(t){a(t)})})},logoutUser:function(t){return new Promise(function(e){localStorage.removeItem("user_email"),localStorage.removeItem("user_first_name"),t.commit("logoutUser"),e()})},getOpenRound:function(){return new Promise(function(t){D.a.get("http://localhost:5000/get-open-round",{}).then(function(e){t(e)})})}}}),G=a("28dd");a("54ba");n["a"].use(o["a"]),n["a"].config.productionTip=!1,n["a"].use(G["a"]),z.beforeEach(function(t,e,a){t.matched.some(function(t){return t.meta.requiresVisitor})&&J.getters.loggedIn?a({name:"home"}):a()}),new n["a"]({router:z,store:J,render:function(t){return t(d)}}).$mount("#app")},5831:function(t,e,a){"use strict";var n=a("8c20"),i=a.n(n);i.a},7147:function(t,e,a){},"85f1":function(t,e,a){},"8b71":function(t,e,a){"use strict";var n=a("85f1"),i=a.n(n);i.a},"8c20":function(t,e,a){},"952c":function(t,e,a){"use strict";var n=a("7147"),i=a.n(n);i.a},a468:function(t,e,a){"use strict";var n=a("265a"),i=a.n(n);i.a},c21b:function(t,e,a){}});
//# sourceMappingURL=app.37a02b98.js.map