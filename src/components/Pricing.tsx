import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="precos" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-50">
            Invista na Segurança. Zere os Passivos.
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Escolha o plano ideal para a realidade da sua operação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">

          {/* Card 1: PRO */}
          <div className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800 flex flex-col h-full hover:border-zinc-700 transition-colors">
            <div>
              <h3 className="text-xl font-bold text-zinc-100 mb-2">Plano PRO</h3>
              <p className="text-sm text-zinc-400 mb-6">Ideal para Técnicos e Engenheiros Autônomos.</p>
              <div className="mb-8">
                <span className="text-5xl font-extrabold text-zinc-50">R$ 59,90</span>
                <span className="text-zinc-500">/mês</span>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Documento Rastreável por QR Code</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Assinaturas Ilimitadas na tela</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Tradução para Haitiano e Espanhol</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Mascaramento LGPD</span>
                </li>
              </ul>
            </div>

            <a
              href="https://gdds.genesisafe.com.br/auth"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto block w-full py-4 px-6 text-center text-zinc-50 font-bold border border-zinc-700 rounded-xl hover:bg-zinc-800 hover:border-zinc-600 transition-all"
            >
              Assinar Plano Mensal
            </a>
          </div>

          {/* Card 2: CORPORATIVO */}
          <div className="relative bg-zinc-900 p-10 rounded-3xl border-2 border-amber-400 shadow-xl shadow-amber-950/20 flex flex-col h-full transform md:-translate-y-4">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-zinc-950 px-4 py-1 rounded-full font-bold text-sm tracking-wide">
              MAIS POPULAR
            </div>

            <div>
              <h3 className="text-xl font-bold text-amber-400 mb-2">Plano CORPORATIVO</h3>
              <p className="text-sm text-zinc-400 mb-6">O melhor valor para empresas e SESMT.</p>
              <div className="mb-8">
                <span className="text-5xl font-extrabold text-amber-400">R$ 499,00</span>
                <span className="text-zinc-500">/ano</span>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-100">Tudo do PRO</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-100">Gestão Completa de Colaboradores/Setores</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-100">Suporte Prioritário VIP</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-100">Tradução em 5 idiomas (Inglês, Francês, etc.)</span>
                </li>
              </ul>
            </div>

            <a
              href="https://gdds.genesisafe.com.br/auth"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto block w-full py-4 px-6 text-center bg-amber-400 text-zinc-950 font-bold rounded-xl hover:bg-amber-300 transition-all transform hover:scale-105"
            >
              Assinar Plano Anual (até 12x)
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
