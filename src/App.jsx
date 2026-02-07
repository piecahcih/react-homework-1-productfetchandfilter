import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Card';

function App() {
  const [products, setProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(null);

  useEffect(()=>{
    const getProducts = ()=>{
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data =>{ setProducts(data);
      setDisplayProducts(data);
    })
    .catch(err => setError(err));
    }
    
    getProducts()
  },[])


  useEffect(()=>{
    let filtered = products;
    if (activeCategory !== "All"){
      filtered = filtered.filter(el => el.category === activeCategory)
    }
    if (searchText){
      filtered = filtered.filter(el => el.title.toLowerCase().includes(searchText.toLowerCase()))
    }
    setDisplayProducts(filtered);
  }, [searchText, activeCategory, products])


  const btnList = products.map(el => el.category)
  // console.log(btnList)
  const btnList2 = [...new Set(btnList)]
  const hdlAll = ()=>{
    setActiveCategory("All")
    setDisplayProducts(products)
  }
  const hdlEach = (e)=>{
    const categoryName = e.target.textContent;
    setActiveCategory(categoryName)
    const result = products.filter( el => el.category === categoryName)
    // console.log(result)
    setDisplayProducts(result)
  }


  return (
    <div className='bg-[#fffdf0] h-screen font-mono p-12'>

      <div className='flex items-center justify-between my-2'>
        <h1 className='font-black text-4xl'>Products Fetch & Filter</h1>
        <input value={searchText} onChange={e=>setSearchText(e.target.value)}
        className='border-1 w-120 h-8 px-5' placeholder='search here...'/>
      </div>

      <hr/>

      <div className="flex justify-between items-center ">
        <h2><span className='font-semibold'>Current Category:</span> {activeCategory}<br/><span className='font-semibold'>Amount:</span> {displayProducts.length} </h2>
        <div className='flex gap-6 my-5'>
          {btnList2.map(el => <button key={el} onClick={hdlEach} 
            className='bg-[#847e72] text-white px-4 hover:bg-black'>
            {el}</button>)}
          <button onClick={hdlAll} className='bg-[#847e72] text-white px-4 hover:bg-black'>All</button>
        </div>
      </div>


      <Card products={displayProducts}/>
      {/* <pre>{JSON.stringify(products,null,2)}</pre> */}
    </div>
  )
}

export default App
