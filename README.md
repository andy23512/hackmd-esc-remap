# HackMD Esc Remap

在 hackmd.io 上，把 `Esc` 鍵轉換成 `Ctrl+[`。

HackMD 的 vim 模式中，`Esc` 無法離開 insert 模式，但 `Ctrl+[` 可以。這個 Chrome 擴充套件會攔截 `Esc`，改送出一個 `Ctrl+[` 的 keydown 事件。

已在 hackmd.io 的 vim 模式實測可行（Chrome 156.0.8078.80，2026-10-31）。

## 安裝

1. 開啟 `chrome://extensions`，打開「開發人員模式」。
2. 按「載入未封裝項目」，選這個資料夾。
3. 重新整理 hackmd.io 的頁面。

## 運作方式

`content.js` 只在 `https://hackmd.io/*` 執行。它在 capture 階段監聽 `keydown`，遇到 `Esc` 時阻止原本的事件，並在目前焦點元素上送出 `key: '['`、`ctrlKey: true` 的合成事件。

## 限制

- 合成事件的 `isTrusted` 為 `false`。網頁程式若檢查這個屬性，會忽略它。
- 瀏覽器自己處理的 `Esc` 行為（例如退出全螢幕）無法攔截。
- 只對 hackmd.io 生效。要用在其他網站，請修改 `manifest.json` 的 `matches`。

## 授權

[MIT](LICENSE)
