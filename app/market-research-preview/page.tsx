"use client";
import {useState} from "react";
type Evidence={market:string;kind:string;subject:string;url:string;note:string;date:string};
export default function MarketResearchPreview(){
 const [market,M]=useState("UAE"),[kind,K]=useState("Product demand"),[subject,S]=useState(""),[url,U]=useState(""),[note,N]=useState(""),[rows,R]=useState<Evidence[]>([]),[filter,F]=useState("All");
 const visible=rows.filter(r=>filter==="All"||r.market===filter);
 return <main style={{maxWidth:1080,margin:"40px auto",padding:24,color:"#193d32"}}>
 <h1>VELORACE Market Research Center — Preview</h1><p>Manual evidence register. No live integrations or market metrics. Records are held in memory only; reload clears them. Do not enter private customer data.</p>
 <form style={{display:"grid",gap:12,maxWidth:720}} onSubmit={e=>{e.preventDefault();try{const u=new URL(url);if(!["https:","http:"].includes(u.protocol))return;R([...rows,{market,kind,subject,url:u.href,note,date:new Date().toISOString()}]);S("");U("");N("");}catch{}}}>
 <label>Market <select value={market} onChange={e=>M(e.target.value)}>{["UAE","Saudi Arabia","USA","Kuwait","Qatar"].map(x=><option key={x}>{x}</option>)}</select></label>
 <label>Evidence type <select value={kind} onChange={e=>K(e.target.value)}>{["Product demand","Competitor","Potential buyer","Supplier feasibility","Search opportunity"].map(x=><option key={x}>{x}</option>)}</select></label>
 <label>Subject <input required value={subject} onChange={e=>S(e.target.value)}/></label>
 <label>Public source URL <input required type="url" value={url} onChange={e=>U(e.target.value)}/></label>
 <label>Observed evidence (not inferred sales) <textarea required value={note} onChange={e=>N(e.target.value)}/></label>
 <button type="submit">Register unverified evidence</button></form>
 <h2>Evidence register ({rows.length} manually entered)</h2><label>Filter <select value={filter} onChange={e=>F(e.target.value)}>{["All","UAE","Saudi Arabia","USA","Kuwait","Qatar"].map(x=><option key={x}>{x}</option>)}</select></label>
 <button onClick={()=>{const a=document.createElement("a");const u=URL.createObjectURL(new Blob([JSON.stringify(visible,null,2)],{type:"application/json"}));a.href=u;a.download="market-evidence.json";a.click();URL.revokeObjectURL(u);}}>Export JSON</button>
 {visible.length===0?<p>No evidence entered. Demand, sales and buyer counts are unavailable.</p>:visible.map((r,i)=><article key={i} style={{border:"1px solid #bbc8c2",padding:16,marginTop:12}}><h3>{r.subject}</h3><p>{r.market} · {r.kind} · Unverified submission</p><p style={{whiteSpace:"pre-wrap"}}>{r.note}</p><a href={r.url} target="_blank" rel="noreferrer">Public source</a><p>{r.date}</p></article>)}
 </main>;
}
