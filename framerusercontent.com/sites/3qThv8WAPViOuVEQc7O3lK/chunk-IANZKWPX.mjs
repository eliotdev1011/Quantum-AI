import{j as c,l as n,r as o,u as i}from"./chunk-VHRDYTPS.mjs";function A(l){return p=>{let[h,H]=o("0.00000"),[f,d]=o(1),r=c(async()=>{try{console.log("Fetching QHASH price...");let t=await(await fetch("https://thedataineed.info/qhash/tokenprice.json")).json();if(t&&typeof t.QHASH=="number"){let a=t.QHASH.toFixed(5);console.log("Fetched QHASH price:",a),H(a)}else console.error("Unexpected data format or missing QHASH price:",t)}catch(e){console.error("Error fetching QHASH price:",e)}},[]);n(()=>{r();let e=setInterval(r,1e4);return()=>clearInterval(e)},[r]);let s=`$${(parseFloat(h)*f).toFixed(5)}`;return console.log("Displayed text:",s),i(l,{...p,text:s})}}export{A as a};
//# sourceMappingURL=chunk-IANZKWPX.mjs.map
