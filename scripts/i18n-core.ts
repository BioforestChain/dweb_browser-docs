import path from "node:path";
import fs from "node:fs";
import { CommitChange } from "./git-helper";
import { FileProcessor } from "./file-processor";

interface TranslationContext {
  sourceLang: string;
  targetLangs: string[];
  priorityOrder: string[];
  changes: CommitChange[];
}

class I18nCore {
  async generateTranslationPrompt(
    filePath: string,
    context: TranslationContext
  ) {
    const { ext } = path.parse(filePath);
    const processor = new FileProcessor(this.config);
    const content = fs.readFileSync(filePath, "utf-8");

    let parsed: any;
    if (ext === ".md") {
      parsed = processor.processMarkdown(content);
    } else {
      parsed = processor.processJson(content);
    }

    const historyPrompt = this.buildHistoryPrompt(filePath, context);
    const instructionPrompt = this.buildInstructionPrompt(parsed);

    return `
        ${this.config.systemPrompt}
        
        ## Translation Task
        ${historyPrompt}
        
        ## Content Structure
        ${JSON.stringify(parsed, null, 2)}
        
        ## Special Instructions
        ${instructionPrompt}
        
        Please output in ${this.config.outputFormat} format.
      `;
  }

  private buildHistoryPrompt(filePath: string, context: TranslationContext) {
    const relatedChanges = context.changes
      .flatMap((c) => c.changes)
      .filter((c) => c.path === filePath);

    if (!relatedChanges.length) return "No recent changes detected.";

    return `
        Recent changes detected:
        ${relatedChanges
          .map(
            (c) => `
          - ${c.type} at ${c.date.toISOString()}
          ${c.diff.split("\n").slice(0, 5).join("\n")}
        `
          )
          .join("\n")}
        
        Please pay special attention to these changes and ensure:
        1. Consistency across all language versions
        2. Preserve manual modifications marked with i11n
        3. Follow priority order: ${context.priorityOrder.join(" > ")}
      `;
  }
}
