import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import data from "./products_data.json";

export type Product = {
    product: string;
    website: string;
    "llms-full-txt": string;
    "llms-full-txt-tokens": number;
    "llms-txt": string;
    "llms-txt-tokens": number;
};

interface SiteState {
    products: Product[];
    getProducts: () => Product[];
}

const useSiteStore = create<SiteState>()(
    devtools(
        persist(
            (set, get) => ({
                products: data as Product[],
                getProducts: () => {
                    return get().products;
                },
            }),
            {
                name: "site-state",
            }
        )
    )
);

export default useSiteStore;
