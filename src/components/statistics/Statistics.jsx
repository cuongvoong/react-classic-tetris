import React from "react";
import StatisticsRow from "./StatisticsRow";
import T from "./T";
import J from "./J";
import Z from "./Z";
import O from "./O";
import S from "./S";
import L from "./L";
import I from "./I";

const Statistics = ({ statistics }) => {
  return (
    <section className="statistics">
      <div className="section-header">STATISTICS</div>
      <table>
        <tbody>
          <StatisticsRow piece={<T />} statistic={statistics.T} />
          <StatisticsRow piece={<J />} statistic={statistics.J} />
          <StatisticsRow piece={<Z />} statistic={statistics.Z} />
          <StatisticsRow piece={<O />} statistic={statistics.O} />
          <StatisticsRow piece={<S />} statistic={statistics.S} />
          <StatisticsRow piece={<L />} statistic={statistics.L} />
          <StatisticsRow piece={<I />} statistic={statistics.I} />
        </tbody>
      </table>
    </section>
  );
};

export default Statistics;
