export interface ICourse {
  image: string;
  price: number;
  title: string;
  category: string;
  curriculumNums: number;
  duration: {
    months?: number;
    days?: number;
    hours?: number;
    minutes?: number;
  };
  votes: number[];
  isRated: boolean;
}

export const data: ICourse[] = [
  {
    image:
      "https://dtlmselementor.wpengine.com/wp-content/uploads/2017/11/Courses-listing-image-1.jpg",
    price: 0,
    title: "Power Electronics",
    category: "Education",
    curriculumNums: 7,
    duration: {
      months: 0,
      days: 1,
      hours: 1,
      minutes: 50,
    },
    votes: [4, 5, 3, 2, 5],
    isRated: false,
  },
  {
    image:
      "https://dtlmselementor.wpengine.com/wp-content/uploads/2017/11/Courses-listing-image-2.jpg",
    price: 0,
    title: "Introduction to Calculus",
    category: "Mathematics",
    curriculumNums: 5,
    duration: {
      months: 1,
      days: 22,
      hours: 22,
      minutes: 0,
    },
    votes: [4, 5, 3, 2, 5, 4, 5],
    isRated: false,
  },
  {
    image:
      "https://dtlmselementor.wpengine.com/wp-content/uploads/2017/11/Courses-listing-image-3.jpg",
    price: 0,
    title: "Basic Laws and Policies",
    category: "Law",
    curriculumNums: 5,
    duration: {
      months: 0,
      days: 20,
      hours: 18,
      minutes: 30,
    },
    votes: [4, 5, 3, 2, 5, 1],
    isRated: false,
  },
  {
    image:
      "https://dtlmselementor.wpengine.com/wp-content/uploads/2017/11/Courses-listing-image-4.jpg",
    price: 50,
    title: "Healthcare Delivery",
    category: "Health",
    curriculumNums: 4,
    duration: {
      months: 0,
      days: 3,
      hours: 2,
      minutes: 50,
    },
    votes: [4, 5, 3, 2, 5],
    isRated: false,
  },
  {
    image:
      "https://dtlmselementor.wpengine.com/wp-content/uploads/2017/11/Courses-listing-image-5.jpg",
    price: 0,
    title: "General Business Law",
    category: "Law",
    curriculumNums: 7,
    duration: {
      months: 1,
      days: 25,
      hours: 12,
      minutes: 50,
    },
    votes: [4, 5, 3],
    isRated: false,
  },
  {
    image:
      "https://dtlmselementor.wpengine.com/wp-content/uploads/2017/11/Courses-listing-image-6.jpg",
    price: 0,
    title: "Emerging Trends and Technologies",
    category: "Engineering",
    curriculumNums: 4,
    duration: {
      months: 1,
      days: 16,
      hours: 3,
      minutes: 0,
    },
    votes: [4, 5, 3, 2],
    isRated: false,
  },
  {
    image:
      "https://dtlmselementor.wpengine.com/wp-content/uploads/2017/11/Courses-listing-image-7.jpg",
    price: 0,
    title: "Advanced Machine Learning",
    category: "Engineering",
    curriculumNums: 6,
    duration: {
      months: 2,
      days: 15,
      hours: 0,
      minutes: 0,
    },
    votes: [5, 5, 3, 2, 5],
    isRated: false,
  },
  {
    image:
      "https://dtlmselementor.wpengine.com/wp-content/uploads/2014/08/Courses-listing-image-8.jpg",
    price: 0,
    title: "Financial Accounting Basics",
    category: "Education",
    curriculumNums: 4,
    duration: {
      months: 1,
      days: 10,
      hours: 0,
      minutes: 0,
    },
    votes: [4, 3, 3, 2, 1],
    isRated: false,
  },
  {
    image:
      "https://dtlmselementor.wpengine.com/wp-content/uploads/2014/08/Courses-listing-image-9.jpg",
    price: 0,
    title: "Healthcare Informatics",
    category: "Health",
    curriculumNums: 5,
    duration: {
      months: 1,
      days: 18,
      hours: 0,
      minutes: 0,
    },
    votes: [4, 5, 5],
    isRated: false,
  },
  {
    image:
      "https://dtlmselementor.wpengine.com/wp-content/uploads/2014/06/Courses-listing-image-11.jpg",
    price: 0,
    title: "Corporate Law Fundamentals",
    category: "Law",
    curriculumNums: 6,
    duration: {
      months: 2,
      days: 0,
      hours: 0,
      minutes: 0,
    },
    votes: [4, 5, 3, 2, 5, 1],
    isRated: false,
  },
  {
    image:
      "https://dtlmselementor.wpengine.com/wp-content/uploads/2014/06/Courses-listing-image-12.jpg",
    price: 0,
    title: "Statistical Methods in Psychology",
    category: "Education",
    curriculumNums: 5,
    duration: {
      months: 1,
      days: 22,
      hours: 0,
      minutes: 0,
    },
    votes: [4, 5, 3, 2, 5, 3, 2, 1],
    isRated: false,
  },
  {
    image:
      "https://dtlmselementor.wpengine.com/wp-content/uploads/2014/06/Courses-listing-image-10.jpg",
    price: 0,
    title: "Environmental Engineering Principles",
    category: "Engineering",
    curriculumNums: 7,
    duration: {
      months: 2,
      days: 25,
      hours: 0,
      minutes: 0,
    },
    votes: [4, 5, 3, 2, 5, 1, 1],
    isRated: false,
  },
];
