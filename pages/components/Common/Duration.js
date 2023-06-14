
import React from 'react'
const formatDate = (month, year) => {
    const formattedMonth = month.slice(0, 3);
    return `${formattedMonth}. ${year}`;
  };

const Duration = ({
    current = false,
    startMonth,
    startYear,
    endMonth="January",
    endYear="2030",
  }) => {
    if (!startMonth ||  !startYear) {
      return <div></div>; // or return null if you want to render nothing
    }
    
    if (current) {
      const startDate = new Date(`${startMonth} ${startYear}`);
      const currentDate = new Date();
      const years = currentDate.getFullYear() - startDate.getFullYear();
      const months = currentDate.getMonth() - startDate.getMonth();

      let duration = "";
      if (years > 0) {
        duration += `${years} ${years === 1 ? "year" : "years"}`;
      }
      if (months > 0) {
        if (duration !== "") {
          duration += " ";
        }
        duration += `${months} ${months === 1 ? "month" : "months"}`;
      }

      return (
        <div className="text-right">
          <p>{formatDate(startMonth, startYear)} to Current</p>
          <p> ({duration})</p>
        </div>
      );
    }

    const startDate = new Date(`${startMonth} ${startYear}`);
    const endDate = new Date(`${endMonth} ${endYear}`);
    const years = endDate.getFullYear() - startDate.getFullYear();
    const months = endDate.getMonth() - startDate.getMonth();

    let duration = "";
    if (years > 0) {
      duration += `${years} ${years === 1 ? "year" : "years"}`;
    }
    if (months > 0) {
      if (duration !== "") {
        duration += " ";
      }
      duration += `${months} ${months === 1 ? "month" : "months"}`;
    }

    return (
      <div className="text-right">
        <p>
          {formatDate(startMonth, startYear)} to {formatDate(endMonth, endYear)}
        </p>
        <p>({duration})</p>
      </div>
    );
  };

export default Duration