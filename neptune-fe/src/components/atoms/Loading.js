import { Spinner } from "@shopify/polaris";

const Loading = () => {
  return (
    <div className="w-full flex justify-center py-24">
      <Spinner />
    </div>
  );
};

export default Loading;
