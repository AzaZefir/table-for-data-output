export const getFilterLabel = (filter) => {
  switch (filter) {
    case 14:
      return "Фантастика";
    case 35:
      return "Комедии";
    case 28:
      return "Боевики";
    case 27:
      return "Ужасы";
    case 53:
      return "Детективы";
    default:
      return;
  }
};
