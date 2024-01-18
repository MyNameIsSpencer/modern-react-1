import { useState, useEffect } from 'react';

const DataTable = (props) => {
  // const [sortOrder, setSortOrder] = useState(null);
  // asc only for now
  const { config, data: origData } = props;
  const [tableData, setTableData] = useState(origData);
  const [sortBy, setSortBy] = useState(null);


  const sorter = (a, b) => {
    return 
  }

  const sortPicker = (sortTitle) => {

  }

  const sortTableData = (sortTitle) => {
    const newData = origData.sort()
  }



  // function compareNumbers(a, b) {
  //   return a - b;
  // }
  // numericStringArray.sort(compareNumbers); // ['9', '80', '700']


  const sortTable = (sortTitle) => {
    console.warn('Sororoorortotot')
    console.log(sortTitle);
    console.log(sortBy);


    if (sortTitle !== sortBy) {
      console.log('DIffff');
      setSortBy(sortTitle);
      const newSortedData = sortTableData(sortBy);
      // setTableData(null);
      return;
    } else if (sortTitle === sortBy) {
      console.log('Saaammmee');
      setSortBy(null);
      setTableData(origData);
      return;
    }
  }

  useEffect(() => {
    console.log(sortBy);
  }, [sortBy])



  const headerKeys = Object.keys(origData[0])
  const makeTitleCase = (title) => {
    return title.charAt(0).toUpperCase() + title.slice(1);
  }

  const tableHeaderTitles = headerKeys.map(item => {
    if (['id', 'lastName', 'firstName'].includes(item)) {
      return;
    }
    if (item === 'favColour') {
      return 'Fave Colour';
    }
    return makeTitleCase(item);
  }).filter(item => item);


  const tableHeaders = tableHeaderTitles.map(header => {
    return (
      <th onClick={() => sortTable(header)}>{header}</th>
    );
  })

  const arrangeRowColumns = (rowData) => {
    return (
      <tr>
        <td>{rowData.name}</td>
        <td>{rowData.favColour}</td>
        <td>{rowData.age}</td>
        <td>{rowData.salary}</td>
      </tr>
    );
  }

  const dataRows = tableData.map(row => {
    return arrangeRowColumns(row);
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            {tableHeaders}
          </tr>
        </thead>
        <tbody>
          {dataRows}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable;
