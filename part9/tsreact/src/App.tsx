import './App.css';

interface HeaderProps {
  course: string;
}

interface CourseInfoBase {
  name: string;
  exerciseCount: number;
}

interface CourseInfoNormal extends CourseInfoBase {
  type: "normal";
  desc: string;
}

interface CourseInfoProject extends CourseInfoBase {
  type: "groupProject";
  groupProjectCount: number;
}

interface CourseInfoSubmission extends CourseInfoBase {
  type: "submission";
  desc: string;
  submitLink: string;
}

interface CourseInfoSpecial extends CourseInfoBase {
  type: "special";
  desc: string;
  requirements: string[];
}

interface CoursesProps {
  courses: Array<CourseInfo>;
}

type CourseInfo = CourseInfoNormal | CourseInfoProject | CourseInfoSubmission | CourseInfoSpecial;

const App = () => {
  const courseName = "Half Stack application development";
  const courseParts: CourseInfo[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      desc: "This is the leisured course part",
      type: "normal"
    },
    {
      name: "Advanced",
      exerciseCount: 7,
      desc: "This is the harded course part",
      type: "normal"
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3,
      type: "groupProject"
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      desc: "Confusing description",
      submitLink: "https://fake-exercise-submit.made-up-url.dev",
      type: "submission"
    },
    {
      name: "Backend development",
      exerciseCount: 21,
      desc: "Typing the backend",
      requirements: ["nodejs", "jest"],
      type: "special"
    }
  ];

  return (
    <div>
      <Header course={courseName} />
      <Content courses={courseParts} />
      <Total courses={courseParts} />
    </div>
  );
};

const Header = (props: HeaderProps): JSX.Element => {
  return (
    <h1>{props.course}</h1>
  );
};

const Content = (props: CoursesProps): JSX.Element => {
  const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };

  const formatedCourses:any[] = [];
  props.courses.forEach(course => {
    switch(course.type) {
      case "normal":
        formatedCourses.push(<p key={course.name}><strong>{course.name} {course.exerciseCount}</strong><br /><em>{course.desc}</em></p>);
        break;
      case "submission":
        formatedCourses.push(<p key={course.name}><strong>{course.name} {course.exerciseCount}</strong><br /><em>{course.desc}</em><br />Submit to: {course.submitLink}</p>);
        break;
      case "groupProject":
        formatedCourses.push(<p key={course.name}><strong>{course.name} {course.exerciseCount}</strong><br />Project exercises: {course.groupProjectCount}</p>);
        break;
      case "special":
        formatedCourses.push(<p key={course.name}><strong>{course.name} {course.exerciseCount}</strong><br /><em>{course.desc}</em><br />Required skills: { course.requirements.join(", ") }</p>);
        break;
      default:
        return assertNever(course);
      }
  });

  return(
      <div>
        {formatedCourses}
      </div>
    );
};

const Total = (props: CoursesProps): JSX.Element => {
  return (
    <p>
      Number of exercises{" "}
      {props.courses.reduce((carry, part) => carry + part.exerciseCount, 0)}
    </p>
  );
};


export default App;
