/*!
 * cdp.lazyload.d.ts 
 * This file is generated by the CDP package build process.
 *
 * Date: 2015-11-27T17:22:17
 */
﻿declare namespace CDP {
    /**
    * \~english
    * Script lazy loading.
    *
    * \~japanese
    * 遅延スクリプトロード
    *
    * @param type {String} [in] script タグに指定されたタイプを指定
    */
    function lazyLoad(type: string): void;

    /**
     * \~english
     * Check for AMD is available.
     *
     * \~japanese
     * AMD が使用可能か判定
     *
     * @private
     * @return {Boolean} true: AMD 対応環境 / false: AMD 非対応
     */
    function isAMD(): boolean;
}