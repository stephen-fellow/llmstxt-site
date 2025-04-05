from dataclasses import dataclass
from typing import Optional


@dataclass
class Product:
    product: str
    website: str
    llms_txt: Optional[str] = ""
    llms_full_txt: Optional[str] = ""
    llms_txt_tokens: Optional[int] = None
    llms_full_txt_tokens: Optional[int] = None

    def to_json(self) -> dict:
        return {
            "product": self.product,
            "website": self.website,
            "llms-txt": self.llms_txt,
            "llms-full-txt": self.llms_full_txt,
            "llms-txt-tokens": self.llms_txt_tokens,
            "llms-full-txt-tokens": self.llms_full_txt_tokens,
        }


@dataclass
class Redirect:
    source: str
    destination: str
    base_path: bool = False
    permanent: bool = True

    def to_json(self) -> dict:
        return {
            "source": self.source,
            "destination": self.destination,
            "basePath": self.base_path,
            "permanent": self.permanent,
        }
