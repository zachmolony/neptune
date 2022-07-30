import { Badge, Heading, Link } from "@shopify/polaris";
import Logo from "../../assets/outerlimitslogo.png";

const MySiteContent = () => {
  return (
    <>
      <div className="flex flex-wrap overflow-hidden items-center justify-around pb-4">
        <div className="flex items-center grow">
          <div className="w-24 mx-4">
            <img src={Logo} alt="" />
          </div>
          <div className="flex flex-col space-y-1 py-4">
            <div>
              <Badge status="success" progress="complete">
                Online
              </Badge>
            </div>
            <div>
              <Heading>Outer Limits</Heading>
            </div>
            <div>
              <Link href="http://outerlimits.wtf">http://outerlimits.wtf</Link>
            </div>
          </div>
        </div>
        <div className="px-4">
          <h3 className="text-center text-xs font-semibold pb-2">Visitors Today</h3>
          <p className="text-4xl text-center">75</p>
        </div>
        <div className="px-4">
          <h3 className="text-center text-xs font-semibold pb-2">Active Sessions</h3>
          <p className="text-4xl text-center">6</p>
        </div>
      </div>
    </>
  );
};

export default MySiteContent;
