import { useContext } from "react";
import CrudContext from "../context/CrudContext";

const CrudTableRow = ({ el }) => {
  const { setDataToEdit, deleteData } = useContext(CrudContext);
  let { name, constellation, id } = el;

  return (
    <tr>
      <th>{name}</th>
      <th>{constellation}</th>
      <th>
        <button
          onClick={() => {
            setDataToEdit(el);
          }}
        >
          Editar
        </button>
        <button
          onClick={() => {
            deleteData(id);
          }}
        >
          Eliminar
        </button>
      </th>
    </tr>
  );
};

export default CrudTableRow;
