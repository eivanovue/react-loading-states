
const ShowData = (props) => {
    const items = props.data.map((item) => 
    <tr key={item.id}>
        <td>{item.brand}</td>
        <td>{item.model}</td> 
        <td>£{item.price}</td>
    </tr>
  );
    return (
      <table>
      <thead>
        <tr>
        <th>Brand</th>
        <th>Model</th> 
        <th>Price</th>
        </tr>
       
      </thead>
      <tbody>
        {items}
      </tbody>
    </table>
    )
}
export default ShowData;
