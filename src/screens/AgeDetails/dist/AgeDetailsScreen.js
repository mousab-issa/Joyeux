"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var theme_1 = require("src/common/theme/theme");
var components_1 = require("src/components");
var containers_1 = require("src/containers");
var Item = function (_a) {
    var i = _a.i;
    return (react_1["default"].createElement(react_native_1.Text, { style: {
            color: 'white',
            fontSize: 23,
            fontWeight: 'bold'
        } }, i));
};
var DatePickerSelectContainer = function () {
    var MOCK_DATA = [1, 2, 3, 4, 5, 6, 7];
    var _a = react_1.useState(0), height = _a[0], setHeight = _a[1];
    var _b = react_1.useState(false), showEditingText = _b[0], setShowEditingText = _b[1];
    var _c = react_1.useState(false), topButton = _c[0], SettopButton = _c[1];
    var _d = react_1.useState(false), bottomButton = _d[0], setBottomButton = _d[1];
    var updateHeight = function (e) {
        setHeight(e.nativeEvent.layout.height);
    };
    var onScrollEnd = function (e) {
        var contentOffset = e.nativeEvent.contentOffset;
        var viewSize = e.nativeEvent.layoutMeasurement;
        var pageNum = Math.floor(contentOffset.y / viewSize.height);
        console.log('scrolled to page ', pageNum);
    };
    var onShowEditingForm = function () {
    };
    return (react_1["default"].createElement(react_native_1.View, { style: {
            flex: 1,
            height: 60,
            marginHorizontal: 10,
            backgroundColor: '#02201B',
            borderColor: theme_1.theme.Colors.primary,
            borderWidth: 1,
            borderRadius: 5
        } },
        react_1["default"].createElement(react_native_1.FlatList, { onEndReached: function () {
                console.log('Buttodsm');
            }, onViewableItemsChanged: onScrollEnd, data: MOCK_DATA, renderItem: function (_a) {
                var item = _a.item, index = _a.index, separators = _a.separators;
                return (react_1["default"].createElement(react_native_1.Pressable, { onPress: function () { return console.log('Long'); }, key: index, style: {
                        flex: 1,
                        alignItems: "center",
                        justifyContent: 'center',
                        width: '100%',
                        display: 'flex',
                        height: height
                    } },
                    react_1["default"].createElement(Item, { i: 1 })));
            }, onLayout: updateHeight, showsVerticalScrollIndicator: false, contentContainerStyle: { flexGrow: 1 }, pagingEnabled: true })));
};
var AgeDetailsScreen = function (_a) {
    var navigation = _a.navigation;
    return (react_1["default"].createElement(containers_1.AuthScreenContainer, null,
        react_1["default"].createElement(components_1.BottomCardContainer, { title: '', subTitle: '', fixedHeight: true },
            react_1["default"].createElement(react_native_1.View, { style: styles.bottomSheetContentContainer },
                react_1["default"].createElement(DatePickerSelectContainer, null),
                react_1["default"].createElement(DatePickerSelectContainer, null),
                react_1["default"].createElement(DatePickerSelectContainer, null)),
            react_1["default"].createElement(react_native_1.View, { style: { width: '50%', alignSelf: 'center' } },
                react_1["default"].createElement(components_1.Button, { iconOnly: true, title: '', onClick: function () { return console.log('Hello'); } })))));
};
exports["default"] = AgeDetailsScreen;
var styles = react_native_1.StyleSheet.create({
    bottomSheetContentContainer: {
        flex: 1,
        flexDirection: "row"
    },
    row: {
        flex: 1
    }
});
