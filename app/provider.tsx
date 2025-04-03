"use client";
import { Provider } from "jotai";
import { DevTools } from "jotai-devtools";
import "jotai-devtools/styles.css";
interface Props {
  children: React.ReactNode;
}

export function JotaiProvider({ children }: Props) {
  return (
    <Provider>
      {children}
      <DevTools />
    </Provider>
  );
}