const PageHeading = ({ brand, title }) => {
  return (
    <div className="py-4">
      <h2>{brand}</h2>
      <h1 className="w-full pb-4 text-4xl font-black underline">{title}</h1>
    </div>
  );
};

export default PageHeading;
