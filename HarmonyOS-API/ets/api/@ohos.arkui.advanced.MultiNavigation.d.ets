/**
 * Copyright (C) 2024 Huawei Device Co., Ltd.
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
 * @kit ArkUI
 */
import base from '@ohos.base';
/**
 * Splitpolicy indicates the policy of pages pushed to the stack.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 14
 */
export declare enum SplitPolicy {
    /**
     * Indicates that the page will be pushed to the stack as home page.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    HOME_PAGE = 0,
    /**
     * Indicates that the page will be pushed to the stack as detail page.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    DETAIL_PAGE = 1,
    /**
     * Indicates that the page will be pushed to the stack as full-screen page.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    FULL_PAGE = 2
}
/**
 * Declaration struct MultiNavigation.
 *
 * @struct { MultiNavigation }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 14
 */
@Component
export declare struct MultiNavigation {
    /**
     * MultiNavigation path stack of the MultiNavigation.
     *
     * @type { MultiNavPathStack }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    @State
    multiStack: MultiNavPathStack;
    /**
     * build function of NavDestination.
     *
     * @type { NavDestinationBuildFunction }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    @BuilderParam
    navDestination: NavDestinationBuildFunction;
    /**
     * callback when the MultiNavigationMode change.
     *
     * @type { ?OnNavigationModeChangeCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    onNavigationModeChange?: OnNavigationModeChangeCallback;
    /**
     * This callback is triggered when the HomePage at the top of the stack.
     *
     * @type { ?OnHomeShowOnTopCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    onHomeShowOnTop?: OnHomeShowOnTopCallback;
}
/**
 * MultiNavPathStack is used for storing pages when shown as split mode.
 *
 * @extends NavPathStack
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 14
 */
export declare class MultiNavPathStack extends NavPathStack {
    /**
     * Creates an instance of MultiNavPathStack.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    constructor();
    /**
     * Pushes the NavDestination into the stack.
     *
     * @param { NavPathInfo } info - Indicates the NavDestination to be pushed.
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @param { SplitPolicy } [policy] - SplitPolicy of the NavDestination which is currently
     *                                   pushed in stack. Default splitPolicy is DETAIL_PAGE.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    pushPath(info: NavPathInfo, animated?: boolean, policy?: SplitPolicy): void;
    /**
     * Pushes the NavDestination into the stack.
     *
     * @param { NavPathInfo } info - Indicates the NavDestination to be pushed.
     * @param { NavigationOptions } [options] - Indicates options of stack operation.
     * @param { SplitPolicy } [policy] - SplitPolicy of the NavDestination which is currently
     *                                   pushed in stack. Default splitPolicy is DETAIL_PAGE.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    pushPath(info: NavPathInfo, options?: NavigationOptions, policy?: SplitPolicy): void;
    /**
     * Pushes the NavDestination of specified name into the stack.
     *
     * @param { string } name - Indicates the name of the NavDestination to be pushed.
     * @param { Object } param - Indicates the detailed parameter of the NavDestination to be pushed.
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @param { SplitPolicy } [policy] - SplitPolicy of the NavDestination which is currently
     *                                   pushed in stack. Default splitPolicy is DETAIL_PAGE.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    pushPathByName(name: string, param: Object, animated?: boolean, policy?: SplitPolicy): void;
    /**
     * Pushes the NavDestination of specified name into the stack.
     *
     * @param { string } name - Indicates the name of the NavDestination to be pushed.
     * @param { Object } param - Indicates the detailed parameter of the NavDestination to be pushed.
     * @param { base.Callback<PopInfo> } [onPop] - The callback when next page returns.
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @param { SplitPolicy } [policy] - SplitPolicy of the NavDestination which is currently
     *                                   pushed in stack. Default splitPolicy is DETAIL_PAGE.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    pushPathByName(name: string, param: Object, onPop?: base.Callback<PopInfo>, animated?: boolean, policy?: SplitPolicy): void;
    /**
     * Replace the current NavDestination with the one specificed by NavPathInfo.
     * The current NavDestination will be destroyed.
     *
     * @param { NavPathInfo } info - Indicates the new NavDestination in top of the stack.
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    replacePath(info: NavPathInfo, animated?: boolean): void;
    /**
     * Replace the current NavDestination with the one specificed by NavPathInfo.
     * The current NavDestination will be destroyed.
     *
     * @param { NavPathInfo } info - Indicates the new NavDestination in top of the stack.
     * @param { NavigationOptions } [options] - Indicates options of stack operation.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    replacePath(info: NavPathInfo, options?: NavigationOptions): void;
    /**
     * Replace the current NavDestination with the one specificed by name.
     * The current NavDestination will be destroyed.
     *
     * @param { string } name - Indicates name of the new NavDestination in top of stack.
     * @param { Object } param - Indicates the detailed parameter of the new NavDestination in top of the stack.
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    replacePathByName(name: string, param: Object, animated?: boolean): void;
    /**
     * Remove the specified NavDestinations by indexes.
     *
     * @param { Array<number> } indexes - Indicates the indexes of the NavDestinations to be removed.
     * @returns { number } Returns the number of removed pages. Invalid indexes will be ignored.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    removeByIndexes(indexes: Array<number>): number;
    /**
     * Remove the specified NavDestination by name.
     *
     * @param { string } name - Indicates the name of the NavDestination to be removed.
     * @returns { number } Returns the number of removed NavDestinations.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    removeByName(name: string): number;
    /**
     * Pop the top NavDestination of the stack.
     *
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @returns { NavPathInfo | undefined } Returns the top NavPathInfo if the stack is not empty,
     *                                      otherwise returns undefined.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    pop(animated?: boolean): NavPathInfo | undefined;
    /**
     * Pop the top NavDestination of the stack. When keepBottomPage sets true, the page at the bottom of the
     * stack will be retained.
     *
     * @param { Object } [result] - Page Customization processing results.
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @returns { NavPathInfo | undefined } Returns the top NavPathInfo if the stack is not empty,
     *                                      otherwise returns undefined.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    pop(result?: Object, animated?: boolean): NavPathInfo | undefined;
    /**
     * Pop to the NavDestination of specified name. Always the first one
     * in the stack from bottom up when several NavDestinations match the same name.
     *
     * @param { string } name - Name of the NavDestination.
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @returns { number } Returns the index of the NavDestination if it exists in the stack, otherwise returns -1.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    popToName(name: string, animated?: boolean): number;
    /**
     * Pop to the NavDestination of specified name. Always the first one
     * in the stack from bottom up when several NavDestinations match the same name.
     *
     * @param { string } name - Name of the NavDestination.
     * @param { Object } result - Page Customization processing results.
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @returns { number } Returns the index of the NavDestination if it exists in the stack, otherwise returns -1.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    popToName(name: string, result: Object, animated?: boolean): number;
    /**
     * Pop to the NavDestination of specified index. Do nothing if index is invalid.
     *
     * @param { number } index - The index of NavDestination page.
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    popToIndex(index: number, animated?: boolean): void;
    /**
     * Pop to the NavDestination of specified index. Do nothing if index is invalid.
     *
     * @param { number } index - The index of NavDestination page.
     * @param { Object } result - Page Customization processing results.
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    popToIndex(index: number, result: Object, animated?: boolean): void;
    /**
     * Move the first NavDestination of specified name to the top of the stack. Always the first one
     * in the stack from bottom up when several NavDestinations match the same name.
     *
     * @param { string } name - Indicates the name of the NavDestination to be moved to the top.
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @returns { number } Returns the index of the NavDestination if it exists in the stack, otherwise returns -1.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    moveToTop(name: string, animated?: boolean): number;
    /**
     * Move the first NavDestination of specified index to the top of the stack.
     *
     * @param { number } index - Indicates the index of the NavDestination to be moved to the top.
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    moveIndexToTop(index: number, animated?: boolean): void;
    /**
     * Clear the stack. When keepBottomPage sets true, the page at the bottom of the
     * stack will be retained.
     *
     * @param { boolean } [animated] - Indicates whether the transition is animated.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    clear(animated?: boolean): void;
    /**
     * Obtains all the NavDestination name in the stack.
     *
     * @returns { Array<string> } Returns all the NavDestination name in the stack.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    getAllPathName(): Array<string>;
    /**
     * Obtains parameter information of the NavDestination page specified by index.
     *
     * @param { number } index - The index of NavDestination page.
     * @returns { unknown | undefined } Returns the detailed parameter of the NavDestination
     *                                  if it exists in the stack, otherwise returns undefined.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    getParamByIndex(index: number): Object | undefined;
    /**
     * Obtains parameter information of all NavDestination pages specified by name.
     *
     * @param { string } name - Indicates the name of the NavDestination.
     * @returns { Array<Object> } Returns the detailed parameter of all the NavDestinations.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    getParamByName(name: string): Array<Object>;
    /**
     * Obtains the index of all NavDestination pages specified by name.
     *
     * @param { string } name - Indicates the name of the NavDestination.
     * @returns { Array<number> } Returns the index of all the NavDestinations.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    getIndexByName(name: string): Array<number>;
    /**
     * Obtains the size of the stack.
     *
     * @returns { number } Returns the size of the stack.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    size(): number;
    /**
     * disable or enable all transition animation in this MultiNavigation.
     *
     * @param { boolean } disable - Indicates whether to disable the transition animation.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    disableAnimation(disable: boolean): void;
    /**
     * Switches the details page of the split-mode page on the top stack to full screen (true)
     * or split (false).
     *
     * @param { boolean } [isFullScreen] - Whether to switch to full screen.
     * @returns { boolean } Returns switch result success(true) or failure(false).
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    switchFullScreenState(isFullScreen?: boolean): boolean;
    /**
     * Sets the dragable range of the home page width.
     *
     * @param { number } minPercent - Minimum Home Width Percentage.
     * @param { number } maxPercent - Maximum Home Width Percentage.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    setHomeWidthRange(minPercent: number, maxPercent: number): void;
    /**
     * Indicates whether to retain the bottom NavDestination of the stack when doing pop or clear.
     *
     * @param { boolean } keepBottom - Indicates whether to retain the bottom NavDestination of the stack.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    keepBottomPage(keepBottom: boolean): void;
    /**
     * Set placeholder NavDestination.
     *
     * @param { NavPathInfo } info - info of placeHolder NavDestination.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    setPlaceholderPage(info: NavPathInfo): void;
}
/**
 * Function that sets the rule route to NavDestination.
 *
 * @typedef { function } NavDestinationBuildFunction
 * @param { string } name - Indicates the name of target NavDestination.
 * @param { object } [param] - Indicates the parameter of route operation.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 14
 */
declare type NavDestinationBuildFunction = (name: string, param?: object) => void;
/**
 * Callback function when NavigationMode changed.
 *
 * @typedef { function } OnNavigationModeChangeCallback
 * @param { NavigationMode } mode - current NavigationMode.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 14
 */
declare type OnNavigationModeChangeCallback = (mode: NavigationMode) => void;
/**
 * Callback function when home NavDestination shown in top.
 *
 * @typedef { function } OnHomeShowOnTopCallback
 * @param { string } name - the name of home NavDestination shown in top.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 14
 */
declare type OnHomeShowOnTopCallback = (name: string) => void;
