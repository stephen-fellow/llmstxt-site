import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type Site = {
  name: string;
  description: string;
  url: string;
  urlDisplay: string;
};

interface SiteState {
  sites: Site[];
  getSites: (searchString: string) => Site[];
}

const useSiteStore = create<SiteState>()(
  devtools(
    persist(
      (set, get) => ({
        sites: [
          {
            name: "DuckDB",
            description: "DuckDB's llms.txt file location",
            url: "https://duckdb.org/duckdb-docs.md",
            urlDisplay: "duckdb.org/duckdb-docs.md",
          },
          {
            name: "PostgreSQL",
            description: "PostgreSQL's llms.txt file location",
            url: "https://www.postgresql.org/llms.txt",
            urlDisplay: "www.postgresql.org/llms.txt",
          },
          {
            name: "MySQL",
            description: "MySQL's llms.txt file location",
            url: "https://dev.mysql.com/llms.txt",
            urlDisplay: "dev.mysql.com/llms.txt",
          },
          {
            name: "SQLite",
            description: "SQLite's llms.txt file location",
            url: "https://sqlite.org/llms.txt",
            urlDisplay: "sqlite.org/llms.txt",
          },
        ],
        getSites: (searchString: string) => {
          return get().sites;
        },
      }),
      {
        name: "site-state",
      }
    )
  )
);

export default useSiteStore;
