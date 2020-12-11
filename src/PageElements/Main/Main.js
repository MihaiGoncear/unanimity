import React from 'react';
import { PageRender } from "./PageRender"

export function Main(props) {
  return (
    <PageRender stateTest={props.stateTest} />
  )
}