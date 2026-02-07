import ProductDescription from "./ProductDescription";

export default function Card({products}) {
    // console.log(products)
    return(
        <div className="">
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 m-8">
                {products.map(el =>(
                    <div  key={el.id} className="flex flex-col items-center justify-around shadow bg-[#F4EEDE] w-full p-8">
                        <img className="max-h-60 max-w-full object-contain my-10" src={el.image} alt="" />
                        <div className="flex flex-col">
                            <h1 className="font-bold text-xl">{el.title}</h1>
                            <ProductDescription text={el.description}/>
                            <hr className="my-5"/>
                            <p>Price: {el.price} </p>
                        </div>
                    </div>
                ))}
            </div>
                {/* <pre>{JSON.stringify(products,null,2)}</pre> */}
        </div>
    )
}

