import Sidebar from "@/components/projects/capstone/sidebar";
import getCapstoneData from "@/modules/fetchData/getCapstoneData";
import { Locale } from "@/modules/gql/graphql";

interface PageProps {
    params: {
        locale: string;
    };
}

export default async function Capstone(): Promise<JSX.Element> {
    const locale = Locale.En;

    // Fetch localized data
    
    const capData = await getCapstoneData(locale);
    const sections = [
        {
            name: "Introduction to the Values Theory",
            subSection: false,
        },
        {
            name: "Schwartz's Value Theory",
            subSection: false,
        },
        {
            name: "List of Values and Definitions",
            subSection: true,
            sub: ["Achievement",
               "Benevolence",
                "Conformity",
               "Hedonism",
                "Power",
                "Security",
              "Self-Direction",
                "Stimulation",
               "Tradition",
               "Universalism",
            ],
        },
        { name: "System Overview", subSection: false },
        { name: "How is Our Product Useful?", subSection: false },
        { name: "Our Team", subSection: false },
        { name: "Special Thanks", subSection: false },
        { name: "Reference", subSection: false }
    ];
    return (
        <div className="flex flex-row w-screen h-full">
            <Sidebar sections={sections} logo={capData.capData.logo}/>
            <div className="basis-3/4 bg-egg flex flex-row"></div>
        </div>
    );
}
