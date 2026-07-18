import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-white border-t-2 border-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 border-r-0 md:border-r-2 border-black pr-0 md:pr-8 space-y-4">
            <h3 className="text-3xl font-headline font-bold">NJR.sys</h3>
            <p className="max-w-md text-muted-foreground font-body">
              Engineered for precision. Built for performance. Designing high-contrast digital experiences with zero-tolerance for redundancy.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-headline font-bold uppercase text-sm">Navigation</h4>
            <ul className="space-y-2 font-body text-sm">
              <li><Link href="/about" className="hover:underline flex items-center gap-1">About <ArrowUpRight className="w-3 h-3" /></Link></li>
              <li><Link href="/#projects" className="hover:underline flex items-center gap-1">Projects <ArrowUpRight className="w-3 h-3" /></Link></li>
              <li><Link href="/packages" className="hover:underline flex items-center gap-1">Packages <ArrowUpRight className="w-3 h-3" /></Link></li>
              <li><Link href="/contact" className="hover:underline flex items-center gap-1">Contact <ArrowUpRight className="w-3 h-3" /></Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-headline font-bold uppercase text-sm">Socials</h4>
            <div className="flex gap-4">
              {[
                { icon: <Github className="w-5 h-5" />, href: "https://github.com/neerajrekwar" },
                { icon: <Twitter className="w-5 h-5" />, href: "https://x.com/neerajrekwar" },
                { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/neerajrekwar" },
                { icon: <Mail className="w-5 h-5" />, href: "mailto:dev.neerajrekwar@gmail.com" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : "_blank"}
                  rel={social.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                  className="w-10 h-10 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t-2 border-black flex flex-col md:flex-row justify-between items-center text-xs font-headline uppercase tracking-widest gap-4">
          <p>© 2024 NJR Portfolio. All Rights Reserved.</p>
          <p>Built with precision and GenAI orchestration.</p>
        </div>
      </div>
    </footer>
  );
}
