import Hero from "./components/home/hero/Hero";
import Features from "./components/home/features/Features";
import Developer from "./components/home/developer/Developer";
import Security from "./components/home/security/Security";
import DashboardPreview from "./components/dashboard/dashboard-preview/DashboardPreview";

export default function Home() {
  return (
     <>
     <Hero/>
     <Features/>
     <Developer/>
     <Security/>
     </>
  )
}
