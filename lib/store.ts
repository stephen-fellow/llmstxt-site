import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type Product = {
  product: string;
  website: string;
  llmsTxt: Record<string, string>;
};

interface SiteState {
  products: Product[];
  getProducts: (searchString: string) => Product[];
}

const useSiteStore = create<SiteState>()(
  devtools(
    persist(
      (set, get) => ({
        products: [
          {
            product: "Activepieces",
            website: "https://activepieces.com/",
            llmsTxt: {
              "llms-full.txt":
                "https://www.activepieces.com/docs/llms-full.txt",
              "llms.txt": "https://www.activepieces.com/docs/llms.txt",
            },
          },
          {
            product: "AI Squared",
            website: "https://squared.ai/",
            llmsTxt: {
              "llms-full.txt": "https://docs.squared.ai/llms-full.txt",
              "llms.txt": "https://docs.squared.ai/llms.txt",
            },
          },
          {
            product: "Answer.AI",
            website: "https://answer.ai/",
            llmsTxt: {
              "llms.txt": "https://www.answer.ai/llms.txt",
            },
          },
          {
            product: "Anthropic",
            website: "https://anthropic.com/",
            llmsTxt: {
              "llms-full.txt": "https://docs.anthropic.com/llms-full.txt",
              "llms.txt": "https://docs.anthropic.com/llms.txt",
            },
          },
          {
            product: "Aporia",
            website: "https://aporia.com/",
            llmsTxt: {
              "llms.txt": "https://gr-docs.aporia.com/llms.txt",
            },
          },
          {
            product: "Aptible",
            website: "https://aptible.com/",
            llmsTxt: {
              "llms-full.txt": "https://www.aptible.com/docs/llms-full.txt",
              "llms.txt": "https://www.aptible.com/docs/llms.txt",
            },
          },
          {
            product: "Argil AI",
            website: "https://argil.ai/",
            llmsTxt: {
              "llms.txt": "https://docs.argil.ai/llms.txt",
            },
          },
          {
            product: "Axiom",
            website: "https://axiom.co/",
            llmsTxt: {
              "llms-full.txt": "https://axiom.co/docs/llms-full.txt",
              "llms.txt": "https://axiom.co/docs/llms.txt",
            },
          },
          {
            product: "Axle",
            website: "https://axle.insure/",
            llmsTxt: {
              "llms.txt": "https://docs.axle.insure/llms.txt",
            },
          },
          {
            product: "BaseHub",
            website: "https://basehub.com/",
            llmsTxt: {
              "llms-full.txt": "https://docs.basehub.com/llms-full.txt",
              "llms.txt": "https://docs.basehub.com/llms.txt",
            },
          },
          {
            product: "Cobo",
            website: "https://cobo.com/",
            llmsTxt: {
              "llms-full.txt": "https://www.cobo.com/developers/llms-full.txt",
              "llms.txt": "https://www.cobo.com/developers/llms.txt",
            },
          },
          {
            product: "CrewAI",
            website: "https://crewai.com/",
            llmsTxt: {
              "llms-full.txt": "https://docs.crewai.com/llms-full.txt",
              "llms.txt": "https://docs.crewai.com/llms.txt",
            },
          },
          {
            product: "Cursor",
            website: "https://cursor.com/",
            llmsTxt: {
              "llms-full.txt": "https://docs.cursor.com/llms-full.txt",
              "llms.txt": "https://docs.cursor.com/llms.txt",
            },
          },
          {
            product: "Datafold",
            website: "https://datafold.com/",
            llmsTxt: {
              "llms-full.txt": "https://docs.datafold.com/llms-full.txt",
              "llms.txt": "https://docs.datafold.com/llms.txt",
            },
          },
          {
            product: "Dopp Finance",
            website: "https://dopp.finance/",
            llmsTxt: {
              "llms.txt": "https://docs.dopp.finance/llms.txt",
            },
          },
          {
            product: "dotenvx",
            website: "https://dotenvx.com/",
            llmsTxt: {
              "llms-full.txt": "https://dotenvx.com/llms-full.txt",
              "llms.txt": "https://dotenvx.com/llms.txt",
            },
          },
          {
            product: "Dub",
            website: "https://dub.co/",
            llmsTxt: {
              "llms-full.txt": "https://dub.co/docs/llms-full.txt",
              "llms.txt": "https://dub.co/docs/llms.txt",
            },
          },
          {
            product: "DuckDB",
            website: "https://duckdb.org/",
            llmsTxt: {
              "llms-full.txt": "https://duckdb.org/duckdb-docs.md",
            },
          },
          {
            product: "Dynamic",
            website: "https://dynamic.xyz/",
            llmsTxt: {
              "llms-full.txt": "https://docs.dynamic.xyz/llms-full.txt",
              "llms.txt": "https://docs.dynamic.xyz/llms.txt",
            },
          },
          {
            product: "ElevenLabs",
            website: "https://elevenlabs.io/",
            llmsTxt: {
              "llms-full.txt": "https://elevenlabs.io/docs/llms-full.txt",
              "llms.txt": "https://elevenlabs.io/docs/llms.txt",
            },
          },
          {
            product: "EmbedChain",
            website: "https://embedchain.ai/",
            llmsTxt: {
              "llms-full.txt": "https://docs.embedchain.ai/llms-full.txt",
              "llms.txt": "https://docs.embedchain.ai/llms.txt",
            },
          },
          {
            product: "Envoyer",
            website: "https://envoyer.io/",
            llmsTxt: {
              "llms-full.txt": "https://docs.envoyer.io/llms-full.txt",
              "llms.txt": "https://docs.envoyer.io/llms.txt",
            },
          },
          {
            product: "Evan Boehs",
            website: "https://boehs.org/",
            llmsTxt: {
              "llms.txt": "https://boehs.org/llms.txt",
            },
          },
          {
            product: "Fabric",
            website: "https://fabric.inc/",
            llmsTxt: {
              "llms-full.txt": "https://developer.fabric.inc/llms-full.txt",
              "llms.txt": "https://developer.fabric.inc/llms.txt",
            },
          },
          {
            product: "FastHTML",
            website: "https://fastht.ml/",
            llmsTxt: {
              "llms.txt": "https://docs.fastht.ml/llms.txt",
            },
          },
          {
            product: "Finch",
            website: "https://tryfinch.com/",
            llmsTxt: {
              "llms.txt": "https://developer.tryfinch.com/llms.txt",
            },
          },
          {
            product: "Fireworks AI",
            website: "https://fireworks.ai/",
            llmsTxt: {
              "llms-full.txt": "https://docs.fireworks.ai/llms-full.txt",
              "llms.txt": "https://docs.fireworks.ai/llms.txt",
            },
          },
          {
            product: "Flatfile",
            website: "https://flatfile.com/",
            llmsTxt: {
              "llms-full.txt": "https://flatfile.com/docs/llms-full.txt",
              "llms.txt": "https://flatfile.com/docs/llms.txt",
            },
          },
          {
            product: "FlowX",
            website: "https://flowx.ai/",
            llmsTxt: {
              "llms-full.txt": "https://docs.flowx.ai/llms-full.txt",
              "llms.txt": "https://docs.flowx.ai/llms.txt",
            },
          },
          {
            product: "FractalPay",
            website: "https://fractalpay.com/",
            llmsTxt: {
              "llms.txt": "https://docs.fractalpay.com/llms.txt",
            },
          },
          {
            product: "Frigade",
            website: "https://frigade.com/",
            llmsTxt: {
              "llms.txt": "https://docs.frigade.com/llms.txt",
            },
          },
          {
            product: "Galileo",
            website: "https://rungalileo.io/",
            llmsTxt: {
              "llms-full.txt": "https://docs.rungalileo.io/llms-full.txt",
              "llms.txt": "https://docs.rungalileo.io/llms.txt",
            },
          },
          {
            product: "Goody",
            website: "https://ongoody.com/",
            llmsTxt: {
              "llms.txt": "https://developer.ongoody.com/llms.txt",
            },
          },
          {
            product: "Helicone",
            website: "https://helicone.ai/",
            llmsTxt: {
              "llms.txt": "https://www.helicone.ai/llms.txt",
            },
          },
          {
            product: "Hugging Face Accelerate",
            website: "https://huggingface.co/",
            llmsTxt: {
              "llms.txt":
                "https://huggingface-projects-docs-llms-txt.hf.space/accelerate/llms.txt",
            },
          },
          {
            product: "Hugging Face Diffusers",
            website: "https://huggingface.co/",
            llmsTxt: {
              "llms.txt":
                "https://huggingface-projects-docs-llms-txt.hf.space/diffusers/llms.txt",
            },
          },
          {
            product: "Hugging Face Hub",
            website: "https://huggingface.co/",
            llmsTxt: {
              "llms.txt":
                "https://huggingface-projects-docs-llms-txt.hf.space/hub/llms.txt",
            },
          },
          {
            product: "Hugging Face Hub Python Library",
            website: "https://huggingface.co/",
            llmsTxt: {
              "llms.txt":
                "https://huggingface-projects-docs-llms-txt.hf.space/huggingface_hub/llms.txt",
            },
          },
          {
            product: "Hugging Face Transformers",
            website: "https://huggingface.co/",
            llmsTxt: {
              "llms.txt":
                "https://huggingface-projects-docs-llms-txt.hf.space/transformers/llms.txt",
            },
          },
          {
            product: "Hyperline",
            website: "https://hyperline.co/",
            llmsTxt: {
              "llms-full.txt": "https://docs.hyperline.co/llms-full.txt",
              "llms.txt": "https://docs.hyperline.co/llms.txt",
            },
          },
          {
            product: "Hypermode",
            website: "https://hypermode.com/",
            llmsTxt: {
              "llms.txt": "https://docs.hypermode.com/llms.txt",
            },
          },
          {
            product: "Infisical",
            website: "https://infisical.com/",
            llmsTxt: {
              "llms-full.txt": "https://infisical.com/docs/llms-full.txt",
              "llms.txt": "https://infisical.com/docs/llms.txt",
            },
          },
          {
            product: "Inkeep",
            website: "https://inkeep.com/",
            llmsTxt: {
              "llms-full.txt": "https://docs.inkeep.com/llms-full.txt",
              "llms.txt": "https://docs.inkeep.com/llms.txt",
            },
          },
          {
            product: "Intuned",
            website: "https://intunedhq.com/",
            llmsTxt: {
              "llms.txt": "https://docs.intunedhq.com/llms.txt",
            },
          },
          {
            product: "IonQ",
            website: "https://ionq.com/",
            llmsTxt: {
              "llms-full.txt": "https://docs.ionq.com/llms-full.txt",
              "llms.txt": "https://docs.ionq.com/llms.txt",
            },
          },
          {
            product: "Lago",
            website: "https://getlago.com/",
            llmsTxt: {
              "llms-full.txt": "https://getlago.com/docs/llms-full.txt",
              "llms.txt": "https://getlago.com/docs/llms.txt",
            },
          },
          {
            product: "Langfuse",
            website: "https://langfuse.com/",
            llmsTxt: {
              "llms.txt": "https://langfuse.com/llms.txt",
            },
          },
          {
            product: "llms.txt",
            website: "https://llmstxt.org/",
            llmsTxt: {
              "llms.txt": "https://llmstxt.org/llms.txt",
            },
          },
          {
            product: "llms.txt directory",
            website: "https://llmstxt.cloud/",
            llmsTxt: {
              "llms-full.txt": "https://directory.llmstxt.cloud/llms-full.txt",
              "llms.txt": "https://directory.llmstxt.cloud/llms.txt",
            },
          },
          {
            product: "Loops",
            website: "https://loops.so/",
            llmsTxt: {
              "llms-full.txt": "https://loops.so/docs/llms-full.txt",
              "llms.txt": "https://loops.so/docs/llms.txt",
            },
          },
          {
            product: "LuxAlgo",
            website: "https://luxalgo.com/",
            llmsTxt: {
              "llms-full.txt": "https://docs.luxalgo.com/llms-full.txt",
              "llms.txt": "https://docs.luxalgo.com/llms.txt",
            },
          },
          {
            product: "Mangopay",
            website: "https://mangopay.com/",
            llmsTxt: {
              "llms-full.txt": "https://docs.mangopay.com/llms-full.txt",
              "llms.txt": "https://docs.mangopay.com/llms.txt",
            },
          },
          {
            product: "Matt Rickard",
            website: "https://matt-rickard.com/",
            llmsTxt: {},
          },
          {
            product: "MeshConnect",
            website: "https://meshconnect.com/",
            llmsTxt: {
              "llms-full.txt": "https://docs.meshconnect.com/llms-full.txt",
              "llms.txt": "https://docs.meshconnect.com/llms.txt",
            },
          },
          {
            product: "Method Financial",
            website: "https://methodfi.com/",
            llmsTxt: {
              "llms-full.txt": "https://docs.methodfi.com/llms-full.txt",
              "llms.txt": "https://docs.methodfi.com/llms.txt",
            },
          },
          {
            product: "Micro1",
            website: "https://micro1.ai/",
            llmsTxt: {
              "llms.txt": "https://docs.micro1.ai/llms.txt",
            },
          },
          {
            product: "Mintlify",
            website: "https://mintlify.com/",
            llmsTxt: {
              "llms-full.txt": "https://mintlify.com/docs/llms-full.txt",
              "llms.txt": "https://mintlify.com/docs/llms.txt",
            },
          },
          {
            product: "OpenPhone",
            website: "https://openphone.com/",
            llmsTxt: {
              "llms.txt": "https://www.openphone.com/docs/llms.txt",
            },
          },
          {
            product: "OpenPipe",
            website: "https://openpipe.ai/",
            llmsTxt: {
              "llms-full.txt": "https://docs.openpipe.ai/llms-full.txt",
              "llms.txt": "https://docs.openpipe.ai/llms.txt",
            },
          },
          {
            product: "Oxla",
            website: "https://oxla.com/",
            llmsTxt: {
              "llms-full.txt": "https://docs.oxla.com/llms-full.txt",
              "llms.txt": "https://docs.oxla.com/llms.txt",
            },
          },
          {
            product: "Perplexity",
            website: "https://perplexity.ai/",
            llmsTxt: {
              "llms-full.txt": "https://docs.perplexity.ai/llms-full.txt",
              "llms.txt": "https://docs.perplexity.ai/llms.txt",
            },
          },
          {
            product: "Pinecone",
            website: "https://pinecone.io/",
            llmsTxt: {
              "llms-full.txt": "https://docs.pinecone.io/llms-full.txt",
              "llms.txt": "https://docs.pinecone.io/llms.txt",
            },
          },
          {
            product: "Plain",
            website: "https://plain.com/",
            llmsTxt: {
              "llms-full.txt": "https://www.plain.com/docs/llms-full.txt",
              "llms.txt": "https://www.plain.com/docs/llms.txt",
            },
          },
          {
            product: "PrimeV",
            website: "https://primev.xyz/",
            llmsTxt: {
              "llms-full.txt": "https://docs.primev.xyz/llms-full.txt",
              "llms.txt": "https://docs.primev.xyz/llms.txt",
            },
          },
          {
            product: "ProjectDiscovery",
            website: "https://projectdiscovery.io/",
            llmsTxt: {
              "llms-full.txt": "https://docs.projectdiscovery.io/llms-full.txt",
              "llms.txt": "https://docs.projectdiscovery.io/llms.txt",
            },
          },
          {
            product: "Quill",
            website: "https://quillsql.com/",
            llmsTxt: {
              "llms.txt": "https://docs.quillsql.com/llms.txt",
            },
          },
          {
            product: "Resend",
            website: "https://resend.com/",
            llmsTxt: {
              "llms-full.txt": "https://resend.com/docs/llms-full.txt",
              "llms.txt": "https://resend.com/docs/llms.txt",
            },
          },
          {
            product: "Roc",
            website: "https://roc-lang.org/",
            llmsTxt: {
              "llms.txt": "https://www.roc-lang.org/llms.txt",
            },
          },
          {
            product: "Salesbricks",
            website: "https://salesbricks.com/",
            llmsTxt: {
              "llms-full.txt": "https://docs.salesbricks.com/llms-full.txt",
              "llms.txt": "https://docs.salesbricks.com/llms.txt",
            },
          },
          {
            product: "Sardine",
            website: "https://sardine.ai/",
            llmsTxt: {
              "llms-full.txt": "https://docs.sardine.ai/llms-full.txt",
              "llms.txt": "https://docs.sardine.ai/llms.txt",
            },
          },
          {
            product: "Smartcar",
            website: "https://smartcar.com/",
            llmsTxt: {
              "llms-full.txt": "https://smartcar.com/docs/llms-full.txt",
              "llms.txt": "https://smartcar.com/docs/llms.txt",
            },
          },
          {
            product: "Solid",
            website: "https://solidfi.com/",
            llmsTxt: {
              "llms.txt": "https://docs.solidfi.com/llms.txt",
            },
          },
          {
            product: "Stedi",
            website: "https://stedi.com/",
            llmsTxt: {
              "llms-full.txt": "https://www.stedi.com/docs/llms-full.txt",
              "llms.txt": "https://www.stedi.com/docs/llms.txt",
            },
          },
          {
            product: "Tinybird",
            website: "https://tinybird.co/",
            llmsTxt: {
              "llms-full.txt": "https://www.tinybird.co/docs/llms-full.txt",
              "llms.txt": "https://www.tinybird.co/docs/llms.txt",
            },
          },
          {
            product: "Trigger.dev",
            website: "https://trigger.dev/",
            llmsTxt: {
              "llms-full.txt": "https://trigger.dev/docs/llms-full.txt",
              "llms.txt": "https://trigger.dev/docs/llms.txt",
            },
          },
          {
            product: "Turso",
            website: "https://turso.tech/",
            llmsTxt: {
              "llms-full.txt": "https://docs.turso.tech/llms-full.txt",
              "llms.txt": "https://docs.turso.tech/llms.txt",
            },
          },
          {
            product: "UnifyGTM",
            website: "https://unifygtm.com/",
            llmsTxt: {
              "llms.txt": "https://docs.unifygtm.com/llms.txt",
            },
          },
          {
            product: "Unkey",
            website: "https://unkey.com/",
            llmsTxt: {
              "llms.txt": "https://www.unkey.com/docs/llms.txt",
            },
          },
          {
            product: "Unstructured",
            website: "https://unstructured.io/",
            llmsTxt: {
              "llms-full.txt": "https://docs.unstructured.io/llms-full.txt",
              "llms.txt": "https://docs.unstructured.io/llms.txt",
            },
          },
          {
            product: "Upstash",
            website: "https://upstash.com/",
            llmsTxt: {
              "llms-full.txt": "https://upstash.com/docs/llms-full.txt",
              "llms.txt": "https://upstash.com/docs/llms.txt",
            },
          },
          {
            product: "Velt",
            website: "https://velt.dev/",
            llmsTxt: {
              "llms-full.txt": "https://docs.velt.dev/llms-full.txt",
              "llms.txt": "https://docs.velt.dev/llms.txt",
            },
          },
          {
            product: "Vital",
            website: "https://tryvital.io/",
            llmsTxt: {
              "llms-full.txt": "https://docs.tryvital.io/llms-full.txt",
              "llms.txt": "https://docs.tryvital.io/llms.txt",
            },
          },
          {
            product: "Workflow",
            website: "https://workflow.design/",
            llmsTxt: {
              "llms.txt": "https://docs.workflow.design/llms.txt",
            },
          },
          {
            product: "Zapier",
            website: "https://zapier.com/",
            llmsTxt: {
              "llms-full.txt": "https://docs.zapier.com/llms-full.txt",
              "llms.txt": "https://docs.zapier.com/llms.txt",
            },
          },
        ] as Product[],
        getProducts: (searchString: string) => {
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
