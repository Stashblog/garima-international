export default function Main({ title = '', description = '' }) {
  document.querySelector('title').innerText = title + ' | Global Craft Innovations'
  document.querySelector('meta[name="title"]').content = title
  document.querySelector('meta[name="description"]').content = description
  window.scrollTo(0, 0)
}
