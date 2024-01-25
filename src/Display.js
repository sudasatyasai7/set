import React from 'react'

const Display = ({days,hours,minutes,seconds}) => {
    return (
        <div className='back'>
            <h1>SALES COUNTDOWN TIMER</h1>
            <h2>Offer ends in</h2>
            <br></br>

            <table>
                <tbody>
                    <tr className='ajay'>
                        <th className='sss'>{days}</th>&nbsp;&nbsp;
                        <th className='sss'>{hours}</th>&nbsp;&nbsp;
                        <th className='sss'>{minutes}</th>&nbsp;&nbsp;
                        <th className='sss'>{seconds}</th>&nbsp;&nbsp;
                    </tr>
                    <br></br>
                    <tr>
                        <td>DAYS</td>&nbsp;&nbsp;
                        <td>HOURS</td>&nbsp;&nbsp;
                        <td>MINUTES</td>&nbsp;&nbsp;
                        <td>SECONDS</td>&nbsp;&nbsp;
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Display