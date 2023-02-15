import React from "react";
import passwordGenerator from "../../assets/small/passwordGenerator.png";
import weatherApp from "../../assets/small/weatherApp.png";
import javaScriptQuiz from "../../assets/small/javaScriptQuiz.png";
import noteTakerImage from "../../assets/small/NoteTaker.png";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Work</h2>
        </div>
        
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://mer2022.github.io/Password-Generator/">
                {" "}
                <img
                  src={passwordGenerator}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Twilight_Ristorante"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Password Generator</h4>
              <p>
                An application to generate password for your needs.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://mer2022.github.io/JavaScript-Quiz/">
                {" "}
                <img
                  src={javaScriptQuiz}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="javaScriptQuiz"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Javascript Quiz</h4>
              <p>
                An application that provides a javascript quiz for practice.{" "}
              </p>
            </div>
          </div>
        </div>


        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="">
                {" "}
                <img
                  src={noteTakerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Note_Taker"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Note Taker</h4>
              <p>
                An application that provides the user the ability to add new
                notes, and to delete notes.{" "}
              </p>
            </div>
          </div>
        </div>


        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://mer2022.github.io/Weather-app/">
                {" "}
                <img
                  src={weatherApp}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="WeatherApp"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Weather Dashboard</h4>
              <p>
                A website that allows the user see the weather outlook for
                multiple cities. The user can enter a city and see a 5-Day
                Forecast. The user can see the temperature, humidity levels,
                wind speed as well as the UV index.{" "}
              </p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Portfolio;
