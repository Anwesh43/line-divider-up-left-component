import React from 'react'
import {
  useStyle, 
  useAnimatedScale, 
  useDimension 
} from './hooks'

const Line = ({i, lineStyle}) => {
    return (
      <div style = {lineStyle(i)} key = {`line_${i}`}>
      </div>
    )
}
const LineDividerUpLeft = ({w, h, scale, onClick}) => {
    const {mainStyle, lineStyle} = useStyle(scale, w, h)
    return (<div>
      <button onClick = {onClick}>Start</button>
      <div style = {mainStyle()}></div>
      {[0, 1, 2, 3, 4, 5].map(i => (<Line lineStyle = {lineStyle} i = {i}/>))}
    </div>)
}

const LineDividerUpLeftContainer = (props) => {
    const {scale, start} = useAnimatedScale(0.02, 20)
    const {w, h} = useDimension()
    return <div>
        <LineDividerUpLeft scale = {scale} w = {w} h = {h} onClick = {start}/>
    </div>
}

export default LineDividerUpLeftContainer 