import { execSync } from "child_process";

interface GitConfig {
  commitPrefix: string;
  targetBranches: string[];
}

export class GitHelper {
  constructor(private config: GitConfig) {}

  commit(message: string, files: string[] = ["."]) {
    const fullMessage = `${this.config.commitPrefix} ${message}`;
    execSync(`git add ${files.join(" ")}`);
    execSync(`git commit -m "${fullMessage}"`);
  }

  getTranslationLogs() {
    const cmd = [
      "git log",
      `--grep='^${this.config.commitPrefix}' -E --invert-grep`,
      '--pretty=format:"%h|%ad|%s"',
      "--date=iso",
      "--name-status",
      ...this.config.targetBranches.map((b) => `origin/${b}`),
    ].join(" ");

    const output = execSync(cmd).toString();
    return this.parseLogOutput(output);
  }

  private parseLogOutput(output: string) {
    const commits: CommitChange[] = [];
    let currentCommit: CommitChange | null = null;

    output.split("\n").forEach((line) => {
      if (line.startsWith('"')) {
        const [hash, date, ...msgParts] = line.replace(/"/g, "").split("|");
        currentCommit = {
          hash,
          date: new Date(date),
          message: msgParts.join("|"),
          changes: [],
        };
        commits.push(currentCommit);
      } else if (currentCommit && line.trim()) {
        const [type, path] = line.split("\t");
        currentCommit.changes?.push({
          type: this.normalizeChangeType(type),
          date: currentCommit.date,
          path: path.trim(),
          diff: this.getLineDiff(path),
        });
      }
    });

    return commits.filter((c) => c.changes?.length);
  }

  private getLineDiff(path: string) {
    try {
      return execSync(`git diff -U0 ${path}`).toString();
    } catch {
      return "";
    }
  }

  private normalizeChangeType(type: string): ChangeType {
    const mapping: Record<string, ChangeType> = {
      A: "file-add",
      D: "file-delete",
      M: "file-modify",
      R: "file-rename",
      C: "file-copy",
    };
    return mapping[type[0]] || "unknown";
  }
}

export type ChangeType =
  | "file-add"
  | "file-delete"
  | "file-modify"
  | "file-rename"
  | "file-copy"
  | "unknown";

export interface CommitChange {
  hash: string;
  date: Date;
  message: string;
  changes: FileChange[];
}

export interface FileChange {
  type: ChangeType;
  date: Date;
  path: string;
  diff: string;
}
