"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator } from "lucide-react";

export function ShippingCalculator() {
    const [region, setRegion] = useState("");
    const [quantity, setQuantity] = useState("1");
    const [shippingCost, setShippingCost] = useState<number | null>(null);

    const regionPrices: { [key: string]: number } = {
        'zona-sul': 10,
        'zona-norte': 12,
        'zona-oeste': 15,
        'centro': 8,
        'baixada': 20,
    };

    const handleCalculate = () => {
        if (region && Number(quantity) > 0) {
            const cost = regionPrices[region] * Number(quantity);
            setShippingCost(cost);
        } else {
            setShippingCost(null);
        }
    };

    return (
        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Calcular Frete</CardTitle>
                <CardDescription>Veja o custo de entrega para sua região.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div>
                        <Label htmlFor="region">Região</Label>
                        <Select onValueChange={setRegion} value={region}>
                            <SelectTrigger id="region">
                                <SelectValue placeholder="Selecione a região" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="centro">Centro</SelectItem>
                                <SelectItem value="zona-sul">Zona Sul</SelectItem>
                                <SelectItem value="zona-norte">Zona Norte</SelectItem>
                                <SelectItem value="zona-oeste">Zona Oeste</SelectItem>
                                <SelectItem value="baixada">Baixada Fluminense</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label htmlFor="quantity">Quantidade (caixas)</Label>
                        <Input 
                            id="quantity" 
                            type="number" 
                            placeholder="1"
                            min="1"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)} 
                        />
                    </div>
                    <Button onClick={handleCalculate} className="w-full font-bold">
                        <Calculator className="mr-2 h-4 w-4"/> Calcular
                    </Button>
                    {shippingCost !== null && (
                        <div className="text-center bg-primary/10 p-4 rounded-md">
                            <p className="text-sm text-muted-foreground">Custo estimado do frete:</p>
                            <p className="text-2xl font-bold text-primary">
                                {shippingCost.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                            </p>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
