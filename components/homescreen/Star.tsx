import React from 'react'
import { Svg, Path } from 'react-native-svg'

type StarProps = {
    size: number
    color?: string
    style?: any
}

const Star: React.FC<StarProps> = ({ size, color = 'rgba(255,255,255,0.2)', style }) => (
    <Svg width={size} height={size} viewBox="0 0 100 100" style={style}>
        <Path
            d="M50,0 C45,20 20,45 0,50 C20,55 45,80 50,100 C55,80 80,55 100,50 C80,45 55,20 50,0 Z"
            fill={color}
        />
    </Svg>
)

export default Star
