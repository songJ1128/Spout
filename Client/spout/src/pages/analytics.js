import { useEffect, useState } from "react";
import Datacard from "../components/datacard";
import Logo from "../components/logo";
import Navbar from "../components/navbar";
import '../css/calendar.css' ;
import Calendar from 'react-calendar';



function Analytics() {
    const today = new Date()
    const [curDate, setCurDate] = useState(today);
    const [data, setData] = useState([]);
    const [showCalendar, setShowCalendar] = useState(false);
    //TODO create state for all pieces of data we want to show
    useEffect(function() {
        async function fetchDayAnaytics() {
            try {

            } catch (error) {

            }
        }
        fetchDayAnaytics()
    },[curDate]);

    const handleDateChange = (date) => {
        setCurDate(date);
        setShowCalendar(false);
      };

      const toggleCalendar = () => {
        setShowCalendar(!showCalendar);
      };

    const formattedDate = new Intl.DateTimeFormat('en-US').format(curDate);
    
    return (
        <div>
            <Logo/>
            <Navbar/>
            <div>
                
            <div className="calendar-container">
                <h4>{formattedDate}</h4>
                <button onClick={toggleCalendar}>
                    {showCalendar ? 'Hide Calendar' : 'Change Date'}
                </button>
                {showCalendar && (
                    <Calendar
                    onChange={handleDateChange}
                    value={curDate}
                    />
                )}
            </div>
            </div>
            <div>
                
                <Datacard></Datacard>
                <Datacard></Datacard>
                <Datacard></Datacard>
                <Datacard></Datacard>
                <Datacard></Datacard>
            </div>
            
        </div>
    );
};

export default Analytics;