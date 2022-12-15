import React from "react";
import "./card.scss";
import { Button } from "../buttons/Buttons";
export const Card = ({ text, count }) => {
  return (
    <li className="statistics-item">
      <p className="statistics-name">{text}</p>
      <h3 className="statistics-count">{count}</h3>
    </li>
  );
};

export const GraphCard = ({ text, count }) => {
  return (
    <li className="hero__right-text list-group-item">
      <p className="graphStaticsTitle">{text}</p>
      <strong className="graphStaticsCount">{count}</strong>
    </li>
  );
};


export const Ticket = ({ text, count }) => {
  return (
    <li className="ticket__left-text list-group-item">
      <p className="ticketStaticsTitle">{text}</p>
      <strong className="ticketStaticsCount">{count}</strong>
    </li>
  );
};

////   Tasks

// export const Tasks = ({ text, count }) => {
//   return (
//     <li className="ticket__left-text list-group-item">
//       <p className="ticketStaticsTitle">{text}</p>
//       <Button>
//         Urgent
//         </Button>
//     </li>
//   );
// };