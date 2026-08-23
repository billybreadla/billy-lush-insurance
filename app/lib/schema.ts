import {
  AGENCY_ADDRESS,
  BAKERY,
  FACTS,
  IMDB_URL,
  PRODUCTS,
  SITE_URL,
  WIKIPEDIA_URL,
} from "./site";

export const SCHEMA_IDS = {
  website: `${SITE_URL}/#website`,
  agency: `${SITE_URL}/#agency`,
  billy: `${SITE_URL}/#billy-lush`,
  primaryImage: `${SITE_URL}/#primaryimage`,
  billyBread: `${BAKERY.site}/#organization`,
};

export function billyBreadOrganization() {
  return {
    "@type": "Organization",
    "@id": SCHEMA_IDS.billyBread,
    name: "Billy Bread",
    url: BAKERY.site,
  };
}

/* The primary image of the site, declared once on the homepage and
   referenced by @id from every other page via insuranceAgency(). */
export function primaryImageObject() {
  return {
    "@type": "ImageObject",
    "@id": SCHEMA_IDS.primaryImage,
    url: `${SITE_URL}/images/billy-conejo-hills.jpg`,
    width: { "@type": "QuantitativeValue", value: 1201, unitText: "pixels" },
    height: { "@type": "QuantitativeValue", value: 1800, unitText: "pixels" },
    caption:
      "Billy Lush, licensed life insurance agent, in the hills of the Conejo Valley near Newbury Park",
  };
}

function agencyEmployee() {
  return {
    "@type": "Person",
    "@id": SCHEMA_IDS.billy,
    name: "Billy Lush",
    jobTitle: "Licensed Life Insurance Agent",
    sameAs: [IMDB_URL, WIKIPEDIA_URL],
    owns: { "@id": SCHEMA_IDS.billyBread },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "license",
        name: "California Life Insurance Agent License",
        identifier: FACTS.caLicenseNo,
        recognizedBy: { "@type": "Organization", name: "California Department of Insurance" },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "license",
        name: "Texas Life Insurance Agent License",
        identifier: FACTS.txLicenseNo,
        recognizedBy: { "@type": "Organization", name: "Texas Department of Insurance" },
      },
    ],
  };
}

/* The one canonical InsuranceAgency node. Every page emits this same
   object under the same @id (plus its own areaServed), so search
   engines unify the graph instead of seeing competing fragments.
   Pass areaServed to scope it per page; omit it entirely on pages
   that only reference the node by @id. */
export function insuranceAgency(areaServed?: unknown) {
  return {
    "@type": "InsuranceAgency",
    "@id": SCHEMA_IDS.agency,
    name: "Billy Lush Insurance",
    url: SITE_URL,
    image: { "@id": SCHEMA_IDS.primaryImage },
    telephone: FACTS.phoneE164,
    email: FACTS.email,
    employee: agencyEmployee(),
    address: {
      "@type": "PostalAddress",
      addressLocality: AGENCY_ADDRESS.locality,
      addressRegion: AGENCY_ADDRESS.region,
      postalCode: AGENCY_ADDRESS.postalCode,
      addressCountry: AGENCY_ADDRESS.country,
    },
    ...(areaServed === undefined ? {} : { areaServed }),
    knowsAbout: [
      "Term life insurance",
      "Whole life insurance",
      "Final expense insurance",
      "Indexed universal life insurance",
    ],
    hasOfferCatalog: insuranceOfferCatalog(),
  };
}

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
