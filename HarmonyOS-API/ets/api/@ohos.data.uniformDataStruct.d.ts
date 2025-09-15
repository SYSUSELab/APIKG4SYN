/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @file
 * @kit ArkData
 */
import image from './@ohos.multimedia.image';
/**
 * Provide uniform data struct definition.
 *
 * @namespace uniformDataStruct
 * @syscap SystemCapability.DistributedDataManager.UDMF.Core
 * @since 12
 */
declare namespace uniformDataStruct {
    /**
     * Describe the plain text uniform data struct.
     *
     * @interface PlainText
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12
     */
    interface PlainText {
        /**
         * Indicates the uniform data type of this data struct.
         *
         * @type { 'general.plain-text' }
         * @readonly
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 12
         */
        readonly uniformDataType: 'general.plain-text';
        /**
         * Indicates the content of the PlainText.
         *
         * @type { string }
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 12
         */
        textContent: string;
        /**
         * Indicates the abstract of the PlainText.
         * @type { ?string }
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 12
         */
        abstract?: string;
        /**
         * Indicates the details of the PlainText.
         *
         * @type { ?Record<string, string> }
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 12
         */
        details?: Record<string, string>;
    }
    /**
     * Describe the hyperlink uniform data struct.
     *
     * @interface Hyperlink
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12
     */
    interface Hyperlink {
        /**
         * Indicates the uniform data type of this data struct.
         *
         * @type { 'general.hyperlink' }
         * @readonly
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 12
         */
        readonly uniformDataType: 'general.hyperlink';
        /**
         * Indicates the url of of the Hyperlink.
         *
         * @type { string }
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 12
         */
        url: string;
        /**
         * Indicates the description of the Hyperlink.
         * @type { ?string }
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 12
         */
        description?: string;
        /**
         * Indicates the details of the Hyperlink.
         *
         * @type { ?Record<string, string> }
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 12
         */
        details?: Record<string, string>;
    }
    /**
     * Describe the html uniform data struct.
     *
     * @interface HTML
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12
     */
    interface HTML {
        /**
         * Indicates the uniform data type of this data struct.
         *
         * @type { 'general.html' }
         * @readonly
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 12
         */
        readonly uniformDataType: 'general.html';
        /**
         * Indicates the content of html, with html tags.
         *
         * @type { string }
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 12
         */
        htmlContent: string;
        /**
         * Indicates the plain content of html.
         *
         * @type { ?string }
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 12
         */
        plainContent?: string;
        /**
         * Indicates the details of html.
         *
         * @type { ?Record<string, string> }
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 12
         */
        details?: Record<string, string>;
    }
    /**
     * Describe system defined app item uniform data struct(this kind of struct is provided and bound to OpenHarmony).
     *
     * @interface OpenHarmonyAppItem
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 12
     */
    interface OpenHarmonyAppItem {
        /**
         * Indicates the uniform data type of this data struct.
         *
         * @type { 'openharmony.app-item' }
         * @readonly
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 12
         */
        readonly uniformDataType: 'openharmony.app-item';
        /**
         * Indicates the app id.
         *
         * @type { string }
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 12
         */
        appId: string;
        /**
         * Indicates the app name.
         *
         * @type { string }
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 12
         */
        appName: string;
        /**
         * Indicates the id of app icon.
         *
         * @type { string }
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 12
         */
        appIconId: string;
        /**
         * Indicates the id of app label.
         *
         * @type { string }
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 12
         */
        appLabelId: string;
        /**
         * Indicates the bundle name of app.
         *
         * @type { string }
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 12
         */
        bundleName: string;
        /**
         * Indicates the ability name of app.
         *
         * @type { string }
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 12
         */
        abilityName: string;
        /**
         * Indicates the details of app.
         *
         * @type { ?Record<string, number | string | Uint8Array> }
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 12
         */
        details?: Record<string, number | string | Uint8Array>;
    }
    /**
     * Describe content form uniform data struct.
     *
     * @interface ContentForm
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 14
     */
    interface ContentForm {
        /**
         * Indicates the uniform data type of this data struct.
         *
         * @type { 'general.content-form' }
         * @readonly
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 14
         */
        readonly uniformDataType: 'general.content-form';
        /**
         * Indicates the thumb data of content form.
         *
         * @type { Uint8Array }
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 14
         */
        thumbData?: Uint8Array;
        /**
         * Indicates the description of content form.
         *
         * @type { string }
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 14
         */
        description?: string;
        /**
         * Indicates the title of content form.
         *
         * @type { string }
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 14
         */
        title: string;
        /**
         * Indicates the app icon of content form.
         *
         * @type { Uint8Array }
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 14
         */
        appIcon?: Uint8Array;
        /**
         * Indicates the app name of content form.
         *
         * @type { appName }
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 14
         */
        appName?: string;
        /**
         * Indicates the link url of content form.
         *
         * @type { linkUri }
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 14
         */
        linkUri?: string;
    }
    /**
     * Describe form uniform data struct.
     *
     * @interface Form
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 15
     */
    interface Form {
        /**
         * Indicates the uniform data type of this data struct.
         *
         * @type { 'openharmony.form' }
         * @readonly
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 15
         */
        readonly uniformDataType: 'openharmony.form';
        /**
         * Indicates the form id of form.
         *
         * @type { number }
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 15
         */
        formId: number;
        /**
         * Indicates the form name of form.
         *
         * @type { string }
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 15
         */
        formName: string;
        /**
         * Indicates the bundle name of form.
         *
         * @type { string }
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 15
         */
        bundleName: string;
        /**
         * Indicates the ability name of form.
         *
         * @type { string }
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 15
         */
        abilityName: string;
        /**
         * Indicates the module of form.
         *
         * @type { string }
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 15
         */
        module: string;
        /**
         * Indicates the details of form.
         *
         * @type { ?Record<string, number | string | Uint8Array> }
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 15
         */
        details?: Record<string, number | string | Uint8Array>;
    }
    /**
     * Describe the file uri uniform data struct.
     *
     * @interface FileUri
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 15
     */
    interface FileUri {
        /**
         * Indicates the uniform data type of this data struct.
         *
         * @type { 'general.file-uri' }
         * @readonly
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 15
         */
        readonly uniformDataType: 'general.file-uri';
        /**
         * Indicates the oriUri of fileUri.
         *
         * @type { string }
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 15
         */
        oriUri: string;
        /**
         * Indicates the file type of fileUri.
         *
         * @type { string }
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 15
         */
        fileType: string;
        /**
         * Indicates the details of fileUri.
         *
         * @type { ?Record<string, number | string | Uint8Array> }
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 15
         */
        details?: Record<string, number | string | Uint8Array>;
    }
    /**
     * Describe the pixelMap uniform data struct.
     *
     * @interface PixelMap
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 15
     */
    interface PixelMap {
        /**
         * Indicates the uniform data type of this data struct.
         *
         * @type { 'openharmony.pixel-map' }
         * @readonly
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 15
         */
        readonly uniformDataType: 'openharmony.pixel-map';
        /**
         * Indicates the pixelMap value of pixelMap.
         *
         * @type { image.PixelMap }
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 15
         */
        pixelMap: image.PixelMap;
        /**
         * Indicates the details of pixelMap.
         *
         * @type { ?Record<string, number | string | Uint8Array> }
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 15
         */
        details?: Record<string, number | string | Uint8Array>;
    }
}
export default uniformDataStruct;
