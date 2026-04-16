import { Building2, Factory, HardHat, Anchor, Tractor } from 'lucide-react';

export default function SocialProof() {
  return (
    <section className="py-12 border-y border-zinc-900 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-semibold tracking-wider text-zinc-600 mb-8 uppercase">
          Confiado por engenheiros de segurança em todo o Brasil
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
          <div className="flex items-center gap-2 text-zinc-400 hover:text-zinc-300 transition-colors">
            <Building2 className="w-8 h-8" />
            <span className="font-bold text-lg hidden sm:block">Construtec</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-400 hover:text-zinc-300 transition-colors">
            <Factory className="w-8 h-8" />
            <span className="font-bold text-lg hidden sm:block">Industrial S.A</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-400 hover:text-zinc-300 transition-colors">
            <HardHat className="w-8 h-8" />
            <span className="font-bold text-lg hidden sm:block">Engenharia BR</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-400 hover:text-zinc-300 transition-colors">
            <Anchor className="w-8 h-8" />
            <span className="font-bold text-lg hidden sm:block">Portos & Logística</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-400 hover:text-zinc-300 transition-colors">
            <Tractor className="w-8 h-8" />
            <span className="font-bold text-lg hidden sm:block">AgroSeg</span>
          </div>
        </div>
      </div>
    </section>
  );
}
