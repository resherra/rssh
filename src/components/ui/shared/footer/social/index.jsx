export default function Social() {
  return (
    <ul className={`flex gap-4 text-xs text-mainGray underline underline-offset-2`}>
      <li>
        <a href="https://twitter.com/resherra" target="_blank" aria-label="x.com link">
          X
        </a>
      </li>
      <li>
        <a href="https://github.com/resherra" target="_blank" aria-label="Github link">
          Github
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/redouancherrat/" target="_blank" aria-label="LinkedIn link">
          LinkedIn
        </a>
      </li>
    </ul>
  )
}
