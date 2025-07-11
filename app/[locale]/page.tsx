import getLandData from "@/modules/fetchData/getLandData";
import Banner from "@/components/homePage/banner";
import { Locale } from "@/modules/gql/graphql";
// import CloudScene from "@/components/Cloud";

interface PageProps {
    params: {
        locale: string;
    };
}

export async function generateStaticParams() {
    return [{ locale: "en" }, { locale: "zh" }];
}

export default async function Home({
    params,
}: PageProps): Promise<JSX.Element> {
    const supportedLocales: Locale[] = [Locale.En, Locale.Zh];
    const locale = supportedLocales.includes(params.locale as Locale)
        ? (params.locale as Locale)
        : Locale.En;

    // Fetch localized data

    const landData = await getLandData(locale);

    return (
        <div className="bg-sky-200">
            {/* <CloudScene /> */}
            <Banner data={landData.landData} locale={locale} />
            <div className="bg-floral-white flex flex-row"></div>
        </div>
    );
}
