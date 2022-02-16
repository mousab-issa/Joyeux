import React, { FC } from "react"
import { FlatList, View } from "react-native"


const VirtualizedList: FC = ({ children }) => {
    return (
        <FlatList
            listKey={'container-list'}
            contentContainerStyle={{ flexGrow: 1, }}
            data={[]}
            keyExtractor={() => "key"}
            renderItem={null}
            ListHeaderComponentStyle={{ flexGrow: 1 }}
            ListHeaderComponent={
                <>{children}</>
            }
        />
    )
}

export default VirtualizedList;