import React from "react";
import { usePage, usePageUpdate } from "../contexts/PageContext";
export default function Projects() {
  const page = usePage();
  const setPage = usePageUpdate();
  return <div>Projects</div>;
}
