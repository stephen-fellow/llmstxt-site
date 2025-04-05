from .data_models import Redirect, Product


def create_product_redirects(product: Product):
    redirects = []
    source_path = product.product.lower().replace(" ", "-").replace(".", "-")
    destination_path = "#"
    if product.llms_full_txt:
        destination_path = product.llms_full_txt
    elif product.llms_txt:
        destination_path = product.llms_txt
    else:
        print(f"No destination path for {product.product}")
        return redirects

    redirects.append(
        Redirect(
            source=f"/{source_path}",
            destination=destination_path,
            base_path=False,
            permanent=True,
        )
    )

    if product.llms_full_txt:
        redirects.append(
            Redirect(
                source=f"/{source_path}/llms-full.txt",
                destination=product.llms_full_txt,
                base_path=False,
                permanent=True,
            )
        )

    if product.llms_txt:
        redirects.append(
            Redirect(
                source=f"/{source_path}/llms.txt",
                destination=product.llms_txt,
                base_path=False,
                permanent=True,
            )
        )

    return redirects
