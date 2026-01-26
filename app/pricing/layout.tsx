
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Terminal, Settings, Bell, User } from 'lucide-react';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NEE - Developer Services',
  description: 'Professional Web3 and Software Development Services',
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-[#FDFCF5] text-slate-800`}>
        <div className="flex flex-col items-center p-4 md:p-8">
          
          {/* Navigation */}
          <nav className="w-full max-w-7xl flex items-center justify-between mb-12">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center font-sans gap-2 font-bold text-xl hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 bg-slate-900 rounded-md flex items-center justify-center text-white">
                  <Terminal className="w-5 h-5" />
                </div>
                nee
              </Link>
            </div>

            {/* Desktop Menu - Updated Paths */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
              <Link href="/dashboard" className="hover:text-slate-900 transition-colors">Dashboard</Link>
              <Link href="/projects" className="hover:text-slate-900 transition-colors">Projects</Link>
              
              {/* Updated Links */}
              <Link href="/pricing" className="hover:text-slate-900 transition-colors">Pricing</Link>
              <Link href="/packages" className="hover:text-slate-900 transition-colors">Packages</Link>
              
              <Link href="/deployments" className="hover:text-slate-900 transition-colors">Deployments</Link>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-1 px-3 py-1.5 bg-white rounded-full border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
                <Settings className="w-4 h-4" />
                <span>Config</span>
              </button>
              <button className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors">
                <Bell className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-300 transition-colors">
                <User className="w-4 h-4" />
              </button>
            </div>
          </nav>

          <main className="w-full max-w-7xl">
            {children}
          </main>

        </div>
      </body>
    </html>
  );
}
