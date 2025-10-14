import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Target, Users } from "lucide-react";

export default function SobrePage() {
  const historyImage = PlaceHolderImages.find(p => p.id === "about-us-history");
  const valuesImage = PlaceHolderImages.find(p => p.id === "about-us-values");

  return (
    <>
      <section className="py-16 md:py-24 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Sobre a LaranjAI</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Conheça a jornada que nos tornou referência no atacado de laranjas no Rio de Janeiro.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {historyImage && (
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-headline font-bold mb-4">Nossa História</h2>
                <p className="text-muted-foreground mb-4">
                  Fundada por uma família de agricultores com mais de 50 anos de tradição no cultivo de cítricos, a LaranjAI nasceu do desejo de conectar o campo diretamente com os comerciantes do Rio de Janeiro. Combinamos a sabedoria de gerações com tecnologia de ponta para otimizar nossa logística e garantir a entrega de laranjas sempre frescas.
                </p>
                <p className="text-muted-foreground">
                  O nome "LaranjAI" reflete nossa essência: a união do tradicional cultivo da laranja com a inteligência (AI) de processos modernos, resultando em um serviço de atacado ágil, confiável e de altíssima qualidade.
                </p>
              </div>
            )}
            {historyImage && (
              <div className="order-1 md:order-2">
                <Image
                  src={historyImage.imageUrl}
                  alt={historyImage.description}
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg"
                  data-ai-hint={historyImage.imageHint}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {valuesImage && (
              <div>
                <Image
                  src={valuesImage.imageUrl}
                  alt={valuesImage.description}
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg"
                  data-ai-hint={valuesImage.imageHint}
                />
              </div>
            )}
            <div>
              <h2 className="text-3xl font-headline font-bold mb-4">Missão e Valores</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Target className="h-8 w-8 text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-headline font-semibold text-lg">Nossa Missão</h3>
                    <p className="text-muted-foreground">
                      Fornecer as laranjas mais frescas e saborosas para empresas em todo o Rio de Janeiro, impulsionando o sucesso de nossos clientes através de produtos de qualidade superior e um serviço excepcional.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Leaf className="h-8 w-8 text-green-500 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-headline font-semibold text-lg">Sustentabilidade</h3>
                    <p className="text-muted-foreground">
                      Compromisso com práticas agrícolas responsáveis que respeitam o meio ambiente e promovem a biodiversidade.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Users className="h-8 w-8 text-secondary-foreground mt-1 shrink-0" />
                  <div>
                    <h3 className="font-headline font-semibold text-lg">Parceria</h3>
                    <p className="text-muted-foreground">
                      Acreditamos no poder das parcerias. O sucesso dos nossos clientes é o nosso sucesso.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
