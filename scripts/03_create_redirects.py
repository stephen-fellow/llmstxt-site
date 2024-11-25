import json

data = json.load(open("data_raw.json"))

redirects = []
for product in data:
    source_path = product["product"].lower().replace(" ", "-").replace(".", "-")
    destination_path = "#"
    if product["llms-full-txt"]:
        destination_path = product["llms-full-txt"]
    elif product["llms-txt"]:
        destination_path = product["llms-txt"]
    else:
        print(f"No destination path for {product['product']}")
        continue

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


with open("redirects.json", "w") as f:
    json.dump({"redirects": redirects}, f, indent=4)
