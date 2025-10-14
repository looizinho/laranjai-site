import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { ShippingCalculator } from "@/components/shipping-calculator";

export default function ContatoPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Entre em Contato</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Estamos aqui para ajudar! Tire suas dúvidas, faça um pedido ou calcule seu frete.
          </p>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-headline font-semibold mb-4">Nossas Informações</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <div>
                      <strong>Endereço</strong><br/>
                      Av. Brasil, 1000 - Bonsucesso<br/>
                      Rio de Janeiro, RJ, 21040-360
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 text-primary shrink-0" />
                    <div>
                      <strong>Telefone</strong><br/>
                      (21) 99999-8888
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5 text-primary shrink-0" />
                    <div>
                      <strong>Email</strong><br/>
                      contato@laranjai.com.br
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <ShippingCalculator />
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
