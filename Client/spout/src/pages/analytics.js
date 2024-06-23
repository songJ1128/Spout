import { useEffect, useState } from "react";
import Datacard from "../components/datacard";
import Logo from "../components/logo";
import Navbar from "../components/navbar";

function Analytics() {
    const today = new Date()
    const [curDate, setCurDate] = useState(today);
    //TODO create state for all pieces of data we want to show
    useEffect(function() {
        async function fetchDayAnaytics() {
            //TODO fetch the days analytics
        }
        fetchDayAnaytics()
    },[curDate]);

    const handleDataChange = (event) => {
        setCurDate(event.target.value);
    }

    const formattedDate = new Intl.DateTimeFormat('en-US').format(today);
    //TODO replace the datacards with a dynamic maping to display data
    return (
        <div>
            <Logo/>
            <Navbar/>
            <div class="dropdown">
                <select value={curDate} onChange={handleDataChange}>
                    <option value="">Select Day</option>
                    <option value="option1">{formattedDate}</option>
                    <option value="option2">Option 1</option>
                    <option value="option3">Option 2</option>
                </select>
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