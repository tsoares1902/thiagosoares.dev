import Link from "next/link";
import type { IconType } from "react-icons";
import {
  FaDiscord,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaSpotify,
  FaTelegramPlane,
  FaWhatsapp,
  FaYoutube
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";

type Channel = {
  label: string;
  href: string;
  icon: IconType;
};

const channels: Channel[] = [
  {
    label: "Gmail",
    href: siteConfig.socials.email,
    icon: SiGmail
  },
  {
    label: "WhatsApp",
    href: siteConfig.socials.whatsapp,
    icon: FaWhatsapp
  },
  {
    label: "Telegram",
    href: siteConfig.socials.telegram,
    icon: FaTelegramPlane
  },
  {
    label: "GitHub",
    href: siteConfig.socials.github,
    icon: FaGithub
  },
  {
    label: "X",
    href: siteConfig.socials.x,
    icon: FaXTwitter
  },
  {
    label: "Facebook",
    href: siteConfig.socials.facebook,
    icon: FaFacebookF
  },
  {
    label: "Instagram",
    href: siteConfig.socials.instagram,
    icon: FaInstagram
  },
  {
    label: "Spotify",
    href: siteConfig.socials.spotify,
    icon: FaSpotify
  },
  {
    label: "YouTube",
    href: siteConfig.socials.youtube,
    icon: FaYoutube
  },
  {
    label: "Discord",
    href: siteConfig.socials.discord,
    icon: FaDiscord
  },
  {
    label: "LinkedIn",
    href: siteConfig.socials.linkedin,
    icon: FaLinkedinIn
  }
];

export function SiteFooter() {
  return (
    <footer
      id="canais"
      className="border-t border-[var(--color-primary-hover)] bg-[var(--color-primary)] text-white"
    >
      <Container className="flex flex-col items-center gap-8 py-12 text-center">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {channels.map((channel) => {
            const Icon = channel.icon;

            return (
              <Link
                key={channel.label}
                href={channel.href}
                target={
                  channel.href.startsWith("mailto:") ? undefined : "_blank"
                }
                prefetch={false}
                rel={
                  channel.href.startsWith("mailto:") ? undefined : "noreferrer"
                }
                aria-label={channel.label}
                className="group flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white"
              >
                <Icon className="size-5 text-current transition group-hover:text-[var(--color-primary)]" />
              </Link>
            );
          })}
        </div>

        <p className="text-sm text-white/65">
          © 2026 Thiago Soares. Todos os direitos reservados.
        </p>
      </Container>
    </footer>
  );
}
