export default function setLikes(text) {
  return {
    type: "UPDATE_LIKES",
    text: text,
  };
}
