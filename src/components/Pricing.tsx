import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="precos" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-50">
            Escolha a estrutura ideal para a sua operação de SST
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Soluções escaláveis desde o profissional independente até o chão de fábrica de alta complexidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">

          {/* Card 1: Consultor */}
          <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 flex flex-col h-full hover:border-zinc-700 transition-colors">
            <div>
              <h3 className="text-xl font-bold text-zinc-100 mb-2">Plano Consultor</h3>
              <p className="text-sm text-zinc-400 mb-6">Ideal para Técnicos e Engenheiros Autônomos em início de consultoria.</p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-zinc-50">R$ 97,00</span>
                <span className="text-zinc-500">/mês</span>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Limite de 45 Laudos (DDS) por mês</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-300">1 Acesso do Sistema (Exclusivo do Titular)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Geração de PDF com validade técnica</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Validação de presença por QR Code</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Assinatura Digital dos Trabalhadores</span>
                </li>
              </ul>
            </div>

            <a
              href="https://gdds.genesisafe.com.br/auth"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto block w-full py-4 px-6 text-center text-zinc-50 font-bold border border-zinc-700 rounded-xl hover:bg-zinc-800 hover:border-zinc-600 transition-all"
            >
              Assinar Plano
            </a>
          </div>

          {/* Card 2: Operacional */}
          <div className="relative bg-zinc-900 p-8 rounded-3xl border-2 border-amber-400 shadow-xl shadow-amber-950/20 flex flex-col h-full transform lg:-translate-y-4">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-zinc-950 px-4 py-1 rounded-full font-bold text-sm tracking-wide">
              MAIS POPULAR
            </div>

            <div>
              <h3 className="text-xl font-bold text-amber-400 mb-2">Plano Operacional</h3>
              <p className="text-sm text-zinc-400 mb-6">O padrão definitivo para Indústrias, Transportadoras e Canteiros de Obras.</p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-amber-400">R$ 347,00</span>
                <span className="text-zinc-500">/mês</span>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-100">Limite de 300 Laudos (DDS) por mês</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-100">Até 5 Acessos do Sistema (Gestor + 4 Líderes de Setor)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-100">Painel Corporativo (Workspace Integrado)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-100">Delegação de geração de DDS para Supervisores</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-100">Centralização automática do histórico da empresa</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-100">Suporte Técnico Prioritário</span>
                </li>
              </ul>
            </div>

            <a
              href="https://gdds.genesisafe.com.br/auth"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto block w-full py-4 px-6 text-center bg-amber-400 text-zinc-950 font-bold rounded-xl hover:bg-amber-300 transition-all transform hover:scale-105"
            >
              Assinar Plano
            </a>
          </div>

          {/* Card 3: Enterprise */}
          <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 flex flex-col h-full hover:border-zinc-700 transition-colors">
            <div>
              <h3 className="text-xl font-bold text-zinc-100 mb-2">Plano Enterprise</h3>
              <p className="text-sm text-zinc-400 mb-6">Para grandes plantas logísticas, operações contínuas e múltiplos turnos.</p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-zinc-50">R$ 890,00</span>
                <span className="text-zinc-500">/mês</span>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Limite de 1000 Laudos (DDS) por mês</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Até 20 Acessos do Sistema (Cobertura total de turnos)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Painel de Observabilidade em Tempo Real</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Gestão Massiva de Trabalhadores</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Atendimento VIP Direto</span>
                </li>
              </ul>
            </div>

            <a
              href="https://gdds.genesisafe.com.br/auth"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto block w-full py-4 px-6 text-center text-zinc-50 font-bold border border-zinc-700 rounded-xl hover:bg-zinc-800 hover:border-zinc-600 transition-all"
            >
              Falar com Consultor
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
