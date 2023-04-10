export default function getScrollbarWidth() {
  const scrollbar = document.createElement("div");
  scrollbar.style.position = "absolute";
  scrollbar.style.left = "0";
  scrollbar.style.top = "0";
  scrollbar.style.width = "10000px";
  scrollbar.style.height = "10000px";
  scrollbar.style.overflow = "scroll";
  scrollbar.style.opacity = "0";
  document.body.append(scrollbar);
  const scrollbarWidth = scrollbar.offsetWidth - scrollbar.clientWidth;
  scrollbar.remove();
  return scrollbarWidth;
}
