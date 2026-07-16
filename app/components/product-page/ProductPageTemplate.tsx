import HeroSection from "./HeroSection";
import FlowSection from "./FlowSection";
import FeaturesSection from "./FeaturesSection";

import { ProductData } from "@/types/products/product";
import { ReactElement } from "react";
import CTASection from "./CTASection";
import UseCasesSection from "./UseCasesSection";

type Props = {
  product: ProductData;
  badgeIcon: ReactElement
};

export default function ProductPageTemplate({
  product,
  badgeIcon
}: Props) {
    
  return (
    <main>
      <HeroSection 
        heroTitle={product.heroTitle}
        heroDescription={product.heroDescription}
        badge={product.badge}
        badgeIcon={badgeIcon}
        />

      <FeaturesSection
        features={product.features}
      />

      <FlowSection
        steps={product.flowSteps}
      />

      {/* <ProductApiExample
        example={product.apiExample}
      /> */}

      <UseCasesSection
        cases={product.useCases}
      />

      <CTASection
        ctaTitle={product.ctaTitle}
        ctaDescription={product.ctaDescription}
      />
    </main>
  );
}