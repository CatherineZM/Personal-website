import { gql } from "../gql";

export const NAVBAR_DATA = gql(`
    query NavbarData {
        navbars {
            logo {
                media
                localizations {
                    locale
                    altText
                }
            }
            navlink {
                localizations {
                    locale
                    text
                }
                link
                buttonId
            }
            navbtn {
                localizations {
                    locale
                    text
                }
                link
                buttonId
            }
        }
    }
`);
