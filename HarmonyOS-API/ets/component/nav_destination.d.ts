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
 * @kit ArkUI
 */
/**
 * Defines the navigation destination common title.
 *
 * @interface NavDestinationCommonTitle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Defines the navigation destination common title.
 *
 * @interface NavDestinationCommonTitle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the navigation destination common title.
 *
 * @interface NavDestinationCommonTitle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface NavDestinationCommonTitle {
    /**
     * Sets the main title.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Sets the main title.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the main title.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Sets the main title.
     *
     * @type { string | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    main: string | Resource;
    /**
     * Sets the sub title.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Sets the sub title.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the sub title.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Sets the sub title.
     *
     * @type { string | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    sub: string | Resource;
}
/**
 * Defines the navigation destination custom title.
 *
 * @interface NavDestinationCustomTitle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Defines the navigation destination custom title.
 *
 * @interface NavDestinationCustomTitle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the navigation destination custom title.
 *
 * @interface NavDestinationCustomTitle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface NavDestinationCustomTitle {
    /**
     * Sets the custom title builder.
     *
     * @type { CustomBuilder }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Sets the custom title builder.
     *
     * @type { CustomBuilder }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the custom title builder.
     *
     * @type { CustomBuilder }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    builder: CustomBuilder;
    /**
     * Sets the custom title height.
     *
     * @type { TitleHeight | Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Sets the custom title height.
     *
     * @type { TitleHeight | Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the custom title height.
     *
     * @type { TitleHeight | Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    height: TitleHeight | Length;
}
/**
 * Types of system Transition.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 14
 */
