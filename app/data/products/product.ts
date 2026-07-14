// types/product.ts

import { ReactElement } from "react";

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
  badgeIcon: any

  heroTitle: string;
  heroDescription: string;

  features: ProductFeature[];

  flowSteps: ProductFlowStep[];

  apiExample: ProductApiExample;

  useCases: string[];

  ctaTitle: string;
  ctaDescription: string;
}