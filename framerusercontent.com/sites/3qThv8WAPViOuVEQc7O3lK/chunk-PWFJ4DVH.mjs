import{b,c as S,n as L}from"./chunk-3CJITMZZ.mjs";import{ba as f,ea as E,l as u,q as g,r as y,u as n}from"./chunk-VHRDYTPS.mjs";import{c as p}from"./chunk-Y5FTINFI.mjs";function I({type:e,url:t,html:i,style:r={}}){return e==="url"&&t?n(A,{url:t,style:r}):e==="html"&&i?n(W,{html:i,style:r}):n(U,{style:r})}E(I,{type:{type:f.Enum,defaultValue:"url",displaySegmentedControl:!0,options:["url","html"],optionTitles:["URL","HTML"]},url:{title:"URL",type:f.String,description:"Some websites don\u2019t support embedding.",hidden(e){return e.type!=="url"}},html:{title:"HTML",type:f.String,displayTextArea:!0,hidden(e){return e.type!=="html"}}});function U({style:e}){return n("div",{style:{minHeight:_(e),...S,overflow:"hidden",...e},children:n("div",{style:w,children:"To embed a website or widget, add it to the properties\xA0panel."})})}function A({url:e,style:t}){let i=!t.height;/[a-z]+:\/\//.test(e)||(e="https://"+e);let r=L(),[s,l]=y(r?void 0:!1);if(u(()=>{if(!r)return;let c=!0;l(void 0);async function v(){let o=await fetch("https://api.framer.com/functions/check-iframe-url?url="+encodeURIComponent(e));if(o.status==200){let{isBlocked:a}=await o.json();c&&l(a)}else{let a=await o.text();console.error(a);let d=new Error("This site can\u2019t be reached.");l(d)}}return v().catch(o=>{console.error(o),l(o)}),()=>{c=!1}},[e]),r&&i)return n(h,{message:"URL embeds do not support auto height.",style:t});if(!e.startsWith("https://"))return n(h,{message:"Unsupported protocol.",style:t});if(s===void 0)return n(P,{});if(s instanceof Error)return n(h,{message:s.message,style:t});if(s===!0){let c=`Can\u2019t embed ${e} due to its content security policy.`;return n(h,{message:c,style:t})}return n("iframe",{src:e,style:{...C,...t},loading:"lazy",fetchPriority:r?"low":"auto",referrerPolicy:"no-referrer",sandbox:R(r)})}var C={width:"100%",height:"100%",border:"none"};function R(e){let t=["allow-same-origin","allow-scripts"];return e||t.push("allow-downloads","allow-forms","allow-modals","allow-orientation-lock","allow-pointer-lock","allow-popups","allow-popups-to-escape-sandbox","allow-presentation","allow-storage-access-by-user-activation","allow-top-navigation-by-user-activation"),t.join(" ")}function W({html:e,...t}){if(e.includes("<\/script>")){let r=e.includes("</spline-viewer>"),s=e.includes("<!-- framer-direct-embed -->");return r||s?n(k,{html:e,...t}):n(j,{html:e,...t})}return n(z,{html:e,...t})}function j({html:e,style:t}){let i=g(),[r,s]=y(0);u(()=>{var o;let a=(o=i.current)===null||o===void 0?void 0:o.contentWindow;function d(H){if(H.source!==a)return;let m=H.data;if(typeof m!="object"||m===null)return;let x=m.embedHeight;typeof x=="number"&&s(x)}return p.addEventListener("message",d),a?.postMessage("getEmbedHeight","*"),()=>{p.removeEventListener("message",d)}},[]);let l=`
<html>
    <head>
        <style>
            html, body {
                margin: 0;
                padding: 0;
            }

            body {
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
            }

            :root {
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }

            * {
                box-sizing: border-box;
                -webkit-font-smoothing: inherit;
            }

            h1, h2, h3, h4, h5, h6, p, figure {
                margin: 0;
            }

            body, input, textarea, select, button {
                font-size: 12px;
                font-family: sans-serif;
            }
        </style>
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
</html>
`,c={...C,...t};return!t.height&&(c.height=r+"px"),n("iframe",{ref:i,style:c,srcDoc:l})}function k({html:e,style:t}){let i=g();return u(()=>{let r=i.current;if(r)return r.innerHTML=e,T(r),()=>{r.innerHTML=""}},[e]),n("div",{ref:i,style:{...M,...t}})}function z({html:e,style:t}){return n("div",{style:{...M,...t},dangerouslySetInnerHTML:{__html:e}})}var M={width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"};function T(e){if(e instanceof Element&&e.tagName==="SCRIPT"){let t=document.createElement("script");t.text=e.innerHTML;for(let{name:i,value:r}of e.attributes)t.setAttribute(i,r);e.parentElement.replaceChild(t,e)}else for(let t of e.childNodes)T(t)}function P(){return n("div",{className:"framerInternalUI-componentPlaceholder",style:{...b,overflow:"hidden"},children:n("div",{style:w,children:"Loading\u2026"})})}function h({message:e,style:t}){return n("div",{className:"framerInternalUI-errorPlaceholder",style:{minHeight:_(t),...b,overflow:"hidden",...t},children:n("div",{style:w,children:e})})}var w={textAlign:"center",minWidth:140};function _(e){if(!e.height)return 200}export{I as a};
//# sourceMappingURL=chunk-PWFJ4DVH.mjs.map
