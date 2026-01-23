import type { StaticImageData } from "next/image";
import media1 from "../../public/media.png";
import research2 from "../../public/research/research4.png";
import research1 from "../../public/research/research2.png";

export const mediaData = [
  {
    src: media1,
    alt: "media-1",
    title:
      "“India’s economy is in good shape despite challenging global environment”: Dr. V. Anantha Nageswaran states at Ashoka University’s ICPP Conference",
    description:
      "The Isaac Centre for Public Policy (ICPP) at Ashoka University concluded its...",
  },
  {
    src: research2,
    alt: "media-2",
    title: "ICPP launches new initiative on public policy research",
    description:
      "A new initiative aims to bridge research and policy implementation...",
  },
  {
    src: research1,
    alt: "media-3",
    title: "Panel discussion highlights emerging policy trends in India",
    description:
      "Experts shared insights on the evolving landscape of public policy...",
  },
] satisfies Array<{
  src: StaticImageData | string;
  alt: string;
  title: string;
  description: string;
}>;
