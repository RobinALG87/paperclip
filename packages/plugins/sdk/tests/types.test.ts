import { describe, expect, it } from "vitest";

import type { SerializedIssueComment } from "../src/types.js";

const serializedComment: SerializedIssueComment = {
  id: "comment-1",
  companyId: "company-1",
  issueId: "issue-1",
  authorType: "user",
  authorAgentId: null,
  authorUserId: "user-1",
  body: "A comment returned over worker RPC",
  presentation: null,
  metadata: null,
  deletedAt: null,
  createdAt: "2026-07-11T12:00:00.000Z",
  updatedAt: "2026-07-11T12:00:01.000Z",
};

describe("plugin SDK RPC date types", () => {
  it("represents issue comment timestamps as ISO strings", () => {
    expect(serializedComment.createdAt).toBe("2026-07-11T12:00:00.000Z");
    expect(serializedComment.updatedAt).toBe("2026-07-11T12:00:01.000Z");
    expect(serializedComment.deletedAt).toBeNull();
  });
});
