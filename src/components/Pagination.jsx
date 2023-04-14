const Nav = ({ children }) => {
  return (
    <div className="flex justify-center items-center gap-1 m-4">{children}</div>
  );
};

const Pagination = ({ total, limit, page, setPage }) => {
  const numPage = Math.ceil(total / limit);

  return (
    <Nav>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        &lt;
      </button>
      {Array(numPage)
        .fill()
        .map((_, i) => (
          <button
            key={i + 1}
            onClick={() => setPage(i + 1)}
            aria-current={page === i ? "page" : null}
          >
            {i + 1}
          </button>
        ))}
      <button onClick={() => setPage(page + 1)} disabled={page === numPage}>
        &gt;
      </button>
    </Nav>
  );
};

export default Pagination;
