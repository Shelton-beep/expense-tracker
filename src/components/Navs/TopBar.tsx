export const TopBar = () => {
  return (
    <>
      <nav className="navbar sticky-top bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand">Expenses Tracker</a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              data-bs-theme="light"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success"
              data-bs-theme="light"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};
