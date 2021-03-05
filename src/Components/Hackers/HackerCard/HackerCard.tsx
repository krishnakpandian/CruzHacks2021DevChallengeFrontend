import React from 'react';
import './HackerCard.scss';
import {hackerData} from '../../../Props/Props';

const HackerCard: React.FC<hackerData> = ( prop: hackerData) => {

  const dynamicHeaderFontSize = (message: string) => {
    if (message.length > 40) {
      return {
        fontSize: "18px"
      }
    }
    else if (message.length > 20) {
      return {
        fontSize: "24px"
      }
    }
    else {
      return {
        fontSize: "28px"
      }
    }
  }

  const shortenText = (message:string, maxLength:number) => {
    if (message && message.length > maxLength) {
        return message.slice(0,maxLength) + '...';
    }
    return message;
  }
    return (
      <>
        <div className="HackerCard">
            <div className="name" style={dynamicHeaderFontSize(prop.data.firstName + ' ' + prop.data.lastName)}>
                {shortenText(prop.data.firstName + ' ' + prop.data.lastName, 50)}
            </div>
            <div className="lower-container">
                <div className="email">{shortenText(prop.data.email, 50)}</div>
                <div className="major">{shortenText(prop.data.major, 50)}</div>
                <div className="school">{shortenText(prop.data.school, 50)}</div>
                <div className="age"> {shortenText(String(prop.data.age), 4)}</div>
                <div className="gender">{shortenText(prop.data.gender, 25)}</div>

            </div>
        </div>
      </>
    )
}

export default HackerCard;