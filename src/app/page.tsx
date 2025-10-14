import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Truck, Leaf, Star } from "lucide-react";
import heroImage from "@/assets/images/hero.png";

const products = [
  {
    name: "Laranja Pera",
    price: "R$ 60,00 / caixa",
    image: PlaceHolderImages.find(p => p.id === "orange-pera"),
  },
  {
    name: "Laranja Bahia",
    price: "R$ 75,00 / caixa",
    image: PlaceHolderImages.find(p => p.id === "orange-bahia"),
  },
  {
    name: "Laranja Lima",
    price: "R$ 80,00 / caixa",
    image: PlaceHolderImages.find(p => p.id === "orange-lima"),
  },
];

const features = [
    {
      icon: <Star className="h-10 w-10 text-primary" />,
      title: "Qualidade Superior",
      description: "Nossas laranjas são cuidadosamente selecionadas para garantir o máximo de sabor e suculência.",
    },
    {
      icon: <Leaf className="h-10 w-10 text-green-500" />,
      title: "Sempre Frescas",
      description: "Colheita diária e processo otimizado para que o frescor chegue até você.",
    },
    {
      icon: <Truck className="h-10 w-10 text-secondary-foreground" />,
      title: "Entrega Rápida no RJ",
      description: "Logística eficiente para atender todo o estado do Rio de Janeiro com agilidade.",
    },
];

export default function Home() {

  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white">
        <Image
          src={heroImage}
          alt="Laranjal numa fazenda"
          fill
          className="object-cover"
          data-ai-hint="orange farm"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col items-center gap-4 px-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold drop-shadow-lg">
            Laranjas Frescas do Rio Direto Para o Seu Negócio
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-primary-foreground/90 drop-shadow-md">
            Qualidade, sabor e a tecnologia da LaranjAI para impulsionar suas vendas.
          </p>
          <Button asChild size="lg" className="mt-4 font-bold">
            <Link href="/contato">Faça seu Pedido <ArrowRight className="ml-2" /></Link>
          </Button>
        </div>
      </section>

      <section id="features" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center gap-4">
                {feature.icon}
                <h3 className="text-xl font-headline font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-2">Nossas Laranjas</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Oferecemos as melhores variedades de laranjas para sucos, consumo in natura e gastronomia.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              product.image && (
                <Card key={product.name} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                  <CardHeader className="p-0">
                    <Image
                      src={product.image.imageUrl}
                      alt={product.image.description}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover"
                      data-ai-hint={product.image.imageHint}
                    />
                  </CardHeader>
                  <CardContent className="p-6 flex-grow">
                    <CardTitle className="font-headline text-2xl">{product.name}</CardTitle>
                  </CardContent>
                  <CardFooter className="p-6 bg-muted/50">
                    <p className="text-lg font-semibold text-primary">{product.price}</p>
                  </CardFooter>
                </Card>
              )
            ))}
          </div>
        </div>
      </section>

      <section id="promo" className="bg-accent/30 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="bg-accent border-primary text-primary-foreground mb-4">Promoção Especial</Badge>
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
            Descontos Progressivos
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
            Quanto mais você compra, mais você economiza! Entre em contato para saber mais sobre nossos descontos para grandes volumes e parcerias de longo prazo.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-bold shadow-md">
            <Link href="/contato">Consultar Condições</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
