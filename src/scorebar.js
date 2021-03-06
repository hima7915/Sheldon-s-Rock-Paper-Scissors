import Multi from "./Assets/Multiplayer.png";
import Robot from "./Assets/Robot.png";
import Rock from "./Assets/Rock.png";
import Lizard from "./Assets/Lizard.png";
import Paper from "./Assets/Paper.png";
import Scissors from "./Assets/Scissors.png";
import Spock from "./Assets/Spock.png";
import { useState } from "react";
import { user, oppo } from "./App";
import {rounds} from "./slider";
var usrscore = 0;
var compscore = 0;

function Score() {

    const [choice, setChoice] = useState("");
    // function Reset(){
    //     return(
    //         setChoice(0)
    //     );
    // }
    var zee;
    if (choice === 1)
        zee = Spock;
    else if (choice === 2)
        zee = Rock;
    else if (choice === 3)
        zee = Paper;
    else if (choice === 4)
        zee = Scissors;
    else
        zee = Lizard;

    var cchoice = Math.floor(Math.random() * 5) + 1;
    var wee;
    if (cchoice === 1)
        wee = Spock;
    else if (cchoice === 2)
        wee = Rock;
    else if (cchoice === 3)
        wee = Paper;
    else if (cchoice === 4)
        wee = Scissors;
    else if (cchoice === 5)
        wee = Lizard;

    if ((choice === 1 && cchoice === 4) ||
        (choice === 3 && cchoice === 1) ||
        (choice === 1 && cchoice === 2) ||
        (choice === 5 && cchoice === 1) ||
        (choice === 2 && cchoice === 5) ||
        (choice === 4 && cchoice === 5) ||
        (choice === 5 && cchoice === 3) ||
        (choice === 2 && cchoice === 4) ||
        (choice === 3 && cchoice === 2) ||
        (choice === 4 && cchoice === 3))
        {usrscore = usrscore + 1;
            }
    else if ((cchoice === 1 && choice === 4) ||
        (cchoice === 3 && choice === 1) ||
        (cchoice === 1 && choice === 2) ||
        (cchoice === 5 && choice === 1) ||
        (cchoice === 2 && choice === 5) ||
        (cchoice === 4 && choice === 5) ||
        (cchoice === 5 && choice === 3) ||
        (cchoice === 2 && choice === 4) ||
        (cchoice === 3 && choice === 2) ||
        (cchoice === 4 && choice === 3))
        {compscore = compscore + 1;
        }
    else if(cchoice===choice)
    {
    compscore=compscore+0.5;
    usrscore=usrscore+0.5;
    }
    
    if(compscore+usrscore===rounds)
    {
        if(compscore>usrscore)
        {
        return(
            <div>
                <h1>You Lose!! Hehe Loser!</h1>
            </div>
        );
        }
        else if(usrscore>compscore)
        {
            return(
                <div>
                    <h1>Yeah you won. As if it matters.</h1>
                </div>
            );
        }
        else
        {
            return(
                <div>
                    <h1>It's a tie. You and your computer, both losers.</h1>
                </div>
            )
        }

    }

    return (
        <div>
            <div className="scorebox">
                <img className="Robo" src={Robot} alt="Robot"></img>
                <div className="userscore"><h2>{user}</h2><h2>{usrscore}</h2></div>
                <h2 className="vs">vs</h2>
                <div className="score"><h2>{oppo}</h2><h2>{compscore}</h2></div>
                <img className="Multi" src={Multi} alt="Icon"></img>
            </div>
            <div className="user">
                <button className="one" onClick={() => setChoice(1)}><img src={Spock} alt="Spock"></img></button>
                <button className="two" onClick={() => setChoice(2)}><img src={Rock} alt="Rock"></img></button>
                <button className="three" onClick={() => setChoice(3)}><img src={Paper} alt="Paper"></img></button>
                <button className="four" onClick={() => setChoice(4)}><img src={Scissors} alt="Scissors"></img></button>
                <button className="five" onClick={() => setChoice(5)}><img src={Lizard} alt="Lizard"></img></button>
                <img className="usrchoice" src={zee} alt="Choice"></img>
            </div>
            <div>
                <button className="cone"><img src={Spock} alt="Spock"></img></button>
                <button className="ctwo"><img src={Rock} alt="Rock"></img></button>
                <button className="cthree"><img src={Paper} alt="Paper"></img></button>
                <button className="cfour"><img src={Scissors} alt="Scissors"></img></button>
                <button className="cfive"><img src={Lizard} alt="Lizard"></img></button>
                <img className="compchoice" src={wee} alt="Choice"></img>
            </div>
        </div>
        
    );
}

export default Score;