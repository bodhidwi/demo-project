import React from 'react'
const { useState } = React;

function Home() {
    const [myData, setMyData] = useState([]);
    const [find, setfind] = useState("bhodi");
    
    React.useEffect(() => {
        console.log("hahahahaah")
        getData(find)
    });
    const getData = p =>{
        fetch("https://api.github.com/search/users?q="+p+"&per_page=10")
      .then((response) => response.json())
      .then((response) => {
        if(response.incomplete_results==false){
            setMyData(response.items)
        }
      })
      .catch();
    }
    const search = (p) => {
        console.log(p.target.value)
        if(p.target.value!=""){
            setMyData([])
            setfind(p.target.value)
            getData(p.target.value)
        }
    }
  return (
    <div>
    <div style={{marginLeft:30, marginTop:30, padding:10,borderStyle:'none', borderRadius:5}}>
      <input style={{width:200}} onKeyDown={search} class="form-control form-control-lg" type="text" placeholder="search"/>
      </div>
      <div style={{marginLeft:30, marginRight:30, padding:10,borderStyle:'solid', borderRadius:5}}>
      <table class="table table-striped table-responsive">
      <thead>
        <tr>
            <th>Image</th>
            <th>User</th>
        </tr>
      </thead>
      <tbody>
        {myData.map((items)=>(
            <tr>
                <td><img className='rounded-circle' src={items.avatar_url} style={{height:30,width:30}}/></td>
                <td>{items.login}</td>
            </tr>
        ))}
      </tbody>
      </table>
      </div>
    </div>
  )
}

export default Home
