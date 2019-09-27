import React from 'react'
import {FrameRequest, MatchesPacket, MatchInfoRequest} from '../../protos/ssl/messages_robocup_ssl_wrapper_pb'
import {ActiveMatchesRequest} from '../../protos/ssl/messages_robocup_ssl_wrapper_pb'
import {RoboIMEAtlasClient} from '../../protos/ssl/messages_robocup_ssl_wrapper_pb_service'

import Dropdown from 'react-bootstrap/Dropdown'
import { SSL_Referee } from '../../protos/ssl/referee_pb';

const client = new RoboIMEAtlasClient("https://localhost:9090")

let geometry:any = { 
  "fieldLength": 9000,
  "fieldWidth": 6000,
  "goalWidth": 1000,
  "goalDepth": 200,
  "boundaryWidth": 250,
  "fieldLinesList": [{ 
    "name": "TopTouchLine",
    "p1": { "x": -4500, "y": 3000 },
    "p2": { "x": 4500, "y": 3000 },
    "thickness":10
  },{ 
    "name": "BottomTouchLine",
    "p1": { "x": -4500, "y": -3000 },
    "p2": { "x": 4500, "y": -3000 },
    "thickness": 10
  },{ 
    "name": "LeftGoalLine",
    "p1": { "x": -4500, "y": -3000 },
    "p2": { "x": -4500, "y": 3000 },
    "thickness": 10
  },{ 
    "name": "RightGoalLine",
    "p1": { "x": 4500, "y": -3000 },
    "p2": { "x": 4500, "y": 3000 },
    "thickness": 10
  },{ 
    "name": "HalfwayLine",
    "p1": { "x": 0, "y": -3000 },
    "p2": { "x": 0, "y": 3000 },
    "thickness": 10
  },{ 
    "name": "CenterLine",
    "p1": { "x": -4500, "y": 0 },
    "p2":{ "x": 4500, "y": 0 },
    "thickness": 10
  },{ 
    "name": "LeftPenaltyStretch",
    "p1": { "x": -3500, "y": -1000 },
    "p2": { "x": -3500, "y": 1000 },
    "thickness": 10
  },{ 
    "name": "RightPenaltyStretch",
    "p1": { "x": 3500, "y": -1000 },
    "p2": { "x": 3500, "y": 1000 },
    "thickness": 10
  },{ 
    "name": "LeftFieldLeftPenaltyStretch",
    "p1": { "x": -4500, "y": -1000 },
    "p2": { "x": -3500, "y": -1000 },
    "thickness": 10
  },{ 
    "name": "LeftFieldRightPenaltyStretch",
    "p1": { "x": -4500, "y": 1000 },
    "p2": { "x": -3500, "y": 1000 },
    "thickness": 10
  },{ 
    "name": "RightFieldRightPenaltyStretch",
    "p1": { "x": 4500, "y": -1000 },
    "p2": { "x": 3500, "y": -1000 },
    "thickness": 10
  },{ 
    "name": "RightFieldLeftPenaltyStretch",
    "p1": { "x": 4500, "y": 1000 },
    "p2": { "x": 3500, "y": 1000 },
    "thickness": 10
  }],
  "fieldArcsList": [{ 
    "name": "CenterCircle",
    "center": { "x": 0, "y": 0 },
    "radius": 500,
    "a1": 0,
    "a2": 6.283185005187988,
    "thickness": 10
  }]
}

interface Robot{
  x: number | undefined
  y: number | undefined
  angle: number | undefined
  text: string | undefined
  color: string
  ts : number
}

interface IFieldState {
  yellowRobots: {[id: number ]: Robot}
  blueRobots: {[id: number ]: Robot}

  balls: {
    x: number | undefined
    y: number | undefined
  }[]

  matches: {
    id: number | undefined
    name: string | undefined
  }[]

  matchID: number | undefined

  // TODO: define referee properly
  ref: SSL_Referee.AsObject
}

