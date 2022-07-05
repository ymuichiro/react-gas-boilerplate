import google from './type';

/**
 * Google Apps Script側のhello関数を呼び出す
 */
export async function callhello() {
  return new Promise((resolve, reject) => {
    google.script.run
      .withSuccessHandler((result: string) => {
        alert(result);
      })
      .withFailureHandler(() => {
        alert('error at withFailureHandler');
      })
      .hello();
  });
}
