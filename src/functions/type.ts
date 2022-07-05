/** Google Script Runを定義 */
type GoogleScriptRun = {
  script: {
    run: {
      withSuccessHandler: (callback?: Function) => GoogleScriptRun['script']['run'];
      withFailureHandler: (callback?: Function) => GoogleScriptRun['script']['run'];
      [key: string]: any;
    };
  };
};

/** Windowにgoogleを追加する */
interface MyWindow extends Window {
  google: GoogleScriptRun;
}

declare var window: MyWindow;
export default window.google;
