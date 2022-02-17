import React, { FC } from 'react';

import Constants from 'src/common/constants';

import ChevronRight from 'src/lib/assets/Svg/chevron-right.svg';
import ChevronLeft from 'src/lib/assets/Svg/chevron-left.svg';
import ChevronUp from 'src/lib/assets/Svg/chevron-up.svg';
import ChevronDown from 'src/lib/assets/Svg/chevron-down.svg';
import BabyFemale from 'src/lib/assets/Svg/baby-female.svg';
import EditPen from 'src/lib/assets/Svg/EditPen.svg';
import Chat from 'src/lib/assets/Svg/Chat.svg';

const SvgIcon: FC<{ name: string; height?: number; width?: number, color?: string, onPress?: () => any }> = ({ name, height, width, color, onPress }) => {

    const HEIGHT: number = height ? height : Constants.ResponsiveSize.f10;
    const WIDTH: number = width ? width : Constants.ResponsiveSize.f10;
    const COLOR: string = color ? color : 'white';

    switch (name) {
        case 'chevron-right':
            return <ChevronRight height={HEIGHT} width={WIDTH} fill={COLOR} onPress={onPress} />
        case 'chevron-left':
            return <ChevronLeft height={HEIGHT} width={WIDTH} fill={COLOR} onPress={onPress} />
        case 'chevron-up':
            return <ChevronUp height={HEIGHT} width={WIDTH} fill={COLOR} onPress={onPress} />
        case 'chevron-down':
            return <ChevronDown height={HEIGHT} width={WIDTH} fill={COLOR} onPress={onPress} />
        case 'baby-female':
            return <BabyFemale height={HEIGHT} width={WIDTH} fill={COLOR} onPress={onPress} />
        case 'editing-pen':
            return <EditPen height={HEIGHT} width={WIDTH} fill={COLOR} onPress={onPress} />
        case 'chat':
            return <Chat height={HEIGHT} width={WIDTH} fill={COLOR} onPress={onPress} />
        default:
            return <></>
    }
};

export default SvgIcon;
