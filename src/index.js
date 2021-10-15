import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import Select from 'react-select';
import './index.css';
import BackgroundImage from './Images/Background.png';

const PlotChoices = [
  {value: 1, label: "Total Population Size"},
  {value: 2, label: "Labour Force Size"},
  {value: 3, label: "Permanent Population Size"},
  {value: 4, label: "Mobile Population Size"},
  {value: 5, label: "Population Density"},
  {value: 6, label: "GDP"},
  {value: 7, label: "Per Capita Disposable Income"},
  {value: 8, label: "Government Revenue"},
  {value: 9, label: "Government Expenditure"},
  {value: 10, label: "Health Care Spending"},
  {value: 11, label: "Education Spending"},
  {value: 12, label: "Social Welfare Spending"},
  {value: 13, label: "Environmental Spending"},
  {value: 14, label: "Number of Hospitals"},
  {value: 15, label: "Number of Hospital Beds"},
  {value: 16, label: "Number of Hospital Staff"},
  {value: 17, label: "R&D Funding"},
  {value: 18, label: "R&D Personal & Patents Filed"},
  {value: 19, label: "External Trading Volume"},
  {value: 20, label: "Umployment Rate"}
]
const YearChoices = [
  {value: 2015, label: "2015"},
  {value: 2016, label: "2016"},
  {value: 2017, label: "2017"},
  {value: 2018, label: "2018"},
  {value: 2019, label: "2019"}
]

