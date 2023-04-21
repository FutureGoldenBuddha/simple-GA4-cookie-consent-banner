/*!
 * CookieConsent v2.8.9
 * https://www.github.com/orestbida/cookieconsent
 * Author Orest Bida
 * Released under the MIT License
 */
!function(){'use strict';var n='initCookieConsent';'undefined'!=typeof window&&'function'!=typeof window[n]&&(window[n]=function(n){var t,e,o,i,r,c,a,u,f,d,v,s,l,b,p,m,y,w,g,h,_,k,x,O,j,S,T,J,N,D,C,U,z={mode:'opt-in',current_lang:'en',auto_language:null,autorun:!0,page_scripts:!0,hide_from_bots:!0,cookie_name:'cc_cookie',cookie_expiration:182,cookie_domain:window.location.hostname,cookie_path:'/',cookie_same_site:'Lax',use_rfc_cookie:!1,autoclear_cookies:!0,revision:0,script_selector:'data-cookiecategory'},I={},R={},A=null,E=!0,G=!1,L=!1,M=!1,P=!1,q=!1,B=!0,F=[],H=!1,K=[],Q=[],V=[],W=!1,X=[],Y=[],Z=[],$=[],nn=[],tn=document.documentElement,en=function(n){'number'==typeof(t=n).cookie_expiration&&(z.cookie_expiration=t.cookie_expiration),'number'==typeof t.cookie_necessary_only_expiration&&(z.cookie_necessary_only_expiration=t.cookie_necessary_only_expiration),'boolean'==typeof t.autorun&&(z.autorun=t.autorun),'string'==typeof t.cookie_domain&&(z.cookie_domain=t.cookie_domain),'string'==typeof t.cookie_same_site&&(z.cookie_same_site=t.cookie_same_site),'string'==typeof t.cookie_path&&(z.cookie_path=t.cookie_path),'string'==typeof t.cookie_name&&(z.cookie_name=t.cookie_name),'function'==typeof t.onAccept&&(u=t.onAccept),'function'==typeof t.onFirstAction&&(d=t.onFirstAction),'function'==typeof t.onChange&&(f=t.onChange),'opt-out'===t.mode&&(z.mode='opt-out'),'number'==typeof t.revision&&(t.revision>-1&&(z.revision=t.revision),q=!0),'boolean'==typeof t.autoclear_cookies&&(z.autoclear_cookies=t.autoclear_cookies),!0===t.use_rfc_cookie&&(z.use_rfc_cookie=!0),'boolean'==typeof t.hide_from_bots&&(z.hide_from_bots=t.hide_from_bots),z.hide_from_bots&&(W=navigator&&(navigator.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(navigator.userAgent)||navigator.webdriver)),z.page_scripts=!0===t.page_scripts,'browser'===t.auto_language||!0===t.auto_language?z.auto_language='browser':'document'===t.auto_language&&(z.auto_language='document'),z.auto_language,z.current_lang=vn(t.languages,t.current_lang)},on=function(n){for(var t='accept-',e=a('c-settings'),o=a(t+'all'),i=a(t+'necessary'),r=a(t+'custom'),c=0;c<e.length;c++)e[c].setAttribute('aria-haspopup','dialog'),gn(e[c],'click',(function(n){n.preventDefault(),I.showSettings(0)}));for(c=0;c<o.length;c++)gn(o[c],'click',(function(n){u(n,'all')}));for(c=0;c<r.length;c++)gn(r[c],'click',(function(n){u(n)}));for(c=0;c<i.length;c++)gn(i[c],'click',(function(n){u(n,[])}));function a(t){return(n||document).querySelectorAll('a[data-cc="'+t+'"], button[data-cc="'+t+'"]')}function u(n,t){n.preventDefault(),I.accept(t),I.hideSettings(),I.hide()}},rn=function(n,t){return Object.prototype.hasOwnProperty.call(t,n)?n:hn(t).length>0?Object.prototype.hasOwnProperty.call(t,z.current_lang)?z.current_lang:hn(t)[0]:void 0},cn=function(n){if(!0===t.force_consent&&_n(tn,'force--consent'),!m){m=dn('div');var e=dn('div'),o=dn('div');m.id='cm',e.id='c-inr-i',o.id='cm-ov',m.setAttribute('role','dialog'),m.setAttribute('aria-modal','true'),m.setAttribute('aria-hidden','false'),m.setAttribute('aria-labelledby','c-ttl'),m.setAttribute('aria-describedby','c-txt'),p.appendChild(m),p.appendChild(o),m.style.visibility=o.style.visibility='hidden',o.style.opacity=0}var i=t.languages[n].consent_modal.title;i&&(y||((y=dn('div')).id='c-ttl',y.setAttribute('role','heading'),y.setAttribute('aria-level','2'),e.appendChild(y)),y.innerHTML=i);var r=t.languages[n].consent_modal.description;q&&(r=B?r.replace('{{revision_message}}',''):r.replace('{{revision_message}}',t.languages[n].consent_modal.revision_message||'')),w||((w=dn('div')).id='c-txt',e.appendChild(w)),w.innerHTML=r;var c,a=t.languages[n].consent_modal.primary_btn,u=t.languages[n].consent_modal.secondary_btn;a&&(g||((g=dn('button')).id='c-p-bn',g.className='c-bn','accept_all'===a.role&&(c='all'),gn(g,'click',(function(){I.hide(),I.accept(c)}))),g.innerHTML=t.languages[n].consent_modal.primary_btn.text),u&&(h||((h=dn('button')).id='c-s-bn',h.className='c-bn c_link','accept_necessary'===u.role?gn(h,'click',(function(){I.hide(),I.accept([])})):gn(h,'click',(function(){I.showSettings(0)}))),h.innerHTML=t.languages[n].consent_modal.secondary_btn.text);var f=t.gui_options;k||((k=dn('div')).id='c-inr',k.appendChild(e)),_||((_=dn('div')).id='c-bns',f&&f.consent_modal&&!0===f.consent_modal.swap_buttons?(u&&_.appendChild(h),a&&_.appendChild(g),_.className='swap'):(a&&_.appendChild(g),u&&_.appendChild(h)),(a||u)&&k.appendChild(_),m.appendChild(k)),G=!0,on(k)},an=function(n){if(x)(J=dn('div')).id='s-bl';else{x=dn('div');var e=dn('div'),o=dn('div'),i=dn('div');O=dn('div'),j=dn('div');var r=dn('div');S=dn('button');var u=dn('div');T=dn('div');var f=dn('div');x.id='s-cnt',e.id='c-vln',i.id='c-s-in',o.id='cs',j.id='s-ttl',O.id='s-inr',r.id='s-hdr',T.id='s-bl',S.id='s-c-bn',f.id='cs-ov',u.id='s-c-bnc',S.className='c-bn',x.setAttribute('role','dialog'),x.setAttribute('aria-modal','true'),x.setAttribute('aria-hidden','true'),x.setAttribute('aria-labelledby','s-ttl'),j.setAttribute('role','heading'),x.style.visibility=f.style.visibility='hidden',f.style.opacity=0,u.appendChild(S),gn(e,'keydown',(function(n){27===(n=n||window.event).keyCode&&I.hideSettings(0)}),!0),gn(S,'click',(function(){I.hideSettings(0)}))}S.setAttribute('aria-label',t.languages[n].settings_modal.close_btn_label||'Close'),a=t.languages[n].settings_modal.blocks,c=t.languages[n].settings_modal.cookie_table_headers;var d=a.length;j.innerHTML=t.languages[n].settings_modal.title;for(var v=0;v<d;++v){var s=a[v].title,l=a[v].description,b=a[v].toggle,m=a[v].cookie_table,y=!0===t.remove_cookie_tables,w=(l||!y&&m)&&'truthy',g=dn('div'),h=dn('div');if(l){var _=dn('div');_.className='p',_.insertAdjacentHTML('beforeend',l)}var k=dn('div');if(k.className='title',g.className='c-bl',h.className='desc',void 0!==b){var z='c-ac-'+v,A=dn(w?'button':'div'),G=dn('label'),L=dn('input'),M=dn('span'),P=dn('span'),q=dn('span'),B=dn('span');A.className=w?'b-tl exp':'b-tl',G.className='b-tg',L.className='c-tgl',q.className='on-i',B.className='off-i',M.className='c-tg',P.className='t-lb',w&&(A.setAttribute('aria-expanded','false'),A.setAttribute('aria-controls',z)),L.type='checkbox',M.setAttribute('aria-hidden','true');var F=b.value;L.value=F,P.textContent=s,A.insertAdjacentHTML('beforeend',s),k.appendChild(A),M.appendChild(q),M.appendChild(B),E?b.enabled?(L.checked=!0,!J&&Z.push(!0),b.enabled&&!J&&V.push(F)):!J&&Z.push(!1):fn(R.categories,F)>-1?(L.checked=!0,!J&&Z.push(!0)):!J&&Z.push(!1),!J&&$.push(F),b.readonly?(L.disabled=!0,_n(M,'c-ro'),!J&&nn.push(!0)):!J&&nn.push(!1),_n(h,'b-acc'),_n(k,'b-bn'),_n(g,'b-ex'),h.id=z,h.setAttribute('aria-hidden','true'),G.appendChild(L),G.appendChild(M),G.appendChild(P),k.appendChild(G),w&&function(n,t,e){gn(A,'click',(function(){xn(t,'act')?(kn(t,'act'),e.setAttribute('aria-expanded','false'),n.setAttribute('aria-hidden','true')):(_n(t,'act'),e.setAttribute('aria-expanded','true'),n.setAttribute('aria-hidden','false'))}),!1)}(h,g,A)}else if(s){var H=dn('div');H.className='b-tl',H.setAttribute('role','heading'),H.setAttribute('aria-level','3'),H.insertAdjacentHTML('beforeend',s),k.appendChild(H)}if(s&&g.appendChild(k),l&&h.appendChild(_),!y&&void 0!==m){for(var K=document.createDocumentFragment(),Q=0;Q<c.length;++Q){var W=dn('th'),X=c[Q];if(W.setAttribute('scope','col'),X){var Y=X&&hn(X)[0];W.textContent=c[Q][Y],K.appendChild(W)}}var tn=dn('tr');tn.appendChild(K);var en=dn('thead');en.appendChild(tn);var on=dn('table');on.appendChild(en);for(var rn=document.createDocumentFragment(),cn=0;cn<m.length;cn++){for(var an=dn('tr'),un=0;un<c.length;++un)if(X=c[un]){Y=hn(X)[0];var vn=dn('td');vn.insertAdjacentHTML('beforeend',m[cn][Y]),vn.setAttribute('data-column',X[Y]),an.appendChild(vn)}rn.appendChild(an)}var sn=dn('tbody');sn.appendChild(rn),on.appendChild(sn),h.appendChild(on)}(b&&s||!b&&(s||l))&&(g.appendChild(h),J?J.appendChild(g):T.appendChild(g))}N||((N=dn('div')).id='s-bns'),C||((C=dn('button')).id='s-all-bn',C.className='c-bn',N.appendChild(C),gn(C,'click',(function(){I.hideSettings(),I.hide(),I.accept('all')}))),C.innerHTML=t.languages[n].settings_modal.accept_all_btn;var ln=t.languages[n].settings_modal.reject_all_btn;if(ln&&(U||((U=dn('button')).id='s-rall-bn',U.className='c-bn',gn(U,'click',(function(){I.hideSettings(),I.hide(),I.accept([])})),O.className='bns-t',N.appendChild(U)),U.innerHTML=ln),D||((D=dn('button')).id='s-sv-bn',D.className='c-bn',N.appendChild(D),gn(D,'click',(function(){I.hideSettings(),I.hide(),I.accept()}))),D.innerHTML=t.languages[n].settings_modal.save_settings_btn,J)return O.replaceChild(J,T),void(T=J);r.appendChild(j),r.appendChild(u),O.appendChild(r),O.appendChild(T),O.appendChild(N),i.appendChild(O),o.appendChild(i),e.appendChild(o),x.appendChild(e),p.appendChild(x),p.appendChild(f)};I.updateLanguage=function(n,e){if('string'==typeof n){var o=rn(n,t.languages);return(o!==z.current_lang||!0===e)&&(z.current_lang=o,G&&cn(o),an(o),!0)}};var un=function(n){var t=a.length,e=-1;H=!1;var o=yn('','all'),i=[z.cookie_domain,'.'+z.cookie_domain];if('www.'===z.cookie_domain.slice(0,4)){var r=z.cookie_domain.substr(4);i.push(r),i.push('.'+r)}for(var u=0;u<t;u++){var f=a[u];if(Object.prototype.hasOwnProperty.call(f,'toggle')){var d=fn(F,f.toggle.value)>-1;if(!Z[++e]&&Object.prototype.hasOwnProperty.call(f,'cookie_table')&&(n||d)){var v=f.cookie_table,s=hn(c[0])[0],l=v.length;'on_disable'===f.toggle.reload&&d&&(H=!0);for(var b=0;b<l;b++){var p=i,m=v[b],y=[],w=m[s],g=m.is_regex||!1,h=m.domain||null,_=m.path||!1;if(h&&(p=[h,'.'+h]),g)for(var k=0;k<o.length;k++)o[k].match(w)&&y.push(o[k]);else{var x=fn(o,w);x>-1&&y.push(o[x])}y.length>0&&(wn(y,_,p),'on_clear'===f.toggle.reload&&(H=!0))}}}}},fn=function(n,t){return n.indexOf(t)},dn=function(n){var t=document.createElement(n);return'button'===n&&t.setAttribute('type',n),t},vn=function(n,t){return'browser'===z.auto_language?rn(sn(),n):'document'===z.auto_language?rn(document.documentElement.lang,n):'string'==typeof t?z.current_lang=rn(t,n):(z.current_lang,z.current_lang)},sn=function(){var n=navigator.language||navigator.browserLanguage;return n.length>2&&(n=n[0]+n[1]),n.toLowerCase()};I.allowedCategory=function(n){if(E&&'opt-in'!==z.mode)t=V;else var t=JSON.parse(yn(z.cookie_name,'one',!0)||'{}').categories||[];return fn(t,n)>-1},I.run=function(t){if(!document.getElementById('cc_div')){if(en(t),W)return;R=JSON.parse(yn(z.cookie_name,'one',!0)||'{}');var c=void 0!==(i=R.consent_uuid);if((e=R.consent_date)&&(e=new Date(e)),(o=R.last_consent_update)&&(o=new Date(o)),A=void 0!==R.data?R.data:null,q&&R.revision!==z.revision&&(B=!1),G=E=!(c&&B&&e&&o&&i),function(){(b=dn('div')).id='cc--main',b.style.position='fixed',b.style.zIndex='2147483647',b.innerHTML='<div id="cc_div" class="cc_div"></div>',p=b.children[0];var t=z.current_lang;G&&cn(t),an(t);var e=n||document.body;e.insertBefore(b,e.firstChild)}(),function(){var n=['[href]','button','input','details','[tabindex="0"]'];function t(t,e){var o=!1,i=!1;try{for(var r,c=t.querySelectorAll(n.join(':not([tabindex="-1"]), ')),a=c.length,u=0;u<a;)r=c[u].getAttribute('data-focus'),i||'1'!==r?'0'===r&&(o=c[u],i||'0'===c[u+1].getAttribute('data-focus')||(i=c[u+1])):i=c[u],u++}catch(e){return t.querySelectorAll(n.join(', '))}e[0]=c[0],e[1]=c[c.length-1],e[2]=o,e[3]=i}t(O,Y),G&&t(m,X)}(),function(n,t){if('object'==typeof n){var e=n.consent_modal,o=n.settings_modal;G&&e&&i(m,['box','bar','cloud'],['top','middle','bottom'],['zoom','slide'],e.layout,e.position,e.transition),o&&i(x,['bar'],['left','right'],['zoom','slide'],o.layout,o.position,o.transition)}function i(n,t,e,o,i,r,c){if(r=r&&r.split(' ')||[],fn(t,i)>-1&&(_n(n,i),('bar'!==i||'middle'!==r[0])&&fn(e,r[0])>-1))for(var a=0;a<r.length;a++)_n(n,r[a]);fn(o,c)>-1&&_n(n,c)}}(t.gui_options),on(),z.autorun&&G&&I.show(t.delay||0),setTimeout((function(){_n(b,'c--anim')}),30),setTimeout((function(){var n,t;n=!1,t=!1,gn(document,'keydown',(function(e){'Tab'===(e=e||window.event).key&&(r&&(e.shiftKey?document.activeElement===r[0]&&(r[1].focus(),e.preventDefault()):document.activeElement===r[1]&&(r[0].focus(),e.preventDefault()),t||P||(t=!0,!n&&e.preventDefault(),e.shiftKey?r[3]?r[2]?r[2].focus():r[0].focus():r[1].focus():r[3]?r[3].focus():r[0].focus())),!t&&(n=!0))})),document.contains&&gn(b,'click',(function(n){n=n||window.event,M?O.contains(n.target)?P=!0:(I.hideSettings(0),P=!1):L&&m.contains(n.target)&&(P=!0)}),!0)}),100),E)'opt-out'===z.mode&&(z.mode,ln(V));else{var a='boolean'==typeof R.rfc_cookie;(!a||a&&R.rfc_cookie!==z.use_rfc_cookie)&&(R.rfc_cookie=z.use_rfc_cookie,mn(z.cookie_name,JSON.stringify(R))),v=pn(bn()),ln(),'function'==typeof u&&u(R)}}},I.showSettings=function(n){setTimeout((function(){_n(tn,'show--settings'),x.setAttribute('aria-hidden','false'),M=!0,setTimeout((function(){L?l=document.activeElement:s=document.activeElement,0!==Y.length&&(Y[3]?Y[3].focus():Y[0].focus(),r=Y)}),200)}),n>0?n:0)};var ln=function(n){if(z.page_scripts){var t=document.querySelectorAll('script['+z.script_selector+']'),e=n||R.categories||[],o=function(n,t){if(t<n.length){var i=n[t],r=i.getAttribute(z.script_selector);if(fn(e,r)>-1){i.type='text/javascript',i.removeAttribute(z.script_selector);var c=i.getAttribute('data-src');c&&i.removeAttribute('data-src');var a=dn('script');if(a.textContent=i.innerHTML,function(n,t){for(var e=t.attributes,o=e.length,i=0;i<o;i++){var r=e[i].nodeName;n.setAttribute(r,t[r]||t.getAttribute(r))}}(a,i),c?a.src=c:c=i.src,c&&(a.readyState?a.onreadystatechange=function(){'loaded'!==a.readyState&&'complete'!==a.readyState||(a.onreadystatechange=null,o(n,++t))}:a.onload=function(){a.onload=null,o(n,++t)}),i.parentNode.replaceChild(a,i),c)return}o(n,++t)}};o(t,0)}};I.set=function(n,t){return'data'===n&&function(n,t){var e=!1;if('update'===t){var o=typeof(A=I.get('data'))==typeof n;if(o&&'object'==typeof A)for(var i in!A&&(A={}),n)A[i]!==n[i]&&(A[i]=n[i],e=!0);else!o&&A||A===n||(A=n,e=!0)}else A=n,e=!0;return e&&(R.data=A,mn(z.cookie_name,JSON.stringify(R))),e}(t.value,t.mode)},I.get=function(n,t){return JSON.parse(yn(t||z.cookie_name,'one',!0)||'{}')[n]},I.getConfig=function(n){return z[n]||t[n]};var bn=function(){return K=R.categories||[],Q=$.filter((function(n){return-1===fn(K,n)})),{accepted:K,rejected:Q}},pn=function(n){var t='custom',e=nn.filter((function(n){return!0===n})).length;return n.accepted.length===$.length?t='all':n.accepted.length===e&&(t='necessary'),t};I.getUserPreferences=function(){var n=bn();return{accept_type:pn(n),accepted_categories:n.accepted,rejected_categories:n.rejected}},I.loadScript=function(n,t,e){var o='function'==typeof t;if(document.querySelector('script[src="'+n+'"]'))o&&t();else{var i=dn('script');if(e&&e.length>0)for(var r=0;r<e.length;++r)e[r]&&i.setAttribute(e[r].name,e[r].value);o&&(i.onload=t),i.src=n,document.head.appendChild(i)}},I.updateScripts=function(){ln()},I.show=function(n,t){!0===t&&cn(z.current_lang),G&&setTimeout((function(){_n(tn,'show--consent'),m.setAttribute('aria-hidden','false'),L=!0,setTimeout((function(){s=document.activeElement,r=X}),200)}),n>0?n:t?30:0)},I.hide=function(){G&&(kn(tn,'show--consent'),m.setAttribute('aria-hidden','true'),L=!1,setTimeout((function(){s.focus(),r=null}),200))},I.hideSettings=function(){kn(tn,'show--settings'),M=!1,x.setAttribute('aria-hidden','true'),setTimeout((function(){L?(l&&l.focus(),r=X):(s&&s.focus(),r=null),P=!1}),200)},I.accept=function(n,t){var r=n||void 0,c=t||[],a=[];if(r)if('object'==typeof r&&'number'==typeof r.length)for(var s=0;s<r.length;s++)-1!==fn($,r[s])&&a.push(r[s]);else'string'==typeof r&&('all'===r?a=$.slice():-1!==fn($,r)&&a.push(r));else a=function(){for(var n=document.querySelectorAll('.c-tgl')||[],t=[],e=0;e<n.length;e++)n[e].checked&&t.push(n[e].value);return t}();if(c.length>=1)for(s=0;s<c.length;s++)a=a.filter((function(n){return n!==c[s]}));for(s=0;s<$.length;s++)!0===nn[s]&&-1===fn(a,$[s])&&a.push($[s]);!function(n){F=[];var t=document.querySelectorAll('.c-tgl')||[];if(t.length>0)for(var r=0;r<t.length;r++)-1!==fn(n,$[r])?(t[r].checked=!0,Z[r]||(F.push($[r]),Z[r]=!0)):(t[r].checked=!1,Z[r]&&(F.push($[r]),Z[r]=!1));!E&&z.autoclear_cookies&&F.length>0&&un(),e||(e=new Date),i||(i=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(n){try{return(n^(window.crypto||window.msCrypto).getRandomValues(new Uint8Array(1))[0]&15>>n/4).toString(16)}catch(n){return''}}))),R={categories:n,level:n,revision:z.revision,data:A,rfc_cookie:z.use_rfc_cookie,consent_date:e.toISOString(),consent_uuid:i},(E||F.length>0)&&(B=!0,o=o?new Date:e,R.last_consent_update=o.toISOString(),v=pn(bn()),mn(z.cookie_name,JSON.stringify(R)),ln()),E&&(z.autoclear_cookies&&un(!0),'function'==typeof d&&d(I.getUserPreferences(),R),'function'==typeof u&&u(R),E=!1,'opt-in'===z.mode)||('function'==typeof f&&F.length>0&&f(R,F),H&&window.location.reload())}(a)},I.eraseCookies=function(n,t,e){var o=[],i=e?[e,'.'+e]:[z.cookie_domain,'.'+z.cookie_domain];if('object'==typeof n&&n.length>0)for(var r=0;r<n.length;r++)this.validCookie(n[r])&&o.push(n[r]);else this.validCookie(n)&&o.push(n);wn(o,t,i)};var mn=function(n,t){var e=z.cookie_expiration;'number'==typeof z.cookie_necessary_only_expiration&&'necessary'===v&&(e=z.cookie_necessary_only_expiration),t=z.use_rfc_cookie?encodeURIComponent(t):t;var o=new Date;o.setTime(o.getTime()+24*e*60*60*1e3);var i=n+'='+(t||'')+'; expires='+o.toUTCString()+'; Path='+z.cookie_path+';';i+=' SameSite='+z.cookie_same_site+';',window.location.hostname.indexOf('.')>-1&&(i+=' Domain='+z.cookie_domain+';'),'https:'===window.location.protocol&&(i+=' Secure;'),document.cookie=i},yn=function(n,t,e){var o;if('one'===t){if((o=(o=document.cookie.match('(^|;)\\s*'+n+'\\s*=\\s*([^;]+)'))?e?o.pop():n:'')&&n===z.cookie_name){try{o=JSON.parse(o)}catch(n){try{o=JSON.parse(decodeURIComponent(o))}catch(n){o={}}}o=JSON.stringify(o)}}else if('all'===t){var i=document.cookie.split(/;\s*/);o=[];for(var r=0;r<i.length;r++)o.push(i[r].split('=')[0])}return o},wn=function(n,t,e){for(var o=t||'/',i=0;i<n.length;i++){for(var r=0;r<e.length;r++)document.cookie=n[i]+'=; path='+o+(0==e[r].indexOf('.')?'; domain='+e[r]:'')+'; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';n[i]}};I.validCookie=function(n){return''!==yn(n,'one',!0)};var gn=function(n,t,e,o){n.addEventListener(t,e,!0===o&&{passive:!0})},hn=function(n){if('object'==typeof n)return Object.keys(n)},_n=function(n,t){n.classList.add(t)},kn=function(n,t){n.classList.remove(t)},xn=function(n,t){return n.classList.contains(t)};return I})}();
