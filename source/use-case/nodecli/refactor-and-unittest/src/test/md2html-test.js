import * as assert from "node:assert";
import * as fs from "node:fs/promises";
import { md2html } from "../md2html.js";

it("converts Markdown to HTML (GFM=false)", async() => {
    // fs.readFileSyncは同期的にファイルを読み込むメソッド
    const sample = await fs.readFile("test/fixtures/sample.md", { encoding: "utf8" });
    const expected = await fs.readFile("test/fixtures/expected.html", { encoding: "utf8" });
    // 末尾の改行の有無の違いを無視するため、変換後のHTMLのスペースをtrimメソッドで削除してから比較しています
    assert.strictEqual(md2html(sample, { gfm: false }).trimEnd(), expected.trimEnd());
});

it("converts Markdown to HTML (GFM=true)", async() => {
    const sample = await fs.readFile("test/fixtures/sample.md", { encoding: "utf8" });
    const expected = await fs.readFile("test/fixtures/expected-gfm.html", { encoding: "utf8" });
    // 末尾の改行の有無の違いを無視するため、変換後のHTMLのスペースをtrimメソッドで削除してから比較しています
    assert.strictEqual(md2html(sample, { gfm: true }).trimEnd(), expected.trimEnd());
});

