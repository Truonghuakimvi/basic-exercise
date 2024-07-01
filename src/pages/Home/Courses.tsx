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
];
