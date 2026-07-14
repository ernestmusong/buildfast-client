// app/products/collections/page.tsx

import ProductPageTemplate from
"@/components/product-page/ProductPageTemplate";

import { collectionsData }
from "@/data/products/collections";

export default function CollectionsPage() {
  return (
    <ProductPageTemplate
      product={collectionsData}
    />
  );
}