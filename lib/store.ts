import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import data from "../data.json";

type Product = {
    product: string;
    website: string;
    llmsTxt: Record<string, string>;
    token_count: Record<string, number>;
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
