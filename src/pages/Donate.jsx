import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import DonationCard from '../components/common/DonationCard';
import { ShieldCheck, Receipt, DollarSign } from 'lucide-react';

const Donate = () => {
  return (
    <div className="pt-24 pb-20 bg-gradient-to-b from-white via-emerald-50/15 to-white">
      {/* Header Banner */}
      <section className="relative bg-slate-900 text-white py-20 mb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80" 
            alt="Forest canopy backdrop" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
          <span className="text-xs uppercase tracking-widest font-black text-emerald-400 mb-3 block font-display">Make an impact</span>
          <h1 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tight">Support Conservation</h1>
          <p className="text-slate-350 text-sm md:text-base max-w-xl mx-auto mt-4 leading-relaxed font-medium">
            Your contributions buy native saplings, solar microgrid equipment, and cleanup materials.
          </p>
        </div>
      </section>

      {/* Main Grid: Card + Funding distribution details */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[300px] bg-emerald-100/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        
        {/* Left Column: Funding details */}
        <div className="space-y-8 lg:pr-8 relative z-10">
          <div>
            <h2 className="font-display font-black text-2xl md:text-3xl text-slate-800 mb-4 leading-snug uppercase tracking-wide">Where does my donation go?</h2>
            <p className="text-slate-650 text-sm md:text-base leading-relaxed font-medium">
              We operate under strict accountability standards. Over 85% of every dollar goes directly to purchasing supplies and logistics for our active projects.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { icon: <DollarSign size={24} className="text-primary" />, title: "$10 buys 5 Native Saplings", desc: "Covers sapling purchasing, local fertilizer soil preparation, and planting tool maintenance." },
              { icon: <Receipt size={24} className="text-primary" />, title: "Tax Exemption (80G)", desc: "DHI Green Foundation is registered under Section 80G. Donors receive digital receipts instantly for tax write-offs." },
              { icon: <ShieldCheck size={24} className="text-primary" />, title: "Transparent Audits", desc: "Our annual ecological impact metrics and financial ledger books are publically audit-verified." }
            ].map((detail, idx) => (
              <div key={idx} className="flex gap-4 bg-white p-5 rounded-3xl border border-slate-100 shadow-md shadow-slate-100/50 hover:shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-primary shrink-0">
                  {detail.icon}
                </div>
                <div>
                  <h4 className="font-display font-black text-sm text-slate-800 uppercase tracking-wide">{detail.title}</h4>
                  <p className="text-slate-550 text-xs md:text-sm mt-1 leading-relaxed font-medium">{detail.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Donation Form Card */}
        <div className="w-full relative z-10">
          <DonationCard />
        </div>
      </section>
    </div>
  );
};

export default Donate;
