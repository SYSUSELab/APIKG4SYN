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
import type { AsyncCallback, Callback } from './@ohos.base';
import type Context from './application/Context';
/**
 * System print
 *
 * @namespace print
 * @syscap SystemCapability.Print.PrintFramework
 * @since 10
 */
declare namespace print {
    /**
     * PrintTask provide event callback.
     * @interface PrintTask
     * @syscap SystemCapability.Print.PrintFramework
     * @since 10
     */
    interface PrintTask {
        /**
         * Register event callback when the current print task is in process.
         * @permission ohos.permission.PRINT
         * @param { 'block' } type - Indicates the print task has been blocked.
         * @param { Callback<void> } callback - The callback function for print task change event
         * @throws { BusinessError } 201 - the application does not have permission to call this function.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 10
         */
        on(type: 'block', callback: Callback<void>): void;
        /**
         * Register event callback when the current print task is in process.
         * @permission ohos.permission.PRINT
         * @param { 'succeed' } type - Indicates the print task succeed.
         * @param { Callback<void> } callback - The callback function for print task change event
         * @throws { BusinessError } 201 - the application does not have permission to call this function.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 10
         */
        on(type: 'succeed', callback: Callback<void>): void;
        /**
         * Register event callback when the current print task is in process.
         * @permission ohos.permission.PRINT
         * @param { 'fail' } type - Indicates the print task has completed with failure.
         * @param { Callback<void> } callback - The callback function for print task change event
         * @throws { BusinessError } 201 - the application does not have permission to call this function.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 10
         */
        on(type: 'fail', callback: Callback<void>): void;
        /**
         * Register event callback when the current print task is in process.
         * @permission ohos.permission.PRINT
         * @param { 'cancel' } type - Indicates the print task has been cancelled.
         * @param { Callback<void> } callback - The callback function for print task change event
         * @throws { BusinessError } 201 - the application does not have permission to call this function.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 10
         */
        on(type: 'cancel', callback: Callback<void>): void;
        /**
         * Unregister event callback when the current print task is in process.
         * @permission ohos.permission.PRINT
         * @param { 'block' } type - Indicates the print task has been blocked.
         * @param { Callback<void> } callback - The callback function for print task change event
         * @throws { BusinessError } 201 - the application does not have permission to call this function.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 10
         */
        off(type: 'block', callback?: Callback<void>): void;
        /**
         * Unregister event callback when the current print task is in process.
         * @permission ohos.permission.PRINT
         * @param { 'succeed' } type - Indicates the print task succeed.
         * @param { Callback<void> } callback - The callback function for print task change event
         * @throws { BusinessError } 201 - the application does not have permission to call this function.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 10
         */
        off(type: 'succeed', callback?: Callback<void>): void;
        /**
         * Unregister event callback when the current print task is in process.
         * @permission ohos.permission.PRINT
         * @param { 'fail' } type - Indicates the print task has completed with failure.
         * @param { Callback<void> } callback - The callback function for print task change event
         * @throws { BusinessError } 201 - the application does not have permission to call this function.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 10
         */
        off(type: 'fail', callback?: Callback<void>): void;
        /**
         * Unregister event callback when the current print task is in process.
         * @permission ohos.permission.PRINT
         * @param { 'cancel' } type - Indicates the print task has been cancelled.
         * @param { Callback<void> } callback - The callback function for print task change event
         * @throws { BusinessError } 201 - the application does not have permission to call this function.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 10
         */
        off(type: 'cancel', callback?: Callback<void>): void;
    }
    /**
     * Third-party application implement this interface to render files to be printed.
     * @interface PrintDocumentAdapter
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11
     */
    interface PrintDocumentAdapter {
        /**
         * Implement this function to update the print file.
         * @permission ohos.permission.PRINT
         * @param { string } jobId - Indicates print job id.
         * @param { PrintAttributes } oldAttrs - Indicates old print attributes.
         * @param { PrintAttributes } newAttrs - Indicates new print attributes.
         * @param { number } fd - Indicates print file fd.
         * @param { function } writeResultCallback - Indicates this function should execute after the file is updated.
         * @throws { BusinessError } 201 - the application does not have permission to call this function.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 11
         */
        onStartLayoutWrite(jobId: string, oldAttrs: PrintAttributes, newAttrs: PrintAttributes, fd: number, writeResultCallback: (jobId: string, writeResult: PrintFileCreationState) => void): void;
        /**
         * Implement this function to listen job status change.
         * @permission ohos.permission.PRINT
         * @param { string } jobId - Indicates print job id.
         * @param { PrintDocumentAdapterState } state - Indicates job changes to this state.
         * @throws { BusinessError } 201 - the application does not have permission to call this function.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 11
         */
        onJobStateChanged(jobId: string, state: PrintDocumentAdapterState): void;
    }
    /**
     * Start new print task for App.
     * @permission ohos.permission.PRINT
     * @param { Array<string> } files - Indicates the filepath list to be printed. Only pdf and picture filetype are supported.
     * @param { AsyncCallback<PrintTask> } callback - The callback function for print task.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 10
     */
    function print(files: Array<string>, callback: AsyncCallback<PrintTask>): void;
    /**
     * Start new print task for App.
     * @permission ohos.permission.PRINT
     * @param { Array<string> } files - Indicates the filepath list to be printed. Only pdf and picture filetype are supported.
     * @returns { Promise<PrintTask> } the promise returned by the function.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 10
     */
    function print(files: Array<string>): Promise<PrintTask>;
    /**
     * Start new print task for App.
     * @permission ohos.permission.PRINT
     * @param { Array<string> } files - Indicates the filepath list to be printed. Only pdf and picture filetype are supported.
     * @param { Context } context - The ability context that initiates the call print request.
     * @param { AsyncCallback<PrintTask> } callback - The callback function for print task.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11
     */
    function print(files: Array<string>, context: Context, callback: AsyncCallback<PrintTask>): void;
    /**
     * Start new print task for App.
     * @permission ohos.permission.PRINT
     * @param { Array<string> } files - Indicates the filepath list to be printed. Only pdf and picture filetype are supported.
     * @param { Context } context - The ability context that initiates the call print request.
     * @returns { Promise<PrintTask> } the promise returned by the function.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11
     */
    function print(files: Array<string>, context: Context): Promise<PrintTask>;
    /**
     * Start new print task for App And the App need update print file.
     * @permission ohos.permission.PRINT
     * @param { string } jobName - Indicates print file Name.
     * @param { PrintDocumentAdapter } printAdapter - Indicates functions implemented by the cpp.
     * @param { PrintAttributes } printAttributes - Indicates print attributes.
     * @param { Context } context - The ability context that initiates the call print request.
     * @returns { Promise<PrintTask> } the promise returned by the function.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11
     */
    function print(jobName: string, printAdapter: PrintDocumentAdapter, printAttributes: PrintAttributes, context: Context): Promise<PrintTask>;
    /**
     * defines print attributes.
     * @typedef PrintAttributes
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11
     */
    interface PrintAttributes {
        /**
        * Copies of document list.
        * @type { ?number }
        * @syscap SystemCapability.Print.PrintFramework
        * @since 11
        */
        copyNumber?: number;
        /**
        * Range size to be printed.
        * @type { ?PrintPageRange }
        * @syscap SystemCapability.Print.PrintFramework
        * @since 11
        */
        pageRange?: PrintPageRange;
        /**
        * Page size.
        * @type { ?(PrintPageSize | PrintPageType) }
        * @syscap SystemCapability.Print.PrintFramework
        * @since 11
        */
        pageSize?: PrintPageSize | PrintPageType;
        /**
        * Print direction.
        * @type { ?PrintDirectionMode }
        * @syscap SystemCapability.Print.PrintFramework
        * @since 11
        */
        directionMode?: PrintDirectionMode;
        /**
        * Color mode.
        * @type { ?PrintColorMode }
        * @syscap SystemCapability.Print.PrintFramework
        * @since 11
        */
        colorMode?: PrintColorMode;
        /**
        * Duplex mode.
        * @type { ?PrintDuplexMode }
        * @syscap SystemCapability.Print.PrintFramework
        * @since 11
        */
        duplexMode?: PrintDuplexMode;
    }
    /**
     * defines print page range.
     * @typedef PrintPageRange
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11
     */
    interface PrintPageRange {
        /**
        * Start page of sequence.
        * @type { ?number }
        * @syscap SystemCapability.Print.PrintFramework
        * @since 11
        */
        startPage?: number;
        /**
        * End page of sequence.
        * @type { ?number }
        * @syscap SystemCapability.Print.PrintFramework
        * @since 11
        */
        endPage?: number;
        /**
        * Discrete page of sequence.
        * @type { ?Array<number> }
        * @syscap SystemCapability.Print.PrintFramework
        * @since 11
        */
        pages?: Array<number>;
    }
    /**
     * defines print page size.
     * @typedef PrintPageSize
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11
     */
    interface PrintPageSize {
        /**
        * Page size id.
        * @type { string }
        * @syscap SystemCapability.Print.PrintFramework
        * @since 11
        */
        id: string;
        /**
        * Page size name.
        * @type { string }
        * @syscap SystemCapability.Print.PrintFramework
        * @since 11
        */
        name: string;
        /**
        * Unit: millimeter width.
        * @type { number }
        * @syscap SystemCapability.Print.PrintFramework
        * @since 11
        */
        width: number;
        /**
        * Unit: millimeter height.
        * @type { number }
        * @syscap SystemCapability.Print.PrintFramework
        * @since 11
        */
        height: number;
    }
    /**
     * Enumeration of Print Direction Mode.
     * @enum { number } PrintDirectionMode
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11
     */
    enum PrintDirectionMode {
        /**
        * Automatically select direction.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 11
        */
        DIRECTION_MODE_AUTO = 0,
        /**
        * Print portrait.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 11
        */
        DIRECTION_MODE_PORTRAIT = 1,
        /**
        * Print landscape.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 11
        */
        DIRECTION_MODE_LANDSCAPE = 2
    }
    /**
     * Enumeration of Print Color Mode.
     * @enum { number } PrintColorMode
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11
     */
    enum PrintColorMode {
        /**
        * Print monochrome.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 11
        */
        COLOR_MODE_MONOCHROME = 0,
        /**
        * Color printing.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 11
        */
        COLOR_MODE_COLOR = 1
    }
    /**
     * Enumeration of Print Duplex Mode.
     * @enum { number } PrintDuplexMode
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11
     */
    enum PrintDuplexMode {
        /**
        * Single side printing.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 11
        */
        DUPLEX_MODE_NONE = 0,
        /**
        * Long-edge flip-up duplex printing.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 11
        */
        DUPLEX_MODE_LONG_EDGE = 1,
        /**
        * Short-edge flip-up duplex printing.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 11
        */
        DUPLEX_MODE_SHORT_EDGE = 2
    }
    /**
     * Enumeration of Print Page Type.
     * @enum { number } PrintPageType
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11
     */
    enum PrintPageType {
        /**
        * A3 page.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 11
        */
        PAGE_ISO_A3 = 0,
        /**
        * A4 page.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 11
        */
        PAGE_ISO_A4 = 1,
        /**
        * A5 page.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 11
        */
        PAGE_ISO_A5 = 2,
        /**
        * B5 page.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 11
        */
        PAGE_JIS_B5 = 3,
        /**
        * C5 page.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 11
        */
        PAGE_ISO_C5 = 4,
        /**
        * DL Envelope.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 11
        */
        PAGE_ISO_DL = 5,
        /**
        * Letter.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 11
        */
        PAGE_LETTER = 6,
        /**
        * Legal.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 11
        */
        PAGE_LEGAL = 7,
        /**
        * Photo 4x6.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 11
        */
        PAGE_PHOTO_4X6 = 8,
        /**
        * Photo 5x7.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 11
        */
        PAGE_PHOTO_5X7 = 9,
        /**
        * Envelope INT DL.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 11
        */
        PAGE_INT_DL_ENVELOPE = 10,
        /**
        * Tabloid B.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 11
        */
        PAGE_B_TABLOID = 11
    }
    /**
     * Enumeration of Print Document Adapter State.
     * @enum { number } PrintDocumentAdapterState
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11
     */
    enum PrintDocumentAdapterState {
        /**
        * Preview failed.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 11
        */
        PREVIEW_DESTROY = 0,
        /**
        * Print state is succeed.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 11
        */
        PRINT_TASK_SUCCEED = 1,
        /**
        * Print state is fail.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 11
        */
        PRINT_TASK_FAIL = 2,
        /**
        * Print state is cancel.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 11
        */
        PRINT_TASK_CANCEL = 3,
        /**
        * Print state is block.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 11
        */
        PRINT_TASK_BLOCK = 4
    }
    /**
     * Enumeration of Print File Creation State.
     * @enum { number } PrintFileCreationState
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11
     */
    enum PrintFileCreationState {
        /**
        * Print file created success.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 11
        */
        PRINT_FILE_CREATED = 0,
        /**
        * Print file created fail.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 11
        */
        PRINT_FILE_CREATION_FAILED = 1,
        /**
        * Print file created success but unrendered.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 11
        */
        PRINT_FILE_CREATED_UNRENDERED = 2
    }
    /**
     * Enumeration of Printer State.
     * @enum { number } PrinterState
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14
     */
    enum PrinterState {
        /**
        * New printers arrival.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        PRINTER_ADDED = 0,
        /**
        * Printer lost.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        PRINTER_REMOVED = 1,
        /**
        * Printer update.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        PRINTER_CAPABILITY_UPDATED = 2,
        /**
        * Printer has been connected.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        PRINTER_CONNECTED = 3,
        /**
        * Printer has been disconnected.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        PRINTER_DISCONNECTED = 4,
        /**
        * Printer is working.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        PRINTER_RUNNING = 5
    }
    /**
     * Enumeration of  Print Job State.
     * @enum { number } PrintJobState
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14
     */
    enum PrintJobState {
        /**
        * Initial state of print job.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        PRINT_JOB_PREPARE = 0,
        /**
        * Deliver print job to the printer.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        PRINT_JOB_QUEUED = 1,
        /**
        * Executing print job.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        PRINT_JOB_RUNNING = 2,
        /**
        * Print job has been blocked.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        PRINT_JOB_BLOCKED = 3,
        /**
        * Print job completed.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        PRINT_JOB_COMPLETED = 4
    }
    /**
     * Enumeration of  Print Job Sub State.
     * @enum { number } PrintJobSubState
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14
     */
    enum PrintJobSubState {
        /**
        * Print job succeed.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        PRINT_JOB_COMPLETED_SUCCESS = 0,
        /**
        * Print job fail.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        PRINT_JOB_COMPLETED_FAILED = 1,
        /**
        * Print job has been cancelled.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        PRINT_JOB_COMPLETED_CANCELLED = 2,
        /**
        * Print job has been corrupted.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        PRINT_JOB_COMPLETED_FILE_CORRUPTED = 3,
        /**
        * Print is offline.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        PRINT_JOB_BLOCK_OFFLINE = 4,
        /**
        * Print is occupied by other process.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        PRINT_JOB_BLOCK_BUSY = 5,
        /**
        * Print job has been cancelled.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        PRINT_JOB_BLOCK_CANCELLED = 6,
        /**
        * Print out of paper.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        PRINT_JOB_BLOCK_OUT_OF_PAPER = 7,
        /**
        * Print out of ink.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        PRINT_JOB_BLOCK_OUT_OF_INK = 8,
        /**
        * Print out of toner.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        PRINT_JOB_BLOCK_OUT_OF_TONER = 9,
        /**
        * Print paper jam.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        PRINT_JOB_BLOCK_JAMMED = 10,
        /**
        * Print cover open.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        PRINT_JOB_BLOCK_DOOR_OPEN = 11,
        /**
        * Print service request.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        PRINT_JOB_BLOCK_SERVICE_REQUEST = 12,
        /**
        * Print low on ink.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        PRINT_JOB_BLOCK_LOW_ON_INK = 13,
        /**
        * Print low on toner.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        PRINT_JOB_BLOCK_LOW_ON_TONER = 14,
        /**
        * Print really low on ink.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        PRINT_JOB_BLOCK_REALLY_LOW_ON_INK = 15,
        /**
        * Print bad certification.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        PRINT_JOB_BLOCK_BAD_CERTIFICATE = 16,
        /**
        * Print an error occurred when printing the account.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        PRINT_JOB_BLOCK_ACCOUNT_ERROR = 18,
        /**
        * Print the printing permission is abnormal.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        PRINT_JOB_BLOCK_PRINT_PERMISSION_ERROR = 19,
        /**
        * Print color printing permission exception.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        PRINT_JOB_BLOCK_PRINT_COLOR_PERMISSION_ERROR = 20,
        /**
        * Print the device is not connected to the network.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        PRINT_JOB_BLOCK_NETWORK_ERROR = 21,
        /**
        * Print unable to connect to the server.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        PRINT_JOB_BLOCK_SERVER_CONNECTION_ERROR = 22,
        /**
        * Print large file exception.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        PRINT_JOB_BLOCK_LARGE_FILE_ERROR = 23,
        /**
        * Print file parsing exception.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        PRINT_JOB_BLOCK_FILE_PARSING_ERROR = 24,
        /**
        * Print the file conversion is too slow.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        PRINT_JOB_BLOCK_SLOW_FILE_CONVERSION = 25,
        /**
        * Print uploading file.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        PRINT_JOB_RUNNING_UPLOADING_FILES = 26,
        /**
        * Print converting files.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        PRINT_JOB_RUNNING_CONVERTING_FILES = 27,
        /**
        * Print unknown issue.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        PRINT_JOB_BLOCK_UNKNOWN = 99
    }
    /**
     * Enumeration of  Print error Code.
     * @enum { number } PrintErrorCode
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14
     */
    enum PrintErrorCode {
        /**
        * No error.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        E_PRINT_NONE = 0,
        /**
        * No permission.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        E_PRINT_NO_PERMISSION = 201,
        /**
        * Invalid parameter.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        E_PRINT_INVALID_PARAMETER = 401,
        /**
        * Generic failure of print.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        E_PRINT_GENERIC_FAILURE = 13100001,
        /**
        * RPC failure.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        E_PRINT_RPC_FAILURE = 13100002,
        /**
        * Failure of print service.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        E_PRINT_SERVER_FAILURE = 13100003,
        /**
        * Invalid print extension.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        E_PRINT_INVALID_EXTENSION = 13100004,
        /**
        * Invalid printer.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        E_PRINT_INVALID_PRINTER = 13100005,
        /**
        * Invalid print job.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        E_PRINT_INVALID_PRINT_JOB = 13100006,
        /**
        * File i/o error.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        E_PRINT_FILE_IO = 13100007
    }
    /**
     * Enumeration of application event.
     * @enum { number } ApplicationEvent
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14
     */
    enum ApplicationEvent {
        /**
        * Application created.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        APPLICATION_CREATED = 0,
        /**
        * Application closed for printing started.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        APPLICATION_CLOSED_FOR_STARTED = 1,
        /**
        * Application closed for printing canceled.
        * @syscap SystemCapability.Print.PrintFramework
        * @since 14
        */
        APPLICATION_CLOSED_FOR_CANCELED = 2
    }
    /**
     * New printers have been found and notify Print SA.
     * @permission ohos.permission.PRINT
     * @param { PrinterInformation } printerInformation - Indicates new arrived printer lists.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14
     */
    function addPrinterToDiscovery(printerInformation: PrinterInformation): Promise<void>;
    /**
     * Update the information of the specific printer.
     * @permission ohos.permission.PRINT
     * @param { PrinterInformation } printerInformation - Indicates to be updated printer lists.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14
     */
    function updatePrinterInDiscovery(printerInformation: PrinterInformation): Promise<void>;
    /**
     * Notify Print SA to remove printer.
     * @permission ohos.permission.PRINT
     * @param { string } printerId - Indicates the lost printer lists.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14
     */
    function removePrinterFromDiscovery(printerId: string): Promise<void>;
    /**
     * Get printerInformation by printer id.
     * @permission ohos.permission.PRINT
     * @param { string } printerId - Indicates id of the printer.
     * @returns { Promise<PrinterInformation> } the promise returned by the function.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14
     */
    function getPrinterInformationById(printerId: string): Promise<PrinterInformation>;
    /**
     * defines printer information.
     * @typedef PrinterInformation
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14
     */
    interface PrinterInformation {
        /**
         * Printer id.
         * @type { string }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 14
         */
        printerId: string;
        /**
         * Printer name.
         * @type { string }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 14
         */
        printerName: string;
        /**
         * Current printer status.
         * @type { PrinterStatus }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 14
         */
        printerStatus: PrinterStatus;
        /**
         * Printer description.
         * @type { ?string }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 14
         */
        description?: string;
        /**
         * Printer capabilities.
         * @type { ?PrinterCapabilities }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 14
         */
        capability?: PrinterCapabilities;
        /**
         * Printer uri.
         * @type { ?string }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 14
         */
        uri?: string;
        /**
         * Printer make.
         * @type { ?string }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 14
         */
        printerMake?: string;
        /**
         * Detail information in json format.
         * @type { ?string }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 14
         */
        options?: string;
    }
    /**
     * defines printer capabilities.
     * @typedef PrinterCapabilities
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14
     */
    interface PrinterCapabilities {
        /**
         * The page size list supported by the printer.
         * @type { Array<PrintPageSize> }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 14
         */
        supportedPageSizes: Array<PrintPageSize>;
        /**
         * Array of supported color mode.
         * @type { Array<PrintColorMode> }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 14
         */
        supportedColorModes: Array<PrintColorMode>;
        /**
         * Array of supported duplex mode.
         * @type { Array<PrintDuplexMode> }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 14
         */
        supportedDuplexModes: Array<PrintDuplexMode>;
        /**
         * Array of supported print media types.
         * @type { ?Array<string> }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 14
         */
        supportedMediaTypes?: Array<string>;
        /**
         * Array of supported print quality.
         * @type { ?Array<PrintQuality> }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 14
         */
        supportedQualities?: Array<PrintQuality>;
        /**
         * Array of supported print orientation.
         * @type { ?Array<PrintOrientationMode> }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 14
         */
        supportedOrientations?: Array<PrintOrientationMode>;
        /**
         * Advanced capability in json format.
         * @type { ?string }
         * @syscap SystemCapability.Print.PrintFramework
         * @since 14
         */
        options?: string;
    }
    /**
     * Enumeration of Print Quality.
     * @enum { number } PrintQuality
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14
     */
    enum PrintQuality {
        /**
         * Draft quality mode.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 14
         */
        QUALITY_DRAFT = 3,
        /**
         * Normal quality mode.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 14
         */
        QUALITY_NORMAL = 4,
        /**
         * High quality mode.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 14
         */
        QUALITY_HIGH = 5
    }
    /**
     * Enumeration of Print OrientationMode.
     * @enum { number } PrintOrientationMode
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14
     */
    enum PrintOrientationMode {
        /**
         * Portrait mode.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 14
         */
        ORIENTATION_MODE_PORTRAIT = 0,
        /**
         * Landscape mode.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 14
         */
        ORIENTATION_MODE_LANDSCAPE = 1,
        /**
         * Reverse landscape mode.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 14
         */
        ORIENTATION_MODE_REVERSE_LANDSCAPE = 2,
        /**
         * Reverse portrait mode.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 14
         */
        ORIENTATION_MODE_REVERSE_PORTRAIT = 3,
        /**
         * Not specified.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 14
         */
        ORIENTATION_MODE_NONE = 4
    }
    /**
     * Enumeration of Printer Status.
     * @enum { number } PrinterStatus
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14
     */
    enum PrinterStatus {
        /**
         * Printer idle.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 14
         */
        PRINTER_IDLE = 0,
        /**
         * Printer busy.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 14
         */
        PRINTER_BUSY = 1,
        /**
         * Printer not available.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 14
         */
        PRINTER_UNAVAILABLE = 2
    }
}
export default print;
