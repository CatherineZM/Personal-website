
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: "https://ca-central-1.cdn.hygraph.com/content/clz6sjw7y04b907uj3xkwltgw/master",
    documents: "modules/queries/*.ts",
    generates: {
        "modules/gql/": {
            preset: "client",
            plugins: [],
            presetConfig: {
                gqlTagName: "gql",
            },
        },
    },
};

export default config;
