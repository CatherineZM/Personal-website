import { gql } from "../gql";

export const LANDING_DATA = gql(`
    query LandingData($locales: [Locale!]!, $includeCurrent: Boolean!) {
        landings(locales: $locales) {
            greet
            localizations(locales: $locales, includeCurrent: $includeCurrent) {
                locale
                name
                role
                identity
            }
            socialMedia {
                localizations(locales: $locales, includeCurrent: $includeCurrent) {
                    locale
                    text
                }
                link
                buttonId
            }
            icon {
                media
                localizations(locales: $locales, includeCurrent: $includeCurrent) {
                    locale
                    altText
                }
            }
        }
    }
`);
