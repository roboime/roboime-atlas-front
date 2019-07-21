import React from 'react'

const g = {
  line_width: 10,
  field_length: 6000,
  field_width: 4000,
  boundary_width: 250,
  referee_width: 500,
  goal_width: 700,
  goal_depth: 180,
  goal_wall_width: 20,
  center_circle_radius: 500,
  defense_radius: 500,
  defense_stretch: 350,
  free_kick_from_defense_dist: 700,
  penalty_spot_from_field_line_dist: 450,
  penalty_line_from_spot_dist: 350,
}

const dField = `M ${-g.field_length / 2} ${-g.field_width / 2} h ${g.field_length} v ${g.field_width} h-${g.field_length} v-${g.field_width} m ${g.line_width} ${g.line_width} v ${g.field_width - 2 * g.line_width} h ${g.field_length - 2 * g.line_width} v-${g.field_width - 2 * g.line_width} h-${g.field_length - 2 * g.line_width}
  M ${g.line_width / 2}-${g.field_width / 2} v ${g.field_width} h-${g.line_width} v-${g.field_width} h ${g.line_width}
  M 0-${g.center_circle_radius} a ${g.center_circle_radius} ${g.center_circle_radius} 0 0 1 0 ${2 * g.center_circle_radius} a ${g.center_circle_radius} ${g.center_circle_radius} 0 0 1 0-${2 * g.center_circle_radius} m 0 ${g.line_width} a ${g.center_circle_radius - g.line_width} ${g.center_circle_radius - g.line_width} 0 0 0 0 ${2 * (g.center_circle_radius - g.line_width)} a ${g.center_circle_radius - g.line_width} ${g.center_circle_radius - g.line_width} 0 0 0 0-${2 * (g.center_circle_radius - g.line_width)}
  M 0-${1.5 * g.line_width} a ${1.5 * g.line_width} ${1.5 * g.line_width} 0 0 1 0 ${3 * g.line_width} a ${1.5 * g.line_width} ${1.5 * g.line_width} 0 0 1 0-${3 * g.line_width}
  M-${g.field_length / 2}-${g.defense_radius + g.defense_stretch / 2} a ${g.defense_radius} ${g.defense_radius} 0 0 1 ${g.defense_radius} ${g.defense_radius} v ${g.defense_stretch} a ${g.defense_radius} ${g.defense_radius} 0 0 1-${g.defense_radius} ${g.defense_radius} v-${g.line_width} a ${g.defense_radius - g.line_width} ${g.defense_radius - g.line_width} 0 0 0 ${g.defense_radius - g.line_width}-${g.defense_radius - g.line_width} v-${g.defense_stretch} a ${g.defense_radius - g.line_width} ${g.defense_radius - g.line_width} 0 0 0-${g.defense_radius - g.line_width}-${g.defense_radius - g.line_width}
  M ${g.field_length / 2} ${g.defense_radius + g.defense_stretch / 2} a ${g.defense_radius} ${g.defense_radius} 0 0 1-${g.defense_radius}-${g.defense_radius} v-${g.defense_stretch} a ${g.defense_radius} ${g.defense_radius} 0 0 1 ${g.defense_radius}-${g.defense_radius} v ${g.line_width} a ${g.defense_radius - g.line_width} ${g.defense_radius - g.line_width} 0 0 0-${g.defense_radius - g.line_width} ${g.defense_radius - g.line_width} v ${g.defense_stretch} a ${g.defense_radius - g.line_width} ${g.defense_radius - g.line_width} 0 0 0 ${g.defense_radius - g.line_width} ${g.defense_radius - g.line_width}
  M-${g.field_length / 2 - g.penalty_spot_from_field_line_dist - g.line_width} 0 a ${1 * g.line_width} ${1 * g.line_width} 0 0 1 ${2 * g.line_width} 0 a ${1 * g.line_width} ${1 * g.line_width} 0 0 1-${2 * g.line_width} 0
  M ${g.field_length / 2 - g.penalty_spot_from_field_line_dist - g.line_width} 0 a ${1 * g.line_width} ${1 * g.line_width} 0 0 1-${2 * g.line_width} 0 a ${1 * g.line_width} ${1 * g.line_width} 0 0 1 ${2 * g.line_width} 0
  z`

const dLeftGoal = `M-${g.field_length / 2}-${g.goal_width / 2 + g.goal_wall_width / 2}
  h-${g.goal_depth + g.goal_wall_width}
  v ${g.goal_width + 2 * g.goal_wall_width}
  h ${g.goal_depth + g.goal_wall_width}
  v-${g.goal_wall_width}
  h-${g.goal_depth}
  v-${g.goal_width}
  h ${g.goal_depth}
  z`

const dRightGoal = `M ${g.field_length / 2}-${g.goal_width / 2 + g.goal_wall_width / 2}
  h ${g.goal_depth + g.goal_wall_width}
  v ${g.goal_width + 2 * g.goal_wall_width}
  h-${g.goal_depth + g.goal_wall_width}
  v-${g.goal_wall_width}
  h ${g.goal_depth}
  v-${g.goal_width}
  h-${g.goal_depth}
  z`

class Field extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      field: {
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
    const inner_width = 7500
    const inner_height = 5500

    return -(inner_width / 2)
      + ' ' + - (inner_height / 2)
      + ' ' + inner_width
      + ' ' + inner_height
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

