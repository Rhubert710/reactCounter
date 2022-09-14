


const StarRow = ({ count }) => {

    return (

        <div id="score_imgs_div">
        
            {Array.from({length: count}, () => <img src="https://cdn-icons-png.flaticon.com/512/109/109742.png" class="star-img"></img>)}
        
        </div>
    );
};
  
  export default StarRow;