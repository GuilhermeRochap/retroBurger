import { Card , CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import { CircleDollarSign, DollarSign} from 'lucide-react'
import { Avatar } from "../ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export function Sales(){
    return(
        <Card className="flex-1">
           <CardHeader>
            <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-800">
                    Ultimos Clientes
                </CardTitle>
                <CircleDollarSign className="ml-auto w-4 h-4"/>
            </div>
            <CardDescription>
            Novos Clientes nos últimos 24 horas
           </CardDescription>
           </CardHeader>
           <CardContent>
            <article className="flex items-center gap-2 border-b py-2">
                <Avatar className="w-8 h-8">
                    <AvatarImage src="meneson.jpg"/>
                    <AvatarFallback>GR</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-sm sm:text-base font-semibold">Guilherme Rocha</p>
                    <span className="text-[12px] sm:text-sm text-gray-600">teste@teste.com (21) 99999-5555</span>
                </div>
            </article>
            <article className="flex items-center gap-2 border-b py-2">
                <Avatar className="w-8 h-8">
                    <AvatarImage src="meneson.jpg"/>
                    <AvatarFallback>GR</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-sm sm:text-base font-semibold">Guilherme Rocha</p>
                    <span className="text-[12px] sm:text-sm text-gray-600">teste@teste.com (21) 99999-5555</span>
                </div>
            </article>
            <article className="flex items-center gap-2 border-b py-2">
                <Avatar className="w-8 h-8">
                    <AvatarImage src="meneson.jpg"/>
                    <AvatarFallback>GR</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-sm sm:text-base font-semibold">Guilherme Rocha</p>
                    <span className="text-[12px] sm:text-sm text-gray-600">teste@teste.com (21) 99999-5555</span>
                </div>
            </article>
           </CardContent>
        </Card>
    );
}