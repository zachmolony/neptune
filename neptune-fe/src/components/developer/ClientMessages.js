import { Heading } from "@shopify/polaris";
import { Icon } from "@shopify/polaris";
import { EditMinor, ExternalMinor } from "@shopify/polaris-icons";

const ClientMessages = ({ messages }) => {
  return (
    <>
      {messages.map((message) => {
        return (
          <div
            className="flex w-full py-4"
            style={{ boxShadow: "0px 1px 0px #E1E3E5" }}
            key={message.id}
          >
            <div className="flex w-full items-center">
              <div className="flex-2">
                <img src={message.avatar} alt="" className="w-32 px-3" />
              </div>
              <div className="flex-1 pr-4 h-5/6">
                <div className="flex h-full flex-col justify-between">
                  <div className="flex justify-between mx-2">
                    <Heading className="">{message.name}</Heading>
                    <p>{message.date}</p>
                  </div>
                  <div className="flex justify-start mx-2">
                    <p className="pr-1">{message.client}</p>
                    <span>
                      <Icon color="subdued" source={ExternalMinor} />
                    </span>
                  </div>
                  <div className="flex justify-between w-full bg-gray px-3 py-1 rounded-full">
                    {message.message}
                    <span className="">
                      <Icon color="subdued" source={EditMinor} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ClientMessages;
