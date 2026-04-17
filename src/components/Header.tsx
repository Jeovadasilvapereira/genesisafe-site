import { ShieldCheck } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-8 h-8 text-amber-400" />
          <span className="font-bold text-xl tracking-tight text-zinc-50">
            GENESI SAFEBOT
          </span>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#funcionalidades" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
            Funcionalidades
          </a>
          <a href="#compliance" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
            Compliance
          </a>
          <a href="#precos" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
            Preços
          </a>
        </nav>

        {/* Action Button */}
        <div>
          <a
            href="https://gdds.genesisafe.com.br/auth"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-zinc-50 border border-zinc-700 rounded-lg hover:bg-zinc-800 transition-all duration-300"
          >
            Login
          </a>
        </div>
      </div>
    </header>
  );
}
