/*
 * Copyright (c) 2022-2024 Huawei Device Co., Ltd.
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
 * @kit AbilityKit
 */
import { AsyncCallback } from './@ohos.base';
import * as _ApplicationStateObserver from './application/ApplicationStateObserver';
import { ProcessInformation as _ProcessInformation } from './application/ProcessInformation';
/**
 * This module provides the function of app manager service.
 *
 * @namespace appManager
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 9
 */
/**
 * This module provides the function of app manager service.
 *
 * @namespace appManager
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @atomicservice
 * @since 11
 */
declare namespace appManager {
    /**
     * Enum for the process state
     *
     * @enum { number }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 10
     */
    /**
     * Enum for the process state
     *
     * @enum { number }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice
     * @since 11
     */
    export enum ProcessState {
        /**
         * The state that the process is in when it is being created.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @since 10
         */
        /**
         * The state that the process is in when it is being created.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @atomicservice
         * @since 11
         */
        STATE_CREATE,
        /**
         * The state in which the process is in when it switches to the foreground.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @since 10
         */
        /**
         * The state in which the process is in when it switches to the foreground.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @atomicservice
         * @since 11
         */
        STATE_FOREGROUND,
        /**
         * The state in which the process is in focus.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @since 10
         */
        /**
         * The state in which the process is in focus.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @atomicservice
         * @since 11
         */
        STATE_ACTIVE,
        /**
         * The state in which a process is invisible in the background.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @since 10
         */
        /**
         * The state in which a process is invisible in the background.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @atomicservice
         * @since 11
         */
        STATE_BACKGROUND,
        /**
         * The state that the process is in when it is destroyed.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @since 10
         */
        /**
         * The state that the process is in when it is destroyed.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @atomicservice
         * @since 11
         */
        STATE_DESTROY
    }
    /**
     * Register application state observer.
     *
     * @permission ohos.permission.RUNNING_STATE_OBSERVER
     * @param { 'applicationState' } type - applicationState.
     * @param { ApplicationStateObserver } observer - The application state observer.
     * @returns { number } Returns the number code of the observer.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * 2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 16000050 - Internal error.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 14
     */
    function on(type: 'applicationState', observer: ApplicationStateObserver): number;
    /**
     * Register application state observer.
     *
     * @permission ohos.permission.RUNNING_STATE_OBSERVER
     * @param { 'applicationState' } type - applicationState.
     * @param { ApplicationStateObserver } observer - The application state observer.
     * @param { Array<string> } bundleNameList - The list of bundleName. The max length is 128.
     * @returns { number } Returns the number code of the observer.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * 2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 16000050 - Internal error.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 14
     */
    function on(type: 'applicationState', observer: ApplicationStateObserver, bundleNameList: Array<string>): number;
    /**
     * Unregister application state observer.
     *
     * @permission ohos.permission.RUNNING_STATE_OBSERVER
     * @param { 'applicationState' } type - applicationState.
     * @param { number } observerId - Indicates the number code of the observer.
     * @param { AsyncCallback<void> } callback - The callback of off.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * 2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 16000050 - Internal error.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 15
     */
    function off(type: 'applicationState', observerId: number, callback: AsyncCallback<void>): void;
    /**
     * Unregister application state observer.
     *
     * @permission ohos.permission.RUNNING_STATE_OBSERVER
     * @param { 'applicationState' } type - applicationState.
     * @param { number } observerId - Indicates the number code of the observer.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * 2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 16000050 - Internal error.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 14
     */
    function off(type: 'applicationState', observerId: number): Promise<void>;
    /**
     * Is user running in stability test.
     *
     * @param { AsyncCallback<boolean> } callback - The callback is used to return true if user is running stability test.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * 2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 16000050 - Internal error.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    /**
     * Is user running in stability test.
     *
     * @param { AsyncCallback<boolean> } callback - The callback is used to return true if user is running stability test.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * 2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 16000050 - Internal error.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice
     * @since 11
     */
    function isRunningInStabilityTest(callback: AsyncCallback<boolean>): void;
    /**
     * Is user running in stability test.
     *
     * @returns { Promise<boolean> } Returns true if user is running stability test.
     * @throws { BusinessError } 16000050 - Internal error.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    /**
     * Is user running in stability test.
     *
     * @returns { Promise<boolean> } Returns true if user is running stability test.
     * @throws { BusinessError } 16000050 - Internal error.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice
     * @since 11
     */
    function isRunningInStabilityTest(): Promise<boolean>;
    /**
     * Kill processes by bundle name
     *
     * @permission ohos.permission.KILL_APP_PROCESSES or ohos.permission.CLEAN_BACKGROUND_PROCESSES
     * @param { string } bundleName - bundle name.
     * @param { boolean } clearPageStack - The flag that indicates whether the page stack need to be cleared.
     * @param { number } [appIndex] - The application index.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @throws { BusinessError } 16000050 - Internal error.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 14
     */
    function killProcessesByBundleName(bundleName: string, clearPageStack: boolean, appIndex?: number): Promise<void>;
    /**
     * Is it a ram-constrained device
     *
     * @returns { Promise<boolean> } Returns true if the device is ram-constrained.
     * @throws { BusinessError } 16000050 - Internal error.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    /**
     * Is it a ram-constrained device
     *
     * @returns { Promise<boolean> } Returns true if the device is ram-constrained.
     * @throws { BusinessError } 16000050 - Internal error.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice
     * @since 11
     */
    function isRamConstrainedDevice(): Promise<boolean>;
    /**
     * Is it a ram-constrained device
     *
     * @param { AsyncCallback<boolean> } callback - The callback is used to return true if the device is ram-constrained.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * 2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 16000050 - Internal error.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    /**
     * Is it a ram-constrained device
     *
     * @param { AsyncCallback<boolean> } callback - The callback is used to return true if the device is ram-constrained.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * 2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 16000050 - Internal error.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice
     * @since 11
     */
    function isRamConstrainedDevice(callback: AsyncCallback<boolean>): void;
    /**
     * Get the memory size of the application
     *
     * @returns { Promise<number> } Returns the application memory size.
     * @throws { BusinessError } 16000050 - Internal error.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    /**
     * Get the memory size of the application
     *
     * @returns { Promise<number> } Returns the application memory size.
     * @throws { BusinessError } 16000050 - Internal error.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice
     * @since 11
     */
    function getAppMemorySize(): Promise<number>;
    /**
     * Get the memory size of the application
     *
     * @param { AsyncCallback<number> } callback - The callback is used to return the application memory size.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * 2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 16000050 - Internal error.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    /**
     * Get the memory size of the application
     *
     * @param { AsyncCallback<number> } callback - The callback is used to return the application memory size.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * 2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 16000050 - Internal error.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice
     * @since 11
     */
    function getAppMemorySize(callback: AsyncCallback<number>): void;
    /**
     * If you apply for permission, you can obtain information about all running processes.
     * If you do not apply, you can only obtain information about the current process.
     *
     * @permission ohos.permission.GET_RUNNING_INFO
     * @returns { Promise<Array<ProcessInformation>> } Returns the array of {@link ProcessInformation}.
     * @throws { BusinessError } 16000050 - Internal error.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    /**
     * Get information about the current process.
     *
     * @returns { Promise<Array<ProcessInformation>> } Returns the array of {@link ProcessInformation}.
     * @throws { BusinessError } 16000050 - Internal error.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice
     * @since 11
     */
    function getRunningProcessInformation(): Promise<Array<ProcessInformation>>;
    /**
     * If you apply for permission, you can obtain information about all running processes.
     * If you do not apply, you can only obtain information about the current process.
     *
     * @permission ohos.permission.GET_RUNNING_INFO
     * @param { AsyncCallback<Array<ProcessInformation>> } callback - The callback is used to return the array of {@link ProcessInformation}.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * 2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 16000050 - Internal error.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    /**
     * Get information about the current process.
     *
     * @param { AsyncCallback<Array<ProcessInformation>> } callback - The callback is used to return the array of {@link ProcessInformation}.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * 2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 16000050 - Internal error.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice
     * @since 11
     */
    function getRunningProcessInformation(callback: AsyncCallback<Array<ProcessInformation>>): void;
    /**
    * Check whether the bundle is running.
    *
    * @permission ohos.permission.GET_RUNNING_INFO
    * @param { string } bundleName - Indicates the bundle name of the bundle.
    * @param { number } [appCloneIndex] - app clone index
    * @returns { Promise<boolean> } Returns the bundle running result. The result is true if running, false otherwise.
    * @throws { BusinessError } 201 - Permission denied.
    * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
    * 2. Incorrect parameter types; 3. Parameter verification failed.
    * @throws { BusinessError } 16000050 - Internal error.
    * @throws { BusinessError } 16000073 - The app clone index is invalid.
    * @syscap SystemCapability.Ability.AbilityRuntime.Core
    * @since 14
    */
    function isAppRunning(bundleName: string, appCloneIndex?: number): Promise<boolean>;
    /**
     * The application state observer.
     *
     * @typedef { _ApplicationStateObserver.default }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 14
     */
    export type ApplicationStateObserver = _ApplicationStateObserver.default;
    /**
     * The class of a process information.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9
     */
    /**
     * The class of a process information.
     *
     * @typedef { _ProcessInformation }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice
     * @since 11
     */
    export type ProcessInformation = _ProcessInformation;
}
export default appManager;
