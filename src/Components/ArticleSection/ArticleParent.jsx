import ArticleChild from "./ArticleChild";


const ArticleParent = () => {

    const arrayExample = [1,2,3,4]

    const mockData = [{name:'steve', age:31}, {name:'mike', age:35}, {name:'eric', age:41}, {name:'dan', age:21}]

    console.log(arrayExample)

    return (
        <div className="articleParent">
            {mockData.map((el,index)=> {
                return (
                <ArticleChild key={index} age={el.age} name={el.name}/>    
                )
            })}
            
        </div>
    )
}

export default ArticleParent;