const PageLayout = () => {
  const [buttonClicks, setButtonClicks] = useState(0);
  const [showWidgit, setShowWidgit] = useState(false);

  const [buttonTab1, setButtonTab1] = useState(0);
  const PlotTab1 = useRef([]);
  const YearTab1 = useRef([]);
  const [image1Tab1, setImage1Tab1] = useState('');
  const [image2Tab1, setImage2Tab1] = useState('');
  const [image3Tab1, setImage3Tab1] = useState('');

  const [buttonTab2, setButtonTab2] = useState(0);
  const PlotTab2 = useRef([]);
  const YearTab2 = useRef([]);
  const [image1Tab2, setImage1Tab2] = useState('');
  const [image2Tab2, setImage2Tab2] = useState('');
  const [image3Tab2, setImage3Tab2] = useState('');

  useEffect(() => {
    setImage1Tab1(`https://gba-backend.jundeliu.com:8080/Page2Tab1/${PlotTab1.current.value}/${YearTab1.current.value}/1`);
    setImage2Tab1(`https://gba-backend.jundeliu.com:8080/Page2Tab1/${PlotTab1.current.value}/${YearTab1.current.value}/2`);
    setImage3Tab1(`https://gba-backend.jundeliu.com:8080/Page2Tab1/${PlotTab1.current.value}/${YearTab1.current.value}/3`);
  }, [buttonTab1])

  useEffect(() => {
    setImage1Tab2(`https://gba-backend.jundeliu.com:8080/Page2Tab2/${PlotTab2.current.value}/${YearTab2.current.value}/1`);
    setImage2Tab2(`https://gba-backend.jundeliu.com:8080/Page2Tab2/${PlotTab2.current.value}/${YearTab2.current.value}/2`);
    setImage3Tab2(`https://gba-backend.jundeliu.com:8080/Page2Tab2/${PlotTab2.current.value}/${YearTab2.current.value}/3`);
  }, [buttonTab2])

  const MainTitle = () => {
    return(
      <div className="main-title-div text-center text-5xl mx-36 py-6 px-10 shadow-3xl rounded-2xl bg-sky-300 bg-opacity-80 text-blueGray-800 hover:bg-rose-400 hover:text-blueGray-100 transition duration-1000">
        Part Two &nbsp;&nbsp;&nbsp;&nbsp; Data Mapping
      </div>
    )
  }
  const IntroParagraph = () => {
    return(
      <div className="intro-paragraph-div text-center text-3xl mx-48 px-24 py-10 leading-loose rounded-3xl shadow-3xl bg-blueGray-700 bg-opacity-40 text-coolGray-200 hover:bg-sky-300 hover:text-coolGray-900 transition duration-1000">
        Compiled from the annual statistics digests of the 11 GBA cities, our data covers various aspects including population, GDP, government revenue, education, social welfare spending etc. Given the variety of the variables, we deem that it is only appropriate to present the data by utilizing interactive data mapping technologies power by R, which maximize the information that can be drawn from the analysis. Click on the "Show Widgit" button below to proceed to the data mapping tool. When the widgit is successfully loaded, use the selectors on the left to choose which variable to plot as well as which year's data to use, before clicking on the "Generate Map" button to show the map. Also, you can toggle between the "Choropleth Map" and the "Bubble Map" tab to switch between different map types.
      </div>
    )
  }

  const Tab1 = () => {
    return(
      <div className="grid grid-cols-4 gap-0">
        <div className="p-4 mx-6 rounded-3xl leading-loose text-2xl text-warmGray-200 shadow-3xl bg-blueGray-800 bg-opacity-60">
          Specify the parameters for the maps :
          <br></br>
          1. Choose which plot to see :
          <Select onChange={inputValue => {PlotTab1.current = inputValue}} options={PlotChoices} placeholder="Select Plot" className="w-80 rounded-3xl my-6 mx-4 text-xl text-warmGray-800" closeMenuOnSelect={true} />
          <br></br>
          2. Choose which year of data to use for mapping :
          <Select onChange={inputValue => {YearTab1.current = inputValue}} options={YearChoices} placeholder="Select Year" className="w-80 rounded-3xl shadow-3xl my-6 mx-4 text-xl text-warmGray-800" closeMenuOnSelect={true} />
          <br></br>
          <button type="button" onClick={() => {setButtonTab1(buttonTab1 + 1);}} className="w-48 transition duration-1000 bg-rose-600 text-gray-100 hover:bg-green-300 hover:text-gray-800 px-4 py-2 mx-16 my-2 rounded-2xl text-2xl">Generate Plot</button>
        </div>
        <div className="col-span-3 mx-24">
          <div className="mt-8 mb-8 shadow-3xl rounded-3xl bg-purple-900 bg-opacity-50 p-0 w-full">
            <img src={image1Tab1} onError={(event) => event.target.style.display = 'none'}></img>
          </div>
          <div className="mt-16 mb-8 shadow-3xl rounded-3xl bg-purple-900 bg-opacity-50 p-0 w-full">
            <img src={image2Tab1} onError={(event) => event.target.style.display = 'none'}></img>
          </div>
          <div className="mt-16 mb-8 shadow-3xl rounded-3xl bg-purple-900 bg-opacity-50 p-0 w-full">
            <img src={image3Tab1} onError={(event) => event.target.style.display = 'none'}></img>
          </div>
        </div>
      </div>
    )
  }

  const Tab2 = () => {
    return(
      <div className="grid grid-cols-4 gap-0">
        <div className="p-4 mx-6 rounded-3xl leading-loose text-2xl text-warmGray-200 shadow-3xl bg-blueGray-800 bg-opacity-60">
          Specify the parameters for the plot :
          <br></br>
          1. Choose which plot to see :
          <Select onChange={inputValue => {PlotTab2.current = inputValue}} options={PlotChoices} placeholder="Select Plot" className="w-80 rounded-3xl my-6 mx-4 text-xl text-warmGray-800" closeMenuOnSelect={true} />
          <br></br>
          2. Choose which year of data to use for mapping :
          <Select onChange={inputValue => {YearTab2.current = inputValue}} options={YearChoices} placeholder="Select Year" className="w-80 rounded-3xl shadow-3xl my-6 mx-4 text-xl text-warmGray-800" closeMenuOnSelect={true} />
          <br></br>
          <button type="button" onClick={() => {setButtonTab2(buttonTab2 + 1);}} className="w-48 transition duration-1000 bg-rose-600 text-gray-100 hover:bg-green-300 hover:text-gray-800 px-4 py-2 mx-16 my-2 rounded-2xl text-2xl">Generate Plot</button>
        </div>
        <div className="col-span-3 mx-24">
          <div className="mt-8 mb-8 shadow-3xl rounded-3xl bg-purple-900 bg-opacity-50 p-0 w-full">
            <img src={image1Tab2} onError={(event) => event.target.style.display = 'none'}></img>
          </div>
          <div className="mt-16 mb-8 shadow-3xl rounded-3xl bg-purple-900 bg-opacity-50 p-0 w-full">
            <img src={image2Tab2} onError={(event) => event.target.style.display = 'none'}></img>
          </div>
          <div className="mt-16 mb-8 shadow-3xl rounded-3xl bg-purple-900 bg-opacity-50 p-0 w-full">
            <img src={image3Tab2} onError={(event) => event.target.style.display = 'none'}></img>
          </div>
        </div>
      </div>
    )
  }

  const routes = [
    {path: "/tab1", name: "Tab1", Component: Tab1},
    {path: "/tab2", name: "Tab2", Component: Tab2}
  ]

  return(
    <div className="container-2xl w-screen h-xl bg-contain" style={{backgroundImage: `url(${BackgroundImage})`}}>
      <CSSTransition in={buttonClicks<1} appear={true} timeout={700} onExited={() => {setShowWidgit(true);}} classNames="main-title" unmountOnExit>
        <MainTitle />
      </CSSTransition>
      <CSSTransition in={buttonClicks<1} appear={true} timeout={700} onExited={() => {setShowWidgit(true);}} classNames="intro-paragraph" unmountOnExit>
        <IntroParagraph />
      </CSSTransition>
      <CSSTransition in={buttonClicks<1} appear={true} timeout={700} onExited={() => {setShowWidgit(true);}} classNames="main-button" unmountOnExit>
        <div>
          <button type="button" className="main-button-div bg-opacity-80 rounded-xl p-6 text-2xl bg-rose-600 text-gray-100 z-50 hover:bg-gray-100 hover:text-gray-600 shadow-3xl transition duration-1000 font-bold" onClick={()=>{setButtonClicks(buttonClicks + 1);}}>Proceed to the Widget</button>
          <div className="main-button-ring ring-2 rounded-xl p-6 text-2xl ring-rose-600 text-transparent z-40">Proceed to the Widget</div>
        </div>
      </CSSTransition>
      <CSSTransition in={showWidgit} timeout={500} classNames="main-widget" unmountOnExit>
        <div>
          <div>
            <NavLink to="/tab1" exact className="link-1 bg-blueGray-700 bg-opacity-60 text-coolGray-200 hover:bg-yellow-200 hover:text-blueGray-900 transition duration-1000 rounded-3xl shadow-3xl text-3xl px-8 py-2" activeStyle={{fontWeight: "bold", backgroundColor: "#A21CAF"}}>Choropleth Map</NavLink>
            <NavLink to="/tab2" exact className="link-2 bg-blueGray-700 bg-opacity-60 text-coolGray-200 hover:bg-yellow-200 hover:text-blueGray-900 transition duration-1000 rounded-3xl shadow-3xl text-3xl px-8 py-2" activeStyle={{fontWeight: "bold", backgroundColor: "#A21CAF"}}>Bubble Map</NavLink>
          </div>
          <div>
            {routes.map(({ path, Component }) => (
              <Route key={path} exact path={path}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={700}
                    classNames="page"
                    unmountOnExit
                  >
                    <div className="page">
                      <Component />
                    </div>
                  </CSSTransition>
                )}
              </Route>
            ))}
          </div>
        </div>
      </CSSTransition>
    </div>
  )
}

ReactDOM.render(
  <Router>
    <PageLayout />
  </Router>,
  document.getElementById('root')
);