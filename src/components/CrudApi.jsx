import { useContext } from "react";
import CrudContext from "../context/CrudContext";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";
const CrudApi = () => {
  const { db, loagind, error } = useContext(CrudContext);
  return (
    <div>
      <h2>Crud API con context i</h2>
      <hr />
      <article className="grid-1-2">
        <CrudForm />
        {loagind && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {db && <CrudTable />}
      </article>
    </div>
  );
};
export default CrudApi;
