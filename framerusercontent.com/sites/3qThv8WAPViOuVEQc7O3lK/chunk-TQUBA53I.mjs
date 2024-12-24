import{b,c as L,n as w}from"./chunk-3CJITMZZ.mjs";import{ba as u,ea as S,l as g,q as E,r as y,u as n}from"./chunk-VHRDYTPS.mjs";import{c as p}from"./chunk-Y5FTINFI.mjs";function I({type:e,url:t,html:s,style:i={}}){return e==="url"&&t?n(T,{url:t,style:i}):e==="html"&&s?n(R,{html:s,style:i}):n(M,{style:i})}S(I,{type:{type:u.Enum,defaultValue:"url",displaySegmentedControl:!0,options:["url","html"],optionTitles:["URL","HTML"]},url:{title:"URL",type:u.String,description:"Some websites don\u2019t support embedding.",hidden(e){return e.type!=="url"}},html:{title:"HTML",type:u.String,displayTextArea:!0,hidden(e){return e.type!=="html"}}});function M({style:e}){return n("div",{style:{minHeight:C(e),...L,overflow:"hidden",...e},children:n("div",{style:v,children:"To embed a website or widget, add it to the properties\xA0panel."})})}function T({url:e,style:t}){let s=!t.height;/[a-z]+:\/\//.test(e)||(e="https://"+e);let i=w(),[a,d]=y(i?void 0:!1);if(g(()=>{if(!i)return;let c=!0;d(void 0);async function h(){let r=await fetch("https://api.framer.com/functions/check-iframe-url?url="+encodeURIComponent(e));if(r.status==200){let{isBlocked:o}=await r.json();c&&d(o)}else{let o=await r.text();console.error(o);let l=new Error("This site can\u2019t be reached.");d(l)}}return h().catch(r=>{console.error(r),d(r)}),()=>{c=!1}},[e]),i&&s)return n(f,{message:"URL embeds do not support auto height.",style:t});if(!e.startsWith("https://"))return n(f,{message:"Unsupported protocol.",style:t});if(a===void 0)return n(A,{});if(a instanceof Error)return n(f,{message:a.message,style:t});if(a===!0){let c=`Can\u2019t embed ${e} due to its content security policy.`;return n(f,{message:c,style:t})}return n("iframe",{src:e,style:{..._,...t},loading:"lazy",fetchPriority:i?"low":"auto",referrerPolicy:"no-referrer",sandbox:U(i)})}var _={width:"100%",height:"100%",border:"none"};function U(e){let t=["allow-same-origin","allow-scripts"];return e||t.push("allow-downloads","allow-forms","allow-modals","allow-orientation-lock","allow-pointer-lock","allow-popups","allow-popups-to-escape-sandbox","allow-presentation","allow-storage-access-by-user-activation","allow-top-navigation-by-user-activation"),t.join(" ")}function R({html:e,style:t}){let s=E(),i=w(),[a,d]=y(0),c=!t.height,h=e.includes("<\/script>");if(g(()=>{var r;let o=(r=s.current)===null||r===void 0?void 0:r.contentWindow;function l(H){if(H.source!==o)return;let m=H.data;if(typeof m!="object"||m===null)return;let x=m.embedHeight;typeof x=="number"&&d(x)}return p.addEventListener("message",l),o?.postMessage("getEmbedHeight","*"),()=>{p.removeEventListener("message",l)}},[]),h){let r=`<html>
    <head>
        <style>body { margin: 0; }</style>
    </head>
    <body>
        ${e}
        <script type="module">
            let height = 0

            function sendEmbedHeight() {
                window.parent.postMessage({
                    embedHeight: height
                }, "*")
            }

            const observer = new ResizeObserver((entries) => {
                if (entries.length !== 1) return
                const entry = entries[0]
                if (entry.target !== document.body) return

                height = entry.contentRect.height
                sendEmbedHeight()
            })

            observer.observe(document.body)

            window.addEventListener("message", (event) => {
                if (event.source !== window.parent) return
                if (event.data !== "getEmbedHeight") return
                sendEmbedHeight()
            })
        <\/script>
    <body>
</html>`,o={..._,...t};return c&&(o.height=a+"px"),n("iframe",{ref:s,style:o,srcDoc:r})}return n("div",{style:{...j,...t},dangerouslySetInnerHTML:{__html:e}})}var j={width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"};function A(){return n("div",{className:"framerInternalUI-componentPlaceholder",style:{...b,overflow:"hidden"},children:n("div",{style:v,children:"Loading\u2026"})})}function f({message:e,style:t}){return n("div",{className:"framerInternalUI-errorPlaceholder",style:{minHeight:C(t),...b,overflow:"hidden",...t},children:n("div",{style:v,children:e})})}var v={textAlign:"center",minWidth:140};function C(e){if(!e.height)return 200}export{I as a};
//# sourceMappingURL=chunk-TQUBA53I.mjs.map
