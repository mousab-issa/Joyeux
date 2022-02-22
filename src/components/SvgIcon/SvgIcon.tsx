import React, { FC } from 'react';

import Constants from 'src/common/constants';

import ChevronRight from 'src/lib/assets/Svg/chevron-right.svg';
import ChevronLeft from 'src/lib/assets/Svg/chevron-left.svg';
import ChevronUp from 'src/lib/assets/Svg/chevron-up.svg';
import ChevronDown from 'src/lib/assets/Svg/chevron-down.svg';
import BabyFemale from 'src/lib/assets/Svg/baby-female.svg';
import BabyMale from 'src/lib/assets/Svg/baby-male.svg';
import EditPen from 'src/lib/assets/Svg/EditPen.svg';
import Chat from 'src/lib/assets/Svg/Chat.svg';
import AddKid from 'src/lib/assets/Svg/add-kid.svg';
import Gift from 'src/lib/assets/Svg/Gift.svg';
import Gold from 'src/lib/assets/Svg/Gold.svg';
import Home from 'src/lib/assets/Svg/home.svg';
import Menu from 'src/lib/assets/Svg/Menu.svg';
import MoneyBag from 'src/lib/assets/Svg/money-bag.svg';
import Wallet from 'src/lib/assets/Svg/wallet.svg';
import Events from 'src/lib/assets/Svg/notes.svg';
import Logo from 'src/lib/assets/Svg/WordMark.svg';
import Notification from 'src/lib/assets/Svg/Notification.svg';
import ArrowRightWhite from 'src/lib/assets/Svg/arrow-right-white.svg';
import Celebration from 'src/lib/assets/Svg/celebration.svg';
import Cake from 'src/lib/assets/Svg/cake.svg';
import Memories from 'src/lib/assets/Svg/memories.svg';
import AutoSave from 'src/lib/assets/Svg/auto-save.svg';

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
        case 'baby-male':
            return <BabyMale height={HEIGHT} width={WIDTH} fill={COLOR} onPress={onPress} />
        case 'editing-pen':
            return <EditPen height={HEIGHT} width={WIDTH} fill={COLOR} onPress={onPress} />
        case 'chat':
            return <Chat height={HEIGHT} width={WIDTH} fill={COLOR} onPress={onPress} />
        case 'add-kid':
            return <AddKid height={HEIGHT} width={WIDTH} fill={COLOR} onPress={onPress} />
        case 'gift':
            return <Gift height={HEIGHT} width={WIDTH} fill={COLOR} onPress={onPress} />
        case 'gold':
            return <Gold height={HEIGHT} width={WIDTH} fill={COLOR} onPress={onPress} />
        case 'gold':
            return <Gold height={HEIGHT} width={WIDTH} fill={COLOR} onPress={onPress} />
        case 'home':
            return <Home height={HEIGHT} width={WIDTH} fill={COLOR} onPress={onPress} />
        case 'menu':
            return <Menu height={HEIGHT} width={WIDTH} fill={COLOR} onPress={onPress} />
        case 'money-bag':
            return <MoneyBag height={HEIGHT} width={WIDTH} fill={COLOR} onPress={onPress} />
        case 'wallet':
            return <Wallet height={HEIGHT} width={WIDTH} fill={COLOR} onPress={onPress} />
        case 'events':
            return <Events height={HEIGHT} width={WIDTH} fill={COLOR} onPress={onPress} />
        case 'logo':
            return <Logo height={HEIGHT} width={WIDTH} fill={COLOR} onPress={onPress} />
        case 'notification':
            return <Notification height={HEIGHT} width={WIDTH} fill={COLOR} onPress={onPress} />
        case 'arrow-right-white':
            return <ArrowRightWhite height={HEIGHT} width={WIDTH} fill={COLOR} onPress={onPress} style={{
                transform: [
                    { scaleX: -1 }
                ]
            }} />
        case 'celebration':
            return <Celebration height={HEIGHT} width={WIDTH} fill={COLOR} onPress={onPress} />
        case 'cake':
            return <Cake height={HEIGHT} width={WIDTH} fill={COLOR} onPress={onPress} />
        case 'memories':
            return <Memories height={HEIGHT} width={WIDTH} fill={COLOR} onPress={onPress} />
        case 'auto-save':
            return <AutoSave height={HEIGHT} width={WIDTH} fill={COLOR} onPress={onPress} />
        default:
            return <></>
    }
};

export default SvgIcon;
