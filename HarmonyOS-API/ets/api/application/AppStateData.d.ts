/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * The application state data.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 14
 */
export default class AppStateData {
    /**
     * The bundle name.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 14
     */
    bundleName: string;
    /**
     * The uid.
     *
     * @type { number }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 14
     */
    uid: number;
    /**
     * The application state.
     *
     * @type { number }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 14
     */
    state: number;
    /**
     * Indicates whether the application has splitted screens.
     *
     * @type { boolean }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 14
     */
    isSplitScreenMode: boolean;
    /**
     * Indicates whether the application has floating windows.
     *
     * @type { boolean }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 14
     */
    isFloatingWindowMode: boolean;
}
