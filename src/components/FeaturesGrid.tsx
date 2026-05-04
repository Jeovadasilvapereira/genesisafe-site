import { FileSignature, Globe, Zap } from 'lucide-react';

export default function FeaturesGrid() {
  return (
    <section id="funcionalidades" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-50">
            Segurança que funciona na prática.
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Diga adeus à burocracia e foque no que importa: proteger vidas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-8 bg-zinc-900 rounded-3xl border border-zinc-800 hover:border-amber-900/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-900/10">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 border border-amber-500/20 group-hover:scale-110 transition-transform duration-300">
              <FileSignature className="w-7 h-7 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold text-zinc-100 mb-4">
              Fim da Papelada
            </h3>
            <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
              Selecione funcionários previamente cadastrados, colete assinaturas digitais na tela do celular e gere registros técnicos enxutos e organizados.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 bg-zinc-900 rounded-3xl border border-zinc-800 hover:border-amber-900/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-900/10">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 border border-amber-500/20 group-hover:scale-110 transition-transform duration-300">
              <Globe className="w-7 h-7 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold text-zinc-100 mb-4">
              Inclusão Real e Multinacional
            </h3>
            <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
              Tradução automática intercalada linha a linha para Haitiano, Espanhol, Inglês, Francês e Alemão. Cumpra a NR-01 com excelência técnica.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 bg-zinc-900 rounded-3xl border border-zinc-800 hover:border-amber-900/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-900/10">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 border border-amber-500/20 group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-7 h-7 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold text-zinc-100 mb-4">
              Compartilhamento Instantâneo
            </h3>
            <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
              Terminou o DDS? Envie o laudo finalizado, assinado e validado diretamente para o WhatsApp da gerência em um clique.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
