// GraphQL specific
import { gqlClient } from "@/modules/gql/graphqlClient";
import { NAVBAR_DATA } from "@/modules/queries/index";

export default async function getNavData(): Promise<{
    navData: any;
}> {
    const data = await gqlClient.request(NAVBAR_DATA);

    const pageData = data.navbars[0];

    const navData = {
        logo: {
            media: pageData.logo?.media,
            altText: pageData.logo?.altText,
        },
        navlink: pageData.navlink, 
        navbtn: pageData.navbtn
    };

    return { navData };
}
