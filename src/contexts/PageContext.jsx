import React, { useState, useContext } from "react";

const PageContext = React.createContext();
const PageUpdateContext = React.createContext();

export function usePage() {
  return useContext(PageContext);
}

export function usePageUpdate() {
  return useContext(PageUpdateContext);
}

export function PageProvider({ children }) {
  const [page, setPage] = useState("/");

  function changePage(currentPage) {
    setPage(currentPage);
  }

  return (
    <PageContext.Provider value={page}>
      <PageUpdateContext.Provider value={changePage}>
        {children}
      </PageUpdateContext.Provider>
    </PageContext.Provider>
  );
}
