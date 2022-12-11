import { useState } from "react";
import { useParams } from "react-router-dom";

const Dropdown = (props) => {
  const [status, setStatus] = useState(props.status);
  const { userId } = useParams();

  const onStatusChange = (e) => {
    const value = e.target.value;
    const data = {};
    data.status = value;
    data.id = props.id;
    console.log(data);
    const postData = async () => {
      const response = await fetch(
        `http://localhost:3030/dashboard/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          credentials: "include",
          body: JSON.stringify(data)
        }
      ).then((res) => res.json());
      console.log(response);
    };
    postData();
    setStatus(value);
  };

  return (
    <td
      className={`border border-slate-600 text-center ${
        status !== "Completed" ? "bg-red-400" : "bg-green-400"
      }`}
    >
      <select
        name="userStatus"
        id="dropdownStatus"
        className={`${status !== "Completed" ? "bg-red-400" : "bg-green-400"}`}
        onChange={onStatusChange}
        value={status}
      >
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>
    </td>
  );
};

export default Dropdown;
