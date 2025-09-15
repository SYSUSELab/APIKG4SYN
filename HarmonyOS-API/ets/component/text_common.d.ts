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
 * Defines the text data detector type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
/**
 * Defines the text data detector type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
declare enum TextDataDetectorType {
    /**
     * Detector type phone number.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    /**
     * Detector type phone number.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    PHONE_NUMBER = 0,
    /**
     * Detector type URL.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    /**
     * Detector type URL.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    URL = 1,
    /**
     * Detector type email.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    /**
     * Detector type email.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    EMAIL = 2,
    /**
     * Detector type address.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    /**
     * Detector type address.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    ADDRESS = 3,
    /**
     * Detector type datetime.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    DATE_TIME = 4
}
/**
 * Text data detector config.
 *
 * @interface TextDataDetectorConfig
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
/**
 * Text data detector config.
 *
 * @interface TextDataDetectorConfig
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
declare interface TextDataDetectorConfig {
    /**
     * Text data detector types.
     *
     * @type { TextDataDetectorType[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    /**
     * Text data detector types.
     *
     * @type { TextDataDetectorType[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    types: TextDataDetectorType[];
    /**
     * Text data detect result callback.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    /**
     * Text data detect result callback.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    onDetectResultUpdate?: (result: string) => void;
    /**
     * The color of AI entity.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    color?: ResourceColor;
    /**
     * The decoration of AI entity.
     *
     * @type { ?DecorationStyleInterface }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    decoration?: DecorationStyleInterface;
}
/**
 * Defines range of text type component.
 *
 * @interface TextRange
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface TextRange {
    /**
     * Start offset.
     *
     * @type { ?number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    start?: number;
    /**
     * End offset.
     *
     * @type { ?number }
     * @default text length
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    end?: number;
}
/**
 * Defines the inserted text value info.
 *
 * @interface InsertValue
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface InsertValue {
    /**
     * The location info where the value will be inserted.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    insertOffset: number;
    /**
     * The inserted value.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    insertValue: string;
}
/**
 * Defines delete text direction.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare enum TextDeleteDirection {
    /**
     * Delete backward.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    BACKWARD = 0,
    /**
     * Delete forward.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    FORWARD = 1
}
/**
 * Defines menu type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 13
 */
