import DataTable from "./DataTable";

const responseData = [
  { id: 'asdkjh4kj3h4', firstName: 'Silly Sally', lastName: 'Sue', name: '', favColour: 'cornflowerblue', age: 21, salary: 21000, },
  { id: 'balksjnjkash', firstName: 'Manny', lastName: 'McDoogy', name: '', favColour: 'salmon', age: 88, salary: 100000, },
  { id: 'nkj4h5w45', firstName: 'Mellow', lastName: 'Yellow', name: '', favColour: 'coral', age: 120, salary: 12000, },
  { id: 'zlncjxh34h', firstName: 'Fwest', lastName: 'Baltic', name: '', favColour: 'crimson', age: 35, salary: 900000, },
  { id: 'qowiuerb4', firstName: 'Pedina', lastName: 'Bungi', name: '', favColour: 'limegreen', age: 45, salary: 1700000, },
  { id: 'poqwhen4hj5', firstName: 'Zelda', lastName: 'R8NFKT762A', name: '', favColour: 'royalblue', age: 6154, salary: 111, },
];

const data = responseData.map(row => {
  const newRow = row;
  newRow.name = row.firstName + ' ' + row.lastName;
  return newRow;
})

const DataTable1 = () => {

  return (
    <div>
      <DataTable data={data} />
    </div>
  )
}


export default DataTable1;



