import axios from 'axios';

const getHolidayList = async () => {
    const response = await axios.get('https://holidayapi.com/v1/holidays?pretty&key=b3ea9900-0e5c-4114-9743-e7413661b260&country=IN&year=2021');
    return response;
}

export default getHolidayList;
