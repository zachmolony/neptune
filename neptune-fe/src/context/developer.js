import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import Avatar from "../assets/avatar.png";
import ProfilePic from "../assets/profile_pic.png";
import { DevelopersAPI } from "../api/API_INVOKE_URLS";

const DeveloperContext = createContext({});

const useDeveloper = () => {
  const context = useContext(DeveloperContext);
  if (context === undefined) {
    throw new Error("useDeveloper must be used within a CountProvider");
  }
  return context;
};

const DeveloperProvider = ({ children }) => {
  const DEVELOPER_ID = "acct_1LQCioHAVsqmY1Os";

  const [fees, setFees] = useState(null);
  const [recentFee, setRecentFee] = useState(null);
  const [clients, setClients] = useState([]);
  const [messages, setMessages] = useState([
    {
      id: "101",
      name: "Wade Warren",
      client: "Outer Limits",
      message: "Hey! The new site...",
      date: "12-03-22",
      avatar: ProfilePic,
    },
    {
      id: "102",
      name: "Sam Sterland",
      client: "Drama Call Clothing",
      message: "could you change...",
      date: "27-02-22",
      avatar: Avatar,
    },
  ]);

  useEffect(() => {
    const getFees = async () => {
      await axios({
        method: "get",
        url: DevelopersAPI.getFees,
      }).then(function (response) {
        const totalFees = response.data.reduce((acc, fee) => acc + fee.amount, 0);
        const recentFee = response.data[0];
        setFees(totalFees);
        setRecentFee(recentFee);
      });
    };

    const getClients = async () => {
      await axios({
        method: "get",
        url: DevelopersAPI.getClientData,
        params: {
          devID: DEVELOPER_ID,
        },
      }).then(function (response) {
        console.log("response", response);
        setClients(response.data.Items);
      });
    };

    // const getMessages = async () => {
    //   await axios({
    //     method: "get",
    //     url: DevelopersAPI.getMessages,
    //   }).then(function (response) {
    //     console.log("response", response);
    //     setMessages(response.data);
    //   });
    // };

    getFees();
    getClients();
    // getMessages();
  }, []);

  const contextValue = {
    fees,
    recentFee,
    clients,
    messages,
  };
  return <DeveloperContext.Provider value={contextValue}>{children}</DeveloperContext.Provider>;
};

export { DeveloperProvider, useDeveloper };
