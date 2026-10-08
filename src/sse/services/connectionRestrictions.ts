import { comboPinAllowlist } from "@/lib/combos/steps.ts";
import { getConnectionRestrictionSources } from "./credentialSelectionDiagnostics.ts";

function normalizeAllowedConnectionIds(value: unknown): string[] | null {
  if (!Array.isArray(value)) return null;
  const ids = value.filter(
    (entry): entry is string => typeof entry === "string" && entry.trim().length > 0
  );
  return ids.length > 0 ? ids : null;
}

function intersectAllowedConnectionIds(primary: unknown, secondary: unknown): string[] | null {
  const first = normalizeAllowedConnectionIds(primary);
  const second = normalizeAllowedConnectionIds(secondary);

  if (first && second) {
    return first.filter((id) => second.includes(id));
  }

  return first || second || null;
}

/** Pair the existing allowlist intersection with its diagnostic provenance. */
export function resolveConnectionRestrictions(
  key: { allowedConnections?: unknown; allowedQuotas?: unknown } | null | undefined,
  target:
    { connectionId?: string | null; allowedConnectionIds?: string[] | null } | null | undefined,
  isCombo: boolean
) {
  const routingAllowlist = comboPinAllowlist(
    isCombo,
    target?.connectionId,
    target?.allowedConnectionIds
  );
  return {
    allowedConnections: intersectAllowedConnectionIds(key?.allowedConnections, routingAllowlist),
    sources: getConnectionRestrictionSources({
      keyAllowlist: key?.allowedConnections,
      keyQuotas: key?.allowedQuotas,
      routingAllowlist,
      isCombo,
    }),
  };
}
