import { PrismaClient } from "../server/generated/prisma-client-analytics/index.js";
import { setupPrismaEnv } from "./prisma-env.js";
import { fallbackStorefront } from "../client/src/data/storefrontData.js";

setupPrismaEnv();

const prisma = new PrismaClient();

const images = {
  hero:
    "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=1600&q=85",
  jars:
    "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=85",
  pouches:
    "https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?auto=format&fit=crop&w=1200&q=85",
  cartons:
    "https://images.unsplash.com/photo-1589756823695-278bc923f962?auto=format&fit=crop&w=1200&q=85",
  labels:
    "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=1200&q=85",
  closures:
    "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=1200&q=85",
  cans:
    "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=1200&q=85",
  shipper:
    "https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=1200&q=85",
  display:
    "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85",
  workOne:
    "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1400&q=85",
  workTwo:
    "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=1400&q=85"
};

async function main() {
  await prisma.siteSetting.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      brandName: "Fuel Packaging",
      logoText: "fuel packaging",
      contactEmail: "hello@fuelpkg.com",
      serviceArea: "United States - domestic and overseas production",
      footerDescription:
        "A full packaging stack for performance nutrition and nutraceutical brands. One partner. One schedule. One standard."
    }
  });

  await prisma.heroSection.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      eyebrow: "01 - Packaging for Performance Nutrition",
      headline: "Where performance meets the shelf.",
      subtitle:
        "Fuel Packaging partners with sports nutrition, supplement, nutraceutical and functional food brands to bring product programs to life from first sample to final shipper.",
      imageUrl: images.hero,
      imageAlt:
        "Premium performance nutrition packaging arranged as jars, pouches, sticks, cartons and bottles",
      primaryCtaLabel: "Start a project",
      primaryCtaUrl: "#contact"
    }
  });

  await prisma.capability.deleteMany();
  await prisma.capability.createMany({
    data: [
      {
        number: "01",
        title: "Rigid Containers",
        description: "Protein jars, capsule bottles, tubs, closures.",
        materials: "PET - HDPE - PP - Glass",
        imageUrl: images.jars,
        imageAlt: "Rigid supplement jars and cosmetic containers",
        sortOrder: 1
      },
      {
        number: "02",
        title: "Flexible Packaging",
        description: "Stand-up pouches, stick packs, sachets.",
        materials: "PET/PE - BOPP - Foil",
        imageUrl: images.pouches,
        imageAlt: "Flexible pouches and single serve product packaging",
        sortOrder: 2
      },
      {
        number: "03",
        title: "Folding Cartons",
        description: "SBS and kraft cartons with premium print finishes.",
        materials: "SBS - Kraft - Reverse tuck",
        imageUrl: images.cartons,
        imageAlt: "Premium folding carton packaging",
        sortOrder: 3
      },
      {
        number: "04",
        title: "Labels & Sleeves",
        description: "Pressure-sensitive labels and shrink sleeves.",
        materials: "Paper - BOPP - Clear - Metallic",
        imageUrl: images.labels,
        imageAlt: "Product labels on packaged goods",
        sortOrder: 4
      },
      {
        number: "05",
        title: "Closures & Seals",
        description: "Lids, caps, induction seals and tamper-evident systems.",
        materials: "CR - Smooth - Ribbed - Foil",
        imageUrl: images.closures,
        imageAlt: "Bottle closures and sealed containers",
        sortOrder: 5
      },
      {
        number: "06",
        title: "Ready-to-Drink",
        description: "Cans, bottles and sport formats filled, labeled and shipped.",
        materials: "Aluminum - Glass - PET",
        imageUrl: images.cans,
        imageAlt: "Beverage cans and ready to drink bottles",
        sortOrder: 6
      },
      {
        number: "07",
        title: "Shippers & Inserts",
        description: "Mailers, master cases and molded-fiber inserts.",
        materials: "Corrugate - Molded fiber",
        imageUrl: images.shipper,
        imageAlt: "Shipping cartons and ecommerce packaging",
        sortOrder: 7
      },
      {
        number: "08",
        title: "Shelf Displays",
        description: "Counter-top dispensers, PDQs and floor displays.",
        materials: "Counter - PDQ - FSDU",
        imageUrl: images.display,
        imageAlt: "Retail shelf display for packaged products",
        sortOrder: 8
      }
    ]
  });

  await prisma.workItem.deleteMany();
  await prisma.workItem.createMany({
    data: [
      {
        number: "001",
        category: "Multi-format program",
        title: "Daily nutrition system",
        description:
          "A coordinated launch kit across jars, cartons, pouches and shipping formats.",
        imageUrl: images.workOne,
        imageAlt: "Overhead layout of coordinated product packaging",
        sortOrder: 1
      },
      {
        number: "002",
        category: "Flexible packaging",
        title: "Single-serve stick packs",
        description:
          "Foil stick packs engineered for serving accuracy, shelf presence and quick fulfillment.",
        imageUrl: images.workTwo,
        imageAlt: "Single serve packaging displayed in production setting",
        sortOrder: 2
      }
    ]
  });

  await prisma.faq.deleteMany();
  await prisma.faq.createMany({
    data: [
      {
        question: "What does Fuel Packaging do?",
        answer:
          "Fuel Packaging is a full-stack packaging partner for performance nutrition, supplement, nutraceutical and functional food brands. We supply rigid containers, flexible packaging, folding cartons, labels, closures, RTD cans and bottles, shippers, retail displays and fulfillment kitting.",
        sortOrder: 1
      },
      {
        question: "Who do you typically work with?",
        answer:
          "We partner with emerging labels launching their first SKU and established brands scaling national distribution.",
        sortOrder: 2
      },
      {
        question: "Can you handle domestic and overseas production?",
        answer:
          "Yes. Programs can be sourced through qualified domestic and overseas suppliers based on volume, lead time and finish requirements.",
        sortOrder: 3
      },
      {
        question: "What minimum order quantities do you support?",
        answer:
          "MOQs vary by format. Stick packs and pouches commonly begin around 25,000 units, jars and bottles around 5,000 to 10,000 units, and folding cartons around 2,500 units.",
        sortOrder: 4
      },
      {
        question: "Do you provide compliance documentation?",
        answer:
          "Yes. Lots can ship with documentation for food-contact, FDA, supplement-grade and nutraceutical requirements where applicable.",
        sortOrder: 5
      }
    ]
  });

  await prisma.storeSetting.upsert({
    where: { id: 1 },
    update: fallbackStorefront.settings,
    create: {
      id: 1,
      ...fallbackStorefront.settings
    }
  });

  await prisma.storeContent.upsert({
    where: { id: 1 },
    update: fallbackStorefront.content,
    create: {
      id: 1,
      ...fallbackStorefront.content
    }
  });

  await prisma.storeCategory.deleteMany();
  await prisma.storeCategory.createMany({
    data: fallbackStorefront.categories.map((category, index) => ({
      label: category.label,
      slug: category.slug,
      href: category.href,
      seoTitle: `${category.label} Menu | FUELPACKS`,
      seoDescription: `Browse ${category.label.toLowerCase()} products from FUELPACKS with active availability, variants, pricing, and sales rep handoff.`,
      seoIntro: `Browse ${category.label.toLowerCase()} from today's active supply. Pick a product, choose a variation, and send your cart request to the sales rep.`,
      canonicalUrl: category.slug === "all" ? "/menu" : `/menu/${category.slug}`,
      featured: Boolean(category.featured),
      sortOrder: index + 1
    }))
  });

  await prisma.storeProduct.deleteMany();
  await prisma.storeProduct.createMany({
    data: fallbackStorefront.products.map((product, index) => ({
      title: product.title,
      slug: product.slug,
      category: product.category,
      categorySlug: product.categorySlug,
      price: product.price,
      tag: product.tag,
      inventory: product.inventory,
      status: product.status,
      image: product.image,
      gallery: product.gallery,
      variants: product.variants,
      hues: product.hues,
      description:
        product.description ||
        `${product.title} is part of the active FUELPACKS menu. Review available variants, pricing, inventory, and product images before adding it to your cart request for sales rep confirmation.`,
      seoTitle: `${product.title} | FUELPACKS`,
      seoDescription: `View ${product.title} from FUELPACKS. Check price, availability, variants, images, and send an order request to the sales rep.`,
      seoKeywords: `${product.title}, ${product.category}, FUELPACKS`,
      seoFocusKeyphrase: product.title.replace(/^#\w+\s+/, ""),
      imageAlt: `${product.title} product image`,
      brand: "FUELPACKS",
      sku: product.slug,
      sortOrder: index + 1
    }))
  });

  await prisma.storeFaq.deleteMany();
  await prisma.storeFaq.createMany({
    data: fallbackStorefront.faqs.map((faq, index) => ({
      question: faq.question,
      answer: faq.answer,
      sortOrder: index + 1
    }))
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log("Database seeded.");
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
