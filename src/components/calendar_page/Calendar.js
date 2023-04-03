import React from "react";
import "../calendar_page/Calendar.css"

function Body(props) {
    const {
        iframeSource = '<iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23F6BF26&ctz=America%2FNew_York&showNav=1&showPrint=0&showTabs=0&showTz=0&showCalendars=0&title=SHS%20Tennis&src=dGMya2NtdmEyNW8zZXJtMmVmNWZicjZuZm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23F09300" style="border:solid 1px #777" frameborder="0" scrolling="no"></iframe></iframe>'
      } = props;
    return(
        <div className="bodyCalendar">
            <div className="calendar" dangerouslySetInnerHTML={{__html: iframeSource}}>
            </div>
        </div>
        
    )
}

export default Body