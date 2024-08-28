import { ReactComponent as OnlineStoreIcon } from "../pages/PreSignupPage/online_store-9cef8f5f0d278a021a053e31e014135a9e2a8dee2468da0aa551fe3ebd943331.svg"
import { ReactComponent as InPersonIcon } from '../pages/PreSignupPage/in_person-9975fc2611c3b7bd9dc1cd6910e74bd0226f8710877bb0c663ace31386827c32.svg'
import { ReactComponent as ExistingWebsiteIcon } from '../pages/PreSignupPage/existing_website-aabae8c453ed8a6698b8e0c1d146eba3f5bfbf20bd2f9096457424141d05ec45.svg'
import { ReactComponent as OnlineMarketplaceIcon } from '../pages/PreSignupPage/online_marketplace-46dcc76a3945b8e06b1ceb84ed06552c074b3793b803a7f8f08397524094e2b7.svg'
import {ReactComponent as SocialMediaIcon} from '../pages/PreSignupPage/social_media-c69d79db54b878c150dceee2404efe68621839752e8d81857d59c0b616e823ea.svg'

import { ReactComponent as ProductsIBuyIcon } from "../pages/PreSignupPage/physical_products.svg"
import { ReactComponent as DigitalProductsIcon } from "../pages/PreSignupPage/digital_products.svg"
import { ReactComponent as DropshippingProductsIcon } from "../pages/PreSignupPage/dropshipping.svg"
import { ReactComponent as ServicesIcon } from "../pages/PreSignupPage/services.svg"
import { ReactComponent as PrintOnDemandIcon } from "../pages/PreSignupPage/print_on_demand.svg"


export const preSignupOptions = [
  {
    step: 1,
    options: [
      {
        title: "An online store",
        description: "Create a fully customizable website",
        Icon: OnlineStoreIcon, // Replace with the actual SVG code or import statement
      },
      {
        title: "In person",
        description:
          "Sell at retail stores, pop-ups, or other physical locations",
        Icon: InPersonIcon,
      },
      {
        title: "An existing website or blog",
        description: "Add a Buy Button to your website",
        Icon: ExistingWebsiteIcon,
      },
      {
        title: "Social media",
        description: "Reach customers on Facebook, Instagram, TikTok, and more",
        Icon: SocialMediaIcon,
      },
      {
        title: "Online marketplaces",
        description: "List products on Etsy, Amazon, and more",
        Icon: OnlineMarketplaceIcon,
      },
      {
        title: "I'm not sure",
        description: "",
        // Icon: "<svg>...</svg>",
      },
    ],
  },
  {
    step: 2,
    options: [
      {
        title: "Products I buy or make myself",
        description: "Shipped by me",
        Icon: ProductsIBuyIcon,
      },
      {
        title: "Digital products",
        description: "Music, digital art, NFTs",
        Icon: DigitalProductsIcon,
      },
      {
        title: "Dropshipping products",
        description: "Sourced and shipped by a third party",
        Icon: DropshippingProductsIcon,
      },
      {
        title: "Services",
        description: "Coaching, housekeeping, consulting",
        Icon: ServicesIcon,
      },
      {
        title: "Print-on-demand products",
        description: "My designs, printed and shipped by a third party",
        Icon: PrintOnDemandIcon,
      },
      {
        title: "I'll decide later",
        description: "",
        // Icon: "<svg>...</svg>",
      },
    ],
  },
]
