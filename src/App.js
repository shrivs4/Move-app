import {Routes,Route, useNavigate} from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';
import AddMovies from './Components/AddMovies';
import Favorite from './Components/Favorite';
import './index.css';
import { useEffect, useState } from 'react';
import apiRequest from './apiRequest';
import LanguageFilterHome from './Components/LanguageFilterHome';

function App() {
  const URL = 'http://localhost:3500/Data';
  const [data,setData] = useState([]);
  const [refersh,SetReferesh] = useState("");
  const [search,SetSearch] = useState("");
  const [filterData,SetFilterData] = useState([]);
  const [watchListData,UpdateWatchList] = useState(['No Data to Display','Start Adding you Favorite Movie'])
  const navigation = useNavigate();
  const [name,UpdateName] = useState("");
  const [description,updateDescription] = useState("");
  const [cast,updateCast] = useState("");
  const [genre,UpdateGenre] = useState("");
  const [language,UpdateLanguage] = useState("");
  const [filterLanguage,setFilterLanguage] = useState("");
  const[languageData,SetLanguageData] = useState("");

  const reloadPage = () => {
    window.location.reload()
  }

const AddtoFav = async(id)=>{
// function handles the add favorite button 
// it is linked to the patch method of API
// whenver user clicks add to favoritre 
// it will change the object fav to true and vice versa
  const listItem = data.map((item)=> item.id === id?{...item,like:!item.like}:item);
  const myitem = listItem.filter((item) =>(item.id === id));
  const updateOption = {
    method:'PATCH',
    headers:{
        'Content-type': 'application/json'
    },
    body: JSON.stringify({like:myitem[0].like})
  }
  const newURL = `${URL}/${id}`
  await apiRequest(newURL,updateOption);
  navigation("/")
  reloadPage();
}

const addMovie = async(e)=>{
  // This function handles the post method and add a new item in the our back-end json file
  e.preventDefault();
  const id = data.length?data[data.length-1].id+1:1;
  SetReferesh("done");
  const itemobj = {id:id,name:name,description:description,cast:cast,genre:genre,language:language,"like":false}
  const postOptions = {
    method:'POST',
    headers:{
      'Content-type':'application/json'
    },
    body: JSON.stringify(itemobj)
  }
  await apiRequest(URL, postOptions)
  navigation("/")
  reloadPage();
}



useEffect(()=>{
  // this is the very first call when website loads basically GET method
  const getData = async ()=>{
    const response = await fetch(URL);
    if (!response.ok) throw Error('Please referesh the site');
    const JsonResponse = await response.json();
    setData(JsonResponse);
}
  getData();
},[]);

useEffect(()=>{
// this effetc trigger whenever use searchs anything
SetLanguageData([]);
const handleSubmit = ()=>{
  const newData = data.filter((item)=>(
    item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    ||item.genre.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  ))
  SetFilterData(newData);
}
handleSubmit();
},[data,search])

useEffect(()=>{
  // this effect trigger when there is a change in filter
  const handlefilter = ()=>{

    const newData = data.filter((item)=>(
      item.language.toLocaleLowerCase().includes(filterLanguage.toLocaleLowerCase())
    ))
    SetLanguageData(newData);
  }
  handlefilter();
  },[data,search,filterLanguage])

useEffect(()=>{
  // this effect handle the watch list page it will trigger when there is change in like state
  const newData = data.filter((item)=>item.like===true)
  UpdateWatchList(newData)
},[data])

  return (
      <Routes>
        <Route path='/' element = {<Layout
          title = {'MovieApp'}
          search = {search}
          SetSearch = {SetSearch}
          setFilterLanguage = {setFilterLanguage}
        />}>
        <Route index element = {filterLanguage.length?<LanguageFilterHome 
          data = {languageData}
          AddtoFav = {AddtoFav}
        />:<Home 
          data = {filterData}
          AddtoFav = {AddtoFav}
        />} />
        <Route path = '/movie' element = {<AddMovies 
          UpdateName = {UpdateName}
          updateDescription = {updateDescription}
          updateCast = {updateCast}
          UpdateGenre = {UpdateGenre}
          UpdateLanguage = {UpdateLanguage}
          addMovie = {addMovie}
        />} />
        <Route path = '/favorite' element = {<Favorite 
          UpdateWatchList = {UpdateWatchList}
          watchListData = {watchListData}
          AddtoFav = {AddtoFav}
        />} />
        </Route>
      </Routes>
  );
}

export default App;
