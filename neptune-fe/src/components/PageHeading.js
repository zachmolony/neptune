import { Avatar } from "@shopify/polaris";

const PageHeading = ({ brand, title }) => {
  const initials = brand.match(/\b\w/g).join("") || "";
  return (
    <div className="flex justify-between">
      <div className="py-4">
        <h2>{brand}</h2>
        <h1 className="w-full pb-4 text-4xl font-black underline">{title}</h1>
      </div>
      <div className="pt-10 flex justify-between items-middle">
        <div className="pt-2 pr-4">
          <h3>{brand}</h3>
        </div>
        <div>
          <Avatar initials={initials} />
        </div>
      </div>
    </div>
  );
};

export default PageHeading;
