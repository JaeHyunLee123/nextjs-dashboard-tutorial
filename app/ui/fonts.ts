import { Inter, Lustria, Lusitana } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const lustria = Lustria({ subsets: ["latin"], weight: ["400"] });

export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});
