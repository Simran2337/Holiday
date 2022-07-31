import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import getHolidayList from './services/holidayAPIService';

function App() {
  const [holidayList, setHolidayList] = useState({ holidays: [] });

  const loadHolidayList = async () => {
    try {
      const response = await getHolidayList();
      console.log(response);
      setHolidayList(response.data);
    }
    catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    loadHolidayList();
  }, [])

  return (
    <div>
      <Header />
      <table className="table table-dark table-striped table-content custom-table">
        <thead>
          <tr>
            <th scope="col">Holiday Name</th>
            <th scope="col">Date</th>
            <th scope="col">Weekday</th>
            <th scope="col">Is Public?</th>
          </tr>
        </thead>
        <tbody>
          {holidayList.holidays.map(holiday => {
            return (<tr key={holiday.uuid}>
              <td>{holiday.name}</td>
              <td>{holiday.date}</td>
              <td>{holiday.weekday.date.name}</td>
              {(holiday.public) ? <td><img alt="correct" src="https://img.icons8.com/officel/25/000000/checkmark--v2.png" /></td> : <td><img alt="wrong" src="https://img.icons8.com/color/25/000000/close-window.png" /></td>}
            </tr>)
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
