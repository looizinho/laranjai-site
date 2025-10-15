
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
        <path d="M16.75 13.96c.25.13.41.38.41.66v1.38c0 .55-.45 1-1 1h-1.5c-1.1 0-2.13-.53-2.84-1.34l-2.06-2.06a3.6 3.6 0 0 1-1.34-2.84v-1.5c0-.55.45-1 1-1h1.38c.28 0 .53.16.66.41l.76 1.52c.15.3.06.66-.21.93l-1.08 1.08c1.37 1.37 2.84 2.84 4.21 4.21l1.08-1.08c.27-.27.63-.36.93-.21l1.52.76z" fill="white"></path>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="white"></path>
    </svg>
);


export function WhatsAppButton() {
  const phoneNumber = "5521982029279"; 
  const message = "Olá! Gostaria de mais informações sobre as laranjas.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Button
      asChild
      size="icon"
      className="fixed bottom-6 right-6 h-16 w-16 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 z-50 "
    >
      <Link href={whatsappUrl} target="_blank" aria-label="Fale conosco pelo WhatsApp">
        <WhatsAppIcon className="h-8 w-8" />
      </Link>
    </Button>
  );
}
