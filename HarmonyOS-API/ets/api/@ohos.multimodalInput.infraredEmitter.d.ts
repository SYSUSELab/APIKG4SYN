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
 * @kit InputKit
 */
/**
 * Declares the APIs for configuring attributes of the IR emitter.
 *
 * @namespace infraredEmitter
 * @syscap SystemCapability.MultimodalInput.Input.InfraredEmitter
 * @since 12
 */
declare namespace infraredEmitter {
    /**
     * Infrared frequency range supported by the IR emitter.
     *
     * @interface InfraredFrequency
     * @syscap SystemCapability.MultimodalInput.Input.InfraredEmitter
     * @systemapi hide for inner use
     * @since 12
     */
    /**
     * Infrared frequency range supported by the IR emitter.
     *
     * @interface InfraredFrequency
     * @syscap SystemCapability.MultimodalInput.Input.InfraredEmitter
     * @since 15
     */
    interface InfraredFrequency {
        /**
         * Maximum frequency.
         *
         * @type { number }
         * @syscap SystemCapability.MultimodalInput.Input.InfraredEmitter
         * @systemapi hide for inner use
         * @since 12
         */
        /**
         * Maximum frequency.
         *
         * @type { number }
         * @syscap SystemCapability.MultimodalInput.Input.InfraredEmitter
         * @since 15
         */
        max: number;
        /**
         * Minimum frequency.
         *
         * @type { number }
         * @syscap SystemCapability.MultimodalInput.Input.InfraredEmitter
         * @systemapi hide for inner use
         * @since 12
         */
        /**
         * Minimum frequency.
         *
         * @type { number }
         * @syscap SystemCapability.MultimodalInput.Input.InfraredEmitter
         * @since 15
         */
        min: number;
    }
    /**
     * Transmitted IR signal.
     *
     * @permission ohos.permission.MANAGE_INPUT_INFRARED_EMITTER
     * @param { number} infraredFrequency - IR infrared frequency, in Hz.
     * @param { Array<number>} pattern - Pattern of signal transmission in alternate on/off mode, in microseconds.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.MultimodalInput.Input.InfraredEmitter
     * @systemapi hide for inner use
     * @since 12
     */
    /**
     * Transmitted IR signal.
     *
     * @permission ohos.permission.MANAGE_INPUT_INFRARED_EMITTER
     * @param { number} infraredFrequency - IR infrared frequency, in Hz.
     * @param { Array<number>} pattern - Pattern of signal transmission in alternate on/off mode, in microseconds.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.MultimodalInput.Input.InfraredEmitter
     * @since 15
     */
    function transmitInfrared(infraredFrequency: number, pattern: Array<number>): void;
    /**
     * Obtains the infrared frequency supported by the IR emitter.
     *
     * @permission ohos.permission.MANAGE_INPUT_INFRARED_EMITTER
     * @returns { Array<InfraredFrequency> } The return value is an array of InfraredFrequency objects, indicating the infrared frequency ranges supported by the IR emitter.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.MultimodalInput.Input.InfraredEmitter
     * @systemapi hide for inner use
     * @since 12
     */
    /**
     * Obtains the infrared frequency supported by the IR emitter.
     *
     * @permission ohos.permission.MANAGE_INPUT_INFRARED_EMITTER
     * @returns { Array<InfraredFrequency> } The return value is an array of InfraredFrequency objects, indicating the infrared frequency ranges supported by the IR emitter.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.MultimodalInput.Input.InfraredEmitter
     * @since 15
     */
    function getInfraredFrequencies(): Array<InfraredFrequency>;
}
export default infraredEmitter;
