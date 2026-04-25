"use client";

import { Search } from "nextra/components";

export function SearchWithCallback() {
  return (
    <Search
      loading="Loading…"
      onSearch={(query) => {
        console.log("Search query:", query);
      }}
    />
  );
}
