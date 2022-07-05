/*

 ここにGoogle Apps Script側のコードを記述します

*/

function doGet() {
  return HtmlService.createHtmlOutputFromFile('hosting/index.html')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setTitle('タイトル');
}

/**
 * クライアントサイドより呼び出される関数サンプル
 * 呼び出し元は /src/functions/hello.ts 内に定義
 */
function hello() {
  return 'response';
}

// 触れない
export {};
