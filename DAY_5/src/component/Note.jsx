import API_DATA from "./data";

export default function Note({myData}){

  
    return(
        <div className="note">
          <div id="box">
          <h1>{myData.title} </h1>
          <p>{myData.content}</p>
          </div>
        </div>
    );
}