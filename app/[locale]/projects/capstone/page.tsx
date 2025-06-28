// system requirement
import { Locale } from "@/modules/gql/graphql";

// data fetch
import getCapstoneData from "@/modules/fetchData/getCapstoneData";

// local components
import Sidebar from "@/components/projects/capstone/sidebar";
import CapstoneContent from "@/components/projects/capstone/capstone";

interface PageProps {
    params: {
        locale: string;
    };
}

export async function generateStaticParams() {
    return [{ locale: "en" }, { locale: "zh" }];
}

export default async function Capstone({
    params,
}: PageProps): Promise<JSX.Element> {
    const supportedLocales: Locale[] = [Locale.En, Locale.Zh];
    const locale = supportedLocales.includes(params.locale as Locale)
        ? (params.locale as Locale)
        : Locale.En;

    // Fetch localized data
    const { capData } = await getCapstoneData(locale);
    
    return (
        <div className="w-screen h-full bg-floral-white pt-navbar">
            <div className="content max-w-[1440px] flex flex-row w-full px-mobileX md:px-tabletX 2xl:px-desktopX 3xl:px-plusDesktopX gap-x-4">
                <div className="basis-1/4">
                    <Sidebar
                        sections={capData.sidebar}
                        logo={capData.logo}
                        locale={locale}
                    />
                </div>
                <div className="basis-3/4 flex flex-row">
                    <CapstoneContent
                        theoryImg={capData.theoryImg}
                        valueCardBg={capData.valueCardBg}
                        valueType={capData.valueType}
                        valueList={capData.valueList}
                        teamInfo={capData.teamInfo}
                        specialThanks={capData.specialThanks}
                        localizations={capData.localizations}
                        locale={locale}
                    />
                </div>
            </div>
        </div>
    );
}
