

import Layout from "@/componets/layout/Layout";
import Blog1 from "@/componets/sections/Blog1";
import Cta6 from "@/componets/sections/Cta6";
import Hero2 from "@/componets/sections/Hero2";
import Pricing from "@/componets/sections/Pricing";
import SeoAgency from "@/componets/sections/SeoAgency";
import Services from "@/componets/sections/Services";
import Services1 from "@/componets/sections/Services1";
import Team1 from "@/componets/sections/Team1";
import Testimonials from "@/componets/sections/Testimonials";
import WhyUs1 from "@/componets/sections/WhyUs1";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero2 />
        <WhyUs1 />
        <SeoAgency />
        <Services1 />
        <Services />
        <Team1 />
        <Cta6 />
        <Pricing />
        <Testimonials />
        <Blog1 />
      </Layout>
    </>
  );
}
