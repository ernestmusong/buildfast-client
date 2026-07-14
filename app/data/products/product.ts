// types/product.ts

export interface ProductFeature {
  title: string;
  description: string;
}

export interface ProductApiExample {
  title: string;
  language: string;
  code: string;
}

export interface ProductFlowStep {
  label: string;
}

export interface ProductData {
  slug: string;

  seoTitle: string;
  seoDescription: string;
  keywords: string[];

  badge: string;

  heroTitle: string;
  heroDescription: string;

  features: ProductFeature[];

  flowSteps: ProductFlowStep[];

  apiExample: ProductApiExample;

  useCases: string[];

  ctaTitle: string;
  ctaDescription: string;
}