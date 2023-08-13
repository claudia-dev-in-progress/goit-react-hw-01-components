import PropTypes from "prop-types";
import "./statistics.css";

export const Statistics = ({ title, stats }) => (
  <section class="statistics">
    {title !== null && <h2 class="title">{title}</h2>}

    <ul class="stat-list">
      {stats.map((stat) => (
        <li class="item">
          <span class="label">{stat.label}</span>
          <span class="percentage">{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
