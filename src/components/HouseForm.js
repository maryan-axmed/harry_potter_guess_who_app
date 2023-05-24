const input = document.getElementsByName("house");

const HouseForm = ({handleFormValidation}) => {
    // get input value
    


    return ( 
        <>
            <h2>Enter your house: </h2>
            <input 
                name="house"
                type="text"
                placeholder="Enter your house..."
                />
            <button onClick={handleFormValidation}>Enter</button>
        </>
     );
}
 
export default HouseForm;