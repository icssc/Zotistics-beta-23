import type { NextApiRequest, NextApiResponse } from "next";
import { request as graphqlRequest, gql } from "graphql-request";
import { Query } from "src/types/peterportal";

const query = gql`
  {
    grades {
      grade_distributions {
        course_offering {
          course {
            department
          }
        }
      }
    }
  }
`;

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader(
    "Cache-Control",
    `max-age=86400, s-maxage=${86400 * 7}, stale-while-revalidate`
  );

  graphqlRequest("https://api.peterportal.org/graphql/", query).then(
    (data: Query) => {
      const gradeDistributions = data.grades.grade_distributions;
      const departments = gradeDistributions.map(
        (gradeDistribution) =>
          gradeDistribution.course_offering.course.department
      );
      const allDepartments = Array.from(new Set(departments)).sort((a, b) =>
        a.localeCompare(b, "en", { sensitivity: "base" })
      );

      res.status(200).json(allDepartments);
    }
  );
};
