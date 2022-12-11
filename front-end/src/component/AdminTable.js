import Dropdown from "./Dropdown";

const AdminTable = (props) => {
  console.log(props.users);
  return (
    <div className="flex justify-center items-center">
      <table className="w-4/5 table-auto hover:border-collapse">
        <thead>
          <tr className="">
            <th className="border border-slate-600">Name</th>
            <th className="border border-slate-600">Address</th>
            <th className="border border-slate-600">Phone No.</th>
            <th className="border border-slate-600">status</th>
          </tr>
        </thead>
        {props.users.map((user, i) => {
          return (
            <tbody key={i}>
              <tr>
                <td className="border border-slate-600 text-center">
                  {user.name}
                </td>
                <td className="border border-slate-600 text-center">
                  {user.address}
                </td>
                <td className="border border-slate-600 text-center">
                  {user.phone}
                </td>
                <Dropdown status={user.status} id={user._id} />
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default AdminTable;
