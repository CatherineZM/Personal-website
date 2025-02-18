// GraphQL specific
import { gqlClient } from "@/modules/gql/graphqlClient";
import { CAPSTONE_DATA } from "@/modules/queries/index";
import { Locale } from "@/modules/gql/graphql";

export default async function getCapstoneData(locale: Locale): Promise<{
    capData: any;
}> {
    const variables = {
        locales: [Locale.En],
        includeCurrent: true,
    };

    const data = await gqlClient.request(CAPSTONE_DATA, variables);

    const pageData = data.capstones[0];

    const capData = {
        logo: pageData.logo,
        theoryImg: pageData.theoryImg,
        valueList: pageData.valueList,
        teamInfo: pageData.teamInfo,
        specialThanks: pageData.specialThanks,
        reference: pageData.reference,
        localizations: pageData.localizations,
    };

    return { capData };
}