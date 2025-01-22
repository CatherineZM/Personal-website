/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n    query LandingData($locales: [Locale!]!, $includeCurrent: Boolean!) {\n        landings(locales: $locales) {\n            greet\n            localizations(locales: $locales, includeCurrent: $includeCurrent) {\n                locale\n                name\n                role\n                identity\n            }\n            socialMedia {\n                localizations(locales: $locales, includeCurrent: $includeCurrent) {\n                    locale\n                    text\n                }\n                link\n                buttonId\n            }\n            icon {\n                media\n                localizations(locales: $locales, includeCurrent: $includeCurrent) {\n                    locale\n                    altText\n                }\n            }\n        }\n    }\n": types.LandingDataDocument,
    "\n    query NavbarData($locales: [Locale!]!, $includeCurrent: Boolean!) {\n        navbars(locales: $locales) {\n            logo {\n                media\n                localizations(locales: $locales, includeCurrent: $includeCurrent) {\n                    locale\n                    altText\n                }\n            }\n            navlink {\n                localizations(locales: $locales, includeCurrent: $includeCurrent) {\n                    locale\n                    text\n                }\n                link\n                buttonId\n            }\n            navbtn {\n                localizations(locales: $locales, includeCurrent: $includeCurrent) {\n                    locale\n                    text\n                }\n                link\n                buttonId\n            }\n        }\n    }\n": types.NavbarDataDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query LandingData($locales: [Locale!]!, $includeCurrent: Boolean!) {\n        landings(locales: $locales) {\n            greet\n            localizations(locales: $locales, includeCurrent: $includeCurrent) {\n                locale\n                name\n                role\n                identity\n            }\n            socialMedia {\n                localizations(locales: $locales, includeCurrent: $includeCurrent) {\n                    locale\n                    text\n                }\n                link\n                buttonId\n            }\n            icon {\n                media\n                localizations(locales: $locales, includeCurrent: $includeCurrent) {\n                    locale\n                    altText\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query LandingData($locales: [Locale!]!, $includeCurrent: Boolean!) {\n        landings(locales: $locales) {\n            greet\n            localizations(locales: $locales, includeCurrent: $includeCurrent) {\n                locale\n                name\n                role\n                identity\n            }\n            socialMedia {\n                localizations(locales: $locales, includeCurrent: $includeCurrent) {\n                    locale\n                    text\n                }\n                link\n                buttonId\n            }\n            icon {\n                media\n                localizations(locales: $locales, includeCurrent: $includeCurrent) {\n                    locale\n                    altText\n                }\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query NavbarData($locales: [Locale!]!, $includeCurrent: Boolean!) {\n        navbars(locales: $locales) {\n            logo {\n                media\n                localizations(locales: $locales, includeCurrent: $includeCurrent) {\n                    locale\n                    altText\n                }\n            }\n            navlink {\n                localizations(locales: $locales, includeCurrent: $includeCurrent) {\n                    locale\n                    text\n                }\n                link\n                buttonId\n            }\n            navbtn {\n                localizations(locales: $locales, includeCurrent: $includeCurrent) {\n                    locale\n                    text\n                }\n                link\n                buttonId\n            }\n        }\n    }\n"): (typeof documents)["\n    query NavbarData($locales: [Locale!]!, $includeCurrent: Boolean!) {\n        navbars(locales: $locales) {\n            logo {\n                media\n                localizations(locales: $locales, includeCurrent: $includeCurrent) {\n                    locale\n                    altText\n                }\n            }\n            navlink {\n                localizations(locales: $locales, includeCurrent: $includeCurrent) {\n                    locale\n                    text\n                }\n                link\n                buttonId\n            }\n            navbtn {\n                localizations(locales: $locales, includeCurrent: $includeCurrent) {\n                    locale\n                    text\n                }\n                link\n                buttonId\n            }\n        }\n    }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;