class Field extends React.Component<{}, IFieldState> {
  constructor(props: { match: { params: { matchID: string }}}) {
    super(props)

    this.state = {
      yellowRobots: [
      ],
      blueRobots: [
      ],
      balls: [
        {x: 0, y:0 },
      ],
      matches: [],
      matchID: undefined,
      ref: new SSL_Referee().toObject()
    }

    this.updateFrame = this.updateFrame.bind(this)
    this.updateRefbox = this.updateRefbox.bind(this)
    this.updateGeometry = this.updateGeometry.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  componentDidMount() {
    this.updateFrame()
    this.updateRefbox()
    this.updateMatches()
    this.updateGeometry()
  }

  viewBox() {
    const inner_width = geometry.fieldLength
    const inner_height = geometry.fieldWidth

    return -(inner_width / 2)
      + ' ' + - (inner_height / 2)
      + ' ' + inner_width
      + ' ' + inner_height
  }

  cmd2txt(c: number) {
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

  stg2txt(s: any) {
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
      default: return "pre game"
    }
  }

  createRobot(i: any, xTranslation: any, yTranslation: any, angleRotation: any, text: any, className: any) {
    const d = [{ type: 'M', args: [0, -50] }, { type: 'A', args: [90, 90, 0, 1, 1, 0, 50] }, { type: 'L', args: [0, -50] }]
    const p = { x: 65, y: -10 }

    return (
      <React.Fragment>
        <path
          key={"path-" + i}
          transform={`translate(${xTranslation} ${yTranslation}) rotate(${angleRotation} 65 -10)`}
          d={this.pathFromD(d)}
          className={`field-path ${className}`}>
        </path>
        <text
          key={"text-" + i}
          transform={`translate(${xTranslation} ${yTranslation})`}
          x={p.x}
          y={p.y}
          className="field-text">
          {text}
        </text>
      </React.Fragment>
    )
  }

  createBall(x: number, y: number) {
    return(
      <React.Fragment>
        <circle
          className="ball active"
          r={21.5}
          cx={x}
          cy={y}>
        </circle>
      </React.Fragment>
    )
  }

  pathFromD(pd: any) {
    let d = ''

    for (let s of pd) {
      d += s.type

      for (let a of s.args) {
        d += ' ' + a
      }
    }

    return d
  }

  getFrame(matchID: number) {
    var req = new FrameRequest()
    req.setMatchId(matchID)
    var stream
    try {
      stream = client.getFrame(req)
    } catch(e) {
      return
    }

    stream.on("data", (resp) => {
      const frame = resp.getDetection()
      if (frame !== undefined) {
        const now = Date.now()
        const yellow = frame.getRobotsYellowList()
        const blue = frame.getRobotsBlueList()
        const ball = frame.getBallsList()

        var yellowBots: {[id: number]: Robot} = this.state.yellowRobots
        for (let i = 0; i < yellow.length; i++) {
          const bot = yellow[i]
          const id = bot.getRobotId()
          
          if (id === undefined) continue

          const yaw = bot.getOrientation()
          yellowBots[id] = {
            x: bot.getX(),
            y: bot.getY(),
            angle: yaw? (180*(yaw)/ 3.14)+180 : yaw,
            text: String(bot.getRobotId()),
            color: 'yellow',
            ts: now
          }
        }

        var blueBots: {[id: number]: Robot} = this.state.blueRobots
        for (let i = 0; i < blue.length; i++) {
          const bot = blue[i]
          const id = bot.getRobotId()
          
          if (id === undefined) continue

          const yaw = bot.getOrientation()
          blueBots[id] = {
            x: bot.getX(),
            y: bot.getY(),
            angle: yaw? (180*(yaw)/ 3.14)+180 : yaw,
            text: String(bot.getRobotId()),
            color: 'blue',
            ts: now
          }
        }

        const ballDicts = ball.map(function(ball) {
          return {
            x: ball.getX(),
            y: ball.getY()
          }
        })


        var balls = this.state.balls
        var blues = this.state.blueRobots
        var yellows = this.state.yellowRobots
        if (Object.keys(blueBots).length !== 0){
          blues = blueBots
        }
        if (Object.keys(yellowBots).length !== 0) {
          yellows = yellowBots
        }
        if (ballDicts.length !== 0) {
          balls = ballDicts
        }

        this.setState({
          yellowRobots: yellows,
          blueRobots: blues,
          balls: balls,
        })
      }
    })
  }

  async updateFrame() {
    while (true) {
      if (this.state.matchID) {
        try {
          this.getFrame(this.state.matchID)
        } catch(e) {
          return
        }
      }
      await delay(10)
    }
  }

  async updateMatches() {
    while (true) {
      try {
        this.getActiveMatches()
      } catch(e) {
        return
      }
      await delay(1000)
    }
  }

  async updateGeometry() {
    while (true) {
      if (this.state.matchID) {
        try {
          this.getGeometry(this.state.matchID)
        } catch(e) {
          return
        }
      }
      await delay(2000)
    }
  }

  getActiveMatches() {
    const matchesReq = new ActiveMatchesRequest() 
    var matches: Array<{ id: number, name: string }> = []
    client.getActiveMatches(matchesReq, (err,resp) => {
      if (err) {
        console.log("Error: ", err)
      } else {
        let packet = resp as MatchesPacket
        for (let match of packet.getMatchList()) {
          matches.push({
            id: match.getMatchId(),
            name: match.getMatchName(), 
          })
        }

        matches = matches.sort((a, b) => a.id > b.id ? 1 : -1)

        this.setState({
          matches: matches,
        })
      }
    })
  }

  async updateRefbox() {
    while (true) {
      if (this.state.matchID) {
        try {
          this.getRefbox(this.state.matchID)
        } catch(e) {
          return
        }
      }
      await delay(600)
    }
  }

  getRefbox(matchID: number) {
    var req = new MatchInfoRequest()
    req.setMatchId(matchID)
    client.getMatchInfo(req, (err,resp) => {
      if (resp != null) {
        this.setState({
          ref: resp.toObject(),
        })
      }
    })
  }

  getGeometry(matchID: number) {
    var req = new FrameRequest()
    req.setMatchId(matchID)
    client.getGeometry(req, (err,resp) => {
        if (resp != null) {
          geometry = resp.toObject().field
        }
    })
  }

  onClick(event: any) {
    this.setState({
      matchID: event.target.id
    })
  }

  render() {
    const fieldLines = geometry.fieldLinesList.map(function(line: any, i: number) {
      return (
        <line key={i} className="field-line" x1={line.p1.x} y1={line.p1.y} x2={line.p2.x} y2={line.p2.y} />
      )
    })

    const leftGoal = (
      <React.Fragment>
        <line className="left-goal" x1={- geometry.fieldLength / 2} y1={geometry.goalWidth / 2} x2={- geometry.fieldLength / 2 - geometry.goalDepth} y2={geometry.goalWidth / 2} />
        <line className="left-goal" x1={- geometry.fieldLength / 2 - geometry.goalDepth} y1={geometry.goalWidth / 2} x2={- geometry.fieldLength / 2 - geometry.goalDepth} y2={- geometry.goalWidth / 2} />
        <line className="left-goal" x1={- geometry.fieldLength / 2 - geometry.goalDepth} y1={- geometry.goalWidth / 2} x2={- geometry.fieldLength / 2} y2={- geometry.goalWidth / 2} />
      </React.Fragment>
    )

    const rightGoal = (
      <React.Fragment>
        <line className="right-goal" x1={geometry.fieldLength / 2} y1={geometry.goalWidth / 2} x2={geometry.fieldLength / 2 + geometry.goalDepth} y2={geometry.goalWidth / 2} />
        <line className="right-goal" x1={geometry.fieldLength / 2 + geometry.goalDepth} y1={geometry.goalWidth / 2} x2={geometry.fieldLength / 2 + geometry.goalDepth} y2={- geometry.goalWidth / 2} />
        <line className="right-goal" x1={geometry.fieldLength / 2 + geometry.goalDepth} y1={- geometry.goalWidth / 2} x2={geometry.fieldLength / 2} y2={- geometry.goalWidth / 2} />
      </React.Fragment>
    )

    const arcs = geometry.fieldArcsList.map(function(arc: any, i: number) {
      return (
        <circle className="circle" cx={arc.center.x} cy={arc.center.y} r={arc.radius}/>
      )
    })

    const now = Date.now()
    const blueRobots = Object.values(this.state.blueRobots).map(function(r:any,i:any) {
      let className = "team-" + r.color
      // eslint-disable-next-line
      if ((now - r.ts) > 2000) return
      return createRobot(i, r.x, r.y, r.angle, r.text, className)
    })

    const yellowRobots = Object.values(this.state.yellowRobots).map(function(r:any,i:any) {
      let className = "team-" + r.color
      // eslint-disable-next-line
      if ((now - r.ts) > 2000) return
      return createRobot(i, r.x, r.y, r.angle, r.text, className)
    })

    const balls = this.state.balls.map((r:any) => {
      return this.createBall(r.x, r.y)
    })

    var robots = blueRobots.concat(yellowRobots)

    const dropdownItens = this.state.matches.map((match) => {
      return (
        <Dropdown.Item onClick={this.onClick} key={match.id} id={match.id}>{match.id} - {match.name}</Dropdown.Item>
      )
    })

    const yellowName = this.state.ref.yellow.name
    const blueName = this.state.ref.blue.name
    const blueScore = this.state.ref.blue.score
    const yellowScore = this.state.ref.yellow.score
    const time = this.state.ref.stageTimeLeft
    const minutes = time ? Math.floor(time / 60000000): 0
    const seconds = time ? Math.floor(((time / 60000000) - minutes)*60) : 0
    const stage = this.stg2txt(this.state.ref.stage)
    const command = this.cmd2txt(this.state.ref.command ? this.state.ref.command : 0)

    return (
      <React.Fragment>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Select Match
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {dropdownItens}
          </Dropdown.Menu>
        </Dropdown>
        <div className="info">
          <div className="tip">
            {stage}: {command}
          </div>
        </div>
        <div className="field">
          <svg
            viewBox={this.viewBox()}
            x="50%"
            y="50%"
            width="100%"
            height="100%">
            {fieldLines}
            {leftGoal}
            {rightGoal}
            {arcs}
            <text
              className="time-left"
              lengthAdjust="spacingAndGlyphs"
              x="2"
              y={-geometry.fieldWidth / 2 - 25}
            >{minutes}: {seconds}</text>
            <text
              className="team-name left-name"
              textAnchor="start"
              lengthAdjust="spacingAndGlyphs"
              x={-geometry.fieldLength / 2 + 25}
              y={-geometry.fieldWidth / 2 + 25 + 250}>{yellowName}</text>
            <text
              className="team-name right-name"
              textAnchor="end"
              lengthAdjust="spacingAndGlyphs"
              x={geometry.fieldLength / 2 - 25}
              y={-geometry.fieldWidth / 2 + 25 + 250}>{blueName}</text>
            <text
              className="team-name left-score"
              textAnchor="end"
              x={-25}
              y={-geometry.fieldWidth / 2 + 25 + 250}>{yellowScore}</text>
            <text
              className="team-name right-score"
              textAnchor="start"
              x={25}
              y={-geometry.fieldWidth / 2 + 25 + 250}>{blueScore}</text>
            {balls}
            {robots}
          </svg>
        </div>
        <style>{`
          .dropdown {
            position: absolute;
            z-index: 10;
            right: 50px;
            top: 25px;
          }

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
            padding: 50px;
            overflow: hidden;
            height: 100%;
            width: 100%;
            position: absolute;
            background-color: #19770f;
          }

          .circle {
            stroke: white;
            stroke-width: 25;
            fill-opacity: 0.1;
          }

          .field-line, .left-goal, .right-goal, .field-text {
            stroke-width: 25;
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

          .right-name {
            fill: rgba(10, 10, 255, 0.6);
            font-size: 300px;
          }

          .left-name {
            fill: rgba(255, 255, 10, 0.6);
            font-size: 300px;
          }

          .field-path {
            stroke: white;
            stroke-width: 10;
            fill-opacity: 1;
          }

          .team-yellow {
            fill: #ede528;
          }

          .team-blue {
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
            z-index: 10;
          }
        `}</style>
      </React.Fragment>
    )
  }
}


function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function createRobot(i: any, xTranslation: any, yTranslation: any, angleRotation: any, text: any, className: any) {
  const d = [{ type: 'M', args: [0, -50] }, { type: 'A', args: [90, 90, 0, 1, 1, 0, 50] }, { type: 'L', args: [0, -50] }]
  const p = { x: 65, y: -10 }

  return (
    <React.Fragment>
      <path
        key={"path-" + i}
        transform={`translate(${xTranslation} ${yTranslation}) rotate(${angleRotation} 65 -10)`}
        d={pathFromD(d)}
        className={`field-path ${className}`}>
      </path>
      <text
        key={"text-" + i}
        transform={`translate(${xTranslation} ${yTranslation})`}
        x={p.x}
        y={p.y}
        className="field-text">
        {text}
      </text>
    </React.Fragment>
  )
}

function pathFromD(pd: any) {
    let d = ''

    for (let s of pd) {
      d += s.type

      for (let a of s.args) {
        d += ' ' + a
      }
    }

    return d
  }

export default Field