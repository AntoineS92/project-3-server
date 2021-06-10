(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{15:function(e,t,a){},58:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),i=a(32),c=a.n(i),l=a(5),r=a(3),o=a(4),d=a(7),h=a(6),j=a(33),u=a.n(j).a.create({baseURL:"https://plantons.herokuapp.com",withCredentials:!0});function m(e){if(e.response.data)throw console.log(e.response&&e.response.data),e;throw e}var p={service:u,signup:function(e){return u.post("/api/auth/signup",e).then((function(e){return e.data})).catch(m)},signin:function(e){return u.post("/api/auth/signin",e).then((function(e){return e.data})).catch(m)},isLoggedIn:function(){return u.get("/api/auth/isLoggedIn").then((function(e){return e.data})).catch(m)},updateProfile:function(){return u.get("/api/auth/updateProfile").then((function(e){return e.data})).catch(m)},logout:function(){return u.get("/api/auth/logout").then((function(e){return e.data})).catch(m)},getPlants:function(){return u.get("/api/plants").then((function(e){return e.data})).catch(m)},updatePlant:function(e,t){return u.patch("/api/plants/update/".concat(e._id),t).then((function(e){return e.data})).catch(m)},createPlant:function(e){return u.post("/api/plants/create",e).then((function(e){return e.data})).catch(m)},deletePlant:function(e){return u.delete("/api/plants/delete/".concat(e._id)).then((function(e){return e.data})).catch(m)},getVariete:function(){return u.get("/api/variete").then((function(e){return e.data})).catch(m)},createVariete:function(e){return u.post("/api/variete/create",e).then((function(e){return e.data})).catch(m)},updateVariete:function(e){return u.patch("/api/variete/update/".concat(e._id),e).then((function(e){return e.data})).catch(m)},deleteVariete:function(e){return u.delete("/api/variete/delete/".concat(e._id)).then((function(e){return e.data})).catch(m)},userInfo:function(e){return u.get("/api/users/me").then((function(e){return e.data})).catch(m)}},b=s.a.createContext(),O=a(0),x=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={user:null,isLoggedIn:!1,isLoading:!0},e.setUser=function(t){e.setState({user:t,isLoggedIn:!0})},e.removeUser=function(){e.setState({user:null,isLoggedIn:!1})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.isLoggedIn().then((function(t){e.setState({user:t,isLoggedIn:!0,isLoading:!1})})).catch((function(t){e.setState({user:null,isLoggedIn:!1,isLoading:!1})}))}},{key:"render",value:function(){var e={user:this.state.user,setUser:this.setUser,removeUser:this.removeUser,isLoggedIn:this.state.isLoggedIn,isLoading:this.state.isLoading};return Object(O.jsx)(b.Provider,{value:e,children:this.props.children})}}]),a}(n.Component),g=a(2),f=a(14),v=function(e){return function(t){return Object(O.jsx)(b.Consumer,{children:function(a){return Object(O.jsx)(e,Object(f.a)(Object(f.a)({},t),{},{context:a}))}})}},N=(a(58),v((function(e){var t=e.context;return Object(O.jsxs)("nav",{className:"NavMain",children:[Object(O.jsx)(l.c,{exact:!0,to:"/",children:Object(O.jsx)("h3",{className:"logo",children:"App name"})}),Object(O.jsxs)("ul",{className:"nav-list",children:[t.isLoggedIn&&Object(O.jsxs)(s.a.Fragment,{children:[Object(O.jsx)("li",{children:Object(O.jsx)(l.c,{to:"/admin/adminPlants",children:"Admin Plants"})}),Object(O.jsx)("li",{children:Object(O.jsx)(l.c,{to:"/admin/adminVariete",children:"Admin Variete"})}),Object(O.jsx)("li",{children:Object(O.jsx)(l.c,{to:"/profile",children:t.user&&t.user.email})}),Object(O.jsx)("li",{children:Object(O.jsx)("p",{onClick:function(){p.logout().then((function(){t.removeUser()})).catch((function(e){console.log(e)}))},children:"Logout"})})]}),!t.isLoggedIn&&Object(O.jsxs)(s.a.Fragment,{children:[Object(O.jsx)("li",{children:Object(O.jsx)(l.c,{to:"/signin",children:"Log in"})}),Object(O.jsx)("li",{children:Object(O.jsx)(l.c,{to:"/signup",children:"Create account"})})]})]})]})}))),y=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={plants:[],selectedPlant:null,selectedPlantBorder:!1},e.handleClickedPlant=function(t,a){console.log("hello",t.currentTarget);var n=document.getElementsByClassName("veggieCard");console.log("HELEOIKFNHEZO0BF0",n);for(var s=0;s<n.length;s++)n[s].className="veggieCard";e.setState({selectedPlant:a,selectedPlantBorder:!e.state.selectedPlantBorder}),t.currentTarget.classList.toggle("active")},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.getPlants().then((function(t){console.log("plants data = ",t);var a=t;e.setState({plants:a})})).catch((function(e){console.log(e)})),p.getVariete().then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return console.log("STATE ",this.state.selectedPlant),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"container",children:Object(O.jsx)("div",{className:"plantList",children:this.state.plants.map((function(t){return Object(O.jsxs)("div",{className:"veggieCard",onClick:function(a){return e.handleClickedPlant(a,t)},children:[Object(O.jsx)("div",{className:"plantImage",children:Object(O.jsx)("img",{src:t.image,alt:"Plant"})}),Object(O.jsxs)("div",{className:"veggieCardInfo",children:[Object(O.jsx)("h2",{children:t.name}),Object(O.jsx)("h3",{children:t.nomLatin})]})]})}))})}),this.state.selectedPlant&&Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"singlePlant",children:[Object(O.jsx)("img",{src:this.state.selectedPlant.image,alt:"plant"}),Object(O.jsxs)("div",{className:"singlePlant title",children:[Object(O.jsx)("h3",{children:this.state.selectedPlant.name}),Object(O.jsx)("h4",{children:this.state.selectedPlant.nomLatin})]}),Object(O.jsxs)("div",{className:"singlePlant infos",children:[Object(O.jsxs)("article",{className:"articleInfo",children:[Object(O.jsx)("h5",{className:"infoTitle",children:"type"}),Object(O.jsx)("p",{className:"infoPara",children:this.state.selectedPlant.type})]}),Object(O.jsxs)("article",{className:"articleInfo",children:[Object(O.jsx)("h5",{className:"infoTitle",children:"taille Foliaire"}),Object(O.jsx)("p",{className:"infoPara",children:this.state.selectedPlant.tailleFoliaire})]}),Object(O.jsxs)("article",{className:"articleInfo",children:[Object(O.jsx)("h5",{className:"infoTitle",children:"taille syst\xe8me racinaire"}),Object(O.jsx)("p",{className:"infoPara",children:this.state.selectedPlant.tailleRacine})]}),Object(O.jsxs)("article",{className:"articleInfo",children:[Object(O.jsx)("h5",{className:"infoTitle",children:"Sol"}),Object(O.jsx)("p",{className:"infoPara",children:this.state.selectedPlant.preferences.sol})]}),Object(O.jsxs)("article",{className:"articleInfo",children:[Object(O.jsx)("h5",{className:"infoTitle",children:"Ensoleillement"}),Object(O.jsx)("p",{className:"infoPara",children:this.state.selectedPlant.preferences.soleil})]}),Object(O.jsxs)("article",{className:"articleInfo",children:[Object(O.jsx)("h5",{className:"infoTitle",children:"maladies"}),Object(O.jsx)("p",{className:"infoPara",children:this.state.selectedPlant.maladies})]}),Object(O.jsxs)("article",{className:"articleInfo",children:[Object(O.jsx)("h5",{className:"infoTitle",children:"parasites"}),Object(O.jsx)("p",{className:"infoPara",children:this.state.selectedPlant.parasites})]}),Object(O.jsxs)("article",{className:"articleInfo",children:[Object(O.jsx)("h5",{className:"infoTitle"}),Object(O.jsx)("p",{className:"infoPara"})]})]}),Object(O.jsxs)("div",{className:"singlePlantMonth",children:[Object(O.jsxs)("div",{className:"singlePlantSemis",children:[Object(O.jsx)("h5",{children:"Periode de Semis"}),this.state.selectedPlant.periodeSemis.map((function(e){return Object(O.jsxs)("span",{children:[e," "]})}))]}),Object(O.jsxs)("div",{className:"singlePlantRecolte",children:[Object(O.jsx)("h5",{children:"Periode de Recolte"}),this.state.selectedPlant.periodeRecolte.map((function(e){return Object(O.jsxs)("span",{children:[e," "]})}))]})]}),Object(O.jsxs)("div",{className:"varietes",children:[Object(O.jsx)("h2",{className:"varieteTitle",children:"vari\xe9t\xe9s : "}),Object(O.jsx)("article",{className:"listVarietes",children:this.state.selectedPlant.variete&&this.state.selectedPlant.variete.map((function(e){if(e.ajoute)return Object(O.jsxs)("div",{className:"singleVariete",children:[Object(O.jsx)("h3",{className:"singleVarieteName",children:e.name}),Object(O.jsx)("h4",{className:"singleVarieteOrigine",children:e.origine}),Object(O.jsx)("img",{className:"singleVarieteImage",src:e.image,alt:"variete"})]})}))}),Object(O.jsx)(l.b,{to:"/variete/ajouter/".concat(this.state.selectedPlant._id),children:"Ajouter une variete"})]})]})})]})}}]),a}(n.Component),C=(a(15),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"bodyBackground",children:Object(O.jsx)("div",{className:"plantsList",children:Object(O.jsx)(y,{})})})}}]),a}(s.a.Component)),P=a(10),S=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={email:"",password:""},e.handleChange=function(t){var a=t.target.name,n=t.target.value;e.setState(Object(P.a)({},a,n))},e.handleSubmit=function(t){t.preventDefault(),p.signin(e.state).then((function(t){e.props.context.setUser(t)})).catch((function(e){console.log(e)}))},e}return Object(o.a)(a,[{key:"render",value:function(){return this.props.context.user?Object(O.jsx)(g.a,{to:"/"}):Object(O.jsxs)("form",{onChange:this.handleChange,onSubmit:this.handleSubmit,children:[Object(O.jsx)("label",{htmlFor:"email",children:"Email"}),Object(O.jsx)("input",{type:"email",id:"email",name:"email"}),Object(O.jsx)("label",{htmlFor:"password",children:"Password"}),Object(O.jsx)("input",{type:"password",id:"password",name:"password"}),Object(O.jsx)("button",{children:"Submit"})]})}}]),a}(n.Component),F=Object(g.g)(v(S)),I=function(e){return Object(O.jsx)(F,{})},w=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={email:"",password:"",firstName:"",lastName:""},e.handleChange=function(t){var a=t.target.value,n=t.target.name;e.setState(Object(P.a)({},n,a))},e.handleSubmit=function(t){t.preventDefault(),p.signup(e.state).then((function(t){e.props.context.setUser(t.newUserDocument)})).catch((function(e){console.log(e)}))},e}return Object(o.a)(a,[{key:"render",value:function(){return this.props.context.user?Object(O.jsx)(g.a,{to:"/"}):Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsx)("label",{htmlFor:"email",children:"Email"}),Object(O.jsx)("input",{onChange:this.handleChange,value:this.state.email,type:"email",id:"email",name:"email"}),Object(O.jsx)("label",{htmlFor:"password",children:"Password"}),Object(O.jsx)("input",{onChange:this.handleChange,value:this.state.password,type:"password",id:"password",name:"password"}),Object(O.jsx)("label",{htmlFor:"firstName",children:"firstName"}),Object(O.jsx)("input",{onChange:this.handleChange,value:this.state.firstName,type:"text",id:"firstName",name:"firstName"}),Object(O.jsx)("label",{htmlFor:"lastName",children:"lastName"}),Object(O.jsx)("input",{onChange:this.handleChange,value:this.state.lastName,type:"text",id:"lastName",name:"lastName"}),Object(O.jsx)("button",{children:"Submit"})]})}}]),a}(n.Component),L=Object(g.g)(v(w)),D=function(e){return Object(O.jsx)(L,{})},V=a(18),k=["component","context"],R=v((function(e){var t=e.component,a=e.context,n=Object(V.a)(e,k);return a.isLoading?null:a.isLoggedIn?Object(O.jsx)(g.b,Object(f.a)(Object(f.a)({},n),{},{render:function(e){return Object(O.jsx)(t,Object(f.a)({},e))}})):Object(O.jsx)(g.a,{to:"/signin"})})),A=["component","context"],B=v((function(e){var t=e.component,a=e.context,n=Object(V.a)(e,A);return console.log(a),a.isLoading?null:a.isLoggedIn&&"admin"===a.user.role?Object(O.jsx)(g.b,Object(f.a)(Object(f.a)({},n),{},{render:function(e){return Object(O.jsx)(t,Object(f.a)({},e))}})):(console.log("not authorized"),Object(O.jsx)(g.a,{to:"/"}))})),T=v(function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"My profile"}),Object(O.jsx)("h2",{children:this.props.context.user.firstName}),Object(O.jsx)("h3",{children:this.props.context.user.lastName}),Object(O.jsx)("p",{children:this.props.context.user.email})]})}}]),a}(s.a.Component)),U=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={name:"",origine:"",ancienne:!1,ajoute:!1,plantId:e.props.match.params.plantId},e.handleChange=function(t){var a;console.log("COUCOU",t.target.checked);var n=t.target.name,s=t.target.value,i=t.target.checked;console.log("ISCHECKED = ",i),e.setState((a={},Object(P.a)(a,n,s),Object(P.a)(a,"ancienne",i),a)),console.log("STATE",e.state)},e.handleSubmit=function(t){t.preventDefault(),console.log("submited",t),console.log(e.state),p.createVariete(e.state).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){console.log("PROPS",this.props)}},{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Ajouter une nouvelle vari\xe9t\xe9"}),Object(O.jsxs)("form",{onChange:this.handleChange,onSubmit:this.handleSubmit,children:[Object(O.jsx)("label",{htmlFor:"name",children:"Name :"}),Object(O.jsx)("input",{type:"text",id:"name",name:"name",className:"input",placeholder:"Quel est son petit nom ?"}),Object(O.jsx)("label",{htmlFor:"origine",children:"origine :"}),Object(O.jsx)("input",{type:"text",id:"origine",name:"origine",className:"input",placeholder:"De quel pays/r\xe9gion vient cette vari\xe9t\xe9 ?"}),Object(O.jsx)("label",{htmlFor:"ancienne",children:"Ancienne :"}),Object(O.jsx)("input",{type:"checkbox",id:"ancienne",name:"ancienne",value:"true",className:"input"}),Object(O.jsx)("button",{children:"Postez votre esp\xe8ce !"})]})]})}}]),a}(s.a.Component),E=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={varietes:[],ajoute:!1},e.handleAddVariete=function(t){var a=t;a.ajoute=!0,p.updateVariete(a).then((function(e){console.log(e)})).catch((function(e){console.log(e)}));var n=e.state.varietes.filter((function(e){return!e.ajoute}));e.setState({varietes:n})},e.handleDelete=function(t){console.log("delete!!!",t),p.deleteVariete(t).then((function(t){p.getVariete().then((function(t){var a=t;e.setState({varietes:a})})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.getVariete().then((function(t){var a=t;e.setState({varietes:a})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return console.log("Varietes : ",this.state.varietes),Object(O.jsxs)("div",{className:"varietePage",children:[Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"varietesToAdd",children:[Object(O.jsx)("h2",{children:"Vari\xe9t\xe9s \xe0 ajouter"}),this.state.varietes.map((function(t){if(!t.ajoute)return Object(O.jsxs)("div",{className:"addSingleVariete",children:[Object(O.jsx)("h3",{children:t.name}),Object(O.jsx)("h4",{children:t.origine}),Object(O.jsx)("img",{src:t.image,alt:"variete"}),Object(O.jsx)("button",{onClick:function(){return e.handleAddVariete(t)},children:"Ajouter la vari\xe9t\xe9"}),Object(O.jsx)("button",{onClick:function(){return e.handleDelete(t)},children:"Supprimer"})]})}))]})}),Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"allVariete",children:[Object(O.jsx)("h2",{children:"Liste de toutes les vari\xe9t\xe9s existentes"}),this.state.varietes.map((function(t){return Object(O.jsxs)("div",{className:"addSingleVariete",children:[Object(O.jsx)("h3",{children:t.name}),Object(O.jsx)("h4",{children:t.origine}),Object(O.jsx)("button",{onClick:function(){return e.handleDelete(t)},children:"Supprimer"})]})}))]})})]})}}]),a}(s.a.Component),q=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={plants:[],selectedPlant:null,newData:{},name:"",famBotanique:"",nomLatin:"",type:[],tailleFoliaire:[],tailleRacine:[],preferences:{},periodeSemis:[],periodeRecolte:[],maladies:[],parasites:[]},e.handleClickedPlant=function(t,a){console.log("hello",t.currentTarget);var n=document.getElementsByClassName("veggieCard");console.log("HELEOIKFNHEZO0BF0",n);for(var s=0;s<n.length;s++)n[s].className="veggieCard";e.setState({selectedPlant:a,selectedPlantBorder:!e.state.selectedPlantBorder,newData:a}),t.currentTarget.classList.toggle("active")},e.handleChange=function(t){console.log("hello");var a=t.target.name,n=t.target.value;e.setState({newData:Object(P.a)({},a,n)})},e.handleDelete=function(t){p.deletePlant(e.state.selectedPlant).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},e.handleSubmitUpdate=function(t){t.preventDefault(),p.updatePlant(e.state.selectedPlant,e.state.newData).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),p.getPlants().then((function(t){var a=t;e.setState({plants:a})})).catch((function(e){console.log(e)}))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.getPlants().then((function(t){var a=t;e.setState({plants:a})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return console.log("NEWDATA",this.state.newData),Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{className:"pageTitle updatePage",children:"Update a plant"}),Object(O.jsxs)("div",{className:"updateDisplay",children:[Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"plantList",children:[Object(O.jsxs)("div",{className:"veggieCard",children:[Object(O.jsx)("div",{className:"plantImage",children:Object(O.jsx)("img",{src:"https://www.coloriageetdessins.com/images/nature/l-eacute-gume/legumes-sur-table-18367-660x400.jpg",alt:"Plant"})}),Object(O.jsx)("div",{className:"veggieCardInfo",children:Object(O.jsx)(l.b,{to:"/admin/adminPlants/add",children:"Ajouter une nouvelle plante"})})]}),this.state.plants.map((function(t){return Object(O.jsxs)("div",{className:"veggieCard",onClick:function(a){return e.handleClickedPlant(a,t)},children:[Object(O.jsx)("div",{className:"plantImage",children:Object(O.jsx)("img",{src:t.image,alt:"Plant"})}),Object(O.jsxs)("div",{className:"veggieCardInfo",children:[Object(O.jsx)("h2",{children:t.name}),Object(O.jsx)("h3",{children:t.nomLatin})]})]})}))]})}),this.state.selectedPlant&&Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"singlePlant",children:[Object(O.jsxs)("form",{className:"plantUpdateForm",onSubmit:this.handleSubmitUpdate,children:[Object(O.jsxs)("div",{className:"labelInput",children:[Object(O.jsx)("label",{htmlFor:"name",children:"name"}),Object(O.jsx)("input",{type:"text",name:"name",id:"name",className:"input",value:this.state.newData.name,onChange:this.handleChange})]}),Object(O.jsxs)("div",{className:"labelInput",children:[Object(O.jsx)("label",{htmlFor:"famBotanique",children:"famBotanique"}),Object(O.jsx)("input",{type:"text",name:"famBotanique",id:"famBotanique",className:"input",value:this.state.newData.famBotanique,onChange:this.handleChange})]}),Object(O.jsxs)("div",{className:"labelInput",children:[Object(O.jsx)("label",{htmlFor:"nomLatin",children:"nomLatin"}),Object(O.jsx)("input",{type:"text",name:"nomLatin",id:"nomLatin",className:"input",value:this.state.newData.nomLatin,onChange:this.handleChange})]}),Object(O.jsxs)("div",{className:"labelInput",children:[Object(O.jsx)("label",{htmlFor:"type",children:"type"}),Object(O.jsx)("input",{type:"text",name:"type",id:"type",className:"input",value:this.state.newData.type,onChange:this.handleChange})]}),Object(O.jsxs)("div",{className:"labelInput",children:[Object(O.jsx)("label",{htmlFor:"tailleFoliaire",children:"tailleFoliaire"}),Object(O.jsx)("input",{type:"text",name:"tailleFoliaire",id:"tailleFoliaire",className:"input",value:this.state.newData.tailleFoliaire,onChange:this.handleChange})]}),Object(O.jsxs)("div",{className:"labelInput",children:[Object(O.jsx)("label",{htmlFor:"tailleRacine",children:"tailleRacine"}),Object(O.jsx)("input",{type:"text",name:"tailleRacine",id:"tailleRacine",className:"input",value:this.state.newData.tailleRacine,onChange:this.handleChange})]}),Object(O.jsxs)("div",{className:"labelInput",children:[Object(O.jsx)("label",{htmlFor:"preferences",children:"preferences"}),Object(O.jsx)("input",{type:"text",name:"preferences",id:"preferences",className:"input",value:this.state.newData.sol,onChange:this.handleChange})]}),Object(O.jsxs)("div",{className:"labelInput",children:[Object(O.jsx)("label",{htmlFor:"preferences",children:"preferences soleil"}),Object(O.jsx)("input",{type:"text",name:"preferences",id:"preferences",className:"input",value:this.state.newData.soleil,onChange:this.handleChange})]}),Object(O.jsxs)("div",{className:"labelInput",children:[Object(O.jsx)("label",{htmlFor:"periodeSemis",children:"periodeSemis"}),Object(O.jsx)("input",{type:"text",name:"periodeSemis",id:"periodeSemis",className:"input",value:this.state.newData.periodeSemis,onChange:this.handleChange})]}),Object(O.jsxs)("div",{className:"labelInput",children:[Object(O.jsx)("label",{htmlFor:"periodeRecolte",children:"periodeRecolte"}),Object(O.jsx)("input",{type:"text",name:"periodeRecolte",id:"periodeRecolte",className:"input",value:this.state.newData.periodeRecolte,onChange:this.handleChange})]}),Object(O.jsxs)("div",{className:"labelInput",children:[Object(O.jsx)("label",{htmlFor:"maladies",children:"maladies"}),Object(O.jsx)("input",{type:"text",name:"maladies",id:"maladies",className:"input",value:this.state.newData.maladies,onChange:this.handleChange})]}),Object(O.jsxs)("div",{className:"labelInput",children:[Object(O.jsx)("label",{htmlFor:"parasites",children:"parasites"}),Object(O.jsx)("input",{type:"text",name:"parasites",id:"parasites",className:"input",value:this.state.newData.parasites,onChange:this.handleChange})]}),Object(O.jsxs)("div",{className:"formButtons",children:[Object(O.jsx)("button",{children:"Update plant"}),Object(O.jsx)("button",{onClick:this.handleDelete,children:"Delete this plant"})]})]}),Object(O.jsx)(l.b,{to:"/variete/ajouter/".concat(this.state.selectedPlant._id),children:"Ajouter une variete"})]})})]})]})}}]),a}(s.a.Component),M=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={name:"",famBotanique:"",nomLatin:"",type:[],tailleFoliaire:[],tailleRacine:[],preferences:{},periodeSemis:[],periodeRecolte:[],maladies:[],parasites:[]},e.handleChange=function(t){console.log("hello");var a=t.target.name,n=t.target.value;e.setState(Object(P.a)({},a,n))},e.handleSubmitAdd=function(t){t.preventDefault(),console.log("submitted!"),p.createPlant(e.state).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("form",{onChange:this.handleChange,onSubmit:this.handleSubmitAdd,children:[Object(O.jsx)("label",{htmlFor:"name",children:"name"}),Object(O.jsx)("input",{type:"text",name:"name",id:"name",className:"input",defaultValue:this.state.name}),Object(O.jsx)("label",{htmlFor:"famBotanique",children:"famBotanique"}),Object(O.jsx)("input",{type:"text",name:"famBotanique",id:"famBotanique",className:"input",defaultValue:this.state.famBotanique}),Object(O.jsx)("label",{htmlFor:"nomLatin",children:"nomLatin"}),Object(O.jsx)("input",{type:"text",name:"nomLatin",id:"nomLatin",className:"input",defaultValue:this.state.nomLatin}),Object(O.jsx)("label",{htmlFor:"type",children:"type"}),Object(O.jsx)("input",{type:"text",name:"type",id:"type",className:"input",defaultValue:this.state.type}),Object(O.jsx)("label",{htmlFor:"tailleFoliaire",children:"tailleFoliaire"}),Object(O.jsx)("input",{type:"text",name:"tailleFoliaire",id:"tailleFoliaire",className:"input",defaultValue:this.state.tailleFoliaire}),Object(O.jsx)("label",{htmlFor:"tailleRacine",children:"tailleRacine"}),Object(O.jsx)("input",{type:"text",name:"tailleRacine",id:"tailleRacine",className:"input",defaultValue:this.state.tailleRacine}),Object(O.jsx)("label",{htmlFor:"preferences",children:"preferences"}),Object(O.jsx)("input",{type:"text",name:"preferences",id:"preferences",className:"input",defaultValue:this.state.preferences.sol}),Object(O.jsx)("label",{htmlFor:"preferences",children:"preferences soleil"}),Object(O.jsx)("input",{type:"text",name:"preferences",id:"preferences",className:"input",defaultValue:this.state.preferences.soleil}),Object(O.jsx)("label",{htmlFor:"periodeSemis",children:"periodeSemis"}),Object(O.jsx)("input",{type:"text",name:"periodeSemis",id:"periodeSemis",className:"input",defaultValue:this.state.periodeSemis}),Object(O.jsx)("label",{htmlFor:"periodeRecolte",children:"periodeRecolte"}),Object(O.jsx)("input",{type:"text",name:"periodeRecolte",id:"periodeRecolte",className:"input",defaultValue:this.state.periodeRecolte}),Object(O.jsx)("label",{htmlFor:"maladies",children:"maladies"}),Object(O.jsx)("input",{type:"text",name:"maladies",id:"maladies",className:"input",defaultValue:this.state.maladies}),Object(O.jsx)("label",{htmlFor:"parasites",children:"parasites"}),Object(O.jsx)("input",{type:"text",name:"parasites",id:"parasites",className:"input",defaultValue:this.state.parasites}),Object(O.jsx)("button",{children:"Ajouter une plante"})]})})})}}]),a}(n.Component);var _=function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(N,{}),Object(O.jsxs)(g.d,{children:[Object(O.jsx)(g.b,{exact:!0,path:"/",component:C}),Object(O.jsx)(g.b,{exact:!0,path:"/signin",component:I}),Object(O.jsx)(g.b,{exact:!0,path:"/signup",component:D}),Object(O.jsx)(g.b,{exact:!0,path:"/variete/ajouter/:plantId",component:U}),Object(O.jsx)(B,{exact:!0,path:"/admin/adminVariete",component:E}),Object(O.jsx)(B,{exact:!0,path:"/admin/adminPlants",component:q}),Object(O.jsx)(B,{exact:!0,path:"/admin/adminPlants/add",component:M}),Object(O.jsx)(R,{exact:!0,path:"/profile",component:T})]})]})};a(64);c.a.render(Object(O.jsx)(l.a,{children:Object(O.jsx)(x,{children:Object(O.jsx)(_,{})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.f768eb29.chunk.js.map