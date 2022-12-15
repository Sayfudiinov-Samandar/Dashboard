import React from "react";
import { Card } from "../Card/Card";
import "./statistics.scss";

export const Statistics = () => {
    const stats = [
        ["Unresolved", "60"],
        ["Overdue", "16"],
        ["Open", "43"],
        ["On hold", "64"],

    ]
    return <section className="statistics">
        <ul className="statistics-list">
            {
                stats.map(stat => <Card text={stat[0]} count={stat[1]} />)
            }
        </ul>
    </section>
}