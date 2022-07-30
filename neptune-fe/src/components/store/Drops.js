import { Card, ResourceList, TextStyle, Thumbnail } from "@shopify/polaris";

const Drops = ({ products }) => {
  const data = products.map(({ id, name, images }) => ({
    id,
    sku: id.split("_")[1],
    url: `/products/${id}`,
    name,
    media: <Thumbnail source={images[0]} alt={name} />,
    quantity: "100",
  }));
  return (
    <Card.Section name="Items">
      <ResourceList
        resourceName={{ singular: "product", plural: "products" }}
        items={data}
        renderItem={(item) => {
          const { id, sku, url, name, media, quantity } = item;

          return (
            <ResourceList.Item
              id={id}
              url={url}
              media={media}
              accessibilityLabel={`View details for ${name}`}
            >
              <h3>
                <TextStyle variation="strong">{name}</TextStyle>
              </h3>
              <div>SKU: {sku}</div>
              <div>{quantity} available</div>
            </ResourceList.Item>
          );
        }}
      />
    </Card.Section>
  );
};

export default Drops;
