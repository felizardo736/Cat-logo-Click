import './HomePage.css'

function HomePage(props) {
    const categoryList = [
        {name:"iPhone", img:require("../../assets/img/iphone.png")},
        {name:"Macbook", img:require("../../assets/img/macbook.png")},
        {name:"AppleWatch", img:require("../../assets/img/applewatch.png")},
        {name:"iPad", img:require("../../assets/img/ipad.png")},
        {name:"AirPods", img:require("../../assets/img/airpods.png")}
    ]

    return(
        <div className='content'>
            {
                categoryList.map(category => 
                    <div className='card'>
                        <img className='imgCard' src={category.img} alt='' width={100} height={100}/>
                        <h2 className='name0'>{category.name}</h2>
                    </div>
                )
            }
               
        </div>
    )
}
export default HomePage