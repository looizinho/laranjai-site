import Link from "next/link";
import { Citrus, Mail, MapPin, Phone, Twitter, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Citrus className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-headline text-foreground">
                LaranjAI
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Sua fonte de laranjas frescas e de qualidade no Rio de Janeiro.
            </p>
          </div>
          <div>
            <h4 className="font-headline font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-muted-foreground hover:text-primary">Início</Link></li>
              <li><Link href="/sobre" className="text-sm text-muted-foreground hover:text-primary">Sobre Nós</Link></li>
              <li><Link href="/contato" className="text-sm text-muted-foreground hover:text-primary">Contato</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-1 shrink-0"/><span>Av. Brasil, 1000<br/>Rio de Janeiro, RJ</span></li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0"/>(21) 99999-8888</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0"/>contato@laranjai.com.br</li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <Link href="#" aria-label="Facebook"><Facebook className="h-6 w-6 text-muted-foreground hover:text-primary"/></Link>
              <Link href="#" aria-label="Instagram"><Instagram className="h-6 w-6 text-muted-foreground hover:text-primary"/></Link>
              <Link href="#" aria-label="Twitter"><Twitter className="h-6 w-6 text-muted-foreground hover:text-primary"/></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} LaranjAI Atacado. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
