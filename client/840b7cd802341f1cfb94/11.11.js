(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{117:function(t,e,n){"use strict";t.exports={position:!0,gfm:!0,commonmark:!1,pedantic:!1,blocks:n(290)}},118:function(t,e,n){"use strict";t.exports=function(t){var e,n=0,r=0,i=t.charAt(n),o={},s=0;for(;"\t"===i||" "===i;){for(r+=e="\t"===i?4:1,e>1&&(r=Math.floor(r/e)*e);s<r;)o[++s]=n;i=t.charAt(++n)}return{indent:r,stops:o}}},119:function(t,e,n){"use strict";var r="<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\u0000-\\u0020]+|'[^']*'|\"[^\"]*\"))?)*\\s*\\/?>",i="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>";e.openCloseTag=new RegExp("^(?:"+r+"|"+i+")"),e.tag=new RegExp("^(?:"+r+"|"+i+"|\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e|<[?].*?[?]>|<![A-Za-z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)")},120:function(t,e,n){"use strict";var r=n(71);t.exports=function(t){return r(t).toLowerCase()}},121:function(t,e,n){"use strict";t.exports=function(t,e){return t.indexOf("<",e)}},122:function(t,e,n){"use strict";t.exports=function(t,e){var n=t.indexOf("[",e),r=t.indexOf("![",e);if(-1===r)return n;return n<r?n:r}},284:function(t,e,n){"use strict";var r=n(78),i=n(38),o=n(285);function s(t){var e=this.data("settings"),n=r(o);n.prototype.options=i(n.prototype.options,e,t),this.Parser=n}t.exports=s,s.Parser=o},285:function(t,e,n){"use strict";var r=n(38),i=n(79),o=n(95),s=n(286),c=n(287),f=n(288);function a(t,e){this.file=e,this.offset={},this.options=r(this.options),this.setOptions({}),this.inList=!1,this.inBlock=!1,this.inLink=!1,this.atStart=!0,this.toOffset=o(e).toOffset,this.unescape=s(this,"escape"),this.decode=c(this)}t.exports=a;var l=a.prototype;function h(t){var e,n=[];for(e in t)n.push(e);return n}l.setOptions=n(289),l.parse=n(291),l.options=n(117),l.exitStart=i("atStart",!0),l.enterList=i("inList",!1),l.enterLink=i("inLink",!1),l.enterBlock=i("inBlock",!1),l.interruptParagraph=[["thematicBreak"],["list"],["atxHeading"],["fencedCode"],["blockquote"],["html"],["setextHeading",{commonmark:!1}],["definition",{commonmark:!1}]],l.interruptList=[["atxHeading",{pedantic:!1}],["fencedCode",{pedantic:!1}],["thematicBreak",{pedantic:!1}],["definition",{commonmark:!1}]],l.interruptBlockquote=[["indentedCode",{commonmark:!0}],["fencedCode",{commonmark:!0}],["atxHeading",{commonmark:!0}],["setextHeading",{commonmark:!0}],["thematicBreak",{commonmark:!0}],["html",{commonmark:!0}],["list",{commonmark:!0}],["definition",{commonmark:!1}]],l.blockTokenizers={blankLine:n(292),indentedCode:n(293),fencedCode:n(294),blockquote:n(295),atxHeading:n(296),thematicBreak:n(297),list:n(298),setextHeading:n(300),html:n(301),definition:n(302),table:n(303),paragraph:n(304)},l.inlineTokenizers={escape:n(305),autoLink:n(307),url:n(308),email:n(310),html:n(312),link:n(313),reference:n(314),strong:n(315),emphasis:n(317),deletion:n(319),code:n(321),break:n(323),text:n(325)},l.blockMethods=h(l.blockTokenizers),l.inlineMethods=h(l.inlineTokenizers),l.tokenizeBlock=f("block"),l.tokenizeInline=f("inline"),l.tokenizeFactory=f},286:function(t,e,n){"use strict";t.exports=function(t,e){return function(n){var r,i=0,o=n.indexOf("\\"),s=t[e],c=[];for(;-1!==o;)c.push(n.slice(i,o)),i=o+1,(r=n.charAt(i))&&-1!==s.indexOf(r)||c.push("\\"),o=n.indexOf("\\",i+1);return c.push(n.slice(i)),c.join("")}}},287:function(t,e,n){"use strict";var r=n(38),i=n(48);t.exports=function(t){return n.raw=function(t,n,s){return i(t,r(s,{position:e(n),warning:o}))},n;function e(e){for(var n=t.offset,r=e.line,i=[];++r&&r in n;)i.push((n[r]||0)+1);return{start:e,indent:i}}function n(n,r,s){i(n,{position:e(r),warning:o,text:s,reference:s,textContext:t,referenceContext:t})}function o(e,n,r){3!==r&&t.file.message(e,n)}}},288:function(t,e,n){"use strict";function r(t){var e,n;return"text"!==t.type||!t.position||(e=t.position.start,n=t.position.end,e.line!==n.line||n.column-e.column===t.value.length)}function i(t,e){return t.value+=e.value,t}function o(t,e){return this.options.commonmark||this.options.gfm?e:(t.children=t.children.concat(e.children),t)}t.exports=function(t){return function(e,n){var s,c,f,a,l,h,u=this,p=u.offset,d=[],A=u[t+"Methods"],k=u[t+"Tokenizers"],m=n.line,g=n.column;if(!e)return d;w.now=x,w.file=u.file,v("");for(;e;){for(s=-1,c=A.length,l=!1;++s<c&&(a=A[s],!(f=k[a])||f.onlyAtStart&&!u.atStart||f.notInList&&u.inList||f.notInBlock&&u.inBlock||f.notInLink&&u.inLink||(h=e.length,f.apply(u,[w,e]),!(l=h!==e.length))););l||u.file.fail(new Error("Infinite loop"),w.now())}return u.eof=x(),d;function v(t){for(var e=-1,n=t.indexOf("\n");-1!==n;)m++,e=n,n=t.indexOf("\n",n+1);-1===e?g+=t.length:g=t.length-e,m in p&&(-1!==e?g+=p[m]:g<=p[m]&&(g=p[m]+1))}function x(){var t={line:m,column:g};return t.offset=u.toOffset(t),t}function b(t){this.start=t,this.end=x()}function w(t){var n,s=function(){var t=[],e=m+1;return function(){for(var n=m+1;e<n;)t.push((p[e]||0)+1),e++;return t}}(),c=(n=x(),function(t,e){var r=t.position,i=r?r.start:n,o=[],s=r&&r.end.line,c=n.line;if(t.position=new b(i),r&&e&&r.indent){if(o=r.indent,s<c){for(;++s<c;)o.push((p[s]||0)+1);o.push(n.column)}e=o.concat(e)}return t.position.indent=e||[],t}),f=x();return function(t){e.slice(0,t.length)!==t&&u.file.fail(new Error("Incorrectly eaten value: please report this warning on https://git.io/vg5Ft"),x())}(t),a.reset=l,l.test=h,a.test=h,e=e.slice(t.length),v(t),s=s(),a;function a(t,e){return c(function(t,e){var n=e?e.children:d,s=n[n.length-1];return s&&t.type===s.type&&("text"===t.type||"blockquote"===t.type)&&r(s)&&r(t)&&(t=("text"===t.type?i:o).call(u,s,t)),t!==s&&n.push(t),u.atStart&&0!==d.length&&u.exitStart(),t}(c(t),e),s)}function l(){var n=a.apply(null,arguments);return m=f.line,g=f.column,e=t+e,n}function h(){var n=c({});return m=f.line,g=f.column,e=t+e,n.position}}}}},289:function(t,e,n){"use strict";var r=n(38),i=n(80),o=n(117);t.exports=function(t){var e,n,s=this.options;if(null==t)t={};else{if("object"!=typeof t)throw new Error("Invalid value `"+t+"` for setting `options`");t=r(t)}for(e in o){if(null==(n=t[e])&&(n=s[e]),"blocks"!==e&&"boolean"!=typeof n||"blocks"===e&&"object"!=typeof n)throw new Error("Invalid value `"+n+"` for setting `options."+e+"`");t[e]=n}return this.options=t,this.escape=i(t),this}},290:function(t,e,n){"use strict";t.exports=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","iframe","legend","li","link","main","menu","menuitem","meta","nav","noframes","ol","optgroup","option","p","param","pre","section","source","title","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"]},291:function(t,e,n){"use strict";var r=n(38),i=n(100);t.exports=function(){var t,e=String(this.file),n={line:1,column:1,offset:0},s=r(n);65279===(e=e.replace(o,"\n")).charCodeAt(0)&&(e=e.slice(1),s.column++,s.offset++);t={type:"root",children:this.tokenizeBlock(e,s),position:{start:n,end:this.eof||r(n)}},this.options.position||i(t,!0);return t};var o=/\r\n|\r/g},292:function(t,e,n){"use strict";var r=/^[ \t]*(\n|$)/;t.exports=function(t,e,n){var i,o="",s=0,c=e.length;for(;s<c&&null!=(i=r.exec(e.slice(s)));)s+=i[0].length,o+=i[0];if(""===o)return;if(n)return!0;t(o)}},293:function(t,e,n){"use strict";var r=n(40),i=n(70);t.exports=function(t,e,n){var r,s,c,f=-1,a=e.length,l="",h="",u="",p="";for(;++f<a;)if(r=e.charAt(f),c)if(c=!1,l+=u,h+=p,u="",p="","\n"===r)u=r,p=r;else for(l+=r,h+=r;++f<a;){if(!(r=e.charAt(f))||"\n"===r){p=r,u=r;break}l+=r,h+=r}else if(" "===r&&e.charAt(f+1)===r&&e.charAt(f+2)===r&&e.charAt(f+3)===r)u+=o,f+=3,c=!0;else if("\t"===r)u+=r,c=!0;else{for(s="";"\t"===r||" "===r;)s+=r,r=e.charAt(++f);if("\n"!==r)break;u+=s+r,p+=r}if(h)return!!n||t(l)({type:"code",lang:null,meta:null,value:i(h)})};var o=r(" ",4)},294:function(t,e,n){"use strict";t.exports=function(t,e,n){var r,i,o,s,c,f,a,l,h,u,p,d,A,k=this.options.gfm,m=e.length+1,g=0,v="";if(!k)return;for(;g<m&&(" "===(o=e.charAt(g))||"\t"===o);)v+=o,g++;if(d=g,"~"!==(o=e.charAt(g))&&"`"!==o)return;g++,i=o,r=1,v+=o;for(;g<m&&(o=e.charAt(g))===i;)v+=o,r++,g++;if(r<3)return;for(;g<m&&(" "===(o=e.charAt(g))||"\t"===o);)v+=o,g++;s="",a="";for(;g<m&&"\n"!==(o=e.charAt(g))&&("`"!==i||o!==i);)" "===o||"\t"===o?a+=o:(s+=a+o,a=""),g++;if((o=e.charAt(g))&&"\n"!==o)return;if(n)return!0;(A=t.now()).column+=v.length,A.offset+=v.length,v+=s,s=this.decode.raw(this.unescape(s),A),a&&(v+=a);a="",u="",p="",l="",h="";var x=!0;for(;g<m;)if(o=e.charAt(g),l+=u,h+=p,u="",p="","\n"===o){for(x?(v+=o,x=!1):(u+=o,p+=o),a="",g++;g<m&&" "===(o=e.charAt(g));)a+=o,g++;if(u+=a,p+=a.slice(d),!(a.length>=4)){for(a="";g<m&&(o=e.charAt(g))===i;)a+=o,g++;if(u+=a,p+=a,!(a.length<r)){for(a="";g<m&&(" "===(o=e.charAt(g))||"\t"===o);)u+=o,p+=o,g++;if(!o||"\n"===o)break}}}else l+=o,p+=o,g++;v+=l+u,g=-1,m=s.length;for(;++g<m;)if(" "===(o=s.charAt(g))||"\t"===o)c||(c=s.slice(0,g));else if(c){f=s.slice(g);break}return t(v)({type:"code",lang:c||s||null,meta:f||null,value:h})}},295:function(t,e,n){"use strict";var r=n(44),i=n(84);t.exports=function(t,e,n){var o,s,c,f,a,l,h,u,p,d=this.offset,A=this.blockTokenizers,k=this.interruptBlockquote,m=t.now(),g=m.line,v=e.length,x=[],b=[],w=[],y=0;for(;y<v&&(" "===(s=e.charAt(y))||"\t"===s);)y++;if(">"!==e.charAt(y))return;if(n)return!0;y=0;for(;y<v;){for(f=e.indexOf("\n",y),h=y,u=!1,-1===f&&(f=v);y<v&&(" "===(s=e.charAt(y))||"\t"===s);)y++;if(">"===e.charAt(y)?(y++,u=!0," "===e.charAt(y)&&y++):y=h,a=e.slice(y,f),!u&&!r(a)){y=h;break}if(!u&&(c=e.slice(y),i(k,A,this,[t,c,!0])))break;l=h===y?a:e.slice(h,f),w.push(y-h),x.push(l),b.push(a),y=f+1}y=-1,v=w.length,o=t(x.join("\n"));for(;++y<v;)d[g]=(d[g]||0)+w[y],g++;return p=this.enterBlock(),b=this.tokenizeBlock(b.join("\n"),m),p(),o({type:"blockquote",children:b})}},296:function(t,e,n){"use strict";t.exports=function(t,e,n){var r,i,o,s=this.options.pedantic,c=e.length+1,f=-1,a=t.now(),l="",h="";for(;++f<c;){if(" "!==(r=e.charAt(f))&&"\t"!==r){f--;break}l+=r}o=0;for(;++f<=c;){if("#"!==(r=e.charAt(f))){f--;break}l+=r,o++}if(o>6)return;if(!o||!s&&"#"===e.charAt(f+1))return;c=e.length+1,i="";for(;++f<c;){if(" "!==(r=e.charAt(f))&&"\t"!==r){f--;break}i+=r}if(!s&&0===i.length&&r&&"\n"!==r)return;if(n)return!0;l+=i,i="",h="";for(;++f<c&&(r=e.charAt(f))&&"\n"!==r;)if(" "===r||"\t"===r||"#"===r){for(;" "===r||"\t"===r;)i+=r,r=e.charAt(++f);if(s||!h||i||"#"!==r){for(;"#"===r;)i+=r,r=e.charAt(++f);for(;" "===r||"\t"===r;)i+=r,r=e.charAt(++f);f--}else h+=r}else h+=i+r,i="";return a.column+=l.length,a.offset+=l.length,t(l+=h+i)({type:"heading",depth:o,children:this.tokenizeInline(h,a)})}},297:function(t,e,n){"use strict";t.exports=function(t,e,n){var r,i,o,s,c=-1,f=e.length+1,a="";for(;++c<f&&("\t"===(r=e.charAt(c))||" "===r);)a+=r;if("*"!==r&&"-"!==r&&"_"!==r)return;i=r,a+=r,o=1,s="";for(;++c<f;)if((r=e.charAt(c))===i)o++,a+=s+i,s="";else{if(" "!==r)return o>=3&&(!r||"\n"===r)?(a+=s,!!n||t(a)({type:"thematicBreak"})):void 0;s+=r}}},298:function(t,e,n){"use strict";var r=n(44),i=n(40),o=n(43),s=n(118),c=n(299),f=n(84);t.exports=function(t,e,n){var i,s,c,a,l,h,u,p,A,k,m,g,v,x,b,w,y,z,C,O,L,T,I,B=this.options.commonmark,j=this.options.pedantic,_=this.blockTokenizers,S=this.interruptList,E=0,Z=e.length,q=null,H=!1;for(;E<Z&&("\t"===(a=e.charAt(E))||" "===a);)E++;if("*"===(a=e.charAt(E))||"+"===a||"-"===a)l=a,c=!1;else{for(c=!0,s="";E<Z&&(a=e.charAt(E),o(a));)s+=a,E++;if(a=e.charAt(E),!s||!("."===a||B&&")"===a))return;if(n&&"1"!==s)return;q=parseInt(s,10),l=a}if(" "!==(a=e.charAt(++E))&&"\t"!==a&&(j||"\n"!==a&&""!==a))return;if(n)return!0;E=0,x=[],b=[],w=[];for(;E<Z;){for(h=e.indexOf("\n",E),u=E,p=!1,I=!1,-1===h&&(h=Z),i=0;E<Z;){if("\t"===(a=e.charAt(E)))i+=4-i%4;else{if(" "!==a)break;i++}E++}if(y&&i>=y.indent&&(I=!0),a=e.charAt(E),A=null,!I){if("*"===a||"+"===a||"-"===a)A=a,E++,i++;else{for(s="";E<Z&&(a=e.charAt(E),o(a));)s+=a,E++;a=e.charAt(E),E++,s&&("."===a||B&&")"===a)&&(A=a,i+=s.length+1)}if(A)if("\t"===(a=e.charAt(E)))i+=4-i%4,E++;else if(" "===a){for(T=E+4;E<T&&" "===e.charAt(E);)E++,i++;E===T&&" "===e.charAt(E)&&(E-=3,i-=3)}else"\n"!==a&&""!==a&&(A=null)}if(A){if(!j&&l!==A)break;p=!0}else B||I||" "!==e.charAt(u)?B&&y&&(I=i>=y.indent||i>4):I=!0,p=!1,E=u;if(m=e.slice(u,h),k=u===E?m:e.slice(E,h),("*"===A||"_"===A||"-"===A)&&_.thematicBreak.call(this,t,m,!0))break;if(g=v,v=!p&&!r(k).length,I&&y)y.value=y.value.concat(w,m),b=b.concat(w,m),w=[];else if(p)0!==w.length&&(H=!0,y.value.push(""),y.trail=w.concat()),y={value:[m],indent:i,trail:[]},x.push(y),b=b.concat(w,m),w=[];else if(v){if(g&&!B)break;w.push(m)}else{if(g)break;if(f(S,_,this,[t,m,!0]))break;y.value=y.value.concat(w,m),b=b.concat(w,m),w=[]}E=h+1}O=t(b.join("\n")).reset({type:"list",ordered:c,start:q,spread:H,children:[]}),z=this.enterList(),C=this.enterBlock(),E=-1,Z=x.length;for(;++E<Z;)y=x[E].value.join("\n"),L=t.now(),t(y)(d(this,y,L),O),y=x[E].trail.join("\n"),E!==Z-1&&(y+="\n"),t(y);return z(),C(),O};var a=/\n\n(?!\s*$)/,l=/^\[([ X\tx])][ \t]/,h=/^([ \t]*)([*+-]|\d+[.)])( {1,4}(?! )| |\t|$|(?=\n))([^\n]*)/,u=/^([ \t]*)([*+-]|\d+[.)])([ \t]+)/,p=/^( {1,4}|\t)?/gm;function d(t,e,n){var r,i,o=t.offset,s=t.options.pedantic?A:k,c=null;return e=s.apply(null,arguments),t.options.gfm&&(r=e.match(l))&&(i=r[0].length,c="x"===r[1].toLowerCase(),o[n.line]+=i,e=e.slice(i)),{type:"listItem",spread:a.test(e),checked:c,children:t.tokenizeBlock(e,n)}}function A(t,e,n){var r=t.offset,i=n.line;return e=e.replace(u,o),i=n.line,e.replace(p,o);function o(t){return r[i]=(r[i]||0)+t.length,i++,""}}function k(t,e,n){var r,o,f,a,l,u,p,d=t.offset,A=n.line;for(a=(e=e.replace(h,(function(t,e,n,s,c){o=e+n+s,f=c,Number(n)<10&&o.length%2==1&&(n=" "+n);return(r=e+i(" ",n.length)+s)+f}))).split("\n"),(l=c(e,s(r).indent).split("\n"))[0]=f,d[A]=(d[A]||0)+o.length,A++,u=0,p=a.length;++u<p;)d[A]=(d[A]||0)+a[u].length-l[u].length,A++;return l.join("\n")}},299:function(t,e,n){"use strict";var r=n(44),i=n(40),o=n(118);t.exports=function(t,e){var n,s,c,f=t.split("\n"),a=f.length+1,l=1/0,h=[];f.unshift(i(" ",e)+"!");for(;a--;)if(s=o(f[a]),h[a]=s.stops,0!==r(f[a]).length){if(!s.indent){l=1/0;break}s.indent>0&&s.indent<l&&(l=s.indent)}if(l!==1/0)for(a=f.length;a--;){for(c=h[a],n=l;n&&!(n in c);)n--;f[a]=f[a].slice(c[n]+1)}return f.shift(),f.join("\n")}},300:function(t,e,n){"use strict";t.exports=function(t,e,n){var r,i,o,s,c,f=t.now(),a=e.length,l=-1,h="";for(;++l<a;){if(" "!==(o=e.charAt(l))||l>=3){l--;break}h+=o}r="",i="";for(;++l<a;){if("\n"===(o=e.charAt(l))){l--;break}" "===o||"\t"===o?i+=o:(r+=i+o,i="")}if(f.column+=h.length,f.offset+=h.length,h+=r+i,o=e.charAt(++l),s=e.charAt(++l),"\n"!==o||"="!==s&&"-"!==s)return;h+=o,i=s,c="="===s?1:2;for(;++l<a;){if((o=e.charAt(l))!==s){if("\n"!==o)return;l--;break}i+=o}if(n)return!0;return t(h+i)({type:"heading",depth:c,children:this.tokenizeInline(r,f)})}},301:function(t,e,n){"use strict";var r=n(119).openCloseTag;t.exports=function(t,e,n){var r,k,m,g,v,x,b,w=this.options.blocks.join("|"),y=new RegExp("^</?("+w+")(?=(\\s|/?>|$))","i"),z=e.length,C=0,O=[[i,o,!0],[s,c,!0],[f,a,!0],[l,h,!0],[u,p,!0],[y,d,!0],[A,d,!1]];for(;C<z&&("\t"===(g=e.charAt(C))||" "===g);)C++;if("<"!==e.charAt(C))return;r=-1===(r=e.indexOf("\n",C+1))?z:r,k=e.slice(C,r),m=-1,v=O.length;for(;++m<v;)if(O[m][0].test(k)){x=O[m];break}if(!x)return;if(n)return x[2];if(C=r,!x[1].test(k))for(;C<z;){if(r=-1===(r=e.indexOf("\n",C+1))?z:r,k=e.slice(C+1,r),x[1].test(k)){k&&(C=r);break}C=r}return b=e.slice(0,C),t(b)({type:"html",value:b})};var i=/^<(script|pre|style)(?=(\s|>|$))/i,o=/<\/(script|pre|style)>/i,s=/^<!--/,c=/-->/,f=/^<\?/,a=/\?>/,l=/^<![A-Za-z]/,h=/>/,u=/^<!\[CDATA\[/,p=/]]>/,d=/^$/,A=new RegExp(r.source+"\\s*$")},302:function(t,e,n){"use strict";var r=n(39),i=n(120);t.exports=function(t,e,n){var r,c,f,a,l,h,u,p,d=this.options.commonmark,A=0,k=e.length,m="";for(;A<k&&(" "===(a=e.charAt(A))||"\t"===a);)m+=a,A++;if("["!==(a=e.charAt(A)))return;A++,m+=a,f="";for(;A<k&&"]"!==(a=e.charAt(A));)"\\"===a&&(f+=a,A++,a=e.charAt(A)),f+=a,A++;if(!f||"]"!==e.charAt(A)||":"!==e.charAt(A+1))return;h=f,A=(m+=f+"]:").length,f="";for(;A<k&&("\t"===(a=e.charAt(A))||" "===a||"\n"===a);)m+=a,A++;if(a=e.charAt(A),f="",r=m,"<"===a){for(A++;A<k&&o(a=e.charAt(A));)f+=a,A++;if((a=e.charAt(A))===o.delimiter)m+="<"+f+a,A++;else{if(d)return;A-=f.length+1,f=""}}if(!f){for(;A<k&&s(a=e.charAt(A));)f+=a,A++;m+=f}if(!f)return;u=f,f="";for(;A<k&&("\t"===(a=e.charAt(A))||" "===a||"\n"===a);)f+=a,A++;a=e.charAt(A),l=null,'"'===a?l='"':"'"===a?l="'":"("===a&&(l=")");if(l){if(!f)return;for(A=(m+=f+a).length,f="";A<k&&(a=e.charAt(A))!==l;){if("\n"===a){if(A++,"\n"===(a=e.charAt(A))||a===l)return;f+="\n"}f+=a,A++}if((a=e.charAt(A))!==l)return;c=m,m+=f+a,A++,p=f,f=""}else f="",A=m.length;for(;A<k&&("\t"===(a=e.charAt(A))||" "===a);)m+=a,A++;if(!(a=e.charAt(A))||"\n"===a)return!!n||(r=t(r).test().end,u=this.decode.raw(this.unescape(u),r,{nonTerminated:!1}),p&&(c=t(c).test().end,p=this.decode.raw(this.unescape(p),c)),t(m)({type:"definition",identifier:i(h),label:h,title:p||null,url:u}))};function o(t){return">"!==t&&"["!==t&&"]"!==t}function s(t){return"["!==t&&"]"!==t&&!r(t)}o.delimiter=">"},303:function(t,e,n){"use strict";var r=n(39);t.exports=function(t,e,n){var i,o,s,c,f,a,l,h,u,p,d,A,k,m,g,v,x,b,w,y,z,C;if(!this.options.gfm)return;i=0,v=0,a=e.length+1,l=[];for(;i<a;){if(y=e.indexOf("\n",i),z=e.indexOf("|",i+1),-1===y&&(y=e.length),-1===z||z>y){if(v<2)return;break}l.push(e.slice(i,y)),v++,i=y+1}c=l.join("\n"),o=l.splice(1,1)[0]||[],i=0,a=o.length,v--,s=!1,d=[];for(;i<a;){if("|"===(u=o.charAt(i))){if(p=null,!1===s){if(!1===C)return}else d.push(s),s=!1;C=!1}else if("-"===u)p=!0,s=s||null;else if(":"===u)s="left"===s?"center":p&&null===s?"right":"left";else if(!r(u))return;i++}!1!==s&&d.push(s);if(d.length<1)return;if(n)return!0;g=-1,b=[],w=t(c).reset({type:"table",align:d,children:b});for(;++g<v;){for(x=l[g],f={type:"tableRow",children:[]},g&&t("\n"),t(x).reset(f,w),a=x.length+1,i=0,h="",A="",k=!0;i<a;)"\t"!==(u=x.charAt(i))&&" "!==u?(""===u||"|"===u?k?t(u):(!A&&!u||k||(c=A,h.length>1&&(u?(c+=h.slice(0,-1),h=h.charAt(h.length-1)):(c+=h,h="")),m=t.now(),t(c)({type:"tableCell",children:this.tokenizeInline(A,m)},f)),t(h+u),h="",A=""):(h&&(A+=h,h=""),A+=u,"\\"===u&&i!==a-2&&(A+=x.charAt(i+1),i++)),k=!1,i++):(A?h+=u:t(u),i++);g||t("\n"+o)}return w}},304:function(t,e,n){"use strict";var r=n(44),i=n(70),o=n(84);t.exports=function(t,e,n){var s,c,f,a,l,h=this.options.commonmark,u=this.blockTokenizers,p=this.interruptParagraph,d=e.indexOf("\n"),A=e.length;for(;d<A;){if(-1===d){d=A;break}if("\n"===e.charAt(d+1))break;if(h){for(a=0,s=d+1;s<A;){if("\t"===(f=e.charAt(s))){a=4;break}if(" "!==f)break;a++,s++}if(a>=4&&"\n"!==f){d=e.indexOf("\n",d+1);continue}}if(c=e.slice(d+1),o(p,u,this,[t,c,!0]))break;if(s=d,-1!==(d=e.indexOf("\n",d+1))&&""===r(e.slice(s,d))){d=s;break}}if(c=e.slice(0,d),n)return!0;return l=t.now(),c=i(c),t(c)({type:"paragraph",children:this.tokenizeInline(c,l)})}},305:function(t,e,n){"use strict";var r=n(306);t.exports=i,i.locator=r;function i(t,e,n){var r,i;if("\\"===e.charAt(0)&&(r=e.charAt(1),-1!==this.escape.indexOf(r)))return!!n||(i="\n"===r?{type:"break"}:{type:"text",value:r},t("\\"+r)(i))}},306:function(t,e,n){"use strict";t.exports=function(t,e){return t.indexOf("\\",e)}},307:function(t,e,n){"use strict";var r=n(39),i=n(48),o=n(121);t.exports=c,c.locator=o,c.notInLink=!0;var s="mailto:".length;function c(t,e,n){var o,c,f,a,l,h="",u=e.length,p=0,d="",A=!1,k="";if("<"===e.charAt(0)){for(p++,h="<";p<u&&(o=e.charAt(p),!(r(o)||">"===o||"@"===o||":"===o&&"/"===e.charAt(p+1)));)d+=o,p++;if(d){if(k+=d,d="",k+=o=e.charAt(p),p++,"@"===o)A=!0;else{if(":"!==o||"/"!==e.charAt(p+1))return;k+="/",p++}for(;p<u&&(o=e.charAt(p),!r(o)&&">"!==o);)d+=o,p++;if(o=e.charAt(p),d&&">"===o)return!!n||(f=k+=d,h+=k+o,(c=t.now()).column++,c.offset++,A&&("mailto:"===k.slice(0,s).toLowerCase()?(f=f.slice(s),c.column+=s,c.offset+=s):k="mailto:"+k),a=this.inlineTokenizers,this.inlineTokenizers={text:a.text},l=this.enterLink(),f=this.tokenizeInline(f,c),this.inlineTokenizers=a,l(),t(h)({type:"link",title:null,url:i(k,{nonTerminated:!1}),children:f}))}}}},308:function(t,e,n){"use strict";var r=n(67),i=n(48),o=n(43),s=n(49),c=n(39),f=n(309);t.exports=a,a.locator=f,a.notInLink=!0;function a(t,e,n){var f,a,l,h,u,p,d,A,k,m,g,v,x,b,w=this.options.gfm,y=this.inlineTokenizers,z=e.length,C=-1,O=!1;if(w){if("www."===e.slice(0,4))O=!0,h=4;else if("http://"===e.slice(0,7).toLowerCase())h=7;else{if("https://"!==e.slice(0,8).toLowerCase())return;h=8}for(C=h-1,l=h,f=[];h<z;)if(46!==(d=e.charCodeAt(h))){if(!o(d)&&!s(d)&&45!==d&&95!==d)break;h++}else{if(C===h-1)break;f.push(h),C=h,h++}if(46===d&&(f.pop(),h--),void 0!==f[0]&&(a=f.length<2?l:f[f.length-2]+1,-1===e.slice(a,h).indexOf("_"))){if(n)return!0;for(A=h,u=h;h<z&&(d=e.charCodeAt(h),!c(d)&&60!==d);)h++,33===d||42===d||44===d||46===d||58===d||63===d||95===d||126===d||(A=h);if(h=A,41===e.charCodeAt(h-1))for(p=e.slice(u,h),k=r(p,"("),m=r(p,")");m>k;)h=u+p.lastIndexOf(")"),p=e.slice(u,h),m--;if(59===e.charCodeAt(h-1)&&(h--,s(e.charCodeAt(h-1)))){for(A=h-2;s(e.charCodeAt(A));)A--;38===e.charCodeAt(A)&&(h=A)}return g=e.slice(0,h),x=i(g,{nonTerminated:!1}),O&&(x="http://"+x),b=this.enterLink(),this.inlineTokenizers={text:y.text},v=this.tokenizeInline(g,t.now()),this.inlineTokenizers=y,b(),t(g)({type:"link",title:null,url:x,children:v})}}}},309:function(t,e,n){"use strict";t.exports=function(t,e){var n,i,o,s=-1;if(!this.options.gfm)return s;i=r.length,n=-1;for(;++n<i;)-1!==(o=t.indexOf(r[n],e))&&(-1===s||o<s)&&(s=o);return s};var r=["www.","http://","https://"]},310:function(t,e,n){"use strict";var r=n(48),i=n(43),o=n(49),s=n(311);t.exports=c,c.locator=s,c.notInLink=!0;function c(t,e,n){var s,c,f,a,l=this.options.gfm,h=this.inlineTokenizers,u=0,p=e.length,d=-1;if(l){for(s=e.charCodeAt(u);i(s)||o(s)||43===s||45===s||46===s||95===s;)s=e.charCodeAt(++u);if(0!==u&&64===s){for(u++;u<p&&(s=e.charCodeAt(u),i(s)||o(s)||45===s||46===s||95===s);)u++,-1===d&&46===s&&(d=u);if(-1!==d&&d!==u&&45!==s&&95!==s)return 46===s&&u--,c=e.slice(0,u),!!n||(a=this.enterLink(),this.inlineTokenizers={text:h.text},f=this.tokenizeInline(c,t.now()),this.inlineTokenizers=h,a(),t(c)({type:"link",title:null,url:"mailto:"+r(c,{nonTerminated:!1}),children:f}))}}}},311:function(t,e,n){"use strict";var r=n(43),i=n(49);function o(t){return r(t)||i(t)||43===t||45===t||46===t||95===t}t.exports=function t(e,n){var r,i;if(!this.options.gfm)return-1;if(-1===(r=e.indexOf("@",n)))return-1;if((i=r)===n||!o(e.charCodeAt(i-1)))return t.call(this,e,r+1);for(;i>n&&o(e.charCodeAt(i-1));)i--;return i}},312:function(t,e,n){"use strict";var r=n(49),i=n(121),o=n(119).tag;t.exports=f,f.locator=i;var s=/^<a /i,c=/^<\/a>/i;function f(t,e,n){var i,f,a=e.length;if(!("<"!==e.charAt(0)||a<3)&&(i=e.charAt(1),(r(i)||"?"===i||"!"===i||"/"===i)&&(f=e.match(o))))return!!n||(f=f[0],!this.inLink&&s.test(f)?this.inLink=!0:this.inLink&&c.test(f)&&(this.inLink=!1),t(f)({type:"html",value:f}))}},313:function(t,e,n){"use strict";var r=n(39),i=n(122);t.exports=o,o.locator=i;function o(t,e,n){var i,o,s,c,f,a,l,h,u,p,d,A,k,m,g,v,x,b,w="",y=0,z=e.charAt(0),C=this.options.pedantic,O=this.options.commonmark,L=this.options.gfm;if("!"===z&&(h=!0,w=z,z=e.charAt(++y)),"["===z&&(h||!this.inLink)){for(w+=z,m="",y++,d=e.length,k=0,(v=t.now()).column+=y,v.offset+=y;y<d;){if(a=z=e.charAt(y),"`"===z){for(o=1;"`"===e.charAt(y+1);)a+=z,y++,o++;s?o>=s&&(s=0):s=o}else if("\\"===z)y++,a+=e.charAt(y);else if(s&&!L||"["!==z){if((!s||L)&&"]"===z){if(!k){if("("!==e.charAt(y+1))return;a+="(",i=!0,y++;break}k--}}else k++;m+=a,a="",y++}if(i){for(u=m,w+=m+a,y++;y<d&&(z=e.charAt(y),r(z));)w+=z,y++;if(m="",c=w,"<"===(z=e.charAt(y))){for(y++,c+="<";y<d&&">"!==(z=e.charAt(y));){if(O&&"\n"===z)return;m+=z,y++}if(">"!==e.charAt(y))return;w+="<"+m+">",g=m,y++}else{for(z=null,a="";y<d&&(z=e.charAt(y),!a||!('"'===z||"'"===z||O&&"("===z));){if(r(z)){if(!C)break;a+=z}else{if("("===z)k++;else if(")"===z){if(0===k)break;k--}m+=a,a="","\\"===z&&(m+="\\",z=e.charAt(++y)),m+=z}y++}g=m,y=(w+=m).length}for(m="";y<d&&(z=e.charAt(y),r(z));)m+=z,y++;if(z=e.charAt(y),w+=m,m&&('"'===z||"'"===z||O&&"("===z))if(y++,m="",p="("===z?")":z,f=w+=z,O){for(;y<d&&(z=e.charAt(y))!==p;)"\\"===z&&(m+="\\",z=e.charAt(++y)),y++,m+=z;if((z=e.charAt(y))!==p)return;for(A=m,w+=m+z,y++;y<d&&(z=e.charAt(y),r(z));)w+=z,y++}else for(a="";y<d;){if((z=e.charAt(y))===p)l&&(m+=p+a,a=""),l=!0;else if(l){if(")"===z){w+=m+p+a,A=m;break}r(z)?a+=z:(m+=p+a+z,a="",l=!1)}else m+=z;y++}if(")"===e.charAt(y))return!!n||(w+=")",g=this.decode.raw(this.unescape(g),t(c).test().end,{nonTerminated:!1}),A&&(f=t(f).test().end,A=this.decode.raw(this.unescape(A),f)),b={type:h?"image":"link",title:A||null,url:g},h?b.alt=this.decode.raw(this.unescape(u),v)||null:(x=this.enterLink(),b.children=this.tokenizeInline(u,v),x()),t(w)(b))}}}},314:function(t,e,n){"use strict";var r=n(39),i=n(122),o=n(120);t.exports=s,s.locator=i;function s(t,e,n){var i,s,c,f,a,l,h,u,p=this.options.commonmark,d=e.charAt(0),A=0,k=e.length,m="",g="",v="link",x="shortcut";if("!"===d&&(v="image",g=d,d=e.charAt(++A)),"["===d){for(A++,g+=d,l="",u=0;A<k;){if("["===(d=e.charAt(A)))h=!0,u++;else if("]"===d){if(!u)break;u--}"\\"===d&&(l+="\\",d=e.charAt(++A)),l+=d,A++}if(m=l,i=l,"]"===(d=e.charAt(A))){if(A++,m+=d,l="",!p)for(;A<k&&(d=e.charAt(A),r(d));)l+=d,A++;if("["===(d=e.charAt(A))){for(s="",l+=d,A++;A<k&&"["!==(d=e.charAt(A))&&"]"!==d;)"\\"===d&&(s+="\\",d=e.charAt(++A)),s+=d,A++;"]"===(d=e.charAt(A))?(x=s?"full":"collapsed",l+=s+d,A++):s="",m+=l,l=""}else{if(!i)return;s=i}if("full"===x||!h)return m=g+m,"link"===v&&this.inLink?null:!!n||((c=t.now()).column+=g.length,c.offset+=g.length,f={type:v+"Reference",identifier:o(s="full"===x?s:i),label:s,referenceType:x},"link"===v?(a=this.enterLink(),f.children=this.tokenizeInline(i,c),a()):f.alt=this.decode.raw(this.unescape(i),c)||null,t(m)(f))}}}},315:function(t,e,n){"use strict";var r=n(44),i=n(39),o=n(316);t.exports=s,s.locator=o;function s(t,e,n){var o,s,c,f,a,l,h,u=0,p=e.charAt(u);if(!("*"!==p&&"_"!==p||e.charAt(++u)!==p||(s=this.options.pedantic,a=(c=p)+c,l=e.length,u++,f="",p="",s&&i(e.charAt(u)))))for(;u<l;){if(h=p,!((p=e.charAt(u))!==c||e.charAt(u+1)!==c||s&&i(h))&&(p=e.charAt(u+2))!==c){if(!r(f))return;return!!n||((o=t.now()).column+=2,o.offset+=2,t(a+f+a)({type:"strong",children:this.tokenizeInline(f,o)}))}s||"\\"!==p||(f+=p,p=e.charAt(++u)),f+=p,u++}}},316:function(t,e,n){"use strict";t.exports=function(t,e){var n=t.indexOf("**",e),r=t.indexOf("__",e);if(-1===r)return n;if(-1===n)return r;return r<n?r:n}},317:function(t,e,n){"use strict";var r=n(44),i=n(107),o=n(39),s=n(318);t.exports=c,c.locator=s;function c(t,e,n){var s,c,f,a,l,h,u,p=0,d=e.charAt(p);if(!("*"!==d&&"_"!==d||(c=this.options.pedantic,l=d,f=d,h=e.length,p++,a="",d="",c&&o(e.charAt(p)))))for(;p<h;){if(u=d,!((d=e.charAt(p))!==f||c&&o(u))){if((d=e.charAt(++p))!==f){if(!r(a)||u===f)return;if(!c&&"_"===f&&i(d)){a+=f;continue}return!!n||((s=t.now()).column++,s.offset++,t(l+a+f)({type:"emphasis",children:this.tokenizeInline(a,s)}))}a+=f}c||"\\"!==d||(a+=d,d=e.charAt(++p)),a+=d,p++}}},318:function(t,e,n){"use strict";t.exports=function(t,e){var n=t.indexOf("*",e),r=t.indexOf("_",e);if(-1===r)return n;if(-1===n)return r;return r<n?r:n}},319:function(t,e,n){"use strict";var r=n(39),i=n(320);t.exports=o,o.locator=i;function o(t,e,n){var i,o,s,c="",f="",a="",l="";if(this.options.gfm&&"~"===e.charAt(0)&&"~"===e.charAt(1)&&!r(e.charAt(2)))for(i=1,o=e.length,(s=t.now()).column+=2,s.offset+=2;++i<o;){if(!("~"!==(c=e.charAt(i))||"~"!==f||a&&r(a)))return!!n||t("~~"+l+"~~")({type:"delete",children:this.tokenizeInline(l,s)});l+=f,a=f,f=c}}},320:function(t,e,n){"use strict";t.exports=function(t,e){return t.indexOf("~~",e)}},321:function(t,e,n){"use strict";var r=n(322);t.exports=i,i.locator=r;function i(t,e,n){for(var r,i,o,s,c,f,a=e.length,l=0;l<a&&96===e.charCodeAt(l);)l++;if(0!==l&&l!==a){for(r=l,c=e.charCodeAt(l);l<a;){if(s=c,c=e.charCodeAt(l+1),96===s){if(void 0===i&&(i=l),o=l+1,96!==c&&o-i===r){f=!0;break}}else void 0!==i&&(i=void 0,o=void 0);l++}if(f){if(n)return!0;if(l=r,a=i,s=e.charCodeAt(l),c=e.charCodeAt(a-1),f=!1,a-l>2&&(32===s||10===s)&&(32===c||10===c)){for(l++,a--;l<a;){if(32!==(s=e.charCodeAt(l))&&10!==s){f=!0;break}l++}!0===f&&(r++,i--)}return t(e.slice(0,o))({type:"inlineCode",value:e.slice(r,i)})}}}},322:function(t,e,n){"use strict";t.exports=function(t,e){return t.indexOf("`",e)}},323:function(t,e,n){"use strict";var r=n(324);t.exports=i,i.locator=r;function i(t,e,n){for(var r,i=e.length,o=-1,s="";++o<i;){if("\n"===(r=e.charAt(o))){if(o<2)return;return!!n||t(s+=r)({type:"break"})}if(" "!==r)return;s+=r}}},324:function(t,e,n){"use strict";t.exports=function(t,e){var n=t.indexOf("\n",e);for(;n>e&&" "===t.charAt(n-1);)n--;return n}},325:function(t,e,n){"use strict";t.exports=function(t,e,n){var r,i,o,s,c,f,a,l,h,u;if(n)return!0;r=this.inlineMethods,s=r.length,i=this.inlineTokenizers,o=-1,h=e.length;for(;++o<s;)"text"!==(l=r[o])&&i[l]&&((a=i[l].locator)||t.file.fail("Missing locator: `"+l+"`"),-1!==(f=a.call(this,e,1))&&f<h&&(h=f));c=e.slice(0,h),u=t.now(),this.decode(c,u,(function(e,n,r){t(r||e)({type:"text",value:e})}))}},84:function(t,e,n){"use strict";t.exports=function(t,e,n,r){var i,o,s=t.length,c=-1;for(;++c<s;)if(i=t[c],(void 0===(o=i[1]||{}).pedantic||o.pedantic===n.options.pedantic)&&(void 0===o.commonmark||o.commonmark===n.options.commonmark)&&e[i[0]].apply(n,r))return!0;return!1}}}]);