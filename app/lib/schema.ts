import { PRODUCTS, SITE_URL } from "./site";

export const SCHEMA_IDS = {
  website: `${SITE_URL}/#website`,
  agency: `${SITE_URL}/#agency`,
  billy: `${SITE_URL}/#billy-lush`,
};

export function insuranceOfferCatalog() {
  return {
    "@type": "OfferCatalog",
    name: "Life insurance options",
    itemListElement: PRODUCTS.map((product) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: product.title,
        description: product.body,
      },
    })),
  };
}

export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
