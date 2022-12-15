import React from "react";
import "./ticktes.scss";
import { TicketList } from "../StatisticGraph/StatisticsGraph";
import { Button } from "../buttons/Buttons";
// import Add from "../../Assets/images/icons/inactive.svg"
import { Add } from "../../Assets/images/icons/Icons";

function Tickets() {
  return (
    <section className="ticket__section">
      <div className="ticket__box">
        <div className="ticket__left-box">
          <div className="ticket__text-top">
            <div className="ticket__title-box">
              <h3 className="ticket__tilte">Unresolved tickets</h3>
              <p className="ticket__text">
                Group: <p style={{ color: "#000" }}>Support</p>{" "}
              </p>
            </div>
            <a className="ticket__link" href="">
              View details
            </a>
          </div>

          <TicketList />
        </div>

        <div>
          <div className="ticket__left-box">
            <div className="ticket__text-top tasks__text-top">
              <div className="ticket__title-box">
                <h3 className="ticket__tilte">Tasks</h3>
                <p className="ticket__text">Today</p>
              </div>
              <a className="ticket__link" href="">
                View all
              </a>
            </div>

            <div className="tasks__list-box">
              <div className="tasks__todo">
                <p className="ticket__text tasks__text">Create new task</p>
                <svg className="tasks__todo-icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="8" fill="#F0F1F7" />
                  <path
                    d="M12 7V17"
                    stroke="#9FA2B4"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M17 12L7 12"
                    stroke="#9FA2B4"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </div>

              <ul className="tasks__list">
                <li className="tasks__item">
                  <div>
                    <label className="checkbox">
                      <input type="checkbox" className="tasks__mark" />
                      <mark></mark>
                      <div>
                        <p className="tasks__checkbox__text">
                          Finish ticket update
                        </p>
                      </div>
                    </label>
                  </div>
                  <button className="tasks__button" type="button">
                    Urgent
                  </button>
                </li>
                <li className="tasks__item">
                  <div>
                    <label className="checkbox">
                      <input type="checkbox" className="tasks__mark" />
                      <mark></mark>
                      <div>
                        <p className="tasks__checkbox__text">
                        Create new ticket example
                        </p>
                      </div>
                    </label>
                  </div>
                  <button className="tasks__button succses" type="button">
                  New
                  </button>
                </li>
                <li className="tasks__item">
                  <div>
                    <label className="checkbox">
                      <input type="checkbox" className="tasks__mark" />
                      <mark></mark>
                      <div>
                        <p className="tasks__checkbox__text ">
                        Update ticket report
                        </p>
                      </div>
                    </label>
                  </div>
                  <button className="tasks__button default" type="button">
                  Default
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tickets;
