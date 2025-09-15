/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * Define the contents of each selector item.
 *
 * @interface TextPickerRangeContent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Define the contents of each selector item.
 *
 * @interface TextPickerRangeContent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface TextPickerRangeContent {
    /**
     * Specifies the icon content.
     *
     * @type { string | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Specifies the icon content.
     *
     * @type { string | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    icon: string | Resource;
    /**
     * Specifies the text content.
     *
     * @type { ?(string | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Specifies the text content.
     *
     * @type { ?(string | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    text?: string | Resource;
}
/**
 * Define the contents of text cascade picker.
 *
 * @interface TextCascadePickerRangeContent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Define the contents of text cascade picker.
 *
 * @interface TextCascadePickerRangeContent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface TextCascadePickerRangeContent {
    /**
     * Specifies the text content.
     *
     * @type { string | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Specifies the text content.
     *
     * @type { string | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    text: string | Resource;
    /**
     * Defines the text cascade picker children.
     *
     * @type { ?TextCascadePickerRangeContent[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Defines the text cascade picker children.
     *
     * @type { ?TextCascadePickerRangeContent[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    children?: TextCascadePickerRangeContent[];
}
/**
 * Defines the options of TextPicker.
 *
 * @interface TextPickerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the options of TextPicker.
 *
 * @interface TextPickerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the options of TextPicker.
 *
 * @interface TextPickerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface TextPickerOptions {
    /**
     * Specifies the range of the text selector.
     *
     * @type {string[] | Resource}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Specifies the range of the selector.
     * Support the display of pictures, text and pictures plus text, or multi column plain text.
     *
     * @type {string[] | string[][] | Resource | TextPickerRangeContent[] | TextCascadePickerRangeContent[]}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Specifies the range of the selector.
     * Support the display of pictures, text and pictures plus text, or multi column plain text.
     *
     * @type {string[] | string[][] | Resource | TextPickerRangeContent[] | TextCascadePickerRangeContent[]}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    range: string[] | string[][] | Resource | TextPickerRangeContent[] | TextCascadePickerRangeContent[];
    /**
     * Value of the current selection.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Value of the current selection.
     * Only valid when only text is displayed.
     *
     * @type { ?(string | string[]) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Value of the current selection.
     * Only valid when only text is displayed.
     *
     * @type { ?(string | string[]) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    value?: string | string[];
    /**
     * Current selected subscript.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Current selected subscript.
     *
     * @type { ?(number | number[]) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Current selected subscript.
     *
     * @type { ?(number | number[]) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    selected?: number | number[];
}
/**
 * TextPickerInterface
 *
 * @interface TextPickerInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * TextPickerInterface
 *
 * @interface TextPickerInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * TextPickerInterface
 *
 * @interface TextPickerInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
interface TextPickerInterface {
    /**
     * Defines the TextPicker constructor.
     *
     * @param { TextPickerOptions } options
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Defines the TextPicker constructor.
     *
     * @param { TextPickerOptions } options
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Defines the TextPicker constructor.
     *
     * @param { TextPickerOptions } options
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    (options?: TextPickerOptions): TextPickerAttribute;
}
/**
 * Defines the struct of DividerOptions.
 *
 * @interface DividerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface DividerOptions {
    /**
     * The strokeWidth of Divider.
     *
     * @type { ?Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    strokeWidth?: Dimension;
    /**
     * The color of Divider.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    color?: ResourceColor;
    /**
     * The startMargin of Divider.
     *
     * @type { ?Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    startMargin?: Dimension;
    /**
     * The endMargin of Divider.
     *
     * @type { ?Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    endMargin?: Dimension;
}
/**
 * Provide an interface for the text style of the text picker.
 *
 * @extends PickerTextStyle
 * @interface TextPickerTextStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 15
 */
declare interface TextPickerTextStyle extends PickerTextStyle {
    /**
     * Defines the minimum font size of the text.
     *
     * @type { ?(number | string | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    minFontSize?: number | string | Resource;
    /**
     * Defines the maximum font size of the text.
     *
     * @type { ?(number | string | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    maxFontSize?: number | string | Resource;
    /**
     * Defines the overflow mode of the text.
     *
     * @type { ?TextOverflow }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    overflow?: TextOverflow;
}
/**
 * Callback of the listened scroll stop event.
 *
 * @typedef {function} TextPickerScrollStopCallback
 * @param { string | string[] } value - Value of the selected item.
 * @param { number | number[] } index - Index of the selected item.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 14
 */
declare type TextPickerScrollStopCallback = (value: string | string[], index: number | number[]) => void;
/**
 * Style the text selector.
 *
 * @extends CommonMethod<TextPickerAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Style the text selector.
 *
 * @extends CommonMethod<TextPickerAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Style the text selector.
 *
 * @extends CommonMethod<TextPickerAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare class TextPickerAttribute extends CommonMethod<TextPickerAttribute> {
    /**
     * Called when the default height of the selected element is set.
     *
     * @param { number | string } value
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Called when the default height of the selected element is set.
     *
     * @param { number | string } value
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Called when the default height of the selected element is set.
     *
     * @param { number | string } value
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    defaultPickerItemHeight(value: number | string): TextPickerAttribute;
    /**
     * Can scroll loop if true is set, on the contrary it can not.
     *
     * @param { boolean } value
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Can scroll loop if true is set, on the contrary it can not.
     *
     * @param { boolean } value
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    canLoop(value: boolean): TextPickerAttribute;
    /**
     * Sets the text style of disappearing items
     *
     * @param { PickerTextStyle } value - indicates the text style of disappearing items.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the text style of disappearing items
     *
     * @param { PickerTextStyle } value - indicates the text style of disappearing items.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    disappearTextStyle(value: PickerTextStyle): TextPickerAttribute;
    /**
     * Sets the text style of normal items
     *
     * @param { PickerTextStyle } value - indicates the text style of normal items.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the text style of normal items
     *
     * @param { PickerTextStyle } value - indicates the text style of normal items.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    textStyle(value: PickerTextStyle): TextPickerAttribute;
    /**
     * Sets the text style of selected items
     *
     * @param { PickerTextStyle } value - indicates the text style of selected items.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the text style of selected items
     *
     * @param { PickerTextStyle } value - indicates the text style of selected items.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    selectedTextStyle(value: PickerTextStyle): TextPickerAttribute;
    /**
     * Defines whether to disable the text style animation.
     *
     * @param { boolean } disabled
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    disableTextStyleAnimation(disabled: boolean): TextPickerAttribute;
    /**
     * Defines to set the default text style for options.
     *
     * @param { TextPickerTextStyle } style
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    defaultTextStyle(style: TextPickerTextStyle): TextPickerAttribute;
    /**
     * Called when the pop-up value is returned.
     *
     * @param { function } callback
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     * @deprecated since 10
     */
    onAccept(callback: (value: string, index: number) => void): TextPickerAttribute;
    /**
     * Called when the Cancel button in the pop-up window is clicked.
     *
     * @param { function } callback
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     * @deprecated since 10
     */
    onCancel(callback: () => void): TextPickerAttribute;
    /**
     * Called when the OK button in the pop-up window is clicked.
     *
     * @param { function } callback - the callback of onChange.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * This event is triggered when a TextPicker item is selected.
     * Only valid when only text is displayed. When picture or picture plus text is displayed, the value is "".
     *
     * @param { function } callback - the callback of onChange.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * This event is triggered when a TextPicker item is selected.
     * Only valid when only text is displayed. When picture or picture plus text is displayed, the value is "".
     *
     * @param { function } callback - the callback of onChange.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onChange(callback: (value: string | string[], index: number | number[]) => void): TextPickerAttribute;
    /**
     * This event is triggered when a TextPicker item is selected and scrolling has stopped.
     * Only valid when only text is displayed. When picture or picture plus text is displayed, the value is "".
     *
     * @param { TextPickerScrollStopCallback } callback - the callback of onScrollStop.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    onScrollStop(callback: TextPickerScrollStopCallback): TextPickerAttribute;
    /**
     * Set the selected indices.
     * The array size is the total number of columns.
     *
     * @param { number | number[] } value - the selected indices.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Set the selected indices.
     * The array size is the total number of columns.
     *
     * @param { number | number[] } value - the selected indices.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    selectedIndex(value: number | number[]): TextPickerAttribute;
    /**
     * Set the divider of TextPicker
     *
     * @param { DividerOptions | null } value
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    divider(value: DividerOptions | null): TextPickerAttribute;
    /**
     * Called when set the height of gradient
     *
     * @param { Dimension } value - The value the gradient height
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    gradientHeight(value: Dimension): TextPickerAttribute;
}
/**
 * Defines the struct of TextPickerResult.
 *
 * @interface TextPickerResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the struct of TextPickerResult.
 *
 * @interface TextPickerResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the struct of TextPickerResult.
 *
 * @interface TextPickerResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface TextPickerResult {
    /**
     * The currently selected value.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * The currently selected value.
     * Only valid when only text is displayed.When picture or picture plus text is displayed, the value of value is "".
     *
     * @type { string | string[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * The currently selected value.
     * Only valid when only text is displayed.When picture or picture plus text is displayed, the value of value is "".
     *
     * @type { string | string[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    value: string | string[];
    /**
     * The subscript of the current selection.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * The subscript of the current selection.
     *
     * @type { number | number[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * The subscript of the current selection.
     *
     * @type { number | number[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    index: number | number[];
}
/**
 * Defines the TextPickerDialogOptions for Text Picker Dialog.
 *
 * @interface TextPickerDialogOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the TextPickerDialogOptions for Text Picker Dialog.
 *
 * @interface TextPickerDialogOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the TextPickerDialogOptions for Text Picker Dialog.
 *
 * @interface TextPickerDialogOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface TextPickerDialogOptions extends TextPickerOptions {
    /**
     * Called when the default height of the selected element is set.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Called when the default height of the selected element is set.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Called when the default height of the selected element is set.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    defaultPickerItemHeight?: number | string;
    /**
     * Can scroll loop if true is set, on the contrary it can not.
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Can scroll loop if true is set, on the contrary it can not.
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    canLoop?: boolean;
    /**
     * Text style of disappearing items
     *
     * @type { ?PickerTextStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Text style of disappearing items
     *
     * @type { ?PickerTextStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    disappearTextStyle?: PickerTextStyle;
    /**
     * Text style of normal items
     *
     * @type { ?PickerTextStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Text style of normal items
     *
     * @type { ?PickerTextStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    textStyle?: PickerTextStyle;
    /**
     * Style of accept button.
     *
     * @type { ?PickerDialogButtonStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    acceptButtonStyle?: PickerDialogButtonStyle;
    /**
     * Style of cancel button.
     *
     * @type { ?PickerDialogButtonStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    cancelButtonStyle?: PickerDialogButtonStyle;
    /**
     * Text style of selected items
     *
     * @type { ?PickerTextStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Text style of selected items
     *
     * @type { ?PickerTextStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    selectedTextStyle?: PickerTextStyle;
    /**
     * Defines whether to disable the text style animation.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    disableTextStyleAnimation?: boolean;
    /**
     * Defines to set the default text style for options.
     *
     * @type { ?TextPickerTextStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    defaultTextStyle?: TextPickerTextStyle;
    /**
     * Called when the OK button in the dialog is clicked.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Called when the OK button in the dialog is clicked.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Called when the OK button in the dialog is clicked.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onAccept?: (value: TextPickerResult) => void;
    /**
     * Called when the Cancel button in the dialog is clicked.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Called when the Cancel button in the dialog is clicked.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Called when the Cancel button in the dialog is clicked.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onCancel?: () => void;
    /**
     * This event is triggered when a TextPicker text is selected in dialog.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * This event is triggered when a TextPicker text is selected in dialog.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * This event is triggered when a TextPicker text is selected in dialog.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onChange?: (value: TextPickerResult) => void;
    /**
     * This event is triggered when a TextPicker text is selected and scrolling has stopped in dialog.
     *
     * @type { ?Callback<TextPickerResult> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    onScrollStop?: Callback<TextPickerResult>;
    /**
     * Mask Region of dialog. The size cannot exceed the main window.
     *
     * @type { ?Rectangle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Mask Region of dialog. The size cannot exceed the main window.
     *
     * @type { ?Rectangle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    maskRect?: Rectangle;
    /**
     * Defines the dialog alignment of the screen.
     *
     * @type { ?DialogAlignment }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Defines the dialog alignment of the screen.
     *
     * @type { ?DialogAlignment }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    alignment?: DialogAlignment;
    /**
     * Defines the dialog offset.
     *
     * @type { ?Offset }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Defines the dialog offset.
     *
     * @type { ?Offset }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    offset?: Offset;
    /**
     * Defines the textPickerDialog's background color
     *
     * @type { ?ResourceColor }
     * @default Color.Transparent
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Defines the textPickerDialog's background color
     *
     * @type { ?ResourceColor }
     * @default Color.Transparent
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    backgroundColor?: ResourceColor;
    /**
     * Defines the textPickerDialog's background blur Style
     *
     * @type { ?BlurStyle }
     * @default BlurStyle.COMPONENT_ULTRA_THICK
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Defines the textPickerDialog's background blur Style
     *
     * @type { ?BlurStyle }
     * @default BlurStyle.COMPONENT_ULTRA_THICK
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    backgroundBlurStyle?: BlurStyle;
    /**
     * Callback function when the dialog appears.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onDidAppear?: () => void;
    /**
     * Callback function when the dialog disappears.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onDidDisappear?: () => void;
    /**
     * Callback function before the dialog openAnimation starts.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onWillAppear?: () => void;
    /**
     * Callback function before the dialog closeAnimation starts.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onWillDisappear?: () => void;
    /**
     * Defines the dialog's shadow.
     *
     * @type { ?(ShadowOptions | ShadowStyle) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    shadow?: ShadowOptions | ShadowStyle;
    /**
     * Defines whether to respond to the hover mode.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    enableHoverMode?: boolean;
    /**
     * Defines the dialog's display area in hover mode.
     *
     * @type { ?HoverModeAreaType }
     * @default HoverModeAreaType.BOTTOM_SCREEN
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    hoverModeArea?: HoverModeAreaType;
}
/**
 * Defines TextPickerDialog which uses show method to show TextPicker dialog.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines TextPickerDialog which uses show method to show TextPicker dialog.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines TextPickerDialog which uses show method to show TextPicker dialog.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare class TextPickerDialog {
    /**
     * Invoking method display.
     *
     * @param { TextPickerDialogOptions } options
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Invoking method display.
     *
     * @param { TextPickerDialogOptions } options
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Invoking method display.
     *
     * @param { TextPickerDialogOptions } options
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    static show(options?: TextPickerDialogOptions);
}
/**
 * Defines TextPicker Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines TextPicker Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines TextPicker Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const TextPicker: TextPickerInterface;
/**
 * Defines TextPicker Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines TextPicker Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines TextPicker Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const TextPickerInstance: TextPickerAttribute;
