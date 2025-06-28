// GraphQL specific
import { gqlClient } from "@/modules/gql/graphqlClient";
import { NAVBAR_DATA } from "@/modules/queries/index";

import { Locale } from "@/modules/gql/graphql";

export default async function getNavData(locale: Locale): Promise<{
    navData: any;
}> {
    console.log("Fetching Navbar Data with Locale:", locale);
    const variables = {
        locales: [locale],
        includeCurrent: true,
    };
    const data = await gqlClient.request(NAVBAR_DATA, variables);

    const pageData = data.navbars[0];

    const navData = {
        logo: {
            media: pageData.logo?.media,
            localizations: pageData.logo?.localizations
        },
        navlink: pageData.navlink,
        navbtn: pageData.navbtn
    };

    return { navData };
}