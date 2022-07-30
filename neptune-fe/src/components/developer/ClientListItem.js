import PropTypes from "prop-types";
import { Badge, Heading, Link } from "@shopify/polaris";
import Button from "../atoms/Button";

const ClientListItem = ({ client }) => {
  return (
    <div className="py-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center w-3/5">
          <div>
            <img src={client.logo} alt="" className="w-32 px-3" />
          </div>
          <div className="flex flex-col space-y-1">
            <div className="flex whitespace-nowrap">
              <Heading className="">{client.name}</Heading>
              <div className="mx-1">
                <Badge status="success" progress="complete">
                  Live
                </Badge>
              </div>
              <div>
                <Badge status="success" progress="complete">
                  Online
                </Badge>
              </div>
            </div>
            <div>
              <Link href="http://outerlimits.wtf">{client.link}</Link>
            </div>
            <p>Fee Rate: {client.feeRate}%</p>
          </div>
        </div>
        <div className="w-1/6 my-1">
          <h3 className="text-center text-xs font-semibold pb-2">Monthly Revenue</h3>
          <p className="text-2xl text-center">£{client.monthly}</p>
        </div>
        <div className="w-1/6 my-1 mr-4">
          <h3 className="text-center text-xs font-semibold pb-2">Fees Collected</h3>
          <p className="text-2xl text-center">£{client.feesCollected}</p>
        </div>
      </div>
      <div className="flex justify-end mr-6">
        <Button type="secondary">Management Console</Button>
        <Button type="primary">Configure</Button>
      </div>
    </div>
  );
};

ClientListItem.propTypes = {
  client: PropTypes.object.isRequired,
};

export default ClientListItem;
