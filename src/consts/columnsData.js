import { OpenPosterModal } from "./../components/posterModal/OpenPosterModal";
import { DescriptionInfoModal } from "../components/commonInfoModal/descriptionModal/DescriptionInfoModal";
import { RatingInfoModal } from "./../components/commonInfoModal/ratingModal/RatingModal";
import LikedInfoModal from "./../components/commonInfoModal/likedModal/LikedInfoModal";
import { ReleaseInfoModal } from "./../components/commonInfoModal/releaseModal/ReleaseModal";

export const columns = [
  {
    field: "original_title",
    headerName: "Постер",
    width: 150,
    editable: false,
    renderCell: OpenPosterModal,
  },
  {
    field: "overview",
    headerName: "Описание",
    width: 400,
    editable: false,
    renderCell: DescriptionInfoModal,
  },
  {
    field: "vote_average",
    headerName: "Рейтинг",
    width: 300,
    editable: false,
    renderCell: RatingInfoModal,
  },
  {
    field: "vote_count",
    headerName: "Понравилось",
    type: "number",
    width: 170,
    editable: false,
    renderCell: LikedInfoModal,
  },
  {
    field: "release_date",
    headerName: "Дата выхода",
    type: "number",
    width: 200,
    editable: false,
    renderCell: ReleaseInfoModal,
  },
];
