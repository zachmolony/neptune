const ScreenWrapper = ({ children }) => {
  return (
    <div className="p-24 w-full xl:max-w-screen-2xl mx-auto">{children}</div>
  );
};

export default ScreenWrapper;
