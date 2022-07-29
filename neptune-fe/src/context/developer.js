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
  const [clients, setClients] = useState([
    {
      id: "101",
      name: "Outer Limits",
      link: "www.outerlimits.wtf",
      logo: "https://picsum.photos/200/300",
      feeRate: 4.8,
      monthly: 0,
      feesCollected: 0,
    },
  ]);

  useEffect(() => {
    const getFees = async () => {
      await axios({
        method: "get",
        url: "http://localhost:4242/fees",
      }).then(function (response) {
        console.log("response", response);
        const totalFees = response.data.reduce((acc, fee) => acc + fee.amount, 0);
        console.log("totalFees", totalFees);
        setFees(totalFees);
      });
    };

    getFees();
  }, []);

  const contextValue = {
    fees,
    clients,
  };
  return <DeveloperContext.Provider value={contextValue}>{children}</DeveloperContext.Provider>;
};

export { DeveloperProvider, useDeveloper };
