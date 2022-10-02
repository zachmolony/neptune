import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import OuterLimitsLogo from "../assets/outerlimitslogo.png";
import DramaCallLogo from "../assets/dramacalllogo.png";
import Avatar from "../assets/avatar.png";
import ProfilePic from "../assets/profile_pic.png";

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
      name: "Outer Limits Studios",
      link: "http://outerlimits.wtf",
      logo: OuterLimitsLogo,
      feeRate: 4.8,
      monthly: 2347.11,
      feesCollected: 105.62,
    },
    {
      id: "102",
      name: "Drama Call Clothing ",
      link: "http://dramacall.com",
      logo: DramaCallLogo,
      feeRate: 2.3,
      monthly: 3852.36,
      feesCollected: 50.73,
    },
  ]);
  const [messages, setMessages] = useState([
    {
      id: "101",
      name: "Wade Warren",
      client: "Outer Limits Studios",
      message: "Hey! The new site...",
      date: "2020-03-22",
      avatar: ProfilePic,
    },
    {
      id: "102",
      name: "Sam Sterland",
      client: "Drama Call Clothing",
      message: "could you change...",
      date: "2020-02-13",
      avatar: Avatar,
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
        setFees(totalFees);
      });
    };

    getFees();
  });

  const contextValue = {
    fees,
    clients,
    messages,
  };
  return <DeveloperContext.Provider value={contextValue}>{children}</DeveloperContext.Provider>;
};

export { DeveloperProvider, useDeveloper };
