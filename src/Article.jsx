import React from 'react'

export function Article(props) {
  return (
    <>
      <article>
        <figure>
          <a href={props.link}>
            <img
              src={props.imageSrc}
              width="400"
              height="400"
              alt={props.title}
            />
          </a>
        </figure>
        <ul>
          <li>
            #{props.authorNum}:
            <a href={props.link}>
              <strong>{props.title}</strong>
            </a>
          </li>
          <li>
            <a href={props.authorLink}>
              <img
                src={props.authorImage}
                width="24"
                height="24"
                alt={props.authorName}
              />
            </a>
          </li>
        </ul>
      </article>
    </>
  )
}
