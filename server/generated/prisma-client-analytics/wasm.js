
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.SiteSettingScalarFieldEnum = {
  id: 'id',
  brandName: 'brandName',
  logoText: 'logoText',
  contactEmail: 'contactEmail',
  serviceArea: 'serviceArea',
  footerDescription: 'footerDescription',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.HeroSectionScalarFieldEnum = {
  id: 'id',
  eyebrow: 'eyebrow',
  headline: 'headline',
  subtitle: 'subtitle',
  imageUrl: 'imageUrl',
  imageAlt: 'imageAlt',
  primaryCtaLabel: 'primaryCtaLabel',
  primaryCtaUrl: 'primaryCtaUrl',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CapabilityScalarFieldEnum = {
  id: 'id',
  number: 'number',
  title: 'title',
  description: 'description',
  materials: 'materials',
  imageUrl: 'imageUrl',
  imageAlt: 'imageAlt',
  sortOrder: 'sortOrder',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.WorkItemScalarFieldEnum = {
  id: 'id',
  number: 'number',
  category: 'category',
  title: 'title',
  description: 'description',
  imageUrl: 'imageUrl',
  imageAlt: 'imageAlt',
  sortOrder: 'sortOrder',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.FaqScalarFieldEnum = {
  id: 'id',
  question: 'question',
  answer: 'answer',
  sortOrder: 'sortOrder',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MediaAssetScalarFieldEnum = {
  id: 'id',
  cloudinaryPublicId: 'cloudinaryPublicId',
  url: 'url',
  altText: 'altText',
  assetType: 'assetType',
  createdAt: 'createdAt'
};

exports.Prisma.QuoteRequestScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  company: 'company',
  phone: 'phone',
  skuDetails: 'skuDetails',
  timeline: 'timeline',
  message: 'message',
  createdAt: 'createdAt'
};

exports.Prisma.StoreSettingScalarFieldEnum = {
  id: 'id',
  brandName: 'brandName',
  logoUrl: 'logoUrl',
  metaTitle: 'metaTitle',
  metaDescription: 'metaDescription',
  ogDescription: 'ogDescription',
  seoKeywords: 'seoKeywords',
  searchConsoleId: 'searchConsoleId',
  gaMeasurementId: 'gaMeasurementId',
  bingVerifyId: 'bingVerifyId',
  marquee: 'marquee',
  footerText: 'footerText',
  contactEmail: 'contactEmail',
  checkoutMode: 'checkoutMode',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StoreContentScalarFieldEnum = {
  id: 'id',
  heroEyebrow: 'heroEyebrow',
  heroLineOne: 'heroLineOne',
  heroLineTwo: 'heroLineTwo',
  heroLineThree: 'heroLineThree',
  heroCopy: 'heroCopy',
  primaryCta: 'primaryCta',
  secondaryCta: 'secondaryCta',
  dropsEyebrow: 'dropsEyebrow',
  dropsTitle: 'dropsTitle',
  menuTitle: 'menuTitle',
  menuCopy: 'menuCopy',
  faqTitle: 'faqTitle',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StoreCategoryScalarFieldEnum = {
  id: 'id',
  label: 'label',
  slug: 'slug',
  href: 'href',
  seoTitle: 'seoTitle',
  seoDescription: 'seoDescription',
  seoIntro: 'seoIntro',
  canonicalUrl: 'canonicalUrl',
  featured: 'featured',
  sortOrder: 'sortOrder',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StoreProductScalarFieldEnum = {
  id: 'id',
  title: 'title',
  slug: 'slug',
  category: 'category',
  categorySlug: 'categorySlug',
  price: 'price',
  tag: 'tag',
  inventory: 'inventory',
  status: 'status',
  image: 'image',
  gallery: 'gallery',
  variants: 'variants',
  hues: 'hues',
  description: 'description',
  seoTitle: 'seoTitle',
  seoDescription: 'seoDescription',
  seoKeywords: 'seoKeywords',
  canonicalUrl: 'canonicalUrl',
  imageAlt: 'imageAlt',
  brand: 'brand',
  sku: 'sku',
  reviewRating: 'reviewRating',
  reviewCount: 'reviewCount',
  seoFocusKeyphrase: 'seoFocusKeyphrase',
  sortOrder: 'sortOrder',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StoreFaqScalarFieldEnum = {
  id: 'id',
  question: 'question',
  answer: 'answer',
  sortOrder: 'sortOrder',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StoreOrderScalarFieldEnum = {
  id: 'id',
  customer: 'customer',
  email: 'email',
  phone: 'phone',
  status: 'status',
  total: 'total',
  items: 'items',
  notes: 'notes',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StoreAnalyticsEventScalarFieldEnum = {
  id: 'id',
  type: 'type',
  path: 'path',
  title: 'title',
  productSlug: 'productSlug',
  productName: 'productName',
  referrer: 'referrer',
  userAgent: 'userAgent',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};


exports.Prisma.ModelName = {
  SiteSetting: 'SiteSetting',
  HeroSection: 'HeroSection',
  Capability: 'Capability',
  WorkItem: 'WorkItem',
  Faq: 'Faq',
  MediaAsset: 'MediaAsset',
  QuoteRequest: 'QuoteRequest',
  StoreSetting: 'StoreSetting',
  StoreContent: 'StoreContent',
  StoreCategory: 'StoreCategory',
  StoreProduct: 'StoreProduct',
  StoreFaq: 'StoreFaq',
  StoreOrder: 'StoreOrder',
  StoreAnalyticsEvent: 'StoreAnalyticsEvent'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
