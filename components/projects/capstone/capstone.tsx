// internal components
import CldImage from '@/components/utils/cldImage';
import RichTextRenderer from '@/components/utils/richTextCapstone';
import ValueCard from './valueCard';

interface Props {
    theoryImg: {
        media: any;
        localizations: Array<{
            locale: string;
            altText: string;
        }>;
    };
    valueCardBg: {
        media: any;
        localizations: Array<{
            locale: string;
            altText: string;
        }>;
    };
    valueType: Array<string>;
    valueList: Array<{
        valueType: Array<string>;
        localizations: Array<{
            locale: string;
            name: string;
            definition: string;
            example: string;
            related: Array<string>;
        }>;
    }>;
    teamInfo: Array<{
        image: {
            media: any;
            localizations: Array<{
                locale: string;
                altText: string;
            }>;
        };
        buttons: Array<{
            localizations: Array<{
                locale: string;
                text: string;
            }>;
            link: string;
            buttonId: string;
        }>;
        localizations: Array<{
            locale: string;
            description: { raw: any };
        }>;
    }>;
    specialThanks: Array<{
        image: {
            media: any;
            localizations: Array<{
                locale: string;
                altText: string;
            }>;
        };
        buttons: Array<{
            localizations: Array<{
                locale: string;
                text: string;
            }>;
            link: string;
            buttonId: string;
        }>;
        localizations: Array<{
            locale: string;
            description: { raw: any };
        }>;
    }>;
    localizations: Array<{
        locale: string;
        title: { raw: any };
        introduction: { raw: any };
        theoryIntro: Array<{ raw: any }>;
        valueDefinition: Array<{ raw: any }>;
        systemOverview: { raw: any };
        productUsage: Array<{ raw: any }>;
        alertUsage: { raw: any };
        reference: { raw: any };
    }>;
    
    locale: string;
}

export default function CapstoneContent( props: Props ): JSX.Element { 
    const { theoryImg, valueCardBg, valueType, valueList, teamInfo, specialThanks, localizations, locale } = props;

    return (
        <div className="w-full flex flex-col gap-y-4">
            <div className="w-full flex flex-col gap-y-1 lg:gap-y-2">
                <RichTextRenderer
                    content={
                        localizations.find((i) => i.locale === locale)?.title
                            .raw ??
                        localizations.find((i) => i.locale === "en")!.title.raw
                    }
                />
                <RichTextRenderer
                    content={
                        localizations.find((i) => i.locale === locale)
                            ?.introduction.raw ??
                        localizations.find((i) => i.locale === "en")!
                            .introduction.raw
                    }
                />
            </div>
            <div className="w-full flex flex-col gap-y-1 lg:gap-y-2">
                <RichTextRenderer
                    content={
                        localizations.find((i) => i.locale === locale)
                            ?.theoryIntro[0].raw ??
                        localizations.find((i) => i.locale === "en")!
                            .theoryIntro[0].raw
                    }
                />
                <div className="py-4 w-full flex flex-col items-center">
                    <CldImage
                        height={theoryImg.media.height}
                        width={theoryImg.media.width}
                        crop="fill"
                        src={theoryImg.media.public_id}
                        alt={
                            theoryImg.localizations.find(
                                (i) => i.locale === locale
                            )?.altText || ""
                        }
                        sizes="(min-width: 768px) 48vw, (min-width: 1280px) 18vw, 100vw"
                        className="w-[70%]"
                    />
                    <RichTextRenderer
                        content={
                            localizations.find((i) => i.locale === locale)
                                ?.theoryIntro[1].raw ??
                            localizations.find((i) => i.locale === "en")!
                                .theoryIntro[1].raw
                        }
                        className="w-full text-center"
                    />
                </div>
                <RichTextRenderer
                    content={
                        localizations.find((i) => i.locale === locale)
                            ?.theoryIntro[2].raw ??
                        localizations.find((i) => i.locale === "en")!
                            .theoryIntro[2].raw
                    }
                />
            </div>
            <div>
                <RichTextRenderer
                    content={
                        localizations.find((i) => i.locale === locale)
                            ?.valueDefinition[0].raw ??
                        localizations.find((i) => i.locale === "en")!
                            .valueDefinition[0].raw
                    }
                />
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-4 w-full'>
                    {valueList.map((item) => <ValueCard valueType={item.valueType} valueCardBg={valueCardBg} localizations={item.localizations} locale={locale}/>)}
                </div>
            </div>
        </div>
    );
}