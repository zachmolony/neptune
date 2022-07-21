const PageWrapper = ({ children }) => {
  return (
    <div className="h-screen xl:max-w-screen-2xl mx-auto">
      <div className="h-full flex mx-32 items-center">{children}</div>
    </div>
  );
};

export default PageWrapper;
