import React from "react";
import { RichTextContent, Text } from "@graphcms/rich-text-types";

interface Props {
    content: RichTextContent;
    className?: string;
}

export default function RichTextRenderer({ content, className }: Props) {
    const renderNode = (node: any, key: number): React.ReactNode => {
        if ("text" in node) {
            let children: React.ReactNode = node.text;

            // Handle non-standard mark
            if ((node as any).superscript) {
                children = <sup>{children}</sup>;
            }

            if (node.bold) {
                children = <strong>{children}</strong>;
            }
            if (node.italic) {
                children = <em>{children}</em>;
            }
            if (node.underline) {
                children = <u>{children}</u>;
            }
            if (node.code) {
                children = <code>{children}</code>;
            }

            return <>{children}</>;
        }

        const children = node.children.map((child: Text, i: number) => (
            <React.Fragment key={i}>{renderNode(child, i)}</React.Fragment>
        ));

        switch (node.type) {
            case "heading-one":
                return (
                    <h1 key={key} className={`${className} text-3xl font-bold`}>
                        {children}
                    </h1>
                );
            case "heading-two":
                return (
                    <h2 key={key} className={`${className} text-2xl font-bold`}>
                        {children}
                    </h2>
                );
            case "heading-three":
                return (
                    <h3
                        key={key}
                        className={`${className} text-2xl font-semibold`}>
                        {children}
                    </h3>
                );
            case "heading-four":
                return (
                    <h4 key={key} className={className}>
                        {children}
                    </h4>
                );
            case "paragraph":
                return (
                    <p key={key} className={`text-base lg:text-lg ${className}`}>
                        {children}
                    </p>
                );
            case "bulleted-list":
                return (
                    <ul
                        key={key}
                        className={`list-disc pl-6 space-y-1 text-base lg:text-lg ${className}`}>
                        {children}
                    </ul>
                );
            case "numbered-list":
                return (
                    <ol
                        key={key}
                        className={`list-decimal pl-6 space-y-1 text-base lg:text-lg ${className}`}>
                        {children}
                    </ol>
                );
            case "list-item":
                return (
                    <li key={key} className={`text-base lg:text-lg ${className}`}>
                        {children}
                    </li>
                );
            case "list-item-child":
                return (
                    <span
                        key={key}
                        className={`text-base lg:text-lg ${className}`}>
                        {children}
                    </span>
                );
            default:
                return (
                    <div
                        key={key}
                        className={`text-base lg:text-lg ${className}`}>
                        {children}
                    </div>
                );
        }
    };

    return (
        <>
            {Array.isArray(content)
                ? content.map((node, i) => renderNode(node, i))
                : content.children.map((node, i) => renderNode(node, i))}
        </>
    );
}
