/*
 * Copyright (C) 2022-2024 Huawei Device Co., Ltd.
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
 * @kit NetworkKit
 */

import type connection from './@ohos.net.connection';
/**
 * Provides interfaces to manage ethernet.
 * @namespace ethernet
 * @syscap SystemCapability.Communication.NetManager.Ethernet
 * @since 9
 */
declare namespace ethernet {
    /**
     * @typedef { connection.HttpProxy }
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @since 10
     */
    type HttpProxy = connection.HttpProxy;
    /**
     * Get the ethernet mac address list.
     * @permission ohos.permission.GET_ETHERNET_LOCAL_MAC
     * @returns { Promise<Array<MacAddressInfo>> } the promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
     * @throws { BusinessError } 2201005 - Device information does not exist.
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @since 14
     */
    function getMacAddress(): Promise<Array<MacAddressInfo>>;
    /**
     * Defines the mac address info of the Ethernet.
     * @interface MacAddressInfo
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @since 14
     */
    export interface MacAddressInfo {
        /**
         * Ethernet interface name.
         * @type { string }
         * @syscap SystemCapability.Communication.NetManager.Ethernet
         * @since 14
         */
        iface: string;
        /**
         * Ethernet specific mac address.
         * @type { string }
         * @syscap SystemCapability.Communication.NetManager.Ethernet
         * @since 14
         */
        macAddress: string;
    }
}
export default ethernet;
