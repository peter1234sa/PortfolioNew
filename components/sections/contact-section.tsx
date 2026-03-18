import { AsciiArt } from "@/components/ascii-art"
import { Mail, MapPin, Linkedin, Github, Instagram, Twitter } from "lucide-react"

export function ContactSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="contact" />

      <div className="space-y-6">
        <div className="flex flex-col gap-3">
          <a
            href="mailto:tushirsahu22@gmail.com"
            className="flex items-center text-sm hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4 mr-2 text-primary" />
            tushirsahu22@gmail.com
          </a>
          <div className="flex items-center text-sm">
            <MapPin className="h-4 w-4 mr-2 text-primary" />
            Osaka, Japan (current)
          </div>
          <a
            href="https://www.linkedin.com/in/tushir-sahu-b95549205/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm hover:text-primary transition-colors"
          >
            <Linkedin className="h-4 w-4 mr-2 text-primary" />
            linkedin.com/in/tushir-sahu-b95549205
          </a>
          <a
            href="https://github.com/TushirSahu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm hover:text-primary transition-colors"
          >
            <Github className="h-4 w-4 mr-2 text-primary" />
            github.com/TushirSahu
          </a>
          <a
            href="https://www.instagram.com/tushir_sahu/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm hover:text-primary transition-colors"
          >
            <Instagram className="h-4 w-4 mr-2 text-primary" />
            instagram.com/tushir_sahu
          </a>
          <a
            href="https://twitter.com/tushir_sahu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm hover:text-primary transition-colors"
          >
            <Twitter className="h-4 w-4 mr-2 text-primary" />
            twitter.com/tushir_sahu
          </a>
        </div>
      </div>
    </div>
  )
}

