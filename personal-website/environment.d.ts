declare global {
  namespace NodeJS {
    interface ProcessEnv {
        BASE_URL: string;
        NEXT_PUBLIC_CLOUDINARY_NAME: string;
        NEXT_PUBLIC_HYGRAPH_URL: string;
        HYGRAPH_TOKEN: string;
    }
  }
}

export {}
