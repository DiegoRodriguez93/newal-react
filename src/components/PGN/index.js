import React, { useLayoutEffect } from 'react'

export default function PGN() {
    var pgn = "1. f4 e6 2. g4 Qh4#";
    var board = window.PGNV/* .pgnView('board', {pgn: pgn, theme: 'blue'}); */
/*     document.addEventListener("DOMContentLoaded", function(event) { 
        var start = board.pgnView('board', {pgn: pgn});
        // your code
      }); */

      var w = window,
      d = document,
      documentElement = d.documentElement,
      body = d.getElementsByTagName('body')[0],
      width = w.innerWidth || documentElement.clientWidth || body.clientWidth;

      useLayoutEffect(()=>{
        /* var start = */ board.pgnView('board', {pgn: pgn});
      },[])

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                <div id="board" style={{height: width < 430 ? 400 : ((width / 3) + 100) ,width: width < 430 ? 300 : (width / 3)  }}></div>
                </div>  
            </div>
        </div>
       
    )
}
