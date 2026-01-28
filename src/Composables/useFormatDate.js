export default function useFormatDate() {
  const formatDate = (dateString) => {
    if (!dateString) return "-";

    return new Intl.DateTimeFormat("en-us", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    }).format(new Date(dateString));
  };

  return formatDate;
}
