(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{53:function(e,t,a){e.exports=a.p+"static/media/welcome-09.a04120c5.png"},54:function(e,t,a){e.exports=a.p+"static/media/banner-06-06.045646f4.png"},55:function(e,t,a){e.exports=a.p+"static/media/bear.62026d4f.png"},56:function(e,t,a){e.exports=a.p+"static/media/bridge.fbcc1681.png"},57:function(e,t,a){e.exports=a.p+"static/media/people.966fdaf8.png"},58:function(e,t,a){e.exports=a.p+"static/media/tower.eb16a9b7.png"},62:function(e,t,a){e.exports=a.p+"static/media/Four.5fb4aa37.png"},67:function(e,t,a){e.exports=a(96)},72:function(e,t,a){},74:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(23),l=a.n(s),i=(a(72),a(8)),c=a(9),o=a(11),u=a(10),m=(a(73),a(74),a(15)),h=a(12),d=a.n(h),p=a(14),g=a(17),E=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleFormSubmit=function(e){e.preventDefault();var t=n.state.title,a=n.state.description,r=n.props.user.username;d.a.post("/api/threads",{title:t,description:a,user:r}).then((function(){n.props.getData(),n.setState({title:"",description:"",user:n.props.user.username})})).catch((function(e){return console.log(e)}))},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(g.a)({},a,r))},n.state={title:"",description:"",user:""},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return console.log("out of the props",this.props.user.username),r.a.createElement("div",null,r.a.createElement("form",{className:"thread-form",onSubmit:this.handleFormSubmit},r.a.createElement("label",null),r.a.createElement("input",{type:"text",name:"title",placeholder:"Enter title",value:this.state.title,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("br",null),r.a.createElement("label",null),r.a.createElement("textarea",{name:"description",placeholder:"Enter description",value:this.state.description,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Submit",className:"thread-form-button"})))}}]),a}(n.Component),f=function(e,t,a,n,r,s,l,i,c){return console.log("HAPPENING???????"),console.log(c,"amazing picture tinghy"),d.a.post("/api/auth/signup",{username:e,password:t,name:a,email:n,age:r,address:s,skills:l,bio:i,picture:c}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},b=function(e,t){return d.a.post("/api/auth/login",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},v=function(){return d.a.delete("/api/auth/logout").then((function(e){return e.data})).catch((function(e){return e.response.data}))},C=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={showMenu:!1},e.handleLogout=function(e){v().then((function(){e.setUser(null)}))},e.showMenu=function(t){t.preventDefault(),e.setState({showMenu:!0},(function(){document.addEventListener("click",e.closeMenu)}))},e.menuInteraction=function(){e.setState({showMenu:!e.state.showMenu})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"menu-bar"},r.a.createElement("p",null,"GLB"),r.a.createElement("button",{onClick:this.menuInteraction},"\u2630")),r.a.createElement("div",{className:"menu"},this.state.showMenu?r.a.createElement("nav",{className:"nav-style"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(p.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/profile"},"Profile")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/threads"},"Postboard")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/",onClick:function(){return e.handleLogout(e.props)}},"Logout")))):null," "))}}]),a}(n.Component),O=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={user:[]},e.componentDidMount=function(){d.a.get("/api/users/"+e.props.match.params.id).then((function(t){e.setState({user:t.data})}))},e}return Object(c.a)(a,[{key:"render",value:function(){if(console.log(this.props),this.state.user)return r.a.createElement("div",null,r.a.createElement("h3",null,this.state.user.name),r.a.createElement("p",null,this.state.thread.picture),r.a.createElement("p",null,this.state.thread.email))}}]),a}(n.Component),j=a(99),y=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={username:e.props.user.username,name:e.props.user.name,email:e.props.user.email,age:e.props.user.age,address:e.props.user.address,skills:e.props.user.skills,bio:e.props.user.bio},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(g.a)({},n,r))},e.handleSubmit=function(t){t.preventDefault();var a=e.props.user._id;d.a.put("/api/user/".concat(a),{username:e.props.user.username,name:e.state.name,picture:e.state.picture,email:e.state.email,age:e.state.age,address:e.state.address,skills:e.state.skills,bio:e.state.bio}).then((function(t){e.props.setUser({username:e.props.user.username,name:e.state.name,picture:e.state.picture,email:e.state.email,age:e.state.age,address:e.state.address,skills:e.state.skills,bio:e.state.bio}),e.props.toggleEditUser(),e.props.history.push("/profile")})).catch((function(e){console.log(e)}))},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"edit-user-container"},r.a.createElement("div",{className:"edit-user"},r.a.createElement(j.a,{onSubmit:this.handleSubmit},r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Label,null,"Name:"),r.a.createElement(j.a.Control,{type:"text",name:"name",value:this.state.name,onChange:this.handleChange})),r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Label,null,"Picture:"),r.a.createElement(j.a.Control,{type:"text",name:"picture",value:this.state.picture,onChange:this.handleChange})),r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Label,null,"Email:"),r.a.createElement(j.a.Control,{type:"text",name:"email",value:this.state.email,onChange:this.handleChange})),r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Label,null,"Age:"),r.a.createElement(j.a.Control,{type:"textarea",name:"age",value:this.state.age,onChange:this.handleChange})),r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Label,null,"Address:"),r.a.createElement(j.a.Control,{type:"text",name:"address",value:this.state.address,onChange:this.handleChange})),r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Label,null,"Skills:"),r.a.createElement(j.a.Control,{type:"text",name:"skills",value:this.state.skills,onChange:this.handleChange})),r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Label,null,"Bio:"),r.a.createElement(j.a.Control,{type:"textarea",name:"bio",value:this.state.bio,onChange:this.handleChange})),r.a.createElement("div",{className:"edit-user-buttons"},r.a.createElement("button",{type:"submit"},"Submit Changes"),r.a.createElement("button",{href:"/profile"},"Cancel")))))}}]),a}(n.Component),k=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={user:e.props.user,editUser:!1,error:null,name:"",picture:"",email:"",age:null,address:"",skills:[],bio:""},e.setUser=function(t){e.setState({user:t})},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(g.a)({},n,r))},e.handleSubmit=function(t){t.preventDefault();e.props.match.params.id;d.a.put("/user:id",{name:e.state.name,picture:e.state.picture,email:e.state.email,age:e.state.age,address:e.state.address,skilss:e.state.skills,bio:e.state.bio}).then((function(t){e.setState({name:t.data.name,picture:t.data.picture,email:t.data.email,age:t.data.age,address:t.data.address,skills:t.data.skills,bio:t.data.bio,editForm:!1}),e.props.history.push("/profile")})).catch((function(e){console.log(e)}))},e.toggleEditUser=function(){e.setState({editUser:!e.state.editUser})},e.getData=function(){var t=e.props.match.params.id;console.log(t,"ID"),d.a.get("/api/users/".concat(t)).then((function(t){console.log(t.data),e.setState({user:t.data,name:t.data.name,picture:t.data.picture,email:t.data.email,age:t.data.age,skills:t.data.skills,address:t.data.address,bio:t.data.bio})})).catch((function(t){console.log(t),404===t.response.status&&e.setState({error:"Not found"})}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.match.params.id?this.getData():this.setState({user:this.props.user})}},{key:"componentDidUpdate",value:function(e){e!==this.props&&this.setState({user:this.props.user})}},{key:"render",value:function(){return console.log(this.props.user),this.state.user?r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{user:this.state.user,setUser:this.setUser}),r.a.createElement("div",{className:"profile-page"},r.a.createElement("div",{className:"profile-info"},r.a.createElement("ul",null,r.a.createElement("h1",null,this.state.user.username,"'s profile"),r.a.createElement("img",{src:this.state.user.picture,alt:"Your face"}),r.a.createElement("li",null,"Username: ",this.state.user.username),r.a.createElement("li",null,"Picture: ",this.state.user.picture),r.a.createElement("li",null,"Email: ",this.state.user.email),r.a.createElement("li",null,"Name: ",this.state.user.name),r.a.createElement("li",null,"Age: ",this.state.user.age),r.a.createElement("li",null,"Address: ",this.state.user.address),r.a.createElement("li",null,"Skills:"," ",this.state.user.skills.map((function(e){return r.a.createElement("p",null,e)}))),r.a.createElement("li",null,"Bio: ",this.state.user.bio)),r.a.createElement("div",null,r.a.createElement("button",null)),r.a.createElement("div",{className:"user-details-edit-delete-buttons"},r.a.createElement("button",{onClick:this.toggleEditUser},"Edit User")),r.a.createElement("div",{className:"edit-user-form"},this.state.editUser&&r.a.createElement(y,Object.assign({},this.state,this.props,{setUser:this.props.setUser,handleChange:this.handleChange,handleSubmit:this.handleSubmit,toggleEditUser:this.toggleEditUser})))))):r.a.createElement("div",null,"Loading..")}}]),a}(r.a.Component),S=a(53),w=a.n(S),x=a(54),N=a.n(x),U=a(55),G=a.n(U),F=(a(56),a(57)),A=a.n(F),L=a(58),D=a.n(L),M=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).getAllThreads=function(){d.a.get("/api/threads").then((function(e){n.setState({listOfThreads:e.data})}))},n.getAllUsers=function(){d.a.get("/api/users").then((function(e){n.setState({listOfUsers:e.data})}))},n.state={listOfThreads:[],listOfUsers:[]},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.getAllThreads(),this.getAllUsers()}},{key:"render",value:function(){var e=this;return console.log("this is the list of threads",this.state.listOfThreads),console.log("these are the users",this.state.listOfUsers),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"threads"},r.a.createElement("div",{className:"threadlist"},r.a.createElement("div",{className:"add-thread"},r.a.createElement("img",{src:A.a,className:"people-icon"}),r.a.createElement("h2",null,"Add a New Thread"),r.a.createElement(E,{getData:function(){return e.getAllThreads()},user:this.props.user})," "),r.a.createElement("div",{className:"threadlist-results"},this.state.listOfThreads.map((function(e){var t="",a="";return t=e.user?e.user.username:"",a=e.user?e.user._id:"",r.a.createElement("div",{className:"threadlist-individual-result",key:e._id},r.a.createElement(p.b,{to:"/threads/".concat(e._id)},r.a.createElement("h3",null,e.title)),r.a.createElement(p.b,{to:"/profile/".concat(a)},r.a.createElement("h5",null,t)),r.a.createElement("p",null,e.description," "),r.a.createElement("div",{className:"threadlist-buttons"},r.a.createElement(p.b,{to:"/threads/".concat(e._id)},r.a.createElement("p",null,"Go to Post"))))}))))))}}]),a}(n.Component),I=a(39),T=a(38),P={fill:"#FC5E53",stroke:"#ffffff"},z=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return n.createElement("svg",{className:"Pin",width:"65",height:"65",viewBox:"0 0 29 28",style:P},n.createElement("path",{d:"M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3\n  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9\n  C20.1,15.8,20.2,15.8,20.2,15.7z"}))}}]),a}(n.PureComponent),_=(a(34),function(e){var t="https://api.mapbox.com/geocoding/v5/mapbox.places/".concat(e,".json?types=address&access_token=").concat("pk.eyJ1IjoicmFjaGVsZGx0IiwiYSI6ImNrYzdsMG9qZTBxOGMyc2xqMzV2ejd1czEifQ.4f9dZK4w0vGTCrStvdKzlQ");return d.a.get(t).then((function(e){return e.data.features[0].center})).catch((function(e){console.log(e)}))}),B=function(){var e=Object(n.useState)([]),t=Object(I.a)(e,2),a=t[0],s=t[1],l=Object(n.useState)({latitude:52.52,longitude:13.405,width:"200vh",height:"30vh",zoom:10}),i=Object(I.a)(l,2),c=i[0],o=i[1],u=[];u.map((function(e){return _(e)}));return Object(n.useEffect)((function(){d.a.get("/api/users").then((function(e){var t=e.data.map((function(e){return _(e.address)}));Promise.all(t).then((function(e){s(e)}))}))}),[]),Object(n.useEffect)((function(){}),[a]),Object(n.useEffect)((function(){var e=a.data;e&&e.forEach((function(e){u.push(e.address)}))}),[a]),r.a.createElement("div",null,r.a.createElement(T.b,Object.assign({},c,{mapboxApiAccessToken:"pk.eyJ1IjoicmFjaGVsZGx0IiwiYSI6ImNrYzdsMG9qZTBxOGMyc2xqMzV2ejd1czEifQ.4f9dZK4w0vGTCrStvdKzlQ",mapStyle:"mapbox://styles/racheldlt/ckd8ugjbx131v1imp0vnj1vvz",onViewportChange:function(e){o(e)}}),a.map((function(e){if(console.log(e),e)return r.a.createElement(T.a,{key:e._id,longitude:e[0],latitude:e[1]},r.a.createElement(z,{size:5}))}))))},H=function(e){return r.a.createElement("div",{className:"homepage"},r.a.createElement(C,null),r.a.createElement("div",{className:"abh-container"},r.a.createElement("a",{href:"/threads"},r.a.createElement("img",{className:"abh",src:N.a}))),r.a.createElement("h1",{className:"homepage-header"}),r.a.createElement("div",{className:"map-container"},r.a.createElement("div",{className:"mapbox"},r.a.createElement("p",null,r.a.createElement(B,null)))),r.a.createElement("div",{className:"homepage-threads"},r.a.createElement(M,{user:e.user})))},Z=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleFormSubmit=function(e){e.preventDefault();var t=n.state.name,a=n.state.email;d.a.post("/api/users/new",{name:t,email:a}).then((function(e){n.props.getData(),n.setState({name:"",email:""})})).catch((function(e){return console.log(e)}))},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(g.a)({},a,r))},n.state={name:"",email:""},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"name:"),r.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"email:"),r.a.createElement("textarea",{name:"email",value:this.state.email,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"submit",value:"Submit"})))}}]),a}(n.Component),V=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).getAllUsers=function(){d.a.get("/api/users").then((function(t){console.log(t),e.setState({listOfUsers:t.data})}))},e.state={listOfUsers:[]},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.getAllUsers()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{style:{width:"60%",float:"left"}},this.state.listOfUsers.map((function(e){return r.a.createElement("div",{key:e._id},r.a.createElement(p.b,{to:"/users/".concat(e._id)},r.a.createElement("h3",null,e.name)),r.a.createElement("p",{style:{maxWidth:"400px"}},e.email," "))}))),r.a.createElement("div",{style:{width:"40%",float:"right"}},r.a.createElement(Z,{getData:function(){return e.getAllUsers()}})," "))}}]),a}(n.Component),Y=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"welcome-page"},r.a.createElement("div",{className:"welcome-picture"},r.a.createElement("img",{src:w.a,alt:"pic"})),r.a.createElement("div",{className:"welcome-text"},r.a.createElement("h2",null,"Sign up to get help from native German speakers"),r.a.createElement("p",null),r.a.createElement("div",{className:"welcome-signup"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(p.b,{to:"/login"},"log in")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/signup"},"sign up")))))))}}]),a}(n.Component),q=a(100),J=a(98),K=[{label:"I can translate in writing",name:"write"},{label:"I can accompany to an Amt",name:"walk"},{label:"I can translate on a phone call",name:"call"},{label:"I can be a tandem partner",name:"tandem"},{label:"I'd like to hang out",name:"hang"}],Q=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:"",picture:"",name:"",email:"",age:null,address:"",skills:[],bio:"",write:"",hang:"",call:"",walk:"",tandem:""},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(g.a)({},n,r))},e.handleChangeChecked=function(t,a){var n=t.target,r=n.name;n.checked;console.log(r,a),e.setState(Object(g.a)({},r,a))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.username,r=a.password,s=a.name,l=a.picture,i=a.email,c=a.age,o=a.address,u=a.bio,m=[a.tandem,a.walk,a.call,a.write,a.hang].filter((function(e){return e}));console.log(l,"This is the picture"),f(n,r,s,i,c,o,m,u,l).then((function(t){t.message?e.setState({message:t.message,username:"",password:"",picture:"",age:null,name:"",email:"",address:"",skills:[],bio:""}):(e.props.setUser(t),e.props.history.push("/Home"))}))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"signup-page"},r.a.createElement("div",{className:"signup-form"},r.a.createElement("h2",null,"Sign up"),r.a.createElement(j.a,{onSubmit:this.handleSubmit,className:"signup-form-form"},r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Label,{htmlFor:"username"}),r.a.createElement(j.a.Control,{type:"text",name:"username",value:this.state.username,onChange:this.handleChange,id:"username",placeholder:"*Username: "})),r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Label,{htmlFor:"password"}," "),r.a.createElement(j.a.Control,{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,id:"password",placeholder:"*Password: "})),r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Label,{htmlFor:"email"}," "),r.a.createElement(j.a.Control,{type:"text",name:"email",value:this.state.email,onChange:this.handleChange,id:"email",placeholder:"*Email: "})),r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Label,{htmlFor:"name"}," "),r.a.createElement(j.a.Control,{type:"text",name:"name",value:this.state.name,onChange:this.handleChange,id:"name",placeholder:"Name: "})),r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Label,{htmlFor:"picture"},"  "),r.a.createElement(j.a.Control,{type:"text",name:"picture",value:this.state.picture,onChange:this.handleChange,id:"picture",placeholder:"Picture: "})),r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Label,{htmlFor:"address"}," "),r.a.createElement(j.a.Control,{type:"text",name:"address",value:this.state.address,onChange:this.handleChange,id:"address",placeholder:"*Address: "})),r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Label,{htmlFor:"age"}," "),r.a.createElement(j.a.Control,{type:"text",name:"age",value:this.state.age,onChange:this.handleChange,id:"age",placeholder:"Age: "})),r.a.createElement(j.a,null," ",["checkbox"].map((function(t){return r.a.createElement("div",{key:"inline-checkbox",className:"skills"},r.a.createElement("p",null,"Skills:"),K.map((function(t){return r.a.createElement(j.a.Check,{inline:!0,label:t.label,value:e.state.skills,type:"checkbox",onChange:function(a){return e.handleChangeChecked(a,t.label)},name:t.name,id:t.name,placeholder:"Skills: "})})))}))),r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Label,{htmlFor:"bio"}," "),r.a.createElement(j.a.Control,{type:"text",name:"bio",value:this.state.bio,onChange:this.handleChange,id:"bio",placeholder:"Bio: "})),this.state.message&&r.a.createElement(q.a,{variant:"danger"},this.state.message),r.a.createElement("div",{className:"signup-buttons"},r.a.createElement(J.a,{type:"submit"},"Sign Up"),r.a.createElement(J.a,{href:"/"},"Cancel")))),r.a.createElement("img",{src:D.a,className:"tower-icon"})))}}]),a}(n.Component),W=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:""},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(g.a)({},n,r))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.username,r=a.password;b(n,r).then((function(t){t.message?e.setState({message:t.message,username:"",password:""}):(e.props.setUser(t),e.props.history.push("/Home"))}))},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"login-page"},r.a.createElement("div",{className:"login-form"},r.a.createElement("h2",null,"Log In"),r.a.createElement(j.a,{onSubmit:this.handleSubmit,className:"login-form-form"},r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Label,{htmlFor:"username"}),r.a.createElement(j.a.Control,{type:"text",name:"username",value:this.state.username,onChange:this.handleChange,id:"username",placeholder:"Username"})),r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Label,{htmlFor:"password"}),r.a.createElement(j.a.Control,{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,id:"password",placeholder:"Password"})),this.state.message&&r.a.createElement(q.a,{variant:"danger"},this.state.message),r.a.createElement("div",{class:"login-buttons"},r.a.createElement(J.a,{type:"submit"},"Login"),r.a.createElement(J.a,{href:"/"},"Cancel")))),r.a.createElement("img",{src:G.a,className:"bear-icon"})))}}]),a}(n.Component),$=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"edit-thread"},r.a.createElement(j.a,{onSubmit:this.props.handleSubmit},r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Control,{type:"text",name:"title",value:this.props.title,onChange:this.props.handleChange})),r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Control,{type:"textarea",name:"description",value:this.props.description,onChange:this.props.handleChange})),r.a.createElement("div",{className:"edit-thread-buttons"},r.a.createElement("button",{type:"submit"},"Submit Changes"),r.a.createElement("button",{href:"/threads/".concat(this.props._id)},"Cancel"))))}}]),a}(n.Component),R=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={thread:[],editForm:!1,error:null,title:"",description:""},e.componentDidMount=function(){d.a.get("/api/threads/"+e.props.match.params.id).then((function(t){e.setState({thread:t.data})}))},e.deleteThread=function(){var t=e.props.match.params.id;d.a.delete("/api/threads/".concat(t)).then((function(){e.props.history.push("/threads")}))},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(g.a)({},n,r))},e.handleSubmit=function(t){t.preventDefault();var a=e.props.match.params.id;d.a.put("/api/threads/".concat(a),{title:e.state.title,description:e.state.description}).then((function(t){e.setState({thread:t.data,title:t.data.title,description:t.data.description,editForm:!1}),e.props.history.push("/threads/")})).catch((function(e){console.log(e)}))},e.toggleEditForm=function(){e.setState({editForm:!e.state.editForm})},e.getData=function(){var t=e.props.match.params.id;d.a.get("/api/threads/".concat(t)).then((function(t){console.log(t.data),e.setState({thread:t.data,title:t.data.title,description:t.data.description})})).catch((function(t){console.log(t.response),404===t.response.status&&e.setState({error:"Not found"})}))},e.componentDidMount=function(){e.getData()},e}return Object(c.a)(a,[{key:"render",value:function(){if(this.state.thread)return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null),r.a.createElement("div",{className:"thread-details"},r.a.createElement("div",{className:"thread-details-text"},r.a.createElement("h3",null,this.state.thread.title),r.a.createElement("p",null,this.state.thread.description),r.a.createElement("div",{className:"thread-details-buttons"},r.a.createElement(p.b,{to:"/threads/".concat(this.state.thread._id)},r.a.createElement("p",null,"Contact me"))),r.a.createElement("div",{className:"thread-details-edit-delete-buttons"},r.a.createElement("button",{onClick:this.toggleEditForm},"Edit Thread"),r.a.createElement("button",{onClick:this.deleteThread},"Delete Thread")),this.state.editForm&&r.a.createElement($,Object.assign({},this.state,{handleChange:this.handleChange,handleSubmit:this.handleSubmit})))))}}]),a}(n.Component),X=a(65),ee=function(e){var t=e.component,a=e.user,n=e.path,s=e.redirectPath,l=void 0===s?"/":s,i=Object(X.a)(e,["component","user","path","redirectPath"]);return r.a.createElement(m.b,{path:n,render:function(e){return a?r.a.createElement(t,Object.assign({},e,i,{user:a})):r.a.createElement(m.a,{to:l})}})},te=a(62),ae=a.n(te),ne=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"four"},r.a.createElement("img",{src:ae.a}),r.a.createElement("p",{style:{textAlign:"center"}},r.a.createElement(p.b,{to:"/home"},"Go to Home ")))}}]),a}(n.Component),re=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={user:e.props.user},e.setUser=function(t){e.setState({user:t})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return console.log("app user",this.state.user),r.a.createElement("div",{className:"app"},r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/",component:Y}),r.a.createElement(m.b,{exact:!0,path:"/Signup",render:function(t){return r.a.createElement(Q,Object.assign({setUser:e.setUser},t))}}),r.a.createElement(m.b,{exact:!0,path:"/Login",render:function(t){return r.a.createElement(W,Object.assign({setUser:e.setUser},t))}}),r.a.createElement(ee,{exact:!0,path:"/Home",user:this.state.user,component:H}),r.a.createElement(m.b,{exact:!0,path:"/users",component:V}),r.a.createElement(m.b,{exact:!0,path:"/profile",render:function(t){return r.a.createElement(k,Object.assign({setUser:e.setUser,user:e.state.user},t))}}),r.a.createElement(m.b,{exact:!0,path:"/profile/:id",setUser:this.setUser,user:this.state.user,component:k}),r.a.createElement(m.b,{exact:!0,path:"/users/:id",component:O}),r.a.createElement(m.b,{exact:!0,path:"/threads",render:function(t){return r.a.createElement(M,Object.assign({user:e.state.user},t))}}),r.a.createElement(m.b,{exact:!0,path:"/threads/:id",component:R}),r.a.createElement(m.b,{path:"*",component:ne})))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));d.a.get("/api/auth/loggedin").then((function(e){var t=e.data;console.log(t,"here is the user"),l.a.render(r.a.createElement(p.a,null,r.a.createElement(re,{user:t})),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[67,1,2]]]);
//# sourceMappingURL=main.da3e03be.chunk.js.map