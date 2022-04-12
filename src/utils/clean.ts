import { Option, Query } from "../types";

const exactYear = (quarter: string, year: string) => {
  let yearSplit = year.split("-");
  let quarterUpper = quarter.toUpperCase();
  let exactYear;
  if (quarterUpper === "SUMMER" || quarterUpper === "FALL") {
    exactYear = yearSplit[0];
  } else if (quarterUpper === "WINTER" || quarterUpper === "SPRING") {
    exactYear = yearSplit[0][0] + yearSplit[0][1] + yearSplit[1];
  }

  return exactYear;
};

const queryQuarterYear = (quarters: Option[], years: Option[]) => {
  if (quarters.length === 1 && years.length === 1) {
    return {
      quarter: quarters[0].value,
      year: exactYear(quarters[0].value, years[0].value),
    };
  } else if (quarters.length === 1 && years.length === 0) {
    return { quarter: quarters[0].value, year: "" };
  } else if (quarters.length === 0 && years.length === 1) {
    return { quarter: "", year: years[0].value };
  } else if (quarters.length === 0 && years.length === 0) {
    return { quarter: "All", year: "" };
  } else {
    return { quarter: "Custom", year: "" };
  }
};

const condenseText = (
  instructor: string,
  quarter: string,
  year: string,
  department: string,
  classNumber: string,
  classCode: string
) => {
  let quarter_clean = quarter;
  if (
    (instructor || year || department || classNumber || classCode) &&
    quarter == "All"
  ) {
    quarter_clean = "";
  }

  if (classCode) {
    return `${classCode} ${quarter_clean} ${year}`.trim();
  }

  const MAX_LENGTH = 20;
  const instructor_last_name = instructor.split(",")[0];
  let text = `${instructor} ${department} ${classNumber} ${quarter_clean} ${year}`.trim();

  if (text.length > MAX_LENGTH) {
    // prettier-ignore
    text = `${instructor_last_name} ${department} ${classNumber} ${quarter_clean} ${year}`;
  }
  if (text.length > MAX_LENGTH) {
    // prettier-ignore
    text = `${instructor_last_name} ${department} ${classNumber} ${quarter_clean} ${year.slice(-2)}`;
  }
  if (text.length > MAX_LENGTH) {
    // prettier-ignore
    text = `${instructor_last_name} ${department} ${classNumber} ${quarter_clean} ${year.slice(-2)}`;
  }
  if (text.length > MAX_LENGTH) {
    // prettier-ignore
    text = `${instructor_last_name} ${department} ${classNumber} ${quarter_clean.charAt(0)}${year.slice(-2)}`;
  }
  if (text.length > MAX_LENGTH) {
    const difference = text.length - MAX_LENGTH;
    let instructor_clean = instructor.split(",")[0];
    // Cuts of end of instructor name, but keeps at least 3 characters
    // Don't cut of name if we'd only be cutting of 2 or fewer characters
    if (instructor_clean.length > difference + 3 && difference > 2) {
      instructor_clean = instructor_clean.slice(0, -difference);
    }
    text = `${instructor_clean} ${department} ${classNumber} ${quarter_clean.charAt(0)}${year.slice(-2)}`;
  }

  text = text.trim();

  // Adds empty space to the start and end of the string
  // Bootleg way of not having to deal with css/tailwind
  if (text.length < MAX_LENGTH) {
    const remaining = MAX_LENGTH - text.length;
    const half = Math.floor(remaining / 2);
    const emptyStr = "\xa0".repeat(half);
    text = emptyStr.concat(text.concat(emptyStr));
  }

  return text;
};

export const querySelectorText = (query: Query | undefined) => {
  if (!query) {
    return ""
  }

  const quarterYear = queryQuarterYear(query.quarters, query.years);
  const quarter = quarterYear.quarter || "";
  const year = quarterYear.year || "";
  let instructor = "";
  let department = "";
  let classNumber = "";
  let classCode = "";

  if (query.instructors.length == 1) {
    instructor = query.instructors[0].value;
  }
  if (query.departments.length == 1) {
    department = query.departments[0].value;
  }
  if (query.courseCode.length == 1) {
    classNumber = query.courseCode[0].value;
  }
  if (query.classCode.length == 1) {
    classCode = query.classCode[0].value;
  }

  return condenseText(
    instructor,
    quarter,
    year,
    department,
    classNumber,
    classCode
  );
};
