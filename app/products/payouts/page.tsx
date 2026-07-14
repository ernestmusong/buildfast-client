import ProductPageTemplate from "@/components/product-page/ProductPageTemplate";
import { payoutsData } from "@/data/products/payouts";


export default function Page() {
  return (
    <ProductPageTemplate
      product={payoutsData}
    />
  );
}