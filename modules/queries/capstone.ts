import { gql } from "../gql";

export const CAPSTONE_DATA = gql(`
    query CapstoneData($locales: [Locale!]!, $includeCurrent: Boolean!) {
        capstones(locales: $locales) {
            sidebar {
                mainTitle {
                    localizations(locales: $locales, includeCurrent: $includeCurrent) {
                        locale
                        text
                        link
                        buttonId
                    }
                }
                subitem
                subList {
                    localizations(locales: $locales, includeCurrent: $includeCurrent) {
                        locale
                        text
                        link
                        buttonId
                    }
                }
            }
            logo {
                media
                localizations(locales: $locales, includeCurrent: $includeCurrent) {
                    locale    
                    altText
                }
            }
            theoryImg {
                media
                localizations(locales: $locales, includeCurrent: $includeCurrent) {
                    locale
                    altText
                }
            }
            valueCardBg {
                media
                localizations(locales: $locales, includeCurrent: $includeCurrent) {
                    locale
                    altText
                }
            }
            valueList {
                valueType
                localizations(locales: $locales, includeCurrent: $includeCurrent) {
                    locale
                    name
                    definition
                    example
                    related
                }
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
                        locale
                        text
                    }
                    link
                    buttonId
                }
                localizations(locales: $locales, includeCurrent: $includeCurrent) {
                    locale
                    description {
                        raw
                    }
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
                        locale
                        text
                    }
                    link
                    buttonId
                }
                localizations(locales: $locales, includeCurrent: $includeCurrent) {
                        locale
                    description {
                        raw
                    }
                }
            }
            localizations(locales: $locales, includeCurrent: $includeCurrent) {
                locale
                title {
                    raw
                }
                introduction {
                    raw
                }
                theoryIntro {
                    raw
                }
                valueDefinition {
                    raw
                }
                systemOverview {
                    raw
                }
                productUsage {
                    raw
                }
                alertUsage {
                    raw
                }
                reference {
                    raw
                }
            }
        }
    }
`);