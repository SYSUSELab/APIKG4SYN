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
 * The process data.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 14
 */
export default class ProcessData {
    /**
     * The bundle name.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 14
     */
    bundleName: string;
    /**
     * The pid.
     *
     * @type { number }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 14
     */
    pid: number;
    /**
     * The uid.
     *
     * @type { number }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 14
     */
    uid: number;
    /**
     * The process state.
     *
     * @type { number }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 14
     */
    state: number;
    /**
     * Whether the process is continuous task.
     *
     * @type { boolean }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 14
     */
    isContinuousTask: boolean;
    /**
     * Whether the process is keep alive.
     *
     * @type { boolean }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 14
     */
    isKeepAlive: boolean;
}
