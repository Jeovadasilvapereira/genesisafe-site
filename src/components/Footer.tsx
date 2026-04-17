import { ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <ShieldCheck className="w-8 h-8 text-amber-400" />
              <span className="font-bold text-xl tracking-tight text-zinc-50">
                GENESI SAFEBOT
              </span>
            </div>
            <p className="text-zinc-400 max-w-sm leading-relaxed mb-6">
              A evolução do Diálogo Diário de Segurança. Blinde sua operação com tecnologia, validade pericial e inclusão.
            </p>
            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 inline-block">
              <p className="text-xs text-zinc-500 uppercase font-semibold tracking-wider mb-2">Desenvolvido por</p>
              <p className="text-sm text-zinc-300 font-medium whitespace-pre-wrap">
                JEOVÁ DA SILVA PEREIRA
                {'\n'}
                <span className="text-zinc-500 font-normal">Engenheiro Eletricista e de Segurança do Trabalho - CREA-GO</span>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-zinc-100 font-bold mb-6">Plataforma</h4>
            <ul className="space-y-4">
              <li><a href="#funcionalidades" className="text-zinc-400 hover:text-white transition-colors text-sm">Funcionalidades</a></li>
              <li><a href="#compliance" className="text-zinc-400 hover:text-white transition-colors text-sm">Compliance</a></li>
              <li><a href="#precos" className="text-zinc-400 hover:text-white transition-colors text-sm">Preços</a></li>
              <li>
                <a 
                  href="https://gdds.genesisafe.com.br/auth" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 transition-colors text-sm font-medium"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-zinc-100 font-bold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="https://gdds.genesisafe.com.br/termos" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors text-sm">Termos de Uso</a></li>
              <li><a href="https://gdds.genesisafe.com.br/termos" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors text-sm">Política de Privacidade e LGPD</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-zinc-900 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-500">
            © 2026 Genesi Safebot. Todos os direitos reservados.
          </p>
          <p className="text-xs text-zinc-600">
            CNPJ: 00.000.000/0000-00
          </p>
        </div>
      </div>
    </footer>
  );
}
