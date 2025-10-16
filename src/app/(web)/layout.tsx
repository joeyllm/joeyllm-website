import type { Metadata } from "next";
import WebLayoutWrapper from './WebLayoutWrapper';

export const metadata: Metadata = {
  title: "JoeyLLM",
  description: "Sovereign Australian AI",
};

export default function WebLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <WebLayoutWrapper>{children}</WebLayoutWrapper>;
}
