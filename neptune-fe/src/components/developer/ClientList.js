import PropTypes from "prop-types";
import ClientListItem from "./ClientListItem";

const ClientList = ({ clients }) => {
  return (
    <>
      {clients.map((client, index) => (
        <ClientListItem key={index} client={client} />
      ))}
    </>
  );
};

ClientList.propTypes = {
  clients: PropTypes.array.isRequired,
};

export default ClientList;
