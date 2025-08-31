import React from "react";
import { Facebook, Linkedin, Instagram } from "lucide-react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

const CardContent: React.FC<CardProps> = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

const TwitterIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const TikTokIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const Footer: React.FC = () => {
  const socialLinks = [
    {
      href: "https://x.com/byeptec?fbclid=IwY2xjawMFaVlleHRuA2FlbQIxMABicmlkETFiMFlNN0s5WTBTMUYyUVhhAR7yHzbx240_4I7L87dD72QIdwlErWzTRfVSe1lNQo29VFJzyuQKPR9rnK4D-g_aem_RS4vM1A8HX8ofkoUMmoYAQ",
      icon: TwitterIcon,
      label: "Twitter/X",
    },
    {
      href: "https://www.facebook.com/profile.php?id=61554812960001",
      icon: Facebook,
      label: "Facebook",
    },
    {
      href: "https://www.linkedin.com/company/byeptec/?viewAsMember=true",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "https://www.instagram.com/byeptec/",
      icon: Instagram,
      label: "Instagram",
    },
    {
      href: "https://www.tiktok.com/@eptec_sa",
      icon: TikTokIcon,
      label: "TikTok",
    },
  ];

  const styles = `
    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(96px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes slideLeft {
      from {
        opacity: 0;
        transform: translateX(48px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes slideRight {
      from {
        opacity: 0;
        transform: translateX(-48px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <footer className="bg-transparent text-white py-6 px-4 md:px-6 lg:px-8 overflow-hidden">
        <div
          className="max-w-7xl mx-auto flex justify-center min-h-[200px] opacity-0 translate-y-24"
          style={{
            animation: "fadeUp 0.8s ease-out forwards",
          }}
        >
          <Card className="bg-transparent border-0 shadow-none w-full">
            <CardContent className="p-0 flex flex-col md:flex-row justify-between gap-6 md:gap-12 w-full px-10">
              {/* Logo and Description */}
              <div
                className="flex flex-col items-center justify-center md:items-start text-center md:text-left flex-1 opacity-0"
                style={{
                  animation: "fadeIn 0.6s ease-out 0.2s forwards",
                }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src="/icons/logo.svg"
                    alt="EPTEC Logo"
                    className="h-10 w-auto transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <p className="text-xs md:text-sm text-white/70 max-w-xs leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
              </div>

              {/* Services */}
              <div
                className="flex flex-col items-center flex-1 justify-center opacity-0"
                style={{
                  animation: "slideLeft 0.6s ease-out 0.4s forwards",
                }}
              >
                <h3 className="text-base md:text-lg font-semibold text-primary mb-4">
                  Services
                </h3>
                <ul className="space-y-2 text-xs md:text-sm text-white/70">
                  {[
                    "Web Development",
                    "Mobile Apps",
                    "UI/UX Design",
                    "Marketing",
                    "AI Agents",
                  ].map((service) => (
                    <li
                      key={service}
                      className="cursor-pointer transition-all duration-300 hover:translate-x-1 hover:text-primary"
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Follow Us */}
              <div
                className="flex flex-col items-center flex-1 opacity-0"
                style={{
                  animation: "slideRight 0.6s ease-out 0.6s forwards",
                }}
              >
                <h3 className="text-base md:text-lg font-semibold text-primary mb-4">
                  Follow us
                </h3>
                <div className="flex space-x-3 md:space-x-4 flex-wrap justify-center">
                  {socialLinks.map(({ href, icon: Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="transition-all duration-300 hover:scale-125 hover:rotate-6 hover:text-primary"
                    >
                      <Icon className="text-white hover:text-primary w-5 h-5 md:w-6 md:h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </footer>
    </>
  );
};

export default Footer;
