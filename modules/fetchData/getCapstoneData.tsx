// GraphQL specific
import { gqlClient } from "@/modules/gql/graphqlClient";
import { CAPSTONE_DATA } from "@/modules/queries/index";
import { Locale } from "@/modules/gql/graphql";

export default async function getCapstoneData(locale: Locale): Promise<{
    capData: any;
}> {
    const variables = {
        locales: [locale],
        includeCurrent: true,
    };

    const data = await gqlClient.request(CAPSTONE_DATA, variables);

    const pageData = data.capstones[0];

    const capData = {
        sidebar: pageData.sidebar,
        logo: pageData.logo,
        theoryImg: pageData.theoryImg,
        valueCardBg: pageData.valueCardBg,
        valueList: pageData.valueList,
        teamInfo: pageData.teamInfo,
        specialThanks: pageData.specialThanks,
        localizations: pageData.localizations,
    };

    console.log(capData.sidebar[0].mainTitle)

    return { capData };
}