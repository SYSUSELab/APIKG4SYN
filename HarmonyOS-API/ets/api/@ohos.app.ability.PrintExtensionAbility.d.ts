/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * @kit BasicServicesKit
 */
import type Want from './@ohos.application.Want';
/**
 * class of print extensionAbility.
 *
 * @syscap SystemCapability.Print.PrintFramework
 * @stagemodelonly
 * @since 14
 */
export default class PrintExtensionAbility {
    /**
     * Called once to initialize the extensionAbility.
     * @param { Want } want - call print page want params.
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 14
     */
    onCreate(want: Want): void;
    /**
     * Called once to start to discover the printers connected with the device.
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 14
     */
    onStartDiscoverPrinter(): void;
    /**
     * Called once to stop discovering the printer.
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 14
     */
    onStopDiscoverPrinter(): void;
    /**
     * Called once to connect to the specific printer.
     * @param { number } printerId - connect the printerId.
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 14
     */
    onConnectPrinter(printerId: number): void;
    /**
     * Called once to disconnect to the specific printer.
     * @param { number } printerId - connect the printerId.
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 14
     */
    onDisconnectPrinter(printerId: number): void;
    /**
     * Called once to finalize the extensionAbility.
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 14
     */
    onDestroy(): void;
}
