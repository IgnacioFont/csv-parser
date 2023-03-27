import Table from "react-bootstrap/Table";
import useFetch from "../../hooks/useFetch";
import "./styles.css";

const ToolboxTable = () => {
  const { data, error, isLoading } = useFetch(
    "http://localhost:3000/files/data"
  );

  const formattedData = data?.flatMap((data) =>
    data.lines.map((line) => ({
      file: data.file,
      text: line.text,
      number: line.number,
      hex: line.hex,
    }))
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>${`An error has occurred: ` + error}</p>;

  return (
    <div className='toolbox-table'>
      <Table striped bordered hover>
        <thead>
          <tr style={{ borderBottom: "2px solid black" }}>
            <th>File Name</th>
            <th>Text</th>
            <th>Number</th>
            <th>Hex</th>
          </tr>
        </thead>
        <tbody>
          {formattedData?.map((d, i) => (
            <tr key={i}>
              <td>{d.file}</td>
              <td>{d.text}</td>
              <td>{d.number}</td>
              <td>{d.hex}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ToolboxTable;
