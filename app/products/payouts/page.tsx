import ProductPageTemplate from "@/components/product-page/ProductPageTemplate";
import { payoutsData } from "@/data/products/payouts";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";


export default function Page() {
  return (
    <ProductPageTemplate
      product={payoutsData}
      badgeIcon={<AccountBalanceWalletOutlinedIcon/>}
    />
  );
}