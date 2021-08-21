import "bootstrap/dist/css/bootstrap.min.css";
function AdminCard() {
  return (
    <div>
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Username</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td className="">
                <button className="btn mr-1 btn-success btn-sm" type="button">
                  Edit
                </button>
                <button className="btn btn-danger btn-sm" type="button">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>
                <button className="btn mr-1 btn-success btn-sm" type="button">
                  Edit
                </button>
                <button className="btn btn-danger btn-sm" type="button">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminCard;
