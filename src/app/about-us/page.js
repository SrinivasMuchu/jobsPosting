export const metadata = {
  title: "About Rolvary - Dynamic Job Listing Platform | Roles Vary, Careers Grow | Rolvary",
  description:
    "Discover Rolvary, the job listing platform designed for the evolving job market. Connect with flexible roles, career growth opportunities, and adaptable job listings. Coming soon!",
  openGraph: {
    title: "Rolvary - Dynamic Job Listing Platform | Roles Vary, Careers Grow",
    description:
      "Discover Rolvary, the job listing platform designed for the evolving job market. Connect with flexible roles, career growth opportunities, and adaptable job listings. Coming soon!",
    url: "https://www.rolvary.in/about-us",
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
    canonical: "https://www.rolvary.in/about-us",
  },
};
import AboutUs from '@/Components/AboutUsPage/AboutUs'
import React from 'react'

function page() {
  return (
    <AboutUs/>
  )
}

export default page