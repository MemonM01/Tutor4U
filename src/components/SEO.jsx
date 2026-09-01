import { useEffect } from "react";

function setMeta(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

export default function SEO({ title, description }) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) setMeta("description", description);
  }, [title, description]);

  return null;
}
