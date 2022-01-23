export interface Query {
  course: Course;
  instructor: Instructor;
  allCourses: [Course];
  allInstructors: [Instructor];
  schedule: [Course];
  grades: GradeDistributionCollection;
}

export interface Course {
  id: string;
  department: string;
  number: string;
  school: string;
  title: string;
  course_level: string;
  department_alias: [string];
  units: [number];
  description: string;
  department_name: string;
  instructor_history: [Instructor];
  prerequisite_tree: string;
  prerequisite_list: [Course];
  prerequisite_text: string;
  prerequisite_for: [Course];
  repeatability: string;
  concurrent: string;
  same_as: string;
  restriction: string;
  overlap: string;
  corequisite: string;
  ge_list: [string];
  ge_text: string;
  terms: [string];
  offerings: [CourseOffering];
}

export interface Instructor {
  name: string;
  shortened_name: string;
  ucinetid: string;
  email: string;
  title: string;
  department: string;
  schools: [string];
  related_departments: [string];
  course_history: [Course];
}

export interface CourseOffering {
  year: string;
  quarter: string;
  instructors: [Instructor];
  final_exam: string;
  max_capacity: number;
  meetings: [Meeting];
  num_section_enrolled: number;
  num_total_enrolled: number;
  num_new_only_reserved: number;
  num_on_waitlist: number;
  num_requested: number;
  restrictions: string;
  section: SectionInfo;
  status: string;
  units: number;
  course: Course;
}

export interface Meeting {
  building: string;
  days: string;
  time: string;
}

export interface SectionInfo {
  code: string;
  comment: string;
  number: string;
  type: string;
}

export interface GradeDistributionCollection {
  aggregate: GradeDistributionCollectionAggregate;
  grade_distributions: [GradeDistribution];
  instructors: [string];
}

export interface GradeDistributionCollectionAggregate {
  sum_grade_a_count: number;
  sum_grade_b_count: number;
  sum_grade_c_count: number;
  sum_grade_d_count: number;
  sum_grade_f_count: number;
  sum_grade_p_count: number;
  sum_grade_np_count: number;
  sum_grade_w_count: number;
  average_gpa: number;
  count: number;
}

export interface GradeDistribution {
  grade_a_count: number;
  grade_b_count: number;
  grade_c_count: number;
  grade_d_count: number;
  grade_f_count: number;
  grade_p_count: number;
  grade_np_count: number;
  grade_w_count: number;
  average_gpa: number;
  course_offering: CourseOffering;
}
