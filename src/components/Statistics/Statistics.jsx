import PropTypes from "prop-types";
import { SectionStat, Title, StatList, StatItem, Lable } from './Statistics.styled';

function randomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({title, stats}) => {
    return (
<SectionStat >
  {title && <Title >{title}</Title>}

            <StatList >
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatItem
              key={id}
              style={{ backgroundColor: randomHexColor() }}
            >
              <Lable >{label}</Lable>
              <span >{percentage} %</span>
            </StatItem>
          );
        })}
      </StatList>
</SectionStat>
    );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};