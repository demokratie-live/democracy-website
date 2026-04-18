import assert from "node:assert/strict";
import test from "node:test";
import type { ReactNode } from "react";

import { ComparisonRow, extractComparisonRows } from "./ComparisonTable";

function WrappedComparisonRow(props: {
  left: string;
  leftDescription: string;
  right: string;
  rightDescription: string;
}) {
  void props;
  return null;
}

function Wrapper({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

test("renders rows passed as ComparisonRow children", () => {
  const rows = extractComparisonRows(
    <ComparisonRow
      left="Partei A"
      leftDescription="Beschreibung links"
      right="Partei B"
      rightDescription="Beschreibung rechts"
    />,
  );

  assert.deepEqual(rows, [
    {
      left: "Partei A",
      leftDescription: "Beschreibung links",
      right: "Partei B",
      rightDescription: "Beschreibung rechts",
    },
  ]);
});

test("renders rows from MDX-like wrapped children without relying on component identity", () => {
  const rows = extractComparisonRows(
    <Wrapper>
      <WrappedComparisonRow
        left="MDX Links"
        leftDescription="MDX Beschreibung links"
        right="MDX Rechts"
        rightDescription="MDX Beschreibung rechts"
      />
    </Wrapper>,
  );

  assert.deepEqual(rows, [
    {
      left: "MDX Links",
      leftDescription: "MDX Beschreibung links",
      right: "MDX Rechts",
      rightDescription: "MDX Beschreibung rechts",
    },
  ]);
});
