import React from "react";
import "../calendar_page/Calendar.css"

function Body(props) {
    const {
        iframeSource = '<iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23E4C441&ctz=America%2FNew_York&showPrint=0&title=Tennis%20Team%20Schedule&showTabs=0&showTz=1&showTitle=0&showNav=1&showDate=1&showCalendars=0&src=dGMya2NtdmEyNW8zZXJtMmVmNWZicjZuZm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23F09300" style="border:solid 0px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe>'
      } = props;
    return(
        <div className="body">
            <div className="calendar" dangerouslySetInnerHTML={{__html: iframeSource}}>
            </div>
        </div>
        
    )
}

export default Body