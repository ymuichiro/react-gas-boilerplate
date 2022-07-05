# React & Google Apps Script Boilerplate

Google Apps Script の [Web Apps](https://developers.google.com/apps-script/guides/web) を簡単に作成する為のテンプレートです。
以下の使い方に沿ってご利用下さい。

# 使い方

## 初期設定

本レポジトリをローカルに取得し、依存モジュールをインストールして下さい。

```
git clone
yarn install
```

ローカルからGoogle Apps script側を操作する為、最初にログインを行う必要があります。

```
yarn run init
```

ソースファイルのアップロード先を指定します。`.clasp.json`を開き、`scriptId`にアップロード先となるスクリプトファイルのIDを入力して下さい。<br>

```json
{
  "scriptId": "******************",
  "rootDir": "./server"
}
```

スクリプトファイルのIDはURLの以下****の箇所となります。

```
https://script.google.com/home/projects/****/edit
```

問題なく構築が出来たか確認します。

```
yarn run build
```

処理が完了したらエディタの画面より新規Web Appsを[デプロイ](https://developers.google.com/apps-script/guides/web#deploy_a_script_as_a_web_app)して下さい


## UIの確認を行うとき

以下を実行し、dev-serverを起動します

```
yarn run start
```
