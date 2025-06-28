// internal components
// import CldImage from "@/components/utils/cldImage";

interface Props {
    valueType: Array<string>;
    valueCardBg: {
        media: any;
        localizations: Array<{
            locale: string;
            altText: string;
        }>;
    };
    localizations: Array<{
        locale: string;
        name: string;
        definition: string;
        example: string;
        related: Array<string>;
    }>;
    locale: string;
}

export default function ValueCard(props: Props): JSX.Element {
    const { valueType, localizations, locale } = props;

    const renderValueType = (valueType: string, index: number) => {
        let displayType;
        if( locale === "en" ){
            switch (valueType) {
                case "enhancement": 
                    displayType = "Self-Enhancement";
                    break;
                case "transcendence": 
                    displayType = "Self-Transcendence";
                    break;
                case "openness": 
                    displayType = "Openness to Change";
                    break;
                case "conservation": 
                    displayType = "Conservation";
                    break;
                default: 
                    displayType = "None";
                    break;
            }
        } else {
            switch (valueType) {
                case "enhancement": 
                    displayType = "自我提升";
                    break;
                case "transcendence": 
                    displayType = "自我超越";
                    break;
                case "openness": 
                    displayType = "对变化的开放性态度";
                    break;
                case "conservation": 
                    displayType = "保守";
                    break;
                default: 
                    displayType = "无";
                    break;
            }
        }
        return(
            <div key={index} className='bg-blue-orchid/30 text-xs w-fit h-fit px-1 py-0.5 rounded-full'>
                {displayType}
            </div>
        )
    }

    return (
        <div className="value-card w-full h-fit flex flex-col rounded-xl">
            <div className="flex flex-col gap-y-1 py-3 px-3">
                <h3 className="text-2xl font-semibold">
                    {localizations.find((i) => i.locale === locale)?.name ??
                        localizations.find((i) => i.locale === "en")!.name}
                </h3>
                {valueType.map((item, index) => renderValueType(item, index))}
            </div>

            <div className="bg-white py-3 px-3 flex flex-col gap-y-2 rounded-b-xl">
                <div className="text-sm lg:text-base">
                    <p className="font-bold">
                        {locale === "en" ? "Definition:" : "定义"}
                    </p>
                    <p>
                        {localizations.find((i) => i.locale === locale)
                            ?.definition ??
                            localizations.find((i) => i.locale === "en")!
                                .definition}
                    </p>
                </div>
                <div className="text-sm lg:text-base">
                    <p className="font-bold">
                        {locale === "en" ? "Example Statement:" : "例句"}
                    </p>
                    <p>
                        {localizations.find((i) => i.locale === locale)
                            ?.example ??
                            localizations.find((i) => i.locale === "en")!
                                .example}
                    </p>
                </div>
                <div className="flex flex-col gap-y-1">
                    <p className="text-sm lg:text-base font-bold">
                        {locale === "en" ? "Related Values:" : "相关价值观"}
                    </p>
                    <div className="flex flex-row flex-wrap gap-x-1 gap-y-1">
                        {(
                            localizations.find((i) => i.locale === locale)
                                ?.related ??
                            localizations.find((i) => i.locale === "en")!
                                .related
                        ).map((item: string, index: number) => (
                            <div
                                key={index}
                                className="bg-blue-orchid/30 text-xs w-fit h-fit px-1.5 py-0.5 rounded-full">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
