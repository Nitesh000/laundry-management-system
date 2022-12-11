const ClientTable = (props) => {
  return (
    <div className="flex justify-center items-center">
      <table className="w-3/4 table-auto hover:border-collapse">
        <thead>
          <tr className="">
            <th className="border border-slate-600">Name</th>
            <th className="border border-slate-600">status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-600 text-center">
              {props.name}
            </td>
            <td className="border border-slate-600 text-center">
              {props.status}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ClientTable;
