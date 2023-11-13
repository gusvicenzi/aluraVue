(function(){"use strict";var o={9074:function(o,t,e){var a=e(9242),n=e(3396),r=e(7139);const i={class:"column is-one-quarter"},s={class:"column is-three-quarter conteudo"};function c(o,t,e,a,c,l){const d=(0,n.up)("BarraLateral"),u=(0,n.up)("Notificacoes"),m=(0,n.up)("RouterView");return(0,n.wg)(),(0,n.iD)("main",{class:(0,r.C_)(["columns is-gapless is-multiline",{"modo-escuro":o.modoEscuroAtivo}])},[(0,n._)("div",i,[(0,n.Wm)(d,{onAoTemaAlterado:o.trocarTema},null,8,["onAoTemaAlterado"])]),(0,n._)("div",s,[(0,n.Wm)(u),(0,n.Wm)(m)])],2)}const l={class:"notificacoes"},d={class:"message-header"},u={class:"message-body"};function m(o,t,e,a,i,s){return(0,n.wg)(),(0,n.iD)("div",l,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.notificacoes,(t=>((0,n.wg)(),(0,n.iD)("article",{class:(0,r.C_)(["message",o.contexto[t.tipo]]),key:t.id},[(0,n._)("div",d,(0,r.zw)(t.titulo),1),(0,n._)("div",u,(0,r.zw)(t.texto),1)],2)))),128))])}var p;(function(o){o[o["SUCESSO"]=0]="SUCESSO",o[o["FALHA"]=1]="FALHA",o[o["ATENCAO"]=2]="ATENCAO"})(p||(p={}));e(560);var f=e(65);const g="ADICIONA_PROJETO",h="ALTERA_PROJETO",v="EXCLUIR_PROJETO",A="ADICIONA_TAREFA",E="ALTERA_TAREFA",C="EXCLUIR_TAREFA",b="NOTIFICAR",I=Symbol(),T=(0,f.MT)({state:{notificacoes:[],projetos:[{id:Date.now().toString(),nome:"teste"}],tarefas:[]},mutations:{[g](o,t){const e={id:Date.now().toString(),nome:t};o.projetos.push(e)},[h](o,t){const e=o.projetos.findIndex((o=>o.id===t.id));o.projetos[e]=t},[v](o,t){o.projetos=o.projetos.filter((o=>o.id!==t))},[A](o,t){t.id=Date.now().toString(),o.tarefas.push(t)},[E](o,t){const e=o.tarefas.findIndex((o=>o.id===t.id));o.tarefas[e]=t},[C](o,t){o.tarefas=o.tarefas.filter((o=>o.id!==t))},[b](o,t){t.id=Date.now(),o.notificacoes.push(t),setTimeout((()=>{o.notificacoes=o.notificacoes.filter((o=>o.id!==t.id))}),3e3)}}});function B(){return(0,f.oR)(I)}var w=(0,n.aZ)({name:"NotificacoesComponent",data(){return{contexto:{[p.SUCESSO]:"is-success",[p.ATENCAO]:"is-warning",[p.FALHA]:"is-danger"}}},setup(){const o=B();return{notificacoes:(0,n.Fl)((()=>o.state.notificacoes))}}}),S=e(89);const F=(0,S.Z)(w,[["render",m],["__scopeId","data-v-d096aab6"]]);var j=F,x="data:image/png;base64,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";const k=o=>((0,n.dD)("data-v-88e11262"),o=o(),(0,n.Cn)(),o),R=k((()=>(0,n._)("h1",null,[(0,n._)("img",{src:x,alt:"logo alura tracker"})],-1))),U={class:"panel mt-5"},W=k((()=>(0,n._)("i",{class:"fas fa-tasks"},null,-1))),P=k((()=>(0,n._)("i",{class:"fas fa-project-diagram"},null,-1)));function V(o,t,e,a,r,i){const s=(0,n.up)("Botao"),c=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)("header",null,[R,(0,n.Wm)(s,{icone:"fas fa-"+o.iconeBotao,texto:"",onClicado:o.alterarTema},null,8,["icone","onClicado"]),(0,n._)("nav",U,[(0,n._)("ul",null,[(0,n._)("li",null,[(0,n.Wm)(c,{to:"/",class:"link"},{default:(0,n.w5)((()=>[W,(0,n.Uk)(" tarefas ")])),_:1})]),(0,n._)("li",null,[(0,n.Wm)(c,{to:"/projetos",class:"link"},{default:(0,n.w5)((()=>[P,(0,n.Uk)(" projetos ")])),_:1})])])])])}const L=["disabled"],Q={class:"icon"},Y={key:0};function y(o,t,e,a,i,s){return(0,n.wg)(),(0,n.iD)("button",{class:"button",onClick:t[0]||(t[0]=(...t)=>o.clicado&&o.clicado(...t)),disabled:o.desabilitado},[(0,n._)("span",Q,[(0,n._)("i",{class:(0,r.C_)(o.icone)},null,2)]),o.texto?((0,n.wg)(),(0,n.iD)("span",Y,(0,r.zw)(o.texto),1)):(0,n.kq)("",!0)],8,L)}var O=(0,n.aZ)({name:"BotaoComponent",emits:["clicado"],props:{desabilitado:{type:Boolean},icone:{type:String,required:!0},texto:{type:String,required:!0}},methods:{clicado(){this.$emit("clicado",!0)}}});const z=(0,S.Z)(O,[["render",y]]);var D=z,K=(0,n.aZ)({name:"App",emits:["aoTemaAlterado"],data(){return{modoEscuroAtivo:!1}},computed:{iconeBotao(){return this.modoEscuroAtivo?"sun":"moon"}},methods:{alterarTema(){this.modoEscuroAtivo=!this.modoEscuroAtivo,this.$emit("aoTemaAlterado",this.modoEscuroAtivo)}},components:{Botao:D}});const q=(0,S.Z)(K,[["render",V],["__scopeId","data-v-88e11262"]]);var Z=q,X=(0,n.aZ)({name:"App",data(){return{modoEscuroAtivo:!1}},methods:{trocarTema(o){this.modoEscuroAtivo=o}},components:{BarraLateral:Z,Notificacoes:j}});const H=(0,S.Z)(X,[["render",c]]);var J=H,N=e(2483);const G={class:"lista"};function M(o,t,e,a,r,i){const s=(0,n.up)("Formulario"),c=(0,n.up)("Tarefa"),l=(0,n.up)("Box");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(s,{onAoSalvarTarefa:o.salvarTarefa},null,8,["onAoSalvarTarefa"]),(0,n._)("div",G,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.tarefas,((o,t)=>((0,n.wg)(),(0,n.j4)(c,{key:t,tarefa:o},null,8,["tarefa"])))),128)),o.listaEstaVazia?((0,n.wg)(),(0,n.j4)(l,{key:0},{default:(0,n.w5)((()=>[(0,n.Uk)(" Você ainda não criou nenhuma tarefa hoje! ")])),_:1})):(0,n.kq)("",!0)])],64)}const _={class:"columns"},$={class:"column is-4"},oo={class:"column is-3"},to={class:"column"};function eo(o,t,e,a,i,s){const c=(0,n.up)("Cronometro"),l=(0,n.up)("Box");return(0,n.wg)(),(0,n.j4)(l,null,{default:(0,n.w5)((()=>[(0,n._)("div",_,[(0,n._)("div",$,[(0,n._)("p",null,(0,r.zw)(o.tarefa.descricao||"Tarefa sem descrição"),1)]),(0,n._)("div",oo,(0,r.zw)(o.tarefa.projeto?.nome||"N/D"),1),(0,n._)("div",to,[(0,n.Wm)(c,{tempoEmSegundos:o.tarefa.duracaoEmSegundos},null,8,["tempoEmSegundos"])])])])),_:1})}const ao=o=>((0,n.dD)("data-v-14a99f32"),o=o(),(0,n.Cn)(),o),no=ao((()=>(0,n._)("span",{class:"icon"},[(0,n._)("i",{class:"far fa-clock"})],-1))),ro={class:"display"};function io(o,t,e,a,i,s){return(0,n.wg)(),(0,n.iD)("section",null,[no,(0,n._)("strong",ro,(0,r.zw)(o.tempoDecorrido),1)])}var so=(0,n.aZ)({name:"CronometroComponent",props:{tempoEmSegundos:{type:Number,default:0}},computed:{tempoDecorrido(){return new Date(1e3*this.tempoEmSegundos).toISOString().substring(11,19)}}});const co=(0,S.Z)(so,[["render",io],["__scopeId","data-v-14a99f32"]]);var lo=co;function uo(o,t,e,a,i,s){return(0,n.wg)(),(0,n.iD)("div",{class:"box has-text-weight-bold",style:(0,r.j5)(o.estilos)},[(0,n.WI)(o.$slots,"default")],4)}var mo=(0,n.aZ)({name:"BoxComponent",data(){return{estilos:{"background-color":"#FAF0CA"}}}});const po=(0,S.Z)(mo,[["render",uo]]);var fo=po,go=(0,n.aZ)({name:"TarefaComponent",components:{Cronometro:lo,Box:fo},props:{tarefa:{type:Object,required:!0}}});const ho=(0,S.Z)(go,[["render",eo]]);var vo=ho;const Ao={class:"box formulario"},Eo={class:"columns"},Co={class:"column is-5",role:"form","aria-label":"Formulário para criação de uma nova tarefa"},bo={class:"column is-3"},Io={class:"select"},To=(0,n._)("option",{value:""},"Selecione o projeto",-1),Bo=["value"],wo={class:"column"};function So(o,t,e,i,s,c){const l=(0,n.up)("Temporizador");return(0,n.wg)(),(0,n.iD)("div",Ao,[(0,n._)("div",Eo,[(0,n._)("div",Co,[(0,n.wy)((0,n._)("input",{type:"text",class:"input",placeholder:"Qual tarefa você deseja iniciar?","onUpdate:modelValue":t[0]||(t[0]=t=>o.descricao=t)},null,512),[[a.nr,o.descricao]])]),(0,n._)("div",bo,[(0,n._)("div",Io,[(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":t[1]||(t[1]=t=>o.idProjeto=t)},[To,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.projetos,(o=>((0,n.wg)(),(0,n.iD)("option",{value:o.id,key:o.id},(0,r.zw)(o.nome),9,Bo)))),128))],512),[[a.bM,o.idProjeto]])])]),(0,n._)("div",wo,[(0,n.Wm)(l,{onAoTemporizadorFinalizado:o.salvarTarefa,onAoTemporizadorIniciar:o.iniciarTemporizador,tempoEmSegundos:o.tempoEmSegundos,cronometroRodando:o.cronometroRodando,cronometro:o.cronometro},null,8,["onAoTemporizadorFinalizado","onAoTemporizadorIniciar","tempoEmSegundos","cronometroRodando","cronometro"])])])])}const Fo={class:"is-flex is-align-items-center is-justify-content-space-between"};function jo(o,t,e,a,r,i){const s=(0,n.up)("Cronometro"),c=(0,n.up)("Botao");return(0,n.wg)(),(0,n.iD)("div",Fo,[(0,n.Wm)(s,{tempoEmSegundos:o.tempoEmSegundos},null,8,["tempoEmSegundos"]),(0,n.Wm)(c,{icone:"fas fa-play",texto:"start",onClicado:o.iniciar,desabilitado:o.cronometroRodando},null,8,["onClicado","desabilitado"]),(0,n.Wm)(c,{icone:"fas fa-stop",texto:"stop",onClicado:o.finalizar,desabilitado:!o.cronometroRodando},null,8,["onClicado","desabilitado"])])}var xo=(0,n.aZ)({name:"TemporizadorComponent",emits:["aoTemporizadorFinalizado","aoTemporizadorIniciar"],props:{tempoEmSegundos:{type:Number,required:!0},cronometro:{type:Number,required:!0},cronometroRodando:{type:Boolean,required:!0}},computed:{tempoDecorrido(){return new Date(1e3*this.tempoEmSegundos).toLocaleTimeString()}},methods:{iniciar(){this.$emit("aoTemporizadorIniciar")},finalizar(){this.$emit("aoTemporizadorFinalizado",this.tempoEmSegundos)}},components:{Cronometro:lo,Botao:D}});const ko=(0,S.Z)(xo,[["render",jo]]);var Ro=ko,Uo=()=>{const o=o=>{T.commit(b,o)};return{notificar:o}},Wo=(0,n.aZ)({name:"FormularioComponent",emits:["aoSalvarTarefa"],components:{Temporizador:Ro},data(){return{descricao:"",idProjeto:"",tempoEmSegundos:0,cronometro:0,cronometroRodando:!1}},methods:{iniciarTemporizador(){this.cronometroRodando=!0,this.cronometro=setInterval((()=>{this.tempoEmSegundos+=1}),1e3)},salvarTarefa(o){this.idProjeto?(console.log(`tempo da tarefa ${this.descricao}: `,o),this.$emit("aoSalvarTarefa",{duracaoEmSegundos:o,descricao:this.descricao,projeto:this.projetos.find((o=>o.id===this.idProjeto))}),this.descricao="",this.cronometroRodando=!1,clearInterval(this.cronometro),this.tempoEmSegundos=0):this.notificar({titulo:"Ops!!",texto:"Selecione um projeto antes de finalizar a tarefa!",tipo:p.FALHA})}},setup(){const o=B(),{notificar:t}=Uo();return{projetos:(0,n.Fl)((()=>o.state.projetos)),notificar:t}}});const Po=(0,S.Z)(Wo,[["render",So]]);var Vo=Po,Lo=(0,n.aZ)({name:"TarefasView",methods:{salvarTarefa(o){this.store.commit(A,o)}},computed:{listaEstaVazia(){return console.log(this.tarefas),0===this.store.state.tarefas.length}},setup(){const o=B();return{tarefas:(0,n.Fl)((()=>o.state.tarefas)),store:o}},components:{Formulario:Vo,Box:fo,Tarefa:vo}});const Qo=(0,S.Z)(Lo,[["render",M]]);var Yo=Qo;const yo=o=>((0,n.dD)("data-v-7012aff9"),o=o(),(0,n.Cn)(),o),Oo={class:"projetos"},zo=yo((()=>(0,n._)("h1",{class:"title"},"Projetos",-1)));function Do(o,t,e,a,r,i){const s=(0,n.up)("RouterView");return(0,n.wg)(),(0,n.iD)("section",Oo,[zo,(0,n.Wm)(s)])}var Ko=(0,n.aZ)({name:"ProjetosView"});const qo=(0,S.Z)(Ko,[["render",Do],["__scopeId","data-v-7012aff9"]]);var Zo=qo;const Xo=(0,n._)("h1",{class:"title"},"Projetos",-1),Ho={class:"field"},Jo=(0,n._)("label",{for:"nomeDoProjeto",class:"label"},"Nome do Projeto",-1),No=(0,n._)("div",{class:"field"},[(0,n._)("button",{class:"button",type:"submit"}," Salvar ")],-1);function Go(o,t,e,r,i,s){return(0,n.wg)(),(0,n.iD)("section",null,[Xo,(0,n._)("form",{onSubmit:t[1]||(t[1]=(0,a.iM)(((...t)=>o.salvar&&o.salvar(...t)),["prevent"]))},[(0,n._)("div",Ho,[Jo,(0,n.wy)((0,n._)("input",{type:"text",class:"input","onUpdate:modelValue":t[0]||(t[0]=t=>o.nomeDoProjeto=t),id:"nomeDoProjeto"},null,512),[[a.nr,o.nomeDoProjeto]]),No])],32)])}const Mo={methods:{notificar(o){T.commit(b,o)}}};var _o=(0,n.aZ)({name:"FormularioView",props:{id:{type:String,required:!0}},mixins:[Mo],data(){return{nomeDoProjeto:""}},mounted(){if(this.id){const o=this.store.state.projetos.find((o=>o.id===this.id));this.nomeDoProjeto=o?.nome||""}},methods:{salvar(){this.id?this.store.commit(h,{id:this.id,nome:this.nomeDoProjeto}):this.store.commit(g,this.nomeDoProjeto),this.nomeDoProjeto="",this.notificar({titulo:"Novo projeto criado!",texto:"Prontinho! Seu projeto já está disponível.",tipo:p.SUCESSO}),this.$router.push("/projetos")}},setup(){const o=B();return{store:o}}});const $o=(0,S.Z)(_o,[["render",Go]]);var ot=$o;const tt=(0,n._)("span",{class:"icon is-small"},[(0,n._)("i",{class:"fas fa-plus"})],-1),et=(0,n._)("span",null,"Novo projeto",-1),at={class:"table is-fullwidth"},nt=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",null,"Id"),(0,n._)("th",null,"Nome"),(0,n._)("th",null,"Ações")])],-1),rt=(0,n._)("span",{class:"icon is-small"},[(0,n._)("i",{class:"fas fa-pencil-alt"})],-1),it=["onClick"],st=(0,n._)("span",{class:"icon is-small"},[(0,n._)("i",{class:"fas fa-trash"})],-1),ct=[st];function lt(o,t,e,a,i,s){const c=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)("section",null,[(0,n.Wm)(c,{to:"/projetos/novo",class:"button"},{default:(0,n.w5)((()=>[tt,et])),_:1}),(0,n._)("table",at,[nt,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.projetos,(t=>((0,n.wg)(),(0,n.iD)("tr",{key:t.id},[(0,n._)("td",null,(0,r.zw)(t.id),1),(0,n._)("td",null,(0,r.zw)(t.nome),1),(0,n._)("td",null,[(0,n.Wm)(c,{to:`/projetos/${t.id}`,class:"button"},{default:(0,n.w5)((()=>[rt])),_:2},1032,["to"]),(0,n._)("button",{class:"button ml-2 is-danger",onClick:e=>o.excluir(t.id)},ct,8,it)])])))),128))])])])}var dt=(0,n.aZ)({name:"ListaView",methods:{excluir(o){this.store.commit(v,o),this.store.commit(b,{titulo:"Projeto excluído!",texto:"Seu projeto foi de base.",tipo:p.ATENCAO})}},setup(){const o=B();return{projetos:(0,n.Fl)((()=>o.state.projetos)),store:o}}});const ut=(0,S.Z)(dt,[["render",lt]]);var mt=ut;const pt=[{path:"/",name:"Tarefas",component:Yo},{path:"/projetos",component:Zo,children:[{path:"",name:"Projetos",component:mt},{path:"novo",name:"Novo projeto",component:ot},{path:":id",name:"Editar projeto",component:ot,props:!0}]}],ft=(0,N.p7)({history:(0,N.r5)(),routes:pt});var gt=ft;(0,a.ri)(J).use(gt).use(T,I).mount("#app")}},t={};function e(a){var n=t[a];if(void 0!==n)return n.exports;var r=t[a]={exports:{}};return o[a].call(r.exports,r,r.exports,e),r.exports}e.m=o,function(){var o=[];e.O=function(t,a,n,r){if(!a){var i=1/0;for(d=0;d<o.length;d++){a=o[d][0],n=o[d][1],r=o[d][2];for(var s=!0,c=0;c<a.length;c++)(!1&r||i>=r)&&Object.keys(e.O).every((function(o){return e.O[o](a[c])}))?a.splice(c--,1):(s=!1,r<i&&(i=r));if(s){o.splice(d--,1);var l=n();void 0!==l&&(t=l)}}return t}r=r||0;for(var d=o.length;d>0&&o[d-1][2]>r;d--)o[d]=o[d-1];o[d]=[a,n,r]}}(),function(){e.n=function(o){var t=o&&o.__esModule?function(){return o["default"]}:function(){return o};return e.d(t,{a:t}),t}}(),function(){e.d=function(o,t){for(var a in t)e.o(t,a)&&!e.o(o,a)&&Object.defineProperty(o,a,{enumerable:!0,get:t[a]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){e.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)}}(),function(){var o={143:0};e.O.j=function(t){return 0===o[t]};var t=function(t,a){var n,r,i=a[0],s=a[1],c=a[2],l=0;if(i.some((function(t){return 0!==o[t]}))){for(n in s)e.o(s,n)&&(e.m[n]=s[n]);if(c)var d=c(e)}for(t&&t(a);l<i.length;l++)r=i[l],e.o(o,r)&&o[r]&&o[r][0](),o[r]=0;return e.O(d)},a=self["webpackChunkalura_tracker"]=self["webpackChunkalura_tracker"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=e.O(void 0,[998],(function(){return e(9074)}));a=e.O(a)})();
//# sourceMappingURL=app.b7ba68c8.js.map