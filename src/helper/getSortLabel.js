export const getSortLabel = (sortBy) => {
  switch (sortBy) {
    case "popularity.desc":
      return "По популярности (убывание)";
    case "release_date.desc":
      return "По дате (убывание)";
    case "release_date.asc":
      return "По дате (возростание)";
    case "title.asc":
      return "По алфавиту (возростание)";
    case "title.desc":
      return "По алфавиту (убывание)";
    default:
      return "";
  }
};
