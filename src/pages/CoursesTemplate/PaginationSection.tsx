interface PaginationSectionProps {
  goToPrevPage: () => void;
  goToNextPage: () => void;
  goToPage: (page: number) => void;
  currentPage: number;
  nPages: number;
}

export const PaginationSection = ({
  goToPrevPage,
  goToNextPage,
  goToPage,
  currentPage,
  nPages,
}: PaginationSectionProps) => {
  const pageNumbers = Array.from({ length: nPages }, (_, i) => i + 1);

  return (
    <section className="flex gap-3 items-center justify-end">
      <div className="flex gap-2">
        {currentPage > 1 && (
          <button
            className="flex justify-center gap-[7px] items-center bg-transparent text-[#fdf6ea] px-[15px]
          border-black text-sm font-bold border-2 rounded-[3px] h-[35px]"
            onClick={goToPrevPage}
          >
            <svg
              className="h-[15px]"
              overflow="visible"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              transform="rotate(90)"
            >
              <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
            </svg>
            <p>Prev</p>
          </button>
        )}
        {pageNumbers.length > 1 &&
          pageNumbers.map((page) => (
            <button
              key={page}
              className={`px-[15px] text-sm font-bold border-2 rounded-[3px] ${
                page === currentPage
                  ? "bg-[#838C48] text-[#fdf6ea]"
                  : "bg-transparent border-black"
              }`}
              onClick={() => goToPage(page)}
            >
              {page}
            </button>
          ))}
        {currentPage < pageNumbers.length && (
          <button
            className="flex justify-center gap-[7px] items-center bg-transparent text-[#fdf6ea] px-[15px]
          border-black text-sm font-bold border-2 rounded-[3px] h-[35px]"
            onClick={goToNextPage}
          >
            <p>Next</p>
            <svg
              className="h-[15px]"
              overflow="visible"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              transform="rotate(-90)"
            >
              <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
};
