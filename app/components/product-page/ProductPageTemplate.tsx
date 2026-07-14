import HeroSection from "./HeroSection";
import FlowSection from "./FlowSection";
import FeaturesSection from "./FeaturesSection";

import { ProductData } from "@/types/product";
import { ReactElement } from "react";
import CTASection from "./CTASection";

type Props = {
  product: ProductData;
  badgeIcon: ReactElement
};

export default function ProductPageTemplate({
  product,
  badgeIcon
}: Props) {
    
  return (
    <>
      <HeroSection 
        heroTitle={product.heroTitle}
        heroDescription={product.heroDescription}
        badge={product.badge}
        badgeIcon={badgeIcon}
        />

      {/* <ProductFeatures
        features={product.features}
      /> */}

      {/* <ProductFlow
        steps={product.flowSteps}
      /> */}

      {/* <ProductApiExample
        example={product.apiExample}
      /> */}

      {/* <ProductUseCases
        useCases={product.useCases}
      /> */}

      <CTASection
        ctaTitle={product.ctaTitle}
        ctaDescription={product.ctaDescription}
      />
    </>
  );
}