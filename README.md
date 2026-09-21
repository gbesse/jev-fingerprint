# jev-fingerprint

**Group errors by underlying cause after free normalization and exact grouping, buying only representative comparisons.**

[![Tests](https://github.com/gbesse/jev-fingerprint/actions/workflows/test.yml/badge.svg)](https://github.com/gbesse/jev-fingerprint/actions/workflows/test.yml) ![MIT](https://img.shields.io/badge/license-MIT-blue) ![Node](https://img.shields.io/badge/node-22%2B-green) ![Public alpha](https://img.shields.io/badge/status-public_alpha-orange)

## 30-second offline quick start
`git clone https://github.com/gbesse/jev-fingerprint.git && cd jev-fingerprint && npm install && npm run demo`. All fixtures are synthetic.

## Call real Jev
Set `TYPESAFE_API_KEY` for a reviewed adapter sending paid representative comparisons to `api.typesafe.ai`. This alpha keeps it unwired; `npm run live-smoke` makes zero calls.

## Library and integration
Use `normalize`, `exactGroups`, `candidates`, `fingerprint`, `FakeJev`, and `htmlReport`. Persist the returned pair cache for incremental runs; proposed groups can feed tracker merge-suggestion files, but nothing mutates a remote tracker.

## How it decides
UUIDs, large numbers/hex values, timestamps, absolute path prefixes, addresses, long payloads and stack line numbers normalize in code. Exact fingerprints group free. Same service/level/top-frame candidates receive the noul “same underlying cause.” A group title is chosen only from real member messages. Counts, services and time span are code-owned.

## Boundaries
Importers, CLI and tracker-specific suggestion exports remain unwired. Normalization intentionally preserves short status codes to avoid merging HTTP 401 and 500. Cached identity is representative-id based in this alpha. Suggestions require human application. No benchmark is claimed.

## Validation
Run `npm run check && npm run typecheck && npm test && npm run demo`; CI uses Node 22 and 24.

## Related projects
[jev-pairs](https://github.com/gbesse/jev-pairs), [DecisionPacks](https://github.com/gbesse/decisionpacks), and [Question Forge](https://github.com/gbesse/question-forge).

Independent project; not affiliated with TypeSafe AI. [API docs](https://docs.typesafe.ai/api) · [model notes](https://docs.typesafe.ai/model-jaggedness/jev-1.13/)
