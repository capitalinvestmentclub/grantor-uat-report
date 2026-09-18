# Grantor deployed defect-delivery retest

Completed: 2026-09-18T10:10:00Z

Environment: deployed development · Google Chrome · 1792x976 by default; additional sizes only for responsive findings.

This report records terminal disposition for every Grantor entry in the 276-finding delivery batch. PASS means the deployed behavior was verified. FAIL means the deployed defect remains reproducible. PASSED_OVER means the bounded attempt could not produce trustworthy proof, commonly because an exact fixture, actor, reversible mutation, or stable protected page was unavailable. DUPLICATE_COVERAGE points to another finding that exercised the same behavior.

## Summary

| Total | PASS | FAIL | DUPLICATE_COVERAGE | PASSED_OVER |
|---:|---:|---:|---:|---:|
| 3 | 1 | 0 | 0 | 2 |

Severity inventory: HIGH 1 · MEDIUM 2. Outcome reconciliation: PASS 1 · PASSED_OVER 2.

## Finding dispositions

| ID | Severity | Outcome | Title | Disposition | Tested |
|---|---|---|---|---|---|
| GRT003-VALID-001 | HIGH | PASS | Blank grant step advances to publication controls | VERIFIED_FIXED_DEPLOYED | 2026-09-18T07:27:37.938Z |
| GRT014-STATE-001 | MEDIUM | PASSED_OVER | Grant panels remain stale after decisions | NO_ISOLATED_GRANTOR_DECISION_FIXTURE | 2026-09-18T07:33:25.344Z |
| GRT024-COVERAGE-001 | MEDIUM | PASSED_OVER | Organization and public-funding lifecycle is incomplete | PASSED_OVER_MISSING_RUN_SCOPED_FIXTURES | 2026-09-18T05:20:00.000Z |

The machine-readable companion file preserves target URLs, evidence paths, notes, browser, viewport, and API provenance for each entry.
