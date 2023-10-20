/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model journey
 *
 */
export type journey = $Result.DefaultSelection<Prisma.$journeyPayload>;
/**
 * Model operator
 *
 */
export type operator = $Result.DefaultSelection<Prisma.$operatorPayload>;
/**
 * Model payment
 *
 */
export type payment = $Result.DefaultSelection<Prisma.$paymentPayload>;
/**
 * Model toll_booth
 *
 */
export type toll_booth = $Result.DefaultSelection<Prisma.$toll_boothPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;
/**
 * Model vehicle
 *
 */
export type vehicle = $Result.DefaultSelection<Prisma.$vehiclePayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Journeys
 * const journeys = await prisma.journey.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Journeys
   * const journeys = await prisma.journey.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

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
  $use(cb: Prisma.Middleware): void;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.journey`: Exposes CRUD operations for the **journey** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Journeys
   * const journeys = await prisma.journey.findMany()
   * ```
   */
  get journey(): Prisma.journeyDelegate<ExtArgs>;

  /**
   * `prisma.operator`: Exposes CRUD operations for the **operator** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Operators
   * const operators = await prisma.operator.findMany()
   * ```
   */
  get operator(): Prisma.operatorDelegate<ExtArgs>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **payment** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Payments
   * const payments = await prisma.payment.findMany()
   * ```
   */
  get payment(): Prisma.paymentDelegate<ExtArgs>;

  /**
   * `prisma.toll_booth`: Exposes CRUD operations for the **toll_booth** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Toll_booths
   * const toll_booths = await prisma.toll_booth.findMany()
   * ```
   */
  get toll_booth(): Prisma.toll_boothDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;

  /**
   * `prisma.vehicle`: Exposes CRUD operations for the **vehicle** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Vehicles
   * const vehicles = await prisma.vehicle.findMany()
   * ```
   */
  get vehicle(): Prisma.vehicleDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

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
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    journey: 'journey';
    operator: 'operator';
    payment: 'payment';
    toll_booth: 'toll_booth';
    user: 'user';
    vehicle: 'vehicle';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'journey' | 'operator' | 'payment' | 'toll_booth' | 'user' | 'vehicle';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      journey: {
        payload: Prisma.$journeyPayload<ExtArgs>;
        fields: Prisma.journeyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.journeyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$journeyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.journeyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$journeyPayload>;
          };
          findFirst: {
            args: Prisma.journeyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$journeyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.journeyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$journeyPayload>;
          };
          findMany: {
            args: Prisma.journeyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$journeyPayload>[];
          };
          create: {
            args: Prisma.journeyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$journeyPayload>;
          };
          createMany: {
            args: Prisma.journeyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.journeyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$journeyPayload>;
          };
          update: {
            args: Prisma.journeyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$journeyPayload>;
          };
          deleteMany: {
            args: Prisma.journeyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.journeyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.journeyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$journeyPayload>;
          };
          aggregate: {
            args: Prisma.JourneyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateJourney>;
          };
          groupBy: {
            args: Prisma.journeyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<JourneyGroupByOutputType>[];
          };
          count: {
            args: Prisma.journeyCountArgs<ExtArgs>;
            result: $Utils.Optional<JourneyCountAggregateOutputType> | number;
          };
        };
      };
      operator: {
        payload: Prisma.$operatorPayload<ExtArgs>;
        fields: Prisma.operatorFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.operatorFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$operatorPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.operatorFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$operatorPayload>;
          };
          findFirst: {
            args: Prisma.operatorFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$operatorPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.operatorFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$operatorPayload>;
          };
          findMany: {
            args: Prisma.operatorFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$operatorPayload>[];
          };
          create: {
            args: Prisma.operatorCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$operatorPayload>;
          };
          createMany: {
            args: Prisma.operatorCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.operatorDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$operatorPayload>;
          };
          update: {
            args: Prisma.operatorUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$operatorPayload>;
          };
          deleteMany: {
            args: Prisma.operatorDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.operatorUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.operatorUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$operatorPayload>;
          };
          aggregate: {
            args: Prisma.OperatorAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOperator>;
          };
          groupBy: {
            args: Prisma.operatorGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OperatorGroupByOutputType>[];
          };
          count: {
            args: Prisma.operatorCountArgs<ExtArgs>;
            result: $Utils.Optional<OperatorCountAggregateOutputType> | number;
          };
        };
      };
      payment: {
        payload: Prisma.$paymentPayload<ExtArgs>;
        fields: Prisma.paymentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.paymentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$paymentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.paymentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>;
          };
          findFirst: {
            args: Prisma.paymentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$paymentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.paymentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>;
          };
          findMany: {
            args: Prisma.paymentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>[];
          };
          create: {
            args: Prisma.paymentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>;
          };
          createMany: {
            args: Prisma.paymentCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.paymentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>;
          };
          update: {
            args: Prisma.paymentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>;
          };
          deleteMany: {
            args: Prisma.paymentDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.paymentUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.paymentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>;
          };
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePayment>;
          };
          groupBy: {
            args: Prisma.paymentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PaymentGroupByOutputType>[];
          };
          count: {
            args: Prisma.paymentCountArgs<ExtArgs>;
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number;
          };
        };
      };
      toll_booth: {
        payload: Prisma.$toll_boothPayload<ExtArgs>;
        fields: Prisma.toll_boothFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.toll_boothFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$toll_boothPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.toll_boothFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$toll_boothPayload>;
          };
          findFirst: {
            args: Prisma.toll_boothFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$toll_boothPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.toll_boothFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$toll_boothPayload>;
          };
          findMany: {
            args: Prisma.toll_boothFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$toll_boothPayload>[];
          };
          create: {
            args: Prisma.toll_boothCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$toll_boothPayload>;
          };
          createMany: {
            args: Prisma.toll_boothCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.toll_boothDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$toll_boothPayload>;
          };
          update: {
            args: Prisma.toll_boothUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$toll_boothPayload>;
          };
          deleteMany: {
            args: Prisma.toll_boothDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.toll_boothUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.toll_boothUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$toll_boothPayload>;
          };
          aggregate: {
            args: Prisma.Toll_boothAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateToll_booth>;
          };
          groupBy: {
            args: Prisma.toll_boothGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Toll_boothGroupByOutputType>[];
          };
          count: {
            args: Prisma.toll_boothCountArgs<ExtArgs>;
            result: $Utils.Optional<Toll_boothCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      vehicle: {
        payload: Prisma.$vehiclePayload<ExtArgs>;
        fields: Prisma.vehicleFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.vehicleFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.vehicleFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload>;
          };
          findFirst: {
            args: Prisma.vehicleFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.vehicleFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload>;
          };
          findMany: {
            args: Prisma.vehicleFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload>[];
          };
          create: {
            args: Prisma.vehicleCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload>;
          };
          createMany: {
            args: Prisma.vehicleCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.vehicleDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload>;
          };
          update: {
            args: Prisma.vehicleUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload>;
          };
          deleteMany: {
            args: Prisma.vehicleDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.vehicleUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.vehicleUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload>;
          };
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateVehicle>;
          };
          groupBy: {
            args: Prisma.vehicleGroupByArgs<ExtArgs>;
            result: $Utils.Optional<VehicleGroupByOutputType>[];
          };
          count: {
            args: Prisma.vehicleCountArgs<ExtArgs>;
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
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
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
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
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type OperatorCountOutputType
   */

  export type OperatorCountOutputType = {
    toll_booth: number;
  };

  export type OperatorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    toll_booth?: boolean | OperatorCountOutputTypeCountToll_boothArgs;
  };

  // Custom InputTypes

  /**
   * OperatorCountOutputType without action
   */
  export type OperatorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatorCountOutputType
     */
    select?: OperatorCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * OperatorCountOutputType without action
   */
  export type OperatorCountOutputTypeCountToll_boothArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: toll_boothWhereInput;
  };

  /**
   * Count Type PaymentCountOutputType
   */

  export type PaymentCountOutputType = {
    journey: number;
  };

  export type PaymentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    journey?: boolean | PaymentCountOutputTypeCountJourneyArgs;
  };

  // Custom InputTypes

  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentCountOutputType
     */
    select?: PaymentCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeCountJourneyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: journeyWhereInput;
  };

  /**
   * Count Type Toll_boothCountOutputType
   */

  export type Toll_boothCountOutputType = {
    journey: number;
    payment: number;
  };

  export type Toll_boothCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    journey?: boolean | Toll_boothCountOutputTypeCountJourneyArgs;
    payment?: boolean | Toll_boothCountOutputTypeCountPaymentArgs;
  };

  // Custom InputTypes

  /**
   * Toll_boothCountOutputType without action
   */
  export type Toll_boothCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Toll_boothCountOutputType
       */
      select?: Toll_boothCountOutputTypeSelect<ExtArgs> | null;
    };

  /**
   * Toll_boothCountOutputType without action
   */
  export type Toll_boothCountOutputTypeCountJourneyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: journeyWhereInput;
  };

  /**
   * Toll_boothCountOutputType without action
   */
  export type Toll_boothCountOutputTypeCountPaymentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: paymentWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    operator: number;
    payment: number;
    vehicle: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operator?: boolean | UserCountOutputTypeCountOperatorArgs;
    payment?: boolean | UserCountOutputTypeCountPaymentArgs;
    vehicle?: boolean | UserCountOutputTypeCountVehicleArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOperatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: operatorWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: paymentWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: vehicleWhereInput;
    };

  /**
   * Count Type VehicleCountOutputType
   */

  export type VehicleCountOutputType = {
    journey: number;
  };

  export type VehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    journey?: boolean | VehicleCountOutputTypeCountJourneyArgs;
  };

  // Custom InputTypes

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCountOutputType
     */
    select?: VehicleCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountJourneyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: journeyWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model journey
   */

  export type AggregateJourney = {
    _count: JourneyCountAggregateOutputType | null;
    _min: JourneyMinAggregateOutputType | null;
    _max: JourneyMaxAggregateOutputType | null;
  };

  export type JourneyMinAggregateOutputType = {
    id: string | null;
    start_time: Date | null;
    end_time: Date | null;
    vehicle_id: string | null;
    toll_booth_id: string | null;
    payment_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type JourneyMaxAggregateOutputType = {
    id: string | null;
    start_time: Date | null;
    end_time: Date | null;
    vehicle_id: string | null;
    toll_booth_id: string | null;
    payment_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type JourneyCountAggregateOutputType = {
    id: number;
    start_time: number;
    end_time: number;
    vehicle_id: number;
    toll_booth_id: number;
    payment_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type JourneyMinAggregateInputType = {
    id?: true;
    start_time?: true;
    end_time?: true;
    vehicle_id?: true;
    toll_booth_id?: true;
    payment_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type JourneyMaxAggregateInputType = {
    id?: true;
    start_time?: true;
    end_time?: true;
    vehicle_id?: true;
    toll_booth_id?: true;
    payment_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type JourneyCountAggregateInputType = {
    id?: true;
    start_time?: true;
    end_time?: true;
    vehicle_id?: true;
    toll_booth_id?: true;
    payment_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type JourneyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which journey to aggregate.
     */
    where?: journeyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of journeys to fetch.
     */
    orderBy?: journeyOrderByWithRelationInput | journeyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: journeyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` journeys from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` journeys.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned journeys
     **/
    _count?: true | JourneyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: JourneyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: JourneyMaxAggregateInputType;
  };

  export type GetJourneyAggregateType<T extends JourneyAggregateArgs> = {
    [P in keyof T & keyof AggregateJourney]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJourney[P]>
      : GetScalarType<T[P], AggregateJourney[P]>;
  };

  export type journeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: journeyWhereInput;
    orderBy?: journeyOrderByWithAggregationInput | journeyOrderByWithAggregationInput[];
    by: JourneyScalarFieldEnum[] | JourneyScalarFieldEnum;
    having?: journeyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: JourneyCountAggregateInputType | true;
    _min?: JourneyMinAggregateInputType;
    _max?: JourneyMaxAggregateInputType;
  };

  export type JourneyGroupByOutputType = {
    id: string;
    start_time: Date | null;
    end_time: Date | null;
    vehicle_id: string;
    toll_booth_id: string;
    payment_id: string;
    created_at: Date;
    updated_at: Date;
    _count: JourneyCountAggregateOutputType | null;
    _min: JourneyMinAggregateOutputType | null;
    _max: JourneyMaxAggregateOutputType | null;
  };

  type GetJourneyGroupByPayload<T extends journeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JourneyGroupByOutputType, T['by']> & {
        [P in keyof T & keyof JourneyGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], JourneyGroupByOutputType[P]>
          : GetScalarType<T[P], JourneyGroupByOutputType[P]>;
      }
    >
  >;

  export type journeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      start_time?: boolean;
      end_time?: boolean;
      vehicle_id?: boolean;
      toll_booth_id?: boolean;
      payment_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      payment?: boolean | paymentDefaultArgs<ExtArgs>;
      toll_booth?: boolean | toll_boothDefaultArgs<ExtArgs>;
      vehicle?: boolean | vehicleDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['journey']
  >;

  export type journeySelectScalar = {
    id?: boolean;
    start_time?: boolean;
    end_time?: boolean;
    vehicle_id?: boolean;
    toll_booth_id?: boolean;
    payment_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type journeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | paymentDefaultArgs<ExtArgs>;
    toll_booth?: boolean | toll_boothDefaultArgs<ExtArgs>;
    vehicle?: boolean | vehicleDefaultArgs<ExtArgs>;
  };

  export type $journeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'journey';
    objects: {
      payment: Prisma.$paymentPayload<ExtArgs>;
      toll_booth: Prisma.$toll_boothPayload<ExtArgs>;
      vehicle: Prisma.$vehiclePayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        start_time: Date | null;
        end_time: Date | null;
        vehicle_id: string;
        toll_booth_id: string;
        payment_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['journey']
    >;
    composites: {};
  };

  type journeyGetPayload<S extends boolean | null | undefined | journeyDefaultArgs> = $Result.GetResult<
    Prisma.$journeyPayload,
    S
  >;

  type journeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    journeyFindManyArgs,
    'select' | 'include'
  > & {
    select?: JourneyCountAggregateInputType | true;
  };

  export interface journeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['journey']; meta: { name: 'journey' } };
    /**
     * Find zero or one Journey that matches the filter.
     * @param {journeyFindUniqueArgs} args - Arguments to find a Journey
     * @example
     * // Get one Journey
     * const journey = await prisma.journey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends journeyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, journeyFindUniqueArgs<ExtArgs>>,
    ): Prisma__journeyClient<$Result.GetResult<Prisma.$journeyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Journey that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {journeyFindUniqueOrThrowArgs} args - Arguments to find a Journey
     * @example
     * // Get one Journey
     * const journey = await prisma.journey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends journeyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, journeyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__journeyClient<
      $Result.GetResult<Prisma.$journeyPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Journey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {journeyFindFirstArgs} args - Arguments to find a Journey
     * @example
     * // Get one Journey
     * const journey = await prisma.journey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends journeyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, journeyFindFirstArgs<ExtArgs>>,
    ): Prisma__journeyClient<$Result.GetResult<Prisma.$journeyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Journey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {journeyFindFirstOrThrowArgs} args - Arguments to find a Journey
     * @example
     * // Get one Journey
     * const journey = await prisma.journey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends journeyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, journeyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__journeyClient<$Result.GetResult<Prisma.$journeyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Journeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {journeyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Journeys
     * const journeys = await prisma.journey.findMany()
     *
     * // Get first 10 Journeys
     * const journeys = await prisma.journey.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const journeyWithIdOnly = await prisma.journey.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends journeyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, journeyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$journeyPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Journey.
     * @param {journeyCreateArgs} args - Arguments to create a Journey.
     * @example
     * // Create one Journey
     * const Journey = await prisma.journey.create({
     *   data: {
     *     // ... data to create a Journey
     *   }
     * })
     *
     **/
    create<T extends journeyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, journeyCreateArgs<ExtArgs>>,
    ): Prisma__journeyClient<$Result.GetResult<Prisma.$journeyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Journeys.
     *     @param {journeyCreateManyArgs} args - Arguments to create many Journeys.
     *     @example
     *     // Create many Journeys
     *     const journey = await prisma.journey.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends journeyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, journeyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Journey.
     * @param {journeyDeleteArgs} args - Arguments to delete one Journey.
     * @example
     * // Delete one Journey
     * const Journey = await prisma.journey.delete({
     *   where: {
     *     // ... filter to delete one Journey
     *   }
     * })
     *
     **/
    delete<T extends journeyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, journeyDeleteArgs<ExtArgs>>,
    ): Prisma__journeyClient<$Result.GetResult<Prisma.$journeyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Journey.
     * @param {journeyUpdateArgs} args - Arguments to update one Journey.
     * @example
     * // Update one Journey
     * const journey = await prisma.journey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends journeyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, journeyUpdateArgs<ExtArgs>>,
    ): Prisma__journeyClient<$Result.GetResult<Prisma.$journeyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Journeys.
     * @param {journeyDeleteManyArgs} args - Arguments to filter Journeys to delete.
     * @example
     * // Delete a few Journeys
     * const { count } = await prisma.journey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends journeyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, journeyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Journeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {journeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Journeys
     * const journey = await prisma.journey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends journeyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, journeyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Journey.
     * @param {journeyUpsertArgs} args - Arguments to update or create a Journey.
     * @example
     * // Update or create a Journey
     * const journey = await prisma.journey.upsert({
     *   create: {
     *     // ... data to create a Journey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Journey we want to update
     *   }
     * })
     **/
    upsert<T extends journeyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, journeyUpsertArgs<ExtArgs>>,
    ): Prisma__journeyClient<$Result.GetResult<Prisma.$journeyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Journeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {journeyCountArgs} args - Arguments to filter Journeys to count.
     * @example
     * // Count the number of Journeys
     * const count = await prisma.journey.count({
     *   where: {
     *     // ... the filter for the Journeys we want to count
     *   }
     * })
     **/
    count<T extends journeyCountArgs>(
      args?: Subset<T, journeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JourneyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Journey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JourneyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JourneyAggregateArgs>(
      args: Subset<T, JourneyAggregateArgs>,
    ): Prisma.PrismaPromise<GetJourneyAggregateType<T>>;

    /**
     * Group by Journey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {journeyGroupByArgs} args - Group by arguments.
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
      T extends journeyGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: journeyGroupByArgs['orderBy'] }
        : { orderBy?: journeyGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, journeyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetJourneyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the journey model
     */
    readonly fields: journeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for journey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__journeyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    payment<T extends paymentDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, paymentDefaultArgs<ExtArgs>>,
    ): Prisma__paymentClient<
      $Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    toll_booth<T extends toll_boothDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, toll_boothDefaultArgs<ExtArgs>>,
    ): Prisma__toll_boothClient<
      $Result.GetResult<Prisma.$toll_boothPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    vehicle<T extends vehicleDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, vehicleDefaultArgs<ExtArgs>>,
    ): Prisma__vehicleClient<
      $Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the journey model
   */
  interface journeyFieldRefs {
    readonly id: FieldRef<'journey', 'String'>;
    readonly start_time: FieldRef<'journey', 'DateTime'>;
    readonly end_time: FieldRef<'journey', 'DateTime'>;
    readonly vehicle_id: FieldRef<'journey', 'String'>;
    readonly toll_booth_id: FieldRef<'journey', 'String'>;
    readonly payment_id: FieldRef<'journey', 'String'>;
    readonly created_at: FieldRef<'journey', 'DateTime'>;
    readonly updated_at: FieldRef<'journey', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * journey findUnique
   */
  export type journeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the journey
     */
    select?: journeySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: journeyInclude<ExtArgs> | null;
    /**
     * Filter, which journey to fetch.
     */
    where: journeyWhereUniqueInput;
  };

  /**
   * journey findUniqueOrThrow
   */
  export type journeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the journey
     */
    select?: journeySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: journeyInclude<ExtArgs> | null;
    /**
     * Filter, which journey to fetch.
     */
    where: journeyWhereUniqueInput;
  };

  /**
   * journey findFirst
   */
  export type journeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the journey
     */
    select?: journeySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: journeyInclude<ExtArgs> | null;
    /**
     * Filter, which journey to fetch.
     */
    where?: journeyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of journeys to fetch.
     */
    orderBy?: journeyOrderByWithRelationInput | journeyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for journeys.
     */
    cursor?: journeyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` journeys from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` journeys.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of journeys.
     */
    distinct?: JourneyScalarFieldEnum | JourneyScalarFieldEnum[];
  };

  /**
   * journey findFirstOrThrow
   */
  export type journeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the journey
     */
    select?: journeySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: journeyInclude<ExtArgs> | null;
    /**
     * Filter, which journey to fetch.
     */
    where?: journeyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of journeys to fetch.
     */
    orderBy?: journeyOrderByWithRelationInput | journeyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for journeys.
     */
    cursor?: journeyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` journeys from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` journeys.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of journeys.
     */
    distinct?: JourneyScalarFieldEnum | JourneyScalarFieldEnum[];
  };

  /**
   * journey findMany
   */
  export type journeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the journey
     */
    select?: journeySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: journeyInclude<ExtArgs> | null;
    /**
     * Filter, which journeys to fetch.
     */
    where?: journeyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of journeys to fetch.
     */
    orderBy?: journeyOrderByWithRelationInput | journeyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing journeys.
     */
    cursor?: journeyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` journeys from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` journeys.
     */
    skip?: number;
    distinct?: JourneyScalarFieldEnum | JourneyScalarFieldEnum[];
  };

  /**
   * journey create
   */
  export type journeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the journey
     */
    select?: journeySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: journeyInclude<ExtArgs> | null;
    /**
     * The data needed to create a journey.
     */
    data: XOR<journeyCreateInput, journeyUncheckedCreateInput>;
  };

  /**
   * journey createMany
   */
  export type journeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many journeys.
     */
    data: journeyCreateManyInput | journeyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * journey update
   */
  export type journeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the journey
     */
    select?: journeySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: journeyInclude<ExtArgs> | null;
    /**
     * The data needed to update a journey.
     */
    data: XOR<journeyUpdateInput, journeyUncheckedUpdateInput>;
    /**
     * Choose, which journey to update.
     */
    where: journeyWhereUniqueInput;
  };

  /**
   * journey updateMany
   */
  export type journeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update journeys.
     */
    data: XOR<journeyUpdateManyMutationInput, journeyUncheckedUpdateManyInput>;
    /**
     * Filter which journeys to update
     */
    where?: journeyWhereInput;
  };

  /**
   * journey upsert
   */
  export type journeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the journey
     */
    select?: journeySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: journeyInclude<ExtArgs> | null;
    /**
     * The filter to search for the journey to update in case it exists.
     */
    where: journeyWhereUniqueInput;
    /**
     * In case the journey found by the `where` argument doesn't exist, create a new journey with this data.
     */
    create: XOR<journeyCreateInput, journeyUncheckedCreateInput>;
    /**
     * In case the journey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<journeyUpdateInput, journeyUncheckedUpdateInput>;
  };

  /**
   * journey delete
   */
  export type journeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the journey
     */
    select?: journeySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: journeyInclude<ExtArgs> | null;
    /**
     * Filter which journey to delete.
     */
    where: journeyWhereUniqueInput;
  };

  /**
   * journey deleteMany
   */
  export type journeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which journeys to delete
     */
    where?: journeyWhereInput;
  };

  /**
   * journey without action
   */
  export type journeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the journey
     */
    select?: journeySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: journeyInclude<ExtArgs> | null;
  };

  /**
   * Model operator
   */

  export type AggregateOperator = {
    _count: OperatorCountAggregateOutputType | null;
    _min: OperatorMinAggregateOutputType | null;
    _max: OperatorMaxAggregateOutputType | null;
  };

  export type OperatorMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    operational_hours: string | null;
    location: string | null;
    status: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type OperatorMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    operational_hours: string | null;
    location: string | null;
    status: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type OperatorCountAggregateOutputType = {
    id: number;
    description: number;
    operational_hours: number;
    location: number;
    status: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type OperatorMinAggregateInputType = {
    id?: true;
    description?: true;
    operational_hours?: true;
    location?: true;
    status?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type OperatorMaxAggregateInputType = {
    id?: true;
    description?: true;
    operational_hours?: true;
    location?: true;
    status?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type OperatorCountAggregateInputType = {
    id?: true;
    description?: true;
    operational_hours?: true;
    location?: true;
    status?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type OperatorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which operator to aggregate.
     */
    where?: operatorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of operators to fetch.
     */
    orderBy?: operatorOrderByWithRelationInput | operatorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: operatorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` operators from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` operators.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned operators
     **/
    _count?: true | OperatorCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OperatorMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OperatorMaxAggregateInputType;
  };

  export type GetOperatorAggregateType<T extends OperatorAggregateArgs> = {
    [P in keyof T & keyof AggregateOperator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOperator[P]>
      : GetScalarType<T[P], AggregateOperator[P]>;
  };

  export type operatorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: operatorWhereInput;
    orderBy?: operatorOrderByWithAggregationInput | operatorOrderByWithAggregationInput[];
    by: OperatorScalarFieldEnum[] | OperatorScalarFieldEnum;
    having?: operatorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OperatorCountAggregateInputType | true;
    _min?: OperatorMinAggregateInputType;
    _max?: OperatorMaxAggregateInputType;
  };

  export type OperatorGroupByOutputType = {
    id: string;
    description: string | null;
    operational_hours: string | null;
    location: string | null;
    status: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: OperatorCountAggregateOutputType | null;
    _min: OperatorMinAggregateOutputType | null;
    _max: OperatorMaxAggregateOutputType | null;
  };

  type GetOperatorGroupByPayload<T extends operatorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OperatorGroupByOutputType, T['by']> & {
        [P in keyof T & keyof OperatorGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], OperatorGroupByOutputType[P]>
          : GetScalarType<T[P], OperatorGroupByOutputType[P]>;
      }
    >
  >;

  export type operatorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        description?: boolean;
        operational_hours?: boolean;
        location?: boolean;
        status?: boolean;
        name?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user_id?: boolean;
        tenant_id?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
        toll_booth?: boolean | operator$toll_boothArgs<ExtArgs>;
        _count?: boolean | OperatorCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['operator']
    >;

  export type operatorSelectScalar = {
    id?: boolean;
    description?: boolean;
    operational_hours?: boolean;
    location?: boolean;
    status?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type operatorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    toll_booth?: boolean | operator$toll_boothArgs<ExtArgs>;
    _count?: boolean | OperatorCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $operatorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'operator';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      toll_booth: Prisma.$toll_boothPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        operational_hours: string | null;
        location: string | null;
        status: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['operator']
    >;
    composites: {};
  };

  type operatorGetPayload<S extends boolean | null | undefined | operatorDefaultArgs> = $Result.GetResult<
    Prisma.$operatorPayload,
    S
  >;

  type operatorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    operatorFindManyArgs,
    'select' | 'include'
  > & {
    select?: OperatorCountAggregateInputType | true;
  };

  export interface operatorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['operator']; meta: { name: 'operator' } };
    /**
     * Find zero or one Operator that matches the filter.
     * @param {operatorFindUniqueArgs} args - Arguments to find a Operator
     * @example
     * // Get one Operator
     * const operator = await prisma.operator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends operatorFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, operatorFindUniqueArgs<ExtArgs>>,
    ): Prisma__operatorClient<
      $Result.GetResult<Prisma.$operatorPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Operator that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {operatorFindUniqueOrThrowArgs} args - Arguments to find a Operator
     * @example
     * // Get one Operator
     * const operator = await prisma.operator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends operatorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, operatorFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__operatorClient<
      $Result.GetResult<Prisma.$operatorPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Operator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operatorFindFirstArgs} args - Arguments to find a Operator
     * @example
     * // Get one Operator
     * const operator = await prisma.operator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends operatorFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, operatorFindFirstArgs<ExtArgs>>,
    ): Prisma__operatorClient<
      $Result.GetResult<Prisma.$operatorPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Operator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operatorFindFirstOrThrowArgs} args - Arguments to find a Operator
     * @example
     * // Get one Operator
     * const operator = await prisma.operator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends operatorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, operatorFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__operatorClient<
      $Result.GetResult<Prisma.$operatorPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Operators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operatorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Operators
     * const operators = await prisma.operator.findMany()
     *
     * // Get first 10 Operators
     * const operators = await prisma.operator.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const operatorWithIdOnly = await prisma.operator.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends operatorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, operatorFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$operatorPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Operator.
     * @param {operatorCreateArgs} args - Arguments to create a Operator.
     * @example
     * // Create one Operator
     * const Operator = await prisma.operator.create({
     *   data: {
     *     // ... data to create a Operator
     *   }
     * })
     *
     **/
    create<T extends operatorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, operatorCreateArgs<ExtArgs>>,
    ): Prisma__operatorClient<$Result.GetResult<Prisma.$operatorPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Operators.
     *     @param {operatorCreateManyArgs} args - Arguments to create many Operators.
     *     @example
     *     // Create many Operators
     *     const operator = await prisma.operator.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends operatorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, operatorCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Operator.
     * @param {operatorDeleteArgs} args - Arguments to delete one Operator.
     * @example
     * // Delete one Operator
     * const Operator = await prisma.operator.delete({
     *   where: {
     *     // ... filter to delete one Operator
     *   }
     * })
     *
     **/
    delete<T extends operatorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, operatorDeleteArgs<ExtArgs>>,
    ): Prisma__operatorClient<$Result.GetResult<Prisma.$operatorPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Operator.
     * @param {operatorUpdateArgs} args - Arguments to update one Operator.
     * @example
     * // Update one Operator
     * const operator = await prisma.operator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends operatorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, operatorUpdateArgs<ExtArgs>>,
    ): Prisma__operatorClient<$Result.GetResult<Prisma.$operatorPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Operators.
     * @param {operatorDeleteManyArgs} args - Arguments to filter Operators to delete.
     * @example
     * // Delete a few Operators
     * const { count } = await prisma.operator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends operatorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, operatorDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Operators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operatorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Operators
     * const operator = await prisma.operator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends operatorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, operatorUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Operator.
     * @param {operatorUpsertArgs} args - Arguments to update or create a Operator.
     * @example
     * // Update or create a Operator
     * const operator = await prisma.operator.upsert({
     *   create: {
     *     // ... data to create a Operator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Operator we want to update
     *   }
     * })
     **/
    upsert<T extends operatorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, operatorUpsertArgs<ExtArgs>>,
    ): Prisma__operatorClient<$Result.GetResult<Prisma.$operatorPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Operators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operatorCountArgs} args - Arguments to filter Operators to count.
     * @example
     * // Count the number of Operators
     * const count = await prisma.operator.count({
     *   where: {
     *     // ... the filter for the Operators we want to count
     *   }
     * })
     **/
    count<T extends operatorCountArgs>(
      args?: Subset<T, operatorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OperatorCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Operator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OperatorAggregateArgs>(
      args: Subset<T, OperatorAggregateArgs>,
    ): Prisma.PrismaPromise<GetOperatorAggregateType<T>>;

    /**
     * Group by Operator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operatorGroupByArgs} args - Group by arguments.
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
      T extends operatorGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: operatorGroupByArgs['orderBy'] }
        : { orderBy?: operatorGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, operatorGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetOperatorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the operator model
     */
    readonly fields: operatorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for operator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__operatorClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    toll_booth<T extends operator$toll_boothArgs<ExtArgs> = {}>(
      args?: Subset<T, operator$toll_boothArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$toll_boothPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the operator model
   */
  interface operatorFieldRefs {
    readonly id: FieldRef<'operator', 'String'>;
    readonly description: FieldRef<'operator', 'String'>;
    readonly operational_hours: FieldRef<'operator', 'String'>;
    readonly location: FieldRef<'operator', 'String'>;
    readonly status: FieldRef<'operator', 'String'>;
    readonly name: FieldRef<'operator', 'String'>;
    readonly created_at: FieldRef<'operator', 'DateTime'>;
    readonly updated_at: FieldRef<'operator', 'DateTime'>;
    readonly user_id: FieldRef<'operator', 'String'>;
    readonly tenant_id: FieldRef<'operator', 'String'>;
  }

  // Custom InputTypes

  /**
   * operator findUnique
   */
  export type operatorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operator
     */
    select?: operatorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: operatorInclude<ExtArgs> | null;
    /**
     * Filter, which operator to fetch.
     */
    where: operatorWhereUniqueInput;
  };

  /**
   * operator findUniqueOrThrow
   */
  export type operatorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operator
     */
    select?: operatorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: operatorInclude<ExtArgs> | null;
    /**
     * Filter, which operator to fetch.
     */
    where: operatorWhereUniqueInput;
  };

  /**
   * operator findFirst
   */
  export type operatorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operator
     */
    select?: operatorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: operatorInclude<ExtArgs> | null;
    /**
     * Filter, which operator to fetch.
     */
    where?: operatorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of operators to fetch.
     */
    orderBy?: operatorOrderByWithRelationInput | operatorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for operators.
     */
    cursor?: operatorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` operators from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` operators.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of operators.
     */
    distinct?: OperatorScalarFieldEnum | OperatorScalarFieldEnum[];
  };

  /**
   * operator findFirstOrThrow
   */
  export type operatorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operator
     */
    select?: operatorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: operatorInclude<ExtArgs> | null;
    /**
     * Filter, which operator to fetch.
     */
    where?: operatorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of operators to fetch.
     */
    orderBy?: operatorOrderByWithRelationInput | operatorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for operators.
     */
    cursor?: operatorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` operators from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` operators.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of operators.
     */
    distinct?: OperatorScalarFieldEnum | OperatorScalarFieldEnum[];
  };

  /**
   * operator findMany
   */
  export type operatorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operator
     */
    select?: operatorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: operatorInclude<ExtArgs> | null;
    /**
     * Filter, which operators to fetch.
     */
    where?: operatorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of operators to fetch.
     */
    orderBy?: operatorOrderByWithRelationInput | operatorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing operators.
     */
    cursor?: operatorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` operators from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` operators.
     */
    skip?: number;
    distinct?: OperatorScalarFieldEnum | OperatorScalarFieldEnum[];
  };

  /**
   * operator create
   */
  export type operatorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operator
     */
    select?: operatorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: operatorInclude<ExtArgs> | null;
    /**
     * The data needed to create a operator.
     */
    data: XOR<operatorCreateInput, operatorUncheckedCreateInput>;
  };

  /**
   * operator createMany
   */
  export type operatorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many operators.
     */
    data: operatorCreateManyInput | operatorCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * operator update
   */
  export type operatorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operator
     */
    select?: operatorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: operatorInclude<ExtArgs> | null;
    /**
     * The data needed to update a operator.
     */
    data: XOR<operatorUpdateInput, operatorUncheckedUpdateInput>;
    /**
     * Choose, which operator to update.
     */
    where: operatorWhereUniqueInput;
  };

  /**
   * operator updateMany
   */
  export type operatorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update operators.
     */
    data: XOR<operatorUpdateManyMutationInput, operatorUncheckedUpdateManyInput>;
    /**
     * Filter which operators to update
     */
    where?: operatorWhereInput;
  };

  /**
   * operator upsert
   */
  export type operatorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operator
     */
    select?: operatorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: operatorInclude<ExtArgs> | null;
    /**
     * The filter to search for the operator to update in case it exists.
     */
    where: operatorWhereUniqueInput;
    /**
     * In case the operator found by the `where` argument doesn't exist, create a new operator with this data.
     */
    create: XOR<operatorCreateInput, operatorUncheckedCreateInput>;
    /**
     * In case the operator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<operatorUpdateInput, operatorUncheckedUpdateInput>;
  };

  /**
   * operator delete
   */
  export type operatorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operator
     */
    select?: operatorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: operatorInclude<ExtArgs> | null;
    /**
     * Filter which operator to delete.
     */
    where: operatorWhereUniqueInput;
  };

  /**
   * operator deleteMany
   */
  export type operatorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which operators to delete
     */
    where?: operatorWhereInput;
  };

  /**
   * operator.toll_booth
   */
  export type operator$toll_boothArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the toll_booth
     */
    select?: toll_boothSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toll_boothInclude<ExtArgs> | null;
    where?: toll_boothWhereInput;
    orderBy?: toll_boothOrderByWithRelationInput | toll_boothOrderByWithRelationInput[];
    cursor?: toll_boothWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Toll_boothScalarFieldEnum | Toll_boothScalarFieldEnum[];
  };

  /**
   * operator without action
   */
  export type operatorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operator
     */
    select?: operatorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: operatorInclude<ExtArgs> | null;
  };

  /**
   * Model payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null;
    _avg: PaymentAvgAggregateOutputType | null;
    _sum: PaymentSumAggregateOutputType | null;
    _min: PaymentMinAggregateOutputType | null;
    _max: PaymentMaxAggregateOutputType | null;
  };

  export type PaymentAvgAggregateOutputType = {
    amount: number | null;
  };

  export type PaymentSumAggregateOutputType = {
    amount: number | null;
  };

  export type PaymentMinAggregateOutputType = {
    id: string | null;
    amount: number | null;
    payment_date: Date | null;
    payment_method: string | null;
    user_id: string | null;
    toll_booth_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type PaymentMaxAggregateOutputType = {
    id: string | null;
    amount: number | null;
    payment_date: Date | null;
    payment_method: string | null;
    user_id: string | null;
    toll_booth_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type PaymentCountAggregateOutputType = {
    id: number;
    amount: number;
    payment_date: number;
    payment_method: number;
    user_id: number;
    toll_booth_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type PaymentAvgAggregateInputType = {
    amount?: true;
  };

  export type PaymentSumAggregateInputType = {
    amount?: true;
  };

  export type PaymentMinAggregateInputType = {
    id?: true;
    amount?: true;
    payment_date?: true;
    payment_method?: true;
    user_id?: true;
    toll_booth_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type PaymentMaxAggregateInputType = {
    id?: true;
    amount?: true;
    payment_date?: true;
    payment_method?: true;
    user_id?: true;
    toll_booth_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type PaymentCountAggregateInputType = {
    id?: true;
    amount?: true;
    payment_date?: true;
    payment_method?: true;
    user_id?: true;
    toll_booth_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payment to aggregate.
     */
    where?: paymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: paymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` payments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned payments
     **/
    _count?: true | PaymentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: PaymentAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: PaymentSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PaymentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PaymentMaxAggregateInputType;
  };

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
    [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>;
  };

  export type paymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentWhereInput;
    orderBy?: paymentOrderByWithAggregationInput | paymentOrderByWithAggregationInput[];
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum;
    having?: paymentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaymentCountAggregateInputType | true;
    _avg?: PaymentAvgAggregateInputType;
    _sum?: PaymentSumAggregateInputType;
    _min?: PaymentMinAggregateInputType;
    _max?: PaymentMaxAggregateInputType;
  };

  export type PaymentGroupByOutputType = {
    id: string;
    amount: number;
    payment_date: Date | null;
    payment_method: string | null;
    user_id: string;
    toll_booth_id: string;
    created_at: Date;
    updated_at: Date;
    _count: PaymentCountAggregateOutputType | null;
    _avg: PaymentAvgAggregateOutputType | null;
    _sum: PaymentSumAggregateOutputType | null;
    _min: PaymentMinAggregateOutputType | null;
    _max: PaymentMaxAggregateOutputType | null;
  };

  type GetPaymentGroupByPayload<T extends paymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> & {
        [P in keyof T & keyof PaymentGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
          : GetScalarType<T[P], PaymentGroupByOutputType[P]>;
      }
    >
  >;

  export type paymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      amount?: boolean;
      payment_date?: boolean;
      payment_method?: boolean;
      user_id?: boolean;
      toll_booth_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      journey?: boolean | payment$journeyArgs<ExtArgs>;
      toll_booth?: boolean | toll_boothDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
      _count?: boolean | PaymentCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['payment']
  >;

  export type paymentSelectScalar = {
    id?: boolean;
    amount?: boolean;
    payment_date?: boolean;
    payment_method?: boolean;
    user_id?: boolean;
    toll_booth_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type paymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    journey?: boolean | payment$journeyArgs<ExtArgs>;
    toll_booth?: boolean | toll_boothDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    _count?: boolean | PaymentCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $paymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'payment';
    objects: {
      journey: Prisma.$journeyPayload<ExtArgs>[];
      toll_booth: Prisma.$toll_boothPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        amount: number;
        payment_date: Date | null;
        payment_method: string | null;
        user_id: string;
        toll_booth_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['payment']
    >;
    composites: {};
  };

  type paymentGetPayload<S extends boolean | null | undefined | paymentDefaultArgs> = $Result.GetResult<
    Prisma.$paymentPayload,
    S
  >;

  type paymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    paymentFindManyArgs,
    'select' | 'include'
  > & {
    select?: PaymentCountAggregateInputType | true;
  };

  export interface paymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payment']; meta: { name: 'payment' } };
    /**
     * Find zero or one Payment that matches the filter.
     * @param {paymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends paymentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, paymentFindUniqueArgs<ExtArgs>>,
    ): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Payment that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {paymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends paymentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__paymentClient<
      $Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends paymentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentFindFirstArgs<ExtArgs>>,
    ): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends paymentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     *
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends paymentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Payment.
     * @param {paymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     *
     **/
    create<T extends paymentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, paymentCreateArgs<ExtArgs>>,
    ): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Payments.
     *     @param {paymentCreateManyArgs} args - Arguments to create many Payments.
     *     @example
     *     // Create many Payments
     *     const payment = await prisma.payment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends paymentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Payment.
     * @param {paymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     *
     **/
    delete<T extends paymentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, paymentDeleteArgs<ExtArgs>>,
    ): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Payment.
     * @param {paymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends paymentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, paymentUpdateArgs<ExtArgs>>,
    ): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Payments.
     * @param {paymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends paymentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends paymentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, paymentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Payment.
     * @param {paymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     **/
    upsert<T extends paymentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, paymentUpsertArgs<ExtArgs>>,
    ): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
     **/
    count<T extends paymentCountArgs>(
      args?: Subset<T, paymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(
      args: Subset<T, PaymentAggregateArgs>,
    ): Prisma.PrismaPromise<GetPaymentAggregateType<T>>;

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentGroupByArgs} args - Group by arguments.
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
      T extends paymentGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paymentGroupByArgs['orderBy'] }
        : { orderBy?: paymentGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, paymentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the payment model
     */
    readonly fields: paymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paymentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    journey<T extends payment$journeyArgs<ExtArgs> = {}>(
      args?: Subset<T, payment$journeyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$journeyPayload<ExtArgs>, T, 'findMany'> | Null>;

    toll_booth<T extends toll_boothDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, toll_boothDefaultArgs<ExtArgs>>,
    ): Prisma__toll_boothClient<
      $Result.GetResult<Prisma.$toll_boothPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the payment model
   */
  interface paymentFieldRefs {
    readonly id: FieldRef<'payment', 'String'>;
    readonly amount: FieldRef<'payment', 'Int'>;
    readonly payment_date: FieldRef<'payment', 'DateTime'>;
    readonly payment_method: FieldRef<'payment', 'String'>;
    readonly user_id: FieldRef<'payment', 'String'>;
    readonly toll_booth_id: FieldRef<'payment', 'String'>;
    readonly created_at: FieldRef<'payment', 'DateTime'>;
    readonly updated_at: FieldRef<'payment', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * payment findUnique
   */
  export type paymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    /**
     * Filter, which payment to fetch.
     */
    where: paymentWhereUniqueInput;
  };

  /**
   * payment findUniqueOrThrow
   */
  export type paymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    /**
     * Filter, which payment to fetch.
     */
    where: paymentWhereUniqueInput;
  };

  /**
   * payment findFirst
   */
  export type paymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    /**
     * Filter, which payment to fetch.
     */
    where?: paymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for payments.
     */
    cursor?: paymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` payments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * payment findFirstOrThrow
   */
  export type paymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    /**
     * Filter, which payment to fetch.
     */
    where?: paymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for payments.
     */
    cursor?: paymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` payments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * payment findMany
   */
  export type paymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing payments.
     */
    cursor?: paymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` payments.
     */
    skip?: number;
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * payment create
   */
  export type paymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    /**
     * The data needed to create a payment.
     */
    data: XOR<paymentCreateInput, paymentUncheckedCreateInput>;
  };

  /**
   * payment createMany
   */
  export type paymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payments.
     */
    data: paymentCreateManyInput | paymentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * payment update
   */
  export type paymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    /**
     * The data needed to update a payment.
     */
    data: XOR<paymentUpdateInput, paymentUncheckedUpdateInput>;
    /**
     * Choose, which payment to update.
     */
    where: paymentWhereUniqueInput;
  };

  /**
   * payment updateMany
   */
  export type paymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payments.
     */
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyInput>;
    /**
     * Filter which payments to update
     */
    where?: paymentWhereInput;
  };

  /**
   * payment upsert
   */
  export type paymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    /**
     * The filter to search for the payment to update in case it exists.
     */
    where: paymentWhereUniqueInput;
    /**
     * In case the payment found by the `where` argument doesn't exist, create a new payment with this data.
     */
    create: XOR<paymentCreateInput, paymentUncheckedCreateInput>;
    /**
     * In case the payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paymentUpdateInput, paymentUncheckedUpdateInput>;
  };

  /**
   * payment delete
   */
  export type paymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    /**
     * Filter which payment to delete.
     */
    where: paymentWhereUniqueInput;
  };

  /**
   * payment deleteMany
   */
  export type paymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to delete
     */
    where?: paymentWhereInput;
  };

  /**
   * payment.journey
   */
  export type payment$journeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the journey
     */
    select?: journeySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: journeyInclude<ExtArgs> | null;
    where?: journeyWhereInput;
    orderBy?: journeyOrderByWithRelationInput | journeyOrderByWithRelationInput[];
    cursor?: journeyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: JourneyScalarFieldEnum | JourneyScalarFieldEnum[];
  };

  /**
   * payment without action
   */
  export type paymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
  };

  /**
   * Model toll_booth
   */

  export type AggregateToll_booth = {
    _count: Toll_boothCountAggregateOutputType | null;
    _avg: Toll_boothAvgAggregateOutputType | null;
    _sum: Toll_boothSumAggregateOutputType | null;
    _min: Toll_boothMinAggregateOutputType | null;
    _max: Toll_boothMaxAggregateOutputType | null;
  };

  export type Toll_boothAvgAggregateOutputType = {
    toll_amount: number | null;
  };

  export type Toll_boothSumAggregateOutputType = {
    toll_amount: number | null;
  };

  export type Toll_boothMinAggregateOutputType = {
    id: string | null;
    location: string | null;
    operator_id: string | null;
    status: string | null;
    toll_amount: number | null;
    operational_hours: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Toll_boothMaxAggregateOutputType = {
    id: string | null;
    location: string | null;
    operator_id: string | null;
    status: string | null;
    toll_amount: number | null;
    operational_hours: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Toll_boothCountAggregateOutputType = {
    id: number;
    location: number;
    operator_id: number;
    status: number;
    toll_amount: number;
    operational_hours: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Toll_boothAvgAggregateInputType = {
    toll_amount?: true;
  };

  export type Toll_boothSumAggregateInputType = {
    toll_amount?: true;
  };

  export type Toll_boothMinAggregateInputType = {
    id?: true;
    location?: true;
    operator_id?: true;
    status?: true;
    toll_amount?: true;
    operational_hours?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Toll_boothMaxAggregateInputType = {
    id?: true;
    location?: true;
    operator_id?: true;
    status?: true;
    toll_amount?: true;
    operational_hours?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Toll_boothCountAggregateInputType = {
    id?: true;
    location?: true;
    operator_id?: true;
    status?: true;
    toll_amount?: true;
    operational_hours?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Toll_boothAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which toll_booth to aggregate.
     */
    where?: toll_boothWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of toll_booths to fetch.
     */
    orderBy?: toll_boothOrderByWithRelationInput | toll_boothOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: toll_boothWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` toll_booths from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` toll_booths.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned toll_booths
     **/
    _count?: true | Toll_boothCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Toll_boothAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Toll_boothSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Toll_boothMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Toll_boothMaxAggregateInputType;
  };

  export type GetToll_boothAggregateType<T extends Toll_boothAggregateArgs> = {
    [P in keyof T & keyof AggregateToll_booth]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToll_booth[P]>
      : GetScalarType<T[P], AggregateToll_booth[P]>;
  };

  export type toll_boothGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: toll_boothWhereInput;
    orderBy?: toll_boothOrderByWithAggregationInput | toll_boothOrderByWithAggregationInput[];
    by: Toll_boothScalarFieldEnum[] | Toll_boothScalarFieldEnum;
    having?: toll_boothScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Toll_boothCountAggregateInputType | true;
    _avg?: Toll_boothAvgAggregateInputType;
    _sum?: Toll_boothSumAggregateInputType;
    _min?: Toll_boothMinAggregateInputType;
    _max?: Toll_boothMaxAggregateInputType;
  };

  export type Toll_boothGroupByOutputType = {
    id: string;
    location: string;
    operator_id: string;
    status: string | null;
    toll_amount: number | null;
    operational_hours: string | null;
    created_at: Date;
    updated_at: Date;
    _count: Toll_boothCountAggregateOutputType | null;
    _avg: Toll_boothAvgAggregateOutputType | null;
    _sum: Toll_boothSumAggregateOutputType | null;
    _min: Toll_boothMinAggregateOutputType | null;
    _max: Toll_boothMaxAggregateOutputType | null;
  };

  type GetToll_boothGroupByPayload<T extends toll_boothGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Toll_boothGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Toll_boothGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Toll_boothGroupByOutputType[P]>
          : GetScalarType<T[P], Toll_boothGroupByOutputType[P]>;
      }
    >
  >;

  export type toll_boothSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        location?: boolean;
        operator_id?: boolean;
        status?: boolean;
        toll_amount?: boolean;
        operational_hours?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        journey?: boolean | toll_booth$journeyArgs<ExtArgs>;
        payment?: boolean | toll_booth$paymentArgs<ExtArgs>;
        operator?: boolean | operatorDefaultArgs<ExtArgs>;
        _count?: boolean | Toll_boothCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['toll_booth']
    >;

  export type toll_boothSelectScalar = {
    id?: boolean;
    location?: boolean;
    operator_id?: boolean;
    status?: boolean;
    toll_amount?: boolean;
    operational_hours?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type toll_boothInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    journey?: boolean | toll_booth$journeyArgs<ExtArgs>;
    payment?: boolean | toll_booth$paymentArgs<ExtArgs>;
    operator?: boolean | operatorDefaultArgs<ExtArgs>;
    _count?: boolean | Toll_boothCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $toll_boothPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'toll_booth';
    objects: {
      journey: Prisma.$journeyPayload<ExtArgs>[];
      payment: Prisma.$paymentPayload<ExtArgs>[];
      operator: Prisma.$operatorPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        location: string;
        operator_id: string;
        status: string | null;
        toll_amount: number | null;
        operational_hours: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['toll_booth']
    >;
    composites: {};
  };

  type toll_boothGetPayload<S extends boolean | null | undefined | toll_boothDefaultArgs> = $Result.GetResult<
    Prisma.$toll_boothPayload,
    S
  >;

  type toll_boothCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    toll_boothFindManyArgs,
    'select' | 'include'
  > & {
    select?: Toll_boothCountAggregateInputType | true;
  };

  export interface toll_boothDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['toll_booth']; meta: { name: 'toll_booth' } };
    /**
     * Find zero or one Toll_booth that matches the filter.
     * @param {toll_boothFindUniqueArgs} args - Arguments to find a Toll_booth
     * @example
     * // Get one Toll_booth
     * const toll_booth = await prisma.toll_booth.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends toll_boothFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, toll_boothFindUniqueArgs<ExtArgs>>,
    ): Prisma__toll_boothClient<
      $Result.GetResult<Prisma.$toll_boothPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Toll_booth that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {toll_boothFindUniqueOrThrowArgs} args - Arguments to find a Toll_booth
     * @example
     * // Get one Toll_booth
     * const toll_booth = await prisma.toll_booth.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends toll_boothFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, toll_boothFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__toll_boothClient<
      $Result.GetResult<Prisma.$toll_boothPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Toll_booth that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toll_boothFindFirstArgs} args - Arguments to find a Toll_booth
     * @example
     * // Get one Toll_booth
     * const toll_booth = await prisma.toll_booth.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends toll_boothFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, toll_boothFindFirstArgs<ExtArgs>>,
    ): Prisma__toll_boothClient<
      $Result.GetResult<Prisma.$toll_boothPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Toll_booth that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toll_boothFindFirstOrThrowArgs} args - Arguments to find a Toll_booth
     * @example
     * // Get one Toll_booth
     * const toll_booth = await prisma.toll_booth.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends toll_boothFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, toll_boothFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__toll_boothClient<
      $Result.GetResult<Prisma.$toll_boothPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Toll_booths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toll_boothFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Toll_booths
     * const toll_booths = await prisma.toll_booth.findMany()
     *
     * // Get first 10 Toll_booths
     * const toll_booths = await prisma.toll_booth.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const toll_boothWithIdOnly = await prisma.toll_booth.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends toll_boothFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, toll_boothFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$toll_boothPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Toll_booth.
     * @param {toll_boothCreateArgs} args - Arguments to create a Toll_booth.
     * @example
     * // Create one Toll_booth
     * const Toll_booth = await prisma.toll_booth.create({
     *   data: {
     *     // ... data to create a Toll_booth
     *   }
     * })
     *
     **/
    create<T extends toll_boothCreateArgs<ExtArgs>>(
      args: SelectSubset<T, toll_boothCreateArgs<ExtArgs>>,
    ): Prisma__toll_boothClient<$Result.GetResult<Prisma.$toll_boothPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Toll_booths.
     *     @param {toll_boothCreateManyArgs} args - Arguments to create many Toll_booths.
     *     @example
     *     // Create many Toll_booths
     *     const toll_booth = await prisma.toll_booth.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends toll_boothCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, toll_boothCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Toll_booth.
     * @param {toll_boothDeleteArgs} args - Arguments to delete one Toll_booth.
     * @example
     * // Delete one Toll_booth
     * const Toll_booth = await prisma.toll_booth.delete({
     *   where: {
     *     // ... filter to delete one Toll_booth
     *   }
     * })
     *
     **/
    delete<T extends toll_boothDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, toll_boothDeleteArgs<ExtArgs>>,
    ): Prisma__toll_boothClient<$Result.GetResult<Prisma.$toll_boothPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Toll_booth.
     * @param {toll_boothUpdateArgs} args - Arguments to update one Toll_booth.
     * @example
     * // Update one Toll_booth
     * const toll_booth = await prisma.toll_booth.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends toll_boothUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, toll_boothUpdateArgs<ExtArgs>>,
    ): Prisma__toll_boothClient<$Result.GetResult<Prisma.$toll_boothPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Toll_booths.
     * @param {toll_boothDeleteManyArgs} args - Arguments to filter Toll_booths to delete.
     * @example
     * // Delete a few Toll_booths
     * const { count } = await prisma.toll_booth.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends toll_boothDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, toll_boothDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Toll_booths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toll_boothUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Toll_booths
     * const toll_booth = await prisma.toll_booth.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends toll_boothUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, toll_boothUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Toll_booth.
     * @param {toll_boothUpsertArgs} args - Arguments to update or create a Toll_booth.
     * @example
     * // Update or create a Toll_booth
     * const toll_booth = await prisma.toll_booth.upsert({
     *   create: {
     *     // ... data to create a Toll_booth
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Toll_booth we want to update
     *   }
     * })
     **/
    upsert<T extends toll_boothUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, toll_boothUpsertArgs<ExtArgs>>,
    ): Prisma__toll_boothClient<$Result.GetResult<Prisma.$toll_boothPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Toll_booths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toll_boothCountArgs} args - Arguments to filter Toll_booths to count.
     * @example
     * // Count the number of Toll_booths
     * const count = await prisma.toll_booth.count({
     *   where: {
     *     // ... the filter for the Toll_booths we want to count
     *   }
     * })
     **/
    count<T extends toll_boothCountArgs>(
      args?: Subset<T, toll_boothCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Toll_boothCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Toll_booth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Toll_boothAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Toll_boothAggregateArgs>(
      args: Subset<T, Toll_boothAggregateArgs>,
    ): Prisma.PrismaPromise<GetToll_boothAggregateType<T>>;

    /**
     * Group by Toll_booth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toll_boothGroupByArgs} args - Group by arguments.
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
      T extends toll_boothGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: toll_boothGroupByArgs['orderBy'] }
        : { orderBy?: toll_boothGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, toll_boothGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetToll_boothGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the toll_booth model
     */
    readonly fields: toll_boothFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for toll_booth.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__toll_boothClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    journey<T extends toll_booth$journeyArgs<ExtArgs> = {}>(
      args?: Subset<T, toll_booth$journeyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$journeyPayload<ExtArgs>, T, 'findMany'> | Null>;

    payment<T extends toll_booth$paymentArgs<ExtArgs> = {}>(
      args?: Subset<T, toll_booth$paymentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'findMany'> | Null>;

    operator<T extends operatorDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, operatorDefaultArgs<ExtArgs>>,
    ): Prisma__operatorClient<
      $Result.GetResult<Prisma.$operatorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the toll_booth model
   */
  interface toll_boothFieldRefs {
    readonly id: FieldRef<'toll_booth', 'String'>;
    readonly location: FieldRef<'toll_booth', 'String'>;
    readonly operator_id: FieldRef<'toll_booth', 'String'>;
    readonly status: FieldRef<'toll_booth', 'String'>;
    readonly toll_amount: FieldRef<'toll_booth', 'Int'>;
    readonly operational_hours: FieldRef<'toll_booth', 'String'>;
    readonly created_at: FieldRef<'toll_booth', 'DateTime'>;
    readonly updated_at: FieldRef<'toll_booth', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * toll_booth findUnique
   */
  export type toll_boothFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the toll_booth
     */
    select?: toll_boothSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toll_boothInclude<ExtArgs> | null;
    /**
     * Filter, which toll_booth to fetch.
     */
    where: toll_boothWhereUniqueInput;
  };

  /**
   * toll_booth findUniqueOrThrow
   */
  export type toll_boothFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the toll_booth
     */
    select?: toll_boothSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toll_boothInclude<ExtArgs> | null;
    /**
     * Filter, which toll_booth to fetch.
     */
    where: toll_boothWhereUniqueInput;
  };

  /**
   * toll_booth findFirst
   */
  export type toll_boothFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the toll_booth
     */
    select?: toll_boothSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toll_boothInclude<ExtArgs> | null;
    /**
     * Filter, which toll_booth to fetch.
     */
    where?: toll_boothWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of toll_booths to fetch.
     */
    orderBy?: toll_boothOrderByWithRelationInput | toll_boothOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for toll_booths.
     */
    cursor?: toll_boothWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` toll_booths from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` toll_booths.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of toll_booths.
     */
    distinct?: Toll_boothScalarFieldEnum | Toll_boothScalarFieldEnum[];
  };

  /**
   * toll_booth findFirstOrThrow
   */
  export type toll_boothFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the toll_booth
     */
    select?: toll_boothSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toll_boothInclude<ExtArgs> | null;
    /**
     * Filter, which toll_booth to fetch.
     */
    where?: toll_boothWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of toll_booths to fetch.
     */
    orderBy?: toll_boothOrderByWithRelationInput | toll_boothOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for toll_booths.
     */
    cursor?: toll_boothWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` toll_booths from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` toll_booths.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of toll_booths.
     */
    distinct?: Toll_boothScalarFieldEnum | Toll_boothScalarFieldEnum[];
  };

  /**
   * toll_booth findMany
   */
  export type toll_boothFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the toll_booth
     */
    select?: toll_boothSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toll_boothInclude<ExtArgs> | null;
    /**
     * Filter, which toll_booths to fetch.
     */
    where?: toll_boothWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of toll_booths to fetch.
     */
    orderBy?: toll_boothOrderByWithRelationInput | toll_boothOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing toll_booths.
     */
    cursor?: toll_boothWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` toll_booths from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` toll_booths.
     */
    skip?: number;
    distinct?: Toll_boothScalarFieldEnum | Toll_boothScalarFieldEnum[];
  };

  /**
   * toll_booth create
   */
  export type toll_boothCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the toll_booth
     */
    select?: toll_boothSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toll_boothInclude<ExtArgs> | null;
    /**
     * The data needed to create a toll_booth.
     */
    data: XOR<toll_boothCreateInput, toll_boothUncheckedCreateInput>;
  };

  /**
   * toll_booth createMany
   */
  export type toll_boothCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many toll_booths.
     */
    data: toll_boothCreateManyInput | toll_boothCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * toll_booth update
   */
  export type toll_boothUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the toll_booth
     */
    select?: toll_boothSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toll_boothInclude<ExtArgs> | null;
    /**
     * The data needed to update a toll_booth.
     */
    data: XOR<toll_boothUpdateInput, toll_boothUncheckedUpdateInput>;
    /**
     * Choose, which toll_booth to update.
     */
    where: toll_boothWhereUniqueInput;
  };

  /**
   * toll_booth updateMany
   */
  export type toll_boothUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update toll_booths.
     */
    data: XOR<toll_boothUpdateManyMutationInput, toll_boothUncheckedUpdateManyInput>;
    /**
     * Filter which toll_booths to update
     */
    where?: toll_boothWhereInput;
  };

  /**
   * toll_booth upsert
   */
  export type toll_boothUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the toll_booth
     */
    select?: toll_boothSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toll_boothInclude<ExtArgs> | null;
    /**
     * The filter to search for the toll_booth to update in case it exists.
     */
    where: toll_boothWhereUniqueInput;
    /**
     * In case the toll_booth found by the `where` argument doesn't exist, create a new toll_booth with this data.
     */
    create: XOR<toll_boothCreateInput, toll_boothUncheckedCreateInput>;
    /**
     * In case the toll_booth was found with the provided `where` argument, update it with this data.
     */
    update: XOR<toll_boothUpdateInput, toll_boothUncheckedUpdateInput>;
  };

  /**
   * toll_booth delete
   */
  export type toll_boothDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the toll_booth
     */
    select?: toll_boothSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toll_boothInclude<ExtArgs> | null;
    /**
     * Filter which toll_booth to delete.
     */
    where: toll_boothWhereUniqueInput;
  };

  /**
   * toll_booth deleteMany
   */
  export type toll_boothDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which toll_booths to delete
     */
    where?: toll_boothWhereInput;
  };

  /**
   * toll_booth.journey
   */
  export type toll_booth$journeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the journey
     */
    select?: journeySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: journeyInclude<ExtArgs> | null;
    where?: journeyWhereInput;
    orderBy?: journeyOrderByWithRelationInput | journeyOrderByWithRelationInput[];
    cursor?: journeyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: JourneyScalarFieldEnum | JourneyScalarFieldEnum[];
  };

  /**
   * toll_booth.payment
   */
  export type toll_booth$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    where?: paymentWhereInput;
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[];
    cursor?: paymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * toll_booth without action
   */
  export type toll_boothDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the toll_booth
     */
    select?: toll_boothSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toll_boothInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      operator?: boolean | user$operatorArgs<ExtArgs>;
      payment?: boolean | user$paymentArgs<ExtArgs>;
      vehicle?: boolean | user$vehicleArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operator?: boolean | user$operatorArgs<ExtArgs>;
    payment?: boolean | user$paymentArgs<ExtArgs>;
    vehicle?: boolean | user$vehicleArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      operator: Prisma.$operatorPayload<ExtArgs>[];
      payment: Prisma.$paymentPayload<ExtArgs>[];
      vehicle: Prisma.$vehiclePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    operator<T extends user$operatorArgs<ExtArgs> = {}>(
      args?: Subset<T, user$operatorArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$operatorPayload<ExtArgs>, T, 'findMany'> | Null>;

    payment<T extends user$paymentArgs<ExtArgs> = {}>(
      args?: Subset<T, user$paymentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'findMany'> | Null>;

    vehicle<T extends user$vehicleArgs<ExtArgs> = {}>(
      args?: Subset<T, user$vehicleArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.operator
   */
  export type user$operatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operator
     */
    select?: operatorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: operatorInclude<ExtArgs> | null;
    where?: operatorWhereInput;
    orderBy?: operatorOrderByWithRelationInput | operatorOrderByWithRelationInput[];
    cursor?: operatorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OperatorScalarFieldEnum | OperatorScalarFieldEnum[];
  };

  /**
   * user.payment
   */
  export type user$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    where?: paymentWhereInput;
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[];
    cursor?: paymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * user.vehicle
   */
  export type user$vehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicleInclude<ExtArgs> | null;
    where?: vehicleWhereInput;
    orderBy?: vehicleOrderByWithRelationInput | vehicleOrderByWithRelationInput[];
    cursor?: vehicleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Model vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null;
    _min: VehicleMinAggregateOutputType | null;
    _max: VehicleMaxAggregateOutputType | null;
  };

  export type VehicleMinAggregateOutputType = {
    id: string | null;
    license_plate: string | null;
    make: string | null;
    model: string | null;
    color: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type VehicleMaxAggregateOutputType = {
    id: string | null;
    license_plate: string | null;
    make: string | null;
    model: string | null;
    color: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type VehicleCountAggregateOutputType = {
    id: number;
    license_plate: number;
    make: number;
    model: number;
    color: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type VehicleMinAggregateInputType = {
    id?: true;
    license_plate?: true;
    make?: true;
    model?: true;
    color?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type VehicleMaxAggregateInputType = {
    id?: true;
    license_plate?: true;
    make?: true;
    model?: true;
    color?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type VehicleCountAggregateInputType = {
    id?: true;
    license_plate?: true;
    make?: true;
    model?: true;
    color?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vehicle to aggregate.
     */
    where?: vehicleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of vehicles to fetch.
     */
    orderBy?: vehicleOrderByWithRelationInput | vehicleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: vehicleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` vehicles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` vehicles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned vehicles
     **/
    _count?: true | VehicleCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: VehicleMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: VehicleMaxAggregateInputType;
  };

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
    [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>;
  };

  export type vehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vehicleWhereInput;
    orderBy?: vehicleOrderByWithAggregationInput | vehicleOrderByWithAggregationInput[];
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum;
    having?: vehicleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VehicleCountAggregateInputType | true;
    _min?: VehicleMinAggregateInputType;
    _max?: VehicleMaxAggregateInputType;
  };

  export type VehicleGroupByOutputType = {
    id: string;
    license_plate: string;
    make: string | null;
    model: string | null;
    color: string | null;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: VehicleCountAggregateOutputType | null;
    _min: VehicleMinAggregateOutputType | null;
    _max: VehicleMaxAggregateOutputType | null;
  };

  type GetVehicleGroupByPayload<T extends vehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> & {
        [P in keyof T & keyof VehicleGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
          : GetScalarType<T[P], VehicleGroupByOutputType[P]>;
      }
    >
  >;

  export type vehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      license_plate?: boolean;
      make?: boolean;
      model?: boolean;
      color?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      journey?: boolean | vehicle$journeyArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
      _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['vehicle']
  >;

  export type vehicleSelectScalar = {
    id?: boolean;
    license_plate?: boolean;
    make?: boolean;
    model?: boolean;
    color?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type vehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    journey?: boolean | vehicle$journeyArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $vehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'vehicle';
    objects: {
      journey: Prisma.$journeyPayload<ExtArgs>[];
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        license_plate: string;
        make: string | null;
        model: string | null;
        color: string | null;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['vehicle']
    >;
    composites: {};
  };

  type vehicleGetPayload<S extends boolean | null | undefined | vehicleDefaultArgs> = $Result.GetResult<
    Prisma.$vehiclePayload,
    S
  >;

  type vehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    vehicleFindManyArgs,
    'select' | 'include'
  > & {
    select?: VehicleCountAggregateInputType | true;
  };

  export interface vehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vehicle']; meta: { name: 'vehicle' } };
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {vehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends vehicleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, vehicleFindUniqueArgs<ExtArgs>>,
    ): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Vehicle that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {vehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends vehicleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, vehicleFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__vehicleClient<
      $Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends vehicleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, vehicleFindFirstArgs<ExtArgs>>,
    ): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends vehicleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, vehicleFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     *
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends vehicleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, vehicleFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Vehicle.
     * @param {vehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     *
     **/
    create<T extends vehicleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, vehicleCreateArgs<ExtArgs>>,
    ): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Vehicles.
     *     @param {vehicleCreateManyArgs} args - Arguments to create many Vehicles.
     *     @example
     *     // Create many Vehicles
     *     const vehicle = await prisma.vehicle.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends vehicleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, vehicleCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Vehicle.
     * @param {vehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     *
     **/
    delete<T extends vehicleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, vehicleDeleteArgs<ExtArgs>>,
    ): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Vehicle.
     * @param {vehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends vehicleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, vehicleUpdateArgs<ExtArgs>>,
    ): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Vehicles.
     * @param {vehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends vehicleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, vehicleDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends vehicleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, vehicleUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Vehicle.
     * @param {vehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
     **/
    upsert<T extends vehicleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, vehicleUpsertArgs<ExtArgs>>,
    ): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
     **/
    count<T extends vehicleCountArgs>(
      args?: Subset<T, vehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VehicleAggregateArgs>(
      args: Subset<T, VehicleAggregateArgs>,
    ): Prisma.PrismaPromise<GetVehicleAggregateType<T>>;

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicleGroupByArgs} args - Group by arguments.
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
      T extends vehicleGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vehicleGroupByArgs['orderBy'] }
        : { orderBy?: vehicleGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, vehicleGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the vehicle model
     */
    readonly fields: vehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vehicleClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    journey<T extends vehicle$journeyArgs<ExtArgs> = {}>(
      args?: Subset<T, vehicle$journeyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$journeyPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the vehicle model
   */
  interface vehicleFieldRefs {
    readonly id: FieldRef<'vehicle', 'String'>;
    readonly license_plate: FieldRef<'vehicle', 'String'>;
    readonly make: FieldRef<'vehicle', 'String'>;
    readonly model: FieldRef<'vehicle', 'String'>;
    readonly color: FieldRef<'vehicle', 'String'>;
    readonly user_id: FieldRef<'vehicle', 'String'>;
    readonly created_at: FieldRef<'vehicle', 'DateTime'>;
    readonly updated_at: FieldRef<'vehicle', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * vehicle findUnique
   */
  export type vehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicleInclude<ExtArgs> | null;
    /**
     * Filter, which vehicle to fetch.
     */
    where: vehicleWhereUniqueInput;
  };

  /**
   * vehicle findUniqueOrThrow
   */
  export type vehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicleInclude<ExtArgs> | null;
    /**
     * Filter, which vehicle to fetch.
     */
    where: vehicleWhereUniqueInput;
  };

  /**
   * vehicle findFirst
   */
  export type vehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicleInclude<ExtArgs> | null;
    /**
     * Filter, which vehicle to fetch.
     */
    where?: vehicleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of vehicles to fetch.
     */
    orderBy?: vehicleOrderByWithRelationInput | vehicleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for vehicles.
     */
    cursor?: vehicleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` vehicles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` vehicles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[];
  };

  /**
   * vehicle findFirstOrThrow
   */
  export type vehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicleInclude<ExtArgs> | null;
    /**
     * Filter, which vehicle to fetch.
     */
    where?: vehicleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of vehicles to fetch.
     */
    orderBy?: vehicleOrderByWithRelationInput | vehicleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for vehicles.
     */
    cursor?: vehicleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` vehicles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` vehicles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[];
  };

  /**
   * vehicle findMany
   */
  export type vehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicleInclude<ExtArgs> | null;
    /**
     * Filter, which vehicles to fetch.
     */
    where?: vehicleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of vehicles to fetch.
     */
    orderBy?: vehicleOrderByWithRelationInput | vehicleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing vehicles.
     */
    cursor?: vehicleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` vehicles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` vehicles.
     */
    skip?: number;
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[];
  };

  /**
   * vehicle create
   */
  export type vehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicleInclude<ExtArgs> | null;
    /**
     * The data needed to create a vehicle.
     */
    data: XOR<vehicleCreateInput, vehicleUncheckedCreateInput>;
  };

  /**
   * vehicle createMany
   */
  export type vehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vehicles.
     */
    data: vehicleCreateManyInput | vehicleCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * vehicle update
   */
  export type vehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicleInclude<ExtArgs> | null;
    /**
     * The data needed to update a vehicle.
     */
    data: XOR<vehicleUpdateInput, vehicleUncheckedUpdateInput>;
    /**
     * Choose, which vehicle to update.
     */
    where: vehicleWhereUniqueInput;
  };

  /**
   * vehicle updateMany
   */
  export type vehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vehicles.
     */
    data: XOR<vehicleUpdateManyMutationInput, vehicleUncheckedUpdateManyInput>;
    /**
     * Filter which vehicles to update
     */
    where?: vehicleWhereInput;
  };

  /**
   * vehicle upsert
   */
  export type vehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicleInclude<ExtArgs> | null;
    /**
     * The filter to search for the vehicle to update in case it exists.
     */
    where: vehicleWhereUniqueInput;
    /**
     * In case the vehicle found by the `where` argument doesn't exist, create a new vehicle with this data.
     */
    create: XOR<vehicleCreateInput, vehicleUncheckedCreateInput>;
    /**
     * In case the vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vehicleUpdateInput, vehicleUncheckedUpdateInput>;
  };

  /**
   * vehicle delete
   */
  export type vehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicleInclude<ExtArgs> | null;
    /**
     * Filter which vehicle to delete.
     */
    where: vehicleWhereUniqueInput;
  };

  /**
   * vehicle deleteMany
   */
  export type vehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vehicles to delete
     */
    where?: vehicleWhereInput;
  };

  /**
   * vehicle.journey
   */
  export type vehicle$journeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the journey
     */
    select?: journeySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: journeyInclude<ExtArgs> | null;
    where?: journeyWhereInput;
    orderBy?: journeyOrderByWithRelationInput | journeyOrderByWithRelationInput[];
    cursor?: journeyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: JourneyScalarFieldEnum | JourneyScalarFieldEnum[];
  };

  /**
   * vehicle without action
   */
  export type vehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicleInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const JourneyScalarFieldEnum: {
    id: 'id';
    start_time: 'start_time';
    end_time: 'end_time';
    vehicle_id: 'vehicle_id';
    toll_booth_id: 'toll_booth_id';
    payment_id: 'payment_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type JourneyScalarFieldEnum = (typeof JourneyScalarFieldEnum)[keyof typeof JourneyScalarFieldEnum];

  export const OperatorScalarFieldEnum: {
    id: 'id';
    description: 'description';
    operational_hours: 'operational_hours';
    location: 'location';
    status: 'status';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type OperatorScalarFieldEnum = (typeof OperatorScalarFieldEnum)[keyof typeof OperatorScalarFieldEnum];

  export const PaymentScalarFieldEnum: {
    id: 'id';
    amount: 'amount';
    payment_date: 'payment_date';
    payment_method: 'payment_method';
    user_id: 'user_id';
    toll_booth_id: 'toll_booth_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum];

  export const Toll_boothScalarFieldEnum: {
    id: 'id';
    location: 'location';
    operator_id: 'operator_id';
    status: 'status';
    toll_amount: 'toll_amount';
    operational_hours: 'operational_hours';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Toll_boothScalarFieldEnum = (typeof Toll_boothScalarFieldEnum)[keyof typeof Toll_boothScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const VehicleScalarFieldEnum: {
    id: 'id';
    license_plate: 'license_plate';
    make: 'make';
    model: 'model';
    color: 'color';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type journeyWhereInput = {
    AND?: journeyWhereInput | journeyWhereInput[];
    OR?: journeyWhereInput[];
    NOT?: journeyWhereInput | journeyWhereInput[];
    id?: UuidFilter<'journey'> | string;
    start_time?: DateTimeNullableFilter<'journey'> | Date | string | null;
    end_time?: DateTimeNullableFilter<'journey'> | Date | string | null;
    vehicle_id?: UuidFilter<'journey'> | string;
    toll_booth_id?: UuidFilter<'journey'> | string;
    payment_id?: UuidFilter<'journey'> | string;
    created_at?: DateTimeFilter<'journey'> | Date | string;
    updated_at?: DateTimeFilter<'journey'> | Date | string;
    payment?: XOR<PaymentRelationFilter, paymentWhereInput>;
    toll_booth?: XOR<Toll_boothRelationFilter, toll_boothWhereInput>;
    vehicle?: XOR<VehicleRelationFilter, vehicleWhereInput>;
  };

  export type journeyOrderByWithRelationInput = {
    id?: SortOrder;
    start_time?: SortOrderInput | SortOrder;
    end_time?: SortOrderInput | SortOrder;
    vehicle_id?: SortOrder;
    toll_booth_id?: SortOrder;
    payment_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    payment?: paymentOrderByWithRelationInput;
    toll_booth?: toll_boothOrderByWithRelationInput;
    vehicle?: vehicleOrderByWithRelationInput;
  };

  export type journeyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: journeyWhereInput | journeyWhereInput[];
      OR?: journeyWhereInput[];
      NOT?: journeyWhereInput | journeyWhereInput[];
      start_time?: DateTimeNullableFilter<'journey'> | Date | string | null;
      end_time?: DateTimeNullableFilter<'journey'> | Date | string | null;
      vehicle_id?: UuidFilter<'journey'> | string;
      toll_booth_id?: UuidFilter<'journey'> | string;
      payment_id?: UuidFilter<'journey'> | string;
      created_at?: DateTimeFilter<'journey'> | Date | string;
      updated_at?: DateTimeFilter<'journey'> | Date | string;
      payment?: XOR<PaymentRelationFilter, paymentWhereInput>;
      toll_booth?: XOR<Toll_boothRelationFilter, toll_boothWhereInput>;
      vehicle?: XOR<VehicleRelationFilter, vehicleWhereInput>;
    },
    'id'
  >;

  export type journeyOrderByWithAggregationInput = {
    id?: SortOrder;
    start_time?: SortOrderInput | SortOrder;
    end_time?: SortOrderInput | SortOrder;
    vehicle_id?: SortOrder;
    toll_booth_id?: SortOrder;
    payment_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: journeyCountOrderByAggregateInput;
    _max?: journeyMaxOrderByAggregateInput;
    _min?: journeyMinOrderByAggregateInput;
  };

  export type journeyScalarWhereWithAggregatesInput = {
    AND?: journeyScalarWhereWithAggregatesInput | journeyScalarWhereWithAggregatesInput[];
    OR?: journeyScalarWhereWithAggregatesInput[];
    NOT?: journeyScalarWhereWithAggregatesInput | journeyScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'journey'> | string;
    start_time?: DateTimeNullableWithAggregatesFilter<'journey'> | Date | string | null;
    end_time?: DateTimeNullableWithAggregatesFilter<'journey'> | Date | string | null;
    vehicle_id?: UuidWithAggregatesFilter<'journey'> | string;
    toll_booth_id?: UuidWithAggregatesFilter<'journey'> | string;
    payment_id?: UuidWithAggregatesFilter<'journey'> | string;
    created_at?: DateTimeWithAggregatesFilter<'journey'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'journey'> | Date | string;
  };

  export type operatorWhereInput = {
    AND?: operatorWhereInput | operatorWhereInput[];
    OR?: operatorWhereInput[];
    NOT?: operatorWhereInput | operatorWhereInput[];
    id?: UuidFilter<'operator'> | string;
    description?: StringNullableFilter<'operator'> | string | null;
    operational_hours?: StringNullableFilter<'operator'> | string | null;
    location?: StringNullableFilter<'operator'> | string | null;
    status?: StringNullableFilter<'operator'> | string | null;
    name?: StringFilter<'operator'> | string;
    created_at?: DateTimeFilter<'operator'> | Date | string;
    updated_at?: DateTimeFilter<'operator'> | Date | string;
    user_id?: UuidFilter<'operator'> | string;
    tenant_id?: StringFilter<'operator'> | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    toll_booth?: Toll_boothListRelationFilter;
  };

  export type operatorOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    operational_hours?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    status?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    user?: userOrderByWithRelationInput;
    toll_booth?: toll_boothOrderByRelationAggregateInput;
  };

  export type operatorWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: operatorWhereInput | operatorWhereInput[];
      OR?: operatorWhereInput[];
      NOT?: operatorWhereInput | operatorWhereInput[];
      description?: StringNullableFilter<'operator'> | string | null;
      operational_hours?: StringNullableFilter<'operator'> | string | null;
      location?: StringNullableFilter<'operator'> | string | null;
      status?: StringNullableFilter<'operator'> | string | null;
      name?: StringFilter<'operator'> | string;
      created_at?: DateTimeFilter<'operator'> | Date | string;
      updated_at?: DateTimeFilter<'operator'> | Date | string;
      user_id?: UuidFilter<'operator'> | string;
      tenant_id?: StringFilter<'operator'> | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      toll_booth?: Toll_boothListRelationFilter;
    },
    'id'
  >;

  export type operatorOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    operational_hours?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    status?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: operatorCountOrderByAggregateInput;
    _max?: operatorMaxOrderByAggregateInput;
    _min?: operatorMinOrderByAggregateInput;
  };

  export type operatorScalarWhereWithAggregatesInput = {
    AND?: operatorScalarWhereWithAggregatesInput | operatorScalarWhereWithAggregatesInput[];
    OR?: operatorScalarWhereWithAggregatesInput[];
    NOT?: operatorScalarWhereWithAggregatesInput | operatorScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'operator'> | string;
    description?: StringNullableWithAggregatesFilter<'operator'> | string | null;
    operational_hours?: StringNullableWithAggregatesFilter<'operator'> | string | null;
    location?: StringNullableWithAggregatesFilter<'operator'> | string | null;
    status?: StringNullableWithAggregatesFilter<'operator'> | string | null;
    name?: StringWithAggregatesFilter<'operator'> | string;
    created_at?: DateTimeWithAggregatesFilter<'operator'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'operator'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'operator'> | string;
    tenant_id?: StringWithAggregatesFilter<'operator'> | string;
  };

  export type paymentWhereInput = {
    AND?: paymentWhereInput | paymentWhereInput[];
    OR?: paymentWhereInput[];
    NOT?: paymentWhereInput | paymentWhereInput[];
    id?: UuidFilter<'payment'> | string;
    amount?: IntFilter<'payment'> | number;
    payment_date?: DateTimeNullableFilter<'payment'> | Date | string | null;
    payment_method?: StringNullableFilter<'payment'> | string | null;
    user_id?: UuidFilter<'payment'> | string;
    toll_booth_id?: UuidFilter<'payment'> | string;
    created_at?: DateTimeFilter<'payment'> | Date | string;
    updated_at?: DateTimeFilter<'payment'> | Date | string;
    journey?: JourneyListRelationFilter;
    toll_booth?: XOR<Toll_boothRelationFilter, toll_boothWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type paymentOrderByWithRelationInput = {
    id?: SortOrder;
    amount?: SortOrder;
    payment_date?: SortOrderInput | SortOrder;
    payment_method?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    toll_booth_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    journey?: journeyOrderByRelationAggregateInput;
    toll_booth?: toll_boothOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type paymentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: paymentWhereInput | paymentWhereInput[];
      OR?: paymentWhereInput[];
      NOT?: paymentWhereInput | paymentWhereInput[];
      amount?: IntFilter<'payment'> | number;
      payment_date?: DateTimeNullableFilter<'payment'> | Date | string | null;
      payment_method?: StringNullableFilter<'payment'> | string | null;
      user_id?: UuidFilter<'payment'> | string;
      toll_booth_id?: UuidFilter<'payment'> | string;
      created_at?: DateTimeFilter<'payment'> | Date | string;
      updated_at?: DateTimeFilter<'payment'> | Date | string;
      journey?: JourneyListRelationFilter;
      toll_booth?: XOR<Toll_boothRelationFilter, toll_boothWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type paymentOrderByWithAggregationInput = {
    id?: SortOrder;
    amount?: SortOrder;
    payment_date?: SortOrderInput | SortOrder;
    payment_method?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    toll_booth_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: paymentCountOrderByAggregateInput;
    _avg?: paymentAvgOrderByAggregateInput;
    _max?: paymentMaxOrderByAggregateInput;
    _min?: paymentMinOrderByAggregateInput;
    _sum?: paymentSumOrderByAggregateInput;
  };

  export type paymentScalarWhereWithAggregatesInput = {
    AND?: paymentScalarWhereWithAggregatesInput | paymentScalarWhereWithAggregatesInput[];
    OR?: paymentScalarWhereWithAggregatesInput[];
    NOT?: paymentScalarWhereWithAggregatesInput | paymentScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'payment'> | string;
    amount?: IntWithAggregatesFilter<'payment'> | number;
    payment_date?: DateTimeNullableWithAggregatesFilter<'payment'> | Date | string | null;
    payment_method?: StringNullableWithAggregatesFilter<'payment'> | string | null;
    user_id?: UuidWithAggregatesFilter<'payment'> | string;
    toll_booth_id?: UuidWithAggregatesFilter<'payment'> | string;
    created_at?: DateTimeWithAggregatesFilter<'payment'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'payment'> | Date | string;
  };

  export type toll_boothWhereInput = {
    AND?: toll_boothWhereInput | toll_boothWhereInput[];
    OR?: toll_boothWhereInput[];
    NOT?: toll_boothWhereInput | toll_boothWhereInput[];
    id?: UuidFilter<'toll_booth'> | string;
    location?: StringFilter<'toll_booth'> | string;
    operator_id?: UuidFilter<'toll_booth'> | string;
    status?: StringNullableFilter<'toll_booth'> | string | null;
    toll_amount?: IntNullableFilter<'toll_booth'> | number | null;
    operational_hours?: StringNullableFilter<'toll_booth'> | string | null;
    created_at?: DateTimeFilter<'toll_booth'> | Date | string;
    updated_at?: DateTimeFilter<'toll_booth'> | Date | string;
    journey?: JourneyListRelationFilter;
    payment?: PaymentListRelationFilter;
    operator?: XOR<OperatorRelationFilter, operatorWhereInput>;
  };

  export type toll_boothOrderByWithRelationInput = {
    id?: SortOrder;
    location?: SortOrder;
    operator_id?: SortOrder;
    status?: SortOrderInput | SortOrder;
    toll_amount?: SortOrderInput | SortOrder;
    operational_hours?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    journey?: journeyOrderByRelationAggregateInput;
    payment?: paymentOrderByRelationAggregateInput;
    operator?: operatorOrderByWithRelationInput;
  };

  export type toll_boothWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: toll_boothWhereInput | toll_boothWhereInput[];
      OR?: toll_boothWhereInput[];
      NOT?: toll_boothWhereInput | toll_boothWhereInput[];
      location?: StringFilter<'toll_booth'> | string;
      operator_id?: UuidFilter<'toll_booth'> | string;
      status?: StringNullableFilter<'toll_booth'> | string | null;
      toll_amount?: IntNullableFilter<'toll_booth'> | number | null;
      operational_hours?: StringNullableFilter<'toll_booth'> | string | null;
      created_at?: DateTimeFilter<'toll_booth'> | Date | string;
      updated_at?: DateTimeFilter<'toll_booth'> | Date | string;
      journey?: JourneyListRelationFilter;
      payment?: PaymentListRelationFilter;
      operator?: XOR<OperatorRelationFilter, operatorWhereInput>;
    },
    'id'
  >;

  export type toll_boothOrderByWithAggregationInput = {
    id?: SortOrder;
    location?: SortOrder;
    operator_id?: SortOrder;
    status?: SortOrderInput | SortOrder;
    toll_amount?: SortOrderInput | SortOrder;
    operational_hours?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: toll_boothCountOrderByAggregateInput;
    _avg?: toll_boothAvgOrderByAggregateInput;
    _max?: toll_boothMaxOrderByAggregateInput;
    _min?: toll_boothMinOrderByAggregateInput;
    _sum?: toll_boothSumOrderByAggregateInput;
  };

  export type toll_boothScalarWhereWithAggregatesInput = {
    AND?: toll_boothScalarWhereWithAggregatesInput | toll_boothScalarWhereWithAggregatesInput[];
    OR?: toll_boothScalarWhereWithAggregatesInput[];
    NOT?: toll_boothScalarWhereWithAggregatesInput | toll_boothScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'toll_booth'> | string;
    location?: StringWithAggregatesFilter<'toll_booth'> | string;
    operator_id?: UuidWithAggregatesFilter<'toll_booth'> | string;
    status?: StringNullableWithAggregatesFilter<'toll_booth'> | string | null;
    toll_amount?: IntNullableWithAggregatesFilter<'toll_booth'> | number | null;
    operational_hours?: StringNullableWithAggregatesFilter<'toll_booth'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'toll_booth'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'toll_booth'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    operator?: OperatorListRelationFilter;
    payment?: PaymentListRelationFilter;
    vehicle?: VehicleListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    operator?: operatorOrderByRelationAggregateInput;
    payment?: paymentOrderByRelationAggregateInput;
    vehicle?: vehicleOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      operator?: OperatorListRelationFilter;
      payment?: PaymentListRelationFilter;
      vehicle?: VehicleListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type vehicleWhereInput = {
    AND?: vehicleWhereInput | vehicleWhereInput[];
    OR?: vehicleWhereInput[];
    NOT?: vehicleWhereInput | vehicleWhereInput[];
    id?: UuidFilter<'vehicle'> | string;
    license_plate?: StringFilter<'vehicle'> | string;
    make?: StringNullableFilter<'vehicle'> | string | null;
    model?: StringNullableFilter<'vehicle'> | string | null;
    color?: StringNullableFilter<'vehicle'> | string | null;
    user_id?: UuidFilter<'vehicle'> | string;
    created_at?: DateTimeFilter<'vehicle'> | Date | string;
    updated_at?: DateTimeFilter<'vehicle'> | Date | string;
    journey?: JourneyListRelationFilter;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type vehicleOrderByWithRelationInput = {
    id?: SortOrder;
    license_plate?: SortOrder;
    make?: SortOrderInput | SortOrder;
    model?: SortOrderInput | SortOrder;
    color?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    journey?: journeyOrderByRelationAggregateInput;
    user?: userOrderByWithRelationInput;
  };

  export type vehicleWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: vehicleWhereInput | vehicleWhereInput[];
      OR?: vehicleWhereInput[];
      NOT?: vehicleWhereInput | vehicleWhereInput[];
      license_plate?: StringFilter<'vehicle'> | string;
      make?: StringNullableFilter<'vehicle'> | string | null;
      model?: StringNullableFilter<'vehicle'> | string | null;
      color?: StringNullableFilter<'vehicle'> | string | null;
      user_id?: UuidFilter<'vehicle'> | string;
      created_at?: DateTimeFilter<'vehicle'> | Date | string;
      updated_at?: DateTimeFilter<'vehicle'> | Date | string;
      journey?: JourneyListRelationFilter;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type vehicleOrderByWithAggregationInput = {
    id?: SortOrder;
    license_plate?: SortOrder;
    make?: SortOrderInput | SortOrder;
    model?: SortOrderInput | SortOrder;
    color?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: vehicleCountOrderByAggregateInput;
    _max?: vehicleMaxOrderByAggregateInput;
    _min?: vehicleMinOrderByAggregateInput;
  };

  export type vehicleScalarWhereWithAggregatesInput = {
    AND?: vehicleScalarWhereWithAggregatesInput | vehicleScalarWhereWithAggregatesInput[];
    OR?: vehicleScalarWhereWithAggregatesInput[];
    NOT?: vehicleScalarWhereWithAggregatesInput | vehicleScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'vehicle'> | string;
    license_plate?: StringWithAggregatesFilter<'vehicle'> | string;
    make?: StringNullableWithAggregatesFilter<'vehicle'> | string | null;
    model?: StringNullableWithAggregatesFilter<'vehicle'> | string | null;
    color?: StringNullableWithAggregatesFilter<'vehicle'> | string | null;
    user_id?: UuidWithAggregatesFilter<'vehicle'> | string;
    created_at?: DateTimeWithAggregatesFilter<'vehicle'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'vehicle'> | Date | string;
  };

  export type journeyCreateInput = {
    id?: string;
    start_time?: Date | string | null;
    end_time?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    payment: paymentCreateNestedOneWithoutJourneyInput;
    toll_booth: toll_boothCreateNestedOneWithoutJourneyInput;
    vehicle: vehicleCreateNestedOneWithoutJourneyInput;
  };

  export type journeyUncheckedCreateInput = {
    id?: string;
    start_time?: Date | string | null;
    end_time?: Date | string | null;
    vehicle_id: string;
    toll_booth_id: string;
    payment_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type journeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: paymentUpdateOneRequiredWithoutJourneyNestedInput;
    toll_booth?: toll_boothUpdateOneRequiredWithoutJourneyNestedInput;
    vehicle?: vehicleUpdateOneRequiredWithoutJourneyNestedInput;
  };

  export type journeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    vehicle_id?: StringFieldUpdateOperationsInput | string;
    toll_booth_id?: StringFieldUpdateOperationsInput | string;
    payment_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type journeyCreateManyInput = {
    id?: string;
    start_time?: Date | string | null;
    end_time?: Date | string | null;
    vehicle_id: string;
    toll_booth_id: string;
    payment_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type journeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type journeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    vehicle_id?: StringFieldUpdateOperationsInput | string;
    toll_booth_id?: StringFieldUpdateOperationsInput | string;
    payment_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type operatorCreateInput = {
    id?: string;
    description?: string | null;
    operational_hours?: string | null;
    location?: string | null;
    status?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutOperatorInput;
    toll_booth?: toll_boothCreateNestedManyWithoutOperatorInput;
  };

  export type operatorUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    operational_hours?: string | null;
    location?: string | null;
    status?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    toll_booth?: toll_boothUncheckedCreateNestedManyWithoutOperatorInput;
  };

  export type operatorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    operational_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutOperatorNestedInput;
    toll_booth?: toll_boothUpdateManyWithoutOperatorNestedInput;
  };

  export type operatorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    operational_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    toll_booth?: toll_boothUncheckedUpdateManyWithoutOperatorNestedInput;
  };

  export type operatorCreateManyInput = {
    id?: string;
    description?: string | null;
    operational_hours?: string | null;
    location?: string | null;
    status?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type operatorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    operational_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type operatorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    operational_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type paymentCreateInput = {
    id?: string;
    amount: number;
    payment_date?: Date | string | null;
    payment_method?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    journey?: journeyCreateNestedManyWithoutPaymentInput;
    toll_booth: toll_boothCreateNestedOneWithoutPaymentInput;
    user: userCreateNestedOneWithoutPaymentInput;
  };

  export type paymentUncheckedCreateInput = {
    id?: string;
    amount: number;
    payment_date?: Date | string | null;
    payment_method?: string | null;
    user_id: string;
    toll_booth_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    journey?: journeyUncheckedCreateNestedManyWithoutPaymentInput;
  };

  export type paymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    journey?: journeyUpdateManyWithoutPaymentNestedInput;
    toll_booth?: toll_boothUpdateOneRequiredWithoutPaymentNestedInput;
    user?: userUpdateOneRequiredWithoutPaymentNestedInput;
  };

  export type paymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    toll_booth_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    journey?: journeyUncheckedUpdateManyWithoutPaymentNestedInput;
  };

  export type paymentCreateManyInput = {
    id?: string;
    amount: number;
    payment_date?: Date | string | null;
    payment_method?: string | null;
    user_id: string;
    toll_booth_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type paymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type paymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    toll_booth_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type toll_boothCreateInput = {
    id?: string;
    location: string;
    status?: string | null;
    toll_amount?: number | null;
    operational_hours?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    journey?: journeyCreateNestedManyWithoutToll_boothInput;
    payment?: paymentCreateNestedManyWithoutToll_boothInput;
    operator: operatorCreateNestedOneWithoutToll_boothInput;
  };

  export type toll_boothUncheckedCreateInput = {
    id?: string;
    location: string;
    operator_id: string;
    status?: string | null;
    toll_amount?: number | null;
    operational_hours?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    journey?: journeyUncheckedCreateNestedManyWithoutToll_boothInput;
    payment?: paymentUncheckedCreateNestedManyWithoutToll_boothInput;
  };

  export type toll_boothUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    toll_amount?: NullableIntFieldUpdateOperationsInput | number | null;
    operational_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    journey?: journeyUpdateManyWithoutToll_boothNestedInput;
    payment?: paymentUpdateManyWithoutToll_boothNestedInput;
    operator?: operatorUpdateOneRequiredWithoutToll_boothNestedInput;
  };

  export type toll_boothUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    operator_id?: StringFieldUpdateOperationsInput | string;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    toll_amount?: NullableIntFieldUpdateOperationsInput | number | null;
    operational_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    journey?: journeyUncheckedUpdateManyWithoutToll_boothNestedInput;
    payment?: paymentUncheckedUpdateManyWithoutToll_boothNestedInput;
  };

  export type toll_boothCreateManyInput = {
    id?: string;
    location: string;
    operator_id: string;
    status?: string | null;
    toll_amount?: number | null;
    operational_hours?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type toll_boothUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    toll_amount?: NullableIntFieldUpdateOperationsInput | number | null;
    operational_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type toll_boothUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    operator_id?: StringFieldUpdateOperationsInput | string;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    toll_amount?: NullableIntFieldUpdateOperationsInput | number | null;
    operational_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    operator?: operatorCreateNestedManyWithoutUserInput;
    payment?: paymentCreateNestedManyWithoutUserInput;
    vehicle?: vehicleCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    operator?: operatorUncheckedCreateNestedManyWithoutUserInput;
    payment?: paymentUncheckedCreateNestedManyWithoutUserInput;
    vehicle?: vehicleUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    operator?: operatorUpdateManyWithoutUserNestedInput;
    payment?: paymentUpdateManyWithoutUserNestedInput;
    vehicle?: vehicleUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    operator?: operatorUncheckedUpdateManyWithoutUserNestedInput;
    payment?: paymentUncheckedUpdateManyWithoutUserNestedInput;
    vehicle?: vehicleUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type vehicleCreateInput = {
    id?: string;
    license_plate: string;
    make?: string | null;
    model?: string | null;
    color?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    journey?: journeyCreateNestedManyWithoutVehicleInput;
    user: userCreateNestedOneWithoutVehicleInput;
  };

  export type vehicleUncheckedCreateInput = {
    id?: string;
    license_plate: string;
    make?: string | null;
    model?: string | null;
    color?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    journey?: journeyUncheckedCreateNestedManyWithoutVehicleInput;
  };

  export type vehicleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    license_plate?: StringFieldUpdateOperationsInput | string;
    make?: NullableStringFieldUpdateOperationsInput | string | null;
    model?: NullableStringFieldUpdateOperationsInput | string | null;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    journey?: journeyUpdateManyWithoutVehicleNestedInput;
    user?: userUpdateOneRequiredWithoutVehicleNestedInput;
  };

  export type vehicleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    license_plate?: StringFieldUpdateOperationsInput | string;
    make?: NullableStringFieldUpdateOperationsInput | string | null;
    model?: NullableStringFieldUpdateOperationsInput | string | null;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    journey?: journeyUncheckedUpdateManyWithoutVehicleNestedInput;
  };

  export type vehicleCreateManyInput = {
    id?: string;
    license_plate: string;
    make?: string | null;
    model?: string | null;
    color?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type vehicleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    license_plate?: StringFieldUpdateOperationsInput | string;
    make?: NullableStringFieldUpdateOperationsInput | string | null;
    model?: NullableStringFieldUpdateOperationsInput | string | null;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type vehicleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    license_plate?: StringFieldUpdateOperationsInput | string;
    make?: NullableStringFieldUpdateOperationsInput | string | null;
    model?: NullableStringFieldUpdateOperationsInput | string | null;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type PaymentRelationFilter = {
    is?: paymentWhereInput;
    isNot?: paymentWhereInput;
  };

  export type Toll_boothRelationFilter = {
    is?: toll_boothWhereInput;
    isNot?: toll_boothWhereInput;
  };

  export type VehicleRelationFilter = {
    is?: vehicleWhereInput;
    isNot?: vehicleWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type journeyCountOrderByAggregateInput = {
    id?: SortOrder;
    start_time?: SortOrder;
    end_time?: SortOrder;
    vehicle_id?: SortOrder;
    toll_booth_id?: SortOrder;
    payment_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type journeyMaxOrderByAggregateInput = {
    id?: SortOrder;
    start_time?: SortOrder;
    end_time?: SortOrder;
    vehicle_id?: SortOrder;
    toll_booth_id?: SortOrder;
    payment_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type journeyMinOrderByAggregateInput = {
    id?: SortOrder;
    start_time?: SortOrder;
    end_time?: SortOrder;
    vehicle_id?: SortOrder;
    toll_booth_id?: SortOrder;
    payment_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type Toll_boothListRelationFilter = {
    every?: toll_boothWhereInput;
    some?: toll_boothWhereInput;
    none?: toll_boothWhereInput;
  };

  export type toll_boothOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type operatorCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    operational_hours?: SortOrder;
    location?: SortOrder;
    status?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type operatorMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    operational_hours?: SortOrder;
    location?: SortOrder;
    status?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type operatorMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    operational_hours?: SortOrder;
    location?: SortOrder;
    status?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type JourneyListRelationFilter = {
    every?: journeyWhereInput;
    some?: journeyWhereInput;
    none?: journeyWhereInput;
  };

  export type journeyOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type paymentCountOrderByAggregateInput = {
    id?: SortOrder;
    amount?: SortOrder;
    payment_date?: SortOrder;
    payment_method?: SortOrder;
    user_id?: SortOrder;
    toll_booth_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type paymentAvgOrderByAggregateInput = {
    amount?: SortOrder;
  };

  export type paymentMaxOrderByAggregateInput = {
    id?: SortOrder;
    amount?: SortOrder;
    payment_date?: SortOrder;
    payment_method?: SortOrder;
    user_id?: SortOrder;
    toll_booth_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type paymentMinOrderByAggregateInput = {
    id?: SortOrder;
    amount?: SortOrder;
    payment_date?: SortOrder;
    payment_method?: SortOrder;
    user_id?: SortOrder;
    toll_booth_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type paymentSumOrderByAggregateInput = {
    amount?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type PaymentListRelationFilter = {
    every?: paymentWhereInput;
    some?: paymentWhereInput;
    none?: paymentWhereInput;
  };

  export type OperatorRelationFilter = {
    is?: operatorWhereInput;
    isNot?: operatorWhereInput;
  };

  export type paymentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type toll_boothCountOrderByAggregateInput = {
    id?: SortOrder;
    location?: SortOrder;
    operator_id?: SortOrder;
    status?: SortOrder;
    toll_amount?: SortOrder;
    operational_hours?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type toll_boothAvgOrderByAggregateInput = {
    toll_amount?: SortOrder;
  };

  export type toll_boothMaxOrderByAggregateInput = {
    id?: SortOrder;
    location?: SortOrder;
    operator_id?: SortOrder;
    status?: SortOrder;
    toll_amount?: SortOrder;
    operational_hours?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type toll_boothMinOrderByAggregateInput = {
    id?: SortOrder;
    location?: SortOrder;
    operator_id?: SortOrder;
    status?: SortOrder;
    toll_amount?: SortOrder;
    operational_hours?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type toll_boothSumOrderByAggregateInput = {
    toll_amount?: SortOrder;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type OperatorListRelationFilter = {
    every?: operatorWhereInput;
    some?: operatorWhereInput;
    none?: operatorWhereInput;
  };

  export type VehicleListRelationFilter = {
    every?: vehicleWhereInput;
    some?: vehicleWhereInput;
    none?: vehicleWhereInput;
  };

  export type operatorOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type vehicleOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type vehicleCountOrderByAggregateInput = {
    id?: SortOrder;
    license_plate?: SortOrder;
    make?: SortOrder;
    model?: SortOrder;
    color?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type vehicleMaxOrderByAggregateInput = {
    id?: SortOrder;
    license_plate?: SortOrder;
    make?: SortOrder;
    model?: SortOrder;
    color?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type vehicleMinOrderByAggregateInput = {
    id?: SortOrder;
    license_plate?: SortOrder;
    make?: SortOrder;
    model?: SortOrder;
    color?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type paymentCreateNestedOneWithoutJourneyInput = {
    create?: XOR<paymentCreateWithoutJourneyInput, paymentUncheckedCreateWithoutJourneyInput>;
    connectOrCreate?: paymentCreateOrConnectWithoutJourneyInput;
    connect?: paymentWhereUniqueInput;
  };

  export type toll_boothCreateNestedOneWithoutJourneyInput = {
    create?: XOR<toll_boothCreateWithoutJourneyInput, toll_boothUncheckedCreateWithoutJourneyInput>;
    connectOrCreate?: toll_boothCreateOrConnectWithoutJourneyInput;
    connect?: toll_boothWhereUniqueInput;
  };

  export type vehicleCreateNestedOneWithoutJourneyInput = {
    create?: XOR<vehicleCreateWithoutJourneyInput, vehicleUncheckedCreateWithoutJourneyInput>;
    connectOrCreate?: vehicleCreateOrConnectWithoutJourneyInput;
    connect?: vehicleWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type paymentUpdateOneRequiredWithoutJourneyNestedInput = {
    create?: XOR<paymentCreateWithoutJourneyInput, paymentUncheckedCreateWithoutJourneyInput>;
    connectOrCreate?: paymentCreateOrConnectWithoutJourneyInput;
    upsert?: paymentUpsertWithoutJourneyInput;
    connect?: paymentWhereUniqueInput;
    update?: XOR<
      XOR<paymentUpdateToOneWithWhereWithoutJourneyInput, paymentUpdateWithoutJourneyInput>,
      paymentUncheckedUpdateWithoutJourneyInput
    >;
  };

  export type toll_boothUpdateOneRequiredWithoutJourneyNestedInput = {
    create?: XOR<toll_boothCreateWithoutJourneyInput, toll_boothUncheckedCreateWithoutJourneyInput>;
    connectOrCreate?: toll_boothCreateOrConnectWithoutJourneyInput;
    upsert?: toll_boothUpsertWithoutJourneyInput;
    connect?: toll_boothWhereUniqueInput;
    update?: XOR<
      XOR<toll_boothUpdateToOneWithWhereWithoutJourneyInput, toll_boothUpdateWithoutJourneyInput>,
      toll_boothUncheckedUpdateWithoutJourneyInput
    >;
  };

  export type vehicleUpdateOneRequiredWithoutJourneyNestedInput = {
    create?: XOR<vehicleCreateWithoutJourneyInput, vehicleUncheckedCreateWithoutJourneyInput>;
    connectOrCreate?: vehicleCreateOrConnectWithoutJourneyInput;
    upsert?: vehicleUpsertWithoutJourneyInput;
    connect?: vehicleWhereUniqueInput;
    update?: XOR<
      XOR<vehicleUpdateToOneWithWhereWithoutJourneyInput, vehicleUpdateWithoutJourneyInput>,
      vehicleUncheckedUpdateWithoutJourneyInput
    >;
  };

  export type userCreateNestedOneWithoutOperatorInput = {
    create?: XOR<userCreateWithoutOperatorInput, userUncheckedCreateWithoutOperatorInput>;
    connectOrCreate?: userCreateOrConnectWithoutOperatorInput;
    connect?: userWhereUniqueInput;
  };

  export type toll_boothCreateNestedManyWithoutOperatorInput = {
    create?:
      | XOR<toll_boothCreateWithoutOperatorInput, toll_boothUncheckedCreateWithoutOperatorInput>
      | toll_boothCreateWithoutOperatorInput[]
      | toll_boothUncheckedCreateWithoutOperatorInput[];
    connectOrCreate?: toll_boothCreateOrConnectWithoutOperatorInput | toll_boothCreateOrConnectWithoutOperatorInput[];
    createMany?: toll_boothCreateManyOperatorInputEnvelope;
    connect?: toll_boothWhereUniqueInput | toll_boothWhereUniqueInput[];
  };

  export type toll_boothUncheckedCreateNestedManyWithoutOperatorInput = {
    create?:
      | XOR<toll_boothCreateWithoutOperatorInput, toll_boothUncheckedCreateWithoutOperatorInput>
      | toll_boothCreateWithoutOperatorInput[]
      | toll_boothUncheckedCreateWithoutOperatorInput[];
    connectOrCreate?: toll_boothCreateOrConnectWithoutOperatorInput | toll_boothCreateOrConnectWithoutOperatorInput[];
    createMany?: toll_boothCreateManyOperatorInputEnvelope;
    connect?: toll_boothWhereUniqueInput | toll_boothWhereUniqueInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type userUpdateOneRequiredWithoutOperatorNestedInput = {
    create?: XOR<userCreateWithoutOperatorInput, userUncheckedCreateWithoutOperatorInput>;
    connectOrCreate?: userCreateOrConnectWithoutOperatorInput;
    upsert?: userUpsertWithoutOperatorInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutOperatorInput, userUpdateWithoutOperatorInput>,
      userUncheckedUpdateWithoutOperatorInput
    >;
  };

  export type toll_boothUpdateManyWithoutOperatorNestedInput = {
    create?:
      | XOR<toll_boothCreateWithoutOperatorInput, toll_boothUncheckedCreateWithoutOperatorInput>
      | toll_boothCreateWithoutOperatorInput[]
      | toll_boothUncheckedCreateWithoutOperatorInput[];
    connectOrCreate?: toll_boothCreateOrConnectWithoutOperatorInput | toll_boothCreateOrConnectWithoutOperatorInput[];
    upsert?:
      | toll_boothUpsertWithWhereUniqueWithoutOperatorInput
      | toll_boothUpsertWithWhereUniqueWithoutOperatorInput[];
    createMany?: toll_boothCreateManyOperatorInputEnvelope;
    set?: toll_boothWhereUniqueInput | toll_boothWhereUniqueInput[];
    disconnect?: toll_boothWhereUniqueInput | toll_boothWhereUniqueInput[];
    delete?: toll_boothWhereUniqueInput | toll_boothWhereUniqueInput[];
    connect?: toll_boothWhereUniqueInput | toll_boothWhereUniqueInput[];
    update?:
      | toll_boothUpdateWithWhereUniqueWithoutOperatorInput
      | toll_boothUpdateWithWhereUniqueWithoutOperatorInput[];
    updateMany?:
      | toll_boothUpdateManyWithWhereWithoutOperatorInput
      | toll_boothUpdateManyWithWhereWithoutOperatorInput[];
    deleteMany?: toll_boothScalarWhereInput | toll_boothScalarWhereInput[];
  };

  export type toll_boothUncheckedUpdateManyWithoutOperatorNestedInput = {
    create?:
      | XOR<toll_boothCreateWithoutOperatorInput, toll_boothUncheckedCreateWithoutOperatorInput>
      | toll_boothCreateWithoutOperatorInput[]
      | toll_boothUncheckedCreateWithoutOperatorInput[];
    connectOrCreate?: toll_boothCreateOrConnectWithoutOperatorInput | toll_boothCreateOrConnectWithoutOperatorInput[];
    upsert?:
      | toll_boothUpsertWithWhereUniqueWithoutOperatorInput
      | toll_boothUpsertWithWhereUniqueWithoutOperatorInput[];
    createMany?: toll_boothCreateManyOperatorInputEnvelope;
    set?: toll_boothWhereUniqueInput | toll_boothWhereUniqueInput[];
    disconnect?: toll_boothWhereUniqueInput | toll_boothWhereUniqueInput[];
    delete?: toll_boothWhereUniqueInput | toll_boothWhereUniqueInput[];
    connect?: toll_boothWhereUniqueInput | toll_boothWhereUniqueInput[];
    update?:
      | toll_boothUpdateWithWhereUniqueWithoutOperatorInput
      | toll_boothUpdateWithWhereUniqueWithoutOperatorInput[];
    updateMany?:
      | toll_boothUpdateManyWithWhereWithoutOperatorInput
      | toll_boothUpdateManyWithWhereWithoutOperatorInput[];
    deleteMany?: toll_boothScalarWhereInput | toll_boothScalarWhereInput[];
  };

  export type journeyCreateNestedManyWithoutPaymentInput = {
    create?:
      | XOR<journeyCreateWithoutPaymentInput, journeyUncheckedCreateWithoutPaymentInput>
      | journeyCreateWithoutPaymentInput[]
      | journeyUncheckedCreateWithoutPaymentInput[];
    connectOrCreate?: journeyCreateOrConnectWithoutPaymentInput | journeyCreateOrConnectWithoutPaymentInput[];
    createMany?: journeyCreateManyPaymentInputEnvelope;
    connect?: journeyWhereUniqueInput | journeyWhereUniqueInput[];
  };

  export type toll_boothCreateNestedOneWithoutPaymentInput = {
    create?: XOR<toll_boothCreateWithoutPaymentInput, toll_boothUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: toll_boothCreateOrConnectWithoutPaymentInput;
    connect?: toll_boothWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutPaymentInput = {
    create?: XOR<userCreateWithoutPaymentInput, userUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: userCreateOrConnectWithoutPaymentInput;
    connect?: userWhereUniqueInput;
  };

  export type journeyUncheckedCreateNestedManyWithoutPaymentInput = {
    create?:
      | XOR<journeyCreateWithoutPaymentInput, journeyUncheckedCreateWithoutPaymentInput>
      | journeyCreateWithoutPaymentInput[]
      | journeyUncheckedCreateWithoutPaymentInput[];
    connectOrCreate?: journeyCreateOrConnectWithoutPaymentInput | journeyCreateOrConnectWithoutPaymentInput[];
    createMany?: journeyCreateManyPaymentInputEnvelope;
    connect?: journeyWhereUniqueInput | journeyWhereUniqueInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type journeyUpdateManyWithoutPaymentNestedInput = {
    create?:
      | XOR<journeyCreateWithoutPaymentInput, journeyUncheckedCreateWithoutPaymentInput>
      | journeyCreateWithoutPaymentInput[]
      | journeyUncheckedCreateWithoutPaymentInput[];
    connectOrCreate?: journeyCreateOrConnectWithoutPaymentInput | journeyCreateOrConnectWithoutPaymentInput[];
    upsert?: journeyUpsertWithWhereUniqueWithoutPaymentInput | journeyUpsertWithWhereUniqueWithoutPaymentInput[];
    createMany?: journeyCreateManyPaymentInputEnvelope;
    set?: journeyWhereUniqueInput | journeyWhereUniqueInput[];
    disconnect?: journeyWhereUniqueInput | journeyWhereUniqueInput[];
    delete?: journeyWhereUniqueInput | journeyWhereUniqueInput[];
    connect?: journeyWhereUniqueInput | journeyWhereUniqueInput[];
    update?: journeyUpdateWithWhereUniqueWithoutPaymentInput | journeyUpdateWithWhereUniqueWithoutPaymentInput[];
    updateMany?: journeyUpdateManyWithWhereWithoutPaymentInput | journeyUpdateManyWithWhereWithoutPaymentInput[];
    deleteMany?: journeyScalarWhereInput | journeyScalarWhereInput[];
  };

  export type toll_boothUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<toll_boothCreateWithoutPaymentInput, toll_boothUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: toll_boothCreateOrConnectWithoutPaymentInput;
    upsert?: toll_boothUpsertWithoutPaymentInput;
    connect?: toll_boothWhereUniqueInput;
    update?: XOR<
      XOR<toll_boothUpdateToOneWithWhereWithoutPaymentInput, toll_boothUpdateWithoutPaymentInput>,
      toll_boothUncheckedUpdateWithoutPaymentInput
    >;
  };

  export type userUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<userCreateWithoutPaymentInput, userUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: userCreateOrConnectWithoutPaymentInput;
    upsert?: userUpsertWithoutPaymentInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutPaymentInput, userUpdateWithoutPaymentInput>,
      userUncheckedUpdateWithoutPaymentInput
    >;
  };

  export type journeyUncheckedUpdateManyWithoutPaymentNestedInput = {
    create?:
      | XOR<journeyCreateWithoutPaymentInput, journeyUncheckedCreateWithoutPaymentInput>
      | journeyCreateWithoutPaymentInput[]
      | journeyUncheckedCreateWithoutPaymentInput[];
    connectOrCreate?: journeyCreateOrConnectWithoutPaymentInput | journeyCreateOrConnectWithoutPaymentInput[];
    upsert?: journeyUpsertWithWhereUniqueWithoutPaymentInput | journeyUpsertWithWhereUniqueWithoutPaymentInput[];
    createMany?: journeyCreateManyPaymentInputEnvelope;
    set?: journeyWhereUniqueInput | journeyWhereUniqueInput[];
    disconnect?: journeyWhereUniqueInput | journeyWhereUniqueInput[];
    delete?: journeyWhereUniqueInput | journeyWhereUniqueInput[];
    connect?: journeyWhereUniqueInput | journeyWhereUniqueInput[];
    update?: journeyUpdateWithWhereUniqueWithoutPaymentInput | journeyUpdateWithWhereUniqueWithoutPaymentInput[];
    updateMany?: journeyUpdateManyWithWhereWithoutPaymentInput | journeyUpdateManyWithWhereWithoutPaymentInput[];
    deleteMany?: journeyScalarWhereInput | journeyScalarWhereInput[];
  };

  export type journeyCreateNestedManyWithoutToll_boothInput = {
    create?:
      | XOR<journeyCreateWithoutToll_boothInput, journeyUncheckedCreateWithoutToll_boothInput>
      | journeyCreateWithoutToll_boothInput[]
      | journeyUncheckedCreateWithoutToll_boothInput[];
    connectOrCreate?: journeyCreateOrConnectWithoutToll_boothInput | journeyCreateOrConnectWithoutToll_boothInput[];
    createMany?: journeyCreateManyToll_boothInputEnvelope;
    connect?: journeyWhereUniqueInput | journeyWhereUniqueInput[];
  };

  export type paymentCreateNestedManyWithoutToll_boothInput = {
    create?:
      | XOR<paymentCreateWithoutToll_boothInput, paymentUncheckedCreateWithoutToll_boothInput>
      | paymentCreateWithoutToll_boothInput[]
      | paymentUncheckedCreateWithoutToll_boothInput[];
    connectOrCreate?: paymentCreateOrConnectWithoutToll_boothInput | paymentCreateOrConnectWithoutToll_boothInput[];
    createMany?: paymentCreateManyToll_boothInputEnvelope;
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
  };

  export type operatorCreateNestedOneWithoutToll_boothInput = {
    create?: XOR<operatorCreateWithoutToll_boothInput, operatorUncheckedCreateWithoutToll_boothInput>;
    connectOrCreate?: operatorCreateOrConnectWithoutToll_boothInput;
    connect?: operatorWhereUniqueInput;
  };

  export type journeyUncheckedCreateNestedManyWithoutToll_boothInput = {
    create?:
      | XOR<journeyCreateWithoutToll_boothInput, journeyUncheckedCreateWithoutToll_boothInput>
      | journeyCreateWithoutToll_boothInput[]
      | journeyUncheckedCreateWithoutToll_boothInput[];
    connectOrCreate?: journeyCreateOrConnectWithoutToll_boothInput | journeyCreateOrConnectWithoutToll_boothInput[];
    createMany?: journeyCreateManyToll_boothInputEnvelope;
    connect?: journeyWhereUniqueInput | journeyWhereUniqueInput[];
  };

  export type paymentUncheckedCreateNestedManyWithoutToll_boothInput = {
    create?:
      | XOR<paymentCreateWithoutToll_boothInput, paymentUncheckedCreateWithoutToll_boothInput>
      | paymentCreateWithoutToll_boothInput[]
      | paymentUncheckedCreateWithoutToll_boothInput[];
    connectOrCreate?: paymentCreateOrConnectWithoutToll_boothInput | paymentCreateOrConnectWithoutToll_boothInput[];
    createMany?: paymentCreateManyToll_boothInputEnvelope;
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type journeyUpdateManyWithoutToll_boothNestedInput = {
    create?:
      | XOR<journeyCreateWithoutToll_boothInput, journeyUncheckedCreateWithoutToll_boothInput>
      | journeyCreateWithoutToll_boothInput[]
      | journeyUncheckedCreateWithoutToll_boothInput[];
    connectOrCreate?: journeyCreateOrConnectWithoutToll_boothInput | journeyCreateOrConnectWithoutToll_boothInput[];
    upsert?: journeyUpsertWithWhereUniqueWithoutToll_boothInput | journeyUpsertWithWhereUniqueWithoutToll_boothInput[];
    createMany?: journeyCreateManyToll_boothInputEnvelope;
    set?: journeyWhereUniqueInput | journeyWhereUniqueInput[];
    disconnect?: journeyWhereUniqueInput | journeyWhereUniqueInput[];
    delete?: journeyWhereUniqueInput | journeyWhereUniqueInput[];
    connect?: journeyWhereUniqueInput | journeyWhereUniqueInput[];
    update?: journeyUpdateWithWhereUniqueWithoutToll_boothInput | journeyUpdateWithWhereUniqueWithoutToll_boothInput[];
    updateMany?: journeyUpdateManyWithWhereWithoutToll_boothInput | journeyUpdateManyWithWhereWithoutToll_boothInput[];
    deleteMany?: journeyScalarWhereInput | journeyScalarWhereInput[];
  };

  export type paymentUpdateManyWithoutToll_boothNestedInput = {
    create?:
      | XOR<paymentCreateWithoutToll_boothInput, paymentUncheckedCreateWithoutToll_boothInput>
      | paymentCreateWithoutToll_boothInput[]
      | paymentUncheckedCreateWithoutToll_boothInput[];
    connectOrCreate?: paymentCreateOrConnectWithoutToll_boothInput | paymentCreateOrConnectWithoutToll_boothInput[];
    upsert?: paymentUpsertWithWhereUniqueWithoutToll_boothInput | paymentUpsertWithWhereUniqueWithoutToll_boothInput[];
    createMany?: paymentCreateManyToll_boothInputEnvelope;
    set?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    disconnect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    delete?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    update?: paymentUpdateWithWhereUniqueWithoutToll_boothInput | paymentUpdateWithWhereUniqueWithoutToll_boothInput[];
    updateMany?: paymentUpdateManyWithWhereWithoutToll_boothInput | paymentUpdateManyWithWhereWithoutToll_boothInput[];
    deleteMany?: paymentScalarWhereInput | paymentScalarWhereInput[];
  };

  export type operatorUpdateOneRequiredWithoutToll_boothNestedInput = {
    create?: XOR<operatorCreateWithoutToll_boothInput, operatorUncheckedCreateWithoutToll_boothInput>;
    connectOrCreate?: operatorCreateOrConnectWithoutToll_boothInput;
    upsert?: operatorUpsertWithoutToll_boothInput;
    connect?: operatorWhereUniqueInput;
    update?: XOR<
      XOR<operatorUpdateToOneWithWhereWithoutToll_boothInput, operatorUpdateWithoutToll_boothInput>,
      operatorUncheckedUpdateWithoutToll_boothInput
    >;
  };

  export type journeyUncheckedUpdateManyWithoutToll_boothNestedInput = {
    create?:
      | XOR<journeyCreateWithoutToll_boothInput, journeyUncheckedCreateWithoutToll_boothInput>
      | journeyCreateWithoutToll_boothInput[]
      | journeyUncheckedCreateWithoutToll_boothInput[];
    connectOrCreate?: journeyCreateOrConnectWithoutToll_boothInput | journeyCreateOrConnectWithoutToll_boothInput[];
    upsert?: journeyUpsertWithWhereUniqueWithoutToll_boothInput | journeyUpsertWithWhereUniqueWithoutToll_boothInput[];
    createMany?: journeyCreateManyToll_boothInputEnvelope;
    set?: journeyWhereUniqueInput | journeyWhereUniqueInput[];
    disconnect?: journeyWhereUniqueInput | journeyWhereUniqueInput[];
    delete?: journeyWhereUniqueInput | journeyWhereUniqueInput[];
    connect?: journeyWhereUniqueInput | journeyWhereUniqueInput[];
    update?: journeyUpdateWithWhereUniqueWithoutToll_boothInput | journeyUpdateWithWhereUniqueWithoutToll_boothInput[];
    updateMany?: journeyUpdateManyWithWhereWithoutToll_boothInput | journeyUpdateManyWithWhereWithoutToll_boothInput[];
    deleteMany?: journeyScalarWhereInput | journeyScalarWhereInput[];
  };

  export type paymentUncheckedUpdateManyWithoutToll_boothNestedInput = {
    create?:
      | XOR<paymentCreateWithoutToll_boothInput, paymentUncheckedCreateWithoutToll_boothInput>
      | paymentCreateWithoutToll_boothInput[]
      | paymentUncheckedCreateWithoutToll_boothInput[];
    connectOrCreate?: paymentCreateOrConnectWithoutToll_boothInput | paymentCreateOrConnectWithoutToll_boothInput[];
    upsert?: paymentUpsertWithWhereUniqueWithoutToll_boothInput | paymentUpsertWithWhereUniqueWithoutToll_boothInput[];
    createMany?: paymentCreateManyToll_boothInputEnvelope;
    set?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    disconnect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    delete?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    update?: paymentUpdateWithWhereUniqueWithoutToll_boothInput | paymentUpdateWithWhereUniqueWithoutToll_boothInput[];
    updateMany?: paymentUpdateManyWithWhereWithoutToll_boothInput | paymentUpdateManyWithWhereWithoutToll_boothInput[];
    deleteMany?: paymentScalarWhereInput | paymentScalarWhereInput[];
  };

  export type operatorCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<operatorCreateWithoutUserInput, operatorUncheckedCreateWithoutUserInput>
      | operatorCreateWithoutUserInput[]
      | operatorUncheckedCreateWithoutUserInput[];
    connectOrCreate?: operatorCreateOrConnectWithoutUserInput | operatorCreateOrConnectWithoutUserInput[];
    createMany?: operatorCreateManyUserInputEnvelope;
    connect?: operatorWhereUniqueInput | operatorWhereUniqueInput[];
  };

  export type paymentCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput>
      | paymentCreateWithoutUserInput[]
      | paymentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: paymentCreateOrConnectWithoutUserInput | paymentCreateOrConnectWithoutUserInput[];
    createMany?: paymentCreateManyUserInputEnvelope;
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
  };

  export type vehicleCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<vehicleCreateWithoutUserInput, vehicleUncheckedCreateWithoutUserInput>
      | vehicleCreateWithoutUserInput[]
      | vehicleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: vehicleCreateOrConnectWithoutUserInput | vehicleCreateOrConnectWithoutUserInput[];
    createMany?: vehicleCreateManyUserInputEnvelope;
    connect?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[];
  };

  export type operatorUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<operatorCreateWithoutUserInput, operatorUncheckedCreateWithoutUserInput>
      | operatorCreateWithoutUserInput[]
      | operatorUncheckedCreateWithoutUserInput[];
    connectOrCreate?: operatorCreateOrConnectWithoutUserInput | operatorCreateOrConnectWithoutUserInput[];
    createMany?: operatorCreateManyUserInputEnvelope;
    connect?: operatorWhereUniqueInput | operatorWhereUniqueInput[];
  };

  export type paymentUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput>
      | paymentCreateWithoutUserInput[]
      | paymentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: paymentCreateOrConnectWithoutUserInput | paymentCreateOrConnectWithoutUserInput[];
    createMany?: paymentCreateManyUserInputEnvelope;
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
  };

  export type vehicleUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<vehicleCreateWithoutUserInput, vehicleUncheckedCreateWithoutUserInput>
      | vehicleCreateWithoutUserInput[]
      | vehicleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: vehicleCreateOrConnectWithoutUserInput | vehicleCreateOrConnectWithoutUserInput[];
    createMany?: vehicleCreateManyUserInputEnvelope;
    connect?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[];
  };

  export type operatorUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<operatorCreateWithoutUserInput, operatorUncheckedCreateWithoutUserInput>
      | operatorCreateWithoutUserInput[]
      | operatorUncheckedCreateWithoutUserInput[];
    connectOrCreate?: operatorCreateOrConnectWithoutUserInput | operatorCreateOrConnectWithoutUserInput[];
    upsert?: operatorUpsertWithWhereUniqueWithoutUserInput | operatorUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: operatorCreateManyUserInputEnvelope;
    set?: operatorWhereUniqueInput | operatorWhereUniqueInput[];
    disconnect?: operatorWhereUniqueInput | operatorWhereUniqueInput[];
    delete?: operatorWhereUniqueInput | operatorWhereUniqueInput[];
    connect?: operatorWhereUniqueInput | operatorWhereUniqueInput[];
    update?: operatorUpdateWithWhereUniqueWithoutUserInput | operatorUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: operatorUpdateManyWithWhereWithoutUserInput | operatorUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: operatorScalarWhereInput | operatorScalarWhereInput[];
  };

  export type paymentUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput>
      | paymentCreateWithoutUserInput[]
      | paymentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: paymentCreateOrConnectWithoutUserInput | paymentCreateOrConnectWithoutUserInput[];
    upsert?: paymentUpsertWithWhereUniqueWithoutUserInput | paymentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: paymentCreateManyUserInputEnvelope;
    set?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    disconnect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    delete?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    update?: paymentUpdateWithWhereUniqueWithoutUserInput | paymentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: paymentUpdateManyWithWhereWithoutUserInput | paymentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: paymentScalarWhereInput | paymentScalarWhereInput[];
  };

  export type vehicleUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<vehicleCreateWithoutUserInput, vehicleUncheckedCreateWithoutUserInput>
      | vehicleCreateWithoutUserInput[]
      | vehicleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: vehicleCreateOrConnectWithoutUserInput | vehicleCreateOrConnectWithoutUserInput[];
    upsert?: vehicleUpsertWithWhereUniqueWithoutUserInput | vehicleUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: vehicleCreateManyUserInputEnvelope;
    set?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[];
    disconnect?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[];
    delete?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[];
    connect?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[];
    update?: vehicleUpdateWithWhereUniqueWithoutUserInput | vehicleUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: vehicleUpdateManyWithWhereWithoutUserInput | vehicleUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: vehicleScalarWhereInput | vehicleScalarWhereInput[];
  };

  export type operatorUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<operatorCreateWithoutUserInput, operatorUncheckedCreateWithoutUserInput>
      | operatorCreateWithoutUserInput[]
      | operatorUncheckedCreateWithoutUserInput[];
    connectOrCreate?: operatorCreateOrConnectWithoutUserInput | operatorCreateOrConnectWithoutUserInput[];
    upsert?: operatorUpsertWithWhereUniqueWithoutUserInput | operatorUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: operatorCreateManyUserInputEnvelope;
    set?: operatorWhereUniqueInput | operatorWhereUniqueInput[];
    disconnect?: operatorWhereUniqueInput | operatorWhereUniqueInput[];
    delete?: operatorWhereUniqueInput | operatorWhereUniqueInput[];
    connect?: operatorWhereUniqueInput | operatorWhereUniqueInput[];
    update?: operatorUpdateWithWhereUniqueWithoutUserInput | operatorUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: operatorUpdateManyWithWhereWithoutUserInput | operatorUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: operatorScalarWhereInput | operatorScalarWhereInput[];
  };

  export type paymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput>
      | paymentCreateWithoutUserInput[]
      | paymentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: paymentCreateOrConnectWithoutUserInput | paymentCreateOrConnectWithoutUserInput[];
    upsert?: paymentUpsertWithWhereUniqueWithoutUserInput | paymentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: paymentCreateManyUserInputEnvelope;
    set?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    disconnect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    delete?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    update?: paymentUpdateWithWhereUniqueWithoutUserInput | paymentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: paymentUpdateManyWithWhereWithoutUserInput | paymentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: paymentScalarWhereInput | paymentScalarWhereInput[];
  };

  export type vehicleUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<vehicleCreateWithoutUserInput, vehicleUncheckedCreateWithoutUserInput>
      | vehicleCreateWithoutUserInput[]
      | vehicleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: vehicleCreateOrConnectWithoutUserInput | vehicleCreateOrConnectWithoutUserInput[];
    upsert?: vehicleUpsertWithWhereUniqueWithoutUserInput | vehicleUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: vehicleCreateManyUserInputEnvelope;
    set?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[];
    disconnect?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[];
    delete?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[];
    connect?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[];
    update?: vehicleUpdateWithWhereUniqueWithoutUserInput | vehicleUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: vehicleUpdateManyWithWhereWithoutUserInput | vehicleUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: vehicleScalarWhereInput | vehicleScalarWhereInput[];
  };

  export type journeyCreateNestedManyWithoutVehicleInput = {
    create?:
      | XOR<journeyCreateWithoutVehicleInput, journeyUncheckedCreateWithoutVehicleInput>
      | journeyCreateWithoutVehicleInput[]
      | journeyUncheckedCreateWithoutVehicleInput[];
    connectOrCreate?: journeyCreateOrConnectWithoutVehicleInput | journeyCreateOrConnectWithoutVehicleInput[];
    createMany?: journeyCreateManyVehicleInputEnvelope;
    connect?: journeyWhereUniqueInput | journeyWhereUniqueInput[];
  };

  export type userCreateNestedOneWithoutVehicleInput = {
    create?: XOR<userCreateWithoutVehicleInput, userUncheckedCreateWithoutVehicleInput>;
    connectOrCreate?: userCreateOrConnectWithoutVehicleInput;
    connect?: userWhereUniqueInput;
  };

  export type journeyUncheckedCreateNestedManyWithoutVehicleInput = {
    create?:
      | XOR<journeyCreateWithoutVehicleInput, journeyUncheckedCreateWithoutVehicleInput>
      | journeyCreateWithoutVehicleInput[]
      | journeyUncheckedCreateWithoutVehicleInput[];
    connectOrCreate?: journeyCreateOrConnectWithoutVehicleInput | journeyCreateOrConnectWithoutVehicleInput[];
    createMany?: journeyCreateManyVehicleInputEnvelope;
    connect?: journeyWhereUniqueInput | journeyWhereUniqueInput[];
  };

  export type journeyUpdateManyWithoutVehicleNestedInput = {
    create?:
      | XOR<journeyCreateWithoutVehicleInput, journeyUncheckedCreateWithoutVehicleInput>
      | journeyCreateWithoutVehicleInput[]
      | journeyUncheckedCreateWithoutVehicleInput[];
    connectOrCreate?: journeyCreateOrConnectWithoutVehicleInput | journeyCreateOrConnectWithoutVehicleInput[];
    upsert?: journeyUpsertWithWhereUniqueWithoutVehicleInput | journeyUpsertWithWhereUniqueWithoutVehicleInput[];
    createMany?: journeyCreateManyVehicleInputEnvelope;
    set?: journeyWhereUniqueInput | journeyWhereUniqueInput[];
    disconnect?: journeyWhereUniqueInput | journeyWhereUniqueInput[];
    delete?: journeyWhereUniqueInput | journeyWhereUniqueInput[];
    connect?: journeyWhereUniqueInput | journeyWhereUniqueInput[];
    update?: journeyUpdateWithWhereUniqueWithoutVehicleInput | journeyUpdateWithWhereUniqueWithoutVehicleInput[];
    updateMany?: journeyUpdateManyWithWhereWithoutVehicleInput | journeyUpdateManyWithWhereWithoutVehicleInput[];
    deleteMany?: journeyScalarWhereInput | journeyScalarWhereInput[];
  };

  export type userUpdateOneRequiredWithoutVehicleNestedInput = {
    create?: XOR<userCreateWithoutVehicleInput, userUncheckedCreateWithoutVehicleInput>;
    connectOrCreate?: userCreateOrConnectWithoutVehicleInput;
    upsert?: userUpsertWithoutVehicleInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutVehicleInput, userUpdateWithoutVehicleInput>,
      userUncheckedUpdateWithoutVehicleInput
    >;
  };

  export type journeyUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?:
      | XOR<journeyCreateWithoutVehicleInput, journeyUncheckedCreateWithoutVehicleInput>
      | journeyCreateWithoutVehicleInput[]
      | journeyUncheckedCreateWithoutVehicleInput[];
    connectOrCreate?: journeyCreateOrConnectWithoutVehicleInput | journeyCreateOrConnectWithoutVehicleInput[];
    upsert?: journeyUpsertWithWhereUniqueWithoutVehicleInput | journeyUpsertWithWhereUniqueWithoutVehicleInput[];
    createMany?: journeyCreateManyVehicleInputEnvelope;
    set?: journeyWhereUniqueInput | journeyWhereUniqueInput[];
    disconnect?: journeyWhereUniqueInput | journeyWhereUniqueInput[];
    delete?: journeyWhereUniqueInput | journeyWhereUniqueInput[];
    connect?: journeyWhereUniqueInput | journeyWhereUniqueInput[];
    update?: journeyUpdateWithWhereUniqueWithoutVehicleInput | journeyUpdateWithWhereUniqueWithoutVehicleInput[];
    updateMany?: journeyUpdateManyWithWhereWithoutVehicleInput | journeyUpdateManyWithWhereWithoutVehicleInput[];
    deleteMany?: journeyScalarWhereInput | journeyScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type paymentCreateWithoutJourneyInput = {
    id?: string;
    amount: number;
    payment_date?: Date | string | null;
    payment_method?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    toll_booth: toll_boothCreateNestedOneWithoutPaymentInput;
    user: userCreateNestedOneWithoutPaymentInput;
  };

  export type paymentUncheckedCreateWithoutJourneyInput = {
    id?: string;
    amount: number;
    payment_date?: Date | string | null;
    payment_method?: string | null;
    user_id: string;
    toll_booth_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type paymentCreateOrConnectWithoutJourneyInput = {
    where: paymentWhereUniqueInput;
    create: XOR<paymentCreateWithoutJourneyInput, paymentUncheckedCreateWithoutJourneyInput>;
  };

  export type toll_boothCreateWithoutJourneyInput = {
    id?: string;
    location: string;
    status?: string | null;
    toll_amount?: number | null;
    operational_hours?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    payment?: paymentCreateNestedManyWithoutToll_boothInput;
    operator: operatorCreateNestedOneWithoutToll_boothInput;
  };

  export type toll_boothUncheckedCreateWithoutJourneyInput = {
    id?: string;
    location: string;
    operator_id: string;
    status?: string | null;
    toll_amount?: number | null;
    operational_hours?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    payment?: paymentUncheckedCreateNestedManyWithoutToll_boothInput;
  };

  export type toll_boothCreateOrConnectWithoutJourneyInput = {
    where: toll_boothWhereUniqueInput;
    create: XOR<toll_boothCreateWithoutJourneyInput, toll_boothUncheckedCreateWithoutJourneyInput>;
  };

  export type vehicleCreateWithoutJourneyInput = {
    id?: string;
    license_plate: string;
    make?: string | null;
    model?: string | null;
    color?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutVehicleInput;
  };

  export type vehicleUncheckedCreateWithoutJourneyInput = {
    id?: string;
    license_plate: string;
    make?: string | null;
    model?: string | null;
    color?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type vehicleCreateOrConnectWithoutJourneyInput = {
    where: vehicleWhereUniqueInput;
    create: XOR<vehicleCreateWithoutJourneyInput, vehicleUncheckedCreateWithoutJourneyInput>;
  };

  export type paymentUpsertWithoutJourneyInput = {
    update: XOR<paymentUpdateWithoutJourneyInput, paymentUncheckedUpdateWithoutJourneyInput>;
    create: XOR<paymentCreateWithoutJourneyInput, paymentUncheckedCreateWithoutJourneyInput>;
    where?: paymentWhereInput;
  };

  export type paymentUpdateToOneWithWhereWithoutJourneyInput = {
    where?: paymentWhereInput;
    data: XOR<paymentUpdateWithoutJourneyInput, paymentUncheckedUpdateWithoutJourneyInput>;
  };

  export type paymentUpdateWithoutJourneyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    toll_booth?: toll_boothUpdateOneRequiredWithoutPaymentNestedInput;
    user?: userUpdateOneRequiredWithoutPaymentNestedInput;
  };

  export type paymentUncheckedUpdateWithoutJourneyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    toll_booth_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type toll_boothUpsertWithoutJourneyInput = {
    update: XOR<toll_boothUpdateWithoutJourneyInput, toll_boothUncheckedUpdateWithoutJourneyInput>;
    create: XOR<toll_boothCreateWithoutJourneyInput, toll_boothUncheckedCreateWithoutJourneyInput>;
    where?: toll_boothWhereInput;
  };

  export type toll_boothUpdateToOneWithWhereWithoutJourneyInput = {
    where?: toll_boothWhereInput;
    data: XOR<toll_boothUpdateWithoutJourneyInput, toll_boothUncheckedUpdateWithoutJourneyInput>;
  };

  export type toll_boothUpdateWithoutJourneyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    toll_amount?: NullableIntFieldUpdateOperationsInput | number | null;
    operational_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: paymentUpdateManyWithoutToll_boothNestedInput;
    operator?: operatorUpdateOneRequiredWithoutToll_boothNestedInput;
  };

  export type toll_boothUncheckedUpdateWithoutJourneyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    operator_id?: StringFieldUpdateOperationsInput | string;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    toll_amount?: NullableIntFieldUpdateOperationsInput | number | null;
    operational_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: paymentUncheckedUpdateManyWithoutToll_boothNestedInput;
  };

  export type vehicleUpsertWithoutJourneyInput = {
    update: XOR<vehicleUpdateWithoutJourneyInput, vehicleUncheckedUpdateWithoutJourneyInput>;
    create: XOR<vehicleCreateWithoutJourneyInput, vehicleUncheckedCreateWithoutJourneyInput>;
    where?: vehicleWhereInput;
  };

  export type vehicleUpdateToOneWithWhereWithoutJourneyInput = {
    where?: vehicleWhereInput;
    data: XOR<vehicleUpdateWithoutJourneyInput, vehicleUncheckedUpdateWithoutJourneyInput>;
  };

  export type vehicleUpdateWithoutJourneyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    license_plate?: StringFieldUpdateOperationsInput | string;
    make?: NullableStringFieldUpdateOperationsInput | string | null;
    model?: NullableStringFieldUpdateOperationsInput | string | null;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutVehicleNestedInput;
  };

  export type vehicleUncheckedUpdateWithoutJourneyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    license_plate?: StringFieldUpdateOperationsInput | string;
    make?: NullableStringFieldUpdateOperationsInput | string | null;
    model?: NullableStringFieldUpdateOperationsInput | string | null;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateWithoutOperatorInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    payment?: paymentCreateNestedManyWithoutUserInput;
    vehicle?: vehicleCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutOperatorInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    payment?: paymentUncheckedCreateNestedManyWithoutUserInput;
    vehicle?: vehicleUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutOperatorInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutOperatorInput, userUncheckedCreateWithoutOperatorInput>;
  };

  export type toll_boothCreateWithoutOperatorInput = {
    id?: string;
    location: string;
    status?: string | null;
    toll_amount?: number | null;
    operational_hours?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    journey?: journeyCreateNestedManyWithoutToll_boothInput;
    payment?: paymentCreateNestedManyWithoutToll_boothInput;
  };

  export type toll_boothUncheckedCreateWithoutOperatorInput = {
    id?: string;
    location: string;
    status?: string | null;
    toll_amount?: number | null;
    operational_hours?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    journey?: journeyUncheckedCreateNestedManyWithoutToll_boothInput;
    payment?: paymentUncheckedCreateNestedManyWithoutToll_boothInput;
  };

  export type toll_boothCreateOrConnectWithoutOperatorInput = {
    where: toll_boothWhereUniqueInput;
    create: XOR<toll_boothCreateWithoutOperatorInput, toll_boothUncheckedCreateWithoutOperatorInput>;
  };

  export type toll_boothCreateManyOperatorInputEnvelope = {
    data: toll_boothCreateManyOperatorInput | toll_boothCreateManyOperatorInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithoutOperatorInput = {
    update: XOR<userUpdateWithoutOperatorInput, userUncheckedUpdateWithoutOperatorInput>;
    create: XOR<userCreateWithoutOperatorInput, userUncheckedCreateWithoutOperatorInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutOperatorInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutOperatorInput, userUncheckedUpdateWithoutOperatorInput>;
  };

  export type userUpdateWithoutOperatorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: paymentUpdateManyWithoutUserNestedInput;
    vehicle?: vehicleUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutOperatorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: paymentUncheckedUpdateManyWithoutUserNestedInput;
    vehicle?: vehicleUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type toll_boothUpsertWithWhereUniqueWithoutOperatorInput = {
    where: toll_boothWhereUniqueInput;
    update: XOR<toll_boothUpdateWithoutOperatorInput, toll_boothUncheckedUpdateWithoutOperatorInput>;
    create: XOR<toll_boothCreateWithoutOperatorInput, toll_boothUncheckedCreateWithoutOperatorInput>;
  };

  export type toll_boothUpdateWithWhereUniqueWithoutOperatorInput = {
    where: toll_boothWhereUniqueInput;
    data: XOR<toll_boothUpdateWithoutOperatorInput, toll_boothUncheckedUpdateWithoutOperatorInput>;
  };

  export type toll_boothUpdateManyWithWhereWithoutOperatorInput = {
    where: toll_boothScalarWhereInput;
    data: XOR<toll_boothUpdateManyMutationInput, toll_boothUncheckedUpdateManyWithoutOperatorInput>;
  };

  export type toll_boothScalarWhereInput = {
    AND?: toll_boothScalarWhereInput | toll_boothScalarWhereInput[];
    OR?: toll_boothScalarWhereInput[];
    NOT?: toll_boothScalarWhereInput | toll_boothScalarWhereInput[];
    id?: UuidFilter<'toll_booth'> | string;
    location?: StringFilter<'toll_booth'> | string;
    operator_id?: UuidFilter<'toll_booth'> | string;
    status?: StringNullableFilter<'toll_booth'> | string | null;
    toll_amount?: IntNullableFilter<'toll_booth'> | number | null;
    operational_hours?: StringNullableFilter<'toll_booth'> | string | null;
    created_at?: DateTimeFilter<'toll_booth'> | Date | string;
    updated_at?: DateTimeFilter<'toll_booth'> | Date | string;
  };

  export type journeyCreateWithoutPaymentInput = {
    id?: string;
    start_time?: Date | string | null;
    end_time?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    toll_booth: toll_boothCreateNestedOneWithoutJourneyInput;
    vehicle: vehicleCreateNestedOneWithoutJourneyInput;
  };

  export type journeyUncheckedCreateWithoutPaymentInput = {
    id?: string;
    start_time?: Date | string | null;
    end_time?: Date | string | null;
    vehicle_id: string;
    toll_booth_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type journeyCreateOrConnectWithoutPaymentInput = {
    where: journeyWhereUniqueInput;
    create: XOR<journeyCreateWithoutPaymentInput, journeyUncheckedCreateWithoutPaymentInput>;
  };

  export type journeyCreateManyPaymentInputEnvelope = {
    data: journeyCreateManyPaymentInput | journeyCreateManyPaymentInput[];
    skipDuplicates?: boolean;
  };

  export type toll_boothCreateWithoutPaymentInput = {
    id?: string;
    location: string;
    status?: string | null;
    toll_amount?: number | null;
    operational_hours?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    journey?: journeyCreateNestedManyWithoutToll_boothInput;
    operator: operatorCreateNestedOneWithoutToll_boothInput;
  };

  export type toll_boothUncheckedCreateWithoutPaymentInput = {
    id?: string;
    location: string;
    operator_id: string;
    status?: string | null;
    toll_amount?: number | null;
    operational_hours?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    journey?: journeyUncheckedCreateNestedManyWithoutToll_boothInput;
  };

  export type toll_boothCreateOrConnectWithoutPaymentInput = {
    where: toll_boothWhereUniqueInput;
    create: XOR<toll_boothCreateWithoutPaymentInput, toll_boothUncheckedCreateWithoutPaymentInput>;
  };

  export type userCreateWithoutPaymentInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    operator?: operatorCreateNestedManyWithoutUserInput;
    vehicle?: vehicleCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutPaymentInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    operator?: operatorUncheckedCreateNestedManyWithoutUserInput;
    vehicle?: vehicleUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutPaymentInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutPaymentInput, userUncheckedCreateWithoutPaymentInput>;
  };

  export type journeyUpsertWithWhereUniqueWithoutPaymentInput = {
    where: journeyWhereUniqueInput;
    update: XOR<journeyUpdateWithoutPaymentInput, journeyUncheckedUpdateWithoutPaymentInput>;
    create: XOR<journeyCreateWithoutPaymentInput, journeyUncheckedCreateWithoutPaymentInput>;
  };

  export type journeyUpdateWithWhereUniqueWithoutPaymentInput = {
    where: journeyWhereUniqueInput;
    data: XOR<journeyUpdateWithoutPaymentInput, journeyUncheckedUpdateWithoutPaymentInput>;
  };

  export type journeyUpdateManyWithWhereWithoutPaymentInput = {
    where: journeyScalarWhereInput;
    data: XOR<journeyUpdateManyMutationInput, journeyUncheckedUpdateManyWithoutPaymentInput>;
  };

  export type journeyScalarWhereInput = {
    AND?: journeyScalarWhereInput | journeyScalarWhereInput[];
    OR?: journeyScalarWhereInput[];
    NOT?: journeyScalarWhereInput | journeyScalarWhereInput[];
    id?: UuidFilter<'journey'> | string;
    start_time?: DateTimeNullableFilter<'journey'> | Date | string | null;
    end_time?: DateTimeNullableFilter<'journey'> | Date | string | null;
    vehicle_id?: UuidFilter<'journey'> | string;
    toll_booth_id?: UuidFilter<'journey'> | string;
    payment_id?: UuidFilter<'journey'> | string;
    created_at?: DateTimeFilter<'journey'> | Date | string;
    updated_at?: DateTimeFilter<'journey'> | Date | string;
  };

  export type toll_boothUpsertWithoutPaymentInput = {
    update: XOR<toll_boothUpdateWithoutPaymentInput, toll_boothUncheckedUpdateWithoutPaymentInput>;
    create: XOR<toll_boothCreateWithoutPaymentInput, toll_boothUncheckedCreateWithoutPaymentInput>;
    where?: toll_boothWhereInput;
  };

  export type toll_boothUpdateToOneWithWhereWithoutPaymentInput = {
    where?: toll_boothWhereInput;
    data: XOR<toll_boothUpdateWithoutPaymentInput, toll_boothUncheckedUpdateWithoutPaymentInput>;
  };

  export type toll_boothUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    toll_amount?: NullableIntFieldUpdateOperationsInput | number | null;
    operational_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    journey?: journeyUpdateManyWithoutToll_boothNestedInput;
    operator?: operatorUpdateOneRequiredWithoutToll_boothNestedInput;
  };

  export type toll_boothUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    operator_id?: StringFieldUpdateOperationsInput | string;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    toll_amount?: NullableIntFieldUpdateOperationsInput | number | null;
    operational_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    journey?: journeyUncheckedUpdateManyWithoutToll_boothNestedInput;
  };

  export type userUpsertWithoutPaymentInput = {
    update: XOR<userUpdateWithoutPaymentInput, userUncheckedUpdateWithoutPaymentInput>;
    create: XOR<userCreateWithoutPaymentInput, userUncheckedCreateWithoutPaymentInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutPaymentInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutPaymentInput, userUncheckedUpdateWithoutPaymentInput>;
  };

  export type userUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    operator?: operatorUpdateManyWithoutUserNestedInput;
    vehicle?: vehicleUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    operator?: operatorUncheckedUpdateManyWithoutUserNestedInput;
    vehicle?: vehicleUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type journeyCreateWithoutToll_boothInput = {
    id?: string;
    start_time?: Date | string | null;
    end_time?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    payment: paymentCreateNestedOneWithoutJourneyInput;
    vehicle: vehicleCreateNestedOneWithoutJourneyInput;
  };

  export type journeyUncheckedCreateWithoutToll_boothInput = {
    id?: string;
    start_time?: Date | string | null;
    end_time?: Date | string | null;
    vehicle_id: string;
    payment_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type journeyCreateOrConnectWithoutToll_boothInput = {
    where: journeyWhereUniqueInput;
    create: XOR<journeyCreateWithoutToll_boothInput, journeyUncheckedCreateWithoutToll_boothInput>;
  };

  export type journeyCreateManyToll_boothInputEnvelope = {
    data: journeyCreateManyToll_boothInput | journeyCreateManyToll_boothInput[];
    skipDuplicates?: boolean;
  };

  export type paymentCreateWithoutToll_boothInput = {
    id?: string;
    amount: number;
    payment_date?: Date | string | null;
    payment_method?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    journey?: journeyCreateNestedManyWithoutPaymentInput;
    user: userCreateNestedOneWithoutPaymentInput;
  };

  export type paymentUncheckedCreateWithoutToll_boothInput = {
    id?: string;
    amount: number;
    payment_date?: Date | string | null;
    payment_method?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    journey?: journeyUncheckedCreateNestedManyWithoutPaymentInput;
  };

  export type paymentCreateOrConnectWithoutToll_boothInput = {
    where: paymentWhereUniqueInput;
    create: XOR<paymentCreateWithoutToll_boothInput, paymentUncheckedCreateWithoutToll_boothInput>;
  };

  export type paymentCreateManyToll_boothInputEnvelope = {
    data: paymentCreateManyToll_boothInput | paymentCreateManyToll_boothInput[];
    skipDuplicates?: boolean;
  };

  export type operatorCreateWithoutToll_boothInput = {
    id?: string;
    description?: string | null;
    operational_hours?: string | null;
    location?: string | null;
    status?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutOperatorInput;
  };

  export type operatorUncheckedCreateWithoutToll_boothInput = {
    id?: string;
    description?: string | null;
    operational_hours?: string | null;
    location?: string | null;
    status?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type operatorCreateOrConnectWithoutToll_boothInput = {
    where: operatorWhereUniqueInput;
    create: XOR<operatorCreateWithoutToll_boothInput, operatorUncheckedCreateWithoutToll_boothInput>;
  };

  export type journeyUpsertWithWhereUniqueWithoutToll_boothInput = {
    where: journeyWhereUniqueInput;
    update: XOR<journeyUpdateWithoutToll_boothInput, journeyUncheckedUpdateWithoutToll_boothInput>;
    create: XOR<journeyCreateWithoutToll_boothInput, journeyUncheckedCreateWithoutToll_boothInput>;
  };

  export type journeyUpdateWithWhereUniqueWithoutToll_boothInput = {
    where: journeyWhereUniqueInput;
    data: XOR<journeyUpdateWithoutToll_boothInput, journeyUncheckedUpdateWithoutToll_boothInput>;
  };

  export type journeyUpdateManyWithWhereWithoutToll_boothInput = {
    where: journeyScalarWhereInput;
    data: XOR<journeyUpdateManyMutationInput, journeyUncheckedUpdateManyWithoutToll_boothInput>;
  };

  export type paymentUpsertWithWhereUniqueWithoutToll_boothInput = {
    where: paymentWhereUniqueInput;
    update: XOR<paymentUpdateWithoutToll_boothInput, paymentUncheckedUpdateWithoutToll_boothInput>;
    create: XOR<paymentCreateWithoutToll_boothInput, paymentUncheckedCreateWithoutToll_boothInput>;
  };

  export type paymentUpdateWithWhereUniqueWithoutToll_boothInput = {
    where: paymentWhereUniqueInput;
    data: XOR<paymentUpdateWithoutToll_boothInput, paymentUncheckedUpdateWithoutToll_boothInput>;
  };

  export type paymentUpdateManyWithWhereWithoutToll_boothInput = {
    where: paymentScalarWhereInput;
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyWithoutToll_boothInput>;
  };

  export type paymentScalarWhereInput = {
    AND?: paymentScalarWhereInput | paymentScalarWhereInput[];
    OR?: paymentScalarWhereInput[];
    NOT?: paymentScalarWhereInput | paymentScalarWhereInput[];
    id?: UuidFilter<'payment'> | string;
    amount?: IntFilter<'payment'> | number;
    payment_date?: DateTimeNullableFilter<'payment'> | Date | string | null;
    payment_method?: StringNullableFilter<'payment'> | string | null;
    user_id?: UuidFilter<'payment'> | string;
    toll_booth_id?: UuidFilter<'payment'> | string;
    created_at?: DateTimeFilter<'payment'> | Date | string;
    updated_at?: DateTimeFilter<'payment'> | Date | string;
  };

  export type operatorUpsertWithoutToll_boothInput = {
    update: XOR<operatorUpdateWithoutToll_boothInput, operatorUncheckedUpdateWithoutToll_boothInput>;
    create: XOR<operatorCreateWithoutToll_boothInput, operatorUncheckedCreateWithoutToll_boothInput>;
    where?: operatorWhereInput;
  };

  export type operatorUpdateToOneWithWhereWithoutToll_boothInput = {
    where?: operatorWhereInput;
    data: XOR<operatorUpdateWithoutToll_boothInput, operatorUncheckedUpdateWithoutToll_boothInput>;
  };

  export type operatorUpdateWithoutToll_boothInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    operational_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutOperatorNestedInput;
  };

  export type operatorUncheckedUpdateWithoutToll_boothInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    operational_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type operatorCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    operational_hours?: string | null;
    location?: string | null;
    status?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    toll_booth?: toll_boothCreateNestedManyWithoutOperatorInput;
  };

  export type operatorUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    operational_hours?: string | null;
    location?: string | null;
    status?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    toll_booth?: toll_boothUncheckedCreateNestedManyWithoutOperatorInput;
  };

  export type operatorCreateOrConnectWithoutUserInput = {
    where: operatorWhereUniqueInput;
    create: XOR<operatorCreateWithoutUserInput, operatorUncheckedCreateWithoutUserInput>;
  };

  export type operatorCreateManyUserInputEnvelope = {
    data: operatorCreateManyUserInput | operatorCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type paymentCreateWithoutUserInput = {
    id?: string;
    amount: number;
    payment_date?: Date | string | null;
    payment_method?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    journey?: journeyCreateNestedManyWithoutPaymentInput;
    toll_booth: toll_boothCreateNestedOneWithoutPaymentInput;
  };

  export type paymentUncheckedCreateWithoutUserInput = {
    id?: string;
    amount: number;
    payment_date?: Date | string | null;
    payment_method?: string | null;
    toll_booth_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    journey?: journeyUncheckedCreateNestedManyWithoutPaymentInput;
  };

  export type paymentCreateOrConnectWithoutUserInput = {
    where: paymentWhereUniqueInput;
    create: XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput>;
  };

  export type paymentCreateManyUserInputEnvelope = {
    data: paymentCreateManyUserInput | paymentCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type vehicleCreateWithoutUserInput = {
    id?: string;
    license_plate: string;
    make?: string | null;
    model?: string | null;
    color?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    journey?: journeyCreateNestedManyWithoutVehicleInput;
  };

  export type vehicleUncheckedCreateWithoutUserInput = {
    id?: string;
    license_plate: string;
    make?: string | null;
    model?: string | null;
    color?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    journey?: journeyUncheckedCreateNestedManyWithoutVehicleInput;
  };

  export type vehicleCreateOrConnectWithoutUserInput = {
    where: vehicleWhereUniqueInput;
    create: XOR<vehicleCreateWithoutUserInput, vehicleUncheckedCreateWithoutUserInput>;
  };

  export type vehicleCreateManyUserInputEnvelope = {
    data: vehicleCreateManyUserInput | vehicleCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type operatorUpsertWithWhereUniqueWithoutUserInput = {
    where: operatorWhereUniqueInput;
    update: XOR<operatorUpdateWithoutUserInput, operatorUncheckedUpdateWithoutUserInput>;
    create: XOR<operatorCreateWithoutUserInput, operatorUncheckedCreateWithoutUserInput>;
  };

  export type operatorUpdateWithWhereUniqueWithoutUserInput = {
    where: operatorWhereUniqueInput;
    data: XOR<operatorUpdateWithoutUserInput, operatorUncheckedUpdateWithoutUserInput>;
  };

  export type operatorUpdateManyWithWhereWithoutUserInput = {
    where: operatorScalarWhereInput;
    data: XOR<operatorUpdateManyMutationInput, operatorUncheckedUpdateManyWithoutUserInput>;
  };

  export type operatorScalarWhereInput = {
    AND?: operatorScalarWhereInput | operatorScalarWhereInput[];
    OR?: operatorScalarWhereInput[];
    NOT?: operatorScalarWhereInput | operatorScalarWhereInput[];
    id?: UuidFilter<'operator'> | string;
    description?: StringNullableFilter<'operator'> | string | null;
    operational_hours?: StringNullableFilter<'operator'> | string | null;
    location?: StringNullableFilter<'operator'> | string | null;
    status?: StringNullableFilter<'operator'> | string | null;
    name?: StringFilter<'operator'> | string;
    created_at?: DateTimeFilter<'operator'> | Date | string;
    updated_at?: DateTimeFilter<'operator'> | Date | string;
    user_id?: UuidFilter<'operator'> | string;
    tenant_id?: StringFilter<'operator'> | string;
  };

  export type paymentUpsertWithWhereUniqueWithoutUserInput = {
    where: paymentWhereUniqueInput;
    update: XOR<paymentUpdateWithoutUserInput, paymentUncheckedUpdateWithoutUserInput>;
    create: XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput>;
  };

  export type paymentUpdateWithWhereUniqueWithoutUserInput = {
    where: paymentWhereUniqueInput;
    data: XOR<paymentUpdateWithoutUserInput, paymentUncheckedUpdateWithoutUserInput>;
  };

  export type paymentUpdateManyWithWhereWithoutUserInput = {
    where: paymentScalarWhereInput;
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyWithoutUserInput>;
  };

  export type vehicleUpsertWithWhereUniqueWithoutUserInput = {
    where: vehicleWhereUniqueInput;
    update: XOR<vehicleUpdateWithoutUserInput, vehicleUncheckedUpdateWithoutUserInput>;
    create: XOR<vehicleCreateWithoutUserInput, vehicleUncheckedCreateWithoutUserInput>;
  };

  export type vehicleUpdateWithWhereUniqueWithoutUserInput = {
    where: vehicleWhereUniqueInput;
    data: XOR<vehicleUpdateWithoutUserInput, vehicleUncheckedUpdateWithoutUserInput>;
  };

  export type vehicleUpdateManyWithWhereWithoutUserInput = {
    where: vehicleScalarWhereInput;
    data: XOR<vehicleUpdateManyMutationInput, vehicleUncheckedUpdateManyWithoutUserInput>;
  };

  export type vehicleScalarWhereInput = {
    AND?: vehicleScalarWhereInput | vehicleScalarWhereInput[];
    OR?: vehicleScalarWhereInput[];
    NOT?: vehicleScalarWhereInput | vehicleScalarWhereInput[];
    id?: UuidFilter<'vehicle'> | string;
    license_plate?: StringFilter<'vehicle'> | string;
    make?: StringNullableFilter<'vehicle'> | string | null;
    model?: StringNullableFilter<'vehicle'> | string | null;
    color?: StringNullableFilter<'vehicle'> | string | null;
    user_id?: UuidFilter<'vehicle'> | string;
    created_at?: DateTimeFilter<'vehicle'> | Date | string;
    updated_at?: DateTimeFilter<'vehicle'> | Date | string;
  };

  export type journeyCreateWithoutVehicleInput = {
    id?: string;
    start_time?: Date | string | null;
    end_time?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    payment: paymentCreateNestedOneWithoutJourneyInput;
    toll_booth: toll_boothCreateNestedOneWithoutJourneyInput;
  };

  export type journeyUncheckedCreateWithoutVehicleInput = {
    id?: string;
    start_time?: Date | string | null;
    end_time?: Date | string | null;
    toll_booth_id: string;
    payment_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type journeyCreateOrConnectWithoutVehicleInput = {
    where: journeyWhereUniqueInput;
    create: XOR<journeyCreateWithoutVehicleInput, journeyUncheckedCreateWithoutVehicleInput>;
  };

  export type journeyCreateManyVehicleInputEnvelope = {
    data: journeyCreateManyVehicleInput | journeyCreateManyVehicleInput[];
    skipDuplicates?: boolean;
  };

  export type userCreateWithoutVehicleInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    operator?: operatorCreateNestedManyWithoutUserInput;
    payment?: paymentCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutVehicleInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    operator?: operatorUncheckedCreateNestedManyWithoutUserInput;
    payment?: paymentUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutVehicleInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutVehicleInput, userUncheckedCreateWithoutVehicleInput>;
  };

  export type journeyUpsertWithWhereUniqueWithoutVehicleInput = {
    where: journeyWhereUniqueInput;
    update: XOR<journeyUpdateWithoutVehicleInput, journeyUncheckedUpdateWithoutVehicleInput>;
    create: XOR<journeyCreateWithoutVehicleInput, journeyUncheckedCreateWithoutVehicleInput>;
  };

  export type journeyUpdateWithWhereUniqueWithoutVehicleInput = {
    where: journeyWhereUniqueInput;
    data: XOR<journeyUpdateWithoutVehicleInput, journeyUncheckedUpdateWithoutVehicleInput>;
  };

  export type journeyUpdateManyWithWhereWithoutVehicleInput = {
    where: journeyScalarWhereInput;
    data: XOR<journeyUpdateManyMutationInput, journeyUncheckedUpdateManyWithoutVehicleInput>;
  };

  export type userUpsertWithoutVehicleInput = {
    update: XOR<userUpdateWithoutVehicleInput, userUncheckedUpdateWithoutVehicleInput>;
    create: XOR<userCreateWithoutVehicleInput, userUncheckedCreateWithoutVehicleInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutVehicleInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutVehicleInput, userUncheckedUpdateWithoutVehicleInput>;
  };

  export type userUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    operator?: operatorUpdateManyWithoutUserNestedInput;
    payment?: paymentUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    operator?: operatorUncheckedUpdateManyWithoutUserNestedInput;
    payment?: paymentUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type toll_boothCreateManyOperatorInput = {
    id?: string;
    location: string;
    status?: string | null;
    toll_amount?: number | null;
    operational_hours?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type toll_boothUpdateWithoutOperatorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    toll_amount?: NullableIntFieldUpdateOperationsInput | number | null;
    operational_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    journey?: journeyUpdateManyWithoutToll_boothNestedInput;
    payment?: paymentUpdateManyWithoutToll_boothNestedInput;
  };

  export type toll_boothUncheckedUpdateWithoutOperatorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    toll_amount?: NullableIntFieldUpdateOperationsInput | number | null;
    operational_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    journey?: journeyUncheckedUpdateManyWithoutToll_boothNestedInput;
    payment?: paymentUncheckedUpdateManyWithoutToll_boothNestedInput;
  };

  export type toll_boothUncheckedUpdateManyWithoutOperatorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    toll_amount?: NullableIntFieldUpdateOperationsInput | number | null;
    operational_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type journeyCreateManyPaymentInput = {
    id?: string;
    start_time?: Date | string | null;
    end_time?: Date | string | null;
    vehicle_id: string;
    toll_booth_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type journeyUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    toll_booth?: toll_boothUpdateOneRequiredWithoutJourneyNestedInput;
    vehicle?: vehicleUpdateOneRequiredWithoutJourneyNestedInput;
  };

  export type journeyUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    vehicle_id?: StringFieldUpdateOperationsInput | string;
    toll_booth_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type journeyUncheckedUpdateManyWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    vehicle_id?: StringFieldUpdateOperationsInput | string;
    toll_booth_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type journeyCreateManyToll_boothInput = {
    id?: string;
    start_time?: Date | string | null;
    end_time?: Date | string | null;
    vehicle_id: string;
    payment_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type paymentCreateManyToll_boothInput = {
    id?: string;
    amount: number;
    payment_date?: Date | string | null;
    payment_method?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type journeyUpdateWithoutToll_boothInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: paymentUpdateOneRequiredWithoutJourneyNestedInput;
    vehicle?: vehicleUpdateOneRequiredWithoutJourneyNestedInput;
  };

  export type journeyUncheckedUpdateWithoutToll_boothInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    vehicle_id?: StringFieldUpdateOperationsInput | string;
    payment_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type journeyUncheckedUpdateManyWithoutToll_boothInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    vehicle_id?: StringFieldUpdateOperationsInput | string;
    payment_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type paymentUpdateWithoutToll_boothInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    journey?: journeyUpdateManyWithoutPaymentNestedInput;
    user?: userUpdateOneRequiredWithoutPaymentNestedInput;
  };

  export type paymentUncheckedUpdateWithoutToll_boothInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    journey?: journeyUncheckedUpdateManyWithoutPaymentNestedInput;
  };

  export type paymentUncheckedUpdateManyWithoutToll_boothInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type operatorCreateManyUserInput = {
    id?: string;
    description?: string | null;
    operational_hours?: string | null;
    location?: string | null;
    status?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type paymentCreateManyUserInput = {
    id?: string;
    amount: number;
    payment_date?: Date | string | null;
    payment_method?: string | null;
    toll_booth_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type vehicleCreateManyUserInput = {
    id?: string;
    license_plate: string;
    make?: string | null;
    model?: string | null;
    color?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type operatorUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    operational_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    toll_booth?: toll_boothUpdateManyWithoutOperatorNestedInput;
  };

  export type operatorUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    operational_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    toll_booth?: toll_boothUncheckedUpdateManyWithoutOperatorNestedInput;
  };

  export type operatorUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    operational_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type paymentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    journey?: journeyUpdateManyWithoutPaymentNestedInput;
    toll_booth?: toll_boothUpdateOneRequiredWithoutPaymentNestedInput;
  };

  export type paymentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    toll_booth_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    journey?: journeyUncheckedUpdateManyWithoutPaymentNestedInput;
  };

  export type paymentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    toll_booth_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type vehicleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    license_plate?: StringFieldUpdateOperationsInput | string;
    make?: NullableStringFieldUpdateOperationsInput | string | null;
    model?: NullableStringFieldUpdateOperationsInput | string | null;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    journey?: journeyUpdateManyWithoutVehicleNestedInput;
  };

  export type vehicleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    license_plate?: StringFieldUpdateOperationsInput | string;
    make?: NullableStringFieldUpdateOperationsInput | string | null;
    model?: NullableStringFieldUpdateOperationsInput | string | null;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    journey?: journeyUncheckedUpdateManyWithoutVehicleNestedInput;
  };

  export type vehicleUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    license_plate?: StringFieldUpdateOperationsInput | string;
    make?: NullableStringFieldUpdateOperationsInput | string | null;
    model?: NullableStringFieldUpdateOperationsInput | string | null;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type journeyCreateManyVehicleInput = {
    id?: string;
    start_time?: Date | string | null;
    end_time?: Date | string | null;
    toll_booth_id: string;
    payment_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type journeyUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: paymentUpdateOneRequiredWithoutJourneyNestedInput;
    toll_booth?: toll_boothUpdateOneRequiredWithoutJourneyNestedInput;
  };

  export type journeyUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    toll_booth_id?: StringFieldUpdateOperationsInput | string;
    payment_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type journeyUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    toll_booth_id?: StringFieldUpdateOperationsInput | string;
    payment_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use OperatorCountOutputTypeDefaultArgs instead
   */
  export type OperatorCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    OperatorCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use PaymentCountOutputTypeDefaultArgs instead
   */
  export type PaymentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    PaymentCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use Toll_boothCountOutputTypeDefaultArgs instead
   */
  export type Toll_boothCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Toll_boothCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use VehicleCountOutputTypeDefaultArgs instead
   */
  export type VehicleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    VehicleCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use journeyDefaultArgs instead
   */
  export type journeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    journeyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use operatorDefaultArgs instead
   */
  export type operatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    operatorDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use paymentDefaultArgs instead
   */
  export type paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    paymentDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use toll_boothDefaultArgs instead
   */
  export type toll_boothArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    toll_boothDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use vehicleDefaultArgs instead
   */
  export type vehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    vehicleDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
