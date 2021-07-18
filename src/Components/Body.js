import { useState } from "react";
import BodyText from './InnerComp/BodyText.js'
function Body(){

const [data, setData] = useState([]);

 fetch('https://jsonplaceholder.typicode.com/users/1/todos')
 .then(response => response.json())
 .then(json => {    
  setData(json);
 })
    

    return (
        <div>   
          <table className="table">
            <tr>
              <th> Id               
              </th>
              <th>  Title             
              </th>
              <th>  Status              
              </th>
            </tr>
            <tbody>
            {data.map((record) => (
              <BodyText {...record}/>
            ))}    
            </tbody>
            </table>    
        </div>
    )
}

export default Body;