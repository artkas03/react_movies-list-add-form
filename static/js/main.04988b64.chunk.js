(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{15:function(e,t,i){},16:function(e,t,i){},17:function(e,t,i){},19:function(e,t,i){"use strict";i.r(t);var a=i(6),n=i.n(a),c=(i(14),i(9)),s=i(2),r=i(1),l=(i(15),i(16),i(17),i(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card","data-cy":"movie-card",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(l.jsxs)("div",{className:"content",children:[t.description,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbId)}))})},m=i(7),j=i.n(m);var b=new RegExp(/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@,.\w_]*)#?(?:[,.!/\\\w]*))?)$/),u=function(e){var t=e.name,i=e.value,a=e.label,n=void 0===a?t:a,c=e.placeholder,o=void 0===c?"Enter ".concat(n):c,d=e.required,m=void 0!==d&&d,u=e.onChange,h=void 0===u?function(){}:u,O=e.isUrl,g=void 0!==O&&O,v=e.setIsLinkValid,p=void 0===v?function(){}:v,f=Object(r.useState)((function(){return"".concat(t,"-").concat(Math.random().toFixed(16).slice(2))})),w=Object(s.a)(f,1)[0],x=Object(r.useState)(!1),M=Object(s.a)(x,2),N=M[0],U=M[1],I=Object(r.useState)(""),T=Object(s.a)(I,2),y=T[0],k=T[1],B=N&&m&&(!i||y);return Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:w,children:n}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{type:"text",id:w,"data-cy":"movie-".concat(t),className:j()("input",{"is-danger":B}),placeholder:o,value:i,onChange:function(e){return h(e.currentTarget.value)},onBlur:function(e){return function(e){if(U(!0),e)if(g){if(!b.test(e)){var t="".concat(n," is not valid url!");return p(!1),void k(t)}p(!0),k("")}else k("");else{var i="".concat(n," is required!");k(i)}}(e.currentTarget.value)}})}),B&&Object(l.jsx)("p",{className:"help is-danger",children:y})]})},h=function(e){var t=e.onAdd,i=Object(r.useState)(0),a=Object(s.a)(i,2),n=a[0],c=a[1],o=Object(r.useState)(""),d=Object(s.a)(o,2),m=d[0],j=d[1],b=Object(r.useState)(""),h=Object(s.a)(b,2),O=h[0],g=h[1],v=Object(r.useState)(""),p=Object(s.a)(v,2),f=p[0],w=p[1],x=Object(r.useState)(!1),M=Object(s.a)(x,2),N=M[0],U=M[1],I=Object(r.useState)(""),T=Object(s.a)(I,2),y=T[0],k=T[1],B=Object(r.useState)(!1),S=Object(s.a)(B,2),_=S[0],z=S[1],A=Object(r.useState)(""),V=Object(s.a)(A,2),D=V[0],C=V[1],Y=function(e){e.preventDefault(),t({title:m,description:O,imgUrl:f,imdbUrl:y,imdbId:D}),j(""),g(""),w(""),k(""),C(""),c(n+1)};return Object(l.jsxs)("form",{className:"NewMovie",onSubmit:function(e){return Y(e)},children:[Object(l.jsx)("h2",{className:"title",children:"Add a movie"}),Object(l.jsx)(u,{name:"title",label:"Title",value:m,onChange:function(e){return j(e)},required:!0}),Object(l.jsx)(u,{name:"description",label:"Description",value:O,onChange:function(e){return g(e)}}),Object(l.jsx)(u,{name:"imgUrl",label:"Image URL",value:f,onChange:function(e){return w(e)},isUrl:!0,setIsLinkValid:function(e){return z(e)},required:!0}),Object(l.jsx)(u,{name:"imdbUrl",label:"Imdb URL",value:y,onChange:function(e){return k(e)},isUrl:!0,setIsLinkValid:function(e){return U(e)},required:!0}),Object(l.jsx)(u,{name:"imdbId",label:"Imdb ID",value:D,onChange:function(e){return C(e)},required:!0}),Object(l.jsx)("div",{className:"field is-grouped",children:Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"submit","data-cy":"submit-button",className:"button is-link",disabled:!m||!f||!y||!D||!N||!_,children:"Add"})})})]},n)},O=i(8),g=function(){var e=Object(r.useState)(O),t=Object(s.a)(e,2),i=t[0],a=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(d,{movies:i})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(h,{onAdd:function(e){return function(e){var t=[].concat(Object(c.a)(i),[e]);a(t)}(e)}})})]})};n.a.render(Object(l.jsx)(g,{}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')}},[[19,1,2]]]);
//# sourceMappingURL=main.04988b64.chunk.js.map