declare enum MenuType {
    /**
     * Selection menu.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    SELECTION_MENU = 0,
    /**
     * Preview menu, only for image.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    PREVIEW_MENU = 1
}
/**
 * Provides an interface for deleting value from text.
 *
 * @interface DeleteValue
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface DeleteValue {
    /**
     * The location info where the value will be deleted.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    deleteOffset: number;
    /**
     * The deleted direction.
     *
     * @type { TextDeleteDirection }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    direction: TextDeleteDirection;
    /**
     * The deleted value.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    deleteValue: string;
}
/**
 * Callback after content changed.
 *
 * @typedef { function } OnDidChangeCallback
 * @param { TextRange } rangeBefore - Range of content that had been replaced.
 * @param { TextRange } rangeAfter - Range of content that newly added.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type OnDidChangeCallback = (rangeBefore: TextRange, rangeAfter: TextRange) => void;
/**
 * Callback when input sometimes has info of previewText.
 *
 * @typedef { function } EditableTextOnChangeCallback
 * @param { string } value - Value of body text, without previewText value.
 * @param { PreviewText } [previewText] - info of previewText, contains previewText value and start index.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
/**
 * Callback when input sometimes has info of previewText.
 *
 * @typedef { function } EditableTextOnChangeCallback
 * @param { string } value - Value of body text, without previewText value.
 * @param { PreviewText } [previewText] - info of previewText, contains previewText value and start index.
 * @param { TextChangeOptions } [options] - contains the selection range before and after the change, as well as the old content.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 15
 */
declare type EditableTextOnChangeCallback = (value: string, previewText?: PreviewText, options?: TextChangeOptions) => void;
/**
 * Define the text selection controller.
 *
 * @interface TextBaseController
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface TextBaseController {
    /**
     * Set selection to select a range of content.
     *
     * @param { number } selectionStart - The start position of the selected text.
     * @param { number } selectionEnd - The end position of the selected text.
     * @param { SelectionOptions } [options] - Indicates the options of selection.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    setSelection(selectionStart: number, selectionEnd: number, options?: SelectionOptions): void;
    /**
     * Close the select menu when menu is on.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    closeSelectionMenu(): void;
    /**
     * Get LayoutManager.
     *
     * @returns { LayoutManager } - Return the LayoutManager.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getLayoutManager(): LayoutManager;
}
/**
 * Define the text extended editing controller.
 *
 * @extends TextBaseController
 * @interface TextEditControllerEx
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface TextEditControllerEx extends TextBaseController {
    /**
     * Judge whether is in editing state
     *
     * @returns { boolean } - true means that the component is in editing state, false means is non in editing status
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    isEditing(): boolean;
    /**
     * Stop editing state.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    stopEditing(): void;
    /**
     * Set caret offset.
     *
     * @param { number } offset - caret offset.
     * @returns { boolean } - Return true if the caret offset was successfully set, false otherwise.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    setCaretOffset(offset: number): boolean;
    /**
     * Get caret offset from controller.
     *
     * @returns { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getCaretOffset(): number;
    /**
     * Get PreviewText.
     *
     * @returns { PreviewText } - Return the PreviewText.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getPreviewText?(): PreviewText;
}
/**
 * The previewText.
 * @interface PreviewText
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface PreviewText {
    /**
     * Start offset of the previewText
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    offset: number;
    /**
     * Value of the previewText.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    value: string;
}
/**
 * Define the StyledString controller.
 *
 * @interface StyledStringController
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface StyledStringController {
    /**
     * Set the StyledString of the component.
     *
     * @param { StyledString } styledString - StyledString.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    setStyledString(styledString: StyledString): void;
    /**
     * Get the StyledString of the component.
     *
     * @returns { MutableStyledString }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getStyledString(): MutableStyledString;
}
/**
 * Define the StyledString changed listener.
 *
 * @interface StyledStringChangedListener
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface StyledStringChangedListener {
    /**
     * Called before text changed.
     *
     * @type { ?Callback<StyledStringChangeValue, boolean> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onWillChange?: Callback<StyledStringChangeValue, boolean>;
    /**
     * Called after text changed.
     *
     * @type { ?OnDidChangeCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onDidChange?: OnDidChangeCallback;
}
/**
 * Define the StyledString changed value.
 *
 * @interface StyledStringChangeValue
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
interface StyledStringChangeValue {
    /**
     * Range of the content to be replaced.
     *
     * @type { TextRange }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    range: TextRange;
    /**
     * StyledString to replace.
     *
     * @type { StyledString }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    replacementString: StyledString;
    /**
     * Preview StyledString
     *
     * @type { ?StyledString }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    previewText?: StyledString;
}
/**
 * Define the LayoutManager for querying layout information.
 *
 * @interface LayoutManager
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface LayoutManager {
    /**
     * Get the line count.
     *
     * @returns { number } The line count value returned to the caller.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getLineCount(): number;
    /**
     * Get the glyph position at coordinate.
     *
     * @param { number } x - the positionX of typography.
     * @param { number } y - the positionY of typography.
     * @returns { PositionWithAffinity } TextBlob object.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getGlyphPositionAtCoordinate(x: number, y: number): PositionWithAffinity;
    /**
     * Get LineMetrics.
     *
     * @param { number } lineNumber - the number of line.
     * @returns { LineMetrics } The line Metrics.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getLineMetrics(lineNumber: number): LineMetrics;
    /**
     * Get the rects for range.
     * @param { TextRange } range - The range to set.
     * @param { RectWidthStyle } widthStyle - Width style to set.
     * @param { RectHeightStyle } heightStyle - Height style to set.
     * @returns { Array<TextBox> } The rects for range.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    getRectsForRange(range: TextRange, widthStyle: RectWidthStyle, heightStyle: RectHeightStyle): Array<TextBox>;
}
/**
 * Position and affinity.
 *
 * @typedef PositionWithAffinity
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
interface PositionWithAffinity {
    /**
     * Position of text.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    position: number;
    /**
     * Affinity of text.
     *
     * @type { Affinity }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    affinity: Affinity;
}
/**
 * Define the Affinity type.
 *
 * @typedef { import('../api/@ohos.graphics.text').default.Affinity } Affinity
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type Affinity = import('../api/@ohos.graphics.text').default.Affinity;
/**
 * Define the LineMetrics type.
 *
 * @typedef { import('../api/@ohos.graphics.text').default.LineMetrics } LineMetrics
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type LineMetrics = import('../api/@ohos.graphics.text').default.LineMetrics;
/**
 * Define the RectWidthStyle type.
 *
 * @typedef { import('../api/@ohos.graphics.text').default.RectWidthStyle } RectWidthStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 14
 */
declare type RectWidthStyle = import('../api/@ohos.graphics.text').default.RectWidthStyle;
/**
 * Define the RectHeightStyle type.
 *
 * @typedef { import('../api/@ohos.graphics.text').default.RectHeightStyle } RectHeightStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 14
 */
declare type RectHeightStyle = import('../api/@ohos.graphics.text').default.RectHeightStyle;
/**
 * Define the TextBox type.
 *
 * @typedef { import('../api/@ohos.graphics.text').default.TextBox } TextBox
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 14
 */
declare type TextBox = import('../api/@ohos.graphics.text').default.TextBox;
/**
 * Defines the cursor style
 *
 * @interface CaretStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the cursor style
 *
 * @interface CaretStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
interface CaretStyle {
    /**
     * Set the cursor width
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Set the cursor width
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    width?: Length;
    /**
     * Set the cursor color
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Set the cursor color
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    color?: ResourceColor;
}
/**
 * Defines the TextMenuItemId.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare class TextMenuItemId {
    /**
     * Init a TextMenuItemId with id.
     *
     * @param { ResourceStr } id - The id of the TextMenuItemId.
     * @returns { TextMenuItemId } - Returns the TextMenuItemId object.
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    static of(id: ResourceStr): TextMenuItemId;
    /**
     * Judge if two TextMenuItemId are equal.
     *
     * @param { TextMenuItemId } id - id TextMenuItemId.
     * @returns { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    equals(id: TextMenuItemId): boolean;
    /**
     * Indicates the TextMenuItemId to copy and delete the currently selected text.
     *
     * @type { TextMenuItemId }
     * @readonly
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    static readonly CUT: TextMenuItemId;
    /**
     * Indicates the TextMenuItemId to copy the currently selected text to the clipboard.
     *
     * @type { TextMenuItemId }
     * @readonly
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    static readonly COPY: TextMenuItemId;
    /**
     * Indicates the TextMenuItemId to copy the current contents of the clipboard into the text view.
     *
     * @type { TextMenuItemId }
     * @readonly
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    static readonly PASTE: TextMenuItemId;
    /**
     * Indicates the TextMenuItemId to select all text in a text view.
     *
     * @type { TextMenuItemId }
     * @readonly
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    static readonly SELECT_ALL: TextMenuItemId;
    /**
     * Indicates the TextMenuItemId for collaboration service menu items.
     *
     * @type { TextMenuItemId }
     * @readonly
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    static readonly COLLABORATION_SERVICE: TextMenuItemId;
    /**
     * Indicates the TextMenuItemId to recognize the text in the picture and input it into the text view.
     *
     * @type { TextMenuItemId }
     * @readonly
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    static readonly CAMERA_INPUT: TextMenuItemId;
    /**
     * Indicates the TextMenuItemId to help with text creation by invoking large models.
     *
     * @type { TextMenuItemId }
     * @readonly
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 13
     */
    static readonly AI_WRITER: TextMenuItemId;
    /**
     * Indicates the TextMenuItemId to translate the selected content.
     *
     * @type { TextMenuItemId }
     * @readonly
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 15
     */
    static readonly TRANSLATE: TextMenuItemId;
}
/**
 * TextMenuItem
 *
 * @interface TextMenuItem
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface TextMenuItem {
    /**
     * Customize what the menu displays.
     *
     * @type { ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    content: ResourceStr;
    /**
     * Customize the icon before the menu displays content.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    icon?: ResourceStr;
    /**
     * Distinguish clicked menu content by Id.
     *
     * @type { TextMenuItemId }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    id: TextMenuItemId;
    /**
     * Customize what the menu item shortcut displays.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    labelInfo?: ResourceStr;
}
/**
 * EditMenuOptions
 *
 * @interface EditMenuOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface EditMenuOptions {
    /**
     * Passes the default menu, invokes before every display to generate a menu for triggering click events.
     *
     * @param { Array<TextMenuItem> } menuItems - current default menu array.
     * @returns { Array<TextMenuItem> } - Return the menu after operations.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onCreateMenu(menuItems: Array<TextMenuItem>): Array<TextMenuItem>;
    /**
     * Invoke upon clicking an item, capable of intercepting the default system menu execution behavior.
     *
     * @param { TextMenuItem } menuItem - current default menu.
     * @param { TextRange } range - current selected range.
     * @returns { boolean } - Return True, the event is consumed, false otherwise.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onMenuItemClick(menuItem: TextMenuItem, range: TextRange): boolean;
}
/**
 * Defines the font decoration result.
 *
 * @interface DecorationStyleResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
interface DecorationStyleResult {
    /**
     * Font decoration type.
     *
     * @type { TextDecorationType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    type: TextDecorationType;
    /**
     * Font decoration color.
     *
     * @type { ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    color: ResourceColor;
    /**
     * The style value of the decoration property object.
     *
     * @type { ?TextDecorationStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    style?: TextDecorationStyle;
}
/**
 * Defines the options of font.
 *
 * @interface FontSettingOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare interface FontSettingOptions {
    /**
      * Define weather VariableFontWeight is supported.
      *
      * @type { ?boolean }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @crossplatform
      * @form
      * @atomicservice
      * @since 12
      */
    enableVariableFontWeight?: boolean;
}
/**
* The TextChangeOptions.
* @interface TextChangeOptions
* @syscap SystemCapability.ArkUI.ArkUI.Full
* @crossplatform
* @atomicservice
* @since 15
*/
declare interface TextChangeOptions {
    /**
     * The selected area before the change.
     *
     * @type { TextRange }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    rangeBefore: TextRange;
    /**
     * The selected area after the change.
     *
     * @type { TextRange }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    rangeAfter: TextRange;
    /**
     * The content before the change.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    oldContent: string;
    /**
     * The info of PreviewText before the change.
     *
     * @type { PreviewText }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    oldPreviewText: PreviewText;
}
/**
 * Define the editableText Component changed value.
 *
 * @interface EditableTextChangeValue
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 15
 */
interface EditableTextChangeValue {
    /**
     * Value of body text, without previewText value.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    content: string;
    /**
     * Info of previewText, contains previewText value and start index.
     *
     * @type { ?PreviewText }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    previewText?: PreviewText;
    /**
     * The TextChangeOptions.
     *
     * @type { TextChangeOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    options?: TextChangeOptions;
}
/**
 * Defines text menu show mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 16
 */
declare enum TextMenuShowMode {
    /**
     * Display the text selection menu in the current window.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    DEFAULT = 0,
    /**
     * Prefer to display the text selection menu in a separate window
     * and continue to display it within the current window if a separate window is not supported
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    PREFER_WINDOW = 1
}
/**
 * Defines text menu options.
 *
 * @interface TextMenuOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 16
 */
declare interface TextMenuOptions {
    /**
     * Text menu show mode.
     *
     * @type { ?TextMenuShowMode }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    showMode?: TextMenuShowMode;
}
/**
 * Defines keyboard appearance.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 15
 */
declare enum KeyboardAppearance {
    /**
     * Default appearance mode, don't adopt immersive styles
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 15
     */
    NONE_IMMERSIVE = 0,
    /**
     * Immersive mode
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 15
     */
    IMMERSIVE = 1,
    /**
     * Light immersive style
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 15
     */
    LIGHT_IMMERSIVE = 2,
    /**
     * Dark immersive style
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 15
     */
    DARK_IMMERSIVE = 3
}
