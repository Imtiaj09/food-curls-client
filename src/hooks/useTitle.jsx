import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Food Curls`;
  }, [title]);
};

export default useTitle;
