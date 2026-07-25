import ContactHero from "@/components/contact/ContactHero";
import ContactOptions from "@/components/contact/ContactOptions";
import ContactForm from "@/components/contact/ContactForm";
import OfficeInformation from "@/components/contact/OfficeInformation";
import SupportChannels from "@/components/contact/SupportChannels";
import FAQSection from "@/components/contact/FAQSection";
import CTASection from "@/components/contact/CTASection";

export const metadata = {
  title: "Contact BuildFast",
  description:
    "Get in touch with the BuildFast team for sales, technical support, merchant verification, partnerships, and general enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <ContactOptions />

      <ContactForm />
 
      <OfficeInformation />

      <SupportChannels />

      <FAQSection />

      <CTASection />
    </>
  );
}