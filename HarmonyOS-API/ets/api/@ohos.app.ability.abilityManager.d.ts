/*
 * Copyright (c) 2022-2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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

/**
 * The class of an ability manager.
 *
 * @namespace abilityManager
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 9
 */
declare namespace abilityManager {
    /**
     * Enum for the ability state.
     *
     * @enum { number }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 14
     */
    export enum AbilityState {
        /**
         * Ability is initialized.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @since 14
         */
        INITIAL = 0,
        /**
         * Ability is in the state of getting focus.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @since 14
         */
        FOCUS = 2,
        /**
         * Ability is in the foreground state.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @since 14
         */
        FOREGROUND = 9,
        /**
         * Ability is in the background state.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @since 14
         */
        BACKGROUND = 10,
        /**
         * Ability is in the process of scheduling at the foreground.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @since 14
         */
        FOREGROUNDING = 11,
        /**
         * Ability is in the process of scheduling in the background.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @since 14
         */
        BACKGROUNDING = 12
    }
    /**
     * If you apply for permission, you can obtain information about all abilities. If you do not apply, you can only
     * obtain information about the current ability.
     *
     * @permission ohos.permission.GET_RUNNING_INFO
     * @returns { Promise<Array<AbilityRunningInfo>> } Returns the array of AbilityRunningInfo.
     * @throws { BusinessError } 16000050 - Internal error.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 14
     */
    function getAbilityRunningInfos(): Promise<Array<AbilityRunningInfo>>;
}
export default abilityManager;
