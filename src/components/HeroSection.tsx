import { ChevronRight, FileSignature, CheckCircle, ShieldCheck } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy */}
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter leading-tight text-zinc-50">
              Da Indústria ao Canteiro de Obras: A Evolução do <span className="text-amber-400">Diálogo Diário de Segurança.</span>
            </h1>
            
            <p className="text-xl text-zinc-400 mt-6 leading-relaxed">
              O primeiro sistema de emissão de DDS com validade pericial, tradução bilíngue automática e coleta de assinaturas digitais diretamente na tela do celular. Blinde a sua empresa contra passivos trabalhistas.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="https://gdds.genesisafe.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-400 text-zinc-950 font-bold rounded-xl text-lg hover:bg-amber-300 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-amber-900/20"
              >
                Gerar Meu Primeiro DDS
                <ChevronRight className="ml-2 w-5 h-5" />
              </a>
            </div>
            
            <div className="mt-8 flex items-center gap-4 text-sm text-zinc-500">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Sem cartão de crédito</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Cancele quando quiser</span>
              </div>
            </div>
          </div>

          {/* Right Column: Mockup */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            {/* Decorative background elements for mockup */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-emerald-500/5 rounded-3xl blur-2xl transform rotate-3" />
            
            {/* The Mockup Frame */}
            <div className="relative bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-3xl shadow-2xl shadow-zinc-950/50 p-2 overflow-hidden">
              {/* Browser/App Header */}
              <div className="flex items-center px-4 py-3 border-b border-zinc-800/50 bg-zinc-900/50 rounded-t-2xl">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                </div>
                <div className="mx-auto bg-zinc-950 rounded-md px-3 py-1 text-xs text-zinc-500 flex items-center gap-2 border border-zinc-800/50">
                  <ShieldCheck className="w-3 h-3 text-amber-400" />
                  gdds.genesisafe.com.br
                </div>
              </div>
              
              {/* Mockup Content */}
              <div className="p-6 bg-zinc-950 rounded-b-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-100">DDS #2049</h3>
                    <p className="text-xs text-zinc-500">Trabalho em Altura (NR-35)</p>
                  </div>
                  <span className="px-2 py-1 text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">
                    Em Progresso
                  </span>
                </div>

                {/* Translation Simulation */}
                <div className="space-y-3 mb-6 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                  <div>
                    <p className="text-sm text-zinc-300">O uso correto do cinto de segurança tipo paraquedista é obrigatório.</p>
                    <p className="text-xs text-zinc-500 mt-1 italic border-l-2 border-amber-400/50 pl-2">Itililizasyon kòrèk senti sekirite kalite parachit la obligatwa.</p>
                  </div>
                </div>

                {/* Signature Pad */}
                <div className="border-2 border-dashed border-zinc-800 rounded-xl p-6 flex flex-col items-center justify-center bg-zinc-900/30 group hover:border-amber-400/30 transition-colors">
                  <FileSignature className="w-10 h-10 text-zinc-600 mb-3 group-hover:text-amber-400 transition-colors" />
                  <p className="text-sm text-zinc-400 mb-1">Toque para assinar</p>
                  <p className="text-xs text-zinc-600">João Silva - ***.241.988-**</p>
                </div>

                <button className="w-full mt-4 py-3 bg-zinc-800 text-zinc-300 font-medium rounded-lg text-sm transition-colors hover:bg-zinc-700">
                  Concluir e Gerar PDF
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
