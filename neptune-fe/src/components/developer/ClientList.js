import PropTypes from "prop-types";
import ClientListItem from "./ClientListItem";

const ClientList = ({ clients }) => {
  return (
    <>
      {clients.map((client, index) => (
        <div
          className={index === 1 ? "" : "pb-3 mb-4"}
          style={index === 1 ? {} : { boxShadow: "0px 1px 0px #E1E3E5" }}
        >
          <ClientListItem key={index} client={client} />
        </div>
      ))}
    </>
  );
};

ClientList.propTypes = {
  clients: PropTypes.array.isRequired,
};

export default ClientList;
