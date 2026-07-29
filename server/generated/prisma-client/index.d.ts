
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model SiteSetting
 * 
 */
export type SiteSetting = $Result.DefaultSelection<Prisma.$SiteSettingPayload>
/**
 * Model HeroSection
 * 
 */
export type HeroSection = $Result.DefaultSelection<Prisma.$HeroSectionPayload>
/**
 * Model Capability
 * 
 */
export type Capability = $Result.DefaultSelection<Prisma.$CapabilityPayload>
/**
 * Model WorkItem
 * 
 */
export type WorkItem = $Result.DefaultSelection<Prisma.$WorkItemPayload>
/**
 * Model Faq
 * 
 */
export type Faq = $Result.DefaultSelection<Prisma.$FaqPayload>
/**
 * Model MediaAsset
 * 
 */
export type MediaAsset = $Result.DefaultSelection<Prisma.$MediaAssetPayload>
/**
 * Model QuoteRequest
 * 
 */
export type QuoteRequest = $Result.DefaultSelection<Prisma.$QuoteRequestPayload>
/**
 * Model StoreSetting
 * 
 */
export type StoreSetting = $Result.DefaultSelection<Prisma.$StoreSettingPayload>
/**
 * Model StoreContent
 * 
 */
export type StoreContent = $Result.DefaultSelection<Prisma.$StoreContentPayload>
/**
 * Model StoreCategory
 * 
 */
export type StoreCategory = $Result.DefaultSelection<Prisma.$StoreCategoryPayload>
/**
 * Model StoreProduct
 * 
 */
export type StoreProduct = $Result.DefaultSelection<Prisma.$StoreProductPayload>
/**
 * Model StoreFaq
 * 
 */
export type StoreFaq = $Result.DefaultSelection<Prisma.$StoreFaqPayload>
/**
 * Model StoreOrder
 * 
 */
