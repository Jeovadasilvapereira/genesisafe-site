import { ShieldCheck, Award, Zap } from 'lucide-react';

export default function SocialProof() {
  return (
    <section className="py-12 border-y border-zinc-900 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-semibold tracking-wider text-zinc-600 mb-8 uppercase">
          Tecnologia e Segurança do Trabalho
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
          <div className="flex items-center gap-2 text-zinc-400">
            <ShieldCheck className="w-6 h-6 text-primary" />
            <span className="font-medium text-base">Conformidade com Normas Regulamentadoras</span>
          </div>

          <div className="flex items-center gap-2 text-zinc-400">
            <Award className="w-6 h-6 text-primary" />
            <span className="font-medium text-base">Desenvolvido por Engenheiros de SST</span>
          </div>

          <div className="flex items-center gap-2 text-zinc-400">
            <Zap className="w-6 h-6 text-primary" />
            <span className="font-medium text-base">Rastreabilidade Digital Garantida</span>
          </div>
        </div>
      </div>
    </section>
  );
}