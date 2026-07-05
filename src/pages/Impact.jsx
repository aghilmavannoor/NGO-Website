import React from 'react';
import { Download, FileText, CheckCircle, Award } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import Counter from '../components/common/Counter';
import { impactStatsData } from '../data/mockData';
import Button from '../components/common/Button';

const reports = [
  { title: 'Annual Impact Report 2025', size: '2.4 MB', date: 'Jan 2026', url: '#' },
  { title: 'River Cleanup Audit & Hydrology study', size: '4.1 MB', date: 'Nov 2025', url: '#' },
  { title: 'Afforestation Ecological Audit 2024', size: '1.8 MB', date: 'Jan 2025', url: '#' }
];

const Impact = () => {
  return (
    <div className="pt-24 pb-20 bg-gradient-to-b from-white via-emerald-50/15 to-white">
      {/* Header Banner */}
      <section className="relative bg-slate-900 text-white py-20 mb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80" 
            alt="Mountain backdrop" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
          <span className="text-xs uppercase tracking-widest font-black text-emerald-400 mb-3 block font-display">Our Accountability</span>
          <h1 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tight">Impact & Success</h1>
          <p className="text-slate-350 text-sm md:text-base max-w-xl mx-auto mt-4 leading-relaxed font-medium">
            Review our quantified progress indicators, verified success stories, and annual audits.
          </p>
        </div>
      </section>

      {/* Stats Counter Matrix */}
      <section className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24 relative z-10">
        <div className="absolute inset-0 w-full h-full bg-emerald-100/5 rounded-full blur-3xl pointer-events-none"></div>
        {impactStatsData.map((stat) => (
          <div key={stat.id} className="bg-white border border-slate-100 rounded-3xl p-8 shadow-md shadow-slate-100/50 hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1 transition-all duration-300 text-center space-y-3 relative z-10">
            <h3 className="text-4xl sm:text-5xl font-black text-primary font-display">
              <Counter target={stat.target} suffix={stat.suffix} />
            </h3>
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest leading-none">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Success Stories Details */}
      <section className="max-w-6xl mx-auto px-4 mb-24 relative z-10">
        <SectionTitle 
          title="Verifiable restoration success stories" 
          subtitle="Case Studies" 
          align="center"
        />

        <div className="space-y-16 mt-12">
          {[
            {
              title: "From Barren Land to Forest Canopy",
              desc: "In 2022, DHI Green partnered with the community of Ramanagara. The hill zone suffered from extreme desertification and soil erosion. Over 24 months, 150 volunteers and villagers planted 12,000 native saplings. Today, soil runoff has decreased by 40%, local water aquifers have recharged, and over 14 bird species have returned to nesting.",
              image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
              milestone: "100% survival rate maintained on native plants."
            },
            {
              title: "The Arkavathi Riparian Zone Recovery",
              desc: "Heavy industrial and urban plastics choked the flow of the local Arkavathi tributary. DHI Green mobilized the Sustainable Riparian cleanup. By setting up bio-barriers and arranging weekend student sorting tasks, we collected 15+ tons of plastic. Rippling grasses now protect the banks from future erosion, cleaning water downstream.",
              image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
              milestone: "Arkavathi waterway flowing clear of massive surface plastic wastes."
            }
          ].map((story, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row items-center gap-12 ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              <div className="w-full lg:w-1/2 h-[380px] rounded-3xl overflow-hidden shadow-lg border border-slate-100 group relative">
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
              </div>
              <div className="w-full lg:w-1/2 space-y-6">
                <h3 className="font-display font-black text-2xl md:text-3xl text-slate-800 uppercase tracking-wide leading-snug">{story.title}</h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">{story.desc}</p>
                <div className="flex items-center gap-3 text-primary font-black text-xs font-display bg-emerald-50 border border-emerald-100/50 rounded-2xl px-5 py-3 w-fit shadow-inner">
                  <CheckCircle size={18} className="text-secondary fill-secondary/15 shrink-0" />
                  <span>{story.milestone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reports and Document Downloads */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20 border-y border-slate-150">
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle 
            title="Download our official reports & audits" 
            subtitle="Annual Reports" 
            align="center"
          />

          <div className="bg-white border border-slate-100 rounded-3xl shadow-md overflow-hidden divide-y divide-slate-100 mt-12">
            {reports.map((report, idx) => (
              <div key={idx} className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:bg-slate-50/50 transition-colors duration-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-primary shrink-0">
                    <FileText size={22} />
                  </div>
                  <div>
                    <h4 className="font-display font-black text-slate-800 text-base leading-snug uppercase tracking-wide">{report.title}</h4>
                    <span className="text-slate-400 text-xs font-semibold">{report.date} &bull; {report.size}</span>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  size="md" 
                  className="gap-2 w-full sm:w-auto justify-center rounded-2xl shadow-sm hover:bg-emerald-50 hover:text-primary border-slate-150"
                  onClick={() => alert(`Downloading mock report: ${report.title}`)}
                >
                  <Download size={16} /> Download PDF
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
