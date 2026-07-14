import HeroSection from "./HeroSection";
import FlowSection from "./FlowSection";
import FeaturesSection from "./FeaturesSection";

import { ProductData } from "@/types/product";

type Props = {
  product: ProductData;
};

export default function ProductPageTemplate({
  product,
}: Props) {
    
  return (
    <>
      <HeroSection 
        heroTitle={product.heroTitle}
        heroDescription={product.heroDescription}
        badge={product.badge}
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

      {/* <ProductCTA
        title={product.ctaTitle}
        description={product.ctaDescription}
      /> */}
    </>
  );
}