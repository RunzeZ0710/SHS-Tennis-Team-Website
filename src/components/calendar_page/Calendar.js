import React from "react";
import "../calendar_page/Calendar.css"

function Body(props) {
    const {
        iframeSource = '<iframe frameborder="0" style="border-width:0;" id="cdr-calendar-iframe" width="1200" height="600" src="https://www.chronoflocalendar.com/calendar/embed/5255/1777180349/"></iframe>'
      } = props;
    return(
        <div className="bodyCalendar">
            <div className="calendar" dangerouslySetInnerHTML={{__html: iframeSource}}>
            </div>
        </div>
        
    )
}

export default Body