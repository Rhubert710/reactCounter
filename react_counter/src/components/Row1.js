


const Row1 = ({ count, setCount }) => {

    const remove = () => {
        if (count > 0) setCount(count - 1);
      };
    
      const add = () => {
        if(count < 5) setCount(count + 1);
      };

    return (

        <div id="row1">

            <button id="remove-star-button" onClick={remove}>Remove one</button>
            
            <div id="score_number_div">{count}</div>
            
            <button id="add-star-button" onClick={add}>Add one</button>
        
        </div>
    );
  };
  
  export default Row1;