export type StoreOrder = $Result.DefaultSelection<Prisma.$StoreOrderPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more SiteSettings
 * const siteSettings = await prisma.siteSetting.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more SiteSettings
   * const siteSettings = await prisma.siteSetting.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.siteSetting`: Exposes CRUD operations for the **SiteSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SiteSettings
    * const siteSettings = await prisma.siteSetting.findMany()
    * ```
    */
  get siteSetting(): Prisma.SiteSettingDelegate<ExtArgs>;

  /**
   * `prisma.heroSection`: Exposes CRUD operations for the **HeroSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HeroSections
    * const heroSections = await prisma.heroSection.findMany()
    * ```
    */
  get heroSection(): Prisma.HeroSectionDelegate<ExtArgs>;

  /**
   * `prisma.capability`: Exposes CRUD operations for the **Capability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Capabilities
    * const capabilities = await prisma.capability.findMany()
    * ```
    */
  get capability(): Prisma.CapabilityDelegate<ExtArgs>;

  /**
   * `prisma.workItem`: Exposes CRUD operations for the **WorkItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkItems
    * const workItems = await prisma.workItem.findMany()
    * ```
    */
  get workItem(): Prisma.WorkItemDelegate<ExtArgs>;

  /**
   * `prisma.faq`: Exposes CRUD operations for the **Faq** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Faqs
    * const faqs = await prisma.faq.findMany()
    * ```
    */
  get faq(): Prisma.FaqDelegate<ExtArgs>;

  /**
   * `prisma.mediaAsset`: Exposes CRUD operations for the **MediaAsset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MediaAssets
    * const mediaAssets = await prisma.mediaAsset.findMany()
    * ```
    */
  get mediaAsset(): Prisma.MediaAssetDelegate<ExtArgs>;

  /**
   * `prisma.quoteRequest`: Exposes CRUD operations for the **QuoteRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuoteRequests
    * const quoteRequests = await prisma.quoteRequest.findMany()
    * ```
    */
  get quoteRequest(): Prisma.QuoteRequestDelegate<ExtArgs>;

  /**
   * `prisma.storeSetting`: Exposes CRUD operations for the **StoreSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StoreSettings
    * const storeSettings = await prisma.storeSetting.findMany()
    * ```
    */
  get storeSetting(): Prisma.StoreSettingDelegate<ExtArgs>;

  /**
   * `prisma.storeContent`: Exposes CRUD operations for the **StoreContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StoreContents
    * const storeContents = await prisma.storeContent.findMany()
    * ```
    */
  get storeContent(): Prisma.StoreContentDelegate<ExtArgs>;

  /**
   * `prisma.storeCategory`: Exposes CRUD operations for the **StoreCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StoreCategories
    * const storeCategories = await prisma.storeCategory.findMany()
    * ```
    */
  get storeCategory(): Prisma.StoreCategoryDelegate<ExtArgs>;

  /**
   * `prisma.storeProduct`: Exposes CRUD operations for the **StoreProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StoreProducts
    * const storeProducts = await prisma.storeProduct.findMany()
    * ```
    */
  get storeProduct(): Prisma.StoreProductDelegate<ExtArgs>;

  /**
   * `prisma.storeFaq`: Exposes CRUD operations for the **StoreFaq** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StoreFaqs
    * const storeFaqs = await prisma.storeFaq.findMany()
    * ```
    */
  get storeFaq(): Prisma.StoreFaqDelegate<ExtArgs>;

  /**
   * `prisma.storeOrder`: Exposes CRUD operations for the **StoreOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StoreOrders
    * const storeOrders = await prisma.storeOrder.findMany()
    * ```
    */
  get storeOrder(): Prisma.StoreOrderDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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
    StoreOrder: 'StoreOrder'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "siteSetting" | "heroSection" | "capability" | "workItem" | "faq" | "mediaAsset" | "quoteRequest" | "storeSetting" | "storeContent" | "storeCategory" | "storeProduct" | "storeFaq" | "storeOrder"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      SiteSetting: {
        payload: Prisma.$SiteSettingPayload<ExtArgs>
        fields: Prisma.SiteSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiteSettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiteSettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload>
          }
          findFirst: {
            args: Prisma.SiteSettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiteSettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload>
          }
          findMany: {
            args: Prisma.SiteSettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload>[]
          }
          create: {
            args: Prisma.SiteSettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload>
          }
          createMany: {
            args: Prisma.SiteSettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SiteSettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload>
          }
          update: {
            args: Prisma.SiteSettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload>
          }
          deleteMany: {
            args: Prisma.SiteSettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiteSettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SiteSettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload>
          }
          aggregate: {
            args: Prisma.SiteSettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSiteSetting>
          }
          groupBy: {
            args: Prisma.SiteSettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiteSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiteSettingCountArgs<ExtArgs>
            result: $Utils.Optional<SiteSettingCountAggregateOutputType> | number
          }
        }
      }
      HeroSection: {
        payload: Prisma.$HeroSectionPayload<ExtArgs>
        fields: Prisma.HeroSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HeroSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HeroSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroSectionPayload>
          }
          findFirst: {
            args: Prisma.HeroSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HeroSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroSectionPayload>
          }
          findMany: {
            args: Prisma.HeroSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroSectionPayload>[]
          }
          create: {
            args: Prisma.HeroSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroSectionPayload>
          }
          createMany: {
            args: Prisma.HeroSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HeroSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroSectionPayload>
          }
          update: {
            args: Prisma.HeroSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroSectionPayload>
          }
          deleteMany: {
            args: Prisma.HeroSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HeroSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HeroSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroSectionPayload>
          }
          aggregate: {
            args: Prisma.HeroSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHeroSection>
          }
          groupBy: {
            args: Prisma.HeroSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<HeroSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.HeroSectionCountArgs<ExtArgs>
            result: $Utils.Optional<HeroSectionCountAggregateOutputType> | number
          }
        }
      }
      Capability: {
        payload: Prisma.$CapabilityPayload<ExtArgs>
        fields: Prisma.CapabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CapabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CapabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapabilityPayload>
          }
          findFirst: {
            args: Prisma.CapabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CapabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapabilityPayload>
          }
          findMany: {
            args: Prisma.CapabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapabilityPayload>[]
          }
          create: {
            args: Prisma.CapabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapabilityPayload>
          }
          createMany: {
            args: Prisma.CapabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CapabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapabilityPayload>
          }
          update: {
            args: Prisma.CapabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapabilityPayload>
          }
          deleteMany: {
            args: Prisma.CapabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CapabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CapabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapabilityPayload>
          }
          aggregate: {
            args: Prisma.CapabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCapability>
          }
          groupBy: {
            args: Prisma.CapabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<CapabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CapabilityCountArgs<ExtArgs>
            result: $Utils.Optional<CapabilityCountAggregateOutputType> | number
          }
        }
      }
      WorkItem: {
        payload: Prisma.$WorkItemPayload<ExtArgs>
        fields: Prisma.WorkItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemPayload>
          }
          findFirst: {
            args: Prisma.WorkItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemPayload>
          }
          findMany: {
            args: Prisma.WorkItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemPayload>[]
          }
          create: {
            args: Prisma.WorkItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemPayload>
          }
          createMany: {
            args: Prisma.WorkItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WorkItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemPayload>
          }
          update: {
            args: Prisma.WorkItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemPayload>
          }
          deleteMany: {
            args: Prisma.WorkItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkItemPayload>
          }
          aggregate: {
            args: Prisma.WorkItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkItem>
          }
          groupBy: {
            args: Prisma.WorkItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkItemCountArgs<ExtArgs>
            result: $Utils.Optional<WorkItemCountAggregateOutputType> | number
          }
        }
      }
      Faq: {
        payload: Prisma.$FaqPayload<ExtArgs>
        fields: Prisma.FaqFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FaqFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FaqFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>
          }
          findFirst: {
            args: Prisma.FaqFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FaqFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>
          }
          findMany: {
            args: Prisma.FaqFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>[]
          }
          create: {
            args: Prisma.FaqCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>
          }
          createMany: {
            args: Prisma.FaqCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FaqDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>
          }
          update: {
            args: Prisma.FaqUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>
          }
          deleteMany: {
            args: Prisma.FaqDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FaqUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FaqUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>
          }
          aggregate: {
            args: Prisma.FaqAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFaq>
          }
          groupBy: {
            args: Prisma.FaqGroupByArgs<ExtArgs>
            result: $Utils.Optional<FaqGroupByOutputType>[]
          }
          count: {
            args: Prisma.FaqCountArgs<ExtArgs>
            result: $Utils.Optional<FaqCountAggregateOutputType> | number
          }
        }
      }
      MediaAsset: {
        payload: Prisma.$MediaAssetPayload<ExtArgs>
        fields: Prisma.MediaAssetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaAssetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAssetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaAssetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAssetPayload>
          }
          findFirst: {
            args: Prisma.MediaAssetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAssetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaAssetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAssetPayload>
          }
          findMany: {
            args: Prisma.MediaAssetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAssetPayload>[]
          }
          create: {
            args: Prisma.MediaAssetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAssetPayload>
          }
          createMany: {
            args: Prisma.MediaAssetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MediaAssetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAssetPayload>
          }
          update: {
            args: Prisma.MediaAssetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAssetPayload>
          }
          deleteMany: {
            args: Prisma.MediaAssetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaAssetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MediaAssetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAssetPayload>
          }
          aggregate: {
            args: Prisma.MediaAssetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMediaAsset>
          }
          groupBy: {
            args: Prisma.MediaAssetGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaAssetGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaAssetCountArgs<ExtArgs>
            result: $Utils.Optional<MediaAssetCountAggregateOutputType> | number
          }
        }
      }
      QuoteRequest: {
        payload: Prisma.$QuoteRequestPayload<ExtArgs>
        fields: Prisma.QuoteRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuoteRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuoteRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteRequestPayload>
          }
          findFirst: {
            args: Prisma.QuoteRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuoteRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteRequestPayload>
          }
          findMany: {
            args: Prisma.QuoteRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteRequestPayload>[]
          }
          create: {
            args: Prisma.QuoteRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteRequestPayload>
          }
          createMany: {
            args: Prisma.QuoteRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuoteRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteRequestPayload>
          }
          update: {
            args: Prisma.QuoteRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteRequestPayload>
          }
          deleteMany: {
            args: Prisma.QuoteRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuoteRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuoteRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteRequestPayload>
          }
          aggregate: {
            args: Prisma.QuoteRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuoteRequest>
          }
          groupBy: {
            args: Prisma.QuoteRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuoteRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuoteRequestCountArgs<ExtArgs>
            result: $Utils.Optional<QuoteRequestCountAggregateOutputType> | number
          }
        }
      }
      StoreSetting: {
        payload: Prisma.$StoreSettingPayload<ExtArgs>
        fields: Prisma.StoreSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreSettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreSettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreSettingPayload>
          }
          findFirst: {
            args: Prisma.StoreSettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreSettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreSettingPayload>
          }
          findMany: {
            args: Prisma.StoreSettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreSettingPayload>[]
          }
          create: {
            args: Prisma.StoreSettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreSettingPayload>
          }
          createMany: {
            args: Prisma.StoreSettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StoreSettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreSettingPayload>
          }
          update: {
            args: Prisma.StoreSettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreSettingPayload>
          }
          deleteMany: {
            args: Prisma.StoreSettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoreSettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StoreSettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreSettingPayload>
          }
          aggregate: {
            args: Prisma.StoreSettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStoreSetting>
          }
          groupBy: {
            args: Prisma.StoreSettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreSettingCountArgs<ExtArgs>
            result: $Utils.Optional<StoreSettingCountAggregateOutputType> | number
          }
        }
      }
      StoreContent: {
        payload: Prisma.$StoreContentPayload<ExtArgs>
        fields: Prisma.StoreContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreContentPayload>
          }
          findFirst: {
            args: Prisma.StoreContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreContentPayload>
          }
          findMany: {
            args: Prisma.StoreContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreContentPayload>[]
          }
          create: {
            args: Prisma.StoreContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreContentPayload>
          }
          createMany: {
            args: Prisma.StoreContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StoreContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreContentPayload>
          }
          update: {
            args: Prisma.StoreContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreContentPayload>
          }
          deleteMany: {
            args: Prisma.StoreContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoreContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StoreContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreContentPayload>
          }
          aggregate: {
            args: Prisma.StoreContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStoreContent>
          }
          groupBy: {
            args: Prisma.StoreContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreContentCountArgs<ExtArgs>
            result: $Utils.Optional<StoreContentCountAggregateOutputType> | number
          }
        }
      }
      StoreCategory: {
        payload: Prisma.$StoreCategoryPayload<ExtArgs>
        fields: Prisma.StoreCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreCategoryPayload>
          }
          findFirst: {
            args: Prisma.StoreCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreCategoryPayload>
          }
          findMany: {
            args: Prisma.StoreCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreCategoryPayload>[]
          }
          create: {
            args: Prisma.StoreCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreCategoryPayload>
          }
          createMany: {
            args: Prisma.StoreCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StoreCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreCategoryPayload>
          }
          update: {
            args: Prisma.StoreCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreCategoryPayload>
          }
          deleteMany: {
            args: Prisma.StoreCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoreCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StoreCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreCategoryPayload>
          }
          aggregate: {
            args: Prisma.StoreCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStoreCategory>
          }
          groupBy: {
            args: Prisma.StoreCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<StoreCategoryCountAggregateOutputType> | number
          }
        }
      }
      StoreProduct: {
        payload: Prisma.$StoreProductPayload<ExtArgs>
        fields: Prisma.StoreProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreProductPayload>
          }
          findFirst: {
            args: Prisma.StoreProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreProductPayload>
          }
          findMany: {
            args: Prisma.StoreProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreProductPayload>[]
          }
          create: {
            args: Prisma.StoreProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreProductPayload>
          }
          createMany: {
            args: Prisma.StoreProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StoreProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreProductPayload>
          }
          update: {
            args: Prisma.StoreProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreProductPayload>
          }
          deleteMany: {
            args: Prisma.StoreProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoreProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StoreProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreProductPayload>
          }
          aggregate: {
            args: Prisma.StoreProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStoreProduct>
          }
          groupBy: {
            args: Prisma.StoreProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreProductCountArgs<ExtArgs>
            result: $Utils.Optional<StoreProductCountAggregateOutputType> | number
          }
        }
      }
      StoreFaq: {
        payload: Prisma.$StoreFaqPayload<ExtArgs>
        fields: Prisma.StoreFaqFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreFaqFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreFaqPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreFaqFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreFaqPayload>
          }
          findFirst: {
            args: Prisma.StoreFaqFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreFaqPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreFaqFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreFaqPayload>
          }
          findMany: {
            args: Prisma.StoreFaqFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreFaqPayload>[]
          }
          create: {
            args: Prisma.StoreFaqCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreFaqPayload>
          }
          createMany: {
            args: Prisma.StoreFaqCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StoreFaqDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreFaqPayload>
          }
          update: {
            args: Prisma.StoreFaqUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreFaqPayload>
          }
          deleteMany: {
            args: Prisma.StoreFaqDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoreFaqUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StoreFaqUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreFaqPayload>
          }
          aggregate: {
            args: Prisma.StoreFaqAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStoreFaq>
          }
          groupBy: {
            args: Prisma.StoreFaqGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreFaqGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreFaqCountArgs<ExtArgs>
            result: $Utils.Optional<StoreFaqCountAggregateOutputType> | number
          }
        }
      }
      StoreOrder: {
        payload: Prisma.$StoreOrderPayload<ExtArgs>
        fields: Prisma.StoreOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreOrderPayload>
          }
          findFirst: {
            args: Prisma.StoreOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreOrderPayload>
          }
          findMany: {
            args: Prisma.StoreOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreOrderPayload>[]
          }
          create: {
            args: Prisma.StoreOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreOrderPayload>
          }
          createMany: {
            args: Prisma.StoreOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StoreOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreOrderPayload>
          }
          update: {
            args: Prisma.StoreOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreOrderPayload>
          }
          deleteMany: {
            args: Prisma.StoreOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoreOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StoreOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreOrderPayload>
          }
          aggregate: {
            args: Prisma.StoreOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStoreOrder>
          }
          groupBy: {
            args: Prisma.StoreOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreOrderCountArgs<ExtArgs>
            result: $Utils.Optional<StoreOrderCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model SiteSetting
   */

  export type AggregateSiteSetting = {
    _count: SiteSettingCountAggregateOutputType | null
    _avg: SiteSettingAvgAggregateOutputType | null
    _sum: SiteSettingSumAggregateOutputType | null
    _min: SiteSettingMinAggregateOutputType | null
    _max: SiteSettingMaxAggregateOutputType | null
  }

  export type SiteSettingAvgAggregateOutputType = {
    id: number | null
  }

  export type SiteSettingSumAggregateOutputType = {
    id: number | null
  }

  export type SiteSettingMinAggregateOutputType = {
    id: number | null
    brandName: string | null
    logoText: string | null
    contactEmail: string | null
    serviceArea: string | null
    footerDescription: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SiteSettingMaxAggregateOutputType = {
    id: number | null
    brandName: string | null
    logoText: string | null
    contactEmail: string | null
    serviceArea: string | null
    footerDescription: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SiteSettingCountAggregateOutputType = {
    id: number
    brandName: number
    logoText: number
    contactEmail: number
    serviceArea: number
    footerDescription: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SiteSettingAvgAggregateInputType = {
    id?: true
  }

  export type SiteSettingSumAggregateInputType = {
    id?: true
  }

  export type SiteSettingMinAggregateInputType = {
    id?: true
    brandName?: true
    logoText?: true
    contactEmail?: true
    serviceArea?: true
    footerDescription?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SiteSettingMaxAggregateInputType = {
    id?: true
    brandName?: true
    logoText?: true
    contactEmail?: true
    serviceArea?: true
    footerDescription?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SiteSettingCountAggregateInputType = {
    id?: true
    brandName?: true
    logoText?: true
    contactEmail?: true
    serviceArea?: true
    footerDescription?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SiteSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteSetting to aggregate.
     */
    where?: SiteSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteSettings to fetch.
     */
    orderBy?: SiteSettingOrderByWithRelationInput | SiteSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiteSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SiteSettings
    **/
    _count?: true | SiteSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SiteSettingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SiteSettingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteSettingMaxAggregateInputType
  }

  export type GetSiteSettingAggregateType<T extends SiteSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateSiteSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSiteSetting[P]>
      : GetScalarType<T[P], AggregateSiteSetting[P]>
  }




  export type SiteSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteSettingWhereInput
    orderBy?: SiteSettingOrderByWithAggregationInput | SiteSettingOrderByWithAggregationInput[]
    by: SiteSettingScalarFieldEnum[] | SiteSettingScalarFieldEnum
    having?: SiteSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteSettingCountAggregateInputType | true
    _avg?: SiteSettingAvgAggregateInputType
    _sum?: SiteSettingSumAggregateInputType
    _min?: SiteSettingMinAggregateInputType
    _max?: SiteSettingMaxAggregateInputType
  }

  export type SiteSettingGroupByOutputType = {
    id: number
    brandName: string
    logoText: string
    contactEmail: string
    serviceArea: string
    footerDescription: string
    createdAt: Date
    updatedAt: Date
    _count: SiteSettingCountAggregateOutputType | null
    _avg: SiteSettingAvgAggregateOutputType | null
    _sum: SiteSettingSumAggregateOutputType | null
    _min: SiteSettingMinAggregateOutputType | null
    _max: SiteSettingMaxAggregateOutputType | null
  }

  type GetSiteSettingGroupByPayload<T extends SiteSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteSettingGroupByOutputType[P]>
            : GetScalarType<T[P], SiteSettingGroupByOutputType[P]>
        }
      >
    >


  export type SiteSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brandName?: boolean
    logoText?: boolean
    contactEmail?: boolean
    serviceArea?: boolean
    footerDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["siteSetting"]>


  export type SiteSettingSelectScalar = {
    id?: boolean
    brandName?: boolean
    logoText?: boolean
    contactEmail?: boolean
    serviceArea?: boolean
    footerDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $SiteSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SiteSetting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      brandName: string
      logoText: string
      contactEmail: string
      serviceArea: string
      footerDescription: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["siteSetting"]>
    composites: {}
  }

  type SiteSettingGetPayload<S extends boolean | null | undefined | SiteSettingDefaultArgs> = $Result.GetResult<Prisma.$SiteSettingPayload, S>

  type SiteSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SiteSettingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SiteSettingCountAggregateInputType | true
    }

  export interface SiteSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SiteSetting'], meta: { name: 'SiteSetting' } }
    /**
     * Find zero or one SiteSetting that matches the filter.
     * @param {SiteSettingFindUniqueArgs} args - Arguments to find a SiteSetting
     * @example
     * // Get one SiteSetting
     * const siteSetting = await prisma.siteSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiteSettingFindUniqueArgs>(args: SelectSubset<T, SiteSettingFindUniqueArgs<ExtArgs>>): Prisma__SiteSettingClient<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SiteSetting that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SiteSettingFindUniqueOrThrowArgs} args - Arguments to find a SiteSetting
     * @example
     * // Get one SiteSetting
     * const siteSetting = await prisma.siteSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiteSettingFindUniqueOrThrowArgs>(args: SelectSubset<T, SiteSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiteSettingClient<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SiteSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingFindFirstArgs} args - Arguments to find a SiteSetting
     * @example
     * // Get one SiteSetting
     * const siteSetting = await prisma.siteSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiteSettingFindFirstArgs>(args?: SelectSubset<T, SiteSettingFindFirstArgs<ExtArgs>>): Prisma__SiteSettingClient<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SiteSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingFindFirstOrThrowArgs} args - Arguments to find a SiteSetting
     * @example
     * // Get one SiteSetting
     * const siteSetting = await prisma.siteSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiteSettingFindFirstOrThrowArgs>(args?: SelectSubset<T, SiteSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiteSettingClient<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SiteSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SiteSettings
     * const siteSettings = await prisma.siteSetting.findMany()
     * 
     * // Get first 10 SiteSettings
     * const siteSettings = await prisma.siteSetting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const siteSettingWithIdOnly = await prisma.siteSetting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SiteSettingFindManyArgs>(args?: SelectSubset<T, SiteSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SiteSetting.
     * @param {SiteSettingCreateArgs} args - Arguments to create a SiteSetting.
     * @example
     * // Create one SiteSetting
     * const SiteSetting = await prisma.siteSetting.create({
     *   data: {
     *     // ... data to create a SiteSetting
     *   }
     * })
     * 
     */
    create<T extends SiteSettingCreateArgs>(args: SelectSubset<T, SiteSettingCreateArgs<ExtArgs>>): Prisma__SiteSettingClient<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SiteSettings.
     * @param {SiteSettingCreateManyArgs} args - Arguments to create many SiteSettings.
     * @example
     * // Create many SiteSettings
     * const siteSetting = await prisma.siteSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiteSettingCreateManyArgs>(args?: SelectSubset<T, SiteSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SiteSetting.
     * @param {SiteSettingDeleteArgs} args - Arguments to delete one SiteSetting.
     * @example
     * // Delete one SiteSetting
     * const SiteSetting = await prisma.siteSetting.delete({
     *   where: {
     *     // ... filter to delete one SiteSetting
     *   }
     * })
     * 
     */
    delete<T extends SiteSettingDeleteArgs>(args: SelectSubset<T, SiteSettingDeleteArgs<ExtArgs>>): Prisma__SiteSettingClient<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SiteSetting.
     * @param {SiteSettingUpdateArgs} args - Arguments to update one SiteSetting.
     * @example
     * // Update one SiteSetting
     * const siteSetting = await prisma.siteSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiteSettingUpdateArgs>(args: SelectSubset<T, SiteSettingUpdateArgs<ExtArgs>>): Prisma__SiteSettingClient<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SiteSettings.
     * @param {SiteSettingDeleteManyArgs} args - Arguments to filter SiteSettings to delete.
     * @example
     * // Delete a few SiteSettings
     * const { count } = await prisma.siteSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiteSettingDeleteManyArgs>(args?: SelectSubset<T, SiteSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SiteSettings
     * const siteSetting = await prisma.siteSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiteSettingUpdateManyArgs>(args: SelectSubset<T, SiteSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SiteSetting.
     * @param {SiteSettingUpsertArgs} args - Arguments to update or create a SiteSetting.
     * @example
     * // Update or create a SiteSetting
     * const siteSetting = await prisma.siteSetting.upsert({
     *   create: {
     *     // ... data to create a SiteSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SiteSetting we want to update
     *   }
     * })
     */
    upsert<T extends SiteSettingUpsertArgs>(args: SelectSubset<T, SiteSettingUpsertArgs<ExtArgs>>): Prisma__SiteSettingClient<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SiteSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingCountArgs} args - Arguments to filter SiteSettings to count.
     * @example
     * // Count the number of SiteSettings
     * const count = await prisma.siteSetting.count({
     *   where: {
     *     // ... the filter for the SiteSettings we want to count
     *   }
     * })
    **/
    count<T extends SiteSettingCountArgs>(
      args?: Subset<T, SiteSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SiteSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SiteSettingAggregateArgs>(args: Subset<T, SiteSettingAggregateArgs>): Prisma.PrismaPromise<GetSiteSettingAggregateType<T>>

    /**
     * Group by SiteSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SiteSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiteSettingGroupByArgs['orderBy'] }
        : { orderBy?: SiteSettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SiteSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SiteSetting model
   */
  readonly fields: SiteSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SiteSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiteSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SiteSetting model
   */ 
  interface SiteSettingFieldRefs {
    readonly id: FieldRef<"SiteSetting", 'Int'>
    readonly brandName: FieldRef<"SiteSetting", 'String'>
    readonly logoText: FieldRef<"SiteSetting", 'String'>
    readonly contactEmail: FieldRef<"SiteSetting", 'String'>
    readonly serviceArea: FieldRef<"SiteSetting", 'String'>
    readonly footerDescription: FieldRef<"SiteSetting", 'String'>
    readonly createdAt: FieldRef<"SiteSetting", 'DateTime'>
    readonly updatedAt: FieldRef<"SiteSetting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SiteSetting findUnique
   */
  export type SiteSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * Filter, which SiteSetting to fetch.
     */
    where: SiteSettingWhereUniqueInput
  }

  /**
   * SiteSetting findUniqueOrThrow
   */
  export type SiteSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * Filter, which SiteSetting to fetch.
     */
    where: SiteSettingWhereUniqueInput
  }

  /**
   * SiteSetting findFirst
   */
  export type SiteSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * Filter, which SiteSetting to fetch.
     */
    where?: SiteSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteSettings to fetch.
     */
    orderBy?: SiteSettingOrderByWithRelationInput | SiteSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteSettings.
     */
    cursor?: SiteSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteSettings.
     */
    distinct?: SiteSettingScalarFieldEnum | SiteSettingScalarFieldEnum[]
  }

  /**
   * SiteSetting findFirstOrThrow
   */
  export type SiteSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * Filter, which SiteSetting to fetch.
     */
    where?: SiteSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteSettings to fetch.
     */
    orderBy?: SiteSettingOrderByWithRelationInput | SiteSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteSettings.
     */
    cursor?: SiteSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteSettings.
     */
    distinct?: SiteSettingScalarFieldEnum | SiteSettingScalarFieldEnum[]
  }

  /**
   * SiteSetting findMany
   */
  export type SiteSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * Filter, which SiteSettings to fetch.
     */
    where?: SiteSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteSettings to fetch.
     */
    orderBy?: SiteSettingOrderByWithRelationInput | SiteSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SiteSettings.
     */
    cursor?: SiteSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteSettings.
     */
    skip?: number
    distinct?: SiteSettingScalarFieldEnum | SiteSettingScalarFieldEnum[]
  }

  /**
   * SiteSetting create
   */
  export type SiteSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * The data needed to create a SiteSetting.
     */
    data: XOR<SiteSettingCreateInput, SiteSettingUncheckedCreateInput>
  }

  /**
   * SiteSetting createMany
   */
  export type SiteSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SiteSettings.
     */
    data: SiteSettingCreateManyInput | SiteSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SiteSetting update
   */
  export type SiteSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * The data needed to update a SiteSetting.
     */
    data: XOR<SiteSettingUpdateInput, SiteSettingUncheckedUpdateInput>
    /**
     * Choose, which SiteSetting to update.
     */
    where: SiteSettingWhereUniqueInput
  }

  /**
   * SiteSetting updateMany
   */
  export type SiteSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SiteSettings.
     */
    data: XOR<SiteSettingUpdateManyMutationInput, SiteSettingUncheckedUpdateManyInput>
    /**
     * Filter which SiteSettings to update
     */
    where?: SiteSettingWhereInput
  }

  /**
   * SiteSetting upsert
   */
  export type SiteSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * The filter to search for the SiteSetting to update in case it exists.
     */
    where: SiteSettingWhereUniqueInput
    /**
     * In case the SiteSetting found by the `where` argument doesn't exist, create a new SiteSetting with this data.
     */
    create: XOR<SiteSettingCreateInput, SiteSettingUncheckedCreateInput>
    /**
     * In case the SiteSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiteSettingUpdateInput, SiteSettingUncheckedUpdateInput>
  }

  /**
   * SiteSetting delete
   */
  export type SiteSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * Filter which SiteSetting to delete.
     */
    where: SiteSettingWhereUniqueInput
  }

  /**
   * SiteSetting deleteMany
   */
  export type SiteSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteSettings to delete
     */
    where?: SiteSettingWhereInput
  }

  /**
   * SiteSetting without action
   */
  export type SiteSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
  }


  /**
   * Model HeroSection
   */

  export type AggregateHeroSection = {
    _count: HeroSectionCountAggregateOutputType | null
    _avg: HeroSectionAvgAggregateOutputType | null
    _sum: HeroSectionSumAggregateOutputType | null
    _min: HeroSectionMinAggregateOutputType | null
    _max: HeroSectionMaxAggregateOutputType | null
  }

  export type HeroSectionAvgAggregateOutputType = {
    id: number | null
  }

  export type HeroSectionSumAggregateOutputType = {
    id: number | null
  }

  export type HeroSectionMinAggregateOutputType = {
    id: number | null
    eyebrow: string | null
    headline: string | null
    subtitle: string | null
    imageUrl: string | null
    imageAlt: string | null
    primaryCtaLabel: string | null
    primaryCtaUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HeroSectionMaxAggregateOutputType = {
    id: number | null
    eyebrow: string | null
    headline: string | null
    subtitle: string | null
    imageUrl: string | null
    imageAlt: string | null
    primaryCtaLabel: string | null
    primaryCtaUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HeroSectionCountAggregateOutputType = {
    id: number
    eyebrow: number
    headline: number
    subtitle: number
    imageUrl: number
    imageAlt: number
    primaryCtaLabel: number
    primaryCtaUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HeroSectionAvgAggregateInputType = {
    id?: true
  }

  export type HeroSectionSumAggregateInputType = {
    id?: true
  }

  export type HeroSectionMinAggregateInputType = {
    id?: true
    eyebrow?: true
    headline?: true
    subtitle?: true
    imageUrl?: true
    imageAlt?: true
    primaryCtaLabel?: true
    primaryCtaUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HeroSectionMaxAggregateInputType = {
    id?: true
    eyebrow?: true
    headline?: true
    subtitle?: true
    imageUrl?: true
    imageAlt?: true
    primaryCtaLabel?: true
    primaryCtaUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HeroSectionCountAggregateInputType = {
    id?: true
    eyebrow?: true
    headline?: true
    subtitle?: true
    imageUrl?: true
    imageAlt?: true
    primaryCtaLabel?: true
    primaryCtaUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HeroSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HeroSection to aggregate.
     */
    where?: HeroSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeroSections to fetch.
     */
    orderBy?: HeroSectionOrderByWithRelationInput | HeroSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HeroSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeroSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeroSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HeroSections
    **/
    _count?: true | HeroSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HeroSectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HeroSectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HeroSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HeroSectionMaxAggregateInputType
  }

  export type GetHeroSectionAggregateType<T extends HeroSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateHeroSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHeroSection[P]>
      : GetScalarType<T[P], AggregateHeroSection[P]>
  }




  export type HeroSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HeroSectionWhereInput
    orderBy?: HeroSectionOrderByWithAggregationInput | HeroSectionOrderByWithAggregationInput[]
    by: HeroSectionScalarFieldEnum[] | HeroSectionScalarFieldEnum
    having?: HeroSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HeroSectionCountAggregateInputType | true
    _avg?: HeroSectionAvgAggregateInputType
    _sum?: HeroSectionSumAggregateInputType
    _min?: HeroSectionMinAggregateInputType
    _max?: HeroSectionMaxAggregateInputType
  }

  export type HeroSectionGroupByOutputType = {
    id: number
    eyebrow: string
    headline: string
    subtitle: string
    imageUrl: string
    imageAlt: string
    primaryCtaLabel: string
    primaryCtaUrl: string
    createdAt: Date
    updatedAt: Date
    _count: HeroSectionCountAggregateOutputType | null
    _avg: HeroSectionAvgAggregateOutputType | null
    _sum: HeroSectionSumAggregateOutputType | null
    _min: HeroSectionMinAggregateOutputType | null
    _max: HeroSectionMaxAggregateOutputType | null
  }

  type GetHeroSectionGroupByPayload<T extends HeroSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HeroSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HeroSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HeroSectionGroupByOutputType[P]>
            : GetScalarType<T[P], HeroSectionGroupByOutputType[P]>
        }
      >
    >


  export type HeroSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eyebrow?: boolean
    headline?: boolean
    subtitle?: boolean
    imageUrl?: boolean
    imageAlt?: boolean
    primaryCtaLabel?: boolean
    primaryCtaUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["heroSection"]>


  export type HeroSectionSelectScalar = {
    id?: boolean
    eyebrow?: boolean
    headline?: boolean
    subtitle?: boolean
    imageUrl?: boolean
    imageAlt?: boolean
    primaryCtaLabel?: boolean
    primaryCtaUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $HeroSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HeroSection"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      eyebrow: string
      headline: string
      subtitle: string
      imageUrl: string
      imageAlt: string
      primaryCtaLabel: string
      primaryCtaUrl: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["heroSection"]>
    composites: {}
  }

  type HeroSectionGetPayload<S extends boolean | null | undefined | HeroSectionDefaultArgs> = $Result.GetResult<Prisma.$HeroSectionPayload, S>

  type HeroSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HeroSectionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HeroSectionCountAggregateInputType | true
    }

  export interface HeroSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HeroSection'], meta: { name: 'HeroSection' } }
    /**
     * Find zero or one HeroSection that matches the filter.
     * @param {HeroSectionFindUniqueArgs} args - Arguments to find a HeroSection
     * @example
     * // Get one HeroSection
     * const heroSection = await prisma.heroSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HeroSectionFindUniqueArgs>(args: SelectSubset<T, HeroSectionFindUniqueArgs<ExtArgs>>): Prisma__HeroSectionClient<$Result.GetResult<Prisma.$HeroSectionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one HeroSection that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {HeroSectionFindUniqueOrThrowArgs} args - Arguments to find a HeroSection
     * @example
     * // Get one HeroSection
     * const heroSection = await prisma.heroSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HeroSectionFindUniqueOrThrowArgs>(args: SelectSubset<T, HeroSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HeroSectionClient<$Result.GetResult<Prisma.$HeroSectionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first HeroSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroSectionFindFirstArgs} args - Arguments to find a HeroSection
     * @example
     * // Get one HeroSection
     * const heroSection = await prisma.heroSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HeroSectionFindFirstArgs>(args?: SelectSubset<T, HeroSectionFindFirstArgs<ExtArgs>>): Prisma__HeroSectionClient<$Result.GetResult<Prisma.$HeroSectionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first HeroSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroSectionFindFirstOrThrowArgs} args - Arguments to find a HeroSection
     * @example
     * // Get one HeroSection
     * const heroSection = await prisma.heroSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HeroSectionFindFirstOrThrowArgs>(args?: SelectSubset<T, HeroSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__HeroSectionClient<$Result.GetResult<Prisma.$HeroSectionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more HeroSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HeroSections
     * const heroSections = await prisma.heroSection.findMany()
     * 
     * // Get first 10 HeroSections
     * const heroSections = await prisma.heroSection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const heroSectionWithIdOnly = await prisma.heroSection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HeroSectionFindManyArgs>(args?: SelectSubset<T, HeroSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeroSectionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a HeroSection.
     * @param {HeroSectionCreateArgs} args - Arguments to create a HeroSection.
     * @example
     * // Create one HeroSection
     * const HeroSection = await prisma.heroSection.create({
     *   data: {
     *     // ... data to create a HeroSection
     *   }
     * })
     * 
     */
    create<T extends HeroSectionCreateArgs>(args: SelectSubset<T, HeroSectionCreateArgs<ExtArgs>>): Prisma__HeroSectionClient<$Result.GetResult<Prisma.$HeroSectionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many HeroSections.
     * @param {HeroSectionCreateManyArgs} args - Arguments to create many HeroSections.
     * @example
     * // Create many HeroSections
     * const heroSection = await prisma.heroSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HeroSectionCreateManyArgs>(args?: SelectSubset<T, HeroSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HeroSection.
     * @param {HeroSectionDeleteArgs} args - Arguments to delete one HeroSection.
     * @example
     * // Delete one HeroSection
     * const HeroSection = await prisma.heroSection.delete({
     *   where: {
     *     // ... filter to delete one HeroSection
     *   }
     * })
     * 
     */
    delete<T extends HeroSectionDeleteArgs>(args: SelectSubset<T, HeroSectionDeleteArgs<ExtArgs>>): Prisma__HeroSectionClient<$Result.GetResult<Prisma.$HeroSectionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one HeroSection.
     * @param {HeroSectionUpdateArgs} args - Arguments to update one HeroSection.
     * @example
     * // Update one HeroSection
     * const heroSection = await prisma.heroSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HeroSectionUpdateArgs>(args: SelectSubset<T, HeroSectionUpdateArgs<ExtArgs>>): Prisma__HeroSectionClient<$Result.GetResult<Prisma.$HeroSectionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more HeroSections.
     * @param {HeroSectionDeleteManyArgs} args - Arguments to filter HeroSections to delete.
     * @example
     * // Delete a few HeroSections
     * const { count } = await prisma.heroSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HeroSectionDeleteManyArgs>(args?: SelectSubset<T, HeroSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HeroSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HeroSections
     * const heroSection = await prisma.heroSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HeroSectionUpdateManyArgs>(args: SelectSubset<T, HeroSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HeroSection.
     * @param {HeroSectionUpsertArgs} args - Arguments to update or create a HeroSection.
     * @example
     * // Update or create a HeroSection
     * const heroSection = await prisma.heroSection.upsert({
     *   create: {
     *     // ... data to create a HeroSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HeroSection we want to update
     *   }
     * })
     */
    upsert<T extends HeroSectionUpsertArgs>(args: SelectSubset<T, HeroSectionUpsertArgs<ExtArgs>>): Prisma__HeroSectionClient<$Result.GetResult<Prisma.$HeroSectionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of HeroSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroSectionCountArgs} args - Arguments to filter HeroSections to count.
     * @example
     * // Count the number of HeroSections
     * const count = await prisma.heroSection.count({
     *   where: {
     *     // ... the filter for the HeroSections we want to count
     *   }
     * })
    **/
    count<T extends HeroSectionCountArgs>(
      args?: Subset<T, HeroSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HeroSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HeroSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HeroSectionAggregateArgs>(args: Subset<T, HeroSectionAggregateArgs>): Prisma.PrismaPromise<GetHeroSectionAggregateType<T>>

    /**
     * Group by HeroSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroSectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HeroSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HeroSectionGroupByArgs['orderBy'] }
        : { orderBy?: HeroSectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HeroSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHeroSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HeroSection model
   */
  readonly fields: HeroSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HeroSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HeroSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HeroSection model
   */ 
  interface HeroSectionFieldRefs {
    readonly id: FieldRef<"HeroSection", 'Int'>
    readonly eyebrow: FieldRef<"HeroSection", 'String'>
    readonly headline: FieldRef<"HeroSection", 'String'>
    readonly subtitle: FieldRef<"HeroSection", 'String'>
    readonly imageUrl: FieldRef<"HeroSection", 'String'>
    readonly imageAlt: FieldRef<"HeroSection", 'String'>
    readonly primaryCtaLabel: FieldRef<"HeroSection", 'String'>
    readonly primaryCtaUrl: FieldRef<"HeroSection", 'String'>
    readonly createdAt: FieldRef<"HeroSection", 'DateTime'>
    readonly updatedAt: FieldRef<"HeroSection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HeroSection findUnique
   */
  export type HeroSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroSection
     */
    select?: HeroSectionSelect<ExtArgs> | null
    /**
     * Filter, which HeroSection to fetch.
     */
    where: HeroSectionWhereUniqueInput
  }

  /**
   * HeroSection findUniqueOrThrow
   */
  export type HeroSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroSection
     */
    select?: HeroSectionSelect<ExtArgs> | null
    /**
     * Filter, which HeroSection to fetch.
     */
    where: HeroSectionWhereUniqueInput
  }

  /**
   * HeroSection findFirst
   */
  export type HeroSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroSection
     */
    select?: HeroSectionSelect<ExtArgs> | null
    /**
     * Filter, which HeroSection to fetch.
     */
    where?: HeroSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeroSections to fetch.
     */
    orderBy?: HeroSectionOrderByWithRelationInput | HeroSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HeroSections.
     */
    cursor?: HeroSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeroSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeroSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HeroSections.
     */
    distinct?: HeroSectionScalarFieldEnum | HeroSectionScalarFieldEnum[]
  }

  /**
   * HeroSection findFirstOrThrow
   */
  export type HeroSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroSection
     */
    select?: HeroSectionSelect<ExtArgs> | null
    /**
     * Filter, which HeroSection to fetch.
     */
    where?: HeroSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeroSections to fetch.
     */
    orderBy?: HeroSectionOrderByWithRelationInput | HeroSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HeroSections.
     */
    cursor?: HeroSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeroSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeroSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HeroSections.
     */
    distinct?: HeroSectionScalarFieldEnum | HeroSectionScalarFieldEnum[]
  }

  /**
   * HeroSection findMany
   */
  export type HeroSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroSection
     */
    select?: HeroSectionSelect<ExtArgs> | null
    /**
     * Filter, which HeroSections to fetch.
     */
    where?: HeroSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeroSections to fetch.
     */
    orderBy?: HeroSectionOrderByWithRelationInput | HeroSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HeroSections.
     */
    cursor?: HeroSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeroSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeroSections.
     */
    skip?: number
    distinct?: HeroSectionScalarFieldEnum | HeroSectionScalarFieldEnum[]
  }

  /**
   * HeroSection create
   */
  export type HeroSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroSection
     */
    select?: HeroSectionSelect<ExtArgs> | null
    /**
     * The data needed to create a HeroSection.
     */
    data: XOR<HeroSectionCreateInput, HeroSectionUncheckedCreateInput>
  }

  /**
   * HeroSection createMany
   */
  export type HeroSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HeroSections.
     */
    data: HeroSectionCreateManyInput | HeroSectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HeroSection update
   */
  export type HeroSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroSection
     */
    select?: HeroSectionSelect<ExtArgs> | null
    /**
     * The data needed to update a HeroSection.
     */
    data: XOR<HeroSectionUpdateInput, HeroSectionUncheckedUpdateInput>
    /**
     * Choose, which HeroSection to update.
     */
    where: HeroSectionWhereUniqueInput
  }

  /**
   * HeroSection updateMany
   */
  export type HeroSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HeroSections.
     */
    data: XOR<HeroSectionUpdateManyMutationInput, HeroSectionUncheckedUpdateManyInput>
    /**
     * Filter which HeroSections to update
     */
    where?: HeroSectionWhereInput
  }

  /**
   * HeroSection upsert
   */
  export type HeroSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroSection
     */
    select?: HeroSectionSelect<ExtArgs> | null
    /**
     * The filter to search for the HeroSection to update in case it exists.
     */
    where: HeroSectionWhereUniqueInput
    /**
     * In case the HeroSection found by the `where` argument doesn't exist, create a new HeroSection with this data.
     */
    create: XOR<HeroSectionCreateInput, HeroSectionUncheckedCreateInput>
    /**
     * In case the HeroSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HeroSectionUpdateInput, HeroSectionUncheckedUpdateInput>
  }

  /**
   * HeroSection delete
   */
  export type HeroSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroSection
     */
    select?: HeroSectionSelect<ExtArgs> | null
    /**
     * Filter which HeroSection to delete.
     */
    where: HeroSectionWhereUniqueInput
  }

  /**
   * HeroSection deleteMany
   */
  export type HeroSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HeroSections to delete
     */
    where?: HeroSectionWhereInput
  }

  /**
   * HeroSection without action
   */
  export type HeroSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroSection
     */
    select?: HeroSectionSelect<ExtArgs> | null
  }


  /**
   * Model Capability
   */

  export type AggregateCapability = {
    _count: CapabilityCountAggregateOutputType | null
    _avg: CapabilityAvgAggregateOutputType | null
    _sum: CapabilitySumAggregateOutputType | null
    _min: CapabilityMinAggregateOutputType | null
    _max: CapabilityMaxAggregateOutputType | null
  }

  export type CapabilityAvgAggregateOutputType = {
    id: number | null
    sortOrder: number | null
  }

  export type CapabilitySumAggregateOutputType = {
    id: number | null
    sortOrder: number | null
  }

  export type CapabilityMinAggregateOutputType = {
    id: number | null
    number: string | null
    title: string | null
    description: string | null
    materials: string | null
    imageUrl: string | null
    imageAlt: string | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CapabilityMaxAggregateOutputType = {
    id: number | null
    number: string | null
    title: string | null
    description: string | null
    materials: string | null
    imageUrl: string | null
    imageAlt: string | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CapabilityCountAggregateOutputType = {
    id: number
    number: number
    title: number
    description: number
    materials: number
    imageUrl: number
    imageAlt: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CapabilityAvgAggregateInputType = {
    id?: true
    sortOrder?: true
  }

  export type CapabilitySumAggregateInputType = {
    id?: true
    sortOrder?: true
  }

  export type CapabilityMinAggregateInputType = {
    id?: true
    number?: true
    title?: true
    description?: true
    materials?: true
    imageUrl?: true
    imageAlt?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CapabilityMaxAggregateInputType = {
    id?: true
    number?: true
    title?: true
    description?: true
    materials?: true
    imageUrl?: true
    imageAlt?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CapabilityCountAggregateInputType = {
    id?: true
    number?: true
    title?: true
    description?: true
    materials?: true
    imageUrl?: true
    imageAlt?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CapabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Capability to aggregate.
     */
    where?: CapabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Capabilities to fetch.
     */
    orderBy?: CapabilityOrderByWithRelationInput | CapabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CapabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Capabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Capabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Capabilities
    **/
    _count?: true | CapabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CapabilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CapabilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CapabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CapabilityMaxAggregateInputType
  }

  export type GetCapabilityAggregateType<T extends CapabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateCapability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCapability[P]>
      : GetScalarType<T[P], AggregateCapability[P]>
  }




  export type CapabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CapabilityWhereInput
    orderBy?: CapabilityOrderByWithAggregationInput | CapabilityOrderByWithAggregationInput[]
    by: CapabilityScalarFieldEnum[] | CapabilityScalarFieldEnum
    having?: CapabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CapabilityCountAggregateInputType | true
    _avg?: CapabilityAvgAggregateInputType
    _sum?: CapabilitySumAggregateInputType
    _min?: CapabilityMinAggregateInputType
    _max?: CapabilityMaxAggregateInputType
  }

  export type CapabilityGroupByOutputType = {
    id: number
    number: string
    title: string
    description: string
    materials: string
    imageUrl: string
    imageAlt: string
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    _count: CapabilityCountAggregateOutputType | null
    _avg: CapabilityAvgAggregateOutputType | null
    _sum: CapabilitySumAggregateOutputType | null
    _min: CapabilityMinAggregateOutputType | null
    _max: CapabilityMaxAggregateOutputType | null
  }

  type GetCapabilityGroupByPayload<T extends CapabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CapabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CapabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CapabilityGroupByOutputType[P]>
            : GetScalarType<T[P], CapabilityGroupByOutputType[P]>
        }
      >
    >


  export type CapabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    title?: boolean
    description?: boolean
    materials?: boolean
    imageUrl?: boolean
    imageAlt?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["capability"]>


  export type CapabilitySelectScalar = {
    id?: boolean
    number?: boolean
    title?: boolean
    description?: boolean
    materials?: boolean
    imageUrl?: boolean
    imageAlt?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $CapabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Capability"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      number: string
      title: string
      description: string
      materials: string
      imageUrl: string
      imageAlt: string
      sortOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["capability"]>
    composites: {}
  }

  type CapabilityGetPayload<S extends boolean | null | undefined | CapabilityDefaultArgs> = $Result.GetResult<Prisma.$CapabilityPayload, S>

  type CapabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CapabilityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CapabilityCountAggregateInputType | true
    }

  export interface CapabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Capability'], meta: { name: 'Capability' } }
    /**
     * Find zero or one Capability that matches the filter.
     * @param {CapabilityFindUniqueArgs} args - Arguments to find a Capability
     * @example
     * // Get one Capability
     * const capability = await prisma.capability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CapabilityFindUniqueArgs>(args: SelectSubset<T, CapabilityFindUniqueArgs<ExtArgs>>): Prisma__CapabilityClient<$Result.GetResult<Prisma.$CapabilityPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Capability that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CapabilityFindUniqueOrThrowArgs} args - Arguments to find a Capability
     * @example
     * // Get one Capability
     * const capability = await prisma.capability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CapabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, CapabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CapabilityClient<$Result.GetResult<Prisma.$CapabilityPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Capability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapabilityFindFirstArgs} args - Arguments to find a Capability
     * @example
     * // Get one Capability
     * const capability = await prisma.capability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CapabilityFindFirstArgs>(args?: SelectSubset<T, CapabilityFindFirstArgs<ExtArgs>>): Prisma__CapabilityClient<$Result.GetResult<Prisma.$CapabilityPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Capability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapabilityFindFirstOrThrowArgs} args - Arguments to find a Capability
     * @example
     * // Get one Capability
     * const capability = await prisma.capability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CapabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, CapabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__CapabilityClient<$Result.GetResult<Prisma.$CapabilityPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Capabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Capabilities
     * const capabilities = await prisma.capability.findMany()
     * 
     * // Get first 10 Capabilities
     * const capabilities = await prisma.capability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const capabilityWithIdOnly = await prisma.capability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CapabilityFindManyArgs>(args?: SelectSubset<T, CapabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CapabilityPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Capability.
     * @param {CapabilityCreateArgs} args - Arguments to create a Capability.
     * @example
     * // Create one Capability
     * const Capability = await prisma.capability.create({
     *   data: {
     *     // ... data to create a Capability
     *   }
     * })
     * 
     */
    create<T extends CapabilityCreateArgs>(args: SelectSubset<T, CapabilityCreateArgs<ExtArgs>>): Prisma__CapabilityClient<$Result.GetResult<Prisma.$CapabilityPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Capabilities.
     * @param {CapabilityCreateManyArgs} args - Arguments to create many Capabilities.
     * @example
     * // Create many Capabilities
     * const capability = await prisma.capability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CapabilityCreateManyArgs>(args?: SelectSubset<T, CapabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Capability.
     * @param {CapabilityDeleteArgs} args - Arguments to delete one Capability.
     * @example
     * // Delete one Capability
     * const Capability = await prisma.capability.delete({
     *   where: {
     *     // ... filter to delete one Capability
     *   }
     * })
     * 
     */
    delete<T extends CapabilityDeleteArgs>(args: SelectSubset<T, CapabilityDeleteArgs<ExtArgs>>): Prisma__CapabilityClient<$Result.GetResult<Prisma.$CapabilityPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Capability.
     * @param {CapabilityUpdateArgs} args - Arguments to update one Capability.
     * @example
     * // Update one Capability
     * const capability = await prisma.capability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CapabilityUpdateArgs>(args: SelectSubset<T, CapabilityUpdateArgs<ExtArgs>>): Prisma__CapabilityClient<$Result.GetResult<Prisma.$CapabilityPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Capabilities.
     * @param {CapabilityDeleteManyArgs} args - Arguments to filter Capabilities to delete.
     * @example
     * // Delete a few Capabilities
     * const { count } = await prisma.capability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CapabilityDeleteManyArgs>(args?: SelectSubset<T, CapabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Capabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Capabilities
     * const capability = await prisma.capability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CapabilityUpdateManyArgs>(args: SelectSubset<T, CapabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Capability.
     * @param {CapabilityUpsertArgs} args - Arguments to update or create a Capability.
     * @example
     * // Update or create a Capability
     * const capability = await prisma.capability.upsert({
     *   create: {
     *     // ... data to create a Capability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Capability we want to update
     *   }
     * })
     */
    upsert<T extends CapabilityUpsertArgs>(args: SelectSubset<T, CapabilityUpsertArgs<ExtArgs>>): Prisma__CapabilityClient<$Result.GetResult<Prisma.$CapabilityPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Capabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapabilityCountArgs} args - Arguments to filter Capabilities to count.
     * @example
     * // Count the number of Capabilities
     * const count = await prisma.capability.count({
     *   where: {
     *     // ... the filter for the Capabilities we want to count
     *   }
     * })
    **/
    count<T extends CapabilityCountArgs>(
      args?: Subset<T, CapabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CapabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Capability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CapabilityAggregateArgs>(args: Subset<T, CapabilityAggregateArgs>): Prisma.PrismaPromise<GetCapabilityAggregateType<T>>

    /**
     * Group by Capability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapabilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CapabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CapabilityGroupByArgs['orderBy'] }
        : { orderBy?: CapabilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CapabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCapabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Capability model
   */
  readonly fields: CapabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Capability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CapabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Capability model
   */ 
  interface CapabilityFieldRefs {
    readonly id: FieldRef<"Capability", 'Int'>
    readonly number: FieldRef<"Capability", 'String'>
    readonly title: FieldRef<"Capability", 'String'>
    readonly description: FieldRef<"Capability", 'String'>
    readonly materials: FieldRef<"Capability", 'String'>
    readonly imageUrl: FieldRef<"Capability", 'String'>
    readonly imageAlt: FieldRef<"Capability", 'String'>
    readonly sortOrder: FieldRef<"Capability", 'Int'>
    readonly createdAt: FieldRef<"Capability", 'DateTime'>
    readonly updatedAt: FieldRef<"Capability", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Capability findUnique
   */
  export type CapabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capability
     */
    select?: CapabilitySelect<ExtArgs> | null
    /**
     * Filter, which Capability to fetch.
     */
    where: CapabilityWhereUniqueInput
  }

  /**
   * Capability findUniqueOrThrow
   */
  export type CapabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capability
     */
    select?: CapabilitySelect<ExtArgs> | null
    /**
     * Filter, which Capability to fetch.
     */
    where: CapabilityWhereUniqueInput
  }

  /**
   * Capability findFirst
   */
  export type CapabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capability
     */
    select?: CapabilitySelect<ExtArgs> | null
    /**
     * Filter, which Capability to fetch.
     */
    where?: CapabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Capabilities to fetch.
     */
    orderBy?: CapabilityOrderByWithRelationInput | CapabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Capabilities.
     */
    cursor?: CapabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Capabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Capabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Capabilities.
     */
    distinct?: CapabilityScalarFieldEnum | CapabilityScalarFieldEnum[]
  }

  /**
   * Capability findFirstOrThrow
   */
  export type CapabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capability
     */
    select?: CapabilitySelect<ExtArgs> | null
    /**
     * Filter, which Capability to fetch.
     */
    where?: CapabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Capabilities to fetch.
     */
    orderBy?: CapabilityOrderByWithRelationInput | CapabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Capabilities.
     */
    cursor?: CapabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Capabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Capabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Capabilities.
     */
    distinct?: CapabilityScalarFieldEnum | CapabilityScalarFieldEnum[]
  }

  /**
   * Capability findMany
   */
  export type CapabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capability
     */
    select?: CapabilitySelect<ExtArgs> | null
    /**
     * Filter, which Capabilities to fetch.
     */
    where?: CapabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Capabilities to fetch.
     */
    orderBy?: CapabilityOrderByWithRelationInput | CapabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Capabilities.
     */
    cursor?: CapabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Capabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Capabilities.
     */
    skip?: number
    distinct?: CapabilityScalarFieldEnum | CapabilityScalarFieldEnum[]
  }

  /**
   * Capability create
   */
  export type CapabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capability
     */
    select?: CapabilitySelect<ExtArgs> | null
    /**
     * The data needed to create a Capability.
     */
    data: XOR<CapabilityCreateInput, CapabilityUncheckedCreateInput>
  }

  /**
   * Capability createMany
   */
  export type CapabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Capabilities.
     */
    data: CapabilityCreateManyInput | CapabilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Capability update
   */
  export type CapabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capability
     */
    select?: CapabilitySelect<ExtArgs> | null
    /**
     * The data needed to update a Capability.
     */
    data: XOR<CapabilityUpdateInput, CapabilityUncheckedUpdateInput>
    /**
     * Choose, which Capability to update.
     */
    where: CapabilityWhereUniqueInput
  }

  /**
   * Capability updateMany
   */
  export type CapabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Capabilities.
     */
    data: XOR<CapabilityUpdateManyMutationInput, CapabilityUncheckedUpdateManyInput>
    /**
     * Filter which Capabilities to update
     */
    where?: CapabilityWhereInput
  }

  /**
   * Capability upsert
   */
  export type CapabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capability
     */
    select?: CapabilitySelect<ExtArgs> | null
    /**
     * The filter to search for the Capability to update in case it exists.
     */
    where: CapabilityWhereUniqueInput
    /**
     * In case the Capability found by the `where` argument doesn't exist, create a new Capability with this data.
     */
    create: XOR<CapabilityCreateInput, CapabilityUncheckedCreateInput>
    /**
     * In case the Capability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CapabilityUpdateInput, CapabilityUncheckedUpdateInput>
  }

  /**
   * Capability delete
   */
  export type CapabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capability
     */
    select?: CapabilitySelect<ExtArgs> | null
    /**
     * Filter which Capability to delete.
     */
    where: CapabilityWhereUniqueInput
  }

  /**
   * Capability deleteMany
   */
  export type CapabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Capabilities to delete
     */
    where?: CapabilityWhereInput
  }

  /**
   * Capability without action
   */
  export type CapabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capability
     */
    select?: CapabilitySelect<ExtArgs> | null
  }


  /**
   * Model WorkItem
   */

  export type AggregateWorkItem = {
    _count: WorkItemCountAggregateOutputType | null
    _avg: WorkItemAvgAggregateOutputType | null
    _sum: WorkItemSumAggregateOutputType | null
    _min: WorkItemMinAggregateOutputType | null
    _max: WorkItemMaxAggregateOutputType | null
  }

  export type WorkItemAvgAggregateOutputType = {
    id: number | null
    sortOrder: number | null
  }

  export type WorkItemSumAggregateOutputType = {
    id: number | null
    sortOrder: number | null
  }

  export type WorkItemMinAggregateOutputType = {
    id: number | null
    number: string | null
    category: string | null
    title: string | null
    description: string | null
    imageUrl: string | null
    imageAlt: string | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkItemMaxAggregateOutputType = {
    id: number | null
    number: string | null
    category: string | null
    title: string | null
    description: string | null
    imageUrl: string | null
    imageAlt: string | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkItemCountAggregateOutputType = {
    id: number
    number: number
    category: number
    title: number
    description: number
    imageUrl: number
    imageAlt: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkItemAvgAggregateInputType = {
    id?: true
    sortOrder?: true
  }

  export type WorkItemSumAggregateInputType = {
    id?: true
    sortOrder?: true
  }

  export type WorkItemMinAggregateInputType = {
    id?: true
    number?: true
    category?: true
    title?: true
    description?: true
    imageUrl?: true
    imageAlt?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkItemMaxAggregateInputType = {
    id?: true
    number?: true
    category?: true
    title?: true
    description?: true
    imageUrl?: true
    imageAlt?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkItemCountAggregateInputType = {
    id?: true
    number?: true
    category?: true
    title?: true
    description?: true
    imageUrl?: true
    imageAlt?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkItem to aggregate.
     */
    where?: WorkItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkItems to fetch.
     */
    orderBy?: WorkItemOrderByWithRelationInput | WorkItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkItems
    **/
    _count?: true | WorkItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkItemMaxAggregateInputType
  }

  export type GetWorkItemAggregateType<T extends WorkItemAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkItem[P]>
      : GetScalarType<T[P], AggregateWorkItem[P]>
  }




  export type WorkItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkItemWhereInput
    orderBy?: WorkItemOrderByWithAggregationInput | WorkItemOrderByWithAggregationInput[]
    by: WorkItemScalarFieldEnum[] | WorkItemScalarFieldEnum
    having?: WorkItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkItemCountAggregateInputType | true
    _avg?: WorkItemAvgAggregateInputType
    _sum?: WorkItemSumAggregateInputType
    _min?: WorkItemMinAggregateInputType
    _max?: WorkItemMaxAggregateInputType
  }

  export type WorkItemGroupByOutputType = {
    id: number
    number: string
    category: string
    title: string
    description: string
    imageUrl: string
    imageAlt: string
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    _count: WorkItemCountAggregateOutputType | null
    _avg: WorkItemAvgAggregateOutputType | null
    _sum: WorkItemSumAggregateOutputType | null
    _min: WorkItemMinAggregateOutputType | null
    _max: WorkItemMaxAggregateOutputType | null
  }

  type GetWorkItemGroupByPayload<T extends WorkItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkItemGroupByOutputType[P]>
            : GetScalarType<T[P], WorkItemGroupByOutputType[P]>
        }
      >
    >


  export type WorkItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    category?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    imageAlt?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["workItem"]>


  export type WorkItemSelectScalar = {
    id?: boolean
    number?: boolean
    category?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    imageAlt?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $WorkItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      number: string
      category: string
      title: string
      description: string
      imageUrl: string
      imageAlt: string
      sortOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workItem"]>
    composites: {}
  }

  type WorkItemGetPayload<S extends boolean | null | undefined | WorkItemDefaultArgs> = $Result.GetResult<Prisma.$WorkItemPayload, S>

  type WorkItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WorkItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WorkItemCountAggregateInputType | true
    }

  export interface WorkItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkItem'], meta: { name: 'WorkItem' } }
    /**
     * Find zero or one WorkItem that matches the filter.
     * @param {WorkItemFindUniqueArgs} args - Arguments to find a WorkItem
     * @example
     * // Get one WorkItem
     * const workItem = await prisma.workItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkItemFindUniqueArgs>(args: SelectSubset<T, WorkItemFindUniqueArgs<ExtArgs>>): Prisma__WorkItemClient<$Result.GetResult<Prisma.$WorkItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WorkItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WorkItemFindUniqueOrThrowArgs} args - Arguments to find a WorkItem
     * @example
     * // Get one WorkItem
     * const workItem = await prisma.workItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkItemFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkItemClient<$Result.GetResult<Prisma.$WorkItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WorkItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkItemFindFirstArgs} args - Arguments to find a WorkItem
     * @example
     * // Get one WorkItem
     * const workItem = await prisma.workItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkItemFindFirstArgs>(args?: SelectSubset<T, WorkItemFindFirstArgs<ExtArgs>>): Prisma__WorkItemClient<$Result.GetResult<Prisma.$WorkItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WorkItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkItemFindFirstOrThrowArgs} args - Arguments to find a WorkItem
     * @example
     * // Get one WorkItem
     * const workItem = await prisma.workItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkItemFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkItemClient<$Result.GetResult<Prisma.$WorkItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WorkItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkItems
     * const workItems = await prisma.workItem.findMany()
     * 
     * // Get first 10 WorkItems
     * const workItems = await prisma.workItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workItemWithIdOnly = await prisma.workItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkItemFindManyArgs>(args?: SelectSubset<T, WorkItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WorkItem.
     * @param {WorkItemCreateArgs} args - Arguments to create a WorkItem.
     * @example
     * // Create one WorkItem
     * const WorkItem = await prisma.workItem.create({
     *   data: {
     *     // ... data to create a WorkItem
     *   }
     * })
     * 
     */
    create<T extends WorkItemCreateArgs>(args: SelectSubset<T, WorkItemCreateArgs<ExtArgs>>): Prisma__WorkItemClient<$Result.GetResult<Prisma.$WorkItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WorkItems.
     * @param {WorkItemCreateManyArgs} args - Arguments to create many WorkItems.
     * @example
     * // Create many WorkItems
     * const workItem = await prisma.workItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkItemCreateManyArgs>(args?: SelectSubset<T, WorkItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WorkItem.
     * @param {WorkItemDeleteArgs} args - Arguments to delete one WorkItem.
     * @example
     * // Delete one WorkItem
     * const WorkItem = await prisma.workItem.delete({
     *   where: {
     *     // ... filter to delete one WorkItem
     *   }
     * })
     * 
     */
    delete<T extends WorkItemDeleteArgs>(args: SelectSubset<T, WorkItemDeleteArgs<ExtArgs>>): Prisma__WorkItemClient<$Result.GetResult<Prisma.$WorkItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WorkItem.
     * @param {WorkItemUpdateArgs} args - Arguments to update one WorkItem.
     * @example
     * // Update one WorkItem
     * const workItem = await prisma.workItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkItemUpdateArgs>(args: SelectSubset<T, WorkItemUpdateArgs<ExtArgs>>): Prisma__WorkItemClient<$Result.GetResult<Prisma.$WorkItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WorkItems.
     * @param {WorkItemDeleteManyArgs} args - Arguments to filter WorkItems to delete.
     * @example
     * // Delete a few WorkItems
     * const { count } = await prisma.workItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkItemDeleteManyArgs>(args?: SelectSubset<T, WorkItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkItems
     * const workItem = await prisma.workItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkItemUpdateManyArgs>(args: SelectSubset<T, WorkItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkItem.
     * @param {WorkItemUpsertArgs} args - Arguments to update or create a WorkItem.
     * @example
     * // Update or create a WorkItem
     * const workItem = await prisma.workItem.upsert({
     *   create: {
     *     // ... data to create a WorkItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkItem we want to update
     *   }
     * })
     */
    upsert<T extends WorkItemUpsertArgs>(args: SelectSubset<T, WorkItemUpsertArgs<ExtArgs>>): Prisma__WorkItemClient<$Result.GetResult<Prisma.$WorkItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WorkItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkItemCountArgs} args - Arguments to filter WorkItems to count.
     * @example
     * // Count the number of WorkItems
     * const count = await prisma.workItem.count({
     *   where: {
     *     // ... the filter for the WorkItems we want to count
     *   }
     * })
    **/
    count<T extends WorkItemCountArgs>(
      args?: Subset<T, WorkItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkItemAggregateArgs>(args: Subset<T, WorkItemAggregateArgs>): Prisma.PrismaPromise<GetWorkItemAggregateType<T>>

    /**
     * Group by WorkItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkItemGroupByArgs['orderBy'] }
        : { orderBy?: WorkItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkItem model
   */
  readonly fields: WorkItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkItem model
   */ 
  interface WorkItemFieldRefs {
    readonly id: FieldRef<"WorkItem", 'Int'>
    readonly number: FieldRef<"WorkItem", 'String'>
    readonly category: FieldRef<"WorkItem", 'String'>
    readonly title: FieldRef<"WorkItem", 'String'>
    readonly description: FieldRef<"WorkItem", 'String'>
    readonly imageUrl: FieldRef<"WorkItem", 'String'>
    readonly imageAlt: FieldRef<"WorkItem", 'String'>
    readonly sortOrder: FieldRef<"WorkItem", 'Int'>
    readonly createdAt: FieldRef<"WorkItem", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkItem findUnique
   */
  export type WorkItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItem
     */
    select?: WorkItemSelect<ExtArgs> | null
    /**
     * Filter, which WorkItem to fetch.
     */
    where: WorkItemWhereUniqueInput
  }

  /**
   * WorkItem findUniqueOrThrow
   */
  export type WorkItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItem
     */
    select?: WorkItemSelect<ExtArgs> | null
    /**
     * Filter, which WorkItem to fetch.
     */
    where: WorkItemWhereUniqueInput
  }

  /**
   * WorkItem findFirst
   */
  export type WorkItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItem
     */
    select?: WorkItemSelect<ExtArgs> | null
    /**
     * Filter, which WorkItem to fetch.
     */
    where?: WorkItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkItems to fetch.
     */
    orderBy?: WorkItemOrderByWithRelationInput | WorkItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkItems.
     */
    cursor?: WorkItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkItems.
     */
    distinct?: WorkItemScalarFieldEnum | WorkItemScalarFieldEnum[]
  }

  /**
   * WorkItem findFirstOrThrow
   */
  export type WorkItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItem
     */
    select?: WorkItemSelect<ExtArgs> | null
    /**
     * Filter, which WorkItem to fetch.
     */
    where?: WorkItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkItems to fetch.
     */
    orderBy?: WorkItemOrderByWithRelationInput | WorkItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkItems.
     */
    cursor?: WorkItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkItems.
     */
    distinct?: WorkItemScalarFieldEnum | WorkItemScalarFieldEnum[]
  }

  /**
   * WorkItem findMany
   */
  export type WorkItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItem
     */
    select?: WorkItemSelect<ExtArgs> | null
    /**
     * Filter, which WorkItems to fetch.
     */
    where?: WorkItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkItems to fetch.
     */
    orderBy?: WorkItemOrderByWithRelationInput | WorkItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkItems.
     */
    cursor?: WorkItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkItems.
     */
    skip?: number
    distinct?: WorkItemScalarFieldEnum | WorkItemScalarFieldEnum[]
  }

  /**
   * WorkItem create
   */
  export type WorkItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItem
     */
    select?: WorkItemSelect<ExtArgs> | null
    /**
     * The data needed to create a WorkItem.
     */
    data: XOR<WorkItemCreateInput, WorkItemUncheckedCreateInput>
  }

  /**
   * WorkItem createMany
   */
  export type WorkItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkItems.
     */
    data: WorkItemCreateManyInput | WorkItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkItem update
   */
  export type WorkItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItem
     */
    select?: WorkItemSelect<ExtArgs> | null
    /**
     * The data needed to update a WorkItem.
     */
    data: XOR<WorkItemUpdateInput, WorkItemUncheckedUpdateInput>
    /**
     * Choose, which WorkItem to update.
     */
    where: WorkItemWhereUniqueInput
  }

  /**
   * WorkItem updateMany
   */
  export type WorkItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkItems.
     */
    data: XOR<WorkItemUpdateManyMutationInput, WorkItemUncheckedUpdateManyInput>
    /**
     * Filter which WorkItems to update
     */
    where?: WorkItemWhereInput
  }

  /**
   * WorkItem upsert
   */
  export type WorkItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItem
     */
    select?: WorkItemSelect<ExtArgs> | null
    /**
     * The filter to search for the WorkItem to update in case it exists.
     */
    where: WorkItemWhereUniqueInput
    /**
     * In case the WorkItem found by the `where` argument doesn't exist, create a new WorkItem with this data.
     */
    create: XOR<WorkItemCreateInput, WorkItemUncheckedCreateInput>
    /**
     * In case the WorkItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkItemUpdateInput, WorkItemUncheckedUpdateInput>
  }

  /**
   * WorkItem delete
   */
  export type WorkItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItem
     */
    select?: WorkItemSelect<ExtArgs> | null
    /**
     * Filter which WorkItem to delete.
     */
    where: WorkItemWhereUniqueInput
  }

  /**
   * WorkItem deleteMany
   */
  export type WorkItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkItems to delete
     */
    where?: WorkItemWhereInput
  }

  /**
   * WorkItem without action
   */
  export type WorkItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkItem
     */
    select?: WorkItemSelect<ExtArgs> | null
  }


  /**
   * Model Faq
   */

  export type AggregateFaq = {
    _count: FaqCountAggregateOutputType | null
    _avg: FaqAvgAggregateOutputType | null
    _sum: FaqSumAggregateOutputType | null
    _min: FaqMinAggregateOutputType | null
    _max: FaqMaxAggregateOutputType | null
  }

  export type FaqAvgAggregateOutputType = {
    id: number | null
    sortOrder: number | null
  }

  export type FaqSumAggregateOutputType = {
    id: number | null
    sortOrder: number | null
  }

  export type FaqMinAggregateOutputType = {
    id: number | null
    question: string | null
    answer: string | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FaqMaxAggregateOutputType = {
    id: number | null
    question: string | null
    answer: string | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FaqCountAggregateOutputType = {
    id: number
    question: number
    answer: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FaqAvgAggregateInputType = {
    id?: true
    sortOrder?: true
  }

  export type FaqSumAggregateInputType = {
    id?: true
    sortOrder?: true
  }

  export type FaqMinAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FaqMaxAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FaqCountAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FaqAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Faq to aggregate.
     */
    where?: FaqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faqs to fetch.
     */
    orderBy?: FaqOrderByWithRelationInput | FaqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FaqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Faqs
    **/
    _count?: true | FaqCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FaqAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FaqSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FaqMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FaqMaxAggregateInputType
  }

  export type GetFaqAggregateType<T extends FaqAggregateArgs> = {
        [P in keyof T & keyof AggregateFaq]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFaq[P]>
      : GetScalarType<T[P], AggregateFaq[P]>
  }




  export type FaqGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FaqWhereInput
    orderBy?: FaqOrderByWithAggregationInput | FaqOrderByWithAggregationInput[]
    by: FaqScalarFieldEnum[] | FaqScalarFieldEnum
    having?: FaqScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FaqCountAggregateInputType | true
    _avg?: FaqAvgAggregateInputType
    _sum?: FaqSumAggregateInputType
    _min?: FaqMinAggregateInputType
    _max?: FaqMaxAggregateInputType
  }

  export type FaqGroupByOutputType = {
    id: number
    question: string
    answer: string
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    _count: FaqCountAggregateOutputType | null
    _avg: FaqAvgAggregateOutputType | null
    _sum: FaqSumAggregateOutputType | null
    _min: FaqMinAggregateOutputType | null
    _max: FaqMaxAggregateOutputType | null
  }

  type GetFaqGroupByPayload<T extends FaqGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FaqGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FaqGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FaqGroupByOutputType[P]>
            : GetScalarType<T[P], FaqGroupByOutputType[P]>
        }
      >
    >


  export type FaqSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answer?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["faq"]>


  export type FaqSelectScalar = {
    id?: boolean
    question?: boolean
    answer?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $FaqPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Faq"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      question: string
      answer: string
      sortOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["faq"]>
    composites: {}
  }

  type FaqGetPayload<S extends boolean | null | undefined | FaqDefaultArgs> = $Result.GetResult<Prisma.$FaqPayload, S>

  type FaqCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FaqFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FaqCountAggregateInputType | true
    }

  export interface FaqDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Faq'], meta: { name: 'Faq' } }
    /**
     * Find zero or one Faq that matches the filter.
     * @param {FaqFindUniqueArgs} args - Arguments to find a Faq
     * @example
     * // Get one Faq
     * const faq = await prisma.faq.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FaqFindUniqueArgs>(args: SelectSubset<T, FaqFindUniqueArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Faq that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FaqFindUniqueOrThrowArgs} args - Arguments to find a Faq
     * @example
     * // Get one Faq
     * const faq = await prisma.faq.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FaqFindUniqueOrThrowArgs>(args: SelectSubset<T, FaqFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Faq that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqFindFirstArgs} args - Arguments to find a Faq
     * @example
     * // Get one Faq
     * const faq = await prisma.faq.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FaqFindFirstArgs>(args?: SelectSubset<T, FaqFindFirstArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Faq that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqFindFirstOrThrowArgs} args - Arguments to find a Faq
     * @example
     * // Get one Faq
     * const faq = await prisma.faq.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FaqFindFirstOrThrowArgs>(args?: SelectSubset<T, FaqFindFirstOrThrowArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Faqs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Faqs
     * const faqs = await prisma.faq.findMany()
     * 
     * // Get first 10 Faqs
     * const faqs = await prisma.faq.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const faqWithIdOnly = await prisma.faq.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FaqFindManyArgs>(args?: SelectSubset<T, FaqFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Faq.
     * @param {FaqCreateArgs} args - Arguments to create a Faq.
     * @example
     * // Create one Faq
     * const Faq = await prisma.faq.create({
     *   data: {
     *     // ... data to create a Faq
     *   }
     * })
     * 
     */
    create<T extends FaqCreateArgs>(args: SelectSubset<T, FaqCreateArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Faqs.
     * @param {FaqCreateManyArgs} args - Arguments to create many Faqs.
     * @example
     * // Create many Faqs
     * const faq = await prisma.faq.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FaqCreateManyArgs>(args?: SelectSubset<T, FaqCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Faq.
     * @param {FaqDeleteArgs} args - Arguments to delete one Faq.
     * @example
     * // Delete one Faq
     * const Faq = await prisma.faq.delete({
     *   where: {
     *     // ... filter to delete one Faq
     *   }
     * })
     * 
     */
    delete<T extends FaqDeleteArgs>(args: SelectSubset<T, FaqDeleteArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Faq.
     * @param {FaqUpdateArgs} args - Arguments to update one Faq.
     * @example
     * // Update one Faq
     * const faq = await prisma.faq.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FaqUpdateArgs>(args: SelectSubset<T, FaqUpdateArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Faqs.
     * @param {FaqDeleteManyArgs} args - Arguments to filter Faqs to delete.
     * @example
     * // Delete a few Faqs
     * const { count } = await prisma.faq.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FaqDeleteManyArgs>(args?: SelectSubset<T, FaqDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Faqs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Faqs
     * const faq = await prisma.faq.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FaqUpdateManyArgs>(args: SelectSubset<T, FaqUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Faq.
     * @param {FaqUpsertArgs} args - Arguments to update or create a Faq.
     * @example
     * // Update or create a Faq
     * const faq = await prisma.faq.upsert({
     *   create: {
     *     // ... data to create a Faq
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Faq we want to update
     *   }
     * })
     */
    upsert<T extends FaqUpsertArgs>(args: SelectSubset<T, FaqUpsertArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Faqs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqCountArgs} args - Arguments to filter Faqs to count.
     * @example
     * // Count the number of Faqs
     * const count = await prisma.faq.count({
     *   where: {
     *     // ... the filter for the Faqs we want to count
     *   }
     * })
    **/
    count<T extends FaqCountArgs>(
      args?: Subset<T, FaqCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FaqCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Faq.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FaqAggregateArgs>(args: Subset<T, FaqAggregateArgs>): Prisma.PrismaPromise<GetFaqAggregateType<T>>

    /**
     * Group by Faq.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FaqGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FaqGroupByArgs['orderBy'] }
        : { orderBy?: FaqGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FaqGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFaqGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Faq model
   */
  readonly fields: FaqFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Faq.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FaqClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Faq model
   */ 
  interface FaqFieldRefs {
    readonly id: FieldRef<"Faq", 'Int'>
    readonly question: FieldRef<"Faq", 'String'>
    readonly answer: FieldRef<"Faq", 'String'>
    readonly sortOrder: FieldRef<"Faq", 'Int'>
    readonly createdAt: FieldRef<"Faq", 'DateTime'>
    readonly updatedAt: FieldRef<"Faq", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Faq findUnique
   */
  export type FaqFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Filter, which Faq to fetch.
     */
    where: FaqWhereUniqueInput
  }

  /**
   * Faq findUniqueOrThrow
   */
  export type FaqFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Filter, which Faq to fetch.
     */
    where: FaqWhereUniqueInput
  }

  /**
   * Faq findFirst
   */
  export type FaqFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Filter, which Faq to fetch.
     */
    where?: FaqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faqs to fetch.
     */
    orderBy?: FaqOrderByWithRelationInput | FaqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Faqs.
     */
    cursor?: FaqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Faqs.
     */
    distinct?: FaqScalarFieldEnum | FaqScalarFieldEnum[]
  }

  /**
   * Faq findFirstOrThrow
   */
  export type FaqFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Filter, which Faq to fetch.
     */
    where?: FaqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faqs to fetch.
     */
    orderBy?: FaqOrderByWithRelationInput | FaqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Faqs.
     */
    cursor?: FaqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Faqs.
     */
    distinct?: FaqScalarFieldEnum | FaqScalarFieldEnum[]
  }

  /**
   * Faq findMany
   */
  export type FaqFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Filter, which Faqs to fetch.
     */
    where?: FaqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faqs to fetch.
     */
    orderBy?: FaqOrderByWithRelationInput | FaqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Faqs.
     */
    cursor?: FaqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faqs.
     */
    skip?: number
    distinct?: FaqScalarFieldEnum | FaqScalarFieldEnum[]
  }

  /**
   * Faq create
   */
  export type FaqCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * The data needed to create a Faq.
     */
    data: XOR<FaqCreateInput, FaqUncheckedCreateInput>
  }

  /**
   * Faq createMany
   */
  export type FaqCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Faqs.
     */
    data: FaqCreateManyInput | FaqCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Faq update
   */
  export type FaqUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * The data needed to update a Faq.
     */
    data: XOR<FaqUpdateInput, FaqUncheckedUpdateInput>
    /**
     * Choose, which Faq to update.
     */
    where: FaqWhereUniqueInput
  }

  /**
   * Faq updateMany
   */
  export type FaqUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Faqs.
     */
    data: XOR<FaqUpdateManyMutationInput, FaqUncheckedUpdateManyInput>
    /**
     * Filter which Faqs to update
     */
    where?: FaqWhereInput
  }

  /**
   * Faq upsert
   */
  export type FaqUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * The filter to search for the Faq to update in case it exists.
     */
    where: FaqWhereUniqueInput
    /**
     * In case the Faq found by the `where` argument doesn't exist, create a new Faq with this data.
     */
    create: XOR<FaqCreateInput, FaqUncheckedCreateInput>
    /**
     * In case the Faq was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FaqUpdateInput, FaqUncheckedUpdateInput>
  }

  /**
   * Faq delete
   */
  export type FaqDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Filter which Faq to delete.
     */
    where: FaqWhereUniqueInput
  }

  /**
   * Faq deleteMany
   */
  export type FaqDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Faqs to delete
     */
    where?: FaqWhereInput
  }

  /**
   * Faq without action
   */
  export type FaqDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
  }


  /**
   * Model MediaAsset
   */

  export type AggregateMediaAsset = {
    _count: MediaAssetCountAggregateOutputType | null
    _avg: MediaAssetAvgAggregateOutputType | null
    _sum: MediaAssetSumAggregateOutputType | null
    _min: MediaAssetMinAggregateOutputType | null
    _max: MediaAssetMaxAggregateOutputType | null
  }

  export type MediaAssetAvgAggregateOutputType = {
    id: number | null
  }

  export type MediaAssetSumAggregateOutputType = {
    id: number | null
  }

  export type MediaAssetMinAggregateOutputType = {
    id: number | null
    cloudinaryPublicId: string | null
    url: string | null
    altText: string | null
    assetType: string | null
    createdAt: Date | null
  }

  export type MediaAssetMaxAggregateOutputType = {
    id: number | null
    cloudinaryPublicId: string | null
    url: string | null
    altText: string | null
    assetType: string | null
    createdAt: Date | null
  }

  export type MediaAssetCountAggregateOutputType = {
    id: number
    cloudinaryPublicId: number
    url: number
    altText: number
    assetType: number
    createdAt: number
    _all: number
  }


  export type MediaAssetAvgAggregateInputType = {
    id?: true
  }

  export type MediaAssetSumAggregateInputType = {
    id?: true
  }

  export type MediaAssetMinAggregateInputType = {
    id?: true
    cloudinaryPublicId?: true
    url?: true
    altText?: true
    assetType?: true
    createdAt?: true
  }

  export type MediaAssetMaxAggregateInputType = {
    id?: true
    cloudinaryPublicId?: true
    url?: true
    altText?: true
    assetType?: true
    createdAt?: true
  }

  export type MediaAssetCountAggregateInputType = {
    id?: true
    cloudinaryPublicId?: true
    url?: true
    altText?: true
    assetType?: true
    createdAt?: true
    _all?: true
  }

  export type MediaAssetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaAsset to aggregate.
     */
    where?: MediaAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaAssets to fetch.
     */
    orderBy?: MediaAssetOrderByWithRelationInput | MediaAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MediaAssets
    **/
    _count?: true | MediaAssetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MediaAssetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MediaAssetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaAssetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaAssetMaxAggregateInputType
  }

  export type GetMediaAssetAggregateType<T extends MediaAssetAggregateArgs> = {
        [P in keyof T & keyof AggregateMediaAsset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMediaAsset[P]>
      : GetScalarType<T[P], AggregateMediaAsset[P]>
  }




  export type MediaAssetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaAssetWhereInput
    orderBy?: MediaAssetOrderByWithAggregationInput | MediaAssetOrderByWithAggregationInput[]
    by: MediaAssetScalarFieldEnum[] | MediaAssetScalarFieldEnum
    having?: MediaAssetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaAssetCountAggregateInputType | true
    _avg?: MediaAssetAvgAggregateInputType
    _sum?: MediaAssetSumAggregateInputType
    _min?: MediaAssetMinAggregateInputType
    _max?: MediaAssetMaxAggregateInputType
  }

  export type MediaAssetGroupByOutputType = {
    id: number
    cloudinaryPublicId: string
    url: string
    altText: string
    assetType: string
    createdAt: Date
    _count: MediaAssetCountAggregateOutputType | null
    _avg: MediaAssetAvgAggregateOutputType | null
    _sum: MediaAssetSumAggregateOutputType | null
    _min: MediaAssetMinAggregateOutputType | null
    _max: MediaAssetMaxAggregateOutputType | null
  }

  type GetMediaAssetGroupByPayload<T extends MediaAssetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaAssetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaAssetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaAssetGroupByOutputType[P]>
            : GetScalarType<T[P], MediaAssetGroupByOutputType[P]>
        }
      >
    >


  export type MediaAssetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cloudinaryPublicId?: boolean
    url?: boolean
    altText?: boolean
    assetType?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["mediaAsset"]>


  export type MediaAssetSelectScalar = {
    id?: boolean
    cloudinaryPublicId?: boolean
    url?: boolean
    altText?: boolean
    assetType?: boolean
    createdAt?: boolean
  }


  export type $MediaAssetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MediaAsset"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cloudinaryPublicId: string
      url: string
      altText: string
      assetType: string
      createdAt: Date
    }, ExtArgs["result"]["mediaAsset"]>
    composites: {}
  }

  type MediaAssetGetPayload<S extends boolean | null | undefined | MediaAssetDefaultArgs> = $Result.GetResult<Prisma.$MediaAssetPayload, S>

  type MediaAssetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MediaAssetFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MediaAssetCountAggregateInputType | true
    }

  export interface MediaAssetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MediaAsset'], meta: { name: 'MediaAsset' } }
    /**
     * Find zero or one MediaAsset that matches the filter.
     * @param {MediaAssetFindUniqueArgs} args - Arguments to find a MediaAsset
     * @example
     * // Get one MediaAsset
     * const mediaAsset = await prisma.mediaAsset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaAssetFindUniqueArgs>(args: SelectSubset<T, MediaAssetFindUniqueArgs<ExtArgs>>): Prisma__MediaAssetClient<$Result.GetResult<Prisma.$MediaAssetPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MediaAsset that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MediaAssetFindUniqueOrThrowArgs} args - Arguments to find a MediaAsset
     * @example
     * // Get one MediaAsset
     * const mediaAsset = await prisma.mediaAsset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaAssetFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaAssetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaAssetClient<$Result.GetResult<Prisma.$MediaAssetPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MediaAsset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAssetFindFirstArgs} args - Arguments to find a MediaAsset
     * @example
     * // Get one MediaAsset
     * const mediaAsset = await prisma.mediaAsset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaAssetFindFirstArgs>(args?: SelectSubset<T, MediaAssetFindFirstArgs<ExtArgs>>): Prisma__MediaAssetClient<$Result.GetResult<Prisma.$MediaAssetPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MediaAsset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAssetFindFirstOrThrowArgs} args - Arguments to find a MediaAsset
     * @example
     * // Get one MediaAsset
     * const mediaAsset = await prisma.mediaAsset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaAssetFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaAssetFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaAssetClient<$Result.GetResult<Prisma.$MediaAssetPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MediaAssets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAssetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MediaAssets
     * const mediaAssets = await prisma.mediaAsset.findMany()
     * 
     * // Get first 10 MediaAssets
     * const mediaAssets = await prisma.mediaAsset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaAssetWithIdOnly = await prisma.mediaAsset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaAssetFindManyArgs>(args?: SelectSubset<T, MediaAssetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaAssetPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MediaAsset.
     * @param {MediaAssetCreateArgs} args - Arguments to create a MediaAsset.
     * @example
     * // Create one MediaAsset
     * const MediaAsset = await prisma.mediaAsset.create({
     *   data: {
     *     // ... data to create a MediaAsset
     *   }
     * })
     * 
     */
    create<T extends MediaAssetCreateArgs>(args: SelectSubset<T, MediaAssetCreateArgs<ExtArgs>>): Prisma__MediaAssetClient<$Result.GetResult<Prisma.$MediaAssetPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MediaAssets.
     * @param {MediaAssetCreateManyArgs} args - Arguments to create many MediaAssets.
     * @example
     * // Create many MediaAssets
     * const mediaAsset = await prisma.mediaAsset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaAssetCreateManyArgs>(args?: SelectSubset<T, MediaAssetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MediaAsset.
     * @param {MediaAssetDeleteArgs} args - Arguments to delete one MediaAsset.
     * @example
     * // Delete one MediaAsset
     * const MediaAsset = await prisma.mediaAsset.delete({
     *   where: {
     *     // ... filter to delete one MediaAsset
     *   }
     * })
     * 
     */
    delete<T extends MediaAssetDeleteArgs>(args: SelectSubset<T, MediaAssetDeleteArgs<ExtArgs>>): Prisma__MediaAssetClient<$Result.GetResult<Prisma.$MediaAssetPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MediaAsset.
     * @param {MediaAssetUpdateArgs} args - Arguments to update one MediaAsset.
     * @example
     * // Update one MediaAsset
     * const mediaAsset = await prisma.mediaAsset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaAssetUpdateArgs>(args: SelectSubset<T, MediaAssetUpdateArgs<ExtArgs>>): Prisma__MediaAssetClient<$Result.GetResult<Prisma.$MediaAssetPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MediaAssets.
     * @param {MediaAssetDeleteManyArgs} args - Arguments to filter MediaAssets to delete.
     * @example
     * // Delete a few MediaAssets
     * const { count } = await prisma.mediaAsset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaAssetDeleteManyArgs>(args?: SelectSubset<T, MediaAssetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediaAssets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAssetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MediaAssets
     * const mediaAsset = await prisma.mediaAsset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaAssetUpdateManyArgs>(args: SelectSubset<T, MediaAssetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MediaAsset.
     * @param {MediaAssetUpsertArgs} args - Arguments to update or create a MediaAsset.
     * @example
     * // Update or create a MediaAsset
     * const mediaAsset = await prisma.mediaAsset.upsert({
     *   create: {
     *     // ... data to create a MediaAsset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MediaAsset we want to update
     *   }
     * })
     */
    upsert<T extends MediaAssetUpsertArgs>(args: SelectSubset<T, MediaAssetUpsertArgs<ExtArgs>>): Prisma__MediaAssetClient<$Result.GetResult<Prisma.$MediaAssetPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MediaAssets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAssetCountArgs} args - Arguments to filter MediaAssets to count.
     * @example
     * // Count the number of MediaAssets
     * const count = await prisma.mediaAsset.count({
     *   where: {
     *     // ... the filter for the MediaAssets we want to count
     *   }
     * })
    **/
    count<T extends MediaAssetCountArgs>(
      args?: Subset<T, MediaAssetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaAssetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MediaAsset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAssetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MediaAssetAggregateArgs>(args: Subset<T, MediaAssetAggregateArgs>): Prisma.PrismaPromise<GetMediaAssetAggregateType<T>>

    /**
     * Group by MediaAsset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAssetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MediaAssetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaAssetGroupByArgs['orderBy'] }
        : { orderBy?: MediaAssetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MediaAssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MediaAsset model
   */
  readonly fields: MediaAssetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MediaAsset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaAssetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MediaAsset model
   */ 
  interface MediaAssetFieldRefs {
    readonly id: FieldRef<"MediaAsset", 'Int'>
    readonly cloudinaryPublicId: FieldRef<"MediaAsset", 'String'>
    readonly url: FieldRef<"MediaAsset", 'String'>
    readonly altText: FieldRef<"MediaAsset", 'String'>
    readonly assetType: FieldRef<"MediaAsset", 'String'>
    readonly createdAt: FieldRef<"MediaAsset", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MediaAsset findUnique
   */
  export type MediaAssetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAsset
     */
    select?: MediaAssetSelect<ExtArgs> | null
    /**
     * Filter, which MediaAsset to fetch.
     */
    where: MediaAssetWhereUniqueInput
  }

  /**
   * MediaAsset findUniqueOrThrow
   */
  export type MediaAssetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAsset
     */
    select?: MediaAssetSelect<ExtArgs> | null
    /**
     * Filter, which MediaAsset to fetch.
     */
    where: MediaAssetWhereUniqueInput
  }

  /**
   * MediaAsset findFirst
   */
  export type MediaAssetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAsset
     */
    select?: MediaAssetSelect<ExtArgs> | null
    /**
     * Filter, which MediaAsset to fetch.
     */
    where?: MediaAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaAssets to fetch.
     */
    orderBy?: MediaAssetOrderByWithRelationInput | MediaAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaAssets.
     */
    cursor?: MediaAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaAssets.
     */
    distinct?: MediaAssetScalarFieldEnum | MediaAssetScalarFieldEnum[]
  }

  /**
   * MediaAsset findFirstOrThrow
   */
  export type MediaAssetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAsset
     */
    select?: MediaAssetSelect<ExtArgs> | null
    /**
     * Filter, which MediaAsset to fetch.
     */
    where?: MediaAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaAssets to fetch.
     */
    orderBy?: MediaAssetOrderByWithRelationInput | MediaAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaAssets.
     */
    cursor?: MediaAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaAssets.
     */
    distinct?: MediaAssetScalarFieldEnum | MediaAssetScalarFieldEnum[]
  }

  /**
   * MediaAsset findMany
   */
  export type MediaAssetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAsset
     */
    select?: MediaAssetSelect<ExtArgs> | null
    /**
     * Filter, which MediaAssets to fetch.
     */
    where?: MediaAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaAssets to fetch.
     */
    orderBy?: MediaAssetOrderByWithRelationInput | MediaAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MediaAssets.
     */
    cursor?: MediaAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaAssets.
     */
    skip?: number
    distinct?: MediaAssetScalarFieldEnum | MediaAssetScalarFieldEnum[]
  }

  /**
   * MediaAsset create
   */
  export type MediaAssetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAsset
     */
    select?: MediaAssetSelect<ExtArgs> | null
    /**
     * The data needed to create a MediaAsset.
     */
    data: XOR<MediaAssetCreateInput, MediaAssetUncheckedCreateInput>
  }

  /**
   * MediaAsset createMany
   */
  export type MediaAssetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MediaAssets.
     */
    data: MediaAssetCreateManyInput | MediaAssetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MediaAsset update
   */
  export type MediaAssetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAsset
     */
    select?: MediaAssetSelect<ExtArgs> | null
    /**
     * The data needed to update a MediaAsset.
     */
    data: XOR<MediaAssetUpdateInput, MediaAssetUncheckedUpdateInput>
    /**
     * Choose, which MediaAsset to update.
     */
    where: MediaAssetWhereUniqueInput
  }

  /**
   * MediaAsset updateMany
   */
  export type MediaAssetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MediaAssets.
     */
    data: XOR<MediaAssetUpdateManyMutationInput, MediaAssetUncheckedUpdateManyInput>
    /**
     * Filter which MediaAssets to update
     */
    where?: MediaAssetWhereInput
  }

  /**
   * MediaAsset upsert
   */
  export type MediaAssetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAsset
     */
    select?: MediaAssetSelect<ExtArgs> | null
    /**
     * The filter to search for the MediaAsset to update in case it exists.
     */
    where: MediaAssetWhereUniqueInput
    /**
     * In case the MediaAsset found by the `where` argument doesn't exist, create a new MediaAsset with this data.
     */
    create: XOR<MediaAssetCreateInput, MediaAssetUncheckedCreateInput>
    /**
     * In case the MediaAsset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaAssetUpdateInput, MediaAssetUncheckedUpdateInput>
  }

  /**
   * MediaAsset delete
   */
  export type MediaAssetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAsset
     */
    select?: MediaAssetSelect<ExtArgs> | null
    /**
     * Filter which MediaAsset to delete.
     */
    where: MediaAssetWhereUniqueInput
  }

  /**
   * MediaAsset deleteMany
   */
  export type MediaAssetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaAssets to delete
     */
    where?: MediaAssetWhereInput
  }

  /**
   * MediaAsset without action
   */
  export type MediaAssetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAsset
     */
    select?: MediaAssetSelect<ExtArgs> | null
  }


  /**
   * Model QuoteRequest
   */

  export type AggregateQuoteRequest = {
    _count: QuoteRequestCountAggregateOutputType | null
    _avg: QuoteRequestAvgAggregateOutputType | null
    _sum: QuoteRequestSumAggregateOutputType | null
    _min: QuoteRequestMinAggregateOutputType | null
    _max: QuoteRequestMaxAggregateOutputType | null
  }

  export type QuoteRequestAvgAggregateOutputType = {
    id: number | null
  }

  export type QuoteRequestSumAggregateOutputType = {
    id: number | null
  }

  export type QuoteRequestMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    company: string | null
    phone: string | null
    skuDetails: string | null
    timeline: string | null
    message: string | null
    createdAt: Date | null
  }

  export type QuoteRequestMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    company: string | null
    phone: string | null
    skuDetails: string | null
    timeline: string | null
    message: string | null
    createdAt: Date | null
  }

  export type QuoteRequestCountAggregateOutputType = {
    id: number
    name: number
    email: number
    company: number
    phone: number
    skuDetails: number
    timeline: number
    message: number
    createdAt: number
    _all: number
  }


  export type QuoteRequestAvgAggregateInputType = {
    id?: true
  }

  export type QuoteRequestSumAggregateInputType = {
    id?: true
  }

  export type QuoteRequestMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    company?: true
    phone?: true
    skuDetails?: true
    timeline?: true
    message?: true
    createdAt?: true
  }

  export type QuoteRequestMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    company?: true
    phone?: true
    skuDetails?: true
    timeline?: true
    message?: true
    createdAt?: true
  }

  export type QuoteRequestCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    company?: true
    phone?: true
    skuDetails?: true
    timeline?: true
    message?: true
    createdAt?: true
    _all?: true
  }

  export type QuoteRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuoteRequest to aggregate.
     */
    where?: QuoteRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuoteRequests to fetch.
     */
    orderBy?: QuoteRequestOrderByWithRelationInput | QuoteRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuoteRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuoteRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuoteRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuoteRequests
    **/
    _count?: true | QuoteRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuoteRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuoteRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuoteRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuoteRequestMaxAggregateInputType
  }

  export type GetQuoteRequestAggregateType<T extends QuoteRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateQuoteRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuoteRequest[P]>
      : GetScalarType<T[P], AggregateQuoteRequest[P]>
  }




  export type QuoteRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuoteRequestWhereInput
    orderBy?: QuoteRequestOrderByWithAggregationInput | QuoteRequestOrderByWithAggregationInput[]
    by: QuoteRequestScalarFieldEnum[] | QuoteRequestScalarFieldEnum
    having?: QuoteRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuoteRequestCountAggregateInputType | true
    _avg?: QuoteRequestAvgAggregateInputType
    _sum?: QuoteRequestSumAggregateInputType
    _min?: QuoteRequestMinAggregateInputType
    _max?: QuoteRequestMaxAggregateInputType
  }

  export type QuoteRequestGroupByOutputType = {
    id: number
    name: string
    email: string
    company: string
    phone: string | null
    skuDetails: string
    timeline: string | null
    message: string | null
    createdAt: Date
    _count: QuoteRequestCountAggregateOutputType | null
    _avg: QuoteRequestAvgAggregateOutputType | null
    _sum: QuoteRequestSumAggregateOutputType | null
    _min: QuoteRequestMinAggregateOutputType | null
    _max: QuoteRequestMaxAggregateOutputType | null
  }

  type GetQuoteRequestGroupByPayload<T extends QuoteRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuoteRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuoteRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuoteRequestGroupByOutputType[P]>
            : GetScalarType<T[P], QuoteRequestGroupByOutputType[P]>
        }
      >
    >


  export type QuoteRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    company?: boolean
    phone?: boolean
    skuDetails?: boolean
    timeline?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["quoteRequest"]>


  export type QuoteRequestSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    company?: boolean
    phone?: boolean
    skuDetails?: boolean
    timeline?: boolean
    message?: boolean
    createdAt?: boolean
  }


  export type $QuoteRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuoteRequest"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      company: string
      phone: string | null
      skuDetails: string
      timeline: string | null
      message: string | null
      createdAt: Date
    }, ExtArgs["result"]["quoteRequest"]>
    composites: {}
  }

  type QuoteRequestGetPayload<S extends boolean | null | undefined | QuoteRequestDefaultArgs> = $Result.GetResult<Prisma.$QuoteRequestPayload, S>

  type QuoteRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QuoteRequestFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: QuoteRequestCountAggregateInputType | true
    }

  export interface QuoteRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuoteRequest'], meta: { name: 'QuoteRequest' } }
    /**
     * Find zero or one QuoteRequest that matches the filter.
     * @param {QuoteRequestFindUniqueArgs} args - Arguments to find a QuoteRequest
     * @example
     * // Get one QuoteRequest
     * const quoteRequest = await prisma.quoteRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuoteRequestFindUniqueArgs>(args: SelectSubset<T, QuoteRequestFindUniqueArgs<ExtArgs>>): Prisma__QuoteRequestClient<$Result.GetResult<Prisma.$QuoteRequestPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one QuoteRequest that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {QuoteRequestFindUniqueOrThrowArgs} args - Arguments to find a QuoteRequest
     * @example
     * // Get one QuoteRequest
     * const quoteRequest = await prisma.quoteRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuoteRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, QuoteRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuoteRequestClient<$Result.GetResult<Prisma.$QuoteRequestPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first QuoteRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteRequestFindFirstArgs} args - Arguments to find a QuoteRequest
     * @example
     * // Get one QuoteRequest
     * const quoteRequest = await prisma.quoteRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuoteRequestFindFirstArgs>(args?: SelectSubset<T, QuoteRequestFindFirstArgs<ExtArgs>>): Prisma__QuoteRequestClient<$Result.GetResult<Prisma.$QuoteRequestPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first QuoteRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteRequestFindFirstOrThrowArgs} args - Arguments to find a QuoteRequest
     * @example
     * // Get one QuoteRequest
     * const quoteRequest = await prisma.quoteRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuoteRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, QuoteRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuoteRequestClient<$Result.GetResult<Prisma.$QuoteRequestPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more QuoteRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuoteRequests
     * const quoteRequests = await prisma.quoteRequest.findMany()
     * 
     * // Get first 10 QuoteRequests
     * const quoteRequests = await prisma.quoteRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quoteRequestWithIdOnly = await prisma.quoteRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuoteRequestFindManyArgs>(args?: SelectSubset<T, QuoteRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuoteRequestPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a QuoteRequest.
     * @param {QuoteRequestCreateArgs} args - Arguments to create a QuoteRequest.
     * @example
     * // Create one QuoteRequest
     * const QuoteRequest = await prisma.quoteRequest.create({
     *   data: {
     *     // ... data to create a QuoteRequest
     *   }
     * })
     * 
     */
    create<T extends QuoteRequestCreateArgs>(args: SelectSubset<T, QuoteRequestCreateArgs<ExtArgs>>): Prisma__QuoteRequestClient<$Result.GetResult<Prisma.$QuoteRequestPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many QuoteRequests.
     * @param {QuoteRequestCreateManyArgs} args - Arguments to create many QuoteRequests.
     * @example
     * // Create many QuoteRequests
     * const quoteRequest = await prisma.quoteRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuoteRequestCreateManyArgs>(args?: SelectSubset<T, QuoteRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a QuoteRequest.
     * @param {QuoteRequestDeleteArgs} args - Arguments to delete one QuoteRequest.
     * @example
     * // Delete one QuoteRequest
     * const QuoteRequest = await prisma.quoteRequest.delete({
     *   where: {
     *     // ... filter to delete one QuoteRequest
     *   }
     * })
     * 
     */
    delete<T extends QuoteRequestDeleteArgs>(args: SelectSubset<T, QuoteRequestDeleteArgs<ExtArgs>>): Prisma__QuoteRequestClient<$Result.GetResult<Prisma.$QuoteRequestPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one QuoteRequest.
     * @param {QuoteRequestUpdateArgs} args - Arguments to update one QuoteRequest.
     * @example
     * // Update one QuoteRequest
     * const quoteRequest = await prisma.quoteRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuoteRequestUpdateArgs>(args: SelectSubset<T, QuoteRequestUpdateArgs<ExtArgs>>): Prisma__QuoteRequestClient<$Result.GetResult<Prisma.$QuoteRequestPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more QuoteRequests.
     * @param {QuoteRequestDeleteManyArgs} args - Arguments to filter QuoteRequests to delete.
     * @example
     * // Delete a few QuoteRequests
     * const { count } = await prisma.quoteRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuoteRequestDeleteManyArgs>(args?: SelectSubset<T, QuoteRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuoteRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuoteRequests
     * const quoteRequest = await prisma.quoteRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuoteRequestUpdateManyArgs>(args: SelectSubset<T, QuoteRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QuoteRequest.
     * @param {QuoteRequestUpsertArgs} args - Arguments to update or create a QuoteRequest.
     * @example
     * // Update or create a QuoteRequest
     * const quoteRequest = await prisma.quoteRequest.upsert({
     *   create: {
     *     // ... data to create a QuoteRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuoteRequest we want to update
     *   }
     * })
     */
    upsert<T extends QuoteRequestUpsertArgs>(args: SelectSubset<T, QuoteRequestUpsertArgs<ExtArgs>>): Prisma__QuoteRequestClient<$Result.GetResult<Prisma.$QuoteRequestPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of QuoteRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteRequestCountArgs} args - Arguments to filter QuoteRequests to count.
     * @example
     * // Count the number of QuoteRequests
     * const count = await prisma.quoteRequest.count({
     *   where: {
     *     // ... the filter for the QuoteRequests we want to count
     *   }
     * })
    **/
    count<T extends QuoteRequestCountArgs>(
      args?: Subset<T, QuoteRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuoteRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuoteRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuoteRequestAggregateArgs>(args: Subset<T, QuoteRequestAggregateArgs>): Prisma.PrismaPromise<GetQuoteRequestAggregateType<T>>

    /**
     * Group by QuoteRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuoteRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuoteRequestGroupByArgs['orderBy'] }
        : { orderBy?: QuoteRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuoteRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuoteRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuoteRequest model
   */
  readonly fields: QuoteRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuoteRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuoteRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuoteRequest model
   */ 
  interface QuoteRequestFieldRefs {
    readonly id: FieldRef<"QuoteRequest", 'Int'>
    readonly name: FieldRef<"QuoteRequest", 'String'>
    readonly email: FieldRef<"QuoteRequest", 'String'>
    readonly company: FieldRef<"QuoteRequest", 'String'>
    readonly phone: FieldRef<"QuoteRequest", 'String'>
    readonly skuDetails: FieldRef<"QuoteRequest", 'String'>
    readonly timeline: FieldRef<"QuoteRequest", 'String'>
    readonly message: FieldRef<"QuoteRequest", 'String'>
    readonly createdAt: FieldRef<"QuoteRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuoteRequest findUnique
   */
  export type QuoteRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteRequest
     */
    select?: QuoteRequestSelect<ExtArgs> | null
    /**
     * Filter, which QuoteRequest to fetch.
     */
    where: QuoteRequestWhereUniqueInput
  }

  /**
   * QuoteRequest findUniqueOrThrow
   */
  export type QuoteRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteRequest
     */
    select?: QuoteRequestSelect<ExtArgs> | null
    /**
     * Filter, which QuoteRequest to fetch.
     */
    where: QuoteRequestWhereUniqueInput
  }

  /**
   * QuoteRequest findFirst
   */
  export type QuoteRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteRequest
     */
    select?: QuoteRequestSelect<ExtArgs> | null
    /**
     * Filter, which QuoteRequest to fetch.
     */
    where?: QuoteRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuoteRequests to fetch.
     */
    orderBy?: QuoteRequestOrderByWithRelationInput | QuoteRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuoteRequests.
     */
    cursor?: QuoteRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuoteRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuoteRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuoteRequests.
     */
    distinct?: QuoteRequestScalarFieldEnum | QuoteRequestScalarFieldEnum[]
  }

  /**
   * QuoteRequest findFirstOrThrow
   */
  export type QuoteRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteRequest
     */
    select?: QuoteRequestSelect<ExtArgs> | null
    /**
     * Filter, which QuoteRequest to fetch.
     */
    where?: QuoteRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuoteRequests to fetch.
     */
    orderBy?: QuoteRequestOrderByWithRelationInput | QuoteRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuoteRequests.
     */
    cursor?: QuoteRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuoteRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuoteRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuoteRequests.
     */
    distinct?: QuoteRequestScalarFieldEnum | QuoteRequestScalarFieldEnum[]
  }

  /**
   * QuoteRequest findMany
   */
  export type QuoteRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteRequest
     */
    select?: QuoteRequestSelect<ExtArgs> | null
    /**
     * Filter, which QuoteRequests to fetch.
     */
    where?: QuoteRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuoteRequests to fetch.
     */
    orderBy?: QuoteRequestOrderByWithRelationInput | QuoteRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuoteRequests.
     */
    cursor?: QuoteRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuoteRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuoteRequests.
     */
    skip?: number
    distinct?: QuoteRequestScalarFieldEnum | QuoteRequestScalarFieldEnum[]
  }

  /**
   * QuoteRequest create
   */
  export type QuoteRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteRequest
     */
    select?: QuoteRequestSelect<ExtArgs> | null
    /**
     * The data needed to create a QuoteRequest.
     */
    data: XOR<QuoteRequestCreateInput, QuoteRequestUncheckedCreateInput>
  }

  /**
   * QuoteRequest createMany
   */
  export type QuoteRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuoteRequests.
     */
    data: QuoteRequestCreateManyInput | QuoteRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuoteRequest update
   */
  export type QuoteRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteRequest
     */
    select?: QuoteRequestSelect<ExtArgs> | null
    /**
     * The data needed to update a QuoteRequest.
     */
    data: XOR<QuoteRequestUpdateInput, QuoteRequestUncheckedUpdateInput>
    /**
     * Choose, which QuoteRequest to update.
     */
    where: QuoteRequestWhereUniqueInput
  }

  /**
   * QuoteRequest updateMany
   */
  export type QuoteRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuoteRequests.
     */
    data: XOR<QuoteRequestUpdateManyMutationInput, QuoteRequestUncheckedUpdateManyInput>
    /**
     * Filter which QuoteRequests to update
     */
    where?: QuoteRequestWhereInput
  }

  /**
   * QuoteRequest upsert
   */
  export type QuoteRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteRequest
     */
    select?: QuoteRequestSelect<ExtArgs> | null
    /**
     * The filter to search for the QuoteRequest to update in case it exists.
     */
    where: QuoteRequestWhereUniqueInput
    /**
     * In case the QuoteRequest found by the `where` argument doesn't exist, create a new QuoteRequest with this data.
     */
    create: XOR<QuoteRequestCreateInput, QuoteRequestUncheckedCreateInput>
    /**
     * In case the QuoteRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuoteRequestUpdateInput, QuoteRequestUncheckedUpdateInput>
  }

  /**
   * QuoteRequest delete
   */
  export type QuoteRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteRequest
     */
    select?: QuoteRequestSelect<ExtArgs> | null
    /**
     * Filter which QuoteRequest to delete.
     */
    where: QuoteRequestWhereUniqueInput
  }

  /**
   * QuoteRequest deleteMany
   */
  export type QuoteRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuoteRequests to delete
     */
    where?: QuoteRequestWhereInput
  }

  /**
   * QuoteRequest without action
   */
  export type QuoteRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteRequest
     */
    select?: QuoteRequestSelect<ExtArgs> | null
  }


  /**
   * Model StoreSetting
   */

  export type AggregateStoreSetting = {
    _count: StoreSettingCountAggregateOutputType | null
    _avg: StoreSettingAvgAggregateOutputType | null
    _sum: StoreSettingSumAggregateOutputType | null
    _min: StoreSettingMinAggregateOutputType | null
    _max: StoreSettingMaxAggregateOutputType | null
  }

  export type StoreSettingAvgAggregateOutputType = {
    id: number | null
  }

  export type StoreSettingSumAggregateOutputType = {
    id: number | null
  }

  export type StoreSettingMinAggregateOutputType = {
    id: number | null
    brandName: string | null
    logoUrl: string | null
    metaTitle: string | null
    metaDescription: string | null
    ogDescription: string | null
    seoKeywords: string | null
    searchConsoleId: string | null
    gaMeasurementId: string | null
    bingVerifyId: string | null
    marquee: string | null
    footerText: string | null
    contactEmail: string | null
    checkoutMode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoreSettingMaxAggregateOutputType = {
    id: number | null
    brandName: string | null
    logoUrl: string | null
    metaTitle: string | null
    metaDescription: string | null
    ogDescription: string | null
    seoKeywords: string | null
    searchConsoleId: string | null
    gaMeasurementId: string | null
    bingVerifyId: string | null
    marquee: string | null
    footerText: string | null
    contactEmail: string | null
    checkoutMode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoreSettingCountAggregateOutputType = {
    id: number
    brandName: number
    logoUrl: number
    metaTitle: number
    metaDescription: number
    ogDescription: number
    seoKeywords: number
    searchConsoleId: number
    gaMeasurementId: number
    bingVerifyId: number
    marquee: number
    footerText: number
    contactEmail: number
    checkoutMode: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StoreSettingAvgAggregateInputType = {
    id?: true
  }

  export type StoreSettingSumAggregateInputType = {
    id?: true
  }

  export type StoreSettingMinAggregateInputType = {
    id?: true
    brandName?: true
    logoUrl?: true
    metaTitle?: true
    metaDescription?: true
    ogDescription?: true
    seoKeywords?: true
    searchConsoleId?: true
    gaMeasurementId?: true
    bingVerifyId?: true
    marquee?: true
    footerText?: true
    contactEmail?: true
    checkoutMode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoreSettingMaxAggregateInputType = {
    id?: true
    brandName?: true
    logoUrl?: true
    metaTitle?: true
    metaDescription?: true
    ogDescription?: true
    seoKeywords?: true
    searchConsoleId?: true
    gaMeasurementId?: true
    bingVerifyId?: true
    marquee?: true
    footerText?: true
    contactEmail?: true
    checkoutMode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoreSettingCountAggregateInputType = {
    id?: true
    brandName?: true
    logoUrl?: true
    metaTitle?: true
    metaDescription?: true
    ogDescription?: true
    seoKeywords?: true
    searchConsoleId?: true
    gaMeasurementId?: true
    bingVerifyId?: true
    marquee?: true
    footerText?: true
    contactEmail?: true
    checkoutMode?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StoreSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreSetting to aggregate.
     */
    where?: StoreSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreSettings to fetch.
     */
    orderBy?: StoreSettingOrderByWithRelationInput | StoreSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StoreSettings
    **/
    _count?: true | StoreSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreSettingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreSettingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreSettingMaxAggregateInputType
  }

  export type GetStoreSettingAggregateType<T extends StoreSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateStoreSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStoreSetting[P]>
      : GetScalarType<T[P], AggregateStoreSetting[P]>
  }




  export type StoreSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreSettingWhereInput
    orderBy?: StoreSettingOrderByWithAggregationInput | StoreSettingOrderByWithAggregationInput[]
    by: StoreSettingScalarFieldEnum[] | StoreSettingScalarFieldEnum
    having?: StoreSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreSettingCountAggregateInputType | true
    _avg?: StoreSettingAvgAggregateInputType
    _sum?: StoreSettingSumAggregateInputType
    _min?: StoreSettingMinAggregateInputType
    _max?: StoreSettingMaxAggregateInputType
  }

  export type StoreSettingGroupByOutputType = {
    id: number
    brandName: string
    logoUrl: string
    metaTitle: string
    metaDescription: string
    ogDescription: string
    seoKeywords: string | null
    searchConsoleId: string | null
    gaMeasurementId: string | null
    bingVerifyId: string | null
    marquee: string
    footerText: string
    contactEmail: string
    checkoutMode: string
    createdAt: Date
    updatedAt: Date
    _count: StoreSettingCountAggregateOutputType | null
    _avg: StoreSettingAvgAggregateOutputType | null
    _sum: StoreSettingSumAggregateOutputType | null
    _min: StoreSettingMinAggregateOutputType | null
    _max: StoreSettingMaxAggregateOutputType | null
  }

  type GetStoreSettingGroupByPayload<T extends StoreSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreSettingGroupByOutputType[P]>
            : GetScalarType<T[P], StoreSettingGroupByOutputType[P]>
        }
      >
    >


  export type StoreSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brandName?: boolean
    logoUrl?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    ogDescription?: boolean
    seoKeywords?: boolean
    searchConsoleId?: boolean
    gaMeasurementId?: boolean
    bingVerifyId?: boolean
    marquee?: boolean
    footerText?: boolean
    contactEmail?: boolean
    checkoutMode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["storeSetting"]>


  export type StoreSettingSelectScalar = {
    id?: boolean
    brandName?: boolean
    logoUrl?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    ogDescription?: boolean
    seoKeywords?: boolean
    searchConsoleId?: boolean
    gaMeasurementId?: boolean
    bingVerifyId?: boolean
    marquee?: boolean
    footerText?: boolean
    contactEmail?: boolean
    checkoutMode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $StoreSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StoreSetting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      brandName: string
      logoUrl: string
      metaTitle: string
      metaDescription: string
      ogDescription: string
      seoKeywords: string | null
      searchConsoleId: string | null
      gaMeasurementId: string | null
      bingVerifyId: string | null
      marquee: string
      footerText: string
      contactEmail: string
      checkoutMode: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["storeSetting"]>
    composites: {}
  }

  type StoreSettingGetPayload<S extends boolean | null | undefined | StoreSettingDefaultArgs> = $Result.GetResult<Prisma.$StoreSettingPayload, S>

  type StoreSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StoreSettingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StoreSettingCountAggregateInputType | true
    }

  export interface StoreSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StoreSetting'], meta: { name: 'StoreSetting' } }
    /**
     * Find zero or one StoreSetting that matches the filter.
     * @param {StoreSettingFindUniqueArgs} args - Arguments to find a StoreSetting
     * @example
     * // Get one StoreSetting
     * const storeSetting = await prisma.storeSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreSettingFindUniqueArgs>(args: SelectSubset<T, StoreSettingFindUniqueArgs<ExtArgs>>): Prisma__StoreSettingClient<$Result.GetResult<Prisma.$StoreSettingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StoreSetting that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StoreSettingFindUniqueOrThrowArgs} args - Arguments to find a StoreSetting
     * @example
     * // Get one StoreSetting
     * const storeSetting = await prisma.storeSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreSettingFindUniqueOrThrowArgs>(args: SelectSubset<T, StoreSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoreSettingClient<$Result.GetResult<Prisma.$StoreSettingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StoreSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreSettingFindFirstArgs} args - Arguments to find a StoreSetting
     * @example
     * // Get one StoreSetting
     * const storeSetting = await prisma.storeSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreSettingFindFirstArgs>(args?: SelectSubset<T, StoreSettingFindFirstArgs<ExtArgs>>): Prisma__StoreSettingClient<$Result.GetResult<Prisma.$StoreSettingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StoreSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreSettingFindFirstOrThrowArgs} args - Arguments to find a StoreSetting
     * @example
     * // Get one StoreSetting
     * const storeSetting = await prisma.storeSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreSettingFindFirstOrThrowArgs>(args?: SelectSubset<T, StoreSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoreSettingClient<$Result.GetResult<Prisma.$StoreSettingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StoreSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StoreSettings
     * const storeSettings = await prisma.storeSetting.findMany()
     * 
     * // Get first 10 StoreSettings
     * const storeSettings = await prisma.storeSetting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeSettingWithIdOnly = await prisma.storeSetting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoreSettingFindManyArgs>(args?: SelectSubset<T, StoreSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreSettingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StoreSetting.
     * @param {StoreSettingCreateArgs} args - Arguments to create a StoreSetting.
     * @example
     * // Create one StoreSetting
     * const StoreSetting = await prisma.storeSetting.create({
     *   data: {
     *     // ... data to create a StoreSetting
     *   }
     * })
     * 
     */
    create<T extends StoreSettingCreateArgs>(args: SelectSubset<T, StoreSettingCreateArgs<ExtArgs>>): Prisma__StoreSettingClient<$Result.GetResult<Prisma.$StoreSettingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StoreSettings.
     * @param {StoreSettingCreateManyArgs} args - Arguments to create many StoreSettings.
     * @example
     * // Create many StoreSettings
     * const storeSetting = await prisma.storeSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoreSettingCreateManyArgs>(args?: SelectSubset<T, StoreSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StoreSetting.
     * @param {StoreSettingDeleteArgs} args - Arguments to delete one StoreSetting.
     * @example
     * // Delete one StoreSetting
     * const StoreSetting = await prisma.storeSetting.delete({
     *   where: {
     *     // ... filter to delete one StoreSetting
     *   }
     * })
     * 
     */
    delete<T extends StoreSettingDeleteArgs>(args: SelectSubset<T, StoreSettingDeleteArgs<ExtArgs>>): Prisma__StoreSettingClient<$Result.GetResult<Prisma.$StoreSettingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StoreSetting.
     * @param {StoreSettingUpdateArgs} args - Arguments to update one StoreSetting.
     * @example
     * // Update one StoreSetting
     * const storeSetting = await prisma.storeSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoreSettingUpdateArgs>(args: SelectSubset<T, StoreSettingUpdateArgs<ExtArgs>>): Prisma__StoreSettingClient<$Result.GetResult<Prisma.$StoreSettingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StoreSettings.
     * @param {StoreSettingDeleteManyArgs} args - Arguments to filter StoreSettings to delete.
     * @example
     * // Delete a few StoreSettings
     * const { count } = await prisma.storeSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoreSettingDeleteManyArgs>(args?: SelectSubset<T, StoreSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoreSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StoreSettings
     * const storeSetting = await prisma.storeSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoreSettingUpdateManyArgs>(args: SelectSubset<T, StoreSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StoreSetting.
     * @param {StoreSettingUpsertArgs} args - Arguments to update or create a StoreSetting.
     * @example
     * // Update or create a StoreSetting
     * const storeSetting = await prisma.storeSetting.upsert({
     *   create: {
     *     // ... data to create a StoreSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StoreSetting we want to update
     *   }
     * })
     */
    upsert<T extends StoreSettingUpsertArgs>(args: SelectSubset<T, StoreSettingUpsertArgs<ExtArgs>>): Prisma__StoreSettingClient<$Result.GetResult<Prisma.$StoreSettingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StoreSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreSettingCountArgs} args - Arguments to filter StoreSettings to count.
     * @example
     * // Count the number of StoreSettings
     * const count = await prisma.storeSetting.count({
     *   where: {
     *     // ... the filter for the StoreSettings we want to count
     *   }
     * })
    **/
    count<T extends StoreSettingCountArgs>(
      args?: Subset<T, StoreSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StoreSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoreSettingAggregateArgs>(args: Subset<T, StoreSettingAggregateArgs>): Prisma.PrismaPromise<GetStoreSettingAggregateType<T>>

    /**
     * Group by StoreSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreSettingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StoreSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreSettingGroupByArgs['orderBy'] }
        : { orderBy?: StoreSettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StoreSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StoreSetting model
   */
  readonly fields: StoreSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StoreSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StoreSetting model
   */ 
  interface StoreSettingFieldRefs {
    readonly id: FieldRef<"StoreSetting", 'Int'>
    readonly brandName: FieldRef<"StoreSetting", 'String'>
    readonly logoUrl: FieldRef<"StoreSetting", 'String'>
    readonly metaTitle: FieldRef<"StoreSetting", 'String'>
    readonly metaDescription: FieldRef<"StoreSetting", 'String'>
    readonly ogDescription: FieldRef<"StoreSetting", 'String'>
    readonly seoKeywords: FieldRef<"StoreSetting", 'String'>
    readonly searchConsoleId: FieldRef<"StoreSetting", 'String'>
    readonly gaMeasurementId: FieldRef<"StoreSetting", 'String'>
    readonly bingVerifyId: FieldRef<"StoreSetting", 'String'>
    readonly marquee: FieldRef<"StoreSetting", 'String'>
    readonly footerText: FieldRef<"StoreSetting", 'String'>
    readonly contactEmail: FieldRef<"StoreSetting", 'String'>
    readonly checkoutMode: FieldRef<"StoreSetting", 'String'>
    readonly createdAt: FieldRef<"StoreSetting", 'DateTime'>
    readonly updatedAt: FieldRef<"StoreSetting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StoreSetting findUnique
   */
  export type StoreSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreSetting
     */
    select?: StoreSettingSelect<ExtArgs> | null
    /**
     * Filter, which StoreSetting to fetch.
     */
    where: StoreSettingWhereUniqueInput
  }

  /**
   * StoreSetting findUniqueOrThrow
   */
  export type StoreSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreSetting
     */
    select?: StoreSettingSelect<ExtArgs> | null
    /**
     * Filter, which StoreSetting to fetch.
     */
    where: StoreSettingWhereUniqueInput
  }

  /**
   * StoreSetting findFirst
   */
  export type StoreSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreSetting
     */
    select?: StoreSettingSelect<ExtArgs> | null
    /**
     * Filter, which StoreSetting to fetch.
     */
    where?: StoreSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreSettings to fetch.
     */
    orderBy?: StoreSettingOrderByWithRelationInput | StoreSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreSettings.
     */
    cursor?: StoreSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreSettings.
     */
    distinct?: StoreSettingScalarFieldEnum | StoreSettingScalarFieldEnum[]
  }

  /**
   * StoreSetting findFirstOrThrow
   */
  export type StoreSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreSetting
     */
    select?: StoreSettingSelect<ExtArgs> | null
    /**
     * Filter, which StoreSetting to fetch.
     */
    where?: StoreSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreSettings to fetch.
     */
    orderBy?: StoreSettingOrderByWithRelationInput | StoreSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreSettings.
     */
    cursor?: StoreSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreSettings.
     */
    distinct?: StoreSettingScalarFieldEnum | StoreSettingScalarFieldEnum[]
  }

  /**
   * StoreSetting findMany
   */
  export type StoreSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreSetting
     */
    select?: StoreSettingSelect<ExtArgs> | null
    /**
     * Filter, which StoreSettings to fetch.
     */
    where?: StoreSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreSettings to fetch.
     */
    orderBy?: StoreSettingOrderByWithRelationInput | StoreSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StoreSettings.
     */
    cursor?: StoreSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreSettings.
     */
    skip?: number
    distinct?: StoreSettingScalarFieldEnum | StoreSettingScalarFieldEnum[]
  }

  /**
   * StoreSetting create
   */
  export type StoreSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreSetting
     */
    select?: StoreSettingSelect<ExtArgs> | null
    /**
     * The data needed to create a StoreSetting.
     */
    data: XOR<StoreSettingCreateInput, StoreSettingUncheckedCreateInput>
  }

  /**
   * StoreSetting createMany
   */
  export type StoreSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StoreSettings.
     */
    data: StoreSettingCreateManyInput | StoreSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StoreSetting update
   */
  export type StoreSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreSetting
     */
    select?: StoreSettingSelect<ExtArgs> | null
    /**
     * The data needed to update a StoreSetting.
     */
    data: XOR<StoreSettingUpdateInput, StoreSettingUncheckedUpdateInput>
    /**
     * Choose, which StoreSetting to update.
     */
    where: StoreSettingWhereUniqueInput
  }

  /**
   * StoreSetting updateMany
   */
  export type StoreSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StoreSettings.
     */
    data: XOR<StoreSettingUpdateManyMutationInput, StoreSettingUncheckedUpdateManyInput>
    /**
     * Filter which StoreSettings to update
     */
    where?: StoreSettingWhereInput
  }

  /**
   * StoreSetting upsert
   */
  export type StoreSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreSetting
     */
    select?: StoreSettingSelect<ExtArgs> | null
    /**
     * The filter to search for the StoreSetting to update in case it exists.
     */
    where: StoreSettingWhereUniqueInput
    /**
     * In case the StoreSetting found by the `where` argument doesn't exist, create a new StoreSetting with this data.
     */
    create: XOR<StoreSettingCreateInput, StoreSettingUncheckedCreateInput>
    /**
     * In case the StoreSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreSettingUpdateInput, StoreSettingUncheckedUpdateInput>
  }

  /**
   * StoreSetting delete
   */
  export type StoreSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreSetting
     */
    select?: StoreSettingSelect<ExtArgs> | null
    /**
     * Filter which StoreSetting to delete.
     */
    where: StoreSettingWhereUniqueInput
  }

  /**
   * StoreSetting deleteMany
   */
  export type StoreSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreSettings to delete
     */
    where?: StoreSettingWhereInput
  }

  /**
   * StoreSetting without action
   */
  export type StoreSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreSetting
     */
    select?: StoreSettingSelect<ExtArgs> | null
  }


  /**
   * Model StoreContent
   */

  export type AggregateStoreContent = {
    _count: StoreContentCountAggregateOutputType | null
    _avg: StoreContentAvgAggregateOutputType | null
    _sum: StoreContentSumAggregateOutputType | null
    _min: StoreContentMinAggregateOutputType | null
    _max: StoreContentMaxAggregateOutputType | null
  }

  export type StoreContentAvgAggregateOutputType = {
    id: number | null
  }

  export type StoreContentSumAggregateOutputType = {
    id: number | null
  }

  export type StoreContentMinAggregateOutputType = {
    id: number | null
    heroEyebrow: string | null
    heroLineOne: string | null
    heroLineTwo: string | null
    heroLineThree: string | null
    heroCopy: string | null
    primaryCta: string | null
    secondaryCta: string | null
    dropsEyebrow: string | null
    dropsTitle: string | null
    menuTitle: string | null
    menuCopy: string | null
    faqTitle: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoreContentMaxAggregateOutputType = {
    id: number | null
    heroEyebrow: string | null
    heroLineOne: string | null
    heroLineTwo: string | null
    heroLineThree: string | null
    heroCopy: string | null
    primaryCta: string | null
    secondaryCta: string | null
    dropsEyebrow: string | null
    dropsTitle: string | null
    menuTitle: string | null
    menuCopy: string | null
    faqTitle: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoreContentCountAggregateOutputType = {
    id: number
    heroEyebrow: number
    heroLineOne: number
    heroLineTwo: number
    heroLineThree: number
    heroCopy: number
    primaryCta: number
    secondaryCta: number
    dropsEyebrow: number
    dropsTitle: number
    menuTitle: number
    menuCopy: number
    faqTitle: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StoreContentAvgAggregateInputType = {
    id?: true
  }

  export type StoreContentSumAggregateInputType = {
    id?: true
  }

  export type StoreContentMinAggregateInputType = {
    id?: true
    heroEyebrow?: true
    heroLineOne?: true
    heroLineTwo?: true
    heroLineThree?: true
    heroCopy?: true
    primaryCta?: true
    secondaryCta?: true
    dropsEyebrow?: true
    dropsTitle?: true
    menuTitle?: true
    menuCopy?: true
    faqTitle?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoreContentMaxAggregateInputType = {
    id?: true
    heroEyebrow?: true
    heroLineOne?: true
    heroLineTwo?: true
    heroLineThree?: true
    heroCopy?: true
    primaryCta?: true
    secondaryCta?: true
    dropsEyebrow?: true
    dropsTitle?: true
    menuTitle?: true
    menuCopy?: true
    faqTitle?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoreContentCountAggregateInputType = {
    id?: true
    heroEyebrow?: true
    heroLineOne?: true
    heroLineTwo?: true
    heroLineThree?: true
    heroCopy?: true
    primaryCta?: true
    secondaryCta?: true
    dropsEyebrow?: true
    dropsTitle?: true
    menuTitle?: true
    menuCopy?: true
    faqTitle?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StoreContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreContent to aggregate.
     */
    where?: StoreContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreContents to fetch.
     */
    orderBy?: StoreContentOrderByWithRelationInput | StoreContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StoreContents
    **/
    _count?: true | StoreContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreContentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreContentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreContentMaxAggregateInputType
  }

  export type GetStoreContentAggregateType<T extends StoreContentAggregateArgs> = {
        [P in keyof T & keyof AggregateStoreContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStoreContent[P]>
      : GetScalarType<T[P], AggregateStoreContent[P]>
  }




  export type StoreContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreContentWhereInput
    orderBy?: StoreContentOrderByWithAggregationInput | StoreContentOrderByWithAggregationInput[]
    by: StoreContentScalarFieldEnum[] | StoreContentScalarFieldEnum
    having?: StoreContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreContentCountAggregateInputType | true
    _avg?: StoreContentAvgAggregateInputType
    _sum?: StoreContentSumAggregateInputType
    _min?: StoreContentMinAggregateInputType
    _max?: StoreContentMaxAggregateInputType
  }

  export type StoreContentGroupByOutputType = {
    id: number
    heroEyebrow: string
    heroLineOne: string
    heroLineTwo: string
    heroLineThree: string
    heroCopy: string
    primaryCta: string
    secondaryCta: string
    dropsEyebrow: string
    dropsTitle: string
    menuTitle: string
    menuCopy: string
    faqTitle: string
    createdAt: Date
    updatedAt: Date
    _count: StoreContentCountAggregateOutputType | null
    _avg: StoreContentAvgAggregateOutputType | null
    _sum: StoreContentSumAggregateOutputType | null
    _min: StoreContentMinAggregateOutputType | null
    _max: StoreContentMaxAggregateOutputType | null
  }

  type GetStoreContentGroupByPayload<T extends StoreContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreContentGroupByOutputType[P]>
            : GetScalarType<T[P], StoreContentGroupByOutputType[P]>
        }
      >
    >


  export type StoreContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    heroEyebrow?: boolean
    heroLineOne?: boolean
    heroLineTwo?: boolean
    heroLineThree?: boolean
    heroCopy?: boolean
    primaryCta?: boolean
    secondaryCta?: boolean
    dropsEyebrow?: boolean
    dropsTitle?: boolean
    menuTitle?: boolean
    menuCopy?: boolean
    faqTitle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["storeContent"]>


  export type StoreContentSelectScalar = {
    id?: boolean
    heroEyebrow?: boolean
    heroLineOne?: boolean
    heroLineTwo?: boolean
    heroLineThree?: boolean
    heroCopy?: boolean
    primaryCta?: boolean
    secondaryCta?: boolean
    dropsEyebrow?: boolean
    dropsTitle?: boolean
    menuTitle?: boolean
    menuCopy?: boolean
    faqTitle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $StoreContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StoreContent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      heroEyebrow: string
      heroLineOne: string
      heroLineTwo: string
      heroLineThree: string
      heroCopy: string
      primaryCta: string
      secondaryCta: string
      dropsEyebrow: string
      dropsTitle: string
      menuTitle: string
      menuCopy: string
      faqTitle: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["storeContent"]>
    composites: {}
  }

  type StoreContentGetPayload<S extends boolean | null | undefined | StoreContentDefaultArgs> = $Result.GetResult<Prisma.$StoreContentPayload, S>

  type StoreContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StoreContentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StoreContentCountAggregateInputType | true
    }

  export interface StoreContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StoreContent'], meta: { name: 'StoreContent' } }
    /**
     * Find zero or one StoreContent that matches the filter.
     * @param {StoreContentFindUniqueArgs} args - Arguments to find a StoreContent
     * @example
     * // Get one StoreContent
     * const storeContent = await prisma.storeContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreContentFindUniqueArgs>(args: SelectSubset<T, StoreContentFindUniqueArgs<ExtArgs>>): Prisma__StoreContentClient<$Result.GetResult<Prisma.$StoreContentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StoreContent that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StoreContentFindUniqueOrThrowArgs} args - Arguments to find a StoreContent
     * @example
     * // Get one StoreContent
     * const storeContent = await prisma.storeContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreContentFindUniqueOrThrowArgs>(args: SelectSubset<T, StoreContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoreContentClient<$Result.GetResult<Prisma.$StoreContentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StoreContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreContentFindFirstArgs} args - Arguments to find a StoreContent
     * @example
     * // Get one StoreContent
     * const storeContent = await prisma.storeContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreContentFindFirstArgs>(args?: SelectSubset<T, StoreContentFindFirstArgs<ExtArgs>>): Prisma__StoreContentClient<$Result.GetResult<Prisma.$StoreContentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StoreContent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreContentFindFirstOrThrowArgs} args - Arguments to find a StoreContent
     * @example
     * // Get one StoreContent
     * const storeContent = await prisma.storeContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreContentFindFirstOrThrowArgs>(args?: SelectSubset<T, StoreContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoreContentClient<$Result.GetResult<Prisma.$StoreContentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StoreContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StoreContents
     * const storeContents = await prisma.storeContent.findMany()
     * 
     * // Get first 10 StoreContents
     * const storeContents = await prisma.storeContent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeContentWithIdOnly = await prisma.storeContent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoreContentFindManyArgs>(args?: SelectSubset<T, StoreContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreContentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StoreContent.
     * @param {StoreContentCreateArgs} args - Arguments to create a StoreContent.
     * @example
     * // Create one StoreContent
     * const StoreContent = await prisma.storeContent.create({
     *   data: {
     *     // ... data to create a StoreContent
     *   }
     * })
     * 
     */
    create<T extends StoreContentCreateArgs>(args: SelectSubset<T, StoreContentCreateArgs<ExtArgs>>): Prisma__StoreContentClient<$Result.GetResult<Prisma.$StoreContentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StoreContents.
     * @param {StoreContentCreateManyArgs} args - Arguments to create many StoreContents.
     * @example
     * // Create many StoreContents
     * const storeContent = await prisma.storeContent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoreContentCreateManyArgs>(args?: SelectSubset<T, StoreContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StoreContent.
     * @param {StoreContentDeleteArgs} args - Arguments to delete one StoreContent.
     * @example
     * // Delete one StoreContent
     * const StoreContent = await prisma.storeContent.delete({
     *   where: {
     *     // ... filter to delete one StoreContent
     *   }
     * })
     * 
     */
    delete<T extends StoreContentDeleteArgs>(args: SelectSubset<T, StoreContentDeleteArgs<ExtArgs>>): Prisma__StoreContentClient<$Result.GetResult<Prisma.$StoreContentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StoreContent.
     * @param {StoreContentUpdateArgs} args - Arguments to update one StoreContent.
     * @example
     * // Update one StoreContent
     * const storeContent = await prisma.storeContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoreContentUpdateArgs>(args: SelectSubset<T, StoreContentUpdateArgs<ExtArgs>>): Prisma__StoreContentClient<$Result.GetResult<Prisma.$StoreContentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StoreContents.
     * @param {StoreContentDeleteManyArgs} args - Arguments to filter StoreContents to delete.
     * @example
     * // Delete a few StoreContents
     * const { count } = await prisma.storeContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoreContentDeleteManyArgs>(args?: SelectSubset<T, StoreContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoreContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StoreContents
     * const storeContent = await prisma.storeContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoreContentUpdateManyArgs>(args: SelectSubset<T, StoreContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StoreContent.
     * @param {StoreContentUpsertArgs} args - Arguments to update or create a StoreContent.
     * @example
     * // Update or create a StoreContent
     * const storeContent = await prisma.storeContent.upsert({
     *   create: {
     *     // ... data to create a StoreContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StoreContent we want to update
     *   }
     * })
     */
    upsert<T extends StoreContentUpsertArgs>(args: SelectSubset<T, StoreContentUpsertArgs<ExtArgs>>): Prisma__StoreContentClient<$Result.GetResult<Prisma.$StoreContentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StoreContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreContentCountArgs} args - Arguments to filter StoreContents to count.
     * @example
     * // Count the number of StoreContents
     * const count = await prisma.storeContent.count({
     *   where: {
     *     // ... the filter for the StoreContents we want to count
     *   }
     * })
    **/
    count<T extends StoreContentCountArgs>(
      args?: Subset<T, StoreContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StoreContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoreContentAggregateArgs>(args: Subset<T, StoreContentAggregateArgs>): Prisma.PrismaPromise<GetStoreContentAggregateType<T>>

    /**
     * Group by StoreContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreContentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StoreContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreContentGroupByArgs['orderBy'] }
        : { orderBy?: StoreContentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StoreContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StoreContent model
   */
  readonly fields: StoreContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StoreContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StoreContent model
   */ 
  interface StoreContentFieldRefs {
    readonly id: FieldRef<"StoreContent", 'Int'>
    readonly heroEyebrow: FieldRef<"StoreContent", 'String'>
    readonly heroLineOne: FieldRef<"StoreContent", 'String'>
    readonly heroLineTwo: FieldRef<"StoreContent", 'String'>
    readonly heroLineThree: FieldRef<"StoreContent", 'String'>
    readonly heroCopy: FieldRef<"StoreContent", 'String'>
    readonly primaryCta: FieldRef<"StoreContent", 'String'>
    readonly secondaryCta: FieldRef<"StoreContent", 'String'>
    readonly dropsEyebrow: FieldRef<"StoreContent", 'String'>
    readonly dropsTitle: FieldRef<"StoreContent", 'String'>
    readonly menuTitle: FieldRef<"StoreContent", 'String'>
    readonly menuCopy: FieldRef<"StoreContent", 'String'>
    readonly faqTitle: FieldRef<"StoreContent", 'String'>
    readonly createdAt: FieldRef<"StoreContent", 'DateTime'>
    readonly updatedAt: FieldRef<"StoreContent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StoreContent findUnique
   */
  export type StoreContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreContent
     */
    select?: StoreContentSelect<ExtArgs> | null
    /**
     * Filter, which StoreContent to fetch.
     */
    where: StoreContentWhereUniqueInput
  }

  /**
   * StoreContent findUniqueOrThrow
   */
  export type StoreContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreContent
     */
    select?: StoreContentSelect<ExtArgs> | null
    /**
     * Filter, which StoreContent to fetch.
     */
    where: StoreContentWhereUniqueInput
  }

  /**
   * StoreContent findFirst
   */
  export type StoreContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreContent
     */
    select?: StoreContentSelect<ExtArgs> | null
    /**
     * Filter, which StoreContent to fetch.
     */
    where?: StoreContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreContents to fetch.
     */
    orderBy?: StoreContentOrderByWithRelationInput | StoreContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreContents.
     */
    cursor?: StoreContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreContents.
     */
    distinct?: StoreContentScalarFieldEnum | StoreContentScalarFieldEnum[]
  }

  /**
   * StoreContent findFirstOrThrow
   */
  export type StoreContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreContent
     */
    select?: StoreContentSelect<ExtArgs> | null
    /**
     * Filter, which StoreContent to fetch.
     */
    where?: StoreContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreContents to fetch.
     */
    orderBy?: StoreContentOrderByWithRelationInput | StoreContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreContents.
     */
    cursor?: StoreContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreContents.
     */
    distinct?: StoreContentScalarFieldEnum | StoreContentScalarFieldEnum[]
  }

  /**
   * StoreContent findMany
   */
  export type StoreContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreContent
     */
    select?: StoreContentSelect<ExtArgs> | null
    /**
     * Filter, which StoreContents to fetch.
     */
    where?: StoreContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreContents to fetch.
     */
    orderBy?: StoreContentOrderByWithRelationInput | StoreContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StoreContents.
     */
    cursor?: StoreContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreContents.
     */
    skip?: number
    distinct?: StoreContentScalarFieldEnum | StoreContentScalarFieldEnum[]
  }

  /**
   * StoreContent create
   */
  export type StoreContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreContent
     */
    select?: StoreContentSelect<ExtArgs> | null
    /**
     * The data needed to create a StoreContent.
     */
    data: XOR<StoreContentCreateInput, StoreContentUncheckedCreateInput>
  }

  /**
   * StoreContent createMany
   */
  export type StoreContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StoreContents.
     */
    data: StoreContentCreateManyInput | StoreContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StoreContent update
   */
  export type StoreContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreContent
     */
    select?: StoreContentSelect<ExtArgs> | null
    /**
     * The data needed to update a StoreContent.
     */
    data: XOR<StoreContentUpdateInput, StoreContentUncheckedUpdateInput>
    /**
     * Choose, which StoreContent to update.
     */
    where: StoreContentWhereUniqueInput
  }

  /**
   * StoreContent updateMany
   */
  export type StoreContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StoreContents.
     */
    data: XOR<StoreContentUpdateManyMutationInput, StoreContentUncheckedUpdateManyInput>
    /**
     * Filter which StoreContents to update
     */
    where?: StoreContentWhereInput
  }

  /**
   * StoreContent upsert
   */
  export type StoreContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreContent
     */
    select?: StoreContentSelect<ExtArgs> | null
    /**
     * The filter to search for the StoreContent to update in case it exists.
     */
    where: StoreContentWhereUniqueInput
    /**
     * In case the StoreContent found by the `where` argument doesn't exist, create a new StoreContent with this data.
     */
    create: XOR<StoreContentCreateInput, StoreContentUncheckedCreateInput>
    /**
     * In case the StoreContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreContentUpdateInput, StoreContentUncheckedUpdateInput>
  }

  /**
   * StoreContent delete
   */
  export type StoreContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreContent
     */
    select?: StoreContentSelect<ExtArgs> | null
    /**
     * Filter which StoreContent to delete.
     */
    where: StoreContentWhereUniqueInput
  }

  /**
   * StoreContent deleteMany
   */
  export type StoreContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreContents to delete
     */
    where?: StoreContentWhereInput
  }

  /**
   * StoreContent without action
   */
  export type StoreContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreContent
     */
    select?: StoreContentSelect<ExtArgs> | null
  }


  /**
   * Model StoreCategory
   */

  export type AggregateStoreCategory = {
    _count: StoreCategoryCountAggregateOutputType | null
    _avg: StoreCategoryAvgAggregateOutputType | null
    _sum: StoreCategorySumAggregateOutputType | null
    _min: StoreCategoryMinAggregateOutputType | null
    _max: StoreCategoryMaxAggregateOutputType | null
  }

  export type StoreCategoryAvgAggregateOutputType = {
    id: number | null
    sortOrder: number | null
  }

  export type StoreCategorySumAggregateOutputType = {
    id: number | null
    sortOrder: number | null
  }

  export type StoreCategoryMinAggregateOutputType = {
    id: number | null
    label: string | null
    slug: string | null
    href: string | null
    seoTitle: string | null
    seoDescription: string | null
    seoIntro: string | null
    canonicalUrl: string | null
    featured: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoreCategoryMaxAggregateOutputType = {
    id: number | null
    label: string | null
    slug: string | null
    href: string | null
    seoTitle: string | null
    seoDescription: string | null
    seoIntro: string | null
    canonicalUrl: string | null
    featured: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoreCategoryCountAggregateOutputType = {
    id: number
    label: number
    slug: number
    href: number
    seoTitle: number
    seoDescription: number
    seoIntro: number
    canonicalUrl: number
    featured: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StoreCategoryAvgAggregateInputType = {
    id?: true
    sortOrder?: true
  }

  export type StoreCategorySumAggregateInputType = {
    id?: true
    sortOrder?: true
  }

  export type StoreCategoryMinAggregateInputType = {
    id?: true
    label?: true
    slug?: true
    href?: true
    seoTitle?: true
    seoDescription?: true
    seoIntro?: true
    canonicalUrl?: true
    featured?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoreCategoryMaxAggregateInputType = {
    id?: true
    label?: true
    slug?: true
    href?: true
    seoTitle?: true
    seoDescription?: true
    seoIntro?: true
    canonicalUrl?: true
    featured?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoreCategoryCountAggregateInputType = {
    id?: true
    label?: true
    slug?: true
    href?: true
    seoTitle?: true
    seoDescription?: true
    seoIntro?: true
    canonicalUrl?: true
    featured?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StoreCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreCategory to aggregate.
     */
    where?: StoreCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreCategories to fetch.
     */
    orderBy?: StoreCategoryOrderByWithRelationInput | StoreCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StoreCategories
    **/
    _count?: true | StoreCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreCategoryMaxAggregateInputType
  }

  export type GetStoreCategoryAggregateType<T extends StoreCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateStoreCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStoreCategory[P]>
      : GetScalarType<T[P], AggregateStoreCategory[P]>
  }




  export type StoreCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreCategoryWhereInput
    orderBy?: StoreCategoryOrderByWithAggregationInput | StoreCategoryOrderByWithAggregationInput[]
    by: StoreCategoryScalarFieldEnum[] | StoreCategoryScalarFieldEnum
    having?: StoreCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreCategoryCountAggregateInputType | true
    _avg?: StoreCategoryAvgAggregateInputType
    _sum?: StoreCategorySumAggregateInputType
    _min?: StoreCategoryMinAggregateInputType
    _max?: StoreCategoryMaxAggregateInputType
  }

  export type StoreCategoryGroupByOutputType = {
    id: number
    label: string
    slug: string
    href: string
    seoTitle: string | null
    seoDescription: string | null
    seoIntro: string | null
    canonicalUrl: string | null
    featured: boolean
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    _count: StoreCategoryCountAggregateOutputType | null
    _avg: StoreCategoryAvgAggregateOutputType | null
    _sum: StoreCategorySumAggregateOutputType | null
    _min: StoreCategoryMinAggregateOutputType | null
    _max: StoreCategoryMaxAggregateOutputType | null
  }

  type GetStoreCategoryGroupByPayload<T extends StoreCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], StoreCategoryGroupByOutputType[P]>
        }
      >
    >


  export type StoreCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    slug?: boolean
    href?: boolean
    seoTitle?: boolean
    seoDescription?: boolean
    seoIntro?: boolean
    canonicalUrl?: boolean
    featured?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["storeCategory"]>


  export type StoreCategorySelectScalar = {
    id?: boolean
    label?: boolean
    slug?: boolean
    href?: boolean
    seoTitle?: boolean
    seoDescription?: boolean
    seoIntro?: boolean
    canonicalUrl?: boolean
    featured?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $StoreCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StoreCategory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      label: string
      slug: string
      href: string
      seoTitle: string | null
      seoDescription: string | null
      seoIntro: string | null
      canonicalUrl: string | null
      featured: boolean
      sortOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["storeCategory"]>
    composites: {}
  }

  type StoreCategoryGetPayload<S extends boolean | null | undefined | StoreCategoryDefaultArgs> = $Result.GetResult<Prisma.$StoreCategoryPayload, S>

  type StoreCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StoreCategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StoreCategoryCountAggregateInputType | true
    }

  export interface StoreCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StoreCategory'], meta: { name: 'StoreCategory' } }
    /**
     * Find zero or one StoreCategory that matches the filter.
     * @param {StoreCategoryFindUniqueArgs} args - Arguments to find a StoreCategory
     * @example
     * // Get one StoreCategory
     * const storeCategory = await prisma.storeCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreCategoryFindUniqueArgs>(args: SelectSubset<T, StoreCategoryFindUniqueArgs<ExtArgs>>): Prisma__StoreCategoryClient<$Result.GetResult<Prisma.$StoreCategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StoreCategory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StoreCategoryFindUniqueOrThrowArgs} args - Arguments to find a StoreCategory
     * @example
     * // Get one StoreCategory
     * const storeCategory = await prisma.storeCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, StoreCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoreCategoryClient<$Result.GetResult<Prisma.$StoreCategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StoreCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreCategoryFindFirstArgs} args - Arguments to find a StoreCategory
     * @example
     * // Get one StoreCategory
     * const storeCategory = await prisma.storeCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreCategoryFindFirstArgs>(args?: SelectSubset<T, StoreCategoryFindFirstArgs<ExtArgs>>): Prisma__StoreCategoryClient<$Result.GetResult<Prisma.$StoreCategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StoreCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreCategoryFindFirstOrThrowArgs} args - Arguments to find a StoreCategory
     * @example
     * // Get one StoreCategory
     * const storeCategory = await prisma.storeCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, StoreCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoreCategoryClient<$Result.GetResult<Prisma.$StoreCategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StoreCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StoreCategories
     * const storeCategories = await prisma.storeCategory.findMany()
     * 
     * // Get first 10 StoreCategories
     * const storeCategories = await prisma.storeCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeCategoryWithIdOnly = await prisma.storeCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoreCategoryFindManyArgs>(args?: SelectSubset<T, StoreCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreCategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StoreCategory.
     * @param {StoreCategoryCreateArgs} args - Arguments to create a StoreCategory.
     * @example
     * // Create one StoreCategory
     * const StoreCategory = await prisma.storeCategory.create({
     *   data: {
     *     // ... data to create a StoreCategory
     *   }
     * })
     * 
     */
    create<T extends StoreCategoryCreateArgs>(args: SelectSubset<T, StoreCategoryCreateArgs<ExtArgs>>): Prisma__StoreCategoryClient<$Result.GetResult<Prisma.$StoreCategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StoreCategories.
     * @param {StoreCategoryCreateManyArgs} args - Arguments to create many StoreCategories.
     * @example
     * // Create many StoreCategories
     * const storeCategory = await prisma.storeCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoreCategoryCreateManyArgs>(args?: SelectSubset<T, StoreCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StoreCategory.
     * @param {StoreCategoryDeleteArgs} args - Arguments to delete one StoreCategory.
     * @example
     * // Delete one StoreCategory
     * const StoreCategory = await prisma.storeCategory.delete({
     *   where: {
     *     // ... filter to delete one StoreCategory
     *   }
     * })
     * 
     */
    delete<T extends StoreCategoryDeleteArgs>(args: SelectSubset<T, StoreCategoryDeleteArgs<ExtArgs>>): Prisma__StoreCategoryClient<$Result.GetResult<Prisma.$StoreCategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StoreCategory.
     * @param {StoreCategoryUpdateArgs} args - Arguments to update one StoreCategory.
     * @example
     * // Update one StoreCategory
     * const storeCategory = await prisma.storeCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoreCategoryUpdateArgs>(args: SelectSubset<T, StoreCategoryUpdateArgs<ExtArgs>>): Prisma__StoreCategoryClient<$Result.GetResult<Prisma.$StoreCategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StoreCategories.
     * @param {StoreCategoryDeleteManyArgs} args - Arguments to filter StoreCategories to delete.
     * @example
     * // Delete a few StoreCategories
     * const { count } = await prisma.storeCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoreCategoryDeleteManyArgs>(args?: SelectSubset<T, StoreCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoreCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StoreCategories
     * const storeCategory = await prisma.storeCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoreCategoryUpdateManyArgs>(args: SelectSubset<T, StoreCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StoreCategory.
     * @param {StoreCategoryUpsertArgs} args - Arguments to update or create a StoreCategory.
     * @example
     * // Update or create a StoreCategory
     * const storeCategory = await prisma.storeCategory.upsert({
     *   create: {
     *     // ... data to create a StoreCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StoreCategory we want to update
     *   }
     * })
     */
    upsert<T extends StoreCategoryUpsertArgs>(args: SelectSubset<T, StoreCategoryUpsertArgs<ExtArgs>>): Prisma__StoreCategoryClient<$Result.GetResult<Prisma.$StoreCategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StoreCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreCategoryCountArgs} args - Arguments to filter StoreCategories to count.
     * @example
     * // Count the number of StoreCategories
     * const count = await prisma.storeCategory.count({
     *   where: {
     *     // ... the filter for the StoreCategories we want to count
     *   }
     * })
    **/
    count<T extends StoreCategoryCountArgs>(
      args?: Subset<T, StoreCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StoreCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoreCategoryAggregateArgs>(args: Subset<T, StoreCategoryAggregateArgs>): Prisma.PrismaPromise<GetStoreCategoryAggregateType<T>>

    /**
     * Group by StoreCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StoreCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreCategoryGroupByArgs['orderBy'] }
        : { orderBy?: StoreCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StoreCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StoreCategory model
   */
  readonly fields: StoreCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StoreCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StoreCategory model
   */ 
  interface StoreCategoryFieldRefs {
    readonly id: FieldRef<"StoreCategory", 'Int'>
    readonly label: FieldRef<"StoreCategory", 'String'>
    readonly slug: FieldRef<"StoreCategory", 'String'>
    readonly href: FieldRef<"StoreCategory", 'String'>
    readonly seoTitle: FieldRef<"StoreCategory", 'String'>
    readonly seoDescription: FieldRef<"StoreCategory", 'String'>
    readonly seoIntro: FieldRef<"StoreCategory", 'String'>
    readonly canonicalUrl: FieldRef<"StoreCategory", 'String'>
    readonly featured: FieldRef<"StoreCategory", 'Boolean'>
    readonly sortOrder: FieldRef<"StoreCategory", 'Int'>
    readonly createdAt: FieldRef<"StoreCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"StoreCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StoreCategory findUnique
   */
  export type StoreCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreCategory
     */
    select?: StoreCategorySelect<ExtArgs> | null
    /**
     * Filter, which StoreCategory to fetch.
     */
    where: StoreCategoryWhereUniqueInput
  }

  /**
   * StoreCategory findUniqueOrThrow
   */
  export type StoreCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreCategory
     */
    select?: StoreCategorySelect<ExtArgs> | null
    /**
     * Filter, which StoreCategory to fetch.
     */
    where: StoreCategoryWhereUniqueInput
  }

  /**
   * StoreCategory findFirst
   */
  export type StoreCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreCategory
     */
    select?: StoreCategorySelect<ExtArgs> | null
    /**
     * Filter, which StoreCategory to fetch.
     */
    where?: StoreCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreCategories to fetch.
     */
    orderBy?: StoreCategoryOrderByWithRelationInput | StoreCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreCategories.
     */
    cursor?: StoreCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreCategories.
     */
    distinct?: StoreCategoryScalarFieldEnum | StoreCategoryScalarFieldEnum[]
  }

  /**
   * StoreCategory findFirstOrThrow
   */
  export type StoreCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreCategory
     */
    select?: StoreCategorySelect<ExtArgs> | null
    /**
     * Filter, which StoreCategory to fetch.
     */
    where?: StoreCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreCategories to fetch.
     */
    orderBy?: StoreCategoryOrderByWithRelationInput | StoreCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreCategories.
     */
    cursor?: StoreCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreCategories.
     */
    distinct?: StoreCategoryScalarFieldEnum | StoreCategoryScalarFieldEnum[]
  }

  /**
   * StoreCategory findMany
   */
  export type StoreCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreCategory
     */
    select?: StoreCategorySelect<ExtArgs> | null
    /**
     * Filter, which StoreCategories to fetch.
     */
    where?: StoreCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreCategories to fetch.
     */
    orderBy?: StoreCategoryOrderByWithRelationInput | StoreCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StoreCategories.
     */
    cursor?: StoreCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreCategories.
     */
    skip?: number
    distinct?: StoreCategoryScalarFieldEnum | StoreCategoryScalarFieldEnum[]
  }

  /**
   * StoreCategory create
   */
  export type StoreCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreCategory
     */
    select?: StoreCategorySelect<ExtArgs> | null
    /**
     * The data needed to create a StoreCategory.
     */
    data: XOR<StoreCategoryCreateInput, StoreCategoryUncheckedCreateInput>
  }

  /**
   * StoreCategory createMany
   */
  export type StoreCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StoreCategories.
     */
    data: StoreCategoryCreateManyInput | StoreCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StoreCategory update
   */
  export type StoreCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreCategory
     */
    select?: StoreCategorySelect<ExtArgs> | null
    /**
     * The data needed to update a StoreCategory.
     */
    data: XOR<StoreCategoryUpdateInput, StoreCategoryUncheckedUpdateInput>
    /**
     * Choose, which StoreCategory to update.
     */
    where: StoreCategoryWhereUniqueInput
  }

  /**
   * StoreCategory updateMany
   */
  export type StoreCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StoreCategories.
     */
    data: XOR<StoreCategoryUpdateManyMutationInput, StoreCategoryUncheckedUpdateManyInput>
    /**
     * Filter which StoreCategories to update
     */
    where?: StoreCategoryWhereInput
  }

  /**
   * StoreCategory upsert
   */
  export type StoreCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreCategory
     */
    select?: StoreCategorySelect<ExtArgs> | null
    /**
     * The filter to search for the StoreCategory to update in case it exists.
     */
    where: StoreCategoryWhereUniqueInput
    /**
     * In case the StoreCategory found by the `where` argument doesn't exist, create a new StoreCategory with this data.
     */
    create: XOR<StoreCategoryCreateInput, StoreCategoryUncheckedCreateInput>
    /**
     * In case the StoreCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreCategoryUpdateInput, StoreCategoryUncheckedUpdateInput>
  }

  /**
   * StoreCategory delete
   */
  export type StoreCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreCategory
     */
    select?: StoreCategorySelect<ExtArgs> | null
    /**
     * Filter which StoreCategory to delete.
     */
    where: StoreCategoryWhereUniqueInput
  }

  /**
   * StoreCategory deleteMany
   */
  export type StoreCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreCategories to delete
     */
    where?: StoreCategoryWhereInput
  }

  /**
   * StoreCategory without action
   */
  export type StoreCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreCategory
     */
    select?: StoreCategorySelect<ExtArgs> | null
  }


  /**
   * Model StoreProduct
   */

  export type AggregateStoreProduct = {
    _count: StoreProductCountAggregateOutputType | null
    _avg: StoreProductAvgAggregateOutputType | null
    _sum: StoreProductSumAggregateOutputType | null
    _min: StoreProductMinAggregateOutputType | null
    _max: StoreProductMaxAggregateOutputType | null
  }

  export type StoreProductAvgAggregateOutputType = {
    id: number | null
    price: number | null
    inventory: number | null
    reviewRating: number | null
    reviewCount: number | null
    sortOrder: number | null
  }

  export type StoreProductSumAggregateOutputType = {
    id: number | null
    price: number | null
    inventory: number | null
    reviewRating: number | null
    reviewCount: number | null
    sortOrder: number | null
  }

  export type StoreProductMinAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    category: string | null
    categorySlug: string | null
    price: number | null
    tag: string | null
    inventory: number | null
    status: string | null
    image: string | null
    description: string | null
    seoTitle: string | null
    seoDescription: string | null
    seoKeywords: string | null
    canonicalUrl: string | null
    imageAlt: string | null
    brand: string | null
    sku: string | null
    reviewRating: number | null
    reviewCount: number | null
    seoFocusKeyphrase: string | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoreProductMaxAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    category: string | null
    categorySlug: string | null
    price: number | null
    tag: string | null
    inventory: number | null
    status: string | null
    image: string | null
    description: string | null
    seoTitle: string | null
    seoDescription: string | null
    seoKeywords: string | null
    canonicalUrl: string | null
    imageAlt: string | null
    brand: string | null
    sku: string | null
    reviewRating: number | null
    reviewCount: number | null
    seoFocusKeyphrase: string | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoreProductCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    category: number
    categorySlug: number
    price: number
    tag: number
    inventory: number
    status: number
    image: number
    gallery: number
    variants: number
    hues: number
    description: number
    seoTitle: number
    seoDescription: number
    seoKeywords: number
    canonicalUrl: number
    imageAlt: number
    brand: number
    sku: number
    reviewRating: number
    reviewCount: number
    seoFocusKeyphrase: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StoreProductAvgAggregateInputType = {
    id?: true
    price?: true
    inventory?: true
    reviewRating?: true
    reviewCount?: true
    sortOrder?: true
  }

  export type StoreProductSumAggregateInputType = {
    id?: true
    price?: true
    inventory?: true
    reviewRating?: true
    reviewCount?: true
    sortOrder?: true
  }

  export type StoreProductMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    category?: true
    categorySlug?: true
    price?: true
    tag?: true
    inventory?: true
    status?: true
    image?: true
    description?: true
    seoTitle?: true
    seoDescription?: true
    seoKeywords?: true
    canonicalUrl?: true
    imageAlt?: true
    brand?: true
    sku?: true
    reviewRating?: true
    reviewCount?: true
    seoFocusKeyphrase?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoreProductMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    category?: true
    categorySlug?: true
    price?: true
    tag?: true
    inventory?: true
    status?: true
    image?: true
    description?: true
    seoTitle?: true
    seoDescription?: true
    seoKeywords?: true
    canonicalUrl?: true
    imageAlt?: true
    brand?: true
    sku?: true
    reviewRating?: true
    reviewCount?: true
    seoFocusKeyphrase?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoreProductCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    category?: true
    categorySlug?: true
    price?: true
    tag?: true
    inventory?: true
    status?: true
    image?: true
    gallery?: true
    variants?: true
    hues?: true
    description?: true
    seoTitle?: true
    seoDescription?: true
    seoKeywords?: true
    canonicalUrl?: true
    imageAlt?: true
    brand?: true
    sku?: true
    reviewRating?: true
    reviewCount?: true
    seoFocusKeyphrase?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StoreProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreProduct to aggregate.
     */
    where?: StoreProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreProducts to fetch.
     */
    orderBy?: StoreProductOrderByWithRelationInput | StoreProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StoreProducts
    **/
    _count?: true | StoreProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreProductMaxAggregateInputType
  }

  export type GetStoreProductAggregateType<T extends StoreProductAggregateArgs> = {
        [P in keyof T & keyof AggregateStoreProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStoreProduct[P]>
      : GetScalarType<T[P], AggregateStoreProduct[P]>
  }




  export type StoreProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreProductWhereInput
    orderBy?: StoreProductOrderByWithAggregationInput | StoreProductOrderByWithAggregationInput[]
    by: StoreProductScalarFieldEnum[] | StoreProductScalarFieldEnum
    having?: StoreProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreProductCountAggregateInputType | true
    _avg?: StoreProductAvgAggregateInputType
    _sum?: StoreProductSumAggregateInputType
    _min?: StoreProductMinAggregateInputType
    _max?: StoreProductMaxAggregateInputType
  }

  export type StoreProductGroupByOutputType = {
    id: number
    title: string
    slug: string
    category: string
    categorySlug: string
    price: number
    tag: string | null
    inventory: number
    status: string
    image: string | null
    gallery: JsonValue | null
    variants: JsonValue | null
    hues: JsonValue | null
    description: string | null
    seoTitle: string | null
    seoDescription: string | null
    seoKeywords: string | null
    canonicalUrl: string | null
    imageAlt: string | null
    brand: string | null
    sku: string | null
    reviewRating: number | null
    reviewCount: number | null
    seoFocusKeyphrase: string | null
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    _count: StoreProductCountAggregateOutputType | null
    _avg: StoreProductAvgAggregateOutputType | null
    _sum: StoreProductSumAggregateOutputType | null
    _min: StoreProductMinAggregateOutputType | null
    _max: StoreProductMaxAggregateOutputType | null
  }

  type GetStoreProductGroupByPayload<T extends StoreProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreProductGroupByOutputType[P]>
            : GetScalarType<T[P], StoreProductGroupByOutputType[P]>
        }
      >
    >


  export type StoreProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    category?: boolean
    categorySlug?: boolean
    price?: boolean
    tag?: boolean
    inventory?: boolean
    status?: boolean
    image?: boolean
    gallery?: boolean
    variants?: boolean
    hues?: boolean
    description?: boolean
    seoTitle?: boolean
    seoDescription?: boolean
    seoKeywords?: boolean
    canonicalUrl?: boolean
    imageAlt?: boolean
    brand?: boolean
    sku?: boolean
    reviewRating?: boolean
    reviewCount?: boolean
    seoFocusKeyphrase?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["storeProduct"]>


  export type StoreProductSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    category?: boolean
    categorySlug?: boolean
    price?: boolean
    tag?: boolean
    inventory?: boolean
    status?: boolean
    image?: boolean
    gallery?: boolean
    variants?: boolean
    hues?: boolean
    description?: boolean
    seoTitle?: boolean
    seoDescription?: boolean
    seoKeywords?: boolean
    canonicalUrl?: boolean
    imageAlt?: boolean
    brand?: boolean
    sku?: boolean
    reviewRating?: boolean
    reviewCount?: boolean
    seoFocusKeyphrase?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $StoreProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StoreProduct"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      slug: string
      category: string
      categorySlug: string
      price: number
      tag: string | null
      inventory: number
      status: string
      image: string | null
      gallery: Prisma.JsonValue | null
      variants: Prisma.JsonValue | null
      hues: Prisma.JsonValue | null
      description: string | null
      seoTitle: string | null
      seoDescription: string | null
      seoKeywords: string | null
      canonicalUrl: string | null
      imageAlt: string | null
      brand: string | null
      sku: string | null
      reviewRating: number | null
      reviewCount: number | null
      seoFocusKeyphrase: string | null
      sortOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["storeProduct"]>
    composites: {}
  }

  type StoreProductGetPayload<S extends boolean | null | undefined | StoreProductDefaultArgs> = $Result.GetResult<Prisma.$StoreProductPayload, S>

  type StoreProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StoreProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StoreProductCountAggregateInputType | true
    }

  export interface StoreProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StoreProduct'], meta: { name: 'StoreProduct' } }
    /**
     * Find zero or one StoreProduct that matches the filter.
     * @param {StoreProductFindUniqueArgs} args - Arguments to find a StoreProduct
     * @example
     * // Get one StoreProduct
     * const storeProduct = await prisma.storeProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreProductFindUniqueArgs>(args: SelectSubset<T, StoreProductFindUniqueArgs<ExtArgs>>): Prisma__StoreProductClient<$Result.GetResult<Prisma.$StoreProductPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StoreProduct that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StoreProductFindUniqueOrThrowArgs} args - Arguments to find a StoreProduct
     * @example
     * // Get one StoreProduct
     * const storeProduct = await prisma.storeProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreProductFindUniqueOrThrowArgs>(args: SelectSubset<T, StoreProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoreProductClient<$Result.GetResult<Prisma.$StoreProductPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StoreProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreProductFindFirstArgs} args - Arguments to find a StoreProduct
     * @example
     * // Get one StoreProduct
     * const storeProduct = await prisma.storeProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreProductFindFirstArgs>(args?: SelectSubset<T, StoreProductFindFirstArgs<ExtArgs>>): Prisma__StoreProductClient<$Result.GetResult<Prisma.$StoreProductPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StoreProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreProductFindFirstOrThrowArgs} args - Arguments to find a StoreProduct
     * @example
     * // Get one StoreProduct
     * const storeProduct = await prisma.storeProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreProductFindFirstOrThrowArgs>(args?: SelectSubset<T, StoreProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoreProductClient<$Result.GetResult<Prisma.$StoreProductPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StoreProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StoreProducts
     * const storeProducts = await prisma.storeProduct.findMany()
     * 
     * // Get first 10 StoreProducts
     * const storeProducts = await prisma.storeProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeProductWithIdOnly = await prisma.storeProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoreProductFindManyArgs>(args?: SelectSubset<T, StoreProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreProductPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StoreProduct.
     * @param {StoreProductCreateArgs} args - Arguments to create a StoreProduct.
     * @example
     * // Create one StoreProduct
     * const StoreProduct = await prisma.storeProduct.create({
     *   data: {
     *     // ... data to create a StoreProduct
     *   }
     * })
     * 
     */
    create<T extends StoreProductCreateArgs>(args: SelectSubset<T, StoreProductCreateArgs<ExtArgs>>): Prisma__StoreProductClient<$Result.GetResult<Prisma.$StoreProductPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StoreProducts.
     * @param {StoreProductCreateManyArgs} args - Arguments to create many StoreProducts.
     * @example
     * // Create many StoreProducts
     * const storeProduct = await prisma.storeProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoreProductCreateManyArgs>(args?: SelectSubset<T, StoreProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StoreProduct.
     * @param {StoreProductDeleteArgs} args - Arguments to delete one StoreProduct.
     * @example
     * // Delete one StoreProduct
     * const StoreProduct = await prisma.storeProduct.delete({
     *   where: {
     *     // ... filter to delete one StoreProduct
     *   }
     * })
     * 
     */
    delete<T extends StoreProductDeleteArgs>(args: SelectSubset<T, StoreProductDeleteArgs<ExtArgs>>): Prisma__StoreProductClient<$Result.GetResult<Prisma.$StoreProductPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StoreProduct.
     * @param {StoreProductUpdateArgs} args - Arguments to update one StoreProduct.
     * @example
     * // Update one StoreProduct
     * const storeProduct = await prisma.storeProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoreProductUpdateArgs>(args: SelectSubset<T, StoreProductUpdateArgs<ExtArgs>>): Prisma__StoreProductClient<$Result.GetResult<Prisma.$StoreProductPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StoreProducts.
     * @param {StoreProductDeleteManyArgs} args - Arguments to filter StoreProducts to delete.
     * @example
     * // Delete a few StoreProducts
     * const { count } = await prisma.storeProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoreProductDeleteManyArgs>(args?: SelectSubset<T, StoreProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoreProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StoreProducts
     * const storeProduct = await prisma.storeProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoreProductUpdateManyArgs>(args: SelectSubset<T, StoreProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StoreProduct.
     * @param {StoreProductUpsertArgs} args - Arguments to update or create a StoreProduct.
     * @example
     * // Update or create a StoreProduct
     * const storeProduct = await prisma.storeProduct.upsert({
     *   create: {
     *     // ... data to create a StoreProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StoreProduct we want to update
     *   }
     * })
     */
    upsert<T extends StoreProductUpsertArgs>(args: SelectSubset<T, StoreProductUpsertArgs<ExtArgs>>): Prisma__StoreProductClient<$Result.GetResult<Prisma.$StoreProductPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StoreProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreProductCountArgs} args - Arguments to filter StoreProducts to count.
     * @example
     * // Count the number of StoreProducts
     * const count = await prisma.storeProduct.count({
     *   where: {
     *     // ... the filter for the StoreProducts we want to count
     *   }
     * })
    **/
    count<T extends StoreProductCountArgs>(
      args?: Subset<T, StoreProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StoreProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoreProductAggregateArgs>(args: Subset<T, StoreProductAggregateArgs>): Prisma.PrismaPromise<GetStoreProductAggregateType<T>>

    /**
     * Group by StoreProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StoreProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreProductGroupByArgs['orderBy'] }
        : { orderBy?: StoreProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StoreProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StoreProduct model
   */
  readonly fields: StoreProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StoreProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StoreProduct model
   */ 
  interface StoreProductFieldRefs {
    readonly id: FieldRef<"StoreProduct", 'Int'>
    readonly title: FieldRef<"StoreProduct", 'String'>
    readonly slug: FieldRef<"StoreProduct", 'String'>
    readonly category: FieldRef<"StoreProduct", 'String'>
    readonly categorySlug: FieldRef<"StoreProduct", 'String'>
    readonly price: FieldRef<"StoreProduct", 'Float'>
    readonly tag: FieldRef<"StoreProduct", 'String'>
    readonly inventory: FieldRef<"StoreProduct", 'Int'>
    readonly status: FieldRef<"StoreProduct", 'String'>
    readonly image: FieldRef<"StoreProduct", 'String'>
    readonly gallery: FieldRef<"StoreProduct", 'Json'>
    readonly variants: FieldRef<"StoreProduct", 'Json'>
    readonly hues: FieldRef<"StoreProduct", 'Json'>
    readonly description: FieldRef<"StoreProduct", 'String'>
    readonly seoTitle: FieldRef<"StoreProduct", 'String'>
    readonly seoDescription: FieldRef<"StoreProduct", 'String'>
    readonly seoKeywords: FieldRef<"StoreProduct", 'String'>
    readonly canonicalUrl: FieldRef<"StoreProduct", 'String'>
    readonly imageAlt: FieldRef<"StoreProduct", 'String'>
    readonly brand: FieldRef<"StoreProduct", 'String'>
    readonly sku: FieldRef<"StoreProduct", 'String'>
    readonly reviewRating: FieldRef<"StoreProduct", 'Float'>
    readonly reviewCount: FieldRef<"StoreProduct", 'Int'>
    readonly seoFocusKeyphrase: FieldRef<"StoreProduct", 'String'>
    readonly sortOrder: FieldRef<"StoreProduct", 'Int'>
    readonly createdAt: FieldRef<"StoreProduct", 'DateTime'>
    readonly updatedAt: FieldRef<"StoreProduct", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StoreProduct findUnique
   */
  export type StoreProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreProduct
     */
    select?: StoreProductSelect<ExtArgs> | null
    /**
     * Filter, which StoreProduct to fetch.
     */
    where: StoreProductWhereUniqueInput
  }

  /**
   * StoreProduct findUniqueOrThrow
   */
  export type StoreProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreProduct
     */
    select?: StoreProductSelect<ExtArgs> | null
    /**
     * Filter, which StoreProduct to fetch.
     */
    where: StoreProductWhereUniqueInput
  }

  /**
   * StoreProduct findFirst
   */
  export type StoreProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreProduct
     */
    select?: StoreProductSelect<ExtArgs> | null
    /**
     * Filter, which StoreProduct to fetch.
     */
    where?: StoreProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreProducts to fetch.
     */
    orderBy?: StoreProductOrderByWithRelationInput | StoreProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreProducts.
     */
    cursor?: StoreProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreProducts.
     */
    distinct?: StoreProductScalarFieldEnum | StoreProductScalarFieldEnum[]
  }

  /**
   * StoreProduct findFirstOrThrow
   */
  export type StoreProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreProduct
     */
    select?: StoreProductSelect<ExtArgs> | null
    /**
     * Filter, which StoreProduct to fetch.
     */
    where?: StoreProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreProducts to fetch.
     */
    orderBy?: StoreProductOrderByWithRelationInput | StoreProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreProducts.
     */
    cursor?: StoreProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreProducts.
     */
    distinct?: StoreProductScalarFieldEnum | StoreProductScalarFieldEnum[]
  }

  /**
   * StoreProduct findMany
   */
  export type StoreProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreProduct
     */
    select?: StoreProductSelect<ExtArgs> | null
    /**
     * Filter, which StoreProducts to fetch.
     */
    where?: StoreProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreProducts to fetch.
     */
    orderBy?: StoreProductOrderByWithRelationInput | StoreProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StoreProducts.
     */
    cursor?: StoreProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreProducts.
     */
    skip?: number
    distinct?: StoreProductScalarFieldEnum | StoreProductScalarFieldEnum[]
  }

  /**
   * StoreProduct create
   */
  export type StoreProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreProduct
     */
    select?: StoreProductSelect<ExtArgs> | null
    /**
     * The data needed to create a StoreProduct.
     */
    data: XOR<StoreProductCreateInput, StoreProductUncheckedCreateInput>
  }

  /**
   * StoreProduct createMany
   */
  export type StoreProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StoreProducts.
     */
    data: StoreProductCreateManyInput | StoreProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StoreProduct update
   */
  export type StoreProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreProduct
     */
    select?: StoreProductSelect<ExtArgs> | null
    /**
     * The data needed to update a StoreProduct.
     */
    data: XOR<StoreProductUpdateInput, StoreProductUncheckedUpdateInput>
    /**
     * Choose, which StoreProduct to update.
     */
    where: StoreProductWhereUniqueInput
  }

  /**
   * StoreProduct updateMany
   */
  export type StoreProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StoreProducts.
     */
    data: XOR<StoreProductUpdateManyMutationInput, StoreProductUncheckedUpdateManyInput>
    /**
     * Filter which StoreProducts to update
     */
    where?: StoreProductWhereInput
  }

  /**
   * StoreProduct upsert
   */
  export type StoreProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreProduct
     */
    select?: StoreProductSelect<ExtArgs> | null
    /**
     * The filter to search for the StoreProduct to update in case it exists.
     */
    where: StoreProductWhereUniqueInput
    /**
     * In case the StoreProduct found by the `where` argument doesn't exist, create a new StoreProduct with this data.
     */
    create: XOR<StoreProductCreateInput, StoreProductUncheckedCreateInput>
    /**
     * In case the StoreProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreProductUpdateInput, StoreProductUncheckedUpdateInput>
  }

  /**
   * StoreProduct delete
   */
  export type StoreProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreProduct
     */
    select?: StoreProductSelect<ExtArgs> | null
    /**
     * Filter which StoreProduct to delete.
     */
    where: StoreProductWhereUniqueInput
  }

  /**
   * StoreProduct deleteMany
   */
  export type StoreProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreProducts to delete
     */
    where?: StoreProductWhereInput
  }

  /**
   * StoreProduct without action
   */
  export type StoreProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreProduct
     */
    select?: StoreProductSelect<ExtArgs> | null
  }


  /**
   * Model StoreFaq
   */

  export type AggregateStoreFaq = {
    _count: StoreFaqCountAggregateOutputType | null
    _avg: StoreFaqAvgAggregateOutputType | null
    _sum: StoreFaqSumAggregateOutputType | null
    _min: StoreFaqMinAggregateOutputType | null
    _max: StoreFaqMaxAggregateOutputType | null
  }

  export type StoreFaqAvgAggregateOutputType = {
    id: number | null
    sortOrder: number | null
  }

  export type StoreFaqSumAggregateOutputType = {
    id: number | null
    sortOrder: number | null
  }

  export type StoreFaqMinAggregateOutputType = {
    id: number | null
    question: string | null
    answer: string | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoreFaqMaxAggregateOutputType = {
    id: number | null
    question: string | null
    answer: string | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoreFaqCountAggregateOutputType = {
    id: number
    question: number
    answer: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StoreFaqAvgAggregateInputType = {
    id?: true
    sortOrder?: true
  }

  export type StoreFaqSumAggregateInputType = {
    id?: true
    sortOrder?: true
  }

  export type StoreFaqMinAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoreFaqMaxAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoreFaqCountAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StoreFaqAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreFaq to aggregate.
     */
    where?: StoreFaqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreFaqs to fetch.
     */
    orderBy?: StoreFaqOrderByWithRelationInput | StoreFaqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreFaqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreFaqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreFaqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StoreFaqs
    **/
    _count?: true | StoreFaqCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreFaqAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreFaqSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreFaqMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreFaqMaxAggregateInputType
  }

  export type GetStoreFaqAggregateType<T extends StoreFaqAggregateArgs> = {
        [P in keyof T & keyof AggregateStoreFaq]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStoreFaq[P]>
      : GetScalarType<T[P], AggregateStoreFaq[P]>
  }




  export type StoreFaqGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreFaqWhereInput
    orderBy?: StoreFaqOrderByWithAggregationInput | StoreFaqOrderByWithAggregationInput[]
    by: StoreFaqScalarFieldEnum[] | StoreFaqScalarFieldEnum
    having?: StoreFaqScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreFaqCountAggregateInputType | true
    _avg?: StoreFaqAvgAggregateInputType
    _sum?: StoreFaqSumAggregateInputType
    _min?: StoreFaqMinAggregateInputType
    _max?: StoreFaqMaxAggregateInputType
  }

  export type StoreFaqGroupByOutputType = {
    id: number
    question: string
    answer: string
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    _count: StoreFaqCountAggregateOutputType | null
    _avg: StoreFaqAvgAggregateOutputType | null
    _sum: StoreFaqSumAggregateOutputType | null
    _min: StoreFaqMinAggregateOutputType | null
    _max: StoreFaqMaxAggregateOutputType | null
  }

  type GetStoreFaqGroupByPayload<T extends StoreFaqGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreFaqGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreFaqGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreFaqGroupByOutputType[P]>
            : GetScalarType<T[P], StoreFaqGroupByOutputType[P]>
        }
      >
    >


  export type StoreFaqSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answer?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["storeFaq"]>


  export type StoreFaqSelectScalar = {
    id?: boolean
    question?: boolean
    answer?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $StoreFaqPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StoreFaq"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      question: string
      answer: string
      sortOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["storeFaq"]>
    composites: {}
  }

  type StoreFaqGetPayload<S extends boolean | null | undefined | StoreFaqDefaultArgs> = $Result.GetResult<Prisma.$StoreFaqPayload, S>

  type StoreFaqCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StoreFaqFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StoreFaqCountAggregateInputType | true
    }

  export interface StoreFaqDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StoreFaq'], meta: { name: 'StoreFaq' } }
    /**
     * Find zero or one StoreFaq that matches the filter.
     * @param {StoreFaqFindUniqueArgs} args - Arguments to find a StoreFaq
     * @example
     * // Get one StoreFaq
     * const storeFaq = await prisma.storeFaq.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreFaqFindUniqueArgs>(args: SelectSubset<T, StoreFaqFindUniqueArgs<ExtArgs>>): Prisma__StoreFaqClient<$Result.GetResult<Prisma.$StoreFaqPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StoreFaq that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StoreFaqFindUniqueOrThrowArgs} args - Arguments to find a StoreFaq
     * @example
     * // Get one StoreFaq
     * const storeFaq = await prisma.storeFaq.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreFaqFindUniqueOrThrowArgs>(args: SelectSubset<T, StoreFaqFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoreFaqClient<$Result.GetResult<Prisma.$StoreFaqPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StoreFaq that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFaqFindFirstArgs} args - Arguments to find a StoreFaq
     * @example
     * // Get one StoreFaq
     * const storeFaq = await prisma.storeFaq.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreFaqFindFirstArgs>(args?: SelectSubset<T, StoreFaqFindFirstArgs<ExtArgs>>): Prisma__StoreFaqClient<$Result.GetResult<Prisma.$StoreFaqPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StoreFaq that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFaqFindFirstOrThrowArgs} args - Arguments to find a StoreFaq
     * @example
     * // Get one StoreFaq
     * const storeFaq = await prisma.storeFaq.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreFaqFindFirstOrThrowArgs>(args?: SelectSubset<T, StoreFaqFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoreFaqClient<$Result.GetResult<Prisma.$StoreFaqPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StoreFaqs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFaqFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StoreFaqs
     * const storeFaqs = await prisma.storeFaq.findMany()
     * 
     * // Get first 10 StoreFaqs
     * const storeFaqs = await prisma.storeFaq.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeFaqWithIdOnly = await prisma.storeFaq.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoreFaqFindManyArgs>(args?: SelectSubset<T, StoreFaqFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreFaqPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StoreFaq.
     * @param {StoreFaqCreateArgs} args - Arguments to create a StoreFaq.
     * @example
     * // Create one StoreFaq
     * const StoreFaq = await prisma.storeFaq.create({
     *   data: {
     *     // ... data to create a StoreFaq
     *   }
     * })
     * 
     */
    create<T extends StoreFaqCreateArgs>(args: SelectSubset<T, StoreFaqCreateArgs<ExtArgs>>): Prisma__StoreFaqClient<$Result.GetResult<Prisma.$StoreFaqPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StoreFaqs.
     * @param {StoreFaqCreateManyArgs} args - Arguments to create many StoreFaqs.
     * @example
     * // Create many StoreFaqs
     * const storeFaq = await prisma.storeFaq.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoreFaqCreateManyArgs>(args?: SelectSubset<T, StoreFaqCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StoreFaq.
     * @param {StoreFaqDeleteArgs} args - Arguments to delete one StoreFaq.
     * @example
     * // Delete one StoreFaq
     * const StoreFaq = await prisma.storeFaq.delete({
     *   where: {
     *     // ... filter to delete one StoreFaq
     *   }
     * })
     * 
     */
    delete<T extends StoreFaqDeleteArgs>(args: SelectSubset<T, StoreFaqDeleteArgs<ExtArgs>>): Prisma__StoreFaqClient<$Result.GetResult<Prisma.$StoreFaqPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StoreFaq.
     * @param {StoreFaqUpdateArgs} args - Arguments to update one StoreFaq.
     * @example
     * // Update one StoreFaq
     * const storeFaq = await prisma.storeFaq.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoreFaqUpdateArgs>(args: SelectSubset<T, StoreFaqUpdateArgs<ExtArgs>>): Prisma__StoreFaqClient<$Result.GetResult<Prisma.$StoreFaqPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StoreFaqs.
     * @param {StoreFaqDeleteManyArgs} args - Arguments to filter StoreFaqs to delete.
     * @example
     * // Delete a few StoreFaqs
     * const { count } = await prisma.storeFaq.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoreFaqDeleteManyArgs>(args?: SelectSubset<T, StoreFaqDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoreFaqs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFaqUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StoreFaqs
     * const storeFaq = await prisma.storeFaq.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoreFaqUpdateManyArgs>(args: SelectSubset<T, StoreFaqUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StoreFaq.
     * @param {StoreFaqUpsertArgs} args - Arguments to update or create a StoreFaq.
     * @example
     * // Update or create a StoreFaq
     * const storeFaq = await prisma.storeFaq.upsert({
     *   create: {
     *     // ... data to create a StoreFaq
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StoreFaq we want to update
     *   }
     * })
     */
    upsert<T extends StoreFaqUpsertArgs>(args: SelectSubset<T, StoreFaqUpsertArgs<ExtArgs>>): Prisma__StoreFaqClient<$Result.GetResult<Prisma.$StoreFaqPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StoreFaqs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFaqCountArgs} args - Arguments to filter StoreFaqs to count.
     * @example
     * // Count the number of StoreFaqs
     * const count = await prisma.storeFaq.count({
     *   where: {
     *     // ... the filter for the StoreFaqs we want to count
     *   }
     * })
    **/
    count<T extends StoreFaqCountArgs>(
      args?: Subset<T, StoreFaqCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreFaqCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StoreFaq.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFaqAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoreFaqAggregateArgs>(args: Subset<T, StoreFaqAggregateArgs>): Prisma.PrismaPromise<GetStoreFaqAggregateType<T>>

    /**
     * Group by StoreFaq.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFaqGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StoreFaqGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreFaqGroupByArgs['orderBy'] }
        : { orderBy?: StoreFaqGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StoreFaqGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreFaqGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StoreFaq model
   */
  readonly fields: StoreFaqFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StoreFaq.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreFaqClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StoreFaq model
   */ 
  interface StoreFaqFieldRefs {
    readonly id: FieldRef<"StoreFaq", 'Int'>
    readonly question: FieldRef<"StoreFaq", 'String'>
    readonly answer: FieldRef<"StoreFaq", 'String'>
    readonly sortOrder: FieldRef<"StoreFaq", 'Int'>
    readonly createdAt: FieldRef<"StoreFaq", 'DateTime'>
    readonly updatedAt: FieldRef<"StoreFaq", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StoreFaq findUnique
   */
  export type StoreFaqFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreFaq
     */
    select?: StoreFaqSelect<ExtArgs> | null
    /**
     * Filter, which StoreFaq to fetch.
     */
    where: StoreFaqWhereUniqueInput
  }

  /**
   * StoreFaq findUniqueOrThrow
   */
  export type StoreFaqFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreFaq
     */
    select?: StoreFaqSelect<ExtArgs> | null
    /**
     * Filter, which StoreFaq to fetch.
     */
    where: StoreFaqWhereUniqueInput
  }

  /**
   * StoreFaq findFirst
   */
  export type StoreFaqFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreFaq
     */
    select?: StoreFaqSelect<ExtArgs> | null
    /**
     * Filter, which StoreFaq to fetch.
     */
    where?: StoreFaqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreFaqs to fetch.
     */
    orderBy?: StoreFaqOrderByWithRelationInput | StoreFaqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreFaqs.
     */
    cursor?: StoreFaqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreFaqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreFaqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreFaqs.
     */
    distinct?: StoreFaqScalarFieldEnum | StoreFaqScalarFieldEnum[]
  }

  /**
   * StoreFaq findFirstOrThrow
   */
  export type StoreFaqFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreFaq
     */
    select?: StoreFaqSelect<ExtArgs> | null
    /**
     * Filter, which StoreFaq to fetch.
     */
    where?: StoreFaqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreFaqs to fetch.
     */
    orderBy?: StoreFaqOrderByWithRelationInput | StoreFaqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreFaqs.
     */
    cursor?: StoreFaqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreFaqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreFaqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreFaqs.
     */
    distinct?: StoreFaqScalarFieldEnum | StoreFaqScalarFieldEnum[]
  }

  /**
   * StoreFaq findMany
   */
  export type StoreFaqFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreFaq
     */
    select?: StoreFaqSelect<ExtArgs> | null
    /**
     * Filter, which StoreFaqs to fetch.
     */
    where?: StoreFaqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreFaqs to fetch.
     */
    orderBy?: StoreFaqOrderByWithRelationInput | StoreFaqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StoreFaqs.
     */
    cursor?: StoreFaqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreFaqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreFaqs.
     */
    skip?: number
    distinct?: StoreFaqScalarFieldEnum | StoreFaqScalarFieldEnum[]
  }

  /**
   * StoreFaq create
   */
  export type StoreFaqCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreFaq
     */
    select?: StoreFaqSelect<ExtArgs> | null
    /**
     * The data needed to create a StoreFaq.
     */
    data: XOR<StoreFaqCreateInput, StoreFaqUncheckedCreateInput>
  }

  /**
   * StoreFaq createMany
   */
  export type StoreFaqCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StoreFaqs.
     */
    data: StoreFaqCreateManyInput | StoreFaqCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StoreFaq update
   */
  export type StoreFaqUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreFaq
     */
    select?: StoreFaqSelect<ExtArgs> | null
    /**
     * The data needed to update a StoreFaq.
     */
    data: XOR<StoreFaqUpdateInput, StoreFaqUncheckedUpdateInput>
    /**
     * Choose, which StoreFaq to update.
     */
    where: StoreFaqWhereUniqueInput
  }

  /**
   * StoreFaq updateMany
   */
  export type StoreFaqUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StoreFaqs.
     */
    data: XOR<StoreFaqUpdateManyMutationInput, StoreFaqUncheckedUpdateManyInput>
    /**
     * Filter which StoreFaqs to update
     */
    where?: StoreFaqWhereInput
  }

  /**
   * StoreFaq upsert
   */
  export type StoreFaqUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreFaq
     */
    select?: StoreFaqSelect<ExtArgs> | null
    /**
     * The filter to search for the StoreFaq to update in case it exists.
     */
    where: StoreFaqWhereUniqueInput
    /**
     * In case the StoreFaq found by the `where` argument doesn't exist, create a new StoreFaq with this data.
     */
    create: XOR<StoreFaqCreateInput, StoreFaqUncheckedCreateInput>
    /**
     * In case the StoreFaq was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreFaqUpdateInput, StoreFaqUncheckedUpdateInput>
  }

  /**
   * StoreFaq delete
   */
  export type StoreFaqDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreFaq
     */
    select?: StoreFaqSelect<ExtArgs> | null
    /**
     * Filter which StoreFaq to delete.
     */
    where: StoreFaqWhereUniqueInput
  }

  /**
   * StoreFaq deleteMany
   */
  export type StoreFaqDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreFaqs to delete
     */
    where?: StoreFaqWhereInput
  }

  /**
   * StoreFaq without action
   */
  export type StoreFaqDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreFaq
     */
    select?: StoreFaqSelect<ExtArgs> | null
  }


  /**
   * Model StoreOrder
   */

  export type AggregateStoreOrder = {
    _count: StoreOrderCountAggregateOutputType | null
    _avg: StoreOrderAvgAggregateOutputType | null
    _sum: StoreOrderSumAggregateOutputType | null
    _min: StoreOrderMinAggregateOutputType | null
    _max: StoreOrderMaxAggregateOutputType | null
  }

  export type StoreOrderAvgAggregateOutputType = {
    id: number | null
    total: number | null
  }

  export type StoreOrderSumAggregateOutputType = {
    id: number | null
    total: number | null
  }

  export type StoreOrderMinAggregateOutputType = {
    id: number | null
    customer: string | null
    email: string | null
    phone: string | null
    status: string | null
    total: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoreOrderMaxAggregateOutputType = {
    id: number | null
    customer: string | null
    email: string | null
    phone: string | null
    status: string | null
    total: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoreOrderCountAggregateOutputType = {
    id: number
    customer: number
    email: number
    phone: number
    status: number
    total: number
    items: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StoreOrderAvgAggregateInputType = {
    id?: true
    total?: true
  }

  export type StoreOrderSumAggregateInputType = {
    id?: true
    total?: true
  }

  export type StoreOrderMinAggregateInputType = {
    id?: true
    customer?: true
    email?: true
    phone?: true
    status?: true
    total?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoreOrderMaxAggregateInputType = {
    id?: true
    customer?: true
    email?: true
    phone?: true
    status?: true
    total?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoreOrderCountAggregateInputType = {
    id?: true
    customer?: true
    email?: true
    phone?: true
    status?: true
    total?: true
    items?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StoreOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreOrder to aggregate.
     */
    where?: StoreOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreOrders to fetch.
     */
    orderBy?: StoreOrderOrderByWithRelationInput | StoreOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StoreOrders
    **/
    _count?: true | StoreOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreOrderMaxAggregateInputType
  }

  export type GetStoreOrderAggregateType<T extends StoreOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateStoreOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStoreOrder[P]>
      : GetScalarType<T[P], AggregateStoreOrder[P]>
  }




  export type StoreOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreOrderWhereInput
    orderBy?: StoreOrderOrderByWithAggregationInput | StoreOrderOrderByWithAggregationInput[]
    by: StoreOrderScalarFieldEnum[] | StoreOrderScalarFieldEnum
    having?: StoreOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreOrderCountAggregateInputType | true
    _avg?: StoreOrderAvgAggregateInputType
    _sum?: StoreOrderSumAggregateInputType
    _min?: StoreOrderMinAggregateInputType
    _max?: StoreOrderMaxAggregateInputType
  }

  export type StoreOrderGroupByOutputType = {
    id: number
    customer: string
    email: string | null
    phone: string | null
    status: string
    total: number
    items: JsonValue
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: StoreOrderCountAggregateOutputType | null
    _avg: StoreOrderAvgAggregateOutputType | null
    _sum: StoreOrderSumAggregateOutputType | null
    _min: StoreOrderMinAggregateOutputType | null
    _max: StoreOrderMaxAggregateOutputType | null
  }

  type GetStoreOrderGroupByPayload<T extends StoreOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreOrderGroupByOutputType[P]>
            : GetScalarType<T[P], StoreOrderGroupByOutputType[P]>
        }
      >
    >


  export type StoreOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    total?: boolean
    items?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["storeOrder"]>


  export type StoreOrderSelectScalar = {
    id?: boolean
    customer?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    total?: boolean
    items?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $StoreOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StoreOrder"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      customer: string
      email: string | null
      phone: string | null
      status: string
      total: number
      items: Prisma.JsonValue
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["storeOrder"]>
    composites: {}
  }

  type StoreOrderGetPayload<S extends boolean | null | undefined | StoreOrderDefaultArgs> = $Result.GetResult<Prisma.$StoreOrderPayload, S>

  type StoreOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StoreOrderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StoreOrderCountAggregateInputType | true
    }

  export interface StoreOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StoreOrder'], meta: { name: 'StoreOrder' } }
    /**
     * Find zero or one StoreOrder that matches the filter.
     * @param {StoreOrderFindUniqueArgs} args - Arguments to find a StoreOrder
     * @example
     * // Get one StoreOrder
     * const storeOrder = await prisma.storeOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreOrderFindUniqueArgs>(args: SelectSubset<T, StoreOrderFindUniqueArgs<ExtArgs>>): Prisma__StoreOrderClient<$Result.GetResult<Prisma.$StoreOrderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StoreOrder that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StoreOrderFindUniqueOrThrowArgs} args - Arguments to find a StoreOrder
     * @example
     * // Get one StoreOrder
     * const storeOrder = await prisma.storeOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, StoreOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoreOrderClient<$Result.GetResult<Prisma.$StoreOrderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StoreOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreOrderFindFirstArgs} args - Arguments to find a StoreOrder
     * @example
     * // Get one StoreOrder
     * const storeOrder = await prisma.storeOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreOrderFindFirstArgs>(args?: SelectSubset<T, StoreOrderFindFirstArgs<ExtArgs>>): Prisma__StoreOrderClient<$Result.GetResult<Prisma.$StoreOrderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StoreOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreOrderFindFirstOrThrowArgs} args - Arguments to find a StoreOrder
     * @example
     * // Get one StoreOrder
     * const storeOrder = await prisma.storeOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, StoreOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoreOrderClient<$Result.GetResult<Prisma.$StoreOrderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StoreOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StoreOrders
     * const storeOrders = await prisma.storeOrder.findMany()
     * 
     * // Get first 10 StoreOrders
     * const storeOrders = await prisma.storeOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeOrderWithIdOnly = await prisma.storeOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoreOrderFindManyArgs>(args?: SelectSubset<T, StoreOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreOrderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StoreOrder.
     * @param {StoreOrderCreateArgs} args - Arguments to create a StoreOrder.
     * @example
     * // Create one StoreOrder
     * const StoreOrder = await prisma.storeOrder.create({
     *   data: {
     *     // ... data to create a StoreOrder
     *   }
     * })
     * 
     */
    create<T extends StoreOrderCreateArgs>(args: SelectSubset<T, StoreOrderCreateArgs<ExtArgs>>): Prisma__StoreOrderClient<$Result.GetResult<Prisma.$StoreOrderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StoreOrders.
     * @param {StoreOrderCreateManyArgs} args - Arguments to create many StoreOrders.
     * @example
     * // Create many StoreOrders
     * const storeOrder = await prisma.storeOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoreOrderCreateManyArgs>(args?: SelectSubset<T, StoreOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StoreOrder.
     * @param {StoreOrderDeleteArgs} args - Arguments to delete one StoreOrder.
     * @example
     * // Delete one StoreOrder
     * const StoreOrder = await prisma.storeOrder.delete({
     *   where: {
     *     // ... filter to delete one StoreOrder
     *   }
     * })
     * 
     */
    delete<T extends StoreOrderDeleteArgs>(args: SelectSubset<T, StoreOrderDeleteArgs<ExtArgs>>): Prisma__StoreOrderClient<$Result.GetResult<Prisma.$StoreOrderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StoreOrder.
     * @param {StoreOrderUpdateArgs} args - Arguments to update one StoreOrder.
     * @example
     * // Update one StoreOrder
     * const storeOrder = await prisma.storeOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoreOrderUpdateArgs>(args: SelectSubset<T, StoreOrderUpdateArgs<ExtArgs>>): Prisma__StoreOrderClient<$Result.GetResult<Prisma.$StoreOrderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StoreOrders.
     * @param {StoreOrderDeleteManyArgs} args - Arguments to filter StoreOrders to delete.
     * @example
     * // Delete a few StoreOrders
     * const { count } = await prisma.storeOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoreOrderDeleteManyArgs>(args?: SelectSubset<T, StoreOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoreOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StoreOrders
     * const storeOrder = await prisma.storeOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoreOrderUpdateManyArgs>(args: SelectSubset<T, StoreOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StoreOrder.
     * @param {StoreOrderUpsertArgs} args - Arguments to update or create a StoreOrder.
     * @example
     * // Update or create a StoreOrder
     * const storeOrder = await prisma.storeOrder.upsert({
     *   create: {
     *     // ... data to create a StoreOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StoreOrder we want to update
     *   }
     * })
     */
    upsert<T extends StoreOrderUpsertArgs>(args: SelectSubset<T, StoreOrderUpsertArgs<ExtArgs>>): Prisma__StoreOrderClient<$Result.GetResult<Prisma.$StoreOrderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StoreOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreOrderCountArgs} args - Arguments to filter StoreOrders to count.
     * @example
     * // Count the number of StoreOrders
     * const count = await prisma.storeOrder.count({
     *   where: {
     *     // ... the filter for the StoreOrders we want to count
     *   }
     * })
    **/
    count<T extends StoreOrderCountArgs>(
      args?: Subset<T, StoreOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StoreOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoreOrderAggregateArgs>(args: Subset<T, StoreOrderAggregateArgs>): Prisma.PrismaPromise<GetStoreOrderAggregateType<T>>

    /**
     * Group by StoreOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreOrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StoreOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreOrderGroupByArgs['orderBy'] }
        : { orderBy?: StoreOrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StoreOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StoreOrder model
   */
  readonly fields: StoreOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StoreOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StoreOrder model
   */ 
  interface StoreOrderFieldRefs {
    readonly id: FieldRef<"StoreOrder", 'Int'>
    readonly customer: FieldRef<"StoreOrder", 'String'>
    readonly email: FieldRef<"StoreOrder", 'String'>
    readonly phone: FieldRef<"StoreOrder", 'String'>
    readonly status: FieldRef<"StoreOrder", 'String'>
    readonly total: FieldRef<"StoreOrder", 'Float'>
    readonly items: FieldRef<"StoreOrder", 'Json'>
    readonly notes: FieldRef<"StoreOrder", 'String'>
    readonly createdAt: FieldRef<"StoreOrder", 'DateTime'>
    readonly updatedAt: FieldRef<"StoreOrder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StoreOrder findUnique
   */
  export type StoreOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreOrder
     */
    select?: StoreOrderSelect<ExtArgs> | null
    /**
     * Filter, which StoreOrder to fetch.
     */
    where: StoreOrderWhereUniqueInput
  }

  /**
   * StoreOrder findUniqueOrThrow
   */
  export type StoreOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreOrder
     */
    select?: StoreOrderSelect<ExtArgs> | null
    /**
     * Filter, which StoreOrder to fetch.
     */
    where: StoreOrderWhereUniqueInput
  }

  /**
   * StoreOrder findFirst
   */
  export type StoreOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreOrder
     */
    select?: StoreOrderSelect<ExtArgs> | null
    /**
     * Filter, which StoreOrder to fetch.
     */
    where?: StoreOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreOrders to fetch.
     */
    orderBy?: StoreOrderOrderByWithRelationInput | StoreOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreOrders.
     */
    cursor?: StoreOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreOrders.
     */
    distinct?: StoreOrderScalarFieldEnum | StoreOrderScalarFieldEnum[]
  }

  /**
   * StoreOrder findFirstOrThrow
   */
  export type StoreOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreOrder
     */
    select?: StoreOrderSelect<ExtArgs> | null
    /**
     * Filter, which StoreOrder to fetch.
     */
    where?: StoreOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreOrders to fetch.
     */
    orderBy?: StoreOrderOrderByWithRelationInput | StoreOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreOrders.
     */
    cursor?: StoreOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreOrders.
     */
    distinct?: StoreOrderScalarFieldEnum | StoreOrderScalarFieldEnum[]
  }

  /**
   * StoreOrder findMany
   */
  export type StoreOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreOrder
     */
    select?: StoreOrderSelect<ExtArgs> | null
    /**
     * Filter, which StoreOrders to fetch.
     */
    where?: StoreOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreOrders to fetch.
     */
    orderBy?: StoreOrderOrderByWithRelationInput | StoreOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StoreOrders.
     */
    cursor?: StoreOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreOrders.
     */
    skip?: number
    distinct?: StoreOrderScalarFieldEnum | StoreOrderScalarFieldEnum[]
  }

  /**
   * StoreOrder create
   */
  export type StoreOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreOrder
     */
    select?: StoreOrderSelect<ExtArgs> | null
    /**
     * The data needed to create a StoreOrder.
     */
    data: XOR<StoreOrderCreateInput, StoreOrderUncheckedCreateInput>
  }

  /**
   * StoreOrder createMany
   */
  export type StoreOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StoreOrders.
     */
    data: StoreOrderCreateManyInput | StoreOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StoreOrder update
   */
  export type StoreOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreOrder
     */
    select?: StoreOrderSelect<ExtArgs> | null
    /**
     * The data needed to update a StoreOrder.
     */
    data: XOR<StoreOrderUpdateInput, StoreOrderUncheckedUpdateInput>
    /**
     * Choose, which StoreOrder to update.
     */
    where: StoreOrderWhereUniqueInput
  }

  /**
   * StoreOrder updateMany
   */
  export type StoreOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StoreOrders.
     */
    data: XOR<StoreOrderUpdateManyMutationInput, StoreOrderUncheckedUpdateManyInput>
    /**
     * Filter which StoreOrders to update
     */
    where?: StoreOrderWhereInput
  }

  /**
   * StoreOrder upsert
   */
  export type StoreOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreOrder
     */
    select?: StoreOrderSelect<ExtArgs> | null
    /**
     * The filter to search for the StoreOrder to update in case it exists.
     */
    where: StoreOrderWhereUniqueInput
    /**
     * In case the StoreOrder found by the `where` argument doesn't exist, create a new StoreOrder with this data.
     */
    create: XOR<StoreOrderCreateInput, StoreOrderUncheckedCreateInput>
    /**
     * In case the StoreOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreOrderUpdateInput, StoreOrderUncheckedUpdateInput>
  }

  /**
   * StoreOrder delete
   */
  export type StoreOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreOrder
     */
    select?: StoreOrderSelect<ExtArgs> | null
    /**
     * Filter which StoreOrder to delete.
     */
    where: StoreOrderWhereUniqueInput
  }

  /**
   * StoreOrder deleteMany
   */
  export type StoreOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreOrders to delete
     */
    where?: StoreOrderWhereInput
  }

  /**
   * StoreOrder without action
   */
  export type StoreOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreOrder
     */
    select?: StoreOrderSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SiteSettingScalarFieldEnum: {
    id: 'id',
    brandName: 'brandName',
    logoText: 'logoText',
    contactEmail: 'contactEmail',
    serviceArea: 'serviceArea',
    footerDescription: 'footerDescription',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SiteSettingScalarFieldEnum = (typeof SiteSettingScalarFieldEnum)[keyof typeof SiteSettingScalarFieldEnum]


  export const HeroSectionScalarFieldEnum: {
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

  export type HeroSectionScalarFieldEnum = (typeof HeroSectionScalarFieldEnum)[keyof typeof HeroSectionScalarFieldEnum]


  export const CapabilityScalarFieldEnum: {
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

  export type CapabilityScalarFieldEnum = (typeof CapabilityScalarFieldEnum)[keyof typeof CapabilityScalarFieldEnum]


  export const WorkItemScalarFieldEnum: {
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

  export type WorkItemScalarFieldEnum = (typeof WorkItemScalarFieldEnum)[keyof typeof WorkItemScalarFieldEnum]


  export const FaqScalarFieldEnum: {
    id: 'id',
    question: 'question',
    answer: 'answer',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FaqScalarFieldEnum = (typeof FaqScalarFieldEnum)[keyof typeof FaqScalarFieldEnum]


  export const MediaAssetScalarFieldEnum: {
    id: 'id',
    cloudinaryPublicId: 'cloudinaryPublicId',
    url: 'url',
    altText: 'altText',
    assetType: 'assetType',
    createdAt: 'createdAt'
  };

  export type MediaAssetScalarFieldEnum = (typeof MediaAssetScalarFieldEnum)[keyof typeof MediaAssetScalarFieldEnum]


  export const QuoteRequestScalarFieldEnum: {
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

  export type QuoteRequestScalarFieldEnum = (typeof QuoteRequestScalarFieldEnum)[keyof typeof QuoteRequestScalarFieldEnum]


  export const StoreSettingScalarFieldEnum: {
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

  export type StoreSettingScalarFieldEnum = (typeof StoreSettingScalarFieldEnum)[keyof typeof StoreSettingScalarFieldEnum]


  export const StoreContentScalarFieldEnum: {
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

  export type StoreContentScalarFieldEnum = (typeof StoreContentScalarFieldEnum)[keyof typeof StoreContentScalarFieldEnum]


  export const StoreCategoryScalarFieldEnum: {
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

  export type StoreCategoryScalarFieldEnum = (typeof StoreCategoryScalarFieldEnum)[keyof typeof StoreCategoryScalarFieldEnum]


  export const StoreProductScalarFieldEnum: {
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

  export type StoreProductScalarFieldEnum = (typeof StoreProductScalarFieldEnum)[keyof typeof StoreProductScalarFieldEnum]


  export const StoreFaqScalarFieldEnum: {
    id: 'id',
    question: 'question',
    answer: 'answer',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StoreFaqScalarFieldEnum = (typeof StoreFaqScalarFieldEnum)[keyof typeof StoreFaqScalarFieldEnum]


  export const StoreOrderScalarFieldEnum: {
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

  export type StoreOrderScalarFieldEnum = (typeof StoreOrderScalarFieldEnum)[keyof typeof StoreOrderScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    
  /**
   * Deep Input Types
   */


  export type SiteSettingWhereInput = {
    AND?: SiteSettingWhereInput | SiteSettingWhereInput[]
    OR?: SiteSettingWhereInput[]
    NOT?: SiteSettingWhereInput | SiteSettingWhereInput[]
    id?: IntFilter<"SiteSetting"> | number
    brandName?: StringFilter<"SiteSetting"> | string
    logoText?: StringFilter<"SiteSetting"> | string
    contactEmail?: StringFilter<"SiteSetting"> | string
    serviceArea?: StringFilter<"SiteSetting"> | string
    footerDescription?: StringFilter<"SiteSetting"> | string
    createdAt?: DateTimeFilter<"SiteSetting"> | Date | string
    updatedAt?: DateTimeFilter<"SiteSetting"> | Date | string
  }

  export type SiteSettingOrderByWithRelationInput = {
    id?: SortOrder
    brandName?: SortOrder
    logoText?: SortOrder
    contactEmail?: SortOrder
    serviceArea?: SortOrder
    footerDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteSettingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SiteSettingWhereInput | SiteSettingWhereInput[]
    OR?: SiteSettingWhereInput[]
    NOT?: SiteSettingWhereInput | SiteSettingWhereInput[]
    brandName?: StringFilter<"SiteSetting"> | string
    logoText?: StringFilter<"SiteSetting"> | string
    contactEmail?: StringFilter<"SiteSetting"> | string
    serviceArea?: StringFilter<"SiteSetting"> | string
    footerDescription?: StringFilter<"SiteSetting"> | string
    createdAt?: DateTimeFilter<"SiteSetting"> | Date | string
    updatedAt?: DateTimeFilter<"SiteSetting"> | Date | string
  }, "id">

  export type SiteSettingOrderByWithAggregationInput = {
    id?: SortOrder
    brandName?: SortOrder
    logoText?: SortOrder
    contactEmail?: SortOrder
    serviceArea?: SortOrder
    footerDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SiteSettingCountOrderByAggregateInput
    _avg?: SiteSettingAvgOrderByAggregateInput
    _max?: SiteSettingMaxOrderByAggregateInput
    _min?: SiteSettingMinOrderByAggregateInput
    _sum?: SiteSettingSumOrderByAggregateInput
  }

  export type SiteSettingScalarWhereWithAggregatesInput = {
    AND?: SiteSettingScalarWhereWithAggregatesInput | SiteSettingScalarWhereWithAggregatesInput[]
    OR?: SiteSettingScalarWhereWithAggregatesInput[]
    NOT?: SiteSettingScalarWhereWithAggregatesInput | SiteSettingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SiteSetting"> | number
    brandName?: StringWithAggregatesFilter<"SiteSetting"> | string
    logoText?: StringWithAggregatesFilter<"SiteSetting"> | string
    contactEmail?: StringWithAggregatesFilter<"SiteSetting"> | string
    serviceArea?: StringWithAggregatesFilter<"SiteSetting"> | string
    footerDescription?: StringWithAggregatesFilter<"SiteSetting"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SiteSetting"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SiteSetting"> | Date | string
  }

  export type HeroSectionWhereInput = {
    AND?: HeroSectionWhereInput | HeroSectionWhereInput[]
    OR?: HeroSectionWhereInput[]
    NOT?: HeroSectionWhereInput | HeroSectionWhereInput[]
    id?: IntFilter<"HeroSection"> | number
    eyebrow?: StringFilter<"HeroSection"> | string
    headline?: StringFilter<"HeroSection"> | string
    subtitle?: StringFilter<"HeroSection"> | string
    imageUrl?: StringFilter<"HeroSection"> | string
    imageAlt?: StringFilter<"HeroSection"> | string
    primaryCtaLabel?: StringFilter<"HeroSection"> | string
    primaryCtaUrl?: StringFilter<"HeroSection"> | string
    createdAt?: DateTimeFilter<"HeroSection"> | Date | string
    updatedAt?: DateTimeFilter<"HeroSection"> | Date | string
  }

  export type HeroSectionOrderByWithRelationInput = {
    id?: SortOrder
    eyebrow?: SortOrder
    headline?: SortOrder
    subtitle?: SortOrder
    imageUrl?: SortOrder
    imageAlt?: SortOrder
    primaryCtaLabel?: SortOrder
    primaryCtaUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HeroSectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HeroSectionWhereInput | HeroSectionWhereInput[]
    OR?: HeroSectionWhereInput[]
    NOT?: HeroSectionWhereInput | HeroSectionWhereInput[]
    eyebrow?: StringFilter<"HeroSection"> | string
    headline?: StringFilter<"HeroSection"> | string
    subtitle?: StringFilter<"HeroSection"> | string
    imageUrl?: StringFilter<"HeroSection"> | string
    imageAlt?: StringFilter<"HeroSection"> | string
    primaryCtaLabel?: StringFilter<"HeroSection"> | string
    primaryCtaUrl?: StringFilter<"HeroSection"> | string
    createdAt?: DateTimeFilter<"HeroSection"> | Date | string
    updatedAt?: DateTimeFilter<"HeroSection"> | Date | string
  }, "id">

  export type HeroSectionOrderByWithAggregationInput = {
    id?: SortOrder
    eyebrow?: SortOrder
    headline?: SortOrder
    subtitle?: SortOrder
    imageUrl?: SortOrder
    imageAlt?: SortOrder
    primaryCtaLabel?: SortOrder
    primaryCtaUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HeroSectionCountOrderByAggregateInput
    _avg?: HeroSectionAvgOrderByAggregateInput
    _max?: HeroSectionMaxOrderByAggregateInput
    _min?: HeroSectionMinOrderByAggregateInput
    _sum?: HeroSectionSumOrderByAggregateInput
  }

  export type HeroSectionScalarWhereWithAggregatesInput = {
    AND?: HeroSectionScalarWhereWithAggregatesInput | HeroSectionScalarWhereWithAggregatesInput[]
    OR?: HeroSectionScalarWhereWithAggregatesInput[]
    NOT?: HeroSectionScalarWhereWithAggregatesInput | HeroSectionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HeroSection"> | number
    eyebrow?: StringWithAggregatesFilter<"HeroSection"> | string
    headline?: StringWithAggregatesFilter<"HeroSection"> | string
    subtitle?: StringWithAggregatesFilter<"HeroSection"> | string
    imageUrl?: StringWithAggregatesFilter<"HeroSection"> | string
    imageAlt?: StringWithAggregatesFilter<"HeroSection"> | string
    primaryCtaLabel?: StringWithAggregatesFilter<"HeroSection"> | string
    primaryCtaUrl?: StringWithAggregatesFilter<"HeroSection"> | string
    createdAt?: DateTimeWithAggregatesFilter<"HeroSection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HeroSection"> | Date | string
  }

  export type CapabilityWhereInput = {
    AND?: CapabilityWhereInput | CapabilityWhereInput[]
    OR?: CapabilityWhereInput[]
    NOT?: CapabilityWhereInput | CapabilityWhereInput[]
    id?: IntFilter<"Capability"> | number
    number?: StringFilter<"Capability"> | string
    title?: StringFilter<"Capability"> | string
    description?: StringFilter<"Capability"> | string
    materials?: StringFilter<"Capability"> | string
    imageUrl?: StringFilter<"Capability"> | string
    imageAlt?: StringFilter<"Capability"> | string
    sortOrder?: IntFilter<"Capability"> | number
    createdAt?: DateTimeFilter<"Capability"> | Date | string
    updatedAt?: DateTimeFilter<"Capability"> | Date | string
  }

  export type CapabilityOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    title?: SortOrder
    description?: SortOrder
    materials?: SortOrder
    imageUrl?: SortOrder
    imageAlt?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CapabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CapabilityWhereInput | CapabilityWhereInput[]
    OR?: CapabilityWhereInput[]
    NOT?: CapabilityWhereInput | CapabilityWhereInput[]
    number?: StringFilter<"Capability"> | string
    title?: StringFilter<"Capability"> | string
    description?: StringFilter<"Capability"> | string
    materials?: StringFilter<"Capability"> | string
    imageUrl?: StringFilter<"Capability"> | string
    imageAlt?: StringFilter<"Capability"> | string
    sortOrder?: IntFilter<"Capability"> | number
    createdAt?: DateTimeFilter<"Capability"> | Date | string
    updatedAt?: DateTimeFilter<"Capability"> | Date | string
  }, "id">

  export type CapabilityOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    title?: SortOrder
    description?: SortOrder
    materials?: SortOrder
    imageUrl?: SortOrder
    imageAlt?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CapabilityCountOrderByAggregateInput
    _avg?: CapabilityAvgOrderByAggregateInput
    _max?: CapabilityMaxOrderByAggregateInput
    _min?: CapabilityMinOrderByAggregateInput
    _sum?: CapabilitySumOrderByAggregateInput
  }

  export type CapabilityScalarWhereWithAggregatesInput = {
    AND?: CapabilityScalarWhereWithAggregatesInput | CapabilityScalarWhereWithAggregatesInput[]
    OR?: CapabilityScalarWhereWithAggregatesInput[]
    NOT?: CapabilityScalarWhereWithAggregatesInput | CapabilityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Capability"> | number
    number?: StringWithAggregatesFilter<"Capability"> | string
    title?: StringWithAggregatesFilter<"Capability"> | string
    description?: StringWithAggregatesFilter<"Capability"> | string
    materials?: StringWithAggregatesFilter<"Capability"> | string
    imageUrl?: StringWithAggregatesFilter<"Capability"> | string
    imageAlt?: StringWithAggregatesFilter<"Capability"> | string
    sortOrder?: IntWithAggregatesFilter<"Capability"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Capability"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Capability"> | Date | string
  }

  export type WorkItemWhereInput = {
    AND?: WorkItemWhereInput | WorkItemWhereInput[]
    OR?: WorkItemWhereInput[]
    NOT?: WorkItemWhereInput | WorkItemWhereInput[]
    id?: IntFilter<"WorkItem"> | number
    number?: StringFilter<"WorkItem"> | string
    category?: StringFilter<"WorkItem"> | string
    title?: StringFilter<"WorkItem"> | string
    description?: StringFilter<"WorkItem"> | string
    imageUrl?: StringFilter<"WorkItem"> | string
    imageAlt?: StringFilter<"WorkItem"> | string
    sortOrder?: IntFilter<"WorkItem"> | number
    createdAt?: DateTimeFilter<"WorkItem"> | Date | string
    updatedAt?: DateTimeFilter<"WorkItem"> | Date | string
  }

  export type WorkItemOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    category?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    imageAlt?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WorkItemWhereInput | WorkItemWhereInput[]
    OR?: WorkItemWhereInput[]
    NOT?: WorkItemWhereInput | WorkItemWhereInput[]
    number?: StringFilter<"WorkItem"> | string
    category?: StringFilter<"WorkItem"> | string
    title?: StringFilter<"WorkItem"> | string
    description?: StringFilter<"WorkItem"> | string
    imageUrl?: StringFilter<"WorkItem"> | string
    imageAlt?: StringFilter<"WorkItem"> | string
    sortOrder?: IntFilter<"WorkItem"> | number
    createdAt?: DateTimeFilter<"WorkItem"> | Date | string
    updatedAt?: DateTimeFilter<"WorkItem"> | Date | string
  }, "id">

  export type WorkItemOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    category?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    imageAlt?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkItemCountOrderByAggregateInput
    _avg?: WorkItemAvgOrderByAggregateInput
    _max?: WorkItemMaxOrderByAggregateInput
    _min?: WorkItemMinOrderByAggregateInput
    _sum?: WorkItemSumOrderByAggregateInput
  }

  export type WorkItemScalarWhereWithAggregatesInput = {
    AND?: WorkItemScalarWhereWithAggregatesInput | WorkItemScalarWhereWithAggregatesInput[]
    OR?: WorkItemScalarWhereWithAggregatesInput[]
    NOT?: WorkItemScalarWhereWithAggregatesInput | WorkItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WorkItem"> | number
    number?: StringWithAggregatesFilter<"WorkItem"> | string
    category?: StringWithAggregatesFilter<"WorkItem"> | string
    title?: StringWithAggregatesFilter<"WorkItem"> | string
    description?: StringWithAggregatesFilter<"WorkItem"> | string
    imageUrl?: StringWithAggregatesFilter<"WorkItem"> | string
    imageAlt?: StringWithAggregatesFilter<"WorkItem"> | string
    sortOrder?: IntWithAggregatesFilter<"WorkItem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"WorkItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkItem"> | Date | string
  }

  export type FaqWhereInput = {
    AND?: FaqWhereInput | FaqWhereInput[]
    OR?: FaqWhereInput[]
    NOT?: FaqWhereInput | FaqWhereInput[]
    id?: IntFilter<"Faq"> | number
    question?: StringFilter<"Faq"> | string
    answer?: StringFilter<"Faq"> | string
    sortOrder?: IntFilter<"Faq"> | number
    createdAt?: DateTimeFilter<"Faq"> | Date | string
    updatedAt?: DateTimeFilter<"Faq"> | Date | string
  }

  export type FaqOrderByWithRelationInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FaqWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FaqWhereInput | FaqWhereInput[]
    OR?: FaqWhereInput[]
    NOT?: FaqWhereInput | FaqWhereInput[]
    question?: StringFilter<"Faq"> | string
    answer?: StringFilter<"Faq"> | string
    sortOrder?: IntFilter<"Faq"> | number
    createdAt?: DateTimeFilter<"Faq"> | Date | string
    updatedAt?: DateTimeFilter<"Faq"> | Date | string
  }, "id">

  export type FaqOrderByWithAggregationInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FaqCountOrderByAggregateInput
    _avg?: FaqAvgOrderByAggregateInput
    _max?: FaqMaxOrderByAggregateInput
    _min?: FaqMinOrderByAggregateInput
    _sum?: FaqSumOrderByAggregateInput
  }

  export type FaqScalarWhereWithAggregatesInput = {
    AND?: FaqScalarWhereWithAggregatesInput | FaqScalarWhereWithAggregatesInput[]
    OR?: FaqScalarWhereWithAggregatesInput[]
    NOT?: FaqScalarWhereWithAggregatesInput | FaqScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Faq"> | number
    question?: StringWithAggregatesFilter<"Faq"> | string
    answer?: StringWithAggregatesFilter<"Faq"> | string
    sortOrder?: IntWithAggregatesFilter<"Faq"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Faq"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Faq"> | Date | string
  }

  export type MediaAssetWhereInput = {
    AND?: MediaAssetWhereInput | MediaAssetWhereInput[]
    OR?: MediaAssetWhereInput[]
    NOT?: MediaAssetWhereInput | MediaAssetWhereInput[]
    id?: IntFilter<"MediaAsset"> | number
    cloudinaryPublicId?: StringFilter<"MediaAsset"> | string
    url?: StringFilter<"MediaAsset"> | string
    altText?: StringFilter<"MediaAsset"> | string
    assetType?: StringFilter<"MediaAsset"> | string
    createdAt?: DateTimeFilter<"MediaAsset"> | Date | string
  }

  export type MediaAssetOrderByWithRelationInput = {
    id?: SortOrder
    cloudinaryPublicId?: SortOrder
    url?: SortOrder
    altText?: SortOrder
    assetType?: SortOrder
    createdAt?: SortOrder
  }

  export type MediaAssetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MediaAssetWhereInput | MediaAssetWhereInput[]
    OR?: MediaAssetWhereInput[]
    NOT?: MediaAssetWhereInput | MediaAssetWhereInput[]
    cloudinaryPublicId?: StringFilter<"MediaAsset"> | string
    url?: StringFilter<"MediaAsset"> | string
    altText?: StringFilter<"MediaAsset"> | string
    assetType?: StringFilter<"MediaAsset"> | string
    createdAt?: DateTimeFilter<"MediaAsset"> | Date | string
  }, "id">

  export type MediaAssetOrderByWithAggregationInput = {
    id?: SortOrder
    cloudinaryPublicId?: SortOrder
    url?: SortOrder
    altText?: SortOrder
    assetType?: SortOrder
    createdAt?: SortOrder
    _count?: MediaAssetCountOrderByAggregateInput
    _avg?: MediaAssetAvgOrderByAggregateInput
    _max?: MediaAssetMaxOrderByAggregateInput
    _min?: MediaAssetMinOrderByAggregateInput
    _sum?: MediaAssetSumOrderByAggregateInput
  }

  export type MediaAssetScalarWhereWithAggregatesInput = {
    AND?: MediaAssetScalarWhereWithAggregatesInput | MediaAssetScalarWhereWithAggregatesInput[]
    OR?: MediaAssetScalarWhereWithAggregatesInput[]
    NOT?: MediaAssetScalarWhereWithAggregatesInput | MediaAssetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MediaAsset"> | number
    cloudinaryPublicId?: StringWithAggregatesFilter<"MediaAsset"> | string
    url?: StringWithAggregatesFilter<"MediaAsset"> | string
    altText?: StringWithAggregatesFilter<"MediaAsset"> | string
    assetType?: StringWithAggregatesFilter<"MediaAsset"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MediaAsset"> | Date | string
  }

  export type QuoteRequestWhereInput = {
    AND?: QuoteRequestWhereInput | QuoteRequestWhereInput[]
    OR?: QuoteRequestWhereInput[]
    NOT?: QuoteRequestWhereInput | QuoteRequestWhereInput[]
    id?: IntFilter<"QuoteRequest"> | number
    name?: StringFilter<"QuoteRequest"> | string
    email?: StringFilter<"QuoteRequest"> | string
    company?: StringFilter<"QuoteRequest"> | string
    phone?: StringNullableFilter<"QuoteRequest"> | string | null
    skuDetails?: StringFilter<"QuoteRequest"> | string
    timeline?: StringNullableFilter<"QuoteRequest"> | string | null
    message?: StringNullableFilter<"QuoteRequest"> | string | null
    createdAt?: DateTimeFilter<"QuoteRequest"> | Date | string
  }

  export type QuoteRequestOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    company?: SortOrder
    phone?: SortOrderInput | SortOrder
    skuDetails?: SortOrder
    timeline?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type QuoteRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuoteRequestWhereInput | QuoteRequestWhereInput[]
    OR?: QuoteRequestWhereInput[]
    NOT?: QuoteRequestWhereInput | QuoteRequestWhereInput[]
    name?: StringFilter<"QuoteRequest"> | string
    email?: StringFilter<"QuoteRequest"> | string
    company?: StringFilter<"QuoteRequest"> | string
    phone?: StringNullableFilter<"QuoteRequest"> | string | null
    skuDetails?: StringFilter<"QuoteRequest"> | string
    timeline?: StringNullableFilter<"QuoteRequest"> | string | null
    message?: StringNullableFilter<"QuoteRequest"> | string | null
    createdAt?: DateTimeFilter<"QuoteRequest"> | Date | string
  }, "id">

  export type QuoteRequestOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    company?: SortOrder
    phone?: SortOrderInput | SortOrder
    skuDetails?: SortOrder
    timeline?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: QuoteRequestCountOrderByAggregateInput
    _avg?: QuoteRequestAvgOrderByAggregateInput
    _max?: QuoteRequestMaxOrderByAggregateInput
    _min?: QuoteRequestMinOrderByAggregateInput
    _sum?: QuoteRequestSumOrderByAggregateInput
  }

  export type QuoteRequestScalarWhereWithAggregatesInput = {
    AND?: QuoteRequestScalarWhereWithAggregatesInput | QuoteRequestScalarWhereWithAggregatesInput[]
    OR?: QuoteRequestScalarWhereWithAggregatesInput[]
    NOT?: QuoteRequestScalarWhereWithAggregatesInput | QuoteRequestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"QuoteRequest"> | number
    name?: StringWithAggregatesFilter<"QuoteRequest"> | string
    email?: StringWithAggregatesFilter<"QuoteRequest"> | string
    company?: StringWithAggregatesFilter<"QuoteRequest"> | string
    phone?: StringNullableWithAggregatesFilter<"QuoteRequest"> | string | null
    skuDetails?: StringWithAggregatesFilter<"QuoteRequest"> | string
    timeline?: StringNullableWithAggregatesFilter<"QuoteRequest"> | string | null
    message?: StringNullableWithAggregatesFilter<"QuoteRequest"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"QuoteRequest"> | Date | string
  }

  export type StoreSettingWhereInput = {
    AND?: StoreSettingWhereInput | StoreSettingWhereInput[]
    OR?: StoreSettingWhereInput[]
    NOT?: StoreSettingWhereInput | StoreSettingWhereInput[]
    id?: IntFilter<"StoreSetting"> | number
    brandName?: StringFilter<"StoreSetting"> | string
    logoUrl?: StringFilter<"StoreSetting"> | string
    metaTitle?: StringFilter<"StoreSetting"> | string
    metaDescription?: StringFilter<"StoreSetting"> | string
    ogDescription?: StringFilter<"StoreSetting"> | string
    seoKeywords?: StringNullableFilter<"StoreSetting"> | string | null
    searchConsoleId?: StringNullableFilter<"StoreSetting"> | string | null
    gaMeasurementId?: StringNullableFilter<"StoreSetting"> | string | null
    bingVerifyId?: StringNullableFilter<"StoreSetting"> | string | null
    marquee?: StringFilter<"StoreSetting"> | string
    footerText?: StringFilter<"StoreSetting"> | string
    contactEmail?: StringFilter<"StoreSetting"> | string
    checkoutMode?: StringFilter<"StoreSetting"> | string
    createdAt?: DateTimeFilter<"StoreSetting"> | Date | string
    updatedAt?: DateTimeFilter<"StoreSetting"> | Date | string
  }

  export type StoreSettingOrderByWithRelationInput = {
    id?: SortOrder
    brandName?: SortOrder
    logoUrl?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    ogDescription?: SortOrder
    seoKeywords?: SortOrderInput | SortOrder
    searchConsoleId?: SortOrderInput | SortOrder
    gaMeasurementId?: SortOrderInput | SortOrder
    bingVerifyId?: SortOrderInput | SortOrder
    marquee?: SortOrder
    footerText?: SortOrder
    contactEmail?: SortOrder
    checkoutMode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreSettingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StoreSettingWhereInput | StoreSettingWhereInput[]
    OR?: StoreSettingWhereInput[]
    NOT?: StoreSettingWhereInput | StoreSettingWhereInput[]
    brandName?: StringFilter<"StoreSetting"> | string
    logoUrl?: StringFilter<"StoreSetting"> | string
    metaTitle?: StringFilter<"StoreSetting"> | string
    metaDescription?: StringFilter<"StoreSetting"> | string
    ogDescription?: StringFilter<"StoreSetting"> | string
    seoKeywords?: StringNullableFilter<"StoreSetting"> | string | null
    searchConsoleId?: StringNullableFilter<"StoreSetting"> | string | null
    gaMeasurementId?: StringNullableFilter<"StoreSetting"> | string | null
    bingVerifyId?: StringNullableFilter<"StoreSetting"> | string | null
    marquee?: StringFilter<"StoreSetting"> | string
    footerText?: StringFilter<"StoreSetting"> | string
    contactEmail?: StringFilter<"StoreSetting"> | string
    checkoutMode?: StringFilter<"StoreSetting"> | string
    createdAt?: DateTimeFilter<"StoreSetting"> | Date | string
    updatedAt?: DateTimeFilter<"StoreSetting"> | Date | string
  }, "id">

  export type StoreSettingOrderByWithAggregationInput = {
    id?: SortOrder
    brandName?: SortOrder
    logoUrl?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    ogDescription?: SortOrder
    seoKeywords?: SortOrderInput | SortOrder
    searchConsoleId?: SortOrderInput | SortOrder
    gaMeasurementId?: SortOrderInput | SortOrder
    bingVerifyId?: SortOrderInput | SortOrder
    marquee?: SortOrder
    footerText?: SortOrder
    contactEmail?: SortOrder
    checkoutMode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StoreSettingCountOrderByAggregateInput
    _avg?: StoreSettingAvgOrderByAggregateInput
    _max?: StoreSettingMaxOrderByAggregateInput
    _min?: StoreSettingMinOrderByAggregateInput
    _sum?: StoreSettingSumOrderByAggregateInput
  }

  export type StoreSettingScalarWhereWithAggregatesInput = {
    AND?: StoreSettingScalarWhereWithAggregatesInput | StoreSettingScalarWhereWithAggregatesInput[]
    OR?: StoreSettingScalarWhereWithAggregatesInput[]
    NOT?: StoreSettingScalarWhereWithAggregatesInput | StoreSettingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StoreSetting"> | number
    brandName?: StringWithAggregatesFilter<"StoreSetting"> | string
    logoUrl?: StringWithAggregatesFilter<"StoreSetting"> | string
    metaTitle?: StringWithAggregatesFilter<"StoreSetting"> | string
    metaDescription?: StringWithAggregatesFilter<"StoreSetting"> | string
    ogDescription?: StringWithAggregatesFilter<"StoreSetting"> | string
    seoKeywords?: StringNullableWithAggregatesFilter<"StoreSetting"> | string | null
    searchConsoleId?: StringNullableWithAggregatesFilter<"StoreSetting"> | string | null
    gaMeasurementId?: StringNullableWithAggregatesFilter<"StoreSetting"> | string | null
    bingVerifyId?: StringNullableWithAggregatesFilter<"StoreSetting"> | string | null
    marquee?: StringWithAggregatesFilter<"StoreSetting"> | string
    footerText?: StringWithAggregatesFilter<"StoreSetting"> | string
    contactEmail?: StringWithAggregatesFilter<"StoreSetting"> | string
    checkoutMode?: StringWithAggregatesFilter<"StoreSetting"> | string
    createdAt?: DateTimeWithAggregatesFilter<"StoreSetting"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StoreSetting"> | Date | string
  }

  export type StoreContentWhereInput = {
    AND?: StoreContentWhereInput | StoreContentWhereInput[]
    OR?: StoreContentWhereInput[]
    NOT?: StoreContentWhereInput | StoreContentWhereInput[]
    id?: IntFilter<"StoreContent"> | number
    heroEyebrow?: StringFilter<"StoreContent"> | string
    heroLineOne?: StringFilter<"StoreContent"> | string
    heroLineTwo?: StringFilter<"StoreContent"> | string
    heroLineThree?: StringFilter<"StoreContent"> | string
    heroCopy?: StringFilter<"StoreContent"> | string
    primaryCta?: StringFilter<"StoreContent"> | string
    secondaryCta?: StringFilter<"StoreContent"> | string
    dropsEyebrow?: StringFilter<"StoreContent"> | string
    dropsTitle?: StringFilter<"StoreContent"> | string
    menuTitle?: StringFilter<"StoreContent"> | string
    menuCopy?: StringFilter<"StoreContent"> | string
    faqTitle?: StringFilter<"StoreContent"> | string
    createdAt?: DateTimeFilter<"StoreContent"> | Date | string
    updatedAt?: DateTimeFilter<"StoreContent"> | Date | string
  }

  export type StoreContentOrderByWithRelationInput = {
    id?: SortOrder
    heroEyebrow?: SortOrder
    heroLineOne?: SortOrder
    heroLineTwo?: SortOrder
    heroLineThree?: SortOrder
    heroCopy?: SortOrder
    primaryCta?: SortOrder
    secondaryCta?: SortOrder
    dropsEyebrow?: SortOrder
    dropsTitle?: SortOrder
    menuTitle?: SortOrder
    menuCopy?: SortOrder
    faqTitle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreContentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StoreContentWhereInput | StoreContentWhereInput[]
    OR?: StoreContentWhereInput[]
    NOT?: StoreContentWhereInput | StoreContentWhereInput[]
    heroEyebrow?: StringFilter<"StoreContent"> | string
    heroLineOne?: StringFilter<"StoreContent"> | string
    heroLineTwo?: StringFilter<"StoreContent"> | string
    heroLineThree?: StringFilter<"StoreContent"> | string
    heroCopy?: StringFilter<"StoreContent"> | string
    primaryCta?: StringFilter<"StoreContent"> | string
    secondaryCta?: StringFilter<"StoreContent"> | string
    dropsEyebrow?: StringFilter<"StoreContent"> | string
    dropsTitle?: StringFilter<"StoreContent"> | string
    menuTitle?: StringFilter<"StoreContent"> | string
    menuCopy?: StringFilter<"StoreContent"> | string
    faqTitle?: StringFilter<"StoreContent"> | string
    createdAt?: DateTimeFilter<"StoreContent"> | Date | string
    updatedAt?: DateTimeFilter<"StoreContent"> | Date | string
  }, "id">

  export type StoreContentOrderByWithAggregationInput = {
    id?: SortOrder
    heroEyebrow?: SortOrder
    heroLineOne?: SortOrder
    heroLineTwo?: SortOrder
    heroLineThree?: SortOrder
    heroCopy?: SortOrder
    primaryCta?: SortOrder
    secondaryCta?: SortOrder
    dropsEyebrow?: SortOrder
    dropsTitle?: SortOrder
    menuTitle?: SortOrder
    menuCopy?: SortOrder
    faqTitle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StoreContentCountOrderByAggregateInput
    _avg?: StoreContentAvgOrderByAggregateInput
    _max?: StoreContentMaxOrderByAggregateInput
    _min?: StoreContentMinOrderByAggregateInput
    _sum?: StoreContentSumOrderByAggregateInput
  }

  export type StoreContentScalarWhereWithAggregatesInput = {
    AND?: StoreContentScalarWhereWithAggregatesInput | StoreContentScalarWhereWithAggregatesInput[]
    OR?: StoreContentScalarWhereWithAggregatesInput[]
    NOT?: StoreContentScalarWhereWithAggregatesInput | StoreContentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StoreContent"> | number
    heroEyebrow?: StringWithAggregatesFilter<"StoreContent"> | string
    heroLineOne?: StringWithAggregatesFilter<"StoreContent"> | string
    heroLineTwo?: StringWithAggregatesFilter<"StoreContent"> | string
    heroLineThree?: StringWithAggregatesFilter<"StoreContent"> | string
    heroCopy?: StringWithAggregatesFilter<"StoreContent"> | string
    primaryCta?: StringWithAggregatesFilter<"StoreContent"> | string
    secondaryCta?: StringWithAggregatesFilter<"StoreContent"> | string
    dropsEyebrow?: StringWithAggregatesFilter<"StoreContent"> | string
    dropsTitle?: StringWithAggregatesFilter<"StoreContent"> | string
    menuTitle?: StringWithAggregatesFilter<"StoreContent"> | string
    menuCopy?: StringWithAggregatesFilter<"StoreContent"> | string
    faqTitle?: StringWithAggregatesFilter<"StoreContent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"StoreContent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StoreContent"> | Date | string
  }

  export type StoreCategoryWhereInput = {
    AND?: StoreCategoryWhereInput | StoreCategoryWhereInput[]
    OR?: StoreCategoryWhereInput[]
    NOT?: StoreCategoryWhereInput | StoreCategoryWhereInput[]
    id?: IntFilter<"StoreCategory"> | number
    label?: StringFilter<"StoreCategory"> | string
    slug?: StringFilter<"StoreCategory"> | string
    href?: StringFilter<"StoreCategory"> | string
    seoTitle?: StringNullableFilter<"StoreCategory"> | string | null
    seoDescription?: StringNullableFilter<"StoreCategory"> | string | null
    seoIntro?: StringNullableFilter<"StoreCategory"> | string | null
    canonicalUrl?: StringNullableFilter<"StoreCategory"> | string | null
    featured?: BoolFilter<"StoreCategory"> | boolean
    sortOrder?: IntFilter<"StoreCategory"> | number
    createdAt?: DateTimeFilter<"StoreCategory"> | Date | string
    updatedAt?: DateTimeFilter<"StoreCategory"> | Date | string
  }

  export type StoreCategoryOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    slug?: SortOrder
    href?: SortOrder
    seoTitle?: SortOrderInput | SortOrder
    seoDescription?: SortOrderInput | SortOrder
    seoIntro?: SortOrderInput | SortOrder
    canonicalUrl?: SortOrderInput | SortOrder
    featured?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: StoreCategoryWhereInput | StoreCategoryWhereInput[]
    OR?: StoreCategoryWhereInput[]
    NOT?: StoreCategoryWhereInput | StoreCategoryWhereInput[]
    label?: StringFilter<"StoreCategory"> | string
    href?: StringFilter<"StoreCategory"> | string
    seoTitle?: StringNullableFilter<"StoreCategory"> | string | null
    seoDescription?: StringNullableFilter<"StoreCategory"> | string | null
    seoIntro?: StringNullableFilter<"StoreCategory"> | string | null
    canonicalUrl?: StringNullableFilter<"StoreCategory"> | string | null
    featured?: BoolFilter<"StoreCategory"> | boolean
    sortOrder?: IntFilter<"StoreCategory"> | number
    createdAt?: DateTimeFilter<"StoreCategory"> | Date | string
    updatedAt?: DateTimeFilter<"StoreCategory"> | Date | string
  }, "id" | "slug">

  export type StoreCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    slug?: SortOrder
    href?: SortOrder
    seoTitle?: SortOrderInput | SortOrder
    seoDescription?: SortOrderInput | SortOrder
    seoIntro?: SortOrderInput | SortOrder
    canonicalUrl?: SortOrderInput | SortOrder
    featured?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StoreCategoryCountOrderByAggregateInput
    _avg?: StoreCategoryAvgOrderByAggregateInput
    _max?: StoreCategoryMaxOrderByAggregateInput
    _min?: StoreCategoryMinOrderByAggregateInput
    _sum?: StoreCategorySumOrderByAggregateInput
  }

  export type StoreCategoryScalarWhereWithAggregatesInput = {
    AND?: StoreCategoryScalarWhereWithAggregatesInput | StoreCategoryScalarWhereWithAggregatesInput[]
    OR?: StoreCategoryScalarWhereWithAggregatesInput[]
    NOT?: StoreCategoryScalarWhereWithAggregatesInput | StoreCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StoreCategory"> | number
    label?: StringWithAggregatesFilter<"StoreCategory"> | string
    slug?: StringWithAggregatesFilter<"StoreCategory"> | string
    href?: StringWithAggregatesFilter<"StoreCategory"> | string
    seoTitle?: StringNullableWithAggregatesFilter<"StoreCategory"> | string | null
    seoDescription?: StringNullableWithAggregatesFilter<"StoreCategory"> | string | null
    seoIntro?: StringNullableWithAggregatesFilter<"StoreCategory"> | string | null
    canonicalUrl?: StringNullableWithAggregatesFilter<"StoreCategory"> | string | null
    featured?: BoolWithAggregatesFilter<"StoreCategory"> | boolean
    sortOrder?: IntWithAggregatesFilter<"StoreCategory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"StoreCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StoreCategory"> | Date | string
  }

  export type StoreProductWhereInput = {
    AND?: StoreProductWhereInput | StoreProductWhereInput[]
    OR?: StoreProductWhereInput[]
    NOT?: StoreProductWhereInput | StoreProductWhereInput[]
    id?: IntFilter<"StoreProduct"> | number
    title?: StringFilter<"StoreProduct"> | string
    slug?: StringFilter<"StoreProduct"> | string
    category?: StringFilter<"StoreProduct"> | string
    categorySlug?: StringFilter<"StoreProduct"> | string
    price?: FloatFilter<"StoreProduct"> | number
    tag?: StringNullableFilter<"StoreProduct"> | string | null
    inventory?: IntFilter<"StoreProduct"> | number
    status?: StringFilter<"StoreProduct"> | string
    image?: StringNullableFilter<"StoreProduct"> | string | null
    gallery?: JsonNullableFilter<"StoreProduct">
    variants?: JsonNullableFilter<"StoreProduct">
    hues?: JsonNullableFilter<"StoreProduct">
    description?: StringNullableFilter<"StoreProduct"> | string | null
    seoTitle?: StringNullableFilter<"StoreProduct"> | string | null
    seoDescription?: StringNullableFilter<"StoreProduct"> | string | null
    seoKeywords?: StringNullableFilter<"StoreProduct"> | string | null
    canonicalUrl?: StringNullableFilter<"StoreProduct"> | string | null
    imageAlt?: StringNullableFilter<"StoreProduct"> | string | null
    brand?: StringNullableFilter<"StoreProduct"> | string | null
    sku?: StringNullableFilter<"StoreProduct"> | string | null
    reviewRating?: FloatNullableFilter<"StoreProduct"> | number | null
    reviewCount?: IntNullableFilter<"StoreProduct"> | number | null
    seoFocusKeyphrase?: StringNullableFilter<"StoreProduct"> | string | null
    sortOrder?: IntFilter<"StoreProduct"> | number
    createdAt?: DateTimeFilter<"StoreProduct"> | Date | string
    updatedAt?: DateTimeFilter<"StoreProduct"> | Date | string
  }

  export type StoreProductOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    categorySlug?: SortOrder
    price?: SortOrder
    tag?: SortOrderInput | SortOrder
    inventory?: SortOrder
    status?: SortOrder
    image?: SortOrderInput | SortOrder
    gallery?: SortOrderInput | SortOrder
    variants?: SortOrderInput | SortOrder
    hues?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    seoTitle?: SortOrderInput | SortOrder
    seoDescription?: SortOrderInput | SortOrder
    seoKeywords?: SortOrderInput | SortOrder
    canonicalUrl?: SortOrderInput | SortOrder
    imageAlt?: SortOrderInput | SortOrder
    brand?: SortOrderInput | SortOrder
    sku?: SortOrderInput | SortOrder
    reviewRating?: SortOrderInput | SortOrder
    reviewCount?: SortOrderInput | SortOrder
    seoFocusKeyphrase?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: StoreProductWhereInput | StoreProductWhereInput[]
    OR?: StoreProductWhereInput[]
    NOT?: StoreProductWhereInput | StoreProductWhereInput[]
    title?: StringFilter<"StoreProduct"> | string
    category?: StringFilter<"StoreProduct"> | string
    categorySlug?: StringFilter<"StoreProduct"> | string
    price?: FloatFilter<"StoreProduct"> | number
    tag?: StringNullableFilter<"StoreProduct"> | string | null
    inventory?: IntFilter<"StoreProduct"> | number
    status?: StringFilter<"StoreProduct"> | string
    image?: StringNullableFilter<"StoreProduct"> | string | null
    gallery?: JsonNullableFilter<"StoreProduct">
    variants?: JsonNullableFilter<"StoreProduct">
    hues?: JsonNullableFilter<"StoreProduct">
    description?: StringNullableFilter<"StoreProduct"> | string | null
    seoTitle?: StringNullableFilter<"StoreProduct"> | string | null
    seoDescription?: StringNullableFilter<"StoreProduct"> | string | null
    seoKeywords?: StringNullableFilter<"StoreProduct"> | string | null
    canonicalUrl?: StringNullableFilter<"StoreProduct"> | string | null
    imageAlt?: StringNullableFilter<"StoreProduct"> | string | null
    brand?: StringNullableFilter<"StoreProduct"> | string | null
    sku?: StringNullableFilter<"StoreProduct"> | string | null
    reviewRating?: FloatNullableFilter<"StoreProduct"> | number | null
    reviewCount?: IntNullableFilter<"StoreProduct"> | number | null
    seoFocusKeyphrase?: StringNullableFilter<"StoreProduct"> | string | null
    sortOrder?: IntFilter<"StoreProduct"> | number
    createdAt?: DateTimeFilter<"StoreProduct"> | Date | string
    updatedAt?: DateTimeFilter<"StoreProduct"> | Date | string
  }, "id" | "slug">

  export type StoreProductOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    categorySlug?: SortOrder
    price?: SortOrder
    tag?: SortOrderInput | SortOrder
    inventory?: SortOrder
    status?: SortOrder
    image?: SortOrderInput | SortOrder
    gallery?: SortOrderInput | SortOrder
    variants?: SortOrderInput | SortOrder
    hues?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    seoTitle?: SortOrderInput | SortOrder
    seoDescription?: SortOrderInput | SortOrder
    seoKeywords?: SortOrderInput | SortOrder
    canonicalUrl?: SortOrderInput | SortOrder
    imageAlt?: SortOrderInput | SortOrder
    brand?: SortOrderInput | SortOrder
    sku?: SortOrderInput | SortOrder
    reviewRating?: SortOrderInput | SortOrder
    reviewCount?: SortOrderInput | SortOrder
    seoFocusKeyphrase?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StoreProductCountOrderByAggregateInput
    _avg?: StoreProductAvgOrderByAggregateInput
    _max?: StoreProductMaxOrderByAggregateInput
    _min?: StoreProductMinOrderByAggregateInput
    _sum?: StoreProductSumOrderByAggregateInput
  }

  export type StoreProductScalarWhereWithAggregatesInput = {
    AND?: StoreProductScalarWhereWithAggregatesInput | StoreProductScalarWhereWithAggregatesInput[]
    OR?: StoreProductScalarWhereWithAggregatesInput[]
    NOT?: StoreProductScalarWhereWithAggregatesInput | StoreProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StoreProduct"> | number
    title?: StringWithAggregatesFilter<"StoreProduct"> | string
    slug?: StringWithAggregatesFilter<"StoreProduct"> | string
    category?: StringWithAggregatesFilter<"StoreProduct"> | string
    categorySlug?: StringWithAggregatesFilter<"StoreProduct"> | string
    price?: FloatWithAggregatesFilter<"StoreProduct"> | number
    tag?: StringNullableWithAggregatesFilter<"StoreProduct"> | string | null
    inventory?: IntWithAggregatesFilter<"StoreProduct"> | number
    status?: StringWithAggregatesFilter<"StoreProduct"> | string
    image?: StringNullableWithAggregatesFilter<"StoreProduct"> | string | null
    gallery?: JsonNullableWithAggregatesFilter<"StoreProduct">
    variants?: JsonNullableWithAggregatesFilter<"StoreProduct">
    hues?: JsonNullableWithAggregatesFilter<"StoreProduct">
    description?: StringNullableWithAggregatesFilter<"StoreProduct"> | string | null
    seoTitle?: StringNullableWithAggregatesFilter<"StoreProduct"> | string | null
    seoDescription?: StringNullableWithAggregatesFilter<"StoreProduct"> | string | null
    seoKeywords?: StringNullableWithAggregatesFilter<"StoreProduct"> | string | null
    canonicalUrl?: StringNullableWithAggregatesFilter<"StoreProduct"> | string | null
    imageAlt?: StringNullableWithAggregatesFilter<"StoreProduct"> | string | null
    brand?: StringNullableWithAggregatesFilter<"StoreProduct"> | string | null
    sku?: StringNullableWithAggregatesFilter<"StoreProduct"> | string | null
    reviewRating?: FloatNullableWithAggregatesFilter<"StoreProduct"> | number | null
    reviewCount?: IntNullableWithAggregatesFilter<"StoreProduct"> | number | null
    seoFocusKeyphrase?: StringNullableWithAggregatesFilter<"StoreProduct"> | string | null
    sortOrder?: IntWithAggregatesFilter<"StoreProduct"> | number
    createdAt?: DateTimeWithAggregatesFilter<"StoreProduct"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StoreProduct"> | Date | string
  }

  export type StoreFaqWhereInput = {
    AND?: StoreFaqWhereInput | StoreFaqWhereInput[]
    OR?: StoreFaqWhereInput[]
    NOT?: StoreFaqWhereInput | StoreFaqWhereInput[]
    id?: IntFilter<"StoreFaq"> | number
    question?: StringFilter<"StoreFaq"> | string
    answer?: StringFilter<"StoreFaq"> | string
    sortOrder?: IntFilter<"StoreFaq"> | number
    createdAt?: DateTimeFilter<"StoreFaq"> | Date | string
    updatedAt?: DateTimeFilter<"StoreFaq"> | Date | string
  }

  export type StoreFaqOrderByWithRelationInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreFaqWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StoreFaqWhereInput | StoreFaqWhereInput[]
    OR?: StoreFaqWhereInput[]
    NOT?: StoreFaqWhereInput | StoreFaqWhereInput[]
    question?: StringFilter<"StoreFaq"> | string
    answer?: StringFilter<"StoreFaq"> | string
    sortOrder?: IntFilter<"StoreFaq"> | number
    createdAt?: DateTimeFilter<"StoreFaq"> | Date | string
    updatedAt?: DateTimeFilter<"StoreFaq"> | Date | string
  }, "id">

  export type StoreFaqOrderByWithAggregationInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StoreFaqCountOrderByAggregateInput
    _avg?: StoreFaqAvgOrderByAggregateInput
    _max?: StoreFaqMaxOrderByAggregateInput
    _min?: StoreFaqMinOrderByAggregateInput
    _sum?: StoreFaqSumOrderByAggregateInput
  }

  export type StoreFaqScalarWhereWithAggregatesInput = {
    AND?: StoreFaqScalarWhereWithAggregatesInput | StoreFaqScalarWhereWithAggregatesInput[]
    OR?: StoreFaqScalarWhereWithAggregatesInput[]
    NOT?: StoreFaqScalarWhereWithAggregatesInput | StoreFaqScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StoreFaq"> | number
    question?: StringWithAggregatesFilter<"StoreFaq"> | string
    answer?: StringWithAggregatesFilter<"StoreFaq"> | string
    sortOrder?: IntWithAggregatesFilter<"StoreFaq"> | number
    createdAt?: DateTimeWithAggregatesFilter<"StoreFaq"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StoreFaq"> | Date | string
  }

  export type StoreOrderWhereInput = {
    AND?: StoreOrderWhereInput | StoreOrderWhereInput[]
    OR?: StoreOrderWhereInput[]
    NOT?: StoreOrderWhereInput | StoreOrderWhereInput[]
    id?: IntFilter<"StoreOrder"> | number
    customer?: StringFilter<"StoreOrder"> | string
    email?: StringNullableFilter<"StoreOrder"> | string | null
    phone?: StringNullableFilter<"StoreOrder"> | string | null
    status?: StringFilter<"StoreOrder"> | string
    total?: FloatFilter<"StoreOrder"> | number
    items?: JsonFilter<"StoreOrder">
    notes?: StringNullableFilter<"StoreOrder"> | string | null
    createdAt?: DateTimeFilter<"StoreOrder"> | Date | string
    updatedAt?: DateTimeFilter<"StoreOrder"> | Date | string
  }

  export type StoreOrderOrderByWithRelationInput = {
    id?: SortOrder
    customer?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    status?: SortOrder
    total?: SortOrder
    items?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StoreOrderWhereInput | StoreOrderWhereInput[]
    OR?: StoreOrderWhereInput[]
    NOT?: StoreOrderWhereInput | StoreOrderWhereInput[]
    customer?: StringFilter<"StoreOrder"> | string
    email?: StringNullableFilter<"StoreOrder"> | string | null
    phone?: StringNullableFilter<"StoreOrder"> | string | null
    status?: StringFilter<"StoreOrder"> | string
    total?: FloatFilter<"StoreOrder"> | number
    items?: JsonFilter<"StoreOrder">
    notes?: StringNullableFilter<"StoreOrder"> | string | null
    createdAt?: DateTimeFilter<"StoreOrder"> | Date | string
    updatedAt?: DateTimeFilter<"StoreOrder"> | Date | string
  }, "id">

  export type StoreOrderOrderByWithAggregationInput = {
    id?: SortOrder
    customer?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    status?: SortOrder
    total?: SortOrder
    items?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StoreOrderCountOrderByAggregateInput
    _avg?: StoreOrderAvgOrderByAggregateInput
    _max?: StoreOrderMaxOrderByAggregateInput
    _min?: StoreOrderMinOrderByAggregateInput
    _sum?: StoreOrderSumOrderByAggregateInput
  }

  export type StoreOrderScalarWhereWithAggregatesInput = {
    AND?: StoreOrderScalarWhereWithAggregatesInput | StoreOrderScalarWhereWithAggregatesInput[]
    OR?: StoreOrderScalarWhereWithAggregatesInput[]
    NOT?: StoreOrderScalarWhereWithAggregatesInput | StoreOrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StoreOrder"> | number
    customer?: StringWithAggregatesFilter<"StoreOrder"> | string
    email?: StringNullableWithAggregatesFilter<"StoreOrder"> | string | null
    phone?: StringNullableWithAggregatesFilter<"StoreOrder"> | string | null
    status?: StringWithAggregatesFilter<"StoreOrder"> | string
    total?: FloatWithAggregatesFilter<"StoreOrder"> | number
    items?: JsonWithAggregatesFilter<"StoreOrder">
    notes?: StringNullableWithAggregatesFilter<"StoreOrder"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"StoreOrder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StoreOrder"> | Date | string
  }

  export type SiteSettingCreateInput = {
    id?: number
    brandName: string
    logoText: string
    contactEmail: string
    serviceArea: string
    footerDescription: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteSettingUncheckedCreateInput = {
    id?: number
    brandName: string
    logoText: string
    contactEmail: string
    serviceArea: string
    footerDescription: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteSettingUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    brandName?: StringFieldUpdateOperationsInput | string
    logoText?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    serviceArea?: StringFieldUpdateOperationsInput | string
    footerDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteSettingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    brandName?: StringFieldUpdateOperationsInput | string
    logoText?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    serviceArea?: StringFieldUpdateOperationsInput | string
    footerDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteSettingCreateManyInput = {
    id?: number
    brandName: string
    logoText: string
    contactEmail: string
    serviceArea: string
    footerDescription: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteSettingUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    brandName?: StringFieldUpdateOperationsInput | string
    logoText?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    serviceArea?: StringFieldUpdateOperationsInput | string
    footerDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteSettingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    brandName?: StringFieldUpdateOperationsInput | string
    logoText?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    serviceArea?: StringFieldUpdateOperationsInput | string
    footerDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeroSectionCreateInput = {
    id?: number
    eyebrow: string
    headline: string
    subtitle: string
    imageUrl: string
    imageAlt: string
    primaryCtaLabel: string
    primaryCtaUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HeroSectionUncheckedCreateInput = {
    id?: number
    eyebrow: string
    headline: string
    subtitle: string
    imageUrl: string
    imageAlt: string
    primaryCtaLabel: string
    primaryCtaUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HeroSectionUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    eyebrow?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageAlt?: StringFieldUpdateOperationsInput | string
    primaryCtaLabel?: StringFieldUpdateOperationsInput | string
    primaryCtaUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeroSectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    eyebrow?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageAlt?: StringFieldUpdateOperationsInput | string
    primaryCtaLabel?: StringFieldUpdateOperationsInput | string
    primaryCtaUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeroSectionCreateManyInput = {
    id?: number
    eyebrow: string
    headline: string
    subtitle: string
    imageUrl: string
    imageAlt: string
    primaryCtaLabel: string
    primaryCtaUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HeroSectionUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    eyebrow?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageAlt?: StringFieldUpdateOperationsInput | string
    primaryCtaLabel?: StringFieldUpdateOperationsInput | string
    primaryCtaUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeroSectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    eyebrow?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageAlt?: StringFieldUpdateOperationsInput | string
    primaryCtaLabel?: StringFieldUpdateOperationsInput | string
    primaryCtaUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CapabilityCreateInput = {
    number: string
    title: string
    description: string
    materials: string
    imageUrl: string
    imageAlt: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CapabilityUncheckedCreateInput = {
    id?: number
    number: string
    title: string
    description: string
    materials: string
    imageUrl: string
    imageAlt: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CapabilityUpdateInput = {
    number?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    materials?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageAlt?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CapabilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    materials?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageAlt?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CapabilityCreateManyInput = {
    id?: number
    number: string
    title: string
    description: string
    materials: string
    imageUrl: string
    imageAlt: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CapabilityUpdateManyMutationInput = {
    number?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    materials?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageAlt?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CapabilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    materials?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageAlt?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkItemCreateInput = {
    number: string
    category: string
    title: string
    description: string
    imageUrl: string
    imageAlt: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkItemUncheckedCreateInput = {
    id?: number
    number: string
    category: string
    title: string
    description: string
    imageUrl: string
    imageAlt: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkItemUpdateInput = {
    number?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageAlt?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageAlt?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkItemCreateManyInput = {
    id?: number
    number: string
    category: string
    title: string
    description: string
    imageUrl: string
    imageAlt: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkItemUpdateManyMutationInput = {
    number?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageAlt?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageAlt?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FaqCreateInput = {
    question: string
    answer: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FaqUncheckedCreateInput = {
    id?: number
    question: string
    answer: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FaqUpdateInput = {
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FaqUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FaqCreateManyInput = {
    id?: number
    question: string
    answer: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FaqUpdateManyMutationInput = {
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FaqUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaAssetCreateInput = {
    cloudinaryPublicId: string
    url: string
    altText: string
    assetType: string
    createdAt?: Date | string
  }

  export type MediaAssetUncheckedCreateInput = {
    id?: number
    cloudinaryPublicId: string
    url: string
    altText: string
    assetType: string
    createdAt?: Date | string
  }

  export type MediaAssetUpdateInput = {
    cloudinaryPublicId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: StringFieldUpdateOperationsInput | string
    assetType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaAssetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cloudinaryPublicId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: StringFieldUpdateOperationsInput | string
    assetType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaAssetCreateManyInput = {
    id?: number
    cloudinaryPublicId: string
    url: string
    altText: string
    assetType: string
    createdAt?: Date | string
  }

  export type MediaAssetUpdateManyMutationInput = {
    cloudinaryPublicId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: StringFieldUpdateOperationsInput | string
    assetType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaAssetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cloudinaryPublicId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: StringFieldUpdateOperationsInput | string
    assetType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuoteRequestCreateInput = {
    name: string
    email: string
    company: string
    phone?: string | null
    skuDetails: string
    timeline?: string | null
    message?: string | null
    createdAt?: Date | string
  }

  export type QuoteRequestUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    company: string
    phone?: string | null
    skuDetails: string
    timeline?: string | null
    message?: string | null
    createdAt?: Date | string
  }

  export type QuoteRequestUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    skuDetails?: StringFieldUpdateOperationsInput | string
    timeline?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuoteRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    skuDetails?: StringFieldUpdateOperationsInput | string
    timeline?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuoteRequestCreateManyInput = {
    id?: number
    name: string
    email: string
    company: string
    phone?: string | null
    skuDetails: string
    timeline?: string | null
    message?: string | null
    createdAt?: Date | string
  }

  export type QuoteRequestUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    skuDetails?: StringFieldUpdateOperationsInput | string
    timeline?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuoteRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    skuDetails?: StringFieldUpdateOperationsInput | string
    timeline?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreSettingCreateInput = {
    id?: number
    brandName: string
    logoUrl: string
    metaTitle: string
    metaDescription: string
    ogDescription: string
    seoKeywords?: string | null
    searchConsoleId?: string | null
    gaMeasurementId?: string | null
    bingVerifyId?: string | null
    marquee: string
    footerText: string
    contactEmail: string
    checkoutMode?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreSettingUncheckedCreateInput = {
    id?: number
    brandName: string
    logoUrl: string
    metaTitle: string
    metaDescription: string
    ogDescription: string
    seoKeywords?: string | null
    searchConsoleId?: string | null
    gaMeasurementId?: string | null
    bingVerifyId?: string | null
    marquee: string
    footerText: string
    contactEmail: string
    checkoutMode?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreSettingUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    brandName?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    metaTitle?: StringFieldUpdateOperationsInput | string
    metaDescription?: StringFieldUpdateOperationsInput | string
    ogDescription?: StringFieldUpdateOperationsInput | string
    seoKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    searchConsoleId?: NullableStringFieldUpdateOperationsInput | string | null
    gaMeasurementId?: NullableStringFieldUpdateOperationsInput | string | null
    bingVerifyId?: NullableStringFieldUpdateOperationsInput | string | null
    marquee?: StringFieldUpdateOperationsInput | string
    footerText?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    checkoutMode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreSettingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    brandName?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    metaTitle?: StringFieldUpdateOperationsInput | string
    metaDescription?: StringFieldUpdateOperationsInput | string
    ogDescription?: StringFieldUpdateOperationsInput | string
    seoKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    searchConsoleId?: NullableStringFieldUpdateOperationsInput | string | null
    gaMeasurementId?: NullableStringFieldUpdateOperationsInput | string | null
    bingVerifyId?: NullableStringFieldUpdateOperationsInput | string | null
    marquee?: StringFieldUpdateOperationsInput | string
    footerText?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    checkoutMode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreSettingCreateManyInput = {
    id?: number
    brandName: string
    logoUrl: string
    metaTitle: string
    metaDescription: string
    ogDescription: string
    seoKeywords?: string | null
    searchConsoleId?: string | null
    gaMeasurementId?: string | null
    bingVerifyId?: string | null
    marquee: string
    footerText: string
    contactEmail: string
    checkoutMode?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreSettingUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    brandName?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    metaTitle?: StringFieldUpdateOperationsInput | string
    metaDescription?: StringFieldUpdateOperationsInput | string
    ogDescription?: StringFieldUpdateOperationsInput | string
    seoKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    searchConsoleId?: NullableStringFieldUpdateOperationsInput | string | null
    gaMeasurementId?: NullableStringFieldUpdateOperationsInput | string | null
    bingVerifyId?: NullableStringFieldUpdateOperationsInput | string | null
    marquee?: StringFieldUpdateOperationsInput | string
    footerText?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    checkoutMode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreSettingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    brandName?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    metaTitle?: StringFieldUpdateOperationsInput | string
    metaDescription?: StringFieldUpdateOperationsInput | string
    ogDescription?: StringFieldUpdateOperationsInput | string
    seoKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    searchConsoleId?: NullableStringFieldUpdateOperationsInput | string | null
    gaMeasurementId?: NullableStringFieldUpdateOperationsInput | string | null
    bingVerifyId?: NullableStringFieldUpdateOperationsInput | string | null
    marquee?: StringFieldUpdateOperationsInput | string
    footerText?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    checkoutMode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreContentCreateInput = {
    id?: number
    heroEyebrow: string
    heroLineOne: string
    heroLineTwo: string
    heroLineThree: string
    heroCopy: string
    primaryCta: string
    secondaryCta: string
    dropsEyebrow: string
    dropsTitle: string
    menuTitle: string
    menuCopy: string
    faqTitle: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreContentUncheckedCreateInput = {
    id?: number
    heroEyebrow: string
    heroLineOne: string
    heroLineTwo: string
    heroLineThree: string
    heroCopy: string
    primaryCta: string
    secondaryCta: string
    dropsEyebrow: string
    dropsTitle: string
    menuTitle: string
    menuCopy: string
    faqTitle: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreContentUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    heroEyebrow?: StringFieldUpdateOperationsInput | string
    heroLineOne?: StringFieldUpdateOperationsInput | string
    heroLineTwo?: StringFieldUpdateOperationsInput | string
    heroLineThree?: StringFieldUpdateOperationsInput | string
    heroCopy?: StringFieldUpdateOperationsInput | string
    primaryCta?: StringFieldUpdateOperationsInput | string
    secondaryCta?: StringFieldUpdateOperationsInput | string
    dropsEyebrow?: StringFieldUpdateOperationsInput | string
    dropsTitle?: StringFieldUpdateOperationsInput | string
    menuTitle?: StringFieldUpdateOperationsInput | string
    menuCopy?: StringFieldUpdateOperationsInput | string
    faqTitle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreContentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    heroEyebrow?: StringFieldUpdateOperationsInput | string
    heroLineOne?: StringFieldUpdateOperationsInput | string
    heroLineTwo?: StringFieldUpdateOperationsInput | string
    heroLineThree?: StringFieldUpdateOperationsInput | string
    heroCopy?: StringFieldUpdateOperationsInput | string
    primaryCta?: StringFieldUpdateOperationsInput | string
    secondaryCta?: StringFieldUpdateOperationsInput | string
    dropsEyebrow?: StringFieldUpdateOperationsInput | string
    dropsTitle?: StringFieldUpdateOperationsInput | string
    menuTitle?: StringFieldUpdateOperationsInput | string
    menuCopy?: StringFieldUpdateOperationsInput | string
    faqTitle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreContentCreateManyInput = {
    id?: number
    heroEyebrow: string
    heroLineOne: string
    heroLineTwo: string
    heroLineThree: string
    heroCopy: string
    primaryCta: string
    secondaryCta: string
    dropsEyebrow: string
    dropsTitle: string
    menuTitle: string
    menuCopy: string
    faqTitle: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreContentUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    heroEyebrow?: StringFieldUpdateOperationsInput | string
    heroLineOne?: StringFieldUpdateOperationsInput | string
    heroLineTwo?: StringFieldUpdateOperationsInput | string
    heroLineThree?: StringFieldUpdateOperationsInput | string
    heroCopy?: StringFieldUpdateOperationsInput | string
    primaryCta?: StringFieldUpdateOperationsInput | string
    secondaryCta?: StringFieldUpdateOperationsInput | string
    dropsEyebrow?: StringFieldUpdateOperationsInput | string
    dropsTitle?: StringFieldUpdateOperationsInput | string
    menuTitle?: StringFieldUpdateOperationsInput | string
    menuCopy?: StringFieldUpdateOperationsInput | string
    faqTitle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreContentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    heroEyebrow?: StringFieldUpdateOperationsInput | string
    heroLineOne?: StringFieldUpdateOperationsInput | string
    heroLineTwo?: StringFieldUpdateOperationsInput | string
    heroLineThree?: StringFieldUpdateOperationsInput | string
    heroCopy?: StringFieldUpdateOperationsInput | string
    primaryCta?: StringFieldUpdateOperationsInput | string
    secondaryCta?: StringFieldUpdateOperationsInput | string
    dropsEyebrow?: StringFieldUpdateOperationsInput | string
    dropsTitle?: StringFieldUpdateOperationsInput | string
    menuTitle?: StringFieldUpdateOperationsInput | string
    menuCopy?: StringFieldUpdateOperationsInput | string
    faqTitle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreCategoryCreateInput = {
    label: string
    slug: string
    href: string
    seoTitle?: string | null
    seoDescription?: string | null
    seoIntro?: string | null
    canonicalUrl?: string | null
    featured?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreCategoryUncheckedCreateInput = {
    id?: number
    label: string
    slug: string
    href: string
    seoTitle?: string | null
    seoDescription?: string | null
    seoIntro?: string | null
    canonicalUrl?: string | null
    featured?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreCategoryUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    seoIntro?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    seoIntro?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreCategoryCreateManyInput = {
    id?: number
    label: string
    slug: string
    href: string
    seoTitle?: string | null
    seoDescription?: string | null
    seoIntro?: string | null
    canonicalUrl?: string | null
    featured?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreCategoryUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    seoIntro?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    seoIntro?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreProductCreateInput = {
    title: string
    slug: string
    category: string
    categorySlug: string
    price?: number
    tag?: string | null
    inventory?: number
    status?: string
    image?: string | null
    gallery?: NullableJsonNullValueInput | InputJsonValue
    variants?: NullableJsonNullValueInput | InputJsonValue
    hues?: NullableJsonNullValueInput | InputJsonValue
    description?: string | null
    seoTitle?: string | null
    seoDescription?: string | null
    seoKeywords?: string | null
    canonicalUrl?: string | null
    imageAlt?: string | null
    brand?: string | null
    sku?: string | null
    reviewRating?: number | null
    reviewCount?: number | null
    seoFocusKeyphrase?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreProductUncheckedCreateInput = {
    id?: number
    title: string
    slug: string
    category: string
    categorySlug: string
    price?: number
    tag?: string | null
    inventory?: number
    status?: string
    image?: string | null
    gallery?: NullableJsonNullValueInput | InputJsonValue
    variants?: NullableJsonNullValueInput | InputJsonValue
    hues?: NullableJsonNullValueInput | InputJsonValue
    description?: string | null
    seoTitle?: string | null
    seoDescription?: string | null
    seoKeywords?: string | null
    canonicalUrl?: string | null
    imageAlt?: string | null
    brand?: string | null
    sku?: string | null
    reviewRating?: number | null
    reviewCount?: number | null
    seoFocusKeyphrase?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreProductUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    categorySlug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    inventory?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gallery?: NullableJsonNullValueInput | InputJsonValue
    variants?: NullableJsonNullValueInput | InputJsonValue
    hues?: NullableJsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    seoKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    reviewRating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    seoFocusKeyphrase?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    categorySlug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    inventory?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gallery?: NullableJsonNullValueInput | InputJsonValue
    variants?: NullableJsonNullValueInput | InputJsonValue
    hues?: NullableJsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    seoKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    reviewRating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    seoFocusKeyphrase?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreProductCreateManyInput = {
    id?: number
    title: string
    slug: string
    category: string
    categorySlug: string
    price?: number
    tag?: string | null
    inventory?: number
    status?: string
    image?: string | null
    gallery?: NullableJsonNullValueInput | InputJsonValue
    variants?: NullableJsonNullValueInput | InputJsonValue
    hues?: NullableJsonNullValueInput | InputJsonValue
    description?: string | null
    seoTitle?: string | null
    seoDescription?: string | null
    seoKeywords?: string | null
    canonicalUrl?: string | null
    imageAlt?: string | null
    brand?: string | null
    sku?: string | null
    reviewRating?: number | null
    reviewCount?: number | null
    seoFocusKeyphrase?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreProductUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    categorySlug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    inventory?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gallery?: NullableJsonNullValueInput | InputJsonValue
    variants?: NullableJsonNullValueInput | InputJsonValue
    hues?: NullableJsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    seoKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    reviewRating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    seoFocusKeyphrase?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    categorySlug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    inventory?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    gallery?: NullableJsonNullValueInput | InputJsonValue
    variants?: NullableJsonNullValueInput | InputJsonValue
    hues?: NullableJsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    seoKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    reviewRating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    seoFocusKeyphrase?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreFaqCreateInput = {
    question: string
    answer: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreFaqUncheckedCreateInput = {
    id?: number
    question: string
    answer: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreFaqUpdateInput = {
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreFaqUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreFaqCreateManyInput = {
    id?: number
    question: string
    answer: string
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreFaqUpdateManyMutationInput = {
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreFaqUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreOrderCreateInput = {
    customer: string
    email?: string | null
    phone?: string | null
    status?: string
    total?: number
    items: JsonNullValueInput | InputJsonValue
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreOrderUncheckedCreateInput = {
    id?: number
    customer: string
    email?: string | null
    phone?: string | null
    status?: string
    total?: number
    items: JsonNullValueInput | InputJsonValue
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreOrderUpdateInput = {
    customer?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    items?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreOrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    items?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreOrderCreateManyInput = {
    id?: number
    customer: string
    email?: string | null
    phone?: string | null
    status?: string
    total?: number
    items: JsonNullValueInput | InputJsonValue
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreOrderUpdateManyMutationInput = {
    customer?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    items?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreOrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    items?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SiteSettingCountOrderByAggregateInput = {
    id?: SortOrder
    brandName?: SortOrder
    logoText?: SortOrder
    contactEmail?: SortOrder
    serviceArea?: SortOrder
    footerDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteSettingAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SiteSettingMaxOrderByAggregateInput = {
    id?: SortOrder
    brandName?: SortOrder
    logoText?: SortOrder
    contactEmail?: SortOrder
    serviceArea?: SortOrder
    footerDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteSettingMinOrderByAggregateInput = {
    id?: SortOrder
    brandName?: SortOrder
    logoText?: SortOrder
    contactEmail?: SortOrder
    serviceArea?: SortOrder
    footerDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteSettingSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type HeroSectionCountOrderByAggregateInput = {
    id?: SortOrder
    eyebrow?: SortOrder
    headline?: SortOrder
    subtitle?: SortOrder
    imageUrl?: SortOrder
    imageAlt?: SortOrder
    primaryCtaLabel?: SortOrder
    primaryCtaUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HeroSectionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HeroSectionMaxOrderByAggregateInput = {
    id?: SortOrder
    eyebrow?: SortOrder
    headline?: SortOrder
    subtitle?: SortOrder
    imageUrl?: SortOrder
    imageAlt?: SortOrder
    primaryCtaLabel?: SortOrder
    primaryCtaUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HeroSectionMinOrderByAggregateInput = {
    id?: SortOrder
    eyebrow?: SortOrder
    headline?: SortOrder
    subtitle?: SortOrder
    imageUrl?: SortOrder
    imageAlt?: SortOrder
    primaryCtaLabel?: SortOrder
    primaryCtaUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HeroSectionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CapabilityCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    title?: SortOrder
    description?: SortOrder
    materials?: SortOrder
    imageUrl?: SortOrder
    imageAlt?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CapabilityAvgOrderByAggregateInput = {
    id?: SortOrder
    sortOrder?: SortOrder
  }

  export type CapabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    title?: SortOrder
    description?: SortOrder
    materials?: SortOrder
    imageUrl?: SortOrder
    imageAlt?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CapabilityMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    title?: SortOrder
    description?: SortOrder
    materials?: SortOrder
    imageUrl?: SortOrder
    imageAlt?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CapabilitySumOrderByAggregateInput = {
    id?: SortOrder
    sortOrder?: SortOrder
  }

  export type WorkItemCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    category?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    imageAlt?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkItemAvgOrderByAggregateInput = {
    id?: SortOrder
    sortOrder?: SortOrder
  }

  export type WorkItemMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    category?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    imageAlt?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkItemMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    category?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    imageAlt?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkItemSumOrderByAggregateInput = {
    id?: SortOrder
    sortOrder?: SortOrder
  }

  export type FaqCountOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FaqAvgOrderByAggregateInput = {
    id?: SortOrder
    sortOrder?: SortOrder
  }

  export type FaqMaxOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FaqMinOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FaqSumOrderByAggregateInput = {
    id?: SortOrder
    sortOrder?: SortOrder
  }

  export type MediaAssetCountOrderByAggregateInput = {
    id?: SortOrder
    cloudinaryPublicId?: SortOrder
    url?: SortOrder
    altText?: SortOrder
    assetType?: SortOrder
    createdAt?: SortOrder
  }

  export type MediaAssetAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MediaAssetMaxOrderByAggregateInput = {
    id?: SortOrder
    cloudinaryPublicId?: SortOrder
    url?: SortOrder
    altText?: SortOrder
    assetType?: SortOrder
    createdAt?: SortOrder
  }

  export type MediaAssetMinOrderByAggregateInput = {
    id?: SortOrder
    cloudinaryPublicId?: SortOrder
    url?: SortOrder
    altText?: SortOrder
    assetType?: SortOrder
    createdAt?: SortOrder
  }

  export type MediaAssetSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type QuoteRequestCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    company?: SortOrder
    phone?: SortOrder
    skuDetails?: SortOrder
    timeline?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type QuoteRequestAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type QuoteRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    company?: SortOrder
    phone?: SortOrder
    skuDetails?: SortOrder
    timeline?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type QuoteRequestMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    company?: SortOrder
    phone?: SortOrder
    skuDetails?: SortOrder
    timeline?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type QuoteRequestSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StoreSettingCountOrderByAggregateInput = {
    id?: SortOrder
    brandName?: SortOrder
    logoUrl?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    ogDescription?: SortOrder
    seoKeywords?: SortOrder
    searchConsoleId?: SortOrder
    gaMeasurementId?: SortOrder
    bingVerifyId?: SortOrder
    marquee?: SortOrder
    footerText?: SortOrder
    contactEmail?: SortOrder
    checkoutMode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreSettingAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StoreSettingMaxOrderByAggregateInput = {
    id?: SortOrder
    brandName?: SortOrder
    logoUrl?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    ogDescription?: SortOrder
    seoKeywords?: SortOrder
    searchConsoleId?: SortOrder
    gaMeasurementId?: SortOrder
    bingVerifyId?: SortOrder
    marquee?: SortOrder
    footerText?: SortOrder
    contactEmail?: SortOrder
    checkoutMode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreSettingMinOrderByAggregateInput = {
    id?: SortOrder
    brandName?: SortOrder
    logoUrl?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    ogDescription?: SortOrder
    seoKeywords?: SortOrder
    searchConsoleId?: SortOrder
    gaMeasurementId?: SortOrder
    bingVerifyId?: SortOrder
    marquee?: SortOrder
    footerText?: SortOrder
    contactEmail?: SortOrder
    checkoutMode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreSettingSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StoreContentCountOrderByAggregateInput = {
    id?: SortOrder
    heroEyebrow?: SortOrder
    heroLineOne?: SortOrder
    heroLineTwo?: SortOrder
    heroLineThree?: SortOrder
    heroCopy?: SortOrder
    primaryCta?: SortOrder
    secondaryCta?: SortOrder
    dropsEyebrow?: SortOrder
    dropsTitle?: SortOrder
    menuTitle?: SortOrder
    menuCopy?: SortOrder
    faqTitle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreContentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StoreContentMaxOrderByAggregateInput = {
    id?: SortOrder
    heroEyebrow?: SortOrder
    heroLineOne?: SortOrder
    heroLineTwo?: SortOrder
    heroLineThree?: SortOrder
    heroCopy?: SortOrder
    primaryCta?: SortOrder
    secondaryCta?: SortOrder
    dropsEyebrow?: SortOrder
    dropsTitle?: SortOrder
    menuTitle?: SortOrder
    menuCopy?: SortOrder
    faqTitle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreContentMinOrderByAggregateInput = {
    id?: SortOrder
    heroEyebrow?: SortOrder
    heroLineOne?: SortOrder
    heroLineTwo?: SortOrder
    heroLineThree?: SortOrder
    heroCopy?: SortOrder
    primaryCta?: SortOrder
    secondaryCta?: SortOrder
    dropsEyebrow?: SortOrder
    dropsTitle?: SortOrder
    menuTitle?: SortOrder
    menuCopy?: SortOrder
    faqTitle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreContentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StoreCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    slug?: SortOrder
    href?: SortOrder
    seoTitle?: SortOrder
    seoDescription?: SortOrder
    seoIntro?: SortOrder
    canonicalUrl?: SortOrder
    featured?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    sortOrder?: SortOrder
  }

  export type StoreCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    slug?: SortOrder
    href?: SortOrder
    seoTitle?: SortOrder
    seoDescription?: SortOrder
    seoIntro?: SortOrder
    canonicalUrl?: SortOrder
    featured?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    slug?: SortOrder
    href?: SortOrder
    seoTitle?: SortOrder
    seoDescription?: SortOrder
    seoIntro?: SortOrder
    canonicalUrl?: SortOrder
    featured?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreCategorySumOrderByAggregateInput = {
    id?: SortOrder
    sortOrder?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StoreProductCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    categorySlug?: SortOrder
    price?: SortOrder
    tag?: SortOrder
    inventory?: SortOrder
    status?: SortOrder
    image?: SortOrder
    gallery?: SortOrder
    variants?: SortOrder
    hues?: SortOrder
    description?: SortOrder
    seoTitle?: SortOrder
    seoDescription?: SortOrder
    seoKeywords?: SortOrder
    canonicalUrl?: SortOrder
    imageAlt?: SortOrder
    brand?: SortOrder
    sku?: SortOrder
    reviewRating?: SortOrder
    reviewCount?: SortOrder
    seoFocusKeyphrase?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreProductAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    inventory?: SortOrder
    reviewRating?: SortOrder
    reviewCount?: SortOrder
    sortOrder?: SortOrder
  }

  export type StoreProductMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    categorySlug?: SortOrder
    price?: SortOrder
    tag?: SortOrder
    inventory?: SortOrder
    status?: SortOrder
    image?: SortOrder
    description?: SortOrder
    seoTitle?: SortOrder
    seoDescription?: SortOrder
    seoKeywords?: SortOrder
    canonicalUrl?: SortOrder
    imageAlt?: SortOrder
    brand?: SortOrder
    sku?: SortOrder
    reviewRating?: SortOrder
    reviewCount?: SortOrder
    seoFocusKeyphrase?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreProductMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    categorySlug?: SortOrder
    price?: SortOrder
    tag?: SortOrder
    inventory?: SortOrder
    status?: SortOrder
    image?: SortOrder
    description?: SortOrder
    seoTitle?: SortOrder
    seoDescription?: SortOrder
    seoKeywords?: SortOrder
    canonicalUrl?: SortOrder
    imageAlt?: SortOrder
    brand?: SortOrder
    sku?: SortOrder
    reviewRating?: SortOrder
    reviewCount?: SortOrder
    seoFocusKeyphrase?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreProductSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    inventory?: SortOrder
    reviewRating?: SortOrder
    reviewCount?: SortOrder
    sortOrder?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StoreFaqCountOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreFaqAvgOrderByAggregateInput = {
    id?: SortOrder
    sortOrder?: SortOrder
  }

  export type StoreFaqMaxOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreFaqMinOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreFaqSumOrderByAggregateInput = {
    id?: SortOrder
    sortOrder?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StoreOrderCountOrderByAggregateInput = {
    id?: SortOrder
    customer?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    total?: SortOrder
    items?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreOrderAvgOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
  }

  export type StoreOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    customer?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    total?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreOrderMinOrderByAggregateInput = {
    id?: SortOrder
    customer?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    total?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreOrderSumOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use SiteSettingDefaultArgs instead
     */
    export type SiteSettingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SiteSettingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HeroSectionDefaultArgs instead
     */
    export type HeroSectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HeroSectionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CapabilityDefaultArgs instead
     */
    export type CapabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CapabilityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WorkItemDefaultArgs instead
     */
    export type WorkItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorkItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FaqDefaultArgs instead
     */
    export type FaqArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FaqDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MediaAssetDefaultArgs instead
     */
    export type MediaAssetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MediaAssetDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuoteRequestDefaultArgs instead
     */
    export type QuoteRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuoteRequestDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StoreSettingDefaultArgs instead
     */
    export type StoreSettingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StoreSettingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StoreContentDefaultArgs instead
     */
    export type StoreContentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StoreContentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StoreCategoryDefaultArgs instead
     */
    export type StoreCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StoreCategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StoreProductDefaultArgs instead
     */
    export type StoreProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StoreProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StoreFaqDefaultArgs instead
     */
    export type StoreFaqArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StoreFaqDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StoreOrderDefaultArgs instead
     */
    export type StoreOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StoreOrderDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}