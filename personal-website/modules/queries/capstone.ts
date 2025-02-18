import { gql } from "../gql";

export const CAPSTONE_DATA = gql(`
    query CapstoneData($locales: [Locale!]!, $includeCurrent: Boolean!) {
        capstones(locales: $locales) {
            logo {
                media
                localizations(locales: $locales, includeCurrent: $includeCurrent) {
                    locale
                    __typename
                    altText
                }
            }
            theoryImg {
                media
                localizations(locales: $locales, includeCurrent: $includeCurrent) {
                    locale
                    __typename
                    altText
                }
            }
            valueList {
                name
                category
                definition
                example
                related
            }
            teamInfo {
                image {
                    media
                    localizations(locales: $locales, includeCurrent: $includeCurrent) {
                        locale
                        altText
                    }
                }
                buttons {
                    localizations(locales: $locales, includeCurrent: $includeCurrent) {
                        text
                    }
                    link
                    buttonId
                }
                localizations(locales: $locales, includeCurrent: $includeCurrent) {
                    description
                }
            }
            specialThanks {
                image {
                    media
                    localizations(locales: $locales, includeCurrent: $includeCurrent) {
                        locale
                        altText
                    }
                }
                buttons {
                    localizations(locales: $locales, includeCurrent: $includeCurrent) {
                        text
                    }
                    link
                    buttonId
                }
                localizations(locales: $locales, includeCurrent: $includeCurrent) {
                    description
                }
            }
            reference
            localizations(locales: $locales, includeCurrent: $includeCurrent) {
                title
                introduction
                theoryIntro
                valueDefinition
                systemOverview
                productUsage
                alertUsage
            }
        }
    }
`);