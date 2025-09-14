export const metadata = {
  title: "Rolvary ᐈ Career Exploration, Skills, Education & Opportunities | Rolvary",
  description:
    "Rolvary™ ☝ A powerful platform for career exploration, skills mapping, education, and connecting passions to real opportunities across industries. ✔️ Simplify your career journey, discover sectors, and collaborate globally.",
  openGraph: {
    title: "Rolvary ᐈ Career Exploration, Skills, Education & Opportunities | Rolvary",
    description:
      "Rolvary™ ☝ A powerful platform for career exploration, skills mapping, education, and connecting passions to real opportunities across industries. ✔️ Simplify your career journey, discover sectors, and collaborate globally.",
    url: "https://www.rolvary.in/",
    siteName: "Rolvary",
    images: [
      {
  url: "/logo.png",
        width: 1200,
        height: 630,
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://www.rolvary.in/"),
  alternates: {
    canonical: "/",
  },
};
import Image from "next/image";
import Home from "../Components/Pages/Home/Home";

export default function HomePage() {
  return (
    <div>
    <Home/>
    </div>
  );
}
