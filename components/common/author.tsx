import React from 'react'
import type { Frontmatter } from "~/types";

type Props = {
  frontmatter: Frontmatter;
};

export default function author({ frontmatter }: Props) {

  return (
    <span>Abyditya <i className="fa-solid fa-xs fa-badge-check text-rose-500"></i></span>
  )
}
