import Menu from "@/components/utils/navbar";
import getNavData from "@/modules/fetchData/getNavData";
import getLandData from "@/modules/fetchData/getLandData";
import Banner from "@/components/homePage/banner";

interface PageProps {
    params: {
        locale: string;
    };
}

export default async function Home({params}: PageProps): Promise<JSX.Element> {
     const { locale } = params;

    const navData = getNavData();
    const landData = getLandData();

    const navbar = await navData;
    const landing = await landData;
    return (
        <div className="">
            <Menu data={navbar.navData} locale={locale} />
            <Banner data={landing.landData} locale={locale} />
            <div className="bg-egg flex flex-row"></div>
        </div>
    );
}
