// GraphQL specific
import { gqlClient } from "@/modules/gql/graphqlClient";
import { LANDING_DATA } from "@/modules/queries/index";

export default async function getLandData(): Promise<{
    landData: any;
}> {
    const data = await gqlClient.request(LANDING_DATA);

    const pageData = data.landings[0];

    const landData = {
        greet: pageData.greet,
        name: pageData.name,
        role: pageData.role,
        identity: pageData.identity,
        socialMedia: pageData.socialMedia,
        icon: pageData.icon
    };

    return { landData };
}
