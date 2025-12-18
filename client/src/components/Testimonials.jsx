import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Testimonials({ items }){
  const demo = items || [
    {name:'Aisha & Tom', text:'An unforgettable safari — luxury, expert guides and perfect logistics.'},
    {name:'Moses', text:'Tailored family trip — kids loved it.'},
    {name:'Claire', text:'Pristine lodges and amazing guides.'}
  ];
  const [i,setI] = useState(0);
  useEffect(()=>{ const t=setInterval(()=>setI(x=> (x+1)%demo.length),5000); return ()=>clearInterval(t); },[]);
  return (
    <section className="mt-12 container mx-auto px-4">
      <h3 className="text-2xl font-extrabold text-white mb-6">What our travelers say</h3>
      <div className="relative">
        {demo.map((d,idx)=>(
          <motion.div key={idx} initial={{ opacity:0, y:20 }} animate={{ opacity: idx===i?1:0, y: idx===i?0:10 }} transition={{ duration:.6 }} className={`${idx===i? 'relative':'hidden'}`}>
            <div className="premium-card p-6">
              <p className="text-gray-300">“{d.text}”</p>
              <div className="mt-4 text-sm font-semibold text-[var(--brand-gold)]">{d.name}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
