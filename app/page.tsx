import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ReferenceStrip from "@/components/ReferenceStrip";
import Features from "@/components/Features";
import Band from "@/components/Band";
import HowItWorks from "@/components/HowItWorks";
import Screenshots from "@/components/Screenshots";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className="page" id="top">
            <div className="sheet">
                <Navbar />
                <main>
                    <Hero />
                    <ReferenceStrip />
                    <Features />
                    <Band />
                    <HowItWorks />
                    {/* <Screenshots /> */}
                    <Testimonials />
                    <Pricing />
                    <Faq />
                    <Waitlist />
                </main>
                <Footer />
            </div>
        </div>
    );
}
