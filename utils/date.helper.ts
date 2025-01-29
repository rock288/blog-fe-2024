import dayjs from "dayjs"

export const formatDate = (date: string) => {
  if (!dayjs(date).isValid()) {
    return "Error Date"
  }
  return dayjs(date).format("DD-MM-YYYY")
}
