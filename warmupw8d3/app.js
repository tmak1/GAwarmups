// https://gist.github.com/kasun-maldeni/d483dd67a058cda4d18473735b200925

// Date Ranges
// Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.

// The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1).

// Do not display information that is redundant or that can be inferred by the user: if the date range ends in less than a year from when it begins, do not display the ending year.

// Additionally, if the date range begins in the current year (i.e. it is currently the year 2016) and ends within one year, the year should not be displayed at the beginning of the friendly range.

// If the range ends in the same month that it begins, do not display the ending year or month.

// Examples:

// makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"]

// makeFriendlyDates(["2016-07-01", "2018-07-04"]) should return ["July 1st, 2016", "July 4th, 2018"].



const ordinalConversion = day => {
    if (day > 3 && day < 21) return day + 'th';
    switch (day % 10) {
        case 1:  return day + "st";
        case 2:  return day + "nd";
        case 3:  return day + "rd";
        default: return day + "th";
      }
}

const monthInLetters = month => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[month];
}

const dateRangeCalculator = dateRangeInput => {
    
    let startDateObj = new Date(dateRangeInput[0]);
    
    let startDay = ordinalConversion(startDateObj.getDate());
    let startMonth = monthInLetters(startDateObj.getMonth());
    let startYear = startDateObj.getFullYear();
    let startDateStr = '';
    
    let endDateObj = new Date(dateRangeInput[1]);
    let endDay = ordinalConversion(endDateObj.getDate());
    let endMonth = monthInLetters(endDateObj.getMonth());
    let endYear = endDateObj.getFullYear();
    let endDateStr = '';

    let currentDateObj = new Date();
    let currentYear = currentDateObj.getFullYear();

    let dateRangeYear = endDateObj.getYear()- startDateObj.getYear();
    let dateRangeMonth = endDateObj.getMonth()- startDateObj.getMonth();

    startDateStr = startDay + ' ' + startMonth;
    if (currentYear !== startYear) {
        startDateStr = startDay + ' ' + startMonth + ', ' + startYear;
    }

    endDateStr = endDay;
    if (dateRangeYear < 1) {
        if (dateRangeMonth >= 1) {
            endDateStr += ' ' + endMonth;
        }
    } else {
        endDateStr = endDay + ' ' + endMonth + ', ' + endYear;
    }

    return [startDateStr, endDateStr];
    
}


result = dateRangeCalculator(["2019-08-01", "2020-07-04"]);

console.log(result);



// NB: the problem is teh inbuilt Date construction can only produce difference in two dates in terms of either
// days OR months OR years etc. This does not help our solution.
// So use somehting called epoch that gives you the difference between two dates according to years months, days
// Or a library called moment.js



