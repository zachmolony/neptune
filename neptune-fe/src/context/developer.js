import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const DeveloperContext = createContext({});

const useDeveloper = () => {
  const context = useContext(DeveloperContext);
  if (context === undefined) {
    throw new Error("useDeveloper must be used within a CountProvider");
  }
  return context;
};

const DeveloperProvider = ({ children }) => {
  const [fees, setFees] = useState(null);

  useEffect(() => {
    const getFees = async () => {
      await axios({
        method: "get",
        url: "http://localhost:4242/fees"
      }).then(function (response) {
        console.log("response", response);
        const totalFees = response.data.reduce(
          (acc, fee) => acc + fee.amount,
          0
        );
        console.log("totalFees", totalFees);
        setFees(totalFees);
      });
    };

    getFees();
  }, []);

  const contextValue = {
    fees
  };
  return (
    <DeveloperContext.Provider value={contextValue}>
      {children}
    </DeveloperContext.Provider>
  );
};

export { DeveloperProvider, useDeveloper };
