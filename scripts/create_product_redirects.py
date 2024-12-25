def create_product_redirects(product: dict):
    redirects = []
    source_path = product["product"].lower().replace(" ", "-").replace(".", "-")
    destination_path = "#"
    if product["llms-full-txt"]:
        destination_path = product["llms-full-txt"]
    elif product["llms-txt"]:
        destination_path = product["llms-txt"]
    else:
        print(f"No destination path for {product['product']}")
        return redirects

    redirects.append(
        {
            "source": f"/{source_path}",
            "destination": destination_path,
            "permanent": True,
        }
    )

    if product["llms-full-txt"]:
        redirects.append(
            {
                "source": f"/{source_path}/llms-full.txt",
                "destination": product["llms-full-txt"],
                "permanent": True,
            }
        )

    if product["llms-txt"]:
        redirects.append(
            {
                "source": f"/{source_path}/llms.txt",
                "destination": product["llms-txt"],
                "permanent": True,
            }
        )

    return redirects
