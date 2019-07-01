import React from 'react'

class Field extends React.Component {
  constructor(props) {
    super(props)

    const fieldLength = 12000
    const fieldWidth = 9000
    const centerCircleRadius = 500

    this.state = {
      field: {
        fieldWidth: fieldWidth,
        fieldLength: fieldLength,
        boundaryWidth: 300,
        penAreaWidth: 1000,
        penAreaDepth: 500,
        goalWidth: 600,
        goalDepth: 180,
        centerCircleRadius: centerCircleRadius,
        ballRadius: 21.5,
        lines: [
          {
            p1: { x: -fieldLength / 2, y: -fieldWidth / 2 },
            p2: { x: -fieldLength / 2, y: fieldWidth / 2 }
          },
          {
            p1: { x: -fieldLength / 2, y: fieldWidth / 2 },
            p2: { x: fieldLength / 2, y: fieldWidth / 2 }
          },
          {
            p1: { x: fieldLength / 2, y: fieldWidth / 2 },
            p2: { x: fieldLength / 2, y: -fieldWidth / 2 }
          },
          {
            p1: { x: fieldLength / 2, y: -fieldWidth / 2 },
            p2: { x: -fieldLength / 2, y: -fieldWidth / 2 }
          },
          {
            p1: { x: 0, y: fieldWidth / 2 },
            p2: { x: 0, y: -fieldWidth / 2 }
          }
        ],
        circles: [
          {
            center: { x: 0, y: 0 },
            radius: centerCircleRadius,
            stroke: 'white',
            strokeWidth: 10,
            fill: '',
            fillOpacity: 0
          }
        ],
        paths: [
          {
            d: [
              {
                type: 'M',
                args: [925, -550]
              },
              {
                type: 'A',
                args: [90, 90, 0, 1, 1, 925, -450]
              },
              {
                type: 'L',
                args: [925, -550]
              }
            ],
            stroke: 'black',
            strokeWidth: '10',
            fill: 'yellow',
            fillOpacity: 1
          }
        ],
        texts: [
          {
            text: '1',
            p: { x: 990, y: -510 },
            fill: 'black',
          }
        ]
      }
    }
  }

  viewBox() {
    if (this.rotateField) {
      return (-(this.state.field.fieldWidth / 2 + this.state.field.boundaryWidth))
        + ' ' + (-(this.state.field.fieldLength / 2 + this.state.field.boundaryWidth))
        + ' ' + (this.state.field.fieldWidth + this.state.field.boundaryWidth * 2)
        + ' ' + (this.state.field.fieldLength + this.state.field.boundaryWidth * 2)
    }

    return (-(this.state.field.fieldLength / 2 + this.state.field.boundaryWidth))
      + ' ' + (-(this.state.field.fieldWidth / 2 + this.state.field.boundaryWidth))
      + ' ' + (this.state.field.fieldLength + this.state.field.boundaryWidth * 2)
      + ' ' + (this.state.field.fieldWidth + this.state.field.boundaryWidth * 2)
  }

  pathFromD(pd) {
    let d = ''

    for (let s of pd) {
      d += s.type

      for (let a of s.args) {
        d += ' ' + a
      }
    }

    return d
  }

  textTransform(p) {
    if (this.rotateField) {
      return 'rotate(-90,' + p.x + ',' + p.y + ')'
    }

    return ''
  }

  render() {
    const lines = this.state.field.lines.map((l, i) => {
      return (
        <line
          key={"line-" + i}
          x1={l.p1.x}
          y1={l.p1.y}
          x2={l.p2.x}
          y2={l.p2.y}
          className="field-line">
        </line>
      )
    })

    const circles = this.state.field.circles.map((c, i) => {
      return (
        <circle
          key={"circle-" + i}
          cx={c.center.x}
          cy={c.center.y}
          r={c.radius}
          className="field-circle">
        </circle>
      )
    })

    const paths = this.state.field.paths.map((p, i) => {
      return (
        <path
          key={"path-" + i}
          d={this.pathFromD(p.d)}
          className="field-path">
        </path>
      )
    })

    const texts = this.state.field.texts.map((t, i) => {
      return (
        <text
          key={"text-" + i}
          x={t.p.x}
          y={t.p.y}
          transform={this.textTransform(t.p)}
          className="field-text">
          {t.text}
        </text>
      )
    })

    return (
      <React.Fragment>
        <svg
          ref="canvas"
          viewBox={this.viewBox()}
          className="field-canvas">
          <rect
            x={-(this.state.field.fieldLength / 2 + this.state.field.boundaryWidth)}
            y={-(this.state.field.fieldWidth / 2 + this.state.field.boundaryWidth)}
            width={this.state.field.fieldLength + this.state.field.boundaryWidth * 2}
            height={this.state.field.fieldWidth + this.state.field.boundaryWidth * 2}
            ref="background"
            className="field-background">
          </rect>
          {lines}
          {circles}
          {paths}
          {texts}
        </svg>
        <style jsx="true">{`
          .field-canvas {
            width: 100%;
            height: 100%;
            display: table-row;
          }

          .field-background {
            fill: green;
            fill-opacity: 1;
            stroke: none;
          }

          .field-line, .field-circle, .field-path, .field-text {
            stroke-width: 10;
            stroke: white;
            fill-opacity: 1;
          }

          .field-text {
            stroke-width: 0;
            text-anchor: middle;
            dominant-baseline: central;
            font: bold 7em sans-serif;
          }
        `}</style>
      </React.Fragment>
    )
  }
}

export default Field