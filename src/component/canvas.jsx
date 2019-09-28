import React, {Component} from 'react'

export default class Canvas extends Component {
  constructor (props) {
    super(props)
    this.canvas = this.ctx = null
    this.animationIds = null
    this.state = {
      mouseover: false,
      ratioId: 4, ratio: [0.4, 0.5, 0.64, 0.82, 1, 1.2, 1.5, 1.8, 2.2, 2.6, 3.2],
      mouse_x: 0, mouse_y: 0,
      width: null, height: null
    }
  }
  updateDimensions () {
    this.setState({width: this.canvas.clientWidth, height: this.canvas.clientHeight})
  }
  componentDidMount () {
    if (!this.canvas) return
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions.bind(this))
    this.initCanvas()
  }
  initCanvas () {
    if (!this.ctx) this.ctx = this.canvas.getContext("2d")
    if (this.animationIds !== null) {
      cancelAnimationFrame(this.animationIds)
    }
    this.renderCanvas(this.ctx)
  }
  renderCanvas (ctx) {
    this.animationIds = requestAnimationFrame(() => {this.renderCanvas(ctx)})
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    var ratio = this.state.ratio[this.state.ratioId]
    if (this.state.mouseover) {
      switch (this.props.id) {
        case 1:
          switch (this.props.dfgMode) {
            case 3:
              drawAdd(ctx, this.state.mouse_x, this.state.mouse_y, ratio)
              break
            case 4:
              drawSub(ctx, this.state.mouse_x, this.state.mouse_y, ratio)
              break
            case 5:
              drawMulti(ctx, this.state.mouse_x, this.state.mouse_y, ratio)
              break
            case 6:
              drawDiv(ctx, this.state.mouse_x, this.state.mouse_y, ratio)
              break
            case 7:
              drawIn(ctx, this.state.mouse_x, this.state.mouse_y, ratio)
              break
            case 8:
              drawOut(ctx, this.state.mouse_x, this.state.mouse_y, ratio)
              break
          }
          break;
        default:
          break;
      }
    }
    function drawAdd(ctx, x, y, ratio) {
      //下部接続線
      ctx.strokeStyle = "rgb(20, 20, 20)"
      ctx.lineWidth = "2px"
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x, y + (35 * ratio))
      ctx.closePath()
      ctx.stroke()
      ctx.fillStyle = "rgb(200 ,100 ,40)"
      ctx.beginPath()
      ctx.arc(x, y + (35 * ratio), 5 * ratio, 0, Math.PI * 2, false)
      ctx.fill()
      ctx.stroke()
      //上部接続線
      ctx.fillStyle = "rgb(40, 100, 200)"
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x + (20 * ratio), y - (35 * ratio))
      ctx.closePath()
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x - (20 * ratio), y - (35 * ratio))
      ctx.closePath()
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(x + (20 * ratio), y - (35 * ratio), 5 * ratio, 0, Math.PI * 2, false)
      ctx.fill()
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(x - (20 * ratio), y - (35 * ratio), 5 * ratio, 0, Math.PI * 2, false)
      ctx.fill()
      ctx.stroke()
      //中央
      ctx.fillStyle = "rgb(220, 220, 220)"
      ctx.beginPath()
      ctx.arc(x, y, 20 * ratio, 0, Math.PI * 2, false)
      ctx.fill()
      ctx.stroke()
      ctx.fillStyle = "rgb(20, 20, 20)"
      ctx.font = 24 * ratio + "px sans-serif"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText("＋", x, y)
    }
    function drawSub(ctx, x, y, ratio) {
      //下部接続線
      ctx.strokeStyle = "rgb(20, 20, 20)"
      ctx.lineWidth = "2px"
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x, y + (35 * ratio))
      ctx.closePath()
      ctx.stroke()
      ctx.fillStyle = "rgb(200 ,100 ,40)"
      ctx.beginPath()
      ctx.arc(x, y + (35 * ratio), 5 * ratio, 0, Math.PI * 2, false)
      ctx.fill()
      ctx.stroke()
      //上部接続線
      ctx.fillStyle = "rgb(40, 100, 200)"
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x + (20 * ratio), y - (35 * ratio))
      ctx.closePath()
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x - (20 * ratio), y - (35 * ratio))
      ctx.closePath()
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(x + (20 * ratio), y - (35 * ratio), 5 * ratio, 0, Math.PI * 2, false)
      ctx.fill()
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(x - (20 * ratio), y - (35 * ratio), 5 * ratio, 0, Math.PI * 2, false)
      ctx.fill()
      ctx.stroke()
      //中央
      ctx.fillStyle = "rgb(220, 220, 220)"
      ctx.beginPath()
      ctx.arc(x, y, 20 * ratio, 0, Math.PI * 2, false)
      ctx.fill()
      ctx.stroke()
      ctx.fillStyle = "rgb(20, 20, 20)"
      ctx.font = 24 * ratio + "px sans-serif"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText("ー", x, y)
    }
    function drawMulti(ctx, x, y, ratio) {
      //下部接続線
      ctx.strokeStyle = "rgb(20, 20, 20)"
      ctx.lineWidth = "2px"
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x, y + (35 * ratio))
      ctx.closePath()
      ctx.stroke()
      ctx.fillStyle = "rgb(200, 100, 40)"
      ctx.beginPath()
      ctx.arc(x, y + (35 * ratio), 5 * ratio, 0, Math.PI * 2, false)
      ctx.fill()
      ctx.stroke()
      //上部接続線
      ctx.fillStyle = "rgb(40, 100, 200)"
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x + (20 * ratio), y - (35 * ratio))
      ctx.closePath()
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x - (20 * ratio), y - (35 * ratio))
      ctx.closePath()
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(x + (20 * ratio), y - (35 * ratio), 5 * ratio, 0, Math.PI * 2, false)
      ctx.fill()
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(x - (20 * ratio), y - (35 * ratio), 5 * ratio, 0, Math.PI * 2, false)
      ctx.fill()
      ctx.stroke()
      //中央
      ctx.fillStyle = "rgb(220, 220, 220)"
      ctx.beginPath()
      ctx.arc(x, y, 20 * ratio, 0, Math.PI * 2, false)
      ctx.fill()
      ctx.stroke()
      ctx.fillStyle = "rgb(20, 20, 20)"
      ctx.font = 24 * ratio + "px sans-serif"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText("×", x, y)
    }
    function drawDiv(ctx, x, y, ratio) {
      //下部接続線
      ctx.strokeStyle = "rgb(20, 20, 20)"
      ctx.lineWidth = "2px"
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x, y + (35 * ratio))
      ctx.closePath()
      ctx.stroke()
      ctx.fillStyle = "rgb(200, 100, 40)"
      ctx.beginPath()
      ctx.arc(x, y + (35 * ratio), 5 * ratio, 0, Math.PI * 2, false)
      ctx.fill()
      ctx.stroke()
      //上部接続線
      ctx.fillStyle = "rgb(40, 100, 200)"
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x + (20 * ratio), y - (35 * ratio))
      ctx.closePath()
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x - (20 * ratio), y - (35 * ratio))
      ctx.closePath()
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(x + (20 * ratio), y - (35 * ratio), 5 * ratio, 0, Math.PI * 2, false)
      ctx.fill()
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(x - (20 * ratio), y - (35 * ratio), 5 * ratio, 0, Math.PI * 2, false)
      ctx.fill()
      ctx.stroke()
      //中央
      ctx.fillStyle = "rgb(220, 220, 220)"
      ctx.beginPath()
      ctx.arc(x, y, 20 * ratio, 0, Math.PI * 2, false)
      ctx.fill()
      ctx.stroke()
      ctx.fillStyle = "rgb(20, 20, 20)"
      ctx.font = 24 * ratio + "px sans-serif"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText("÷", x, y)
    }
    function drawIn (ctx, x, y, ratio) {
      //下部接続線
      ctx.strokeStyle = "rgb(20, 20, 20)"
      ctx.lineWidth = "2px"
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x, y + (35 * ratio))
      ctx.closePath()
      ctx.stroke()
      ctx.fillStyle = "rgb(200, 100, 40)"
      ctx.beginPath()
      ctx.arc(x, y + (35 * ratio), 5 * ratio, 0, Math.PI * 2, false)
      ctx.fill()
      ctx.stroke()
      //中央
      ctx.fillStyle = "rgb(40, 100, 200)"
      ctx.beginPath()
      ctx.arc(x, y, 20 * ratio, 0, Math.PI * 2, false)
      ctx.fill()
      ctx.stroke()
    }
    function drawOut (ctx, x, y, ratio) {
      //上部接続線
      ctx.strokeStyle = "rgb(20, 20, 20)"
      ctx.lineWidth = "2px"
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x, y - (35 * ratio))
      ctx.closePath()
      ctx.stroke()
      ctx.fillStyle = "rgb(40, 100, 200)"
      ctx.beginPath()
      ctx.arc(x, y - (35 * ratio), 5 * ratio, 0, Math.PI * 2, false)
      ctx.fill()
      ctx.stroke()
      //中央
      ctx.fillStyle = "rgb(200, 100, 40)"
      ctx.beginPath()
      ctx.arc(x, y, 20 * ratio, 0, Math.PI * 2, false)
      ctx.fill()
      ctx.stroke()
    }
  }
  doMouseMove (e) {
    var x = e.clientX - this.canvas.offsetLeft
    var y = e.clientY - this.canvas.offsetTop
    this.setState({mouse_x: x, mouse_y: y})
  }
  doWheel (e) {
    var ratioId = this.state.ratioId
    if (e.deltaY > 0) {
      ratioId = ratioId + 1
      if (ratioId > 10) {
        ratioId = 10
      }
    } else {
      ratioId = ratioId - 1
      if (ratioId < 0) {
        ratioId = 0
      }
    }
    this.setState({ratioId: ratioId})
  }
  render () {
    const doMouseOver = () => {
      this.setState({mouseover: true})
    }
    const doMouseOut = () => {
      this.setState({mouseover: false})
    }
    return (
      <canvas
        className="canvas"
        ref={(e) => { this.canvas = e }}
        width={this.state.width}
        height={this.state.height}
        onMouseMove={e => this.doMouseMove(e)}
        onMouseOver={doMouseOver}
        onMouseOut={doMouseOut}
        onWheel={e => this.doWheel(e)}
        >
      </canvas>
    )
  }
}