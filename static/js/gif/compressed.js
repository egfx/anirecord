!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():e.SuperGif=t()}(this,function(){var l=function(e){return e.reduce(function(e,t){return 2*e+t},0)},s=function(e){for(var t=[],n=7;0<=n;n--)t.push(!!(e&1<<n));return t},te=function(e){this.data=e,this.len=this.data.length,this.pos=0,this.readByte=function(){if(this.pos>=this.data.length)throw new Error("Attempted to read past end of stream.");return e instanceof Uint8Array?e[this.pos++]:255&e.charCodeAt(this.pos++)},this.readBytes=function(e){for(var t=[],n=0;n<e;n++)t.push(this.readByte());return t},this.read=function(e){for(var t="",n=0;n<e;n++)t+=String.fromCharCode(this.readByte());return t},this.readUnsigned=function(){var e=this.readBytes(2);return(e[1]<<8)+e[0]}},ne=function(a,i){i||(i={});var r=function(e){for(var t=[],n=0;n<e;n++)t.push(a.readBytes(3));return t},o=function(){var e,t;for(t="";e=a.readByte(),t+=a.read(e),0!==e;);return t},t=function(e){e.leftPos=a.readUnsigned(),e.topPos=a.readUnsigned(),e.width=a.readUnsigned(),e.height=a.readUnsigned();var t=s(a.readByte());e.lctFlag=t.shift(),e.interlaced=t.shift(),e.sorted=t.shift(),e.reserved=t.splice(0,2),e.lctSize=l(t.splice(0,3)),e.lctFlag&&(e.lct=r(1<<e.lctSize+1)),e.lzwMinCodeSize=a.readByte();var n=o();e.pixels=function(t,r){for(var e,n,a=0,i=function(e){for(var t=0,n=0;n<e;n++)r.charCodeAt(a>>3)&1<<(7&a)&&(t|=1<<n),a++;return t},o=[],l=1<<t,s=l+1,c=t+1,u=[],d=function(){u=[],c=t+1;for(var e=0;e<l;e++)u[e]=[e];u[l]=[],u[s]=null};;)if(n=e,(e=i(c))!==l){if(e===s)break;if(e<u.length)n!==l&&u.push(u[n].concat(u[e][0]));else{if(e!==u.length)throw new Error("Invalid LZW code.");u.push(u[n].concat(u[n][0]))}o.push.apply(o,u[e]),u.length===1<<c&&c<12&&c++}else d();return o}(e.lzwMinCodeSize,n),e.interlaced&&(e.pixels=function(e,t){for(var n,r,a,i=new Array(e.length),o=e.length/t,l=[0,4,2,1],s=[8,8,4,2],c=0,u=0;u<4;u++)for(var d=l[u];d<o;d+=s[u])n=d,r=c,a=e.slice(r*t,(r+1)*t),i.splice.apply(i,[n*t,t].concat(a)),c++;return i}(e.pixels,e.width)),i.img&&i.img(e)},n=function(){var e={};switch(e.sentinel=a.readByte(),String.fromCharCode(e.sentinel)){case"!":e.type="ext",function(e){var t,n;switch(e.label=a.readByte(),e.label){case 249:e.extType="gce",function(e){a.readByte();var t=s(a.readByte());e.reserved=t.splice(0,3),e.disposalMethod=l(t.splice(0,3)),e.userInput=t.shift(),e.transparencyGiven=t.shift(),e.delayTime=a.readUnsigned(),e.transparencyIndex=a.readByte(),e.terminator=a.readByte(),i.gce&&i.gce(e)}(e);break;case 254:e.extType="com",(n=e).comment=o(),i.com&&i.com(n);break;case 1:e.extType="pte",r=e,a.readByte(),r.ptHeader=a.readBytes(12),r.ptData=o(),i.pte&&i.pte(r);break;case 255:e.extType="app",function(e){var t,n;switch(a.readByte(),e.identifier=a.read(8),e.authCode=a.read(3),e.identifier){case"NETSCAPE":n=e,a.readByte(),n.unknown=a.readByte(),n.iterations=a.readUnsigned(),n.terminator=a.readByte(),i.app&&i.app.NETSCAPE&&i.app.NETSCAPE(n);break;default:(t=e).appData=o(),i.app&&i.app[t.identifier]&&i.app[t.identifier](t)}}(e);break;default:e.extType="unknown",(t=e).data=o(),i.unknown&&i.unknown(t)}var r}(e);break;case",":e.type="img",t(e);break;case";":e.type="eof",i.eof&&i.eof(e);break;default:throw new Error("Unknown block: 0x"+e.sentinel.toString(16))}"eof"!==e.type&&setTimeout(n,0)};!function(){var e={};if(e.sig=a.read(3),e.ver=a.read(3),"GIF"!==e.sig)throw new Error("Not a GIF file.");e.width=a.readUnsigned(),e.height=a.readUnsigned();var t=s(a.readByte());e.gctFlag=t.shift(),e.colorRes=l(t.splice(0,3)),e.sorted=t.shift(),e.gctSize=l(t.splice(0,3)),e.bgColor=a.readByte(),e.pixelAspectRatio=a.readByte(),e.gctFlag&&(e.gct=r(1<<e.gctSize+1)),i.hdr&&i.hdr(e)}(),setTimeout(n,0)};return function(e){var r,a,l={vp_l:0,vp_t:0,vp_w:null,vp_h:null,c_w:null,c_h:null};for(var t in e)l[t]=e[t];l.vp_w&&l.vp_h&&(l.is_vp=!0);var n=null,i=!1,o=null,s=null,c=null,u=null,d=null,h=null,p=null,f=!0,g=!1,_=[],y=[],m=l.gif;void 0===l.auto_play&&(l.auto_play=!m.getAttribute("rel:auto_play")||"1"==m.getAttribute("rel:auto_play"));var v,w,b,x,T,B,C,S,E,k,P,A,I=l.hasOwnProperty("on_end")?l.on_end:null,U=l.hasOwnProperty("loop_delay")?l.loop_delay:0,D=l.hasOwnProperty("loop_mode")?l.loop_mode:"auto",M=!l.hasOwnProperty("draw_while_loading")||l.draw_while_loading,O=!!M&&(!l.hasOwnProperty("show_progress_bar")||l.show_progress_bar),R=l.hasOwnProperty("progressbar_height")?l.progressbar_height:25,z=l.hasOwnProperty("progressbar_background_color")?l.progressbar_background_color:"rgba(255,255,255,0.4)",G=l.hasOwnProperty("progressbar_foreground_color")?l.progressbar_foreground_color:"rgba(255,0,22,.8)",N=function(){d=c,h=c=s=o=null},F=function(){try{ne(r,J)}catch(e){L("parse")}},X=function(e,t){E.width=e*Q(),E.height=t*Q(),P.style.minWidth=e*Q()+"px",A.width=e,A.height=t,A.style.width=e+"px",A.style.height=t+"px",A.getContext("2d").setTransform(1,0,0,1,0,0)},j=function(e,t,n){if(n&&O){var r,a,i,o=R;l.is_vp?g?(a=(l.vp_t+l.vp_h-o)/Q(),o/=Q(),r=l.vp_l/Q()+e/t*(l.vp_w/Q()),i=E.width/Q()):(a=l.vp_t+l.vp_h-o,o=o,r=l.vp_l+e/t*l.vp_w,i=E.width):(a=(E.height-o)/(g?Q():1),r=e/t*E.width/(g?Q():1),i=E.width/(g?Q():1),o/=g?Q():1),k.fillStyle=z,k.fillRect(r,a,i-r,o),k.fillStyle=G,k.fillRect(0,a,r,o)}},L=function(e){n=e,a={width:m.width,height:m.height},_=[],k.fillStyle="black",k.fillRect(0,0,l.c_w?l.c_w:a.width,l.c_h?l.c_h:a.height),k.strokeStyle="red",k.lineWidth=3,k.moveTo(0,0),k.lineTo(l.c_w?l.c_w:a.width,l.c_h?l.c_h:a.height),k.moveTo(0,l.c_h?l.c_h:a.height),k.lineTo(l.c_w?l.c_w:a.width,0),k.stroke()},W=function(){h&&(_.push({data:h.getImageData(0,0,a.width,a.height),delay:s}),y.push({x:0,y:0}))},q=(x=-1,T=0,B=function(e){x+=e,S()},v=!1,w=function(){null!==I&&I(m),T++,!1!==D||T<0?b():f=v=!1},b=function(){if(v=f){B(1);var e=10*_[x].delay;e||(e=100),0==(x+1+_.length)%_.length?(e+=U,setTimeout(w,e)):setTimeout(b,e)}},S=function(){var e;(x=parseInt(x,10))>_.length-1&&(x=0),x<0&&(x=0),e=y[x],A.getContext("2d").putImageData(_[x].data,e.x,e.y),k.globalCompositeOperation="copy",k.drawImage(A,0,0)},{init:function(){n||(l.c_w&&l.c_h||k.scale(Q(),Q()),l.auto_play?C():(x=0,S()))},step:C=function(){v||setTimeout(b,0)},play:function(){f=!0,C()},pause:function(){f=!1},playing:f,move_relative:B,current_frame:function(){return x},length:function(){return _.length},move_to:function(e){x=e,S()}}),H=function(e){j(r.pos,r.data.length,e)},V=function(){},Z=function(t,n){return function(e){t(e),H(n)}},J={hdr:Z(function(e){X((a=e).width,a.height)}),gce:Z(function(e){W(),N(),o=e.transparencyGiven?e.transparencyIndex:null,s=e.delayTime,c=e.disposalMethod}),com:Z(V),app:{NETSCAPE:Z(V)},img:Z(function(e){h||(h=A.getContext("2d"));var t=_.length,n=e.lctFlag?e.lct:a.gct;0<t&&(3===d?null!==u?h.putImageData(_[u].data,0,0):h.clearRect(p.leftPos,p.topPos,p.width,p.height):u=t-1,2===d&&h.clearRect(p.leftPos,p.topPos,p.width,p.height));var r=h.getImageData(e.leftPos,e.topPos,e.width,e.height);e.pixels.forEach(function(e,t){e!==o&&(r.data[4*t+0]=n[e][0],r.data[4*t+1]=n[e][1],r.data[4*t+2]=n[e][2],r.data[4*t+3]=255)}),h.putImageData(r,e.leftPos,e.topPos),g||(k.scale(Q(),Q()),g=!0),M&&(k.drawImage(A,0,0),M=l.auto_play),p=e},!0),eof:function(e){W(),H(!1),l.c_w&&l.c_h||(E.width=a.width*Q(),E.height=a.height*Q()),q.init(),i=!1,$&&$(m)}},K=function(){var e=m.parentNode,t=document.createElement("div");E=document.createElement("canvas"),k=E.getContext("2d"),P=document.createElement("div"),A=document.createElement("canvas"),t.width=E.width=m.width,t.height=E.height=m.height,P.style.minWidth=m.width+"px",t.className="jsgif",P.className="jsgif_toolbar",t.appendChild(E),t.appendChild(P),e.insertBefore(t,m),e.removeChild(m),l.c_w&&l.c_h&&X(l.c_w,l.c_h),Y=!0},Q=function(){return l.max_width&&a&&a.width>l.max_width?l.max_width/a.width:1},Y=!1,$=!1,ee=function(e){return!(i||($=e||!1,i=!0,_=[],N(),p=h=d=u=null))};return{play:q.play,pause:q.pause,move_relative:q.move_relative,move_to:q.move_to,get_playing:function(){return f},get_canvas:function(){return E},get_canvas_scale:function(){return Q()},get_loading:function(){return i},get_auto_play:function(){return l.auto_play},get_length:function(){return q.length()},get_current_frame:function(){return q.current_frame()},load_url:function(e,t){if(ee(t)){var n=new XMLHttpRequest;n.open("GET",e,!0),"overrideMimeType"in n?n.overrideMimeType("text/plain; charset=x-user-defined"):"responseType"in n?n.responseType="arraybuffer":n.setRequestHeader("Accept-Charset","x-user-defined"),n.onloadstart=function(){Y||K()},n.onload=function(e){200!=this.status&&L("xhr - response"),"response"in this||(this.response=new VBArray(this.responseText).toArray().map(String.fromCharCode).join(""));var t=this.response;0<t.toString().indexOf("ArrayBuffer")&&(t=new Uint8Array(t)),r=new te(t),setTimeout(F,0)},n.onprogress=function(e){e.lengthComputable&&j(e.loaded,e.total,!0)},n.onerror=function(){L("xhr")},n.send()}},load:function(e){this.load_url(m.getAttribute("rel:animated_src")||m.src,e)},load_raw:function(e,t){ee(t)&&(Y||K(),r=new te(e),setTimeout(F,0))},set_frame_offset:function(e,t){y[e]?(void 0!==t.x&&(y[e].x=t.x),void 0!==t.y&&(y[e].y=t.y)):y[e]=t}}}}),function(e,t){"function"==typeof define&&define.amd?define(["./libgif"],t):"object"==typeof exports?module.exports=t(require("./libgif")):e.RubbableGif=t(e.SuperGif)}(this,function(e){return function(c){var u=new e(c);return u.orig_load=u.load,u.load=function(n){u.orig_load(function(){var r,e,a,i,o,l,t,s;n&&n(),r=function(e){return c.vp_l?e-c.vp_l:e},e=u.get_canvas(),a=c.vp_w?c.vp_w:e.width,i=Math.floor(a/(2*u.get_length())),l=o=0,t="ontouchend"in document,s=0,e.addEventListener(t?"touchstart":"mousedown",function(e){e.preventDefault(),u.get_auto_play()&&u.pause();var t=e.touches&&0<e.touches.length?e.touches[0]:e,n=(0<t.layerX?r(t.layerX):a/2)/a;u.move_to(Math.floor(n*(u.get_length()-1))),l=e.timeStamp,o=r(t.pageX)}),e.addEventListener(t?"touchend":"mouseup",function(e){o=l=0,u.get_auto_play()&&u.play()}),e.addEventListener(t?"touchmove":"mousemove",function(e){e.preventDefault();var t=e.touches&&0<e.touches.length?e.touches[0]:e,n=r(t.pageX);currentDistance=0===o?0:Math.abs(n-o),currentTime=e.timeStamp,0!==l&&currentDistance>i&&(n<o&&0<u.get_current_frame()&&u.move_relative(-1),o<n&&u.get_current_frame()<u.get_length()-1&&u.move_relative(1),l=e.timeStamp,o=r(t.pageX)),e.timeStamp,s++,document.getElementById("tickles"+(s%5+1))&&document.getElementById("tickles"+(s%5+1)).play(),e.timeStamp})})},u}});