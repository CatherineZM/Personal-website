import { gql } from "../gql";

export const LANDING_DATA = gql(`
    query LandingData {
        landings {
            greet
            localizations {
                locale
                name
                role
                identity
            }
            socialMedia {
                localizations {
                    locale
                    text
                }
                link
                buttonId
            }
            icon {
                media
                localizations {
                    locale
                    altText
                }
            }
        }
    }
`);
