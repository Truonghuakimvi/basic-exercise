import { useEffect, useState } from "react";
import { ICourse } from "../Home/Courses";

export const usePaging = (courses: ICourse[]) => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;
  const [currentRecords, setCurrentRecords] = useState<ICourse[]>([]);

  useEffect(() => {
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const newRecords = courses.slice(indexOfFirstRecord, indexOfLastRecord);
    if (JSON.stringify(currentRecords) !== JSON.stringify(newRecords)) {
      setCurrentRecords(newRecords);
    }
  }, [currentPage, currentRecords, courses]);

  const goToNextPage = () => {
    const nPages = Math.ceil(courses.length / recordsPerPage);
    if (currentPage < nPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const nPages = Math.ceil(courses.length / recordsPerPage);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [nPages]);

  return {
    currentRecords,
    goToNextPage,
    goToPrevPage,
    currentPage,
    recordsPerPage,
    nPages,
    goToPage,
  };
};
