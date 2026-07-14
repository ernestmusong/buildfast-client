import ProductPageTemplate from
"@/components/product-page/ProductPageTemplate";
import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined';

import { collectionsData }
from "@/data/products/collections";

export default function CollectionsPage() {
  return (
    <ProductPageTemplate
      product={collectionsData}
      badgeIcon={<CollectionsBookmarkOutlinedIcon/>}
    />
  );
}