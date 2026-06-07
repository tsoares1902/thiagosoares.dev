import Link from "next/link";
import type { IconType } from "react-icons";
import {
  FaDiscord,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaSpotify,
  FaYoutube
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";

type Channel = {
  label: string;
  href: string;
  icon: IconType;
  className: string;
};

const channels: Channel[] = [
  {
    label: "GitHub",
    href: siteConfig.socials.github,
    icon: FaGithub,
    className: "hover:text-[#181717]"
  },
  {
    label: "X",
    href: siteConfig.socials.x,
    icon: FaXTwitter,
    className: "hover:text-[#000000]"
  },
  {
    label: "Facebook",
    href: siteConfig.socials.facebook,
    icon: FaFacebookF,
    className: "hover:text-[#1877F2]"
  },
  {
    label: "Instagram",
    href: siteConfig.socials.instagram,
    icon: FaInstagram,
    className: "hover:text-[#E4405F]"
  },
  {
    label: "Spotify",
    href: siteConfig.socials.spotify,
    icon: FaSpotify,
    className: "hover:text-[#1DB954]"
  },
  {
    label: "YouTube",
    href: siteConfig.socials.youtube,
    icon: FaYoutube,
    className: "hover:text-[#FF0000]"
  },
  {
    label: "Discord",
    href: siteConfig.socials.discord,
    icon: FaDiscord,
    className: "hover:text-[#5865F2]"
  },
  {
    label: "LinkedIn",
    href: siteConfig.socials.linkedin,
    icon: FaLinkedinIn,
    className: "hover:text-[#0A66C2]"
  }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-white">
      <Container className="flex flex-col items-center gap-8 py-12 text-center">
        <div>
          <p className="text-sm font-semibold text-[var(--color-foreground)]">
            Canais
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            {channels.map((channel) => {
              const Icon = channel.icon;

              return (
                <Link
                  key={channel.label}
                  href={channel.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={channel.label}
                  className={`flex size-11 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-muted)] transition hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-muted)] ${channel.className}`}
                >
                  <Icon className="size-5" />
                </Link>
              );
            })}
          </div>
        </div>

        <p className="text-sm text-[var(--color-muted)]">
          © 2026 Thiago Soares. Todos os direitos reservados.
        </p>
      </Container>
    </footer>
  );
}