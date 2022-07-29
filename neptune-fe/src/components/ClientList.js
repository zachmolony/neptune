import PropTypes from "prop-types";

const ClientList = ({ clients }) => {
  return (
    <>
      {clients.map((client) => (
        <div className="flex flex-col p-3">
          <div className="flex justify-between">
            <h1 className="text-2xl">{client.name}</h1>
            {/* <Button title="View" /> */}
          </div>
          <div className="py-2 h-full">
            {/* <PolarisCard title="Client Messages">
              <div className="p-3"></div>
            </PolarisCard> */}
          </div>
        </div>
      ))}
    </>
  );
};

ClientList.propTypes = {
  clients: PropTypes.array.isRequired,
};

export default ClientList;
