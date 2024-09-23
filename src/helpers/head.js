export default function Main({ title = '', description = '' }) {
  document.querySelector('title').innerText = title
  document.querySelector('meta[name="title"]').content = title
  document.querySelector('meta[name="description"]').content = description
  window.scrollTo(0, 0)
}
