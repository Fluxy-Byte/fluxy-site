
import Logo from "../../public/fly_footer.png"
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function Footer() {

  const handleDownload = (fileName: string) => {
    const link = document.createElement("a");
    link.href = `/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">

            <div className="flex items-center">
              <img
                src={Logo}
                alt="Fluxy Technologies"
                className="w-50 h-50 rounded-lg object-contain"
              />

            </div>

            <div className="text-center md:text-right">

              <p className="text-primary mt-5"><b>Transformando ideias em realidade digital com a Fluxy</b></p>
              <p className="text-sm text-muted-foreground mt-3">
                Abaixo esta nossos documentos oficiais disponíveis
              </p>

              <div className="flex flex-row justify-end items-center gap-3 mt-3">
                <Button
                  onClick={() => handleDownload("Politica_de_Privacidade_Fluxy_Technologies.pdf")}
                  className="flex items-center gap-2"
                >
                  <Download size={18} />
                  Política de Privacidade
                </Button>

                <Button
                  onClick={() => handleDownload("Termos_de_Uso_Fluxy_Technologies.pdf")}
                  className="flex items-center gap-2"
                >
                  <Download size={18} />
                  Termos de Uso
                </Button>
              </div>

              <p className="text-muted-foreground mt-4">
                © {new Date().getFullYear()} Fluxy Technologies. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
