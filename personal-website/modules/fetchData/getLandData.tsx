// GraphQL specific
import { gqlClient } from "@/modules/gql/graphqlClient";
import { LANDING_DATA } from "@/modules/queries/index";
import { Locale } from "@/modules/gql/graphql";

export default async function getLandData(locale: Locale): Promise<{
    landData: any;
}> {
    const variables = {
        locales: [locale],
        includeCurrent: true,
    };

    const data = await gqlClient.request(LANDING_DATA, variables);

    const pageData = data.landings[0];

    const landData = {
        greet: pageData.greet,
        localizations: pageData.localizations,
        socialMedia: pageData.socialMedia,
        icon: pageData.icon
    };

    return { landData };
}