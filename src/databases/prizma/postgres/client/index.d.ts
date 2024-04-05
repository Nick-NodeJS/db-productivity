/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model CyberSherlock
 *
 */
export type CyberSherlock = $Result.DefaultSelection<Prisma.$CyberSherlockPayload>;
/**
 * Model Google
 *
 */
export type Google = $Result.DefaultSelection<Prisma.$GooglePayload>;
/**
 * Model Facebook
 *
 */
export type Facebook = $Result.DefaultSelection<Prisma.$FacebookPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const Profiles: {
    CyberScherlock: 'CyberScherlock';
    Facebook: 'Facebook';
    Google: 'Google';
  };

  export type Profiles = (typeof Profiles)[keyof typeof Profiles];
}

export type Profiles = $Enums.Profiles;

export const Profiles: typeof $Enums.Profiles;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

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
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.cyberSherlock`: Exposes CRUD operations for the **CyberSherlock** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more CyberSherlocks
   * const cyberSherlocks = await prisma.cyberSherlock.findMany()
   * ```
   */
  get cyberSherlock(): Prisma.CyberSherlockDelegate<ExtArgs>;

  /**
   * `prisma.google`: Exposes CRUD operations for the **Google** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Googles
   * const googles = await prisma.google.findMany()
   * ```
   */
  get google(): Prisma.GoogleDelegate<ExtArgs>;

  /**
   * `prisma.facebook`: Exposes CRUD operations for the **Facebook** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Facebooks
   * const facebooks = await prisma.facebook.findMany()
   * ```
   */
  get facebook(): Prisma.FacebookDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.11.0
   * Query Engine version: 473ed3124229e22d881cb7addf559799debae1ab
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
  export type InputJsonValue =
    | string
    | number
    | boolean
    | InputJsonObject
    | InputJsonArray
    | { toJSON(): unknown };

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
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<
    ReturnType<T>
  >;

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
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
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
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (
    k: infer I,
  ) => void
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
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

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

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> =
    IsObject<T> extends True ? U : T;

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
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<
    T,
    MaybeTupleToUnion<K>
  >;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: 'User';
    CyberSherlock: 'CyberSherlock';
    Google: 'Google';
    Facebook: 'Facebook';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb
    extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'cyberSherlock' | 'google' | 'facebook';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      CyberSherlock: {
        payload: Prisma.$CyberSherlockPayload<ExtArgs>;
        fields: Prisma.CyberSherlockFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CyberSherlockFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CyberSherlockPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CyberSherlockFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CyberSherlockPayload>;
          };
          findFirst: {
            args: Prisma.CyberSherlockFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CyberSherlockPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CyberSherlockFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CyberSherlockPayload>;
          };
          findMany: {
            args: Prisma.CyberSherlockFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CyberSherlockPayload>[];
          };
          create: {
            args: Prisma.CyberSherlockCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CyberSherlockPayload>;
          };
          createMany: {
            args: Prisma.CyberSherlockCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.CyberSherlockDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CyberSherlockPayload>;
          };
          update: {
            args: Prisma.CyberSherlockUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CyberSherlockPayload>;
          };
          deleteMany: {
            args: Prisma.CyberSherlockDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.CyberSherlockUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.CyberSherlockUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CyberSherlockPayload>;
          };
          aggregate: {
            args: Prisma.CyberSherlockAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCyberSherlock>;
          };
          groupBy: {
            args: Prisma.CyberSherlockGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CyberSherlockGroupByOutputType>[];
          };
          count: {
            args: Prisma.CyberSherlockCountArgs<ExtArgs>;
            result: $Utils.Optional<CyberSherlockCountAggregateOutputType> | number;
          };
        };
      };
      Google: {
        payload: Prisma.$GooglePayload<ExtArgs>;
        fields: Prisma.GoogleFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.GoogleFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GooglePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.GoogleFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GooglePayload>;
          };
          findFirst: {
            args: Prisma.GoogleFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GooglePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.GoogleFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GooglePayload>;
          };
          findMany: {
            args: Prisma.GoogleFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GooglePayload>[];
          };
          create: {
            args: Prisma.GoogleCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GooglePayload>;
          };
          createMany: {
            args: Prisma.GoogleCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.GoogleDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GooglePayload>;
          };
          update: {
            args: Prisma.GoogleUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GooglePayload>;
          };
          deleteMany: {
            args: Prisma.GoogleDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.GoogleUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.GoogleUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GooglePayload>;
          };
          aggregate: {
            args: Prisma.GoogleAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateGoogle>;
          };
          groupBy: {
            args: Prisma.GoogleGroupByArgs<ExtArgs>;
            result: $Utils.Optional<GoogleGroupByOutputType>[];
          };
          count: {
            args: Prisma.GoogleCountArgs<ExtArgs>;
            result: $Utils.Optional<GoogleCountAggregateOutputType> | number;
          };
        };
      };
      Facebook: {
        payload: Prisma.$FacebookPayload<ExtArgs>;
        fields: Prisma.FacebookFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.FacebookFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FacebookPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.FacebookFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FacebookPayload>;
          };
          findFirst: {
            args: Prisma.FacebookFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FacebookPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.FacebookFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FacebookPayload>;
          };
          findMany: {
            args: Prisma.FacebookFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FacebookPayload>[];
          };
          create: {
            args: Prisma.FacebookCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FacebookPayload>;
          };
          createMany: {
            args: Prisma.FacebookCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.FacebookDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FacebookPayload>;
          };
          update: {
            args: Prisma.FacebookUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FacebookPayload>;
          };
          deleteMany: {
            args: Prisma.FacebookDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.FacebookUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.FacebookUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FacebookPayload>;
          };
          aggregate: {
            args: Prisma.FacebookAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateFacebook>;
          };
          groupBy: {
            args: Prisma.FacebookGroupByArgs<ExtArgs>;
            result: $Utils.Optional<FacebookGroupByOutputType>[];
          };
          count: {
            args: Prisma.FacebookCountArgs<ExtArgs>;
            result: $Utils.Optional<FacebookCountAggregateOutputType> | number;
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
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
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
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
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
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserAvgAggregateOutputType = {
    id: number | null;
  };

  export type UserSumAggregateOutputType = {
    id: number | null;
  };

  export type UserMinAggregateOutputType = {
    id: number | null;
    activeProfile: $Enums.Profiles | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: number | null;
    activeProfile: $Enums.Profiles | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    activeProfile: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type UserAvgAggregateInputType = {
    id?: true;
  };

  export type UserSumAggregateInputType = {
    id?: true;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    activeProfile?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    activeProfile?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    activeProfile?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: UserAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: UserSumAggregateInputType;
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

  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: UserWhereInput;
      orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[];
      by: UserScalarFieldEnum[] | UserScalarFieldEnum;
      having?: UserScalarWhereWithAggregatesInput;
      take?: number;
      skip?: number;
      _count?: UserCountAggregateInputType | true;
      _avg?: UserAvgAggregateInputType;
      _sum?: UserSumAggregateInputType;
      _min?: UserMinAggregateInputType;
      _max?: UserMaxAggregateInputType;
    };

  export type UserGroupByOutputType = {
    id: number;
    activeProfile: $Enums.Profiles;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
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

  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        activeProfile?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        cyberSherlock?: boolean | User$cyberSherlockArgs<ExtArgs>;
        google?: boolean | User$googleArgs<ExtArgs>;
        facebook?: boolean | User$facebookArgs<ExtArgs>;
      },
      ExtArgs['result']['user']
    >;

  export type UserSelectScalar = {
    id?: boolean;
    activeProfile?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cyberSherlock?: boolean | User$cyberSherlockArgs<ExtArgs>;
    google?: boolean | User$googleArgs<ExtArgs>;
    facebook?: boolean | User$facebookArgs<ExtArgs>;
  };

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'User';
    objects: {
      cyberSherlock: Prisma.$CyberSherlockPayload<ExtArgs> | null;
      google: Prisma.$GooglePayload<ExtArgs> | null;
      facebook: Prisma.$FacebookPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        activeProfile: $Enums.Profiles;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<
    Prisma.$UserPayload,
    S
  >;

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    UserFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User']; meta: { name: 'User' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
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
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    cyberSherlock<T extends User$cyberSherlockArgs<ExtArgs> = {}>(
      args?: Subset<T, User$cyberSherlockArgs<ExtArgs>>,
    ): Prisma__CyberSherlockClient<
      $Result.GetResult<Prisma.$CyberSherlockPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null,
      null,
      ExtArgs
    >;

    google<T extends User$googleArgs<ExtArgs> = {}>(
      args?: Subset<T, User$googleArgs<ExtArgs>>,
    ): Prisma__GoogleClient<
      $Result.GetResult<Prisma.$GooglePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null,
      null,
      ExtArgs
    >;

    facebook<T extends User$facebookArgs<ExtArgs> = {}>(
      args?: Subset<T, User$facebookArgs<ExtArgs>>,
    ): Prisma__FacebookClient<
      $Result.GetResult<Prisma.$FacebookPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null,
      null,
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'Int'>;
    readonly activeProfile: FieldRef<'User', 'Profiles'>;
    readonly createdAt: FieldRef<'User', 'DateTime'>;
    readonly updatedAt: FieldRef<'User', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the User
       */
      select?: UserSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: UserInclude<ExtArgs> | null;
      /**
       * Filter, which Users to fetch.
       */
      where?: UserWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Users to fetch.
       */
      orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for listing Users.
       */
      cursor?: UserWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Users from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Users.
       */
      skip?: number;
      distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
    };

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
  };

  /**
   * User.cyberSherlock
   */
  export type User$cyberSherlockArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CyberSherlock
     */
    select?: CyberSherlockSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CyberSherlockInclude<ExtArgs> | null;
    where?: CyberSherlockWhereInput;
  };

  /**
   * User.google
   */
  export type User$googleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Google
       */
      select?: GoogleSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: GoogleInclude<ExtArgs> | null;
      where?: GoogleWhereInput;
    };

  /**
   * User.facebook
   */
  export type User$facebookArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Facebook
     */
    select?: FacebookSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacebookInclude<ExtArgs> | null;
    where?: FacebookWhereInput;
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the User
       */
      select?: UserSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: UserInclude<ExtArgs> | null;
    };

  /**
   * Model CyberSherlock
   */

  export type AggregateCyberSherlock = {
    _count: CyberSherlockCountAggregateOutputType | null;
    _avg: CyberSherlockAvgAggregateOutputType | null;
    _sum: CyberSherlockSumAggregateOutputType | null;
    _min: CyberSherlockMinAggregateOutputType | null;
    _max: CyberSherlockMaxAggregateOutputType | null;
  };

  export type CyberSherlockAvgAggregateOutputType = {
    id: number | null;
    userId: number | null;
  };

  export type CyberSherlockSumAggregateOutputType = {
    id: number | null;
    userId: number | null;
  };

  export type CyberSherlockMinAggregateOutputType = {
    id: number | null;
    userId: number | null;
    name: string | null;
    email: string | null;
    emailVerified: boolean | null;
    phone: string | null;
    phone_verified: boolean | null;
    picture: string | null;
    hash: string | null;
  };

  export type CyberSherlockMaxAggregateOutputType = {
    id: number | null;
    userId: number | null;
    name: string | null;
    email: string | null;
    emailVerified: boolean | null;
    phone: string | null;
    phone_verified: boolean | null;
    picture: string | null;
    hash: string | null;
  };

  export type CyberSherlockCountAggregateOutputType = {
    id: number;
    userId: number;
    name: number;
    email: number;
    emailVerified: number;
    phone: number;
    phone_verified: number;
    picture: number;
    hash: number;
    _all: number;
  };

  export type CyberSherlockAvgAggregateInputType = {
    id?: true;
    userId?: true;
  };

  export type CyberSherlockSumAggregateInputType = {
    id?: true;
    userId?: true;
  };

  export type CyberSherlockMinAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    email?: true;
    emailVerified?: true;
    phone?: true;
    phone_verified?: true;
    picture?: true;
    hash?: true;
  };

  export type CyberSherlockMaxAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    email?: true;
    emailVerified?: true;
    phone?: true;
    phone_verified?: true;
    picture?: true;
    hash?: true;
  };

  export type CyberSherlockCountAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    email?: true;
    emailVerified?: true;
    phone?: true;
    phone_verified?: true;
    picture?: true;
    hash?: true;
    _all?: true;
  };

  export type CyberSherlockAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which CyberSherlock to aggregate.
     */
    where?: CyberSherlockWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CyberSherlocks to fetch.
     */
    orderBy?: CyberSherlockOrderByWithRelationInput | CyberSherlockOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CyberSherlockWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CyberSherlocks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CyberSherlocks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CyberSherlocks
     **/
    _count?: true | CyberSherlockCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CyberSherlockAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CyberSherlockSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CyberSherlockMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CyberSherlockMaxAggregateInputType;
  };

  export type GetCyberSherlockAggregateType<T extends CyberSherlockAggregateArgs> = {
    [P in keyof T & keyof AggregateCyberSherlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCyberSherlock[P]>
      : GetScalarType<T[P], AggregateCyberSherlock[P]>;
  };

  export type CyberSherlockGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CyberSherlockWhereInput;
    orderBy?: CyberSherlockOrderByWithAggregationInput | CyberSherlockOrderByWithAggregationInput[];
    by: CyberSherlockScalarFieldEnum[] | CyberSherlockScalarFieldEnum;
    having?: CyberSherlockScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CyberSherlockCountAggregateInputType | true;
    _avg?: CyberSherlockAvgAggregateInputType;
    _sum?: CyberSherlockSumAggregateInputType;
    _min?: CyberSherlockMinAggregateInputType;
    _max?: CyberSherlockMaxAggregateInputType;
  };

  export type CyberSherlockGroupByOutputType = {
    id: number;
    userId: number;
    name: string;
    email: string;
    emailVerified: boolean;
    phone: string;
    phone_verified: boolean;
    picture: string;
    hash: string;
    _count: CyberSherlockCountAggregateOutputType | null;
    _avg: CyberSherlockAvgAggregateOutputType | null;
    _sum: CyberSherlockSumAggregateOutputType | null;
    _min: CyberSherlockMinAggregateOutputType | null;
    _max: CyberSherlockMaxAggregateOutputType | null;
  };

  type GetCyberSherlockGroupByPayload<T extends CyberSherlockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CyberSherlockGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CyberSherlockGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CyberSherlockGroupByOutputType[P]>
          : GetScalarType<T[P], CyberSherlockGroupByOutputType[P]>;
      }
    >
  >;

  export type CyberSherlockSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      name?: boolean;
      email?: boolean;
      emailVerified?: boolean;
      phone?: boolean;
      phone_verified?: boolean;
      picture?: boolean;
      hash?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['cyberSherlock']
  >;

  export type CyberSherlockSelectScalar = {
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    email?: boolean;
    emailVerified?: boolean;
    phone?: boolean;
    phone_verified?: boolean;
    picture?: boolean;
    hash?: boolean;
  };

  export type CyberSherlockInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $CyberSherlockPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'CyberSherlock';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        userId: number;
        name: string;
        email: string;
        emailVerified: boolean;
        phone: string;
        phone_verified: boolean;
        picture: string;
        hash: string;
      },
      ExtArgs['result']['cyberSherlock']
    >;
    composites: {};
  };

  type CyberSherlockGetPayload<S extends boolean | null | undefined | CyberSherlockDefaultArgs> =
    $Result.GetResult<Prisma.$CyberSherlockPayload, S>;

  type CyberSherlockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CyberSherlockFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CyberSherlockCountAggregateInputType | true;
    };

  export interface CyberSherlockDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['CyberSherlock'];
      meta: { name: 'CyberSherlock' };
    };
    /**
     * Find zero or one CyberSherlock that matches the filter.
     * @param {CyberSherlockFindUniqueArgs} args - Arguments to find a CyberSherlock
     * @example
     * // Get one CyberSherlock
     * const cyberSherlock = await prisma.cyberSherlock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends CyberSherlockFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CyberSherlockFindUniqueArgs<ExtArgs>>,
    ): Prisma__CyberSherlockClient<
      $Result.GetResult<Prisma.$CyberSherlockPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one CyberSherlock that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {CyberSherlockFindUniqueOrThrowArgs} args - Arguments to find a CyberSherlock
     * @example
     * // Get one CyberSherlock
     * const cyberSherlock = await prisma.cyberSherlock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends CyberSherlockFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CyberSherlockFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__CyberSherlockClient<
      $Result.GetResult<Prisma.$CyberSherlockPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first CyberSherlock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CyberSherlockFindFirstArgs} args - Arguments to find a CyberSherlock
     * @example
     * // Get one CyberSherlock
     * const cyberSherlock = await prisma.cyberSherlock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends CyberSherlockFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CyberSherlockFindFirstArgs<ExtArgs>>,
    ): Prisma__CyberSherlockClient<
      $Result.GetResult<Prisma.$CyberSherlockPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first CyberSherlock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CyberSherlockFindFirstOrThrowArgs} args - Arguments to find a CyberSherlock
     * @example
     * // Get one CyberSherlock
     * const cyberSherlock = await prisma.cyberSherlock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends CyberSherlockFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CyberSherlockFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__CyberSherlockClient<
      $Result.GetResult<Prisma.$CyberSherlockPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more CyberSherlocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CyberSherlockFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CyberSherlocks
     * const cyberSherlocks = await prisma.cyberSherlock.findMany()
     *
     * // Get first 10 CyberSherlocks
     * const cyberSherlocks = await prisma.cyberSherlock.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const cyberSherlockWithIdOnly = await prisma.cyberSherlock.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends CyberSherlockFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CyberSherlockFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$CyberSherlockPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a CyberSherlock.
     * @param {CyberSherlockCreateArgs} args - Arguments to create a CyberSherlock.
     * @example
     * // Create one CyberSherlock
     * const CyberSherlock = await prisma.cyberSherlock.create({
     *   data: {
     *     // ... data to create a CyberSherlock
     *   }
     * })
     *
     **/
    create<T extends CyberSherlockCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CyberSherlockCreateArgs<ExtArgs>>,
    ): Prisma__CyberSherlockClient<
      $Result.GetResult<Prisma.$CyberSherlockPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many CyberSherlocks.
     *     @param {CyberSherlockCreateManyArgs} args - Arguments to create many CyberSherlocks.
     *     @example
     *     // Create many CyberSherlocks
     *     const cyberSherlock = await prisma.cyberSherlock.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends CyberSherlockCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CyberSherlockCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a CyberSherlock.
     * @param {CyberSherlockDeleteArgs} args - Arguments to delete one CyberSherlock.
     * @example
     * // Delete one CyberSherlock
     * const CyberSherlock = await prisma.cyberSherlock.delete({
     *   where: {
     *     // ... filter to delete one CyberSherlock
     *   }
     * })
     *
     **/
    delete<T extends CyberSherlockDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CyberSherlockDeleteArgs<ExtArgs>>,
    ): Prisma__CyberSherlockClient<
      $Result.GetResult<Prisma.$CyberSherlockPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one CyberSherlock.
     * @param {CyberSherlockUpdateArgs} args - Arguments to update one CyberSherlock.
     * @example
     * // Update one CyberSherlock
     * const cyberSherlock = await prisma.cyberSherlock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends CyberSherlockUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CyberSherlockUpdateArgs<ExtArgs>>,
    ): Prisma__CyberSherlockClient<
      $Result.GetResult<Prisma.$CyberSherlockPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more CyberSherlocks.
     * @param {CyberSherlockDeleteManyArgs} args - Arguments to filter CyberSherlocks to delete.
     * @example
     * // Delete a few CyberSherlocks
     * const { count } = await prisma.cyberSherlock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends CyberSherlockDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CyberSherlockDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more CyberSherlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CyberSherlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CyberSherlocks
     * const cyberSherlock = await prisma.cyberSherlock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends CyberSherlockUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CyberSherlockUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one CyberSherlock.
     * @param {CyberSherlockUpsertArgs} args - Arguments to update or create a CyberSherlock.
     * @example
     * // Update or create a CyberSherlock
     * const cyberSherlock = await prisma.cyberSherlock.upsert({
     *   create: {
     *     // ... data to create a CyberSherlock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CyberSherlock we want to update
     *   }
     * })
     **/
    upsert<T extends CyberSherlockUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CyberSherlockUpsertArgs<ExtArgs>>,
    ): Prisma__CyberSherlockClient<
      $Result.GetResult<Prisma.$CyberSherlockPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of CyberSherlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CyberSherlockCountArgs} args - Arguments to filter CyberSherlocks to count.
     * @example
     * // Count the number of CyberSherlocks
     * const count = await prisma.cyberSherlock.count({
     *   where: {
     *     // ... the filter for the CyberSherlocks we want to count
     *   }
     * })
     **/
    count<T extends CyberSherlockCountArgs>(
      args?: Subset<T, CyberSherlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CyberSherlockCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a CyberSherlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CyberSherlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CyberSherlockAggregateArgs>(
      args: Subset<T, CyberSherlockAggregateArgs>,
    ): Prisma.PrismaPromise<GetCyberSherlockAggregateType<T>>;

    /**
     * Group by CyberSherlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CyberSherlockGroupByArgs} args - Group by arguments.
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
      T extends CyberSherlockGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CyberSherlockGroupByArgs['orderBy'] }
        : { orderBy?: CyberSherlockGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, CyberSherlockGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetCyberSherlockGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CyberSherlock model
     */
    readonly fields: CyberSherlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CyberSherlock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CyberSherlockClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
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
   * Fields of the CyberSherlock model
   */
  interface CyberSherlockFieldRefs {
    readonly id: FieldRef<'CyberSherlock', 'Int'>;
    readonly userId: FieldRef<'CyberSherlock', 'Int'>;
    readonly name: FieldRef<'CyberSherlock', 'String'>;
    readonly email: FieldRef<'CyberSherlock', 'String'>;
    readonly emailVerified: FieldRef<'CyberSherlock', 'Boolean'>;
    readonly phone: FieldRef<'CyberSherlock', 'String'>;
    readonly phone_verified: FieldRef<'CyberSherlock', 'Boolean'>;
    readonly picture: FieldRef<'CyberSherlock', 'String'>;
    readonly hash: FieldRef<'CyberSherlock', 'String'>;
  }

  // Custom InputTypes

  /**
   * CyberSherlock findUnique
   */
  export type CyberSherlockFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CyberSherlock
     */
    select?: CyberSherlockSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CyberSherlockInclude<ExtArgs> | null;
    /**
     * Filter, which CyberSherlock to fetch.
     */
    where: CyberSherlockWhereUniqueInput;
  };

  /**
   * CyberSherlock findUniqueOrThrow
   */
  export type CyberSherlockFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CyberSherlock
     */
    select?: CyberSherlockSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CyberSherlockInclude<ExtArgs> | null;
    /**
     * Filter, which CyberSherlock to fetch.
     */
    where: CyberSherlockWhereUniqueInput;
  };

  /**
   * CyberSherlock findFirst
   */
  export type CyberSherlockFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CyberSherlock
     */
    select?: CyberSherlockSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CyberSherlockInclude<ExtArgs> | null;
    /**
     * Filter, which CyberSherlock to fetch.
     */
    where?: CyberSherlockWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CyberSherlocks to fetch.
     */
    orderBy?: CyberSherlockOrderByWithRelationInput | CyberSherlockOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CyberSherlocks.
     */
    cursor?: CyberSherlockWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CyberSherlocks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CyberSherlocks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CyberSherlocks.
     */
    distinct?: CyberSherlockScalarFieldEnum | CyberSherlockScalarFieldEnum[];
  };

  /**
   * CyberSherlock findFirstOrThrow
   */
  export type CyberSherlockFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CyberSherlock
     */
    select?: CyberSherlockSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CyberSherlockInclude<ExtArgs> | null;
    /**
     * Filter, which CyberSherlock to fetch.
     */
    where?: CyberSherlockWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CyberSherlocks to fetch.
     */
    orderBy?: CyberSherlockOrderByWithRelationInput | CyberSherlockOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CyberSherlocks.
     */
    cursor?: CyberSherlockWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CyberSherlocks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CyberSherlocks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CyberSherlocks.
     */
    distinct?: CyberSherlockScalarFieldEnum | CyberSherlockScalarFieldEnum[];
  };

  /**
   * CyberSherlock findMany
   */
  export type CyberSherlockFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CyberSherlock
     */
    select?: CyberSherlockSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CyberSherlockInclude<ExtArgs> | null;
    /**
     * Filter, which CyberSherlocks to fetch.
     */
    where?: CyberSherlockWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CyberSherlocks to fetch.
     */
    orderBy?: CyberSherlockOrderByWithRelationInput | CyberSherlockOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CyberSherlocks.
     */
    cursor?: CyberSherlockWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CyberSherlocks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CyberSherlocks.
     */
    skip?: number;
    distinct?: CyberSherlockScalarFieldEnum | CyberSherlockScalarFieldEnum[];
  };

  /**
   * CyberSherlock create
   */
  export type CyberSherlockCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CyberSherlock
     */
    select?: CyberSherlockSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CyberSherlockInclude<ExtArgs> | null;
    /**
     * The data needed to create a CyberSherlock.
     */
    data: XOR<CyberSherlockCreateInput, CyberSherlockUncheckedCreateInput>;
  };

  /**
   * CyberSherlock createMany
   */
  export type CyberSherlockCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many CyberSherlocks.
     */
    data: CyberSherlockCreateManyInput | CyberSherlockCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * CyberSherlock update
   */
  export type CyberSherlockUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CyberSherlock
     */
    select?: CyberSherlockSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CyberSherlockInclude<ExtArgs> | null;
    /**
     * The data needed to update a CyberSherlock.
     */
    data: XOR<CyberSherlockUpdateInput, CyberSherlockUncheckedUpdateInput>;
    /**
     * Choose, which CyberSherlock to update.
     */
    where: CyberSherlockWhereUniqueInput;
  };

  /**
   * CyberSherlock updateMany
   */
  export type CyberSherlockUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update CyberSherlocks.
     */
    data: XOR<CyberSherlockUpdateManyMutationInput, CyberSherlockUncheckedUpdateManyInput>;
    /**
     * Filter which CyberSherlocks to update
     */
    where?: CyberSherlockWhereInput;
  };

  /**
   * CyberSherlock upsert
   */
  export type CyberSherlockUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CyberSherlock
     */
    select?: CyberSherlockSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CyberSherlockInclude<ExtArgs> | null;
    /**
     * The filter to search for the CyberSherlock to update in case it exists.
     */
    where: CyberSherlockWhereUniqueInput;
    /**
     * In case the CyberSherlock found by the `where` argument doesn't exist, create a new CyberSherlock with this data.
     */
    create: XOR<CyberSherlockCreateInput, CyberSherlockUncheckedCreateInput>;
    /**
     * In case the CyberSherlock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CyberSherlockUpdateInput, CyberSherlockUncheckedUpdateInput>;
  };

  /**
   * CyberSherlock delete
   */
  export type CyberSherlockDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CyberSherlock
     */
    select?: CyberSherlockSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CyberSherlockInclude<ExtArgs> | null;
    /**
     * Filter which CyberSherlock to delete.
     */
    where: CyberSherlockWhereUniqueInput;
  };

  /**
   * CyberSherlock deleteMany
   */
  export type CyberSherlockDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which CyberSherlocks to delete
     */
    where?: CyberSherlockWhereInput;
  };

  /**
   * CyberSherlock without action
   */
  export type CyberSherlockDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CyberSherlock
     */
    select?: CyberSherlockSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CyberSherlockInclude<ExtArgs> | null;
  };

  /**
   * Model Google
   */

  export type AggregateGoogle = {
    _count: GoogleCountAggregateOutputType | null;
    _avg: GoogleAvgAggregateOutputType | null;
    _sum: GoogleSumAggregateOutputType | null;
    _min: GoogleMinAggregateOutputType | null;
    _max: GoogleMaxAggregateOutputType | null;
  };

  export type GoogleAvgAggregateOutputType = {
    id: number | null;
    userId: number | null;
  };

  export type GoogleSumAggregateOutputType = {
    id: number | null;
    userId: number | null;
  };

  export type GoogleMinAggregateOutputType = {
    id: number | null;
    userId: number | null;
    name: string | null;
    email: string | null;
    emailVerified: boolean | null;
    picture: string | null;
    hash: string | null;
  };

  export type GoogleMaxAggregateOutputType = {
    id: number | null;
    userId: number | null;
    name: string | null;
    email: string | null;
    emailVerified: boolean | null;
    picture: string | null;
    hash: string | null;
  };

  export type GoogleCountAggregateOutputType = {
    id: number;
    userId: number;
    name: number;
    email: number;
    emailVerified: number;
    picture: number;
    hash: number;
    _all: number;
  };

  export type GoogleAvgAggregateInputType = {
    id?: true;
    userId?: true;
  };

  export type GoogleSumAggregateInputType = {
    id?: true;
    userId?: true;
  };

  export type GoogleMinAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    email?: true;
    emailVerified?: true;
    picture?: true;
    hash?: true;
  };

  export type GoogleMaxAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    email?: true;
    emailVerified?: true;
    picture?: true;
    hash?: true;
  };

  export type GoogleCountAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    email?: true;
    emailVerified?: true;
    picture?: true;
    hash?: true;
    _all?: true;
  };

  export type GoogleAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Google to aggregate.
     */
    where?: GoogleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Googles to fetch.
     */
    orderBy?: GoogleOrderByWithRelationInput | GoogleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: GoogleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Googles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Googles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Googles
     **/
    _count?: true | GoogleCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: GoogleAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: GoogleSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: GoogleMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: GoogleMaxAggregateInputType;
  };

  export type GetGoogleAggregateType<T extends GoogleAggregateArgs> = {
    [P in keyof T & keyof AggregateGoogle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoogle[P]>
      : GetScalarType<T[P], AggregateGoogle[P]>;
  };

  export type GoogleGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: GoogleWhereInput;
    orderBy?: GoogleOrderByWithAggregationInput | GoogleOrderByWithAggregationInput[];
    by: GoogleScalarFieldEnum[] | GoogleScalarFieldEnum;
    having?: GoogleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GoogleCountAggregateInputType | true;
    _avg?: GoogleAvgAggregateInputType;
    _sum?: GoogleSumAggregateInputType;
    _min?: GoogleMinAggregateInputType;
    _max?: GoogleMaxAggregateInputType;
  };

  export type GoogleGroupByOutputType = {
    id: number;
    userId: number;
    name: string;
    email: string;
    emailVerified: boolean;
    picture: string;
    hash: string;
    _count: GoogleCountAggregateOutputType | null;
    _avg: GoogleAvgAggregateOutputType | null;
    _sum: GoogleSumAggregateOutputType | null;
    _min: GoogleMinAggregateOutputType | null;
    _max: GoogleMaxAggregateOutputType | null;
  };

  type GetGoogleGroupByPayload<T extends GoogleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoogleGroupByOutputType, T['by']> & {
        [P in keyof T & keyof GoogleGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], GoogleGroupByOutputType[P]>
          : GetScalarType<T[P], GoogleGroupByOutputType[P]>;
      }
    >
  >;

  export type GoogleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        userId?: boolean;
        name?: boolean;
        email?: boolean;
        emailVerified?: boolean;
        picture?: boolean;
        hash?: boolean;
        user?: boolean | UserDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['google']
    >;

  export type GoogleSelectScalar = {
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    email?: boolean;
    emailVerified?: boolean;
    picture?: boolean;
    hash?: boolean;
  };

  export type GoogleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $GooglePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'Google';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        userId: number;
        name: string;
        email: string;
        emailVerified: boolean;
        picture: string;
        hash: string;
      },
      ExtArgs['result']['google']
    >;
    composites: {};
  };

  type GoogleGetPayload<S extends boolean | null | undefined | GoogleDefaultArgs> =
    $Result.GetResult<Prisma.$GooglePayload, S>;

  type GoogleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    GoogleFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: GoogleCountAggregateInputType | true;
  };

  export interface GoogleDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Google']; meta: { name: 'Google' } };
    /**
     * Find zero or one Google that matches the filter.
     * @param {GoogleFindUniqueArgs} args - Arguments to find a Google
     * @example
     * // Get one Google
     * const google = await prisma.google.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends GoogleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GoogleFindUniqueArgs<ExtArgs>>,
    ): Prisma__GoogleClient<
      $Result.GetResult<Prisma.$GooglePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Google that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {GoogleFindUniqueOrThrowArgs} args - Arguments to find a Google
     * @example
     * // Get one Google
     * const google = await prisma.google.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends GoogleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GoogleFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__GoogleClient<
      $Result.GetResult<Prisma.$GooglePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Google that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleFindFirstArgs} args - Arguments to find a Google
     * @example
     * // Get one Google
     * const google = await prisma.google.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends GoogleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GoogleFindFirstArgs<ExtArgs>>,
    ): Prisma__GoogleClient<
      $Result.GetResult<Prisma.$GooglePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Google that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleFindFirstOrThrowArgs} args - Arguments to find a Google
     * @example
     * // Get one Google
     * const google = await prisma.google.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends GoogleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GoogleFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__GoogleClient<
      $Result.GetResult<Prisma.$GooglePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Googles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Googles
     * const googles = await prisma.google.findMany()
     *
     * // Get first 10 Googles
     * const googles = await prisma.google.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const googleWithIdOnly = await prisma.google.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends GoogleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GoogleFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GooglePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Google.
     * @param {GoogleCreateArgs} args - Arguments to create a Google.
     * @example
     * // Create one Google
     * const Google = await prisma.google.create({
     *   data: {
     *     // ... data to create a Google
     *   }
     * })
     *
     **/
    create<T extends GoogleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GoogleCreateArgs<ExtArgs>>,
    ): Prisma__GoogleClient<
      $Result.GetResult<Prisma.$GooglePayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Googles.
     *     @param {GoogleCreateManyArgs} args - Arguments to create many Googles.
     *     @example
     *     // Create many Googles
     *     const google = await prisma.google.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends GoogleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GoogleCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Google.
     * @param {GoogleDeleteArgs} args - Arguments to delete one Google.
     * @example
     * // Delete one Google
     * const Google = await prisma.google.delete({
     *   where: {
     *     // ... filter to delete one Google
     *   }
     * })
     *
     **/
    delete<T extends GoogleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GoogleDeleteArgs<ExtArgs>>,
    ): Prisma__GoogleClient<
      $Result.GetResult<Prisma.$GooglePayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Google.
     * @param {GoogleUpdateArgs} args - Arguments to update one Google.
     * @example
     * // Update one Google
     * const google = await prisma.google.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends GoogleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GoogleUpdateArgs<ExtArgs>>,
    ): Prisma__GoogleClient<
      $Result.GetResult<Prisma.$GooglePayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Googles.
     * @param {GoogleDeleteManyArgs} args - Arguments to filter Googles to delete.
     * @example
     * // Delete a few Googles
     * const { count } = await prisma.google.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends GoogleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GoogleDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Googles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Googles
     * const google = await prisma.google.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends GoogleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GoogleUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Google.
     * @param {GoogleUpsertArgs} args - Arguments to update or create a Google.
     * @example
     * // Update or create a Google
     * const google = await prisma.google.upsert({
     *   create: {
     *     // ... data to create a Google
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Google we want to update
     *   }
     * })
     **/
    upsert<T extends GoogleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GoogleUpsertArgs<ExtArgs>>,
    ): Prisma__GoogleClient<
      $Result.GetResult<Prisma.$GooglePayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Googles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleCountArgs} args - Arguments to filter Googles to count.
     * @example
     * // Count the number of Googles
     * const count = await prisma.google.count({
     *   where: {
     *     // ... the filter for the Googles we want to count
     *   }
     * })
     **/
    count<T extends GoogleCountArgs>(
      args?: Subset<T, GoogleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoogleCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Google.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GoogleAggregateArgs>(
      args: Subset<T, GoogleAggregateArgs>,
    ): Prisma.PrismaPromise<GetGoogleAggregateType<T>>;

    /**
     * Group by Google.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleGroupByArgs} args - Group by arguments.
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
      T extends GoogleGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GoogleGroupByArgs['orderBy'] }
        : { orderBy?: GoogleGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, GoogleGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetGoogleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Google model
     */
    readonly fields: GoogleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Google.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GoogleClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
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
   * Fields of the Google model
   */
  interface GoogleFieldRefs {
    readonly id: FieldRef<'Google', 'Int'>;
    readonly userId: FieldRef<'Google', 'Int'>;
    readonly name: FieldRef<'Google', 'String'>;
    readonly email: FieldRef<'Google', 'String'>;
    readonly emailVerified: FieldRef<'Google', 'Boolean'>;
    readonly picture: FieldRef<'Google', 'String'>;
    readonly hash: FieldRef<'Google', 'String'>;
  }

  // Custom InputTypes

  /**
   * Google findUnique
   */
  export type GoogleFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Google
     */
    select?: GoogleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GoogleInclude<ExtArgs> | null;
    /**
     * Filter, which Google to fetch.
     */
    where: GoogleWhereUniqueInput;
  };

  /**
   * Google findUniqueOrThrow
   */
  export type GoogleFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Google
     */
    select?: GoogleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GoogleInclude<ExtArgs> | null;
    /**
     * Filter, which Google to fetch.
     */
    where: GoogleWhereUniqueInput;
  };

  /**
   * Google findFirst
   */
  export type GoogleFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Google
     */
    select?: GoogleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GoogleInclude<ExtArgs> | null;
    /**
     * Filter, which Google to fetch.
     */
    where?: GoogleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Googles to fetch.
     */
    orderBy?: GoogleOrderByWithRelationInput | GoogleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Googles.
     */
    cursor?: GoogleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Googles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Googles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Googles.
     */
    distinct?: GoogleScalarFieldEnum | GoogleScalarFieldEnum[];
  };

  /**
   * Google findFirstOrThrow
   */
  export type GoogleFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Google
     */
    select?: GoogleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GoogleInclude<ExtArgs> | null;
    /**
     * Filter, which Google to fetch.
     */
    where?: GoogleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Googles to fetch.
     */
    orderBy?: GoogleOrderByWithRelationInput | GoogleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Googles.
     */
    cursor?: GoogleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Googles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Googles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Googles.
     */
    distinct?: GoogleScalarFieldEnum | GoogleScalarFieldEnum[];
  };

  /**
   * Google findMany
   */
  export type GoogleFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Google
     */
    select?: GoogleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GoogleInclude<ExtArgs> | null;
    /**
     * Filter, which Googles to fetch.
     */
    where?: GoogleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Googles to fetch.
     */
    orderBy?: GoogleOrderByWithRelationInput | GoogleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Googles.
     */
    cursor?: GoogleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Googles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Googles.
     */
    skip?: number;
    distinct?: GoogleScalarFieldEnum | GoogleScalarFieldEnum[];
  };

  /**
   * Google create
   */
  export type GoogleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Google
       */
      select?: GoogleSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: GoogleInclude<ExtArgs> | null;
      /**
       * The data needed to create a Google.
       */
      data: XOR<GoogleCreateInput, GoogleUncheckedCreateInput>;
    };

  /**
   * Google createMany
   */
  export type GoogleCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Googles.
     */
    data: GoogleCreateManyInput | GoogleCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Google update
   */
  export type GoogleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Google
       */
      select?: GoogleSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: GoogleInclude<ExtArgs> | null;
      /**
       * The data needed to update a Google.
       */
      data: XOR<GoogleUpdateInput, GoogleUncheckedUpdateInput>;
      /**
       * Choose, which Google to update.
       */
      where: GoogleWhereUniqueInput;
    };

  /**
   * Google updateMany
   */
  export type GoogleUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Googles.
     */
    data: XOR<GoogleUpdateManyMutationInput, GoogleUncheckedUpdateManyInput>;
    /**
     * Filter which Googles to update
     */
    where?: GoogleWhereInput;
  };

  /**
   * Google upsert
   */
  export type GoogleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Google
       */
      select?: GoogleSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: GoogleInclude<ExtArgs> | null;
      /**
       * The filter to search for the Google to update in case it exists.
       */
      where: GoogleWhereUniqueInput;
      /**
       * In case the Google found by the `where` argument doesn't exist, create a new Google with this data.
       */
      create: XOR<GoogleCreateInput, GoogleUncheckedCreateInput>;
      /**
       * In case the Google was found with the provided `where` argument, update it with this data.
       */
      update: XOR<GoogleUpdateInput, GoogleUncheckedUpdateInput>;
    };

  /**
   * Google delete
   */
  export type GoogleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Google
       */
      select?: GoogleSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: GoogleInclude<ExtArgs> | null;
      /**
       * Filter which Google to delete.
       */
      where: GoogleWhereUniqueInput;
    };

  /**
   * Google deleteMany
   */
  export type GoogleDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Googles to delete
     */
    where?: GoogleWhereInput;
  };

  /**
   * Google without action
   */
  export type GoogleDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Google
     */
    select?: GoogleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GoogleInclude<ExtArgs> | null;
  };

  /**
   * Model Facebook
   */

  export type AggregateFacebook = {
    _count: FacebookCountAggregateOutputType | null;
    _avg: FacebookAvgAggregateOutputType | null;
    _sum: FacebookSumAggregateOutputType | null;
    _min: FacebookMinAggregateOutputType | null;
    _max: FacebookMaxAggregateOutputType | null;
  };

  export type FacebookAvgAggregateOutputType = {
    id: number | null;
    userId: number | null;
  };

  export type FacebookSumAggregateOutputType = {
    id: number | null;
    userId: number | null;
  };

  export type FacebookMinAggregateOutputType = {
    id: number | null;
    userId: number | null;
    name: string | null;
    email: string | null;
    emailVerified: boolean | null;
    picture: string | null;
    hash: string | null;
  };

  export type FacebookMaxAggregateOutputType = {
    id: number | null;
    userId: number | null;
    name: string | null;
    email: string | null;
    emailVerified: boolean | null;
    picture: string | null;
    hash: string | null;
  };

  export type FacebookCountAggregateOutputType = {
    id: number;
    userId: number;
    name: number;
    email: number;
    emailVerified: number;
    picture: number;
    hash: number;
    _all: number;
  };

  export type FacebookAvgAggregateInputType = {
    id?: true;
    userId?: true;
  };

  export type FacebookSumAggregateInputType = {
    id?: true;
    userId?: true;
  };

  export type FacebookMinAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    email?: true;
    emailVerified?: true;
    picture?: true;
    hash?: true;
  };

  export type FacebookMaxAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    email?: true;
    emailVerified?: true;
    picture?: true;
    hash?: true;
  };

  export type FacebookCountAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    email?: true;
    emailVerified?: true;
    picture?: true;
    hash?: true;
    _all?: true;
  };

  export type FacebookAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Facebook to aggregate.
     */
    where?: FacebookWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Facebooks to fetch.
     */
    orderBy?: FacebookOrderByWithRelationInput | FacebookOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: FacebookWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Facebooks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Facebooks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Facebooks
     **/
    _count?: true | FacebookCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: FacebookAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: FacebookSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: FacebookMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: FacebookMaxAggregateInputType;
  };

  export type GetFacebookAggregateType<T extends FacebookAggregateArgs> = {
    [P in keyof T & keyof AggregateFacebook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacebook[P]>
      : GetScalarType<T[P], AggregateFacebook[P]>;
  };

  export type FacebookGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: FacebookWhereInput;
    orderBy?: FacebookOrderByWithAggregationInput | FacebookOrderByWithAggregationInput[];
    by: FacebookScalarFieldEnum[] | FacebookScalarFieldEnum;
    having?: FacebookScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FacebookCountAggregateInputType | true;
    _avg?: FacebookAvgAggregateInputType;
    _sum?: FacebookSumAggregateInputType;
    _min?: FacebookMinAggregateInputType;
    _max?: FacebookMaxAggregateInputType;
  };

  export type FacebookGroupByOutputType = {
    id: number;
    userId: number;
    name: string;
    email: string;
    emailVerified: boolean;
    picture: string;
    hash: string;
    _count: FacebookCountAggregateOutputType | null;
    _avg: FacebookAvgAggregateOutputType | null;
    _sum: FacebookSumAggregateOutputType | null;
    _min: FacebookMinAggregateOutputType | null;
    _max: FacebookMaxAggregateOutputType | null;
  };

  type GetFacebookGroupByPayload<T extends FacebookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacebookGroupByOutputType, T['by']> & {
        [P in keyof T & keyof FacebookGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], FacebookGroupByOutputType[P]>
          : GetScalarType<T[P], FacebookGroupByOutputType[P]>;
      }
    >
  >;

  export type FacebookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        userId?: boolean;
        name?: boolean;
        email?: boolean;
        emailVerified?: boolean;
        picture?: boolean;
        hash?: boolean;
        user?: boolean | UserDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['facebook']
    >;

  export type FacebookSelectScalar = {
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    email?: boolean;
    emailVerified?: boolean;
    picture?: boolean;
    hash?: boolean;
  };

  export type FacebookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      user?: boolean | UserDefaultArgs<ExtArgs>;
    };

  export type $FacebookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      name: 'Facebook';
      objects: {
        user: Prisma.$UserPayload<ExtArgs>;
      };
      scalars: $Extensions.GetPayloadResult<
        {
          id: number;
          userId: number;
          name: string;
          email: string;
          emailVerified: boolean;
          picture: string;
          hash: string;
        },
        ExtArgs['result']['facebook']
      >;
      composites: {};
    };

  type FacebookGetPayload<S extends boolean | null | undefined | FacebookDefaultArgs> =
    $Result.GetResult<Prisma.$FacebookPayload, S>;

  type FacebookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    FacebookFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: FacebookCountAggregateInputType | true;
  };

  export interface FacebookDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Facebook'];
      meta: { name: 'Facebook' };
    };
    /**
     * Find zero or one Facebook that matches the filter.
     * @param {FacebookFindUniqueArgs} args - Arguments to find a Facebook
     * @example
     * // Get one Facebook
     * const facebook = await prisma.facebook.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends FacebookFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FacebookFindUniqueArgs<ExtArgs>>,
    ): Prisma__FacebookClient<
      $Result.GetResult<Prisma.$FacebookPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Facebook that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {FacebookFindUniqueOrThrowArgs} args - Arguments to find a Facebook
     * @example
     * // Get one Facebook
     * const facebook = await prisma.facebook.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends FacebookFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FacebookFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__FacebookClient<
      $Result.GetResult<Prisma.$FacebookPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Facebook that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookFindFirstArgs} args - Arguments to find a Facebook
     * @example
     * // Get one Facebook
     * const facebook = await prisma.facebook.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends FacebookFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FacebookFindFirstArgs<ExtArgs>>,
    ): Prisma__FacebookClient<
      $Result.GetResult<Prisma.$FacebookPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Facebook that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookFindFirstOrThrowArgs} args - Arguments to find a Facebook
     * @example
     * // Get one Facebook
     * const facebook = await prisma.facebook.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends FacebookFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FacebookFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__FacebookClient<
      $Result.GetResult<Prisma.$FacebookPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Facebooks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Facebooks
     * const facebooks = await prisma.facebook.findMany()
     *
     * // Get first 10 Facebooks
     * const facebooks = await prisma.facebook.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const facebookWithIdOnly = await prisma.facebook.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends FacebookFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FacebookFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacebookPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Facebook.
     * @param {FacebookCreateArgs} args - Arguments to create a Facebook.
     * @example
     * // Create one Facebook
     * const Facebook = await prisma.facebook.create({
     *   data: {
     *     // ... data to create a Facebook
     *   }
     * })
     *
     **/
    create<T extends FacebookCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FacebookCreateArgs<ExtArgs>>,
    ): Prisma__FacebookClient<
      $Result.GetResult<Prisma.$FacebookPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Facebooks.
     *     @param {FacebookCreateManyArgs} args - Arguments to create many Facebooks.
     *     @example
     *     // Create many Facebooks
     *     const facebook = await prisma.facebook.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends FacebookCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FacebookCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Facebook.
     * @param {FacebookDeleteArgs} args - Arguments to delete one Facebook.
     * @example
     * // Delete one Facebook
     * const Facebook = await prisma.facebook.delete({
     *   where: {
     *     // ... filter to delete one Facebook
     *   }
     * })
     *
     **/
    delete<T extends FacebookDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FacebookDeleteArgs<ExtArgs>>,
    ): Prisma__FacebookClient<
      $Result.GetResult<Prisma.$FacebookPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Facebook.
     * @param {FacebookUpdateArgs} args - Arguments to update one Facebook.
     * @example
     * // Update one Facebook
     * const facebook = await prisma.facebook.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends FacebookUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FacebookUpdateArgs<ExtArgs>>,
    ): Prisma__FacebookClient<
      $Result.GetResult<Prisma.$FacebookPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Facebooks.
     * @param {FacebookDeleteManyArgs} args - Arguments to filter Facebooks to delete.
     * @example
     * // Delete a few Facebooks
     * const { count } = await prisma.facebook.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends FacebookDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FacebookDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Facebooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Facebooks
     * const facebook = await prisma.facebook.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends FacebookUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FacebookUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Facebook.
     * @param {FacebookUpsertArgs} args - Arguments to update or create a Facebook.
     * @example
     * // Update or create a Facebook
     * const facebook = await prisma.facebook.upsert({
     *   create: {
     *     // ... data to create a Facebook
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Facebook we want to update
     *   }
     * })
     **/
    upsert<T extends FacebookUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FacebookUpsertArgs<ExtArgs>>,
    ): Prisma__FacebookClient<
      $Result.GetResult<Prisma.$FacebookPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Facebooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookCountArgs} args - Arguments to filter Facebooks to count.
     * @example
     * // Count the number of Facebooks
     * const count = await prisma.facebook.count({
     *   where: {
     *     // ... the filter for the Facebooks we want to count
     *   }
     * })
     **/
    count<T extends FacebookCountArgs>(
      args?: Subset<T, FacebookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacebookCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Facebook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FacebookAggregateArgs>(
      args: Subset<T, FacebookAggregateArgs>,
    ): Prisma.PrismaPromise<GetFacebookAggregateType<T>>;

    /**
     * Group by Facebook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookGroupByArgs} args - Group by arguments.
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
      T extends FacebookGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacebookGroupByArgs['orderBy'] }
        : { orderBy?: FacebookGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, FacebookGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetFacebookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Facebook model
     */
    readonly fields: FacebookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Facebook.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacebookClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
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
   * Fields of the Facebook model
   */
  interface FacebookFieldRefs {
    readonly id: FieldRef<'Facebook', 'Int'>;
    readonly userId: FieldRef<'Facebook', 'Int'>;
    readonly name: FieldRef<'Facebook', 'String'>;
    readonly email: FieldRef<'Facebook', 'String'>;
    readonly emailVerified: FieldRef<'Facebook', 'Boolean'>;
    readonly picture: FieldRef<'Facebook', 'String'>;
    readonly hash: FieldRef<'Facebook', 'String'>;
  }

  // Custom InputTypes

  /**
   * Facebook findUnique
   */
  export type FacebookFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Facebook
     */
    select?: FacebookSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacebookInclude<ExtArgs> | null;
    /**
     * Filter, which Facebook to fetch.
     */
    where: FacebookWhereUniqueInput;
  };

  /**
   * Facebook findUniqueOrThrow
   */
  export type FacebookFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Facebook
     */
    select?: FacebookSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacebookInclude<ExtArgs> | null;
    /**
     * Filter, which Facebook to fetch.
     */
    where: FacebookWhereUniqueInput;
  };

  /**
   * Facebook findFirst
   */
  export type FacebookFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Facebook
     */
    select?: FacebookSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacebookInclude<ExtArgs> | null;
    /**
     * Filter, which Facebook to fetch.
     */
    where?: FacebookWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Facebooks to fetch.
     */
    orderBy?: FacebookOrderByWithRelationInput | FacebookOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Facebooks.
     */
    cursor?: FacebookWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Facebooks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Facebooks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Facebooks.
     */
    distinct?: FacebookScalarFieldEnum | FacebookScalarFieldEnum[];
  };

  /**
   * Facebook findFirstOrThrow
   */
  export type FacebookFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Facebook
     */
    select?: FacebookSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacebookInclude<ExtArgs> | null;
    /**
     * Filter, which Facebook to fetch.
     */
    where?: FacebookWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Facebooks to fetch.
     */
    orderBy?: FacebookOrderByWithRelationInput | FacebookOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Facebooks.
     */
    cursor?: FacebookWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Facebooks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Facebooks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Facebooks.
     */
    distinct?: FacebookScalarFieldEnum | FacebookScalarFieldEnum[];
  };

  /**
   * Facebook findMany
   */
  export type FacebookFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Facebook
     */
    select?: FacebookSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacebookInclude<ExtArgs> | null;
    /**
     * Filter, which Facebooks to fetch.
     */
    where?: FacebookWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Facebooks to fetch.
     */
    orderBy?: FacebookOrderByWithRelationInput | FacebookOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Facebooks.
     */
    cursor?: FacebookWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Facebooks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Facebooks.
     */
    skip?: number;
    distinct?: FacebookScalarFieldEnum | FacebookScalarFieldEnum[];
  };

  /**
   * Facebook create
   */
  export type FacebookCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Facebook
     */
    select?: FacebookSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacebookInclude<ExtArgs> | null;
    /**
     * The data needed to create a Facebook.
     */
    data: XOR<FacebookCreateInput, FacebookUncheckedCreateInput>;
  };

  /**
   * Facebook createMany
   */
  export type FacebookCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Facebooks.
     */
    data: FacebookCreateManyInput | FacebookCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Facebook update
   */
  export type FacebookUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Facebook
     */
    select?: FacebookSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacebookInclude<ExtArgs> | null;
    /**
     * The data needed to update a Facebook.
     */
    data: XOR<FacebookUpdateInput, FacebookUncheckedUpdateInput>;
    /**
     * Choose, which Facebook to update.
     */
    where: FacebookWhereUniqueInput;
  };

  /**
   * Facebook updateMany
   */
  export type FacebookUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Facebooks.
     */
    data: XOR<FacebookUpdateManyMutationInput, FacebookUncheckedUpdateManyInput>;
    /**
     * Filter which Facebooks to update
     */
    where?: FacebookWhereInput;
  };

  /**
   * Facebook upsert
   */
  export type FacebookUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Facebook
     */
    select?: FacebookSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacebookInclude<ExtArgs> | null;
    /**
     * The filter to search for the Facebook to update in case it exists.
     */
    where: FacebookWhereUniqueInput;
    /**
     * In case the Facebook found by the `where` argument doesn't exist, create a new Facebook with this data.
     */
    create: XOR<FacebookCreateInput, FacebookUncheckedCreateInput>;
    /**
     * In case the Facebook was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacebookUpdateInput, FacebookUncheckedUpdateInput>;
  };

  /**
   * Facebook delete
   */
  export type FacebookDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Facebook
     */
    select?: FacebookSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacebookInclude<ExtArgs> | null;
    /**
     * Filter which Facebook to delete.
     */
    where: FacebookWhereUniqueInput;
  };

  /**
   * Facebook deleteMany
   */
  export type FacebookDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Facebooks to delete
     */
    where?: FacebookWhereInput;
  };

  /**
   * Facebook without action
   */
  export type FacebookDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Facebook
     */
    select?: FacebookSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacebookInclude<ExtArgs> | null;
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

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: 'id';
    activeProfile: 'activeProfile';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const CyberSherlockScalarFieldEnum: {
    id: 'id';
    userId: 'userId';
    name: 'name';
    email: 'email';
    emailVerified: 'emailVerified';
    phone: 'phone';
    phone_verified: 'phone_verified';
    picture: 'picture';
    hash: 'hash';
  };

  export type CyberSherlockScalarFieldEnum =
    (typeof CyberSherlockScalarFieldEnum)[keyof typeof CyberSherlockScalarFieldEnum];

  export const GoogleScalarFieldEnum: {
    id: 'id';
    userId: 'userId';
    name: 'name';
    email: 'email';
    emailVerified: 'emailVerified';
    picture: 'picture';
    hash: 'hash';
  };

  export type GoogleScalarFieldEnum =
    (typeof GoogleScalarFieldEnum)[keyof typeof GoogleScalarFieldEnum];

  export const FacebookScalarFieldEnum: {
    id: 'id';
    userId: 'userId';
    name: 'name';
    email: 'email';
    emailVerified: 'emailVerified';
    picture: 'picture';
    hash: 'hash';
  };

  export type FacebookScalarFieldEnum =
    (typeof FacebookScalarFieldEnum)[keyof typeof FacebookScalarFieldEnum];

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

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Profiles'
   */
  export type EnumProfilesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Profiles'>;

  /**
   * Reference to a field of type 'Profiles[]'
   */
  export type ListEnumProfilesFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Profiles[]'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;

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

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: IntFilter<'User'> | number;
    activeProfile?: EnumProfilesFilter<'User'> | $Enums.Profiles;
    createdAt?: DateTimeFilter<'User'> | Date | string;
    updatedAt?: DateTimeFilter<'User'> | Date | string;
    cyberSherlock?: XOR<CyberSherlockNullableRelationFilter, CyberSherlockWhereInput> | null;
    google?: XOR<GoogleNullableRelationFilter, GoogleWhereInput> | null;
    facebook?: XOR<FacebookNullableRelationFilter, FacebookWhereInput> | null;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    activeProfile?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    cyberSherlock?: CyberSherlockOrderByWithRelationInput;
    google?: GoogleOrderByWithRelationInput;
    facebook?: FacebookOrderByWithRelationInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      activeProfile?: EnumProfilesFilter<'User'> | $Enums.Profiles;
      createdAt?: DateTimeFilter<'User'> | Date | string;
      updatedAt?: DateTimeFilter<'User'> | Date | string;
      cyberSherlock?: XOR<CyberSherlockNullableRelationFilter, CyberSherlockWhereInput> | null;
      google?: XOR<GoogleNullableRelationFilter, GoogleWhereInput> | null;
      facebook?: XOR<FacebookNullableRelationFilter, FacebookWhereInput> | null;
    },
    'id'
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    activeProfile?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _avg?: UserAvgOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
    _sum?: UserSumOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'User'> | number;
    activeProfile?: EnumProfilesWithAggregatesFilter<'User'> | $Enums.Profiles;
    createdAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
  };

  export type CyberSherlockWhereInput = {
    AND?: CyberSherlockWhereInput | CyberSherlockWhereInput[];
    OR?: CyberSherlockWhereInput[];
    NOT?: CyberSherlockWhereInput | CyberSherlockWhereInput[];
    id?: IntFilter<'CyberSherlock'> | number;
    userId?: IntFilter<'CyberSherlock'> | number;
    name?: StringFilter<'CyberSherlock'> | string;
    email?: StringFilter<'CyberSherlock'> | string;
    emailVerified?: BoolFilter<'CyberSherlock'> | boolean;
    phone?: StringFilter<'CyberSherlock'> | string;
    phone_verified?: BoolFilter<'CyberSherlock'> | boolean;
    picture?: StringFilter<'CyberSherlock'> | string;
    hash?: StringFilter<'CyberSherlock'> | string;
    user?: XOR<UserRelationFilter, UserWhereInput>;
  };

  export type CyberSherlockOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    emailVerified?: SortOrder;
    phone?: SortOrder;
    phone_verified?: SortOrder;
    picture?: SortOrder;
    hash?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type CyberSherlockWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      userId?: number;
      AND?: CyberSherlockWhereInput | CyberSherlockWhereInput[];
      OR?: CyberSherlockWhereInput[];
      NOT?: CyberSherlockWhereInput | CyberSherlockWhereInput[];
      name?: StringFilter<'CyberSherlock'> | string;
      email?: StringFilter<'CyberSherlock'> | string;
      emailVerified?: BoolFilter<'CyberSherlock'> | boolean;
      phone?: StringFilter<'CyberSherlock'> | string;
      phone_verified?: BoolFilter<'CyberSherlock'> | boolean;
      picture?: StringFilter<'CyberSherlock'> | string;
      hash?: StringFilter<'CyberSherlock'> | string;
      user?: XOR<UserRelationFilter, UserWhereInput>;
    },
    'id' | 'userId'
  >;

  export type CyberSherlockOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    emailVerified?: SortOrder;
    phone?: SortOrder;
    phone_verified?: SortOrder;
    picture?: SortOrder;
    hash?: SortOrder;
    _count?: CyberSherlockCountOrderByAggregateInput;
    _avg?: CyberSherlockAvgOrderByAggregateInput;
    _max?: CyberSherlockMaxOrderByAggregateInput;
    _min?: CyberSherlockMinOrderByAggregateInput;
    _sum?: CyberSherlockSumOrderByAggregateInput;
  };

  export type CyberSherlockScalarWhereWithAggregatesInput = {
    AND?:
      | CyberSherlockScalarWhereWithAggregatesInput
      | CyberSherlockScalarWhereWithAggregatesInput[];
    OR?: CyberSherlockScalarWhereWithAggregatesInput[];
    NOT?:
      | CyberSherlockScalarWhereWithAggregatesInput
      | CyberSherlockScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'CyberSherlock'> | number;
    userId?: IntWithAggregatesFilter<'CyberSherlock'> | number;
    name?: StringWithAggregatesFilter<'CyberSherlock'> | string;
    email?: StringWithAggregatesFilter<'CyberSherlock'> | string;
    emailVerified?: BoolWithAggregatesFilter<'CyberSherlock'> | boolean;
    phone?: StringWithAggregatesFilter<'CyberSherlock'> | string;
    phone_verified?: BoolWithAggregatesFilter<'CyberSherlock'> | boolean;
    picture?: StringWithAggregatesFilter<'CyberSherlock'> | string;
    hash?: StringWithAggregatesFilter<'CyberSherlock'> | string;
  };

  export type GoogleWhereInput = {
    AND?: GoogleWhereInput | GoogleWhereInput[];
    OR?: GoogleWhereInput[];
    NOT?: GoogleWhereInput | GoogleWhereInput[];
    id?: IntFilter<'Google'> | number;
    userId?: IntFilter<'Google'> | number;
    name?: StringFilter<'Google'> | string;
    email?: StringFilter<'Google'> | string;
    emailVerified?: BoolFilter<'Google'> | boolean;
    picture?: StringFilter<'Google'> | string;
    hash?: StringFilter<'Google'> | string;
    user?: XOR<UserRelationFilter, UserWhereInput>;
  };

  export type GoogleOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    emailVerified?: SortOrder;
    picture?: SortOrder;
    hash?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type GoogleWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      userId?: number;
      AND?: GoogleWhereInput | GoogleWhereInput[];
      OR?: GoogleWhereInput[];
      NOT?: GoogleWhereInput | GoogleWhereInput[];
      name?: StringFilter<'Google'> | string;
      email?: StringFilter<'Google'> | string;
      emailVerified?: BoolFilter<'Google'> | boolean;
      picture?: StringFilter<'Google'> | string;
      hash?: StringFilter<'Google'> | string;
      user?: XOR<UserRelationFilter, UserWhereInput>;
    },
    'id' | 'userId'
  >;

  export type GoogleOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    emailVerified?: SortOrder;
    picture?: SortOrder;
    hash?: SortOrder;
    _count?: GoogleCountOrderByAggregateInput;
    _avg?: GoogleAvgOrderByAggregateInput;
    _max?: GoogleMaxOrderByAggregateInput;
    _min?: GoogleMinOrderByAggregateInput;
    _sum?: GoogleSumOrderByAggregateInput;
  };

  export type GoogleScalarWhereWithAggregatesInput = {
    AND?: GoogleScalarWhereWithAggregatesInput | GoogleScalarWhereWithAggregatesInput[];
    OR?: GoogleScalarWhereWithAggregatesInput[];
    NOT?: GoogleScalarWhereWithAggregatesInput | GoogleScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Google'> | number;
    userId?: IntWithAggregatesFilter<'Google'> | number;
    name?: StringWithAggregatesFilter<'Google'> | string;
    email?: StringWithAggregatesFilter<'Google'> | string;
    emailVerified?: BoolWithAggregatesFilter<'Google'> | boolean;
    picture?: StringWithAggregatesFilter<'Google'> | string;
    hash?: StringWithAggregatesFilter<'Google'> | string;
  };

  export type FacebookWhereInput = {
    AND?: FacebookWhereInput | FacebookWhereInput[];
    OR?: FacebookWhereInput[];
    NOT?: FacebookWhereInput | FacebookWhereInput[];
    id?: IntFilter<'Facebook'> | number;
    userId?: IntFilter<'Facebook'> | number;
    name?: StringFilter<'Facebook'> | string;
    email?: StringFilter<'Facebook'> | string;
    emailVerified?: BoolFilter<'Facebook'> | boolean;
    picture?: StringFilter<'Facebook'> | string;
    hash?: StringFilter<'Facebook'> | string;
    user?: XOR<UserRelationFilter, UserWhereInput>;
  };

  export type FacebookOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    emailVerified?: SortOrder;
    picture?: SortOrder;
    hash?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type FacebookWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      userId?: number;
      AND?: FacebookWhereInput | FacebookWhereInput[];
      OR?: FacebookWhereInput[];
      NOT?: FacebookWhereInput | FacebookWhereInput[];
      name?: StringFilter<'Facebook'> | string;
      email?: StringFilter<'Facebook'> | string;
      emailVerified?: BoolFilter<'Facebook'> | boolean;
      picture?: StringFilter<'Facebook'> | string;
      hash?: StringFilter<'Facebook'> | string;
      user?: XOR<UserRelationFilter, UserWhereInput>;
    },
    'id' | 'userId'
  >;

  export type FacebookOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    emailVerified?: SortOrder;
    picture?: SortOrder;
    hash?: SortOrder;
    _count?: FacebookCountOrderByAggregateInput;
    _avg?: FacebookAvgOrderByAggregateInput;
    _max?: FacebookMaxOrderByAggregateInput;
    _min?: FacebookMinOrderByAggregateInput;
    _sum?: FacebookSumOrderByAggregateInput;
  };

  export type FacebookScalarWhereWithAggregatesInput = {
    AND?: FacebookScalarWhereWithAggregatesInput | FacebookScalarWhereWithAggregatesInput[];
    OR?: FacebookScalarWhereWithAggregatesInput[];
    NOT?: FacebookScalarWhereWithAggregatesInput | FacebookScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Facebook'> | number;
    userId?: IntWithAggregatesFilter<'Facebook'> | number;
    name?: StringWithAggregatesFilter<'Facebook'> | string;
    email?: StringWithAggregatesFilter<'Facebook'> | string;
    emailVerified?: BoolWithAggregatesFilter<'Facebook'> | boolean;
    picture?: StringWithAggregatesFilter<'Facebook'> | string;
    hash?: StringWithAggregatesFilter<'Facebook'> | string;
  };

  export type UserCreateInput = {
    activeProfile?: $Enums.Profiles;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cyberSherlock?: CyberSherlockCreateNestedOneWithoutUserInput;
    google?: GoogleCreateNestedOneWithoutUserInput;
    facebook?: FacebookCreateNestedOneWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: number;
    activeProfile?: $Enums.Profiles;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cyberSherlock?: CyberSherlockUncheckedCreateNestedOneWithoutUserInput;
    google?: GoogleUncheckedCreateNestedOneWithoutUserInput;
    facebook?: FacebookUncheckedCreateNestedOneWithoutUserInput;
  };

  export type UserUpdateInput = {
    activeProfile?: EnumProfilesFieldUpdateOperationsInput | $Enums.Profiles;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    cyberSherlock?: CyberSherlockUpdateOneWithoutUserNestedInput;
    google?: GoogleUpdateOneWithoutUserNestedInput;
    facebook?: FacebookUpdateOneWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    activeProfile?: EnumProfilesFieldUpdateOperationsInput | $Enums.Profiles;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    cyberSherlock?: CyberSherlockUncheckedUpdateOneWithoutUserNestedInput;
    google?: GoogleUncheckedUpdateOneWithoutUserNestedInput;
    facebook?: FacebookUncheckedUpdateOneWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: number;
    activeProfile?: $Enums.Profiles;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    activeProfile?: EnumProfilesFieldUpdateOperationsInput | $Enums.Profiles;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    activeProfile?: EnumProfilesFieldUpdateOperationsInput | $Enums.Profiles;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CyberSherlockCreateInput = {
    name: string;
    email: string;
    emailVerified: boolean;
    phone: string;
    phone_verified: boolean;
    picture: string;
    hash: string;
    user: UserCreateNestedOneWithoutCyberSherlockInput;
  };

  export type CyberSherlockUncheckedCreateInput = {
    id?: number;
    userId: number;
    name: string;
    email: string;
    emailVerified: boolean;
    phone: string;
    phone_verified: boolean;
    picture: string;
    hash: string;
  };

  export type CyberSherlockUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?: BoolFieldUpdateOperationsInput | boolean;
    phone?: StringFieldUpdateOperationsInput | string;
    phone_verified?: BoolFieldUpdateOperationsInput | boolean;
    picture?: StringFieldUpdateOperationsInput | string;
    hash?: StringFieldUpdateOperationsInput | string;
    user?: UserUpdateOneRequiredWithoutCyberSherlockNestedInput;
  };

  export type CyberSherlockUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    userId?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?: BoolFieldUpdateOperationsInput | boolean;
    phone?: StringFieldUpdateOperationsInput | string;
    phone_verified?: BoolFieldUpdateOperationsInput | boolean;
    picture?: StringFieldUpdateOperationsInput | string;
    hash?: StringFieldUpdateOperationsInput | string;
  };

  export type CyberSherlockCreateManyInput = {
    id?: number;
    userId: number;
    name: string;
    email: string;
    emailVerified: boolean;
    phone: string;
    phone_verified: boolean;
    picture: string;
    hash: string;
  };

  export type CyberSherlockUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?: BoolFieldUpdateOperationsInput | boolean;
    phone?: StringFieldUpdateOperationsInput | string;
    phone_verified?: BoolFieldUpdateOperationsInput | boolean;
    picture?: StringFieldUpdateOperationsInput | string;
    hash?: StringFieldUpdateOperationsInput | string;
  };

  export type CyberSherlockUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    userId?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?: BoolFieldUpdateOperationsInput | boolean;
    phone?: StringFieldUpdateOperationsInput | string;
    phone_verified?: BoolFieldUpdateOperationsInput | boolean;
    picture?: StringFieldUpdateOperationsInput | string;
    hash?: StringFieldUpdateOperationsInput | string;
  };

  export type GoogleCreateInput = {
    name: string;
    email: string;
    emailVerified: boolean;
    picture: string;
    hash: string;
    user: UserCreateNestedOneWithoutGoogleInput;
  };

  export type GoogleUncheckedCreateInput = {
    id?: number;
    userId: number;
    name: string;
    email: string;
    emailVerified: boolean;
    picture: string;
    hash: string;
  };

  export type GoogleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?: BoolFieldUpdateOperationsInput | boolean;
    picture?: StringFieldUpdateOperationsInput | string;
    hash?: StringFieldUpdateOperationsInput | string;
    user?: UserUpdateOneRequiredWithoutGoogleNestedInput;
  };

  export type GoogleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    userId?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?: BoolFieldUpdateOperationsInput | boolean;
    picture?: StringFieldUpdateOperationsInput | string;
    hash?: StringFieldUpdateOperationsInput | string;
  };

  export type GoogleCreateManyInput = {
    id?: number;
    userId: number;
    name: string;
    email: string;
    emailVerified: boolean;
    picture: string;
    hash: string;
  };

  export type GoogleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?: BoolFieldUpdateOperationsInput | boolean;
    picture?: StringFieldUpdateOperationsInput | string;
    hash?: StringFieldUpdateOperationsInput | string;
  };

  export type GoogleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    userId?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?: BoolFieldUpdateOperationsInput | boolean;
    picture?: StringFieldUpdateOperationsInput | string;
    hash?: StringFieldUpdateOperationsInput | string;
  };

  export type FacebookCreateInput = {
    name: string;
    email: string;
    emailVerified: boolean;
    picture: string;
    hash: string;
    user: UserCreateNestedOneWithoutFacebookInput;
  };

  export type FacebookUncheckedCreateInput = {
    id?: number;
    userId: number;
    name: string;
    email: string;
    emailVerified: boolean;
    picture: string;
    hash: string;
  };

  export type FacebookUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?: BoolFieldUpdateOperationsInput | boolean;
    picture?: StringFieldUpdateOperationsInput | string;
    hash?: StringFieldUpdateOperationsInput | string;
    user?: UserUpdateOneRequiredWithoutFacebookNestedInput;
  };

  export type FacebookUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    userId?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?: BoolFieldUpdateOperationsInput | boolean;
    picture?: StringFieldUpdateOperationsInput | string;
    hash?: StringFieldUpdateOperationsInput | string;
  };

  export type FacebookCreateManyInput = {
    id?: number;
    userId: number;
    name: string;
    email: string;
    emailVerified: boolean;
    picture: string;
    hash: string;
  };

  export type FacebookUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?: BoolFieldUpdateOperationsInput | boolean;
    picture?: StringFieldUpdateOperationsInput | string;
    hash?: StringFieldUpdateOperationsInput | string;
  };

  export type FacebookUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    userId?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?: BoolFieldUpdateOperationsInput | boolean;
    picture?: StringFieldUpdateOperationsInput | string;
    hash?: StringFieldUpdateOperationsInput | string;
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

  export type EnumProfilesFilter<$PrismaModel = never> = {
    equals?: $Enums.Profiles | EnumProfilesFieldRefInput<$PrismaModel>;
    in?: $Enums.Profiles[] | ListEnumProfilesFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Profiles[] | ListEnumProfilesFieldRefInput<$PrismaModel>;
    not?: NestedEnumProfilesFilter<$PrismaModel> | $Enums.Profiles;
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

  export type CyberSherlockNullableRelationFilter = {
    is?: CyberSherlockWhereInput | null;
    isNot?: CyberSherlockWhereInput | null;
  };

  export type GoogleNullableRelationFilter = {
    is?: GoogleWhereInput | null;
    isNot?: GoogleWhereInput | null;
  };

  export type FacebookNullableRelationFilter = {
    is?: FacebookWhereInput | null;
    isNot?: FacebookWhereInput | null;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    activeProfile?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    activeProfile?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    activeProfile?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder;
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

  export type EnumProfilesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Profiles | EnumProfilesFieldRefInput<$PrismaModel>;
    in?: $Enums.Profiles[] | ListEnumProfilesFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Profiles[] | ListEnumProfilesFieldRefInput<$PrismaModel>;
    not?: NestedEnumProfilesWithAggregatesFilter<$PrismaModel> | $Enums.Profiles;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumProfilesFilter<$PrismaModel>;
    _max?: NestedEnumProfilesFilter<$PrismaModel>;
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type UserRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type CyberSherlockCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    emailVerified?: SortOrder;
    phone?: SortOrder;
    phone_verified?: SortOrder;
    picture?: SortOrder;
    hash?: SortOrder;
  };

  export type CyberSherlockAvgOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
  };

  export type CyberSherlockMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    emailVerified?: SortOrder;
    phone?: SortOrder;
    phone_verified?: SortOrder;
    picture?: SortOrder;
    hash?: SortOrder;
  };

  export type CyberSherlockMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    emailVerified?: SortOrder;
    phone?: SortOrder;
    phone_verified?: SortOrder;
    picture?: SortOrder;
    hash?: SortOrder;
  };

  export type CyberSherlockSumOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type GoogleCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    emailVerified?: SortOrder;
    picture?: SortOrder;
    hash?: SortOrder;
  };

  export type GoogleAvgOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
  };

  export type GoogleMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    emailVerified?: SortOrder;
    picture?: SortOrder;
    hash?: SortOrder;
  };

  export type GoogleMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    emailVerified?: SortOrder;
    picture?: SortOrder;
    hash?: SortOrder;
  };

  export type GoogleSumOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
  };

  export type FacebookCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    emailVerified?: SortOrder;
    picture?: SortOrder;
    hash?: SortOrder;
  };

  export type FacebookAvgOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
  };

  export type FacebookMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    emailVerified?: SortOrder;
    picture?: SortOrder;
    hash?: SortOrder;
  };

  export type FacebookMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    emailVerified?: SortOrder;
    picture?: SortOrder;
    hash?: SortOrder;
  };

  export type FacebookSumOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
  };

  export type CyberSherlockCreateNestedOneWithoutUserInput = {
    create?: XOR<CyberSherlockCreateWithoutUserInput, CyberSherlockUncheckedCreateWithoutUserInput>;
    connectOrCreate?: CyberSherlockCreateOrConnectWithoutUserInput;
    connect?: CyberSherlockWhereUniqueInput;
  };

  export type GoogleCreateNestedOneWithoutUserInput = {
    create?: XOR<GoogleCreateWithoutUserInput, GoogleUncheckedCreateWithoutUserInput>;
    connectOrCreate?: GoogleCreateOrConnectWithoutUserInput;
    connect?: GoogleWhereUniqueInput;
  };

  export type FacebookCreateNestedOneWithoutUserInput = {
    create?: XOR<FacebookCreateWithoutUserInput, FacebookUncheckedCreateWithoutUserInput>;
    connectOrCreate?: FacebookCreateOrConnectWithoutUserInput;
    connect?: FacebookWhereUniqueInput;
  };

  export type CyberSherlockUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CyberSherlockCreateWithoutUserInput, CyberSherlockUncheckedCreateWithoutUserInput>;
    connectOrCreate?: CyberSherlockCreateOrConnectWithoutUserInput;
    connect?: CyberSherlockWhereUniqueInput;
  };

  export type GoogleUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<GoogleCreateWithoutUserInput, GoogleUncheckedCreateWithoutUserInput>;
    connectOrCreate?: GoogleCreateOrConnectWithoutUserInput;
    connect?: GoogleWhereUniqueInput;
  };

  export type FacebookUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<FacebookCreateWithoutUserInput, FacebookUncheckedCreateWithoutUserInput>;
    connectOrCreate?: FacebookCreateOrConnectWithoutUserInput;
    connect?: FacebookWhereUniqueInput;
  };

  export type EnumProfilesFieldUpdateOperationsInput = {
    set?: $Enums.Profiles;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type CyberSherlockUpdateOneWithoutUserNestedInput = {
    create?: XOR<CyberSherlockCreateWithoutUserInput, CyberSherlockUncheckedCreateWithoutUserInput>;
    connectOrCreate?: CyberSherlockCreateOrConnectWithoutUserInput;
    upsert?: CyberSherlockUpsertWithoutUserInput;
    disconnect?: CyberSherlockWhereInput | boolean;
    delete?: CyberSherlockWhereInput | boolean;
    connect?: CyberSherlockWhereUniqueInput;
    update?: XOR<
      XOR<CyberSherlockUpdateToOneWithWhereWithoutUserInput, CyberSherlockUpdateWithoutUserInput>,
      CyberSherlockUncheckedUpdateWithoutUserInput
    >;
  };

  export type GoogleUpdateOneWithoutUserNestedInput = {
    create?: XOR<GoogleCreateWithoutUserInput, GoogleUncheckedCreateWithoutUserInput>;
    connectOrCreate?: GoogleCreateOrConnectWithoutUserInput;
    upsert?: GoogleUpsertWithoutUserInput;
    disconnect?: GoogleWhereInput | boolean;
    delete?: GoogleWhereInput | boolean;
    connect?: GoogleWhereUniqueInput;
    update?: XOR<
      XOR<GoogleUpdateToOneWithWhereWithoutUserInput, GoogleUpdateWithoutUserInput>,
      GoogleUncheckedUpdateWithoutUserInput
    >;
  };

  export type FacebookUpdateOneWithoutUserNestedInput = {
    create?: XOR<FacebookCreateWithoutUserInput, FacebookUncheckedCreateWithoutUserInput>;
    connectOrCreate?: FacebookCreateOrConnectWithoutUserInput;
    upsert?: FacebookUpsertWithoutUserInput;
    disconnect?: FacebookWhereInput | boolean;
    delete?: FacebookWhereInput | boolean;
    connect?: FacebookWhereUniqueInput;
    update?: XOR<
      XOR<FacebookUpdateToOneWithWhereWithoutUserInput, FacebookUpdateWithoutUserInput>,
      FacebookUncheckedUpdateWithoutUserInput
    >;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type CyberSherlockUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CyberSherlockCreateWithoutUserInput, CyberSherlockUncheckedCreateWithoutUserInput>;
    connectOrCreate?: CyberSherlockCreateOrConnectWithoutUserInput;
    upsert?: CyberSherlockUpsertWithoutUserInput;
    disconnect?: CyberSherlockWhereInput | boolean;
    delete?: CyberSherlockWhereInput | boolean;
    connect?: CyberSherlockWhereUniqueInput;
    update?: XOR<
      XOR<CyberSherlockUpdateToOneWithWhereWithoutUserInput, CyberSherlockUpdateWithoutUserInput>,
      CyberSherlockUncheckedUpdateWithoutUserInput
    >;
  };

  export type GoogleUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<GoogleCreateWithoutUserInput, GoogleUncheckedCreateWithoutUserInput>;
    connectOrCreate?: GoogleCreateOrConnectWithoutUserInput;
    upsert?: GoogleUpsertWithoutUserInput;
    disconnect?: GoogleWhereInput | boolean;
    delete?: GoogleWhereInput | boolean;
    connect?: GoogleWhereUniqueInput;
    update?: XOR<
      XOR<GoogleUpdateToOneWithWhereWithoutUserInput, GoogleUpdateWithoutUserInput>,
      GoogleUncheckedUpdateWithoutUserInput
    >;
  };

  export type FacebookUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<FacebookCreateWithoutUserInput, FacebookUncheckedCreateWithoutUserInput>;
    connectOrCreate?: FacebookCreateOrConnectWithoutUserInput;
    upsert?: FacebookUpsertWithoutUserInput;
    disconnect?: FacebookWhereInput | boolean;
    delete?: FacebookWhereInput | boolean;
    connect?: FacebookWhereUniqueInput;
    update?: XOR<
      XOR<FacebookUpdateToOneWithWhereWithoutUserInput, FacebookUpdateWithoutUserInput>,
      FacebookUncheckedUpdateWithoutUserInput
    >;
  };

  export type UserCreateNestedOneWithoutCyberSherlockInput = {
    create?: XOR<UserCreateWithoutCyberSherlockInput, UserUncheckedCreateWithoutCyberSherlockInput>;
    connectOrCreate?: UserCreateOrConnectWithoutCyberSherlockInput;
    connect?: UserWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type UserUpdateOneRequiredWithoutCyberSherlockNestedInput = {
    create?: XOR<UserCreateWithoutCyberSherlockInput, UserUncheckedCreateWithoutCyberSherlockInput>;
    connectOrCreate?: UserCreateOrConnectWithoutCyberSherlockInput;
    upsert?: UserUpsertWithoutCyberSherlockInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<UserUpdateToOneWithWhereWithoutCyberSherlockInput, UserUpdateWithoutCyberSherlockInput>,
      UserUncheckedUpdateWithoutCyberSherlockInput
    >;
  };

  export type UserCreateNestedOneWithoutGoogleInput = {
    create?: XOR<UserCreateWithoutGoogleInput, UserUncheckedCreateWithoutGoogleInput>;
    connectOrCreate?: UserCreateOrConnectWithoutGoogleInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutGoogleNestedInput = {
    create?: XOR<UserCreateWithoutGoogleInput, UserUncheckedCreateWithoutGoogleInput>;
    connectOrCreate?: UserCreateOrConnectWithoutGoogleInput;
    upsert?: UserUpsertWithoutGoogleInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<UserUpdateToOneWithWhereWithoutGoogleInput, UserUpdateWithoutGoogleInput>,
      UserUncheckedUpdateWithoutGoogleInput
    >;
  };

  export type UserCreateNestedOneWithoutFacebookInput = {
    create?: XOR<UserCreateWithoutFacebookInput, UserUncheckedCreateWithoutFacebookInput>;
    connectOrCreate?: UserCreateOrConnectWithoutFacebookInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutFacebookNestedInput = {
    create?: XOR<UserCreateWithoutFacebookInput, UserUncheckedCreateWithoutFacebookInput>;
    connectOrCreate?: UserCreateOrConnectWithoutFacebookInput;
    upsert?: UserUpsertWithoutFacebookInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<UserUpdateToOneWithWhereWithoutFacebookInput, UserUpdateWithoutFacebookInput>,
      UserUncheckedUpdateWithoutFacebookInput
    >;
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

  export type NestedEnumProfilesFilter<$PrismaModel = never> = {
    equals?: $Enums.Profiles | EnumProfilesFieldRefInput<$PrismaModel>;
    in?: $Enums.Profiles[] | ListEnumProfilesFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Profiles[] | ListEnumProfilesFieldRefInput<$PrismaModel>;
    not?: NestedEnumProfilesFilter<$PrismaModel> | $Enums.Profiles;
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

  export type NestedEnumProfilesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Profiles | EnumProfilesFieldRefInput<$PrismaModel>;
    in?: $Enums.Profiles[] | ListEnumProfilesFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Profiles[] | ListEnumProfilesFieldRefInput<$PrismaModel>;
    not?: NestedEnumProfilesWithAggregatesFilter<$PrismaModel> | $Enums.Profiles;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumProfilesFilter<$PrismaModel>;
    _max?: NestedEnumProfilesFilter<$PrismaModel>;
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type CyberSherlockCreateWithoutUserInput = {
    name: string;
    email: string;
    emailVerified: boolean;
    phone: string;
    phone_verified: boolean;
    picture: string;
    hash: string;
  };

  export type CyberSherlockUncheckedCreateWithoutUserInput = {
    id?: number;
    name: string;
    email: string;
    emailVerified: boolean;
    phone: string;
    phone_verified: boolean;
    picture: string;
    hash: string;
  };

  export type CyberSherlockCreateOrConnectWithoutUserInput = {
    where: CyberSherlockWhereUniqueInput;
    create: XOR<CyberSherlockCreateWithoutUserInput, CyberSherlockUncheckedCreateWithoutUserInput>;
  };

  export type GoogleCreateWithoutUserInput = {
    name: string;
    email: string;
    emailVerified: boolean;
    picture: string;
    hash: string;
  };

  export type GoogleUncheckedCreateWithoutUserInput = {
    id?: number;
    name: string;
    email: string;
    emailVerified: boolean;
    picture: string;
    hash: string;
  };

  export type GoogleCreateOrConnectWithoutUserInput = {
    where: GoogleWhereUniqueInput;
    create: XOR<GoogleCreateWithoutUserInput, GoogleUncheckedCreateWithoutUserInput>;
  };

  export type FacebookCreateWithoutUserInput = {
    name: string;
    email: string;
    emailVerified: boolean;
    picture: string;
    hash: string;
  };

  export type FacebookUncheckedCreateWithoutUserInput = {
    id?: number;
    name: string;
    email: string;
    emailVerified: boolean;
    picture: string;
    hash: string;
  };

  export type FacebookCreateOrConnectWithoutUserInput = {
    where: FacebookWhereUniqueInput;
    create: XOR<FacebookCreateWithoutUserInput, FacebookUncheckedCreateWithoutUserInput>;
  };

  export type CyberSherlockUpsertWithoutUserInput = {
    update: XOR<CyberSherlockUpdateWithoutUserInput, CyberSherlockUncheckedUpdateWithoutUserInput>;
    create: XOR<CyberSherlockCreateWithoutUserInput, CyberSherlockUncheckedCreateWithoutUserInput>;
    where?: CyberSherlockWhereInput;
  };

  export type CyberSherlockUpdateToOneWithWhereWithoutUserInput = {
    where?: CyberSherlockWhereInput;
    data: XOR<CyberSherlockUpdateWithoutUserInput, CyberSherlockUncheckedUpdateWithoutUserInput>;
  };

  export type CyberSherlockUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?: BoolFieldUpdateOperationsInput | boolean;
    phone?: StringFieldUpdateOperationsInput | string;
    phone_verified?: BoolFieldUpdateOperationsInput | boolean;
    picture?: StringFieldUpdateOperationsInput | string;
    hash?: StringFieldUpdateOperationsInput | string;
  };

  export type CyberSherlockUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?: BoolFieldUpdateOperationsInput | boolean;
    phone?: StringFieldUpdateOperationsInput | string;
    phone_verified?: BoolFieldUpdateOperationsInput | boolean;
    picture?: StringFieldUpdateOperationsInput | string;
    hash?: StringFieldUpdateOperationsInput | string;
  };

  export type GoogleUpsertWithoutUserInput = {
    update: XOR<GoogleUpdateWithoutUserInput, GoogleUncheckedUpdateWithoutUserInput>;
    create: XOR<GoogleCreateWithoutUserInput, GoogleUncheckedCreateWithoutUserInput>;
    where?: GoogleWhereInput;
  };

  export type GoogleUpdateToOneWithWhereWithoutUserInput = {
    where?: GoogleWhereInput;
    data: XOR<GoogleUpdateWithoutUserInput, GoogleUncheckedUpdateWithoutUserInput>;
  };

  export type GoogleUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?: BoolFieldUpdateOperationsInput | boolean;
    picture?: StringFieldUpdateOperationsInput | string;
    hash?: StringFieldUpdateOperationsInput | string;
  };

  export type GoogleUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?: BoolFieldUpdateOperationsInput | boolean;
    picture?: StringFieldUpdateOperationsInput | string;
    hash?: StringFieldUpdateOperationsInput | string;
  };

  export type FacebookUpsertWithoutUserInput = {
    update: XOR<FacebookUpdateWithoutUserInput, FacebookUncheckedUpdateWithoutUserInput>;
    create: XOR<FacebookCreateWithoutUserInput, FacebookUncheckedCreateWithoutUserInput>;
    where?: FacebookWhereInput;
  };

  export type FacebookUpdateToOneWithWhereWithoutUserInput = {
    where?: FacebookWhereInput;
    data: XOR<FacebookUpdateWithoutUserInput, FacebookUncheckedUpdateWithoutUserInput>;
  };

  export type FacebookUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?: BoolFieldUpdateOperationsInput | boolean;
    picture?: StringFieldUpdateOperationsInput | string;
    hash?: StringFieldUpdateOperationsInput | string;
  };

  export type FacebookUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?: BoolFieldUpdateOperationsInput | boolean;
    picture?: StringFieldUpdateOperationsInput | string;
    hash?: StringFieldUpdateOperationsInput | string;
  };

  export type UserCreateWithoutCyberSherlockInput = {
    activeProfile?: $Enums.Profiles;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    google?: GoogleCreateNestedOneWithoutUserInput;
    facebook?: FacebookCreateNestedOneWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutCyberSherlockInput = {
    id?: number;
    activeProfile?: $Enums.Profiles;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    google?: GoogleUncheckedCreateNestedOneWithoutUserInput;
    facebook?: FacebookUncheckedCreateNestedOneWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutCyberSherlockInput = {
    where: UserWhereUniqueInput;
    create: XOR<UserCreateWithoutCyberSherlockInput, UserUncheckedCreateWithoutCyberSherlockInput>;
  };

  export type UserUpsertWithoutCyberSherlockInput = {
    update: XOR<UserUpdateWithoutCyberSherlockInput, UserUncheckedUpdateWithoutCyberSherlockInput>;
    create: XOR<UserCreateWithoutCyberSherlockInput, UserUncheckedCreateWithoutCyberSherlockInput>;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutCyberSherlockInput = {
    where?: UserWhereInput;
    data: XOR<UserUpdateWithoutCyberSherlockInput, UserUncheckedUpdateWithoutCyberSherlockInput>;
  };

  export type UserUpdateWithoutCyberSherlockInput = {
    activeProfile?: EnumProfilesFieldUpdateOperationsInput | $Enums.Profiles;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    google?: GoogleUpdateOneWithoutUserNestedInput;
    facebook?: FacebookUpdateOneWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutCyberSherlockInput = {
    id?: IntFieldUpdateOperationsInput | number;
    activeProfile?: EnumProfilesFieldUpdateOperationsInput | $Enums.Profiles;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    google?: GoogleUncheckedUpdateOneWithoutUserNestedInput;
    facebook?: FacebookUncheckedUpdateOneWithoutUserNestedInput;
  };

  export type UserCreateWithoutGoogleInput = {
    activeProfile?: $Enums.Profiles;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cyberSherlock?: CyberSherlockCreateNestedOneWithoutUserInput;
    facebook?: FacebookCreateNestedOneWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutGoogleInput = {
    id?: number;
    activeProfile?: $Enums.Profiles;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cyberSherlock?: CyberSherlockUncheckedCreateNestedOneWithoutUserInput;
    facebook?: FacebookUncheckedCreateNestedOneWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutGoogleInput = {
    where: UserWhereUniqueInput;
    create: XOR<UserCreateWithoutGoogleInput, UserUncheckedCreateWithoutGoogleInput>;
  };

  export type UserUpsertWithoutGoogleInput = {
    update: XOR<UserUpdateWithoutGoogleInput, UserUncheckedUpdateWithoutGoogleInput>;
    create: XOR<UserCreateWithoutGoogleInput, UserUncheckedCreateWithoutGoogleInput>;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutGoogleInput = {
    where?: UserWhereInput;
    data: XOR<UserUpdateWithoutGoogleInput, UserUncheckedUpdateWithoutGoogleInput>;
  };

  export type UserUpdateWithoutGoogleInput = {
    activeProfile?: EnumProfilesFieldUpdateOperationsInput | $Enums.Profiles;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    cyberSherlock?: CyberSherlockUpdateOneWithoutUserNestedInput;
    facebook?: FacebookUpdateOneWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutGoogleInput = {
    id?: IntFieldUpdateOperationsInput | number;
    activeProfile?: EnumProfilesFieldUpdateOperationsInput | $Enums.Profiles;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    cyberSherlock?: CyberSherlockUncheckedUpdateOneWithoutUserNestedInput;
    facebook?: FacebookUncheckedUpdateOneWithoutUserNestedInput;
  };

  export type UserCreateWithoutFacebookInput = {
    activeProfile?: $Enums.Profiles;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cyberSherlock?: CyberSherlockCreateNestedOneWithoutUserInput;
    google?: GoogleCreateNestedOneWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutFacebookInput = {
    id?: number;
    activeProfile?: $Enums.Profiles;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cyberSherlock?: CyberSherlockUncheckedCreateNestedOneWithoutUserInput;
    google?: GoogleUncheckedCreateNestedOneWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutFacebookInput = {
    where: UserWhereUniqueInput;
    create: XOR<UserCreateWithoutFacebookInput, UserUncheckedCreateWithoutFacebookInput>;
  };

  export type UserUpsertWithoutFacebookInput = {
    update: XOR<UserUpdateWithoutFacebookInput, UserUncheckedUpdateWithoutFacebookInput>;
    create: XOR<UserCreateWithoutFacebookInput, UserUncheckedCreateWithoutFacebookInput>;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutFacebookInput = {
    where?: UserWhereInput;
    data: XOR<UserUpdateWithoutFacebookInput, UserUncheckedUpdateWithoutFacebookInput>;
  };

  export type UserUpdateWithoutFacebookInput = {
    activeProfile?: EnumProfilesFieldUpdateOperationsInput | $Enums.Profiles;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    cyberSherlock?: CyberSherlockUpdateOneWithoutUserNestedInput;
    google?: GoogleUpdateOneWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutFacebookInput = {
    id?: IntFieldUpdateOperationsInput | number;
    activeProfile?: EnumProfilesFieldUpdateOperationsInput | $Enums.Profiles;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    cyberSherlock?: CyberSherlockUncheckedUpdateOneWithoutUserNestedInput;
    google?: GoogleUncheckedUpdateOneWithoutUserNestedInput;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use UserDefaultArgs instead
   */
  export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use CyberSherlockDefaultArgs instead
   */
  export type CyberSherlockArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = CyberSherlockDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use GoogleDefaultArgs instead
   */
  export type GoogleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    GoogleDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use FacebookDefaultArgs instead
   */
  export type FacebookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    FacebookDefaultArgs<ExtArgs>;

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
