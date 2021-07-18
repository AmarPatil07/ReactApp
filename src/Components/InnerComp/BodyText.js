function BodyText({id,title,completed}){
    let header = '';   
    header = completed ? <h1>Hello {title}</h1> : '';
return (  
    <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td style={{color : completed ? 'red' : 'blue'}}> {completed && (<div>completed</div>)}
        {!completed && (<div>Pending</div>) }  
        </td>
    </tr>
)
}

export default BodyText