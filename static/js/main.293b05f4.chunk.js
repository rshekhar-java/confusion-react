(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{103:function(e,t,s){},151:function(e,t,s){},152:function(e,t,s){"use strict";s.r(t);var n=s(2),c=s.n(n),r=s(16),a=s.n(r),o=(s(100),s(101),s(102),s(103),s(22)),i=s(23),l=s(25),j=s(24),d=s(10),h=s(153),m=s(154),b=s(155),u=s(156),O=s(157),x=s(158),f=s(0),p=function(){return Object(f.jsxs)("div",{className:"col-12",children:[Object(f.jsx)("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),Object(f.jsx)("p",{children:"Loading . . ."})]})},g="http://localhost:3001/",N=s(21);function v(e){var t=e.item,s=e.isLoading,n=e.errMess;return s?Object(f.jsx)(p,{}):n?Object(f.jsx)("h4",{children:n}):Object(f.jsx)(N.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"},children:Object(f.jsxs)(h.a,{children:[Object(f.jsx)(m.a,{src:g+t.image,alt:t.name}),Object(f.jsxs)(b.a,{children:[Object(f.jsx)(u.a,{children:t.name}),t.designation?Object(f.jsx)(O.a,{children:t.designation}):null,Object(f.jsx)(x.a,{children:t.description})]})]})})}var y=function(e){return Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"row align-items-start",children:[Object(f.jsx)("div",{className:"col-12 col-md m-1",children:Object(f.jsx)(v,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishesErrMess})}),Object(f.jsx)("div",{className:"col-12 col-md m-1",children:Object(f.jsx)(v,{item:e.promotion,isLoading:e.promoLoading,errMess:e.promoErrMess})}),Object(f.jsx)("div",{className:"col-12 col-md m-1",children:Object(f.jsx)(v,{item:e.leader,isLoading:e.leaderLoading,errMess:e.leaderErrMess})})]})})},w=s(159),M=s(160),k=s(161);function L(e){var t=e.dish;e.onClick;return Object(f.jsx)(h.a,{children:Object(f.jsxs)(d.b,{to:"/menu/".concat(t.id),children:[Object(f.jsx)(m.a,{width:"100%",src:g+t.image,alt:t.name}),Object(f.jsx)(w.a,{children:Object(f.jsx)(u.a,{children:t.name})})]})})}var C=function(e){var t=e.dishes.dishes.map((function(e){return Object(f.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(f.jsx)(L,{dish:e})},e.id)}));return e.dishes.isLoading?Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"row",children:Object(f.jsx)(p,{})})}):e.dishes.errMess?Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"row",children:Object(f.jsx)("div",{className:"col-12",children:Object(f.jsx)("h4",{children:e.dishes.errMess})})})}):Object(f.jsxs)("div",{className:"container",children:[Object(f.jsxs)("div",{className:"row",children:[Object(f.jsxs)(M.a,{children:[Object(f.jsx)(k.a,{children:Object(f.jsx)(d.b,{to:"/home",children:"Home"})}),Object(f.jsx)(k.a,{active:!0,children:"Menu"})]}),Object(f.jsxs)("div",{className:"col-12",children:[Object(f.jsx)("h3",{children:"Menu"}),Object(f.jsx)("hr",{})]})]}),Object(f.jsx)("div",{className:"row",children:t})]})},F=s(20),E=s(162),S=s(163),T=s(164),D=s(165),I=s(9),A=function(e){return e&&e.length},R=function(e){return function(t){return!t||t.length<=e}},q=function(e){return function(t){return t&&t.length>=e}},P=function(e){return!isNaN(Number(e))},H=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},_=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(F.a)(n)),n}return Object(i.a)(s,[{key:"handleSubmit",value:function(e){this.props.postFeedback(e),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return Object(f.jsx)(N.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"},children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsxs)("div",{className:"row",children:[Object(f.jsxs)(M.a,{children:[Object(f.jsx)(k.a,{children:Object(f.jsx)(d.b,{to:"/home",children:"Home"})}),Object(f.jsx)(k.a,{active:!0,children:"Contact Us"})]}),Object(f.jsxs)("div",{className:"col-12",children:[Object(f.jsx)("h3",{children:"Contact Us"}),Object(f.jsx)("hr",{})]})]}),Object(f.jsxs)("div",{className:"row row-content",children:[Object(f.jsx)("div",{className:"col-12",children:Object(f.jsx)("h3",{children:"Location Information"})}),Object(f.jsxs)("div",{className:"col-12 col-sm-4 offset-sm-1",children:[Object(f.jsx)("h5",{children:"Our Address"}),Object(f.jsxs)("address",{children:["121, Clear Water Bay Road",Object(f.jsx)("br",{}),"Clear Water Bay, Kowloon",Object(f.jsx)("br",{}),"HONG KONG",Object(f.jsx)("br",{}),Object(f.jsx)("i",{className:"fa fa-phone"}),": +1 314-445-7890",Object(f.jsx)("br",{}),Object(f.jsx)("i",{className:"fa fa-fax"}),": +1 314-478-6789",Object(f.jsx)("br",{}),Object(f.jsx)("i",{className:"fa fa-envelope"}),": ",Object(f.jsx)("a",{href:"mailto:confusion@food.net",children:"confusion@food.net"})]})]}),Object(f.jsx)("div",{className:"col-12 col-sm-6 offset-sm-1",children:Object(f.jsx)("h5",{children:"Map of our Location"})}),Object(f.jsx)("div",{className:"col-12 col-sm-11 offset-sm-1",children:Object(f.jsxs)("div",{className:"btn-group",role:"group",children:[Object(f.jsxs)("a",{role:"button",className:"btn btn-primary",href:"tel:+1 314-445-7890",children:[Object(f.jsx)("i",{className:"fa fa-phone"})," Call"]}),Object(f.jsxs)("a",{role:"button",className:"btn btn-info",href:"confusion_ristorante",children:[Object(f.jsx)("i",{className:"fa fa-skype"})," Skype"]}),Object(f.jsxs)("a",{role:"button",className:"btn btn-success",href:"tel:+1 314-445-7890",children:[Object(f.jsx)("i",{className:"fa fa-whatsapp"})," Whatsapp"]}),Object(f.jsxs)("a",{role:"button",className:"btn btn-warning",href:"mailto:confusion@food.net",children:[Object(f.jsx)("i",{className:"fa fa-envelope-o"})," Email"]})]})})]}),Object(f.jsxs)("div",{className:"row row-content",children:[Object(f.jsx)("div",{className:"col-12",children:Object(f.jsx)("h3",{children:" Send Us your Feedback "})}),Object(f.jsx)("div",{className:"Col-12 col-md-9",children:Object(f.jsxs)(I.Form,{model:"feedback",onSubmit:function(t){return e.handleSubmit(t)},children:[Object(f.jsxs)(E.a,{className:"form-group",children:[Object(f.jsx)(S.a,{htmlFor:"firstname",md:2,children:"First Name "}),Object(f.jsxs)(T.a,{md:10,children:[Object(f.jsx)(I.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:A,minLength:q(3),maxLength:R(15)}}),Object(f.jsx)(I.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(f.jsxs)(E.a,{className:"form-group",children:[Object(f.jsx)(S.a,{htmlFor:"lasttname",md:2,children:"Last Name "}),Object(f.jsxs)(T.a,{md:10,children:[Object(f.jsx)(I.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:A,minLength:q(3),maxLength:R(15)}}),Object(f.jsx)(I.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(f.jsxs)(E.a,{className:"form-group",children:[Object(f.jsx)(S.a,{htmlFor:"telnum",md:2,children:"Contact Tel."}),Object(f.jsxs)(T.a,{md:10,children:[Object(f.jsx)(I.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. number",className:"form-control",validators:{required:A,minLength:q(10),maxLength:R(10),isNumber:P}}),Object(f.jsx)(I.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be equal to 10 numbers",maxLength:"Must be a 10 digit numbers",isNumber:"Must be a number"}})]})]}),Object(f.jsxs)(E.a,{className:"form-group",children:[Object(f.jsx)(S.a,{htmlFor:"email",md:2,children:"Email"}),Object(f.jsxs)(T.a,{md:10,children:[Object(f.jsx)(I.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:A,validEmail:H}}),Object(f.jsx)(I.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid Email Address"}})]})]}),Object(f.jsxs)(E.a,{className:"form-group",children:[Object(f.jsx)(T.a,{md:{size:6,offset:2},children:Object(f.jsx)("div",{className:"form-check",children:Object(f.jsxs)(S.a,{check:!0,children:[Object(f.jsx)(I.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," "," ",Object(f.jsx)("strong",{children:"May we contact you?"})]})})}),Object(f.jsx)(T.a,{md:{size:3,offset:1},children:Object(f.jsxs)(I.Control.select,{model:".contactType",name:"contactType",className:"form-control",children:[Object(f.jsx)("option",{children:"Tel."}),Object(f.jsx)("option",{children:"Email"})]})})]}),Object(f.jsxs)(E.a,{className:"form-group",children:[Object(f.jsx)(S.a,{htmlFor:"message",md:2,children:"Your Feedback"}),Object(f.jsx)(T.a,{md:10,children:Object(f.jsx)(I.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"})})]}),Object(f.jsx)(E.a,{className:"form-group",children:Object(f.jsx)(T.a,{md:{size:10,offset:2},children:Object(f.jsx)(D.a,{type:"submit",color:"primary",children:"Send Feedback"})})})]})})]})]})})}}]),s}(n.Component),U=s(166),Y=s(167),W=s(168),B=s(169),G=s(170),K=s(171),z=s(172),J=s(180),Z=s(173),$=s(174),Q=s(175),V=s(176),X=s(177),ee=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).toggleNav=n.toggleNav.bind(Object(F.a)(n)),n.toggleModal=n.toggleModal.bind(Object(F.a)(n)),n.handleLogin=n.handleLogin.bind(Object(F.a)(n)),n.state={isNavOpen:!1,isModalOpen:!1},n}return Object(i.a)(s,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return Object(f.jsxs)(c.a.Fragment,{children:[Object(f.jsx)(U.a,{dark:!0,expand:"md",children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(Y.a,{onClick:this.toggleNav}),Object(f.jsx)(W.a,{className:"mr-auto",href:"/",children:Object(f.jsx)("img",{src:g+"/images/logo.png",height:"30",width:"41",alt:"Ristorante Con Fusion"})}),Object(f.jsx)(B.a,{isOpen:this.state.isNavOpen,navbar:!0,children:Object(f.jsxs)(G.a,{navbar:!0,children:[Object(f.jsx)(K.a,{children:Object(f.jsxs)(d.c,{className:"nav-link",to:"/home",children:[Object(f.jsx)("span",{className:"fa fa-home fa-lg"})," Home"]})}),Object(f.jsx)(K.a,{children:Object(f.jsxs)(d.c,{className:"nav-link",to:"/aboutus",children:[Object(f.jsx)("span",{className:"fa fa-info fa-lg"})," About Us"]})}),Object(f.jsx)(K.a,{children:Object(f.jsxs)(d.c,{className:"nav-link",to:"/menu",children:[Object(f.jsx)("span",{className:"fa fa-list fa-lg"})," Menu"]})}),Object(f.jsx)(K.a,{children:Object(f.jsxs)(d.c,{className:"nav-link",to:"/contactus",children:[Object(f.jsx)("span",{className:"fa fa-address-card fa-lg"})," Contact Us"]})})]})}),Object(f.jsx)(G.a,{navbar:!0,children:Object(f.jsx)(K.a,{children:Object(f.jsxs)(D.a,{outline:!0,onClick:this.toggleModal,children:[Object(f.jsx)("span",{className:"fa fa-sign-in fa-lg"})," Login"]})})})]})}),Object(f.jsx)(z.a,{children:Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"row row-header",children:Object(f.jsxs)("div",{className:"col-12 col-sm-6",children:[Object(f.jsx)("h1",{children:"Ristorante Con Fusion"}),Object(f.jsx)("p",{children:"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"})]})})})}),Object(f.jsxs)(J.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(f.jsx)(Z.a,{toggle:this.toggleModal,children:"Login"}),Object(f.jsx)($.a,{children:Object(f.jsxs)(Q.a,{onSubmit:this.handleLogin,children:[Object(f.jsxs)(V.a,{children:[Object(f.jsx)(S.a,{htmlFor:"username",children:"Username"}),Object(f.jsx)(X.a,{type:"text",id:"username",name:"username",innerRef:function(t){return e.username=t}})]}),Object(f.jsxs)(V.a,{children:[Object(f.jsx)(S.a,{htmlFor:"password",children:"Password"}),Object(f.jsx)(X.a,{type:"password",id:"password",name:"password",innerRef:function(t){return e.password=t}})]}),Object(f.jsx)(V.a,{check:!0,children:Object(f.jsxs)(S.a,{check:!0,children:[Object(f.jsx)(X.a,{type:"checkbox",name:"remember",innerRef:function(t){return e.remember=t}}),"Remember me"]})}),Object(f.jsx)(D.a,{type:"submit",value:"submit",color:"primary",children:"Login"})]})})]})]})}}]),s}(n.Component);var te=function(e){return Object(f.jsx)("div",{className:"footer",children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsxs)("div",{className:"row justify-content-center",children:[Object(f.jsxs)("div",{className:"col-4 offset-1 col-sm-2",children:[Object(f.jsxs)("h5",{children:[Object(f.jsx)("i",{class:"fa fa-link","fa-lg":!0})," Links"]}),Object(f.jsxs)("ul",{className:"list-unstyled",children:[Object(f.jsx)("li",{children:Object(f.jsx)(d.b,{to:"/home",children:"Home"})}),Object(f.jsx)("li",{children:Object(f.jsx)(d.b,{to:"/aboutus",children:"About Us"})}),Object(f.jsx)("li",{children:Object(f.jsx)(d.b,{to:"/menu",children:"Menu"})}),Object(f.jsx)("li",{children:Object(f.jsx)(d.b,{to:"/contactus",children:"Contact Us"})})]})]}),Object(f.jsxs)("div",{className:"col-7 col-sm-5",children:[Object(f.jsxs)("h5",{children:[Object(f.jsx)("i",{class:"fa fa-location-arrow","fa-lg":!0})," Our Address "]}),Object(f.jsxs)("address",{children:["121, Clear Water Bay Road",Object(f.jsx)("br",{}),"Clear Water Bay, Kowloon",Object(f.jsx)("br",{}),"HONG KONG",Object(f.jsx)("br",{}),Object(f.jsx)("i",{className:"fa fa-phone fa-lg"}),": +1 314 445 7890",Object(f.jsx)("br",{}),Object(f.jsx)("i",{className:"fa fa-fax fa-lg"}),": +1 314 478 6789",Object(f.jsx)("br",{}),Object(f.jsx)("i",{className:"fa fa-envelope fa-lg"}),": ",Object(f.jsx)("a",{href:"mailto:confusion@food.net",children:"confusion@food.net"})]})]}),Object(f.jsx)("div",{className:"col-12 col-sm-4 align-self-center",children:Object(f.jsxs)("div",{className:"text-center",children:[Object(f.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+",children:Object(f.jsx)("i",{className:"fa fa-google-plus"})}),Object(f.jsx)("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id=",children:Object(f.jsx)("i",{className:"fa fa-facebook"})}),Object(f.jsx)("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/",children:Object(f.jsx)("i",{className:"fa fa-linkedin"})}),Object(f.jsx)("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/",children:Object(f.jsx)("i",{className:"fa fa-twitter"})}),Object(f.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/",children:Object(f.jsx)("i",{className:"fa fa-youtube"})}),Object(f.jsx)("a",{className:"btn btn-social-icon",href:"mailto:",children:Object(f.jsx)("i",{className:"fa fa-envelope-o"})})]})})]}),Object(f.jsx)("div",{className:"row justify-content-center",children:Object(f.jsx)("div",{className:"col-auto",children:Object(f.jsx)("p",{children:"\xa9 Copyright 2021 Ristorante Con Fusion"})})})]})})},se=function(e){return e&&e.length},ne=function(e){return function(t){return!t||t.length<=e}};function ce(e){var t=e.dish;return null!=t?Object(f.jsx)(N.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"},children:Object(f.jsxs)(h.a,{children:[Object(f.jsx)(m.a,{width:"100%",src:g+t.image,alt:t.name}),Object(f.jsxs)(b.a,{children:[Object(f.jsx)(u.a,{children:t.name}),Object(f.jsx)(x.a,{children:t.description})]})]})}):Object(f.jsx)("div",{})}function re(e){var t=e.comments,s=e.postComment,n=e.dishId;return null!=t?Object(f.jsx)(c.a.Fragment,{children:Object(f.jsxs)("div",{className:"col-12 col-md-5 m-1",children:[Object(f.jsx)("h4",{children:Object(f.jsx)("strong",{children:"Comments"})}),Object(f.jsx)("ul",{className:"list-unstyled",children:Object(f.jsx)(N.Stagger,{in:!0,children:t.map((function(e){return Object(f.jsx)(N.Fade,{in:!0,children:Object(f.jsx)("li",{children:Object(f.jsxs)("p",{children:[e.comment,Object(f.jsx)("br",{}),"-- ",Object(f.jsx)("em",{children:e.author}),", ",Object(f.jsx)("span",{children:new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date)))})]})})})}))})}),Object(f.jsx)(oe,{dishId:n,postComment:s})]})}):Object(f.jsx)("div",{})}var ae=function(e){return e.isLoading?Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"row",children:Object(f.jsx)(p,{})})}):e.errMess?Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"row",children:Object(f.jsx)("h4",{children:e.errMess})})}):null!=e.dish?Object(f.jsxs)("div",{className:"container",children:[Object(f.jsxs)("div",{className:"row",children:[Object(f.jsxs)(M.a,{children:[Object(f.jsx)(k.a,{children:Object(f.jsx)(d.b,{to:"/menu",children:"Menu"})}),Object(f.jsx)(k.a,{active:!0,children:e.dish.name})]}),Object(f.jsxs)("div",{className:"col-12",children:[Object(f.jsx)("h3",{children:e.dish.name}),Object(f.jsx)("hr",{})]})]}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(f.jsx)(ce,{dish:e.dish})}),Object(f.jsx)("div",{className:"m-5 col-5",children:Object(f.jsx)(re,{comments:e.comments,postComment:e.postComment,dishId:e.dish.id})})]})]}):Object(f.jsx)("div",{})},oe=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).toggleModal=function(){n.setState({isModalOpen:!n.state.isModalOpen})},n.toggleModal=n.toggleModal.bind(Object(F.a)(n)),n.handleSubmitComment=n.handleSubmitComment.bind(Object(F.a)(n)),n.state={isModalOpen:!1},n}return Object(i.a)(s,[{key:"handleSubmitComment",value:function(e){this.toggleModal(),alert("Current State is: "+JSON.stringify(e)),this.props.postComment(this.props.dishId,e.rating,e.author,e.Comment)}},{key:"render",value:function(){var e,t=this;return Object(f.jsxs)(c.a.Fragment,{children:[Object(f.jsxs)(D.a,{outline:!0,onClick:this.toggleModal,children:[Object(f.jsx)("span",{className:"fa fa-pencil-square fa-lg"})," Submit Comment"]}),Object(f.jsxs)(J.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(f.jsx)(Z.a,{toggle:this.toggleModal,children:"Submit Comment"}),Object(f.jsx)($.a,{children:Object(f.jsxs)(I.LocalForm,{onSubmit:function(e){return t.handleSubmitComment(e)},children:[Object(f.jsxs)(E.a,{className:"form-group",children:[Object(f.jsx)(S.a,{htmlFor:"rating",md:2,children:"Rating"}),Object(f.jsx)(T.a,{md:10,children:Object(f.jsxs)(I.Control.select,{model:".rating",name:"Rating",className:"form-control",children:[Object(f.jsx)("option",{children:"1"}),Object(f.jsx)("option",{children:"2"}),Object(f.jsx)("option",{children:"3"}),Object(f.jsx)("option",{children:"4"}),Object(f.jsx)("option",{children:"5"})]})})]}),Object(f.jsxs)(E.a,{className:"form-group",children:[Object(f.jsx)(S.a,{htmlFor:"author",md:2,children:"Your Name"}),Object(f.jsxs)(T.a,{md:10,children:[Object(f.jsx)(I.Control.text,{model:".author",id:"author",name:"author",placeholder:"Your Name",className:"form-control",validators:{required:se,minLength:(e=3,function(t){return t&&t.length>=e}),maxLength:ne(15)}}),Object(f.jsx)(I.Errors,{className:"text-danger",model:".author",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(f.jsxs)(E.a,{className:"form-group",children:[Object(f.jsx)(S.a,{htmlFor:"Comment",md:2,children:"Comment"}),Object(f.jsx)(T.a,{md:10,children:Object(f.jsx)(I.Control.textarea,{model:".Comment",id:"Comment",name:"Comment",rows:"6",className:"form-control"})})]}),Object(f.jsx)(E.a,{className:"form-group",children:Object(f.jsx)(T.a,{md:{size:1,offset:2},children:Object(f.jsx)(D.a,{type:"submit",color:"primary",children:"Submit"})})})]})})]})]})}}]),s}(n.Component),ie=s(178),le=s(179);function je(e){var t=e.leader;return Object(f.jsx)(N.Stagger,{in:!0,children:Object(f.jsx)(N.Fade,{in:!0,children:Object(f.jsx)("div",{className:"col-12 mt-5",children:Object(f.jsxs)(ie.a,{tag:"ul",className:"row",children:[Object(f.jsx)(ie.a,{left:!0,middle:!0,className:"col-2",children:Object(f.jsx)(ie.a,{object:!0,src:g+t.image,alt:t.name})}),Object(f.jsxs)(ie.a,{body:!0,className:"ml-5 col-7",children:[Object(f.jsx)(ie.a,{heading:!0,children:t.name}),Object(f.jsx)("p",{children:t.designation}),Object(f.jsx)("p",{children:t.description})]})]})},t.id)})})}var de=function(e){var t=e.leaders.leaders.map((function(e){return Object(f.jsx)(je,{leader:e},e.id)}));return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsxs)("div",{className:"row",children:[Object(f.jsxs)(M.a,{children:[Object(f.jsx)(k.a,{children:Object(f.jsx)(d.b,{to:"/home",children:"Home"})}),Object(f.jsx)(k.a,{active:!0,children:"About Us"})]}),Object(f.jsxs)("div",{className:"col-12",children:[Object(f.jsx)("h3",{children:"About Us"}),Object(f.jsx)("hr",{})]})]}),Object(f.jsxs)("div",{className:"row row-content",children:[Object(f.jsxs)("div",{className:"col-12 col-md-6",children:[Object(f.jsx)("h2",{children:"Our History"}),Object(f.jsx)("p",{children:"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."}),Object(f.jsxs)("p",{children:["The restaurant traces its humble beginnings to ",Object(f.jsx)("em",{children:"The Frying Pan"}),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan."]})]}),Object(f.jsx)("div",{className:"col-12 col-md-5",children:Object(f.jsxs)(h.a,{children:[Object(f.jsx)(le.a,{className:"bg-primary text-white",children:"Facts At a Glance"}),Object(f.jsx)(b.a,{children:Object(f.jsxs)("dl",{className:"row p-1",children:[Object(f.jsx)("dt",{className:"col-6",children:"Started"}),Object(f.jsx)("dd",{className:"col-6",children:"3 Feb. 2013"}),Object(f.jsx)("dt",{className:"col-6",children:"Major Stake Holder"}),Object(f.jsx)("dd",{className:"col-6",children:"HK Fine Foods Inc."}),Object(f.jsx)("dt",{className:"col-6",children:"Last Year's Turnover"}),Object(f.jsx)("dd",{className:"col-6",children:"$1,250,375"}),Object(f.jsx)("dt",{className:"col-6",children:"Employees"}),Object(f.jsx)("dd",{className:"col-6",children:"40"})]})})]})}),Object(f.jsx)("div",{className:"col-12",children:Object(f.jsx)(h.a,{children:Object(f.jsx)(b.a,{className:"bg-faded",children:Object(f.jsxs)("blockquote",{className:"blockquote",children:[Object(f.jsx)("p",{className:"mb-0",children:"You better cut the pizza in four pieces because I'm not hungry enough to eat six."}),Object(f.jsx)("br",{}),Object(f.jsxs)("footer",{className:"blockquote-footer",children:["Yogi Berra,",Object(f.jsx)("cite",{title:"Source Title",children:"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"})]})]})})})})]}),Object(f.jsxs)("div",{className:"row row-content",children:[Object(f.jsx)("div",{className:"col-12",children:Object(f.jsx)("h2",{children:"Corporate Leadership"})}),Object(f.jsx)("div",{className:"col-12",children:Object(f.jsx)(ie.a,{list:!0,children:t})})]})]})},he=s(12),me=s(28),be="ADD_COMMENT",ue="DISHES_LOADING",Oe="DISHES_FAILED",xe="ADD_DISHES",fe="ADD_COMMENTS",pe="COMMENTS_FAILED",ge="PROMOS_LOADING",Ne="ADD_PROMOS",ve="PROMOS_FAILED",ye="LEADERS_LOADING",we="ADD_LEADERS",Me="LEADERS_FAILED",ke=function(e,t,s,n){return function(c){var r={dishId:e,rating:t,author:s,comment:n};return r.date=(new Date).toISOString(),fetch(g+"comments",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return c(function(e){return{type:be,payload:e}}(e))})).catch((function(e){console.log("post comments",e.message),alert("Your comment could not be posted\nError: "+e.message)}))}},Le=function(){return{type:ue}},Ce=function(e){return{type:Oe,payload:e}},Fe=function(e){return{type:xe,payload:e}},Ee=function(e){return{type:pe,payload:e}},Se=function(e){return{type:fe,payload:e}},Te=function(){return{type:ge}},De=function(e){return{type:ve,payload:e}},Ie=function(e){return{type:Ne,payload:e}},Ae=function(){return{type:ye}},Re=function(e){return{type:Me,payload:e}},qe=function(e){return{type:we,payload:e}},Pe=s(59),He=s(90),_e=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos(),this.props.fetchLeaders()}},{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{children:[Object(f.jsx)(ee,{}),Object(f.jsx)("div",{children:Object(f.jsx)(Pe.a,{children:Object(f.jsx)(He.a,{classNames:"page",timeout:300,children:Object(f.jsxs)(he.d,{location:this.props.location,children:[Object(f.jsx)(he.b,{path:"/home",component:function(){return Object(f.jsx)(y,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishesErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promoLoading:e.props.promotions.isLoading,promoErrMess:e.props.promotions.errMess,leader:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],leaderLoading:e.props.leaders.isLoading,leaderErrMess:e.props.leaders.errMess})}}),Object(f.jsx)(he.b,{exact:!0,path:"/menu",component:function(){return Object(f.jsx)(C,{dishes:e.props.dishes})}}),Object(f.jsx)(he.b,{path:"/menu/:dishId",component:function(t){var s=t.match;return Object(f.jsx)(ae,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(s.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(s.params.dishId,10)})),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),Object(f.jsx)(he.b,{exact:!0,path:"/aboutus",component:function(){return Object(f.jsx)(de,{leaders:e.props.leaders})}}),Object(f.jsx)(he.b,{exact:!0,path:"/contactus",component:function(){return Object(f.jsx)(_,{resetFeedbackForm:e.props.resetFeedbackForm,postFeedback:e.props.postFeedback})}}),Object(f.jsx)(he.a,{to:"/home"})]})},this.props.location.key)})}),Object(f.jsx)(te,{})]})}}]),s}(n.Component),Ue=Object(he.g)(Object(me.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{postComment:function(t,s,n,c){return e(ke(t,s,n,c))},fetchDishes:function(){e((function(e){return e(Le(!0)),fetch(g+"dishes").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(Fe(t))})).catch((function(t){return e(Ce(t.message))}))}))},resetFeedbackForm:function(){e(I.actions.reset("feedback"))},fetchComments:function(){e((function(e){return fetch(g+"comments").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(Se(t))})).catch((function(t){return e(Ee(t.message))}))}))},fetchPromos:function(){e((function(e){return e(Te()),fetch(g+"promotions").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(Ie(t))})).catch((function(t){return e(De(t.message))}))}))},fetchLeaders:function(){e((function(e){return e(Ae()),fetch(g+"leaders").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(qe(t))})).catch((function(t){return e(Re(t.message))}))}))},postFeedback:function(t){e(function(e){return function(t){return console.log("feedback",e),fetch(g+"feedback",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return alert("Thank you for your feedback! "+JSON.stringify(e)),console.log(e)})).catch((function(e){console.log("post feedbacks",e.message),alert("Your feedback could not be posted\nError: "+e.message)}))}}(t))}}}))(_e)),Ye=s(7),We=s(36),Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case xe:return Object(Ye.a)(Object(Ye.a)({},e),{},{isLoading:!1,errMess:null,dishes:t.payload});case ue:return Object(Ye.a)(Object(Ye.a)({},e),{},{isLoading:!0,errMess:null,dishes:[]});case Oe:return Object(Ye.a)(Object(Ye.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},Ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case fe:return Object(Ye.a)(Object(Ye.a)({},e),{},{isLoading:!1,errMess:null,comments:t.payload});case pe:return Object(Ye.a)(Object(Ye.a)({},e),{},{isLoading:!1,errMess:t.payload,comments:[]});case be:var s=t.payload;return console.log("Comment: ",s),Object(Ye.a)(Object(Ye.a)({},e),{},{comments:e.comments.concat(s)});default:return e}},Ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ne:return Object(Ye.a)(Object(Ye.a)({},e),{},{isLoading:!1,errMess:null,promotions:t.payload});case ge:return Object(Ye.a)(Object(Ye.a)({},e),{},{isLoading:!0,errMess:null,promotions:[]});case ve:return Object(Ye.a)(Object(Ye.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,leaders:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case we:return Object(Ye.a)(Object(Ye.a)({},e),{},{isLoading:!1,errMess:null,leaders:t.payload});case ye:return Object(Ye.a)(Object(Ye.a)({},e),{},{isLoading:!0,errMess:null,leaders:[]});case Me:return Object(Ye.a)(Object(Ye.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},Je=s(93),Ze=s(94),$e=s.n(Ze),Qe={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},Ve=(s(151),Object(We.createStore)(Object(We.combineReducers)(Object(Ye.a)({dishes:Be,comments:Ge,promotions:Ke,leaders:ze},Object(I.createForms)({feedback:Qe}))),Object(We.applyMiddleware)(Je.a,$e.a))),Xe=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){return Object(f.jsx)(me.Provider,{store:Ve,children:Object(f.jsx)(d.a,{children:Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(Ue,{})})})})}}]),s}(n.Component),et=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,181)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;s(e),n(e),c(e),r(e),a(e)}))};a.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(Xe,{})}),document.getElementById("root")),et()}},[[152,1,2]]]);
//# sourceMappingURL=main.293b05f4.chunk.js.map