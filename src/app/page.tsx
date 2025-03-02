import { ArrowRight, Copy } from "lucide-react";
import { Button } from "@/components/button";
import { IconButton } from "@/components/icon-button";
import { Input } from "@/components/input";

export default function Page() {
  return (
    <main>
      <Button type="submit">
        Enviar
        <ArrowRight />
      </Button>

      <IconButton>
        <Copy />
      </IconButton>

      <div>
        <Input type="email" placeholder="Digite o seu e-mail"/>
        <Input type="email" placeholder="Digite o seu e-mail" error/>
      </div>

    </main>

  )
}