"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMdFromJson = void 0;
const declarative_markdown_1 = require("@scdev/declarative-markdown");
const parseTextIntoCode = (text) => {
    return `
\`\`\`
${text}
\`\`\`
  `;
};
const generateMdFromJson = (envVarStore) => {
    var _a;
    const envVarsDict = envVarStore.envVars;
    const md = new declarative_markdown_1.Markdown("Environment Variables Documentation");
    md.paragraph(`Last updated version: ${(_a = envVarStore.version) !== null && _a !== void 0 ? _a : "<undefined>"}`);
    Object.values(envVarsDict).forEach((info) => {
        var _a, _b;
        md.header(info.envVar, 3).paragraph(info.description);
        md.paragraph(`Updated version: ${info.updatedVersion}`);
        md.paragraph(`Introduced version: ${info.introducedVersion}`);
        md.paragraph(`${(0, declarative_markdown_1.bold)("Type:")} ${info.type}`);
        md.paragraph(`${(0, declarative_markdown_1.bold)("Default value:")}`);
        md.paragraph(parseTextIntoCode((_b = (_a = info.instances[0].default) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : "<empty>"));
        md.paragraph(`${(0, declarative_markdown_1.bold)("Used in:")}`);
        md.table(["Property"], [...info.instances.map((instance) => [instance.key])]);
    });
    md.tableOfContent();
    return md.render();
};
exports.generateMdFromJson = generateMdFromJson;
