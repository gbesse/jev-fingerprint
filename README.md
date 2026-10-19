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

## Shareable demo report

Run `npm run demo:report` to capture this repository’s bundled example as one JSON object with the project purpose, version and complete demo output. The command fails if the demo fails, so the report is useful when sharing a reproducible first look or reporting unexpected behavior. The bundled demo’s data and safety boundaries still apply.

## Validation
Run `npm run check && npm run typecheck && npm test && npm run demo`; CI uses Node 22 and 24.

## Related projects
[jev-pairs](https://github.com/gbesse/jev-pairs), [DecisionPacks](https://github.com/gbesse/decisionpacks), and [Question Forge](https://github.com/gbesse/question-forge).

Independent project; not affiliated with TypeSafe AI. [API docs](https://docs.typesafe.ai/api) · [model notes](https://docs.typesafe.ai/model-jaggedness/jev-1.13/)

## October 2026 improvement · Amélioration d’octobre 2026 · Mejora de octubre de 2026

The grouping run now rejects out-of-range comparison scores, including values loaded from a prior cache, and invalid merge thresholds. Run `npm test` offline.

Le regroupement refuse désormais les scores de comparaison hors de [0,1], y compris ceux d’un cache antérieur, ainsi que les seuils de fusion invalides. Lancez `npm test` hors ligne.

La agrupación ahora rechaza puntuaciones de comparación fuera de [0,1], incluso las de una caché anterior, y umbrales de fusión inválidos. Ejecute `npm test` sin conexión.

## Contrôle d’adoption · Adoption check · Comprobación de adopción

[Français : essayer un cas concret](examples/adoption-check.md) · [English: try a concrete case](examples/adoption-check.md) · [Español: pruebe un caso concreto](examples/adoption-check.md).

## Content-bound comparisons / Comparaisons liées / Comparaciones vinculadas

EN: Incremental cache keys now bind complete representative events and provider identity, rather than only event IDs. Changed messages, metadata or fake fixtures require re-evaluation. Legacy ID-only entries are ignored; invalid cached numbers still fail. Custom providers reuse scores only with a stable, configuration-specific `cacheIdentity`. Inputs and caches are snapshotted, and titles must be an actual member message. A title failure cannot mutate the previous cache. This checks declared inputs, not real grouping quality or independently authenticated provider identity.

FR : Le cache incrémental lie désormais événements représentatifs complets et identité fournisseur, au lieu des seuls ID. Messages, métadonnées ou fixtures modifiés exigent une nouvelle évaluation. Les anciennes clés par ID sont ignorées ; des nombres invalides restent refusés. Un fournisseur personnalisé ne réutilise les scores qu’avec un `cacheIdentity` stable propre à sa configuration. Entrées et cache sont capturés ; le titre doit être un message réel du groupe. Un titre invalide ne modifie pas le cache précédent. Cela vérifie des entrées déclarées, pas la qualité réelle du regroupement ni une identité authentifiée indépendamment.

ES: La caché incremental vincula eventos representativos completos e identidad del proveedor, no solo ID. Mensajes, metadatos o fixtures modificados exigen reevaluación. Ignora claves antiguas por ID; números incorrectos siguen rechazados. Proveedores personalizados solo reutilizan scores con `cacheIdentity` estable de su configuración. Captura entradas/cachés; el título debe ser mensaje real del grupo. Un título inválido no modifica caché anterior. Comprueba entradas declaradas, no calidad real de agrupación ni identidad autenticada independientemente.


FR : `fingerprint(events, provider, existing, threshold, { maxComparisons: 1000 })` refuse par défaut plus de 1 000 paires candidates **avant tout appel** de comparaison ou de titre. La limite entière accepte 0 à 100 000 ; elle compte aussi les paires en cache, après exclusion par service/niveau/cadre. Aucun regroupement partiel n’est retourné. Elle ne borne pas les appels de titre (un par groupe), le temps CPU, les tokens ni la facture totale. L’API bas niveau `candidates` reste sans cette limite. Réduisez la fenêtre ou partitionnez les événements ; augmenter la limite exige de revoir le coût.

EN: `fingerprint(events, provider, existing, threshold, { maxComparisons: 1000 })` rejects more than 1,000 candidate pairs by default **before any comparison or title call**. The integer limit accepts 0–100,000 and counts cached pairs too, after service/level/frame blocking. No partial clustering is returned. It does not bound title calls (one per group), CPU time, tokens or the total bill. Low-level `candidates` remains uncapped. Narrow the window or partition events; raising the limit requires reviewing cost.

ES: `fingerprint(events, provider, existing, threshold, { maxComparisons: 1000 })` rechaza por defecto más de 1.000 pares candidatos **antes de cualquier llamada** de comparación o título. El límite entero admite 0–100.000 y cuenta pares en caché tras el filtrado por servicio/nivel/marco. No devuelve agrupaciones parciales. No limita títulos (uno por grupo), CPU, tokens ni factura total. La API básica `candidates` sigue sin límite. Reduzca la ventana o particione eventos; aumentar el límite exige revisar el coste.

## Fusions contradictoires / Contradictory merges / Fusiones contradictorias

FR — Les arêtes positives sont examinées par probabilité décroissante, puis identifiants. Une fusion est refusée si elle introduit une paire évaluée sous le seuil ou des métadonnées bloquantes incompatibles ; `mergeConflicts` conserve le témoin. C’est une règle gloutonne reproductible, sans optimalité globale ni conclusion sur les paires non évaluées.

EN — Positive edges are processed by descending probability, then identifiers. Merges that introduce an observed below-threshold pair or incompatible blocking metadata are rejected, with witnesses in `mergeConflicts`. This is a reproducible greedy rule, without global optimality or conclusions about unjudged pairs.

ES — Aristas positivas se procesan por probabilidad descendente y después identificadores. Se rechazan fusiones con pares evaluados bajo el umbral o metadatos incompatibles; `mergeConflicts` conserva el testigo. Es una regla voraz reproducible, sin optimalidad global ni conclusiones sobre pares no evaluados.
