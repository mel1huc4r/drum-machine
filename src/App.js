import "./App.css";
import React, { useState, useEffect } from "react";

const drumItems = [
  {
    buttonId: "Heater 1",
    buttonClass: "drum-pad",
    buttonText: "Q",
    audioId: "Q",
    audioSound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    audioClass: "clip",
  },

  {
    buttonId: "Heater 2",
    buttonClass: "drum-pad",
    buttonText: "W",
    audioId: "W",
    audioSound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    audioClass: "clip",
  },

  {
    buttonId: "Heater 3",
    buttonClass: "drum-pad",
    buttonText: "E",
    audioId: "E",
    audioSound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    audioClass: "clip",
  },

  {
    buttonId: "Heater 4",
    buttonClass: "drum-pad",
    buttonText: "A",
    audioId: "A",
    audioSound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    audioClass: "clip",
  },

  {
    buttonId: "Clap",
    buttonClass: "drum-pad",
    buttonText: "S",
    audioId: "S",
    audioSound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    audioClass: "clip",
  },

  {
    buttonId: "Open HH",
    buttonClass: "drum-pad",
    buttonText: "D",
    audioId: "D",
    audioSound: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    audioClass: "clip",
  },

  {
    buttonId: "Kick n' Hat",
    buttonClass: "drum-pad",
    buttonText: "Z",
    audioId: "Z",
    audioSound: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    audioClass: "clip",
  },

  {
    buttonId: "Kick",
    buttonClass: "drum-pad",
    buttonText: "X",
    audioId: "X",
    audioSound: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    audioClass: "clip",
  },

  {
    buttonId: "Closed HH",
    buttonClass: "drum-pad",
    buttonText: "C",
    audioId: "C",
    audioSound: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    audioClass: "clip",
  },
];

const drumItems2 = [
  {
    buttonId: "Chord 1",
    buttonClass: "drum-pad",
    buttonText: "Q",
    audioId: "Q",
    audioSound: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    audioClass: "clip",
  },

  {
    buttonId: "Chord 2",
    buttonClass: "drum-pad",
    buttonText: "W",
    audioId: "W",
    audioSound: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    audioClass: "clip",
  },

  {
    buttonId: "Chord 3",
    buttonClass: "drum-pad",
    buttonText: "E",
    audioId: "E",
    audioSound: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    audioClass: "clip",
  },

  {
    buttonId: "Shaker",
    buttonClass: "drum-pad",
    buttonText: "A",
    audioId: "A",
    audioSound:
      "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    audioClass: "clip",
  },

  {
    buttonId: "Open HH",
    buttonClass: "drum-pad",
    buttonText: "S",
    audioId: "S",
    audioSound: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    audioClass: "clip",
  },

  {
    buttonId: "Closed HH",
    buttonClass: "drum-pad",
    buttonText: "D",
    audioId: "D",
    audioSound: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    audioClass: "clip",
  },

  {
    buttonId: "Punchy Kick",
    buttonClass: "drum-pad",
    buttonText: "Z",
    audioId: "Z",
    audioSound: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    audioClass: "clip",
  },

  {
    buttonId: "Side Stick",
    buttonClass: "drum-pad",
    buttonText: "X",
    audioId: "X",
    audioSound: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    audioClass: "clip",
  },

  {
    buttonId: "Snare",
    buttonClass: "drum-pad",
    buttonText: "C",
    audioId: "C",
    audioSound: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    audioClass: "clip",
  },
];

