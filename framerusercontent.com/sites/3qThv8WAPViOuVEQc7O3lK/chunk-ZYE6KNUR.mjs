import{d as O,e as R,f as F,i as _,n as N,o as B,p as H}from"./chunk-3CJITMZZ.mjs";import{A as x,N as A,ba as n,ea as J,fa as Q,h as Z,j as h,l as y,p as G,q as C,r as U,u as k}from"./chunk-VHRDYTPS.mjs";var X;(function(e){e.Fill="fill",e.Contain="contain",e.Cover="cover",e.None="none",e.ScaleDown="scale-down"})(X||(X={}));var K;(function(e){e.Video="Upload",e.Url="URL"})(K||(K={}));function ve(e){let{width:s,height:i,topLeft:l,topRight:m,bottomRight:c,bottomLeft:f,id:o,children:u,...r}=e;return r}function ee(e){let s=ve(e);return k(Ve,{...s})}function be(e){let s=Q(),i=C(!1),l=C(!1),m=h(o=>{if(!e.current)return;let u=(o===1?.999:o)*e.current.duration,r=Math.abs(e.current.currentTime-u)<.1;e.current.duration>0&&!r&&(e.current.currentTime=u)},[]),c=h(()=>{let o=e.current;if(!o)return;o.preload="auto",!(o.currentTime>0&&o.onplaying&&!o.paused&&!o.ended&&o.readyState>=o.HAVE_CURRENT_DATA)&&o&&!i.current&&s&&(i.current=!0,l.current=!0,o.play().catch(r=>{}).finally(()=>i.current=!1))},[]),f=h(()=>{!e.current||i.current||(e.current.pause(),l.current=!1)},[]);return{play:c,pause:f,setProgress:m,isPlaying:l}}function ge({playingProp:e,muted:s,loop:i,playsinline:l,controls:m}){let[c]=U(()=>e),[f,o]=U(!1);e!==c&&!f&&o(!0);let u=c&&s&&i&&l&&!m&&!f,r;return u?r="on-viewport":c?r="on-mount":r="no-autoplay",r}var Ve=Z(function(s){let{srcType:i="URL",srcUrl:l,srcFile:m="",posterEnabled:c=!1,controls:f=!1,playing:o=!0,loop:u=!0,muted:r=!0,playsinline:z=!0,restartOnEnter:Te=!1,objectFit:te="cover",backgroundColor:ne="rgba(0,0,0,0)",radius:Se=0,volume:V=25,startTime:j=0,poster:oe="/framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg",playing:P,progress:p,onSeeked:T,onPause:S,onPlay:w,onEnd:E,onClick:D,onMouseEnter:re,onMouseLeave:ae,onMouseDown:ie,onMouseUp:se}=s,a=C(),le=_(),M=C(null),W=C(null),v=N(),ue=B(s),b=v?"no-autoplay":ge({playingProp:P,muted:r,loop:u,playsinline:z,controls:f}),Y=v?!0:A(a),ce=v?!1:A(a,{margin:"100px",once:!0}),d=j===100?99.9:j,{play:g,pause:I,setProgress:L,isPlaying:pe}=be(a);y(()=>{v||(P?g():I())},[P]),y(()=>{v||b==="on-viewport"&&(Y?g():I())},[b,Y]);let q=C(!1);y(()=>{if(!q.current){q.current=!0;return}let t=x(p)?p.get():(p??0)*.01;L((t??0)||(d??0)/100)},[d,m,l,p]),y(()=>{if(x(p))return p.on("change",t=>L(t))},[p]),R(()=>{M.current!==null&&a.current&&(!W&&u||!M.current)&&g()}),F(()=>{a.current&&(W.current=a.current.ended,M.current=a.current.paused,I())});let de=G(()=>{let t="";if(i==="URL")return l+t;if(i==="Upload")return m+t},[i,m,l,d]);y(()=>{le&&a.current&&b==="on-mount"&&setTimeout(()=>g(),50)},[]),y(()=>{a.current&&!r&&(a.current.volume=(V??0)/100)},[V]);let me=()=>{let t=a.current;t&&(t.currentTime<.3&&d>0&&L((d??0)*.01),b==="on-mount"&&g())};return k("video",{onClick:D,onMouseEnter:re,onMouseLeave:ae,onMouseDown:ie,onMouseUp:se,src:de,loop:u,ref:a,onSeeked:t=>T?.(t),onPause:t=>S?.(t),onPlay:t=>w?.(t),onEnded:t=>E?.(t),autoPlay:b==="on-mount",preload:pe.current?"auto":b!=="on-mount"&&c&&!ce?"none":"metadata",poster:c?oe:void 0,onLoadedData:me,controls:f,muted:v?!0:r,playsInline:z,style:{cursor:D?"pointer":"auto",width:"100%",height:"100%",borderRadius:ue,display:"block",objectFit:te,backgroundColor:ne,objectPosition:"50% 50%"}})});ee.displayName="Video";function he(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Pe(e){return(e.match(/[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu)||[]).map(he).join(" ")}var $=["cover","fill","contain","scale-down","none"];J(ee,{srcType:{type:n.Enum,displaySegmentedControl:!0,title:"Source",options:["URL","Upload"]},srcUrl:{type:n.String,title:"URL",defaultValue:"/framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4",hidden(e){return e.srcType==="Upload"}},srcFile:{type:n.File,title:"File",allowedFileTypes:["mp4","webm"],hidden(e){return e.srcType==="URL"}},playing:{type:n.Boolean,title:"Playing",enabledTitle:"Yes",disabledTitle:"No"},posterEnabled:{type:n.Boolean,title:"Poster",enabledTitle:"Yes",disabledTitle:"No",description:"We recommend adding a poster. [Learn more](https://www.framer.com/help/articles/how-are-videos-optimized-in-framer/)."},poster:{type:n.Image,title:" ",hidden:({posterEnabled:e})=>!e},backgroundColor:{type:n.Color,title:"Background",defaultValue:"rgba(0,0,0,0)"},...H,startTime:{title:"Start Time",type:n.Number,min:0,max:100,step:.1,unit:"%"},loop:{type:n.Boolean,title:"Loop",enabledTitle:"Yes",disabledTitle:"No"},objectFit:{type:n.Enum,title:"Fit",options:$,optionTitles:$.map(Pe)},controls:{type:n.Boolean,title:"Controls",enabledTitle:"Show",disabledTitle:"Hide",defaultValue:!1},muted:{type:n.Boolean,title:"Muted",enabledTitle:"Yes",disabledTitle:"No"},volume:{type:n.Number,max:100,min:0,unit:"%",hidden:({muted:e})=>e,defaultValue:25},onEnd:{type:n.EventHandler},onSeeked:{type:n.EventHandler},onPause:{type:n.EventHandler},onPlay:{type:n.EventHandler},...O});export{ee as a};
//# sourceMappingURL=chunk-ZYE6KNUR.mjs.map
