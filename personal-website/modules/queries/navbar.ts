import { gql } from "../gql";

export const NAVBAR_DATA = gql(`
    query NavbarData($locales: [Locale!]!, $includeCurrent: Boolean!) {
        navbars(locales: $locales) {
            logo {
                media
                localizations(locales: $locales, includeCurrent: $includeCurrent) {
                    locale
                    altText
                }
            }
            navlink {
                localizations(locales: $locales, includeCurrent: $includeCurrent) {
                    locale
                    text
                }
                link
                buttonId
            }
            navbtn {
                localizations(locales: $locales, includeCurrent: $includeCurrent) {
                    locale
                    text
                }
                link
                buttonId
            }
        }
    }
`);