  cmd2txt(c) {
    switch (c) {
      case 0: return "halt"
      // Robots must keep 50 cm from the ball.
      case 1: return "stop"
      // A prepared kickoff or penalty may now be taken.
      case 2: return "start"
      // The ball is dropped and free for either team.
      case 3: return "force start"
      // The yellow team may move into kickoff position.
      case 4: return "prepare kickoff yellow"
      // The blue team may move into kickoff position.
      case 5: return "prepare kickoff blue"
      // The yellow team may move into penalty position.
      case 6: return "prepare penalty yellow"
      // The blue team may move into penalty position.
      case 7: return "prepare penalty blue"
      // The yellow team may take a direct free kick.
      case 8: return "direct free yellow"
      // The blue team may take a direct free kick.
      case 9: return "direct free blue"
      // The yellow team may take an indirect free kick.
      case 10: return "indirect free yellow"
      // The blue team may take an indirect free kick.
      case 11: return "indirect free blue"
      // The yellow team is currently in a timeout.
      case 12: return "timeout yellow"
      // The blue team is currently in a timeout.
      case 13: return "timeout blue"
      // The yellow team just scored a goal.
      // For information only.
      // For rules compliance, teams must treat as STOP.
      case 14: return "goal yellow"
      // The blue team just scored a goal.
      case 15: return "goal blue"
      default: return ""
    }
  }

  stg2txt(s) {
    switch (s) {
      // The first half is about to start.
      // A kickoff is called within this stage.
      // This stage ends with the NORMAL_START.
      case 0: return "pre game"
      // The first half of the normal game, before half time.
      case 1: return "first half"
      // Half time between first and second halves.
      case 2: return "half time"
      // The second half is about to start.
      // A kickoff is called within this stage.
      // This stage ends with the NORMAL_START.
      case 3: return "pre second half"
      // The second half of the normal game, after half time.
      case 4: return "second half"
      // The break before extra time.
      case 5: return "extra time break"
      // The first half of extra time is about to start.
      // A kickoff is called within this stage.
      // This stage ends with the NORMAL_START.
      case 6: return "pre extra first half"
      // The first half of extra time.
      case 7: return "extra first half"
      // Half time between first and second extra halves.
      case 8: return "extra half time"
      // The second half of extra time is about to start.
      // A kickoff is called within this stage.
      // This stage ends with the NORMAL_START.
      case 9: return "pre extra second half"
      // The second half of extra time.
      case 10: return "extra second half"
      // The break before penalty shootout.
      case 11: return "penalty shootout break"
      // The penalty shootout.
      case 12: return "penalty shootout"
      // The game is over.
      case 13: return "post game"
      default: return ""
    }
  }

  render() {
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
          className="field-text">
          {t.text}
        </text>
      )
    })

    return (
      <React.Fragment>
        <div className="info">
          <div className="tip">
            first half: stop
          </div>
        </div>
        <div className="field">
          <svg
            viewBox={this.viewBox()}
            x="50%"
            y="50%"
            width="100%"
            height="100%">
            <path className="field-line" d={dField}></path>
            <path className="left-goal" d={dLeftGoal}></path>
            <path className="right-goal" d={dRightGoal}></path>
            <text
              className="time-left"
              lengthAdjust="spacingAndGlyphs"
              x="2"
              y={-g.field_width / 2 - 25}
            >5:00</text>
            <text
              className="team-name left-name"
              textAnchor="start"
              lengthAdjust="spacingAndGlyphs"
              x={-g.field_length / 2 + 25}
              y={-g.field_width / 2 + 25 + 250}>amarelo</text>
            <text
              className="team-name right-name"
              textAnchor="end"
              lengthAdjust="spacingAndGlyphs"
              x={g.field_length / 2 - 25}
              y={-g.field_width / 2 + 25 + 250}>azul</text>
            <text
              className="team-name left-score"
              textAnchor="end"
              x={-25}
              y={-g.field_width / 2 + 25 + 250}>2</text>
            <text
              className="team-name right-score"
              textAnchor="start"
              x={25}
              y={-g.field_width / 2 + 25 + 250}>1</text>
            <circle
              className="ball active"
              r={21.5}
              cx={0}
              cy={0}>
            </circle>
            {paths}
            {texts}
          </svg>
        </div>
        <style jsx="true">{`
          .info {
            margin: 10px 50px;
            position: absolute;
            pointer-events: none;
            z-index: 1;
          }

          .tip {
            text-rendering: optimizeLegibility;
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.7);
            font-size: 22px;
            color: #030303;
          }

          .field {
            overflow: hidden;
            height: 100%;
            width: 100%;
            position: absolute;
            background-color: #19770f;
          }

          .field-line, .left-goal, right-goal, .field-path, .field-text {
            stroke-width: 5;
            fill-opacity: 1;
          }

          .field-line {
            stroke: white;
            fill: white;
          }

          .left-goal {
            stroke: #3276b1;
            fill: #3276b1;
          }

          .right-goal {
            fill: #ede528;
            stroke: #d5c512;
          }

          .time-left {
            fill: rgba(0, 0, 0, 0.4);
            font-size: 180px;
            text-anchor: middle;
            white-space: pre;
          }

          .team-name {
            fill: rgba(0, 0, 0, 0.4);
            font-size: 300px;
          }

          .field-path {
            stroke: white;
            fill: #3276b1;
          }

          .field-text {
            fill: black;
            stroke-width: 0;
            text-anchor: middle;
            dominant-baseline: central;
            font: bold 7em sans-serif;
          }

          .ball {
            fill: #ff931f;
            stroke: #c57a29;
            stroke-width: 5;
          }
        `}</style>
      </React.Fragment>
    )
  }
}

export default Field