function App() {
  const [vol, setVol] = useState(50);
  const [open, setOpen] = useState(true);
  const [gec, setGec] = useState(true);
  const [text, setText] = useState("");

  const two = () => {
    if (gec === false) {
      setGec(true);
    }
  };
  const one = () => {
    if (gec === true) {
      setGec(false);
    }
  };

  const openHandler = () => {
    if (open === false) {
      setOpen(true);
    }
  };
  const closeHandler = () => {
    if (open === true) {
      setOpen(false);
    }
  };

  const volumeHandler = (e) => {
    setVol(e.target.valueAsNumber);
    setText(vol);
  };
  const volu = vol / 100;

  const keyClick = (event, texti) => {
    document.getElementById(event).play();
    document.getElementById(event).volume = volu;
    setText(texti);
  };

  const keyDown = (e) => {
    const key = e.key.toUpperCase();
    if (key === "Q") {
      if (gec) {
        setText("Heater 1");
      }
      if (!gec) {
        setText("Chord 1");
      }
    }
    if (key === "W") {
      if (gec) {
        setText("Heater 2");
      }
      if (!gec) {
        setText("Chord 2");
      }
    }
    if (key === "E") {
      if (gec) {
        setText("Heater 3");
      }
      if (!gec) {
        setText("Chord 3");
      }
    }
    if (key === "A") {
      if (gec) {
        setText("Heater 4");
      }
      if (!gec) {
        setText("Shaker");
      }
    }
    if (key === "S") {
      if (gec) {
        setText("Clap");
      }
      if (!gec) {
        setText("Open HH");
      }
    }
    if (key === "D") {
      if (gec) {
        setText("Open HH");
      }
      if (!gec) {
        setText("Closed HH");
      }
    }
    if (key === "Z") {
      if (gec) {
        setText("Kick n' Hat");
      }
      if (!gec) {
        setText("Punchy Kick");
      }
    }
    if (key === "X") {
      if (gec) {
        setText("Kick");
      }
      if (!gec) {
        setText("Side Stick");
      }
    }
    if (key === "C") {
      if (gec) {
        setText("Closed HH");
      }
      if (!gec) {
        setText("Snare");
      }
    }
    if ("QWEASDZXC".includes(key)) {
      document.getElementById(key).play();
      document.getElementById(key).volume = volu;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keyDown);
  }, [keyDown]);

  return (
    <div className="App">
      <div id="drum-machine">
        <div className="genel" id="display">
          <div className="tuslar">
            {open &&
              gec &&
              drumItems.map((drumItem) => (
                <button
                  key={drumItem.audioId}
                  id={drumItem.buttonId}
                  className={"drum-pad"}
                  onClick={() => keyClick(drumItem.audioId, drumItem.buttonId)}
                >
                  {drumItem.buttonText}
                  <audio
                    id={drumItem.audioId}
                    src={drumItem.audioSound}
                    className={drumItem.audioClass}
                  ></audio>
                </button>
              ))}
            {open &&
              !gec &&
              drumItems2.map((drumItem) => (
                <button
                  key={drumItem.audioId}
                  id={drumItem.buttonId}
                  className={"drum-pad"}
                  onKeyDown={keyDown}
                  onClick={() => keyClick(drumItem.audioId, drumItem.buttonId)}
                >
                  {drumItem.buttonText}
                  <audio
                    id={drumItem.audioId}
                    src={drumItem.audioSound}
                    className={drumItem.audioClass}
                  ></audio>
                </button>
              ))}
            {!open &&
              drumItems.map((drumItem) => (
                <button key={drumItem.audioId} className={"drum-pad"}>
                  {drumItem.buttonText}
                  <audio
                    src={drumItem.audioSound}
                    className={drumItem.audioClass}
                  ></audio>
                </button>
              ))}
          </div>

          <div className="controls">
            <h5 className="pow">Power</h5>
            <div className="power">
              <button
                className="power1"
                onClick={openHandler}
                style={{ backgroundColor: open ? "black" : "blue" }}
              ></button>
              <button
                className="power2"
                onClick={closeHandler}
                style={{ backgroundColor: open ? "blue" : "black" }}
              ></button>
            </div>

            <div className="names">
              <h5 className="name">{text}</h5>
            </div>
            <div className="slide">
              <input
                type="range"
                id="volume"
                name="volume"
                min="0"
                max="100"
                step="1"
                onChange={volumeHandler}
              />
            </div>
            <h5 className="ban">Bank</h5>
            <div className="bank">
              <button
                className="bank1"
                onClick={two}
                style={{ backgroundColor: gec ? "blue" : "black" }}
              ></button>
              <button
                className="bank2"
                onClick={one}
                style={{ backgroundColor: gec ? "black" : "blue" }}
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;