declare enum NavigationSystemTransitionType {
    /**
     * Default system transition.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    DEFAULT = 0,
    /**
     * None system transition.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    NONE = 1,
    /**
     * Configure only titlebar transition.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    TITLE = 2,
    /**
     * Configure only content transition.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    CONTENT = 3,
    /**
     * Configure fade style system transition.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    FADE = 4,
    /**
     * Configure explode style system transition.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    EXPLODE = 5,
    /**
     * Configure right-side slide style system transition.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    SLIDE_RIGHT = 6,
    /**
     * Configure bottom-side slide style system transition.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    SLIDE_BOTTOM = 7
}
/**
 * NavDestination mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * NavDestination mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare enum NavDestinationMode {
    /**
     * Standard mode is default mode of NavDestination.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Standard mode is default mode of NavDestination.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    STANDARD = 0,
    /**
     * Dialog mode is transparent by default and does not affect the life cycle of other NavDestination.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Dialog mode is transparent by default and does not affect the life cycle of other NavDestination.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    DIALOG = 1
}
/**
 * Reason of navDestination be active or inactive.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 17
 */
declare enum NavDestinationActiveReason {
    /**
     * NavDestination become active or inactive because of page transition.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    TRANSITION = 0,
    /**
     * NavDestination become active or inactive because content cover changes.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    CONTENT_COVER = 1,
    /**
     * NavDestination become active or inactive because sheet changes.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    SHEET = 2,
    /**
     * NavDestination become active or inactive because dialog changes.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    DIALOG = 3,
    /**
     * NavDestination become active or inactive because overlay changes.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    OVERLAY = 4,
    /**
     * NavDestination become active or inactive because app state changes.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    APP_STATE = 5
}
/**
 * The construct function of NavDestination.
 *
 * @interface NavDestinationInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * The construct function of NavDestination.
 *
 * @interface NavDestinationInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * The construct function of NavDestination.
 *
 * @interface NavDestinationInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface NavDestinationInterface {
    /**
     * Constructor.
     *
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Constructor.
     *
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Constructor.
     *
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    (): NavDestinationAttribute;
}
/**
 * Indicates configuration info of destination.
 *
 * @interface RouteMapConfig
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface RouteMapConfig {
    /**
     * Get destination name.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    name: string;
    /**
     * Get destination builder file position
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    pageSourceFile: string;
    /**
     * Indicate the custom data of current destination.
     *
     * @type { Object }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    data: Object;
}
/**
 * Indicates the context of NavDestination.
 *
 * @interface NavDestinationContext
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface NavDestinationContext {
    /**
     * Get path info.
     *
     * @type { NavPathInfo }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    pathInfo: NavPathInfo;
    /**
     * Get stack of the Navigation where the NavDestination is located.
     *
     * @type { NavPathStack }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    pathStack: NavPathStack;
    /**
     * Get the unique id of NavDestination, which is different from common property id of Component.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    navDestinationId?: string;
    /**
     * Get configuration of current Destination in module.json
     *
     * @returns {RouteMapConfig | undefined}
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getConfigInRouteMap(): RouteMapConfig | undefined;
}
/**
 * Indicates the nested scrollable container components.
 *
 * @interface NestedScrollInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 14
 */
declare interface NestedScrollInfo {
    /**
     * The controller of parent scrollable container component.
     *
     * @type { Scroller }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    parent: Scroller;
    /**
     * The controller of child scrollable container component.
     *
     * @type { Scroller }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    child: Scroller;
}
/**
* NavDestination animation protocol.
*
* @interface NavDestinationTransition
* @syscap SystemCapability.ArkUI.ArkUI.Full
* @crossplatform
* @atomicservice
* @since 15
*/
declare interface NavDestinationTransition {
    /**
     * This method is called after the transition ends to notify whether the transition was successful.
     *
     * @type { ?Callback<void> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    onTransitionEnd?: Callback<void>;
    /**
     * Define the limit duration of the transition animation.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    duration?: number;
    /**
     * Define the curve of the transition animation.
     *
     * @type { ?Curve }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    curve?: Curve;
    /**
     * Define the delay of the transition animation.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    delay?: number;
    /**
     * Configure the custom transition event.
     *
     * @type { Callback<void> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    event: Callback<void>;
}
/**
 * The attribute function of NavDestination
 *
 * @extends CommonMethod<NavDestinationAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * The attribute function of NavDestination
 *
 * @extends CommonMethod<NavDestinationAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * The attribute function of NavDestination
 *
 * @extends CommonMethod<NavDestinationAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare class NavDestinationAttribute extends CommonMethod<NavDestinationAttribute> {
    /**
     * Navigation title bar
     *
     * @param { string | CustomBuilder | NavDestinationCommonTitle | NavDestinationCustomTitle } value
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Navigation title bar
     *
     * @param { string | CustomBuilder | NavDestinationCommonTitle | NavDestinationCustomTitle } value
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Navigation title bar
     *
     * @param { string | CustomBuilder | NavDestinationCommonTitle | NavDestinationCustomTitle } value
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * NavDestination title bar
     *
     * @param { string | CustomBuilder | NavDestinationCommonTitle | NavDestinationCustomTitle } value
     * @param { NavigationTitleOptions } [options] - Indicates the options of titlebar.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    /**
     * NavDestination title bar
     *
     * @param { string | CustomBuilder | NavDestinationCommonTitle | NavDestinationCustomTitle | Resource } value
     * @param { NavigationTitleOptions } [options] - Indicates the options of titlebar.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    title(value: string | CustomBuilder | NavDestinationCommonTitle | NavDestinationCustomTitle | Resource, options?: NavigationTitleOptions): NavDestinationAttribute;
    /**
     * Hide navigation title bar
     *
     * @param { boolean } value
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Hide navigation title bar
     *
     * @param { boolean } value
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Hide navigation title bar
     *
     * @param { boolean } value
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    hideTitleBar(value: boolean): NavDestinationAttribute;
    /**
     * Hide navigation title bar
     *
     * @param { boolean } hide
     * @param { boolean } animated
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    hideTitleBar(hide: boolean, animated: boolean): NavDestinationAttribute;
    /**
     * Hide navDestination back button
     *
     * @param { Optional<boolean> } hide
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    hideBackButton(hide: Optional<boolean>): NavDestinationAttribute;
    /**
     * Invoked when the navDestination page is displayed.
     *
     * @param { function } callback - Indicates callback when the navDestination page is displayed.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Invoked when the navDestination page is displayed.
     *
     * @param { function } callback - Indicates callback when the navDestination page is displayed.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onShown(callback: () => void): NavDestinationAttribute;
    /**
     * Invoked when the navDestination is hidden.
     *
     * @param { function } callback - Indicates callback when the navDestination is hidden.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Invoked when the navDestination is hidden.
     *
     * @param { function } callback - Indicates callback when the navDestination is hidden.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onHidden(callback: () => void): NavDestinationAttribute;
    /**
     * Invoked when the backButton is pressed.
     *
     * @param { function } callback - Indicates callback when the backButton is pressed.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Invoked when the backButton is pressed.
     *
     * @param { function } callback - Indicates callback when the backButton is pressed.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onBackPressed(callback: () => boolean): NavDestinationAttribute;
    /**
     * Invoked when pop to the navDestination with result.
     *
     * @param {Optional<Callback<ESObject>>} callback - Indicates callback when pop to the navDestination with result.
     * @returns {NavDestinationAttribute}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    onResult(callback: Optional<Callback<ESObject>>): NavDestinationAttribute;
    /**
     * Sets the different mode of NavDestination.
     *
     * @param { NavDestinationMode } value - NavDestinationMode
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Sets the different mode of NavDestination.
     *
     * @param { NavDestinationMode } value - NavDestinationMode
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    mode(value: NavDestinationMode): NavDestinationAttribute;
    /**
     * Set back button icon.
     *
     * @param { ResourceStr | PixelMap } value - Indicates icon of back button.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Set back button icon.
     *
     * @param { ResourceStr | PixelMap | SymbolGlyphModifier } value - Indicates icon of back button.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    backButtonIcon(value: ResourceStr | PixelMap | SymbolGlyphModifier): NavDestinationAttribute;
    /**
     * NavDestination title bar's menus
     *
     * @param { Array<NavigationMenuItem> | CustomBuilder } value
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    menus(value: Array<NavigationMenuItem> | CustomBuilder): NavDestinationAttribute;
    /**
      * Configure toolbar with default style parameter or custom parameter.
      *
      * @param { Array<ToolbarItem> | CustomBuilder } toolbarParam - Toolbar configuration parameters.
      * @param { NavigationToolbarOptions } [options] - Indicates the options of toolbar.
      * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @crossplatform
      * @atomicservice
      * @since 13
      */
    toolbarConfiguration(toolbarParam: Array<ToolbarItem> | CustomBuilder, options?: NavigationToolbarOptions): NavDestinationAttribute;
    /**
     * Hide tool bar
     *
     * @param { boolean } hide
     * @param { boolean } [animated]
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    hideToolBar(hide: boolean, animated?: boolean): NavDestinationAttribute;
    /**
     * Invoked before sub-components of NavDestination are created.
     *
     * @param { import('../api/@ohos.base').Callback<NavDestinationContext> } callback
     * - Indicates callback that invoked before sub-components of NavDestination are created.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onReady(callback: import('../api/@ohos.base').Callback<NavDestinationContext>): NavDestinationAttribute;
    /**
     * Invoked before the navDestination is appeared.
     *
     * @param { Callback<void> } callback - Indicates callback before the navDestination is appeared.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onWillAppear(callback: Callback<void>): NavDestinationAttribute;
    /**
     * Invoked before the navDestination is disappeared.
     *
     * @param { Callback<void> } callback - Indicates callback before the navDestination is disappeared.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onWillDisappear(callback: Callback<void>): NavDestinationAttribute;
    /**
     * Invoked before the navDestination is displayed.
     *
     * @param { Callback<void> } callback - Indicates callback before the navDestination is displayed.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onWillShow(callback: Callback<void>): NavDestinationAttribute;
    /**
     * Invoked before the navDestination is hidden.
     *
     * @param { Callback<void> } callback - Indicates callback before the navDestination is hidden.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onWillHide(callback: Callback<void>): NavDestinationAttribute;
    /**
     * Set navDestination content expand types and edges.
     *
     * @param { Array<LayoutSafeAreaType> } [types] - Indicates the types of the safe area.
     * @param { Array<LayoutSafeAreaEdge> } [edges] - Indicates the edges of the safe area.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    ignoreLayoutSafeArea(types?: Array<LayoutSafeAreaType>, edges?: Array<LayoutSafeAreaEdge>): NavDestinationAttribute;
    /**
     * Set the style of system bar
     *
     * @param { Optional<SystemBarStyle> } style - The properties of system bar
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    systemBarStyle(style: Optional<SystemBarStyle>): NavDestinationAttribute;
    /**
     * Configuration of system transition
     *
     * @param { NavigationSystemTransitionType } type - Types of system Transition
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    systemTransition(type: NavigationSystemTransitionType): NavDestinationAttribute;
    /**
     * Set the NavDestination can be restored after the application is terminated.
     * To enable this attribute, recoverable and id of Navigation must be set.
     *
     * @param { boolean } recoverable - set navdestination can be recovered.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 14
     */
    recoverable(recoverable: Optional<boolean>): NavDestinationAttribute;
    /**
     * Bind NavDestination to scrollable container components to automatically hide titlebar and toolbar.
     *
     * @param { Array<Scroller> } scrollers - The controllers of the scrollable container components.
     * @returns { NavDestinationAttribute } Returns the instance of the NavDestinationAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    bindToScrollable(scrollers: Array<Scroller>): NavDestinationAttribute;
    /**
     * Bind NavDestination to nested scrollable container components to automatically hide titlebar and toolbar.
     *
     * @param { Array<NestedScrollInfo> } scrollInfos - The controllers of the nested scrollable container components.
     * @returns { NavDestinationAttribute } Returns the instance of the NavDestinationAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    bindToNestedScrollable(scrollInfos: Array<NestedScrollInfo>): NavDestinationAttribute;
    /**
     * Set NavDestination custom animation.
     *
     * @param { NavDestinationTransitionDelegate } delegate - The delegate of NavDestination custom animation.
     * @returns { NavDestinationAttribute } Returns the instance of the NavDestinationAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    customTransition(delegate: NavDestinationTransitionDelegate): NavDestinationAttribute;
    /**
     * Invoked when destination is active.
     *
     * @param { Optional<Callback<NavDestinationActiveReason>> } callback - Indicates callback when destination is active.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    onActive(callback: Optional<Callback<NavDestinationActiveReason>>): NavDestinationAttribute;
    /**
     * Invoked when destination is inactive.
     *
     * @param { Optional<Callback<NavDestinationActiveReason>> } callback - Indicates callback when destination is inactive.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    onInactive(callback: Optional<Callback<NavDestinationActiveReason>>): NavDestinationAttribute;
}
/**
 * Defines NavDestination Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Defines NavDestination Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines NavDestination Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const NavDestination: NavDestinationInterface;
/**
 * Defines NavDestination Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Defines NavDestination Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines NavDestination Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const NavDestinationInstance: NavDestinationAttribute;
/**
 * Delegate function for NavDestination custom animation.
 *
 * @typedef { function } NavDestinationTransitionDelegate
 * @param { NavigationOperation } operation - the operation type of current Navigation animation.
 * @param { boolean } isEnter - whether current NavDestination will do enter-type transition.
 * @returns { Array<NavDestinationTransition> | undefined } user-set custom navDestination transitions.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 15
 */
declare type NavDestinationTransitionDelegate = (operation: NavigationOperation, isEnter: boolean) => Array<NavDestinationTransition> | undefined;
