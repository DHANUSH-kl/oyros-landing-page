import { Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Oyros
            </h3>
            <p className="text-secondary-foreground/70 mb-4">
              Building the future of AI-powered voice communication for businesses worldwide.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-gradient-primary hover:shadow-glow transition-all group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-gradient-primary hover:shadow-glow transition-all group"
                aria-label="Twitter/X"
              >
                <Twitter className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-gradient-primary hover:shadow-glow transition-all group"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#demo" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#privacy" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#contact" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-secondary-foreground/10 text-center">
          <p className="text-secondary-foreground/60">
            &copy; {new Date().getFullYear()} Oyros. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
