import{m as a,b as s,f as e}from"./vendor.25a45199.js";import"./index.371d9812.js";import{g as u,a as p,b as g,c as w,d as c,e as h}from"./userscore.6a7c2714.js";import"./math.4d82e9ba.js";window.Alpine=a;a.data("UserGraphs",()=>({solves:null,fails:null,awards:null,async init(){this.solves=await s.pages.users.userSolves(window.USER.id),this.fails=await s.pages.users.userFails(window.USER.id),this.awards=await s.pages.users.userAwards(window.USER.id);let t=u(this.solves,this.fails),r=w("Solves Percentage",t);e(this.$refs.solvepercentage,r);let l=p(this.solves),i=c("Category Breakdown",l);e(this.$refs.categorybreakdown,i);let o=g(this.solves,this.awards),d=h("Score Graph",o);e(this.$refs.scoregraph,d)}}));a.start();
