import "./Statistics.css";
import PropTypes from "prop-types";

function StatisticsItem({ label, percentage }) {
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
}

function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map((stat) => (
          <StatisticsItem
            key={stat.id}
            label={stat.label}
            percentage={stat.percentage}
          />
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
};

/*Statistics.defaultProps = {
  title: "Default title",
};*/

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
