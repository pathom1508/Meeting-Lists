import ManualDetail from "./manual-Detail";
import { useState } from 'react';
import ManualPost from "./manual-Post";

const manuals = [
    { 
        detail: "1.Go to virtual matching and go to business matching.",
        thumbnailUrl: "/pic-zoom/manual-zoom-00.png"
    },
    {
        detail: "2.Select to use Zoom, select Allow participants to join before start time.",
        thumbnailUrl: "/pic-zoom/manual-zoom-001.png"
    },
    {
        detail: "3.Steps for getting tokens.",
        thumbnailUrl: "/pic-zoom/manual-zoom-002.png"
    },
    {
        detail: "4.Click Sign In and sign in with Google.",
        thumbnailUrl: "/pic-zoom/manual-zoom-02.png"
    },
    {
        detail: "5.Select Manage.",
        thumbnailUrl: "/pic-zoom/manual-zoom-04.png"
    },
    {
        detail: "6.Click Develop and Build App.",
        thumbnailUrl: "/pic-zoom/manual-zoom-05.png"
    },
    {
        detail: "7.Choose JWT and create.",
        thumbnailUrl: "/pic-zoom/manual-zoom-06.png"
    },
    {
        detail: "Create app name.",
        thumbnailUrl: "/pic-zoom/manual-zoom-07.png"
    },
    {
        detail: "8.Enter company name, name and email address.",
        thumbnailUrl: "/pic-zoom/manual-zoom-08.png"
    },
    {
        detail: "9.Click View JWT Token.",
        thumbnailUrl: "/pic-zoom/manual-zoom-09.png"
    },
    {
        detail: "10.Select Other, enter expiration time and copy JWT Token.",
        thumbnailUrl: "/pic-zoom/manual-zoom-10.png"
    },
    {
        detail: "11.Paste Zoom Token.",
        thumbnailUrl: "/pic-zoom/manual-zoom-11.png"
    },
    {
        detail: "12.Once the token is set, click feature to create a web hook to connect data to the event. Click Add new event subscription.",
        thumbnailUrl: "/pic-zoom/manual-zoom-12.png"
    },
    {
        detail: "13.Enter subscription name and add events.",
        thumbnailUrl: "/pic-zoom/manual-zoom-13.png"
    },
    {
        detail: "14.Select the event type as shown below.",
        thumbnailUrl: "/pic-zoom/manual-zoom-14.png"
    }

];

function Manual() {
    const [selectedManual, setSelectedManual] = useState(null);

    function onManualOpenClick(theManual) {
        setSelectedManual(theManual);
    }

    function onManualCloseClick() {
        setSelectedManual(null);        
    }
    const manualElements = manuals.map((manual, index) => {
        return <ManualDetail key={index} manual={manual} onManualClick={onManualOpenClick} />;
    });

    let manualPost = null;
    if (!!selectedManual) {
        manualPost = <ManualPost manual={selectedManual} onBgClick={onManualCloseClick} />
    }
    return(
        <div>
            <div>
                {manualElements}
            </div>
             {manualPost}
        </div>
    )
}
export default Manual