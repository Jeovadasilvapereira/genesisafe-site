import { CheckCircle } from 'lucide-react';

export default function Compliance() {
  return (
    <section id="compliance" className="py-24 bg-zinc-900 border-y border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-zinc-50 leading-tight">
              Nascido da Engenharia.<br />
              <span className="text-zinc-400">Construído para a Conformidade.</span>
            </h2>
            <p className="mt-6 text-lg text-zinc-400">
              O G-DDS PRO não é um gerador de texto; é um documento técnico robusto com blindagem jurídica.
            </p>

            <ul className="mt-10 space-y-8">
              <li className="flex gap-4">
                <CheckCircle className="flex-shrink-0 w-6 h-6 text-emerald-400 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-zinc-100">Cadeia de Custódia Digital</h4>
                  <p className="mt-2 text-zinc-400 leading-relaxed">
                    Todo documento possui Hash SHA-256 único e QR Code de validação pública. Inalterável e autêntico.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <CheckCircle className="flex-shrink-0 w-6 h-6 text-emerald-400 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-zinc-100">Proteção LGPD Nativa</h4>
                  <p className="mt-2 text-zinc-400 leading-relaxed">
                    Mascaramento automático de CPF (ex: ***.123.456-**) na lista de presença. Segurança para a empresa e para o trabalhador.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <CheckCircle className="flex-shrink-0 w-6 h-6 text-emerald-400 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-zinc-100">Rigor Técnico nas NRs</h4>
                  <p className="mt-2 text-zinc-400 leading-relaxed">
                    Classificação inteligente entre Acidentes de Trabalho Típicos (NR-10, NR-12, NR-35) e Doenças Ocupacionais (NR-15).
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Visual Element */}
          <div className="relative lg:ml-auto">
            <div className="relative w-full max-w-md aspect-square bg-zinc-950 rounded-full border border-zinc-800 flex items-center justify-center p-8 shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/40 via-zinc-950 to-zinc-950 opacity-50 group-hover:from-emerald-900/20 group-hover:opacity-100 transition-all duration-700" />

              {/* Document Sim */}
              <div className="relative z-10 w-full rounded-2xl bg-zinc-900 border border-zinc-800 p-6 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="space-y-3">
                  <div className="h-2 bg-zinc-800 rounded w-3/4" />
                  <div className="h-2 bg-zinc-800 rounded w-full" />
                  <div className="h-2 bg-zinc-800 rounded w-5/6" />
                </div>
                <div className="mt-6 pt-6 border-t border-zinc-800/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-zinc-800" />
                    <div>
                      <div className="h-2 bg-emerald-500/50 rounded w-20 mb-2" />
                      <div className="h-2 bg-zinc-700 rounded w-32" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
