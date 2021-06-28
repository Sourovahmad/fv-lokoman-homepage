import './home.css';
import { TheButtonsData } from './../data/data';
import TheButton from './../../components/buttons/button';
import iconOne from './../../images/calendar_one.png';
import iconTwo from './../../images/calendar_two.png';

export default function Screen1() {
    const theMessageNumber = `${'3'}`
    return (


        <div id="screen1">

            <div className="the-top-part">
                <div className="all-contents">
                    <div className="kalendar">
                        <div className="icon-box">
                            <img src={iconOne} id="icononeForkalender" alt="" srcset="" />
                        </div>
                        <div className="texts-box">
                            <h2>Kalendar</h2>
                        </div>

                    </div>

                    <div className="mismuray">
                        <div className="icon-box">
                            <img src={iconTwo} alt="" id="icononeForkalender" srcset="" />
                            <h3>{theMessageNumber}</h3>
                            {/* this number comes from a variable */}
                        </div>
                        <div className="texts-box">
                            <h2>Mitteilungszentrale</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="TheTitleRows">
                <div className="TheButtonsRow">
                    {TheButtonsData.map(function (x) {
                        return <TheButton linkP={x.sourceL1} title={x.titlerow1} />
                    })}
                </div>

                <div className="TheButtonsRow">
                    {TheButtonsData.map(function (x) {
                        return <TheButton linkP={x.sourceL2} title={x.titlerow2} />
                    })}
                </div>
            </div>
        </div